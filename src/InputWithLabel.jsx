import * as React from 'react';

type InputWithLabelProps = {
  id: string;
  value: string;
  type?: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  children: React.ReactNode;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => (
  <>
    <label htmlFor={id} className="label">
      {children}
    </label>
    &nbsp;
    <input
      id={id}
      autoFocus={isFocused}
      type={type}
      value={value}
      onChange={onInputChange}
      className="input"
    />
  </>
);

export { InputWithLabel };