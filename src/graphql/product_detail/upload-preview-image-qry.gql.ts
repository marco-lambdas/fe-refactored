import { gql } from '@apollo/client';

export const GET_PREVIEW_IMAGE = gql`
  query uploadPreviewImage($input: PreviewImageInput!) {
    uploadPreviewImage(input: $input)
  }
`;
