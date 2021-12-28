import React from 'react';
import PropTypes from 'prop-types';
import './cardFolder.css';
import Button from '../Button';
import Icon from '@mdi/react'
import { mdiFolder, mdiPin, mdiInformation } from '@mdi/js';

const CardFolder = ({ title, hasEllipsisIcon, badge, hover, status, imageUrl }) => {
  const ellipsisIcon = hasEllipsisIcon ? <Button label='' iconName='mdiDotsVertical' status='secondary' appearance='ghost' /> : '';
  const isHover = hover ? 'card-folder-hover' : '';

  return (
    <div className={['card-folder', isHover].join(' ')}>
      <div className='card-folder-header'>
        <Icon path={mdiPin} color='purple' size={1} />
        <Icon path={mdiInformation} color='orange' size={1} />
      </div>
      <div className='card-folder-image-container'>
        <Icon path={mdiFolder} size={4} />
      </div>
      <div className='card-folder-body'>
        <p>{title}</p>
      </div>
      <div className='card-folder-footer'>
        <div className='card-folder-footer-icon-container'>
          {ellipsisIcon}
        </div>
      </div>
    </div>
  )
}

CardFolder.propTypes = {
  hasBookmarkIcon: PropTypes.bool,
  hasEllipsisIcon: PropTypes.bool,
  hover: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

CardFolder.defaultProps = {
  hasEllipsisIcon: true,
  hover: false,
  onClick: undefined,
  title: 'Study Drug Safety & Efficacy Data Sheet US - Approved'
};

export default CardFolder;