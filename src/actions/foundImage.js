// @flow

import type { ACTION } from './helpers';

export type foundImageAction = ACTION<{ image: string }>;

export const FOUND_IMAGE = 'FOUND_IMAGE';

export const foundImage = (image: string): foundImageAction => ({
  type: FOUND_IMAGE,
  payload: {
    image
  }
});
