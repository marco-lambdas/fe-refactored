import React, { useState } from 'react';
import styled from 'styled-components';
import { useStateMachine } from 'little-state-machine';

// Image Adjustment Lib
import { DokaImageEditor } from 'react-doka';

import {
  createDefaultImageReader,
  createDefaultImageWriter,
  // Plugins
  setPlugins,
  plugin_crop,
  plugin_resize,
  plugin_filter,
  plugin_finetune,
  // Locale's of plugins
  plugin_crop_locale_en_gb,
  plugin_resize_locale_en_gb,
  plugin_filter_locale_en_gb,
  plugin_finetune_locale_en_gb,
  locale_en_gb,
  // plugin default options
  plugin_crop_defaults,
  plugin_filter_defaults,
  //   plugin_resize_defaults,
  plugin_finetune_defaults,
} from 'doka';

import 'doka/doka.css';

import updateCardDetails from '../../utils/update-card-details.util';

// Register the required plugins
setPlugins(plugin_crop, plugin_filter, plugin_finetune);

// Merge locale exports
const locale = {
  ...locale_en_gb,
  ...plugin_crop_locale_en_gb,
  ...plugin_filter_locale_en_gb,
  //   ...plugin_resize_locale_en_gb,
  ...plugin_finetune_locale_en_gb,
};

locale.labelButtonExport = 'Submit';

// Doka Editor option defaults
const editorDefaults = {
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter(),
  ...plugin_crop_defaults,
  ...plugin_filter_defaults,
  //   ...plugin_resize_defaults,
  ...plugin_finetune_defaults,
  util: 'crop',
  locale,
};

const EditorWrapper = styled.div`
  .closeButton {
    margin-left: 20px;
    margin-top: 12px;
    cursor: pointer;
  }

  .FadeBackground {
    position: absolute;
    width: 100%;
    height: 120vh;
    opacity: 0.5;
    background-color: #00060a;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .EditorContainer {
    background-color: white;
    position: absolute;
    height: 80vh;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 2px;
    border-radius: 14px;
    border-color: green;
    z-index: 2;
  }

  @media only screen and (min-width: 300px) {
    .EditorContainer {
      margin-top: 160px;
      left: 65%;
      width: 100%;
    }
  }

  @media only screen and (min-width: 400px) {
    .EditorContainer {
      left: 50%;
      width: 80%;
      margin-top: 120px;
    }
  }

  @media only screen and (min-width: 900px) {
    .EditorContainer {
      margin-top: 60px;
    }
  }
`;

export interface ImageEditorProps {
  src: any;
  setImage: any;
  name: string;
}

interface ProcessResponse {
  dest: File;
  imageState: any;
  src: File;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ src, setImage, name }) => {
  const { actions } = useStateMachine({ updateCardDetails });

  const handleUpdateImage = (result: any) => {
    const { name: fileName, size } = result;
    const fileSize = (size / 1000).toFixed(2);
    const fileNameAndSize = `${fileName} - ${fileSize}KB`;
    document.querySelector('.file-input-name')!.textContent = fileNameAndSize;
    actions.updateCardDetails({ [`${name}`]: result });
  };

  const onProcessChange = (res: ProcessResponse) => {
    handleUpdateImage(res.dest);
    setImage(null);
  };

  const handleClose = () => {
    setImage(null);
  };

  return (
    <EditorWrapper>
      <div className='FadeBackground'></div>
      <div className='EditorContainer'>
        <svg
          className='closeButton'
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          onClick={handleClose}
        >
          <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z' />
        </svg>
        <DokaImageEditor {...editorDefaults} src={src} onProcess={onProcessChange} />
      </div>
    </EditorWrapper>
  );
};

export default ImageEditor;
