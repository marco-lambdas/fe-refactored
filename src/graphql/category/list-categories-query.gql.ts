import { gql } from '@apollo/client';

export const LIST_CATEGORIES = gql`
  query ListCategories {
    listCategories(
      listCategoriesFilterInput: {
        filter: []
        operators: []
        sorting: { sortBy: ["id"], sortDir: [ASC] }
        pagination: { page: 1, pageSize: 20 }
      }
    ) {
      page
      pageSize
      totalRecords
      totalPages
      data {
        name
        code
        id
        statistics
      }
    }
  }
`;
