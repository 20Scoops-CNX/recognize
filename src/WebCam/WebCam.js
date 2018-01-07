import React, { Component } from 'react';
import { dataURItoBlob } from './dataURItoBlob';

class WebCam extends Component{
  

  componentDidMount(){
    navigator.getUserMedia({video: true, audio: false}, (localMediaStream) => {
      const tracker = new window.tracking.ObjectTracker('face');
      this.videoRef.src = window.URL.createObjectURL(localMediaStream);
      const ctx = this.canvasRef.getContext('2d');
      let i = 0;
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);
      this.videoRef.addEventListener('play', () => {
        if (this.videoRef.paused || this.videoRef.ended) {
          return;
        }
        const drawVideo = () => {
          ctx.drawImage(this.videoRef, 0, 0, 500, 400);
          i += 1;
          if(i % 40 === 0){
            tracker.track(ctx.getImageData(0,0, 500, 400).data, 500, 400);
          }
          window.requestAnimationFrame(drawVideo);
        };
        window.requestAnimationFrame(drawVideo);
        
      });
      this.videoRef.play();
      tracker.on('track', (event) => {
        if (event.data.length !== 0) {
          const base64Image = this.canvasRef.toDataURL("image/jpeg");
          console.log(window.AWS, 'window.AWS');
          const rekognition = new window.AWS.Rekognition();
          console.log('rekognition', rekognition);
          rekognition.searchFacesByImage({
            CollectionId:"123456789",
            Image:{
              Bytes: dataURItoBlob(base64Image)
            }
          }, function (err, data) {
            if (err) console.log(err, err.stack);
            else console.log(data);
          });
        }
      });
    }, () => {});
  }

  constructor(props){
    super(props);
  }
  
  render(){
    console.log('test');
    return (
      <section>
        <video id="video" width={500} height={400} autoPlay ref={(video) => { this.videoRef = video }} ></video>
        <canvas width={500} height={400} ref={(canvas) => { this.canvasRef = canvas }} ></canvas>
      </section>
    );
  }
};

export default WebCam;
