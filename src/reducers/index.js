import { combineReducers } from 'redux';

import foundImage from './foundImage';
import aws from './aws';

export default combineReducers({
  foundImage,
  aws
});
