// @flow

import type { ACTION } from './helpers';

export type foundImageAction = ACTION<{ image: string }>;

export type resetFoundImageAction = ACTION<null>;

export const FOUND_IMAGE = 'FOUND_IMAGE';

export const RESET_FOUND_IMAGE = 'RESET_FOUND_IMAGE';

export const foundImage = (image: string): foundImageAction => ({
  type: FOUND_IMAGE,
  payload: {
    image
  }
});

export const resetFoundImage = (): resetFoundImageAction => ({
  type: RESET_FOUND_IMAGE
});
