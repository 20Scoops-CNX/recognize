// @flow
import { dataURItoBlob } from './dataURItoBlob';

const rekognition = new window.AWS.Rekognition();
const collectionId: string = '123456789';
export const rekoginition = (base64Image: string) => {
  rekognition.searchFacesByImage({
    CollectionId: collectionId,
    Image:{
      Bytes: dataURItoBlob(base64Image)
    }
  }, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
};