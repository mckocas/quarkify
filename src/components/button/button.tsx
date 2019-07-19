import classNames from "classnames";
import React, { PureComponent } from "react";
import IButton from "../../interfaces/button";
import "../../styles/components/_button.scss";
import { variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";
import Loader from "../loader";

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
      circular,
      children,
      className,
      loading = false,
      ...props
    } = this.props;
    const buttonClasses = classNames(
      classNamesDefault({ variant, fluid, disabled, round }),
      circular && "q-circular",
      loading && "loading",
      className, "q-button");
    return (
      <button
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        <Loader active={loading}/>
        {icon && <Icon name={icon} />}
        {children && <span>{children}</span>}
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
  circular?: boolean;
  className?: string;
  loading?: boolean;
}

export default Button;
