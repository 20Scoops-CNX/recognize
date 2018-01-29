// @flow

import type { ACTION } from './helpers';
import rekoginition from '../service/aws';
import { awsRequest, awsSuccess, awsFail } from './aws';

export type foundImageAction = ACTION<{ image: string }>;

export type resetFoundImageAction = ACTION<null>;

export const FOUND_IMAGE = 'FOUND_IMAGE';

export const RESET_FOUND_IMAGE = 'RESET_FOUND_IMAGE';

export const foundImage = (base64Image: string): foundImageAction => (
  dispatch,
  getState
) => {
  const { foundImage: foundImageState, aws: awsState } = getState();
  console.log('awsState', awsState);
  if (!foundImageState.isShow && !awsState.isLoading) {
    dispatch(awsRequest());
    return rekoginition(base64Image, () => dispatch(awsSuccess())).then(
      image => {
        dispatch({
          type: FOUND_IMAGE,
          payload: {
            image
          }
        });
      },
      () => {
        dispatch(awsFail());
      }
    );
  }
  return null;
};

export const resetFoundImage = (): resetFoundImageAction => ({
  type: RESET_FOUND_IMAGE
});
