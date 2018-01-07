// @flow

export function dataURItoBlob(dataURI: string): Uint8Array {
  const binary = atob(dataURI.split(',')[1]);
  let array = [];
  for(var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Uint8Array(array);
}
