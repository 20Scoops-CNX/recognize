// @flow

import { AWS_ACTION } from '../actions/aws';
import type { foundImageAction } from '../actions/aws';

type awsReducer = {
  isLoading: boolean
};

const initialState = {
  isLoading: false
};

export default (
  state: awsReducer = initialState,
  { type }: foundImageAction
): awsReducer => {
  switch (type) {
    case AWS_ACTION.REQUEST:
      return {
        isLoading: true
      };
    case AWS_ACTION.SUCCESS:
      return {
        isLoading: false
      };
    case AWS_ACTION.FAIL:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};
