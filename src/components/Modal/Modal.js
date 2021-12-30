import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './modal.css';


const Modal = ({ title, cta, hasExitIcon, hasCancelBtn, bodyText, size }) => {
  const displayExitIcon = hasExitIcon ? <Button label='' status='basic' appearance='ghost' iconName='mdiClose' /> : '';
  const displayCancelBtn = hasCancelBtn ? <Button label='Cancel' status='basic' appearance='outline' /> : '';

  return (
    <div className={['modal', `modal--${size}`].join(' ')}>
      <div className='modal-header'>
        <h4>{title}</h4>
        {displayExitIcon}
      </div>
      <div className='modal-body'>
        <p>The Beacon platform is optimized to enhance the medical and scientific dialogue between field medical professionals and critical industry stakeholders.</p>
      </div>
      <div className='modal-footer'>
        {displayCancelBtn}
        <Button label={cta} status='primary' />
      </div>
    </div>
  )
}

Modal.propTypes = {
  cta: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.string.isRequired
}

Modal.defaultProps = {
  cta: 'Action',
  hasCancelBtn: true,
  hasExitIcon: true,
  size: 'small',
  title: 'Modal header title'
}

export default Modal;