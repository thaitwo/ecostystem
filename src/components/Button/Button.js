import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

import Icon from '@mdi/react'
import * as MatIcons from '@mdi/js';

/**
 * Primary UI component for user interaction
 */
const Button = ({ status, iconName, size, label, appearance, ...props }) => {
  let checkLabel = false;
  if (/\S/.test(label)) {
    checkLabel = true;
  }
  const trimmedLabel = checkLabel ? label.trim() : '';
  const buttonLabel = trimmedLabel ? <span>{trimmedLabel}</span> : '';
  const mode = `storybook-button--${status}`;
  const app = `storybook-button--${status}-${appearance}`;
  const buttonSize = iconName && !checkLabel ? 'button-icon' : '';
  const iconPath = MatIcons[iconName];
  const hasIconText = iconName && checkLabel ? 'button-icon-text' : '';

  const buttonIcon = iconName ? <Icon path={iconPath} title="User Profile" size={1} /> : '';

  return (
    <button
      type="button"
      className={[buttonSize, 'storybook-button', `storybook-button--${size}`, hasIconText, mode, app].join(' ')}
      {...props}
    >
      {buttonIcon}
      {/* {mdiIcon} */}
      {buttonLabel}
    </button>
  );
};

Button.propTypes = {
  status: PropTypes.oneOf(['primary', 'secondary', 'basic', 'success', 'warning', 'danger']),
  appearance: PropTypes.oneOf(['filled', 'outline', 'ghost']),
  /**
   * Button contents
   */
  label: PropTypes.string,
  iconName: PropTypes.string,
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
  // label: 'Button',
  // primary: true,
  appearance: 'filled',
  size: 'medium',
  onClick: undefined,
};

export default Button;