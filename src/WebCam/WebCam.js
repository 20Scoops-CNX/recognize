// @flow

import * as React from 'react';
import rekoginition from './../service/aws';

class WebCam extends React.Component<{}> {
  componentDidMount() {
    window.navigator.getUserMedia(
      { video: true, audio: false },
      localMediaStream => {
        const tracker: any = new window.tracking.ObjectTracker('face');
        const { videoRef, canvasRef } = this;
        if (canvasRef && videoRef) {
          videoRef.src = window.URL.createObjectURL(localMediaStream);
          const ctx = canvasRef.getContext('2d');
          tracker.setInitialScale(4);
          tracker.setStepSize(2);
          tracker.setEdgesDensity(0.1);
          videoRef.addEventListener('play', () => {
            if (videoRef.paused || videoRef.ended) {
              return;
            }
            window.requestAnimationFrame(this.drawVideo(ctx, tracker, videoRef));
          });
          videoRef.play();
        }

        tracker.on('track', event => {
          if (event.data.length !== 0 && canvasRef) {
            const base64Image = canvasRef.toDataURL('image/jpeg');
            rekoginition(base64Image);
          }
        });
      },
      () => {}
    );
  }
  canvasRef: ?HTMLCanvasElement;
  count: number = 0;
  drawVideo(ctx: CanvasRenderingContext2D, tracker: any, videoRef: HTMLVideoElement) {
    return () => {
      ctx.drawImage(videoRef, 0, 0, 500, 400);
      this.count += 1;
      if (this.count % 20 === 0) {
        tracker.track(ctx.getImageData(0, 0, 500, 400).data, 500, 400);
      }
      window.requestAnimationFrame(this.drawVideo(ctx, tracker, videoRef));
    };
  }
  videoRef: ?HTMLVideoElement;
  render() {
    return (
      <section>
        <video
          id="video"
          width={500}
          height={400}
          autoPlay
          ref={video => {
            this.videoRef = video;
          }}
        />
        <canvas
          style={{ display: 'none' }}
          width={500}
          height={400}
          ref={canvas => {
            this.canvasRef = canvas;
          }}
        />
      </section>
    );
  }
}

export default WebCam;
