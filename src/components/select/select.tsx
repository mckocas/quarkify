import classNames from "classnames";
import React, { PureComponent } from "react";
import ISelect from "../../interfaces/select";
import "../../styles/components/_select.scss";
import { colorTypes } from "../../types/color";
import { variantTypes } from "../../types/select";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";

export default class Select extends PureComponent<IProps> {
  public render() {
    const {
      items,
      variant,
      fluid,
      name,
      leftIcon,
      rightIcon,
      rightIconColor,
      leftIconColor,
      className,
      disabled,
      error,
      valueKey,
      ...props
    } = this.props;
    const nameKey = name || "name";
    const valueMapperKey = valueKey || "value";
    const selectDivClasses = classNames(
      "q-select-wrapper",
      classNamesDefault({ fluid, disabled }),
      className,
      error && "q-error",
    );
    const selectClasses = classNames(
      "q-select",
      !leftIcon && "select-left-padding",
      !rightIcon && "select-right-padding",
    );
    return (
      <div className={selectDivClasses}>
        {leftIcon && <Icon className={"q-select-icon-left"} name={leftIcon} color={leftIconColor} />}
        <select className={selectClasses} disabled={disabled} {...props}>
          {items.map((item, index) => {
            return (
              <option
                key={index}
                value={item[valueMapperKey]}
                disabled={item.disabled}
                className={classNamesDefault({ variant: item.variant })}
              >
                {item[nameKey]}
              </option>
            );
          })}
        </select>
        {rightIcon && <Icon className={"q-select-icon-right"} name={rightIcon} color={rightIconColor} />}
      </div>
    );
  }
}

interface IProps extends ISelect {
  variant?: variantTypes;
  items: any[];
  fluid?: boolean;
  value?: string;
  valueKey?: string;
  name?: string;
  error?: boolean;
  rightIcon?: string;
  leftIcon?: string;
  className?: string;
  selected?: string;
  rightIconColor?: colorTypes;
  leftIconColor?: colorTypes;
}
