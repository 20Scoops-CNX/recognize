// @flow

export default (dataURI: string): Uint8Array => {
  const binary = atob(dataURI.split(',')[1]);
  const array = [];
  for (let i = 0; i < binary.length; i += 1) {
    array.push(binary.charCodeAt(i));
  }
  return new Uint8Array(array);
};
