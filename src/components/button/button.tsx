import classNames from "classnames";
import React, { PureComponent } from "react";
import IButton from "../../interfaces/button";
import "../../styles/components/_button.scss";
import { variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";

class Button extends PureComponent<IButtonProps> {
  private static defaultProps = {
    variant: "primary",
  };

  public render() {
    const {
      variant,
      fluid,
      disabled,
      icon,
      round,
      ripple,
      circular,
      children,
      className,
      ...props
    } = this.props;
    const buttonClasses = classNames(
      classNamesDefault({ variant, fluid, disabled, round }),
      circular && "q-circular",
      ripple && "q-ripple",
      className, "q-button");
    const paddingRight = children ? ".75rem" : "0";
    return (
      <button
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {icon && <Icon name={icon} style={{ paddingRight }}/>}
        {children}
      </button>
    );
  }
}

interface IButtonProps extends IButton {
  variant?: variantTypes;
  fluid?: boolean;
  disabled?: boolean;
  icon?: string;
  round?: boolean;
  ripple?: boolean;
  circular?: boolean;
  className?: string;
}

export default Button;
