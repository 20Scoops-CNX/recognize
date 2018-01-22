// @flow

import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import {
  getFoundImageIsShow,
  getFoundImageUrl
} from '../../reducers/foundImage';
import modalStyle from './modalStyle';

type Props = {
  image: string,
  isShow: boolean
};

const ShowImageModal = ({ image, isShow }: Props) => {
  console.log(isShow, image);
  return (
    <Modal isOpen={isShow} style={modalStyle}>
      <img
        src={image}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt="user"
      />
    </Modal>
  );
};

const mapStateToProps = state => ({
  image: getFoundImageUrl(state),
  isShow: getFoundImageIsShow(state)
});

export default connect(mapStateToProps)(ShowImageModal);
