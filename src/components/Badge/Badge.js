import React from 'react';
import PropTypes from 'prop-types';
import './badge.css';

/**
 * Primary UI component for user interaction
 */
const Badge = ({ status, size, label, ...props }) => {
  const mode = `storybook-badge--${status}`;
  return (
    <span
      className={['storybook-badge', `storybook-badge--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </span>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  status: PropTypes.oneOf(['basic', 'success', 'warning', 'danger']).isRequired,
};

Badge.defaultProps = {
  label: 'Badge',
  size: 'small',
  status: 'basic'
};

export default Badge;