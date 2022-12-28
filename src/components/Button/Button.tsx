import * as React from 'react';
import {PuffLoader} from 'react-spinners';
import {CheckIcon} from 'src/assets/icons/CheckIcon';
import {CrossIcon} from 'src/assets/icons/CrossIcon';

interface Props {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly disabled?: boolean;
  readonly loading?: boolean;
  readonly success?: boolean;
  readonly error?: boolean;
  readonly successMessage?: string;
  readonly errorMessage?: string;
  readonly onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button: React.FC<Props> = ({
  children,
  loading,
  success,
  error,
  successMessage,
  errorMessage,
  disabled = false,
  className = '',
  style = {},
  onClick,
}) => {
  let content = children;
  let stateClassName = className;
  let softDisable = false;

  if (success) {
    stateClassName = className + ' secondary';
    softDisable = true;
    content = (
      <>
        <div className="icon-container xsmall" style={{marginRight: 8}}>
          <CheckIcon className="icon-blue" styles={{width: 20}} />
        </div>
        {successMessage}
      </>
    );
  }

  if (error) {
    stateClassName = className + ' secondary';
    content = (
      <>
        <div className="icon-container xsmall" style={{marginRight: 8}}>
          <CrossIcon
            className="icon-blue"
            styles={{width: 15, margin: '10px 0'}}
          />
        </div>
        {errorMessage}
      </>
    );
  }

  if (loading) {
    content = (
      <div className="icon-container xsmall">
        <PuffLoader color="#f7f7f7" size={30} loading={true} />
      </div>
    );
  }

  const softDisableClickHandle = (e: React.MouseEvent<HTMLButtonElement>) =>
    e.preventDefault();

  return (
    <button
      className={`button ${stateClassName}`}
      style={style}
      disabled={softDisable ? false : disabled}
      onClick={softDisable ? softDisableClickHandle : onClick}
    >
      {content}
    </button>
  );
};
