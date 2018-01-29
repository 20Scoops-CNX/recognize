// @flow

import type { ACTION } from '../actions/helpers';

export type foundImageAction = ACTION<null>;

export const AWS_ACTION = {
  REQUEST: 'AWS_ACTION_REQUEST',
  SUCCESS: 'AWS_ACTION_SUCCESS',
  FAIL: 'AWS_ACTION_FAIL'
};

export const awsRequest = (): foundImageAction => ({
  type: AWS_ACTION.REQUEST
});

export const awsFail = (): foundImageAction => ({
  type: AWS_ACTION.FAIL
});

export const awsSuccess = (): foundImageAction => ({
  type: AWS_ACTION.SUCCESS
});
