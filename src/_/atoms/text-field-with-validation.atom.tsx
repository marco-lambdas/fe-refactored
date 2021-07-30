import { ErrorMessage } from '@hookform/error-message';
import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

interface Props {
  register: any;
  errors: any;
  name: string;
  label: string;
  options?: any;
  multiline?: boolean | undefined;
  type?: string;
  size?: string;
}

const TextFieldWrapper = styled.div`
  .error-message {
    color: #bf1650;
  }

  .error-message::before {
    display: inline;
    content: '⚠ ';
  }
`;

const TextFieldWithValidation: React.FC<Props> = ({
  register,
  name,
  label,
  errors,
  options,
  multiline,
  type = 'text',
  size,
}) => {
  return (
    <TextFieldWrapper>
      <TextField
        type={type}
        label={label}
        name={name}
        variant='outlined'
        fullWidth
        multiline={multiline}
        rows={multiline ? 6 : undefined}
        inputRef={register(options)}
        size={size}
      />
      <ErrorMessage errors={errors} name={name} as='p' className='error-message' />
    </TextFieldWrapper>
  );
};

export default TextFieldWithValidation;
