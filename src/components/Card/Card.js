import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Badge from '../Badge';
import Button from '../Button';

const Card = ({ title, hasBookmarkIcon, hasEllipsisIcon, badge, hover, status, imageUrl }) => {
  const bookmarkIcon = hasBookmarkIcon ? <Button icon='mdiDotsVertical' status='secondary' /> : '';
  const ellipsisIcon = hasEllipsisIcon ? <Button icon='mdiBookmarkOutline' status='secondary' /> : '';
  const isHover = hover ? 'card-hover' : '';

  return (
    <div className={['card', isHover].join(' ')}>
      <div className='card-image-container'>
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
        <div>
          {bookmarkIcon}
          {ellipsisIcon}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  hasBookmarkIcon: PropTypes.bool,
  hasEllipsisIcon: PropTypes.bool,
  hover: PropTypes.bool,
  status: PropTypes.oneOf(['primary', 'secondary', 'basic', 'success', 'warning', 'danger']),
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

Card.defaultProps = {
  hasBookmarkIcon: true,
  hasEllipsisIcon: true,
  hover: false,
  onClick: undefined,
  title: 'Study Drug Safety & Efficacy Data Sheet US - Approved'
};

export default Card;