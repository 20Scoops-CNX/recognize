// @flow

import type { ACTION } from './helpers';
import rekoginition from '../service/aws';

export type foundImageAction = ACTION<{ image: string }>;

export type resetFoundImageAction = ACTION<null>;

export const FOUND_IMAGE = 'FOUND_IMAGE';

export const RESET_FOUND_IMAGE = 'RESET_FOUND_IMAGE';

export const foundImage = (base64Image: string): foundImageAction => (
  dispatch,
  getState
) => {
  const { foundImage: foundImageState } = getState();
  if (!foundImageState.isShow) {
    return rekoginition(base64Image).then(image => {
      dispatch({
        type: FOUND_IMAGE,
        payload: {
          image
        }
      });
    });
  }
  return null;
};

export const resetFoundImage = (): resetFoundImageAction => ({
  type: RESET_FOUND_IMAGE
});
