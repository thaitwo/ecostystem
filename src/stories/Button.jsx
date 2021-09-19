import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ status, size, label, appearance, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const mode = `storybook-button--${status}`;
  const app = `storybook-button--${status}-${appearance}`;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, app].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  status: PropTypes.oneOf(['primary', 'secondary', 'basic', 'success', 'warning', 'danger']),
  appearance: PropTypes.oneOf(['filled', 'outline', 'ghost']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  status: 'primary',
  label: 'Button',
  // primary: true,
  appearance: 'filled',
  size: 'medium',
  onClick: undefined,
};
