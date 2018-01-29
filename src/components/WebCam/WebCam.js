// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { foundImage as foundImageActionCreator } from './../../actions/foundImage';

class WebCam extends React.Component<{
  recognizeImage: (image: string) => void
}> {
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
            window.requestAnimationFrame(
              this.drawVideo(ctx, tracker, videoRef)
            );
          });
          videoRef.play();
        }
        tracker.on('track', event => {
          if (event.data.length !== 0 && canvasRef) {
            const base64Image = canvasRef.toDataURL('image/jpeg');
            this.props.recognizeImage(base64Image);
          }
        });
      },
      () => {}
    );
  }
  canvasRef: ?HTMLCanvasElement;
  count: number = 0;
  drawVideo(
    ctx: CanvasRenderingContext2D,
    tracker: any,
    videoRef: HTMLVideoElement
  ) {
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

const mapStateToProps = state => {
  console.log('state', state);
  return {
    isShow: state.foundImage.isShow
  };
};

const mapDispatchToProps = dispatch => ({
  recognizeImage: (base64Image: string) => {
    dispatch(foundImageActionCreator(base64Image));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WebCam);
