// @flow

import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import {
  getFoundImageIsShow,
  getFoundImageUrl
} from '../../reducers/foundImage';
import { resetFoundImage as resetFoundImageAction } from '../../actions/foundImage';
import modalStyle from './modalStyle';

type Props = {
  image: string,
  isShow: boolean,
  resetFoundImage: () => void
};

const ShowImageModal = ({ image, isShow, resetFoundImage }: Props) => (
  <Modal
    isOpen={isShow}
    style={modalStyle}
    closeTimeoutMS={1500}
    onRequestClose={resetFoundImage}
  >
    <div
      className="overlay"
      onClick={resetFoundImage}
      onKeyPress={resetFoundImage}
      role="button"
      tabIndex={0}
    />
    <div className="content">
      {image ? (
        <img
          className="img-profile"
          src={image}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          alt="user found"
        />
      ) : null}
    </div>
  </Modal>
);

const mapStateToProps = state => ({
  image: getFoundImageUrl(state),
  isShow: getFoundImageIsShow(state)
});

const resetFoundImage = () => {
  console.log('close click', resetFoundImageAction());
  return resetFoundImageAction();
};

export default connect(mapStateToProps, {
  resetFoundImage
})(ShowImageModal);
