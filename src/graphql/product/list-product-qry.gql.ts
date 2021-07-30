import { gql } from '@apollo/client';

export const LIST_PRODUCTS = gql`
    query ListProducts($listProductsFilterInput: ListProductsFilterInput!) {
        listProducts(listProductsFilterInput: $listProductsFilterInput) {
            page
            pageSize
            totalRecords
            totalPages
            data {
                createdAt
                name
                id
                image
                categoryId
                price
                size
                updatedAt
            }
        }
    }
`;
