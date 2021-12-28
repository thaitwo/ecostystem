import React from 'react';
import PropTypes from 'prop-types';
import './cardFile.css';
import Badge from '../Badge';
import Button from '../Button';

const CardFile = ({ title, hasBookmarkIcon, hasEllipsisIcon, badge, hover, status, imageUrl }) => {
  const bookmarkIcon = hasBookmarkIcon ? <Button label='' iconName='mdiBookmarkOutline' status='secondary' appearance='ghost' /> : '';
  const ellipsisIcon = hasEllipsisIcon ? <Button label='' iconName='mdiDotsVertical' status='secondary' appearance='ghost' /> : '';
  const isHover = hover ? 'card-hover' : '';

  return (
    <div className={['card', isHover].join(' ')}>
      <div className='card-image-container'>
        <Button label='' iconName='mdiPlay' status='secondary' appearance='outline' />
        <img src={imageUrl} className='card-image' />
      </div>
      <div className='card-body'>
        <p>{title}</p>
      </div>
      <div className='card-footer'>
        <Badge
          status='warning'
          label='ER'
        />
        <div className='card-footer-icon-container'>
          {bookmarkIcon}
          {ellipsisIcon}
        </div>
      </div>
    </div>
  )
}

CardFile.propTypes = {
  hasBookmarkIcon: PropTypes.bool,
  hasEllipsisIcon: PropTypes.bool,
  hover: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

CardFile.defaultProps = {
  hasBookmarkIcon: true,
  hasEllipsisIcon: true,
  hover: false,
  onClick: undefined,
  title: 'Study Drug Safety & Efficacy Data Sheet US - Approved'
};

export default CardFile;