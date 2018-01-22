// @flow

import { FOUND_IMAGE } from '../actions/foundImage';
import type { foundImageAction } from '../actions/foundImage';

type foundImageReducer = {
  image: ?string,
  isShow: boolean
};

const initialState = {
  image: null,
  isShow: false
};

export default (
  state: foundImageReducer = initialState,
  { type, payload }: foundImageAction
): foundImageReducer => {
  switch (type) {
    case FOUND_IMAGE:
      return {
        image: `https://s3.amazonaws.com/elecweb/${payload.image}`,
        isShow: true
      };
    default:
      return state;
  }
};

export const getFoundImageUrl = (state: any): string => state.foundImage.image;

export const getFoundImageIsShow = (state: any): string =>
  state.foundImage.isShow;
