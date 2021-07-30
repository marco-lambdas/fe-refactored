import React from 'react';
import styled from 'styled-components';
import PublishIcon from '@material-ui/icons/Publish';

const UploadButtonWrapper = styled.div`
  @media (max-width: 767px) {
    width: 200px;
    height: 50px;
    margin: 0 auto;
  }

  .file-input {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }

  .file-input-label {
    display: block;
    position: relative;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    background: linear-gradient(40deg, #a239ca, #4717f6);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease-out;
  }

  input:hover + label,
  input:focus + label {
    transform: scale(1.02);
  }
  input:focus + label {
    outline: 1px solid #000;
    outline: -webkit-focus-ring-color auto 2px;
  }

  .file-input-name-container {
    position: relative;
  }

  .file-input-name {
    position: absolute;
    left: 20px;
    font-size: 0.85rem;
    color: #555;
  }
`;

interface Props {
  register: any;
  name: string;
  label?: any;
  id?: string;
  value?: string;
  handleImageChange?: (e: any) => void;
}

const UploadButton: React.FC<Props> = ({ register, name, label, handleImageChange, id, value }) => {
  return (
    <UploadButtonWrapper>
      <input
        accept='image/*'
        type='file'
        id={id || 'image'}
        name={name}
        className='file-input'
        onChange={handleImageChange}
        ref={register()}
      />
      <label htmlFor={id || 'image'} className='file-input-label'>
        <PublishIcon />
        {label || 'Select file'}
      </label>
      <div className='file-input-name-container'>
        {value ? (
          <p className='file-input-name' id={`${id}-file-input-name`}>
            {value}
          </p>
        ) : (
          <p className='file-input-name' id={`${id}-file-input-name`} />
        )}
      </div>
    </UploadButtonWrapper>
  );
};

export default UploadButton;
