// @flow
import dataURItoBlob from './dataURItoBlob';

const rekognition = new window.AWS.Rekognition();
const collectionId: string = '123456789';
export default (base64Image: string, onCallSuccess: () => void): Promise<any> =>
  new Promise((resolve, reject) => {
    rekognition.searchFacesByImage(
      {
        CollectionId: collectionId,
        Image: {
          Bytes: dataURItoBlob(base64Image)
        }
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          const { FaceMatches } = data;
          onCallSuccess();
          if (FaceMatches.length > 0) {
            resolve(FaceMatches[0].Face.ExternalImageId);
          }
        }
      }
    );
  });
