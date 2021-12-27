import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

import Icon from '@mdi/react'
import * as Icons from '@mdi/js';
import { mdiDotsVertical, mdiBookmarkOutline } from '@mdi/js'

/**
 * Primary UI component for user interaction
 */
const Button = ({ status, icon, size, label, appearance, ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const mode = `storybook-button--${status}`;
  const app = `storybook-button--${status}-${appearance}`;
  const buttonLabel = label ? label : '';
  console.log("LABEL", typeof label === 'undefined');
  const buttonSize = icon && (typeof label === 'undefined') ? 'button-icon' : '';
  // const mdiIcon = Icons[icon];
  // console.log(mdiIcon);

  const buttonIcon = <Icon path={icon} title="User Profile" size={1} />;

  return (
    <button
      type="button"
      className={[buttonSize, 'storybook-button', `storybook-button--${size}`, mode, app].join(' ')}
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
  icon: PropTypes.string,
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