import React from 'react';
import PropTypes from 'prop-types';
import './badge.css';

/**
 * Primary UI component for user interaction
 */
const Badge = ({ status, size, label, appearance, ...props }) => {
  const mode = `storybook-badge--${status}`;
  const app = `storybook-badge--${status}-${appearance}`;
  return (
    <span
    className={['storybook-badge', `storybook-badge--${size}`, mode, app].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </span>
  );
};

export default Badge;