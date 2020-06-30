import React, { useState } from "react";
import classNames from "classnames";
export enum AlertType {
  Success = "success",
  Warning = "warning",
  Info = "info",
  Error = "error",
}
interface BaseAlertprops {
  altType?: AlertType;
  message: React.ReactNode;
  description?: React.ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  closeText?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}
const Alert: React.FC<BaseAlertprops> = (props) => {
  const {
    altType,
    message,
    description,
    showIcon,
    closable,
    closeText,
    onMouseEnter,
    onMouseLeave,
    ...aprops
  } = props;
  const classes = classNames("alt", {
    [`btn-${altType}`]: altType,
    [`btn-${message}`]: message,
    [`btn-${description}`]: description,
  });
  const ref = React.useRef<HTMLElement>();
  const isClosable = closeText ? true : closable;
  const [closing, setClosing] = React.useState(false);
  const [closed, setClosed] = React.useState(false);
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const dom = ref.current as HTMLElement;
    dom.style.height = `${dom.offsetHeight}px`;
    dom.style.height = `${dom.offsetHeight}px`;
    setClosing(true);
    aprops.onClose?.(e);
  };
  const renderCloseIcon = () => {
    return isClosable ? (
      <button onClick={handleClose} tabIndex={0}>
        {closeText ? <span>{closeText}</span> : null}
      </button>
    ) : (
      []
    );
  };
  return closed ? null : (
    <div
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`${altType}-message`}>{message}</span>
      <span className={`${message}-description`}>{description}</span>
      {renderCloseIcon()}
    </div>
  );
};
Alert.defaultProps = {
  altType: AlertType.Success,
};
export default Alert;
