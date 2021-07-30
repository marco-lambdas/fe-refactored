// tslint:disable
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthCredentials = {
  __typename?: 'AuthCredentials';
  accessToken?: Maybe<Scalars['String']>;
  refreshTokenGenerate?: Maybe<Scalars['String']>;
};

export type AuthCredentialsInput = {
  confirmPassword?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type CardFinalOutputInput = {
  card: Scalars['Upload'];
};

export type CategoryFilterInput = {
  id?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Array<Scalars['String']>>;
};

export type CategoryInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  statistics: Scalars['String'];
};

export type CategoryOperatorInput = {
  id?: Maybe<OptionsOperator>;
  name?: Maybe<OptionsOperator>;
};

export type CategoryWS = {
  __typename?: 'CategoryWS';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  statistics?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type CouponFilterInput = {
  code?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Array<Scalars['Int']>>;
  maxCount?: Maybe<Array<Scalars['Int']>>;
  percentage?: Maybe<Array<Scalars['Int']>>;
  usedCount?: Maybe<Array<Scalars['Int']>>;
};

export type CouponInput = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  maxCount?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Int']>;
  usedCount?: Maybe<Scalars['Int']>;
};

export type CouponOperatorInput = {
  code?: Maybe<OptionsOperator>;
  id?: Maybe<OptionsOperator>;
  maxCount?: Maybe<OptionsOperator>;
  percentage?: Maybe<OptionsOperator>;
  usedCount?: Maybe<OptionsOperator>;
};

export type CouponWS = {
  __typename?: 'CouponWS';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  maxCount?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  usedCount?: Maybe<Scalars['Int']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ListCategoriesFilterInput = {
  filter: Array<CategoryFilterInput>;
  operators: Array<CategoryOperatorInput>;
  pagination: PaginationInput;
  sorting: SortingInput;
};

export type ListCouponsFilterInput = {
  filter: Array<CouponFilterInput>;
  operators: Array<CouponOperatorInput>;
  pagination: PaginationInput;
  sorting: SortingInput;
};

export type ListOrdersFilterInput = {
  filter: Array<OrderFilterInput>;
  operators: Array<OrderOperatorInput>;
  pagination: PaginationInput;
  sorting: SortingInput;
};

export type ListProductsFilterInput = {
  filter: Array<ProductFilterInput>;
  operators: Array<ProductOperatorInput>;
  pagination: PaginationInput;
  sorting: SortingInput;
};

export type ListRolesFilterInput = {
  filter: Array<RoleFilterInput>;
  operators: Array<RoleOperatorInput>;
  pagination: PaginationInput;
  sorting: SortingInput;
};

export type ListTransactionStatusesFilterInput = {
  filter: Array<TransactionStatusFilterInput>;
  operators: Array<TransactionStatusOperatorInput>;
  pagination: PaginationInput;
  sorting: SortingInput;
};

export type ListTransactionsFilterInput = {
  filter: Array<TransactionFilterInput>;
  operators: Array<TransactionOperatorInput>;
  pagination: PaginationInput;
  sorting: SortingInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  ForgotPassword: Scalars['String'];
  ResetPassword: Scalars['String'];
  SignIn: AuthCredentials;
  SignUp: UserResponse;
  createCategory: CategoryWS;
  createCoupon: CouponWS;
  createOrUpdateCategory: CategoryWS;
  createOrUpdateOrderItem: OrderWS;
  createPaymentIntent: Scalars['String'];
  createProduct: ProductWS;
  createRole: RoleWS;
  createTransaction: TransactionWS;
  createTransactionStatus: TransactionStatusWS;
  deleteCategory: Scalars['Boolean'];
  deleteCoupon: Scalars['Boolean'];
  deleteOrderItem: OrderWS;
  deleteProduct: Scalars['Boolean'];
  deleteRole: Scalars['Boolean'];
  deleteTransaction: Scalars['Boolean'];
  deleteTransactionStatus: Scalars['Boolean'];
  generateCardPngs?: Maybe<Array<Scalars['String']>>;
  updateCoupon: CouponWS;
  updateProduct: ProductWS;
  updateRole: RoleWS;
  updateTransaction: TransactionWS;
  updateTransactionStatus: TransactionStatusWS;
  uploadFinalCardOutput?: Maybe<Scalars['String']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSignInArgs = {
  authCredentialsInput: AuthCredentialsInput;
};


export type MutationSignUpArgs = {
  authCredentialsInput: AuthCredentialsInput;
};


export type MutationcreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationcreateCouponArgs = {
  input: CouponInput;
};


export type MutationcreateOrUpdateCategoryArgs = {
  id?: Maybe<Scalars['Int']>;
  input: CategoryInput;
};


export type MutationcreateOrUpdateOrderItemArgs = {
  id?: Maybe<Scalars['Int']>;
  productDetailInput: ProductDetailInput;
};


export type MutationcreatePaymentIntentArgs = {
  amount: Scalars['Float'];
  couponCode?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
};


export type MutationcreateProductArgs = {
  input: ProductInput;
};


export type MutationcreateRoleArgs = {
  input: RoleInput;
};


export type MutationcreateTransactionArgs = {
  input: TransactionInput;
};


export type MutationcreateTransactionStatusArgs = {
  input: TransactionStatusInput;
};


export type MutationdeleteCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteCouponArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteOrderItemArgs = {
  id: Scalars['Int'];
  input: OrderInput;
};


export type MutationdeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteRoleArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteTransactionArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteTransactionStatusArgs = {
  id: Scalars['Int'];
};


export type MutationgenerateCardPngsArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationupdateCouponArgs = {
  input: CouponInput;
};


export type MutationupdateProductArgs = {
  input: ProductInput;
};


export type MutationupdateRoleArgs = {
  id: Scalars['Int'];
  input: RoleInput;
};


export type MutationupdateTransactionArgs = {
  id: Scalars['Int'];
  input: TransactionInput;
};


export type MutationupdateTransactionStatusArgs = {
  id: Scalars['Int'];
  input: TransactionStatusInput;
};


export type MutationuploadFinalCardOutputArgs = {
  input: CardFinalOutputInput;
};

export enum OptionsOperator {
  Any = 'Any',
  Between = 'Between',
  In = 'In',
  IsNull = 'IsNull',
  LessThan = 'LessThan',
  LessThanOrEqual = 'LessThanOrEqual',
  Like = 'Like',
  MoreThan = 'MoreThan',
  MoreThanOrEqual = 'MoreThanOrEqual',
  Not = 'Not',
  NotAny = 'NotAny',
  NotBetween = 'NotBetween',
  NotIn = 'NotIn',
  NotIsNull = 'NotIsNull',
  NotLessThan = 'NotLessThan',
  NotLessThanOrEqual = 'NotLessThanOrEqual',
  NotLike = 'NotLike',
  NotMoreThan = 'NotMoreThan',
  NotMoreThanOrEqual = 'NotMoreThanOrEqual'
}

export type OrderFilterInput = {
  currentCart?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Array<Scalars['Int']>>;
  userId?: Maybe<Array<Scalars['Int']>>;
};

export type OrderInput = {
  affiliateId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  pngCards?: Maybe<Scalars['String']>;
  productDetailIds?: Maybe<Array<Scalars['Int']>>;
  userId?: Maybe<Scalars['Int']>;
};

export type OrderOperatorInput = {
  currentCart?: Maybe<OptionsOperator>;
  id?: Maybe<OptionsOperator>;
  userId?: Maybe<OptionsOperator>;
};

export type OrderWS = {
  __typename?: 'OrderWS';
  createdAt: Scalars['String'];
  currentCart: Scalars['Boolean'];
  id: Scalars['Int'];
  pngCards?: Maybe<Scalars['String']>;
  productDetails?: Maybe<Array<ProductDetailWS>>;
  updatedAt: Scalars['String'];
  userId?: Maybe<Scalars['Float']>;
};

export type PaginatedCategories = {
  __typename?: 'PaginatedCategories';
  data: Array<CategoryWS>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type PaginatedCoupons = {
  __typename?: 'PaginatedCoupons';
  data: Array<CouponWS>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type PaginatedOrders = {
  __typename?: 'PaginatedOrders';
  data: Array<OrderWS>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type PaginatedProducts = {
  __typename?: 'PaginatedProducts';
  data: Array<ProductWS>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type PaginatedRoles = {
  __typename?: 'PaginatedRoles';
  data: Array<RoleWS>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type PaginatedTransactionStatuses = {
  __typename?: 'PaginatedTransactionStatuses';
  data: Array<TransactionStatusWS>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type PaginatedTransactions = {
  __typename?: 'PaginatedTransactions';
  data: Array<TransactionWS>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalRecords: Scalars['Int'];
};

export type PaginationInput = {
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type PositionsInput = {
  cartPhotoX: Scalars['String'];
  cartPhotoY: Scalars['String'];
  cartStatsX: Scalars['String'];
  cartStatsY: Scalars['String'];
  cartSummaryX: Scalars['String'];
  cartSummaryY: Scalars['String'];
  clubCartHeight: Scalars['String'];
  clubCartWidth: Scalars['String'];
  clubCartX: Scalars['String'];
  clubCartY: Scalars['String'];
  clubCollectionHeight: Scalars['String'];
  clubCollectionWidth: Scalars['String'];
  clubCollectionX: Scalars['String'];
  clubCollectionY: Scalars['String'];
  clubLargeHeight?: Maybe<Scalars['String']>;
  clubLargeWidth?: Maybe<Scalars['String']>;
  clubLargeX?: Maybe<Scalars['String']>;
  clubLargeY?: Maybe<Scalars['String']>;
  clubMediumHeight?: Maybe<Scalars['String']>;
  clubMediumWidth?: Maybe<Scalars['String']>;
  clubMediumX?: Maybe<Scalars['String']>;
  clubMediumY?: Maybe<Scalars['String']>;
  clubSmallHeight?: Maybe<Scalars['String']>;
  clubSmallWidth?: Maybe<Scalars['String']>;
  clubSmallX?: Maybe<Scalars['String']>;
  clubSmallY?: Maybe<Scalars['String']>;
  collectionLoaderX: Scalars['String'];
  collectionPhotoX: Scalars['String'];
  collectionPhotoY: Scalars['String'];
  collectionStatsX: Scalars['String'];
  collectionStatsY: Scalars['String'];
  collectionSummaryX: Scalars['String'];
  collectionSummaryY: Scalars['String'];
  countryCartHeight: Scalars['String'];
  countryCartWidth: Scalars['String'];
  countryCartX: Scalars['String'];
  countryCartY: Scalars['String'];
  countryCollectionHeight: Scalars['String'];
  countryCollectionWidth: Scalars['String'];
  countryCollectionX: Scalars['String'];
  countryCollectionY: Scalars['String'];
  countryLargeHeight?: Maybe<Scalars['String']>;
  countryLargeWidth?: Maybe<Scalars['String']>;
  countryLargeX?: Maybe<Scalars['String']>;
  countryLargeY?: Maybe<Scalars['String']>;
  countryMediumHeight?: Maybe<Scalars['String']>;
  countryMediumWidth?: Maybe<Scalars['String']>;
  countryMediumX?: Maybe<Scalars['String']>;
  countryMediumY?: Maybe<Scalars['String']>;
  countrySmallHeight?: Maybe<Scalars['String']>;
  countrySmallWidth?: Maybe<Scalars['String']>;
  countrySmallX?: Maybe<Scalars['String']>;
  countrySmallY?: Maybe<Scalars['String']>;
  largePhotoX?: Maybe<Scalars['String']>;
  largePhotoY?: Maybe<Scalars['String']>;
  largeStatsX?: Maybe<Scalars['String']>;
  largeStatsY?: Maybe<Scalars['String']>;
  largeSummaryX?: Maybe<Scalars['String']>;
  largeSummaryY?: Maybe<Scalars['String']>;
  mediumPhotoX?: Maybe<Scalars['String']>;
  mediumPhotoY?: Maybe<Scalars['String']>;
  mediumStatsX?: Maybe<Scalars['String']>;
  mediumStatsY?: Maybe<Scalars['String']>;
  mediumSummaryX?: Maybe<Scalars['String']>;
  mediumSummaryY?: Maybe<Scalars['String']>;
  playerPhotoCartHeight: Scalars['String'];
  playerPhotoCartWidth: Scalars['String'];
  playerPhotoCartX: Scalars['String'];
  playerPhotoCartY: Scalars['String'];
  playerPhotoCollectionHeight: Scalars['String'];
  playerPhotoCollectionWidth: Scalars['String'];
  playerPhotoCollectionX: Scalars['String'];
  playerPhotoCollectionY: Scalars['String'];
  playerPhotoLargeHeight?: Maybe<Scalars['String']>;
  playerPhotoLargeWidth?: Maybe<Scalars['String']>;
  playerPhotoLargeX?: Maybe<Scalars['String']>;
  playerPhotoLargeY?: Maybe<Scalars['String']>;
  playerPhotoMediumHeight?: Maybe<Scalars['String']>;
  playerPhotoMediumWidth?: Maybe<Scalars['String']>;
  playerPhotoMediumX?: Maybe<Scalars['String']>;
  playerPhotoMediumY?: Maybe<Scalars['String']>;
  playerPhotoSmallHeight?: Maybe<Scalars['String']>;
  playerPhotoSmallWidth?: Maybe<Scalars['String']>;
  playerPhotoSmallX?: Maybe<Scalars['String']>;
  playerPhotoSmallY?: Maybe<Scalars['String']>;
  smallPhotoX?: Maybe<Scalars['String']>;
  smallPhotoY?: Maybe<Scalars['String']>;
  smallStatsX?: Maybe<Scalars['String']>;
  smallStatsY?: Maybe<Scalars['String']>;
  smallSummaryX?: Maybe<Scalars['String']>;
  smallSummaryY?: Maybe<Scalars['String']>;
};

export type PreviewImageInput = {
  playerImage: Scalars['Upload'];
};

export type ProductDetailInput = {
  affiliateId?: Maybe<Scalars['String']>;
  clubImage?: Maybe<Scalars['Upload']>;
  country?: Maybe<Scalars['String']>;
  countryImage?: Maybe<Scalars['String']>;
  playerImage?: Maybe<Scalars['Upload']>;
  playerName?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  previewImage?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  stat1?: Maybe<Scalars['String']>;
  stat1Value?: Maybe<Scalars['Int']>;
  stat2?: Maybe<Scalars['String']>;
  stat2Value?: Maybe<Scalars['Int']>;
  stat3?: Maybe<Scalars['String']>;
  stat3Value: Scalars['Int'];
  stat4?: Maybe<Scalars['String']>;
  stat4Value?: Maybe<Scalars['Int']>;
  stat5?: Maybe<Scalars['String']>;
  stat5Value: Scalars['Int'];
  stat6?: Maybe<Scalars['String']>;
  stat6Value?: Maybe<Scalars['Int']>;
};

export type ProductDetailWS = {
  __typename?: 'ProductDetailWS';
  clubImage?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  countryImage: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  finalImage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  playerImage: Scalars['String'];
  playerName: Scalars['String'];
  position: Scalars['String'];
  previewImage: Scalars['String'];
  product?: Maybe<ProductWS>;
  productId: Scalars['Int'];
  rating: Scalars['Int'];
  stat1: Scalars['String'];
  stat1Value: Scalars['Int'];
  stat2: Scalars['String'];
  stat2Value: Scalars['Int'];
  stat3: Scalars['String'];
  stat3Value: Scalars['Int'];
  stat4: Scalars['String'];
  stat4Value: Scalars['Int'];
  stat5: Scalars['String'];
  stat5Value: Scalars['Int'];
  stat6: Scalars['String'];
  stat6Value: Scalars['Int'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProductFilterInput = {
  categoryId?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Array<Scalars['String']>>;
  price?: Maybe<Array<Scalars['Float']>>;
};

export type ProductInput = {
  bleedImage?: Maybe<Scalars['Upload']>;
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Upload']>;
  lineImage?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  positions?: Maybe<PositionsInput>;
  price?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['String']>;
};

export type ProductOperatorInput = {
  categoryId?: Maybe<OptionsOperator>;
  id?: Maybe<OptionsOperator>;
  name?: Maybe<OptionsOperator>;
  price?: Maybe<OptionsOperator>;
};

export type ProductWS = {
  __typename?: 'ProductWS';
  bleedImage?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryWS>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  image: Scalars['String'];
  lineImage?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  positions?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  size?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Logout: Scalars['Boolean'];
  RefreshToken?: Maybe<AuthCredentials>;
  getCategory?: Maybe<CategoryWS>;
  getCoupon?: Maybe<CouponWS>;
  getOrder?: Maybe<OrderWS>;
  getProduct?: Maybe<ProductWS>;
  getRole?: Maybe<RoleWS>;
  getTransaction?: Maybe<TransactionWS>;
  getTransactionStatus?: Maybe<TransactionStatusWS>;
  listCategories: PaginatedCategories;
  listCoupons: PaginatedCoupons;
  listOrders: PaginatedOrders;
  listProducts: PaginatedProducts;
  listRoles: PaginatedRoles;
  listTransactionStatuses: PaginatedTransactionStatuses;
  listTransactions: PaginatedTransactions;
  uploadPreviewImage?: Maybe<Scalars['String']>;
};


export type QuerygetCategoryArgs = {
  id: Scalars['Int'];
};


export type QuerygetCouponArgs = {
  code: Scalars['String'];
};


export type QuerygetOrderArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};


export type QuerygetProductArgs = {
  id: Scalars['Int'];
};


export type QuerygetRoleArgs = {
  id: Scalars['Int'];
};


export type QuerygetTransactionArgs = {
  id: Scalars['Int'];
};


export type QuerygetTransactionStatusArgs = {
  id: Scalars['Int'];
};


export type QuerylistCategoriesArgs = {
  listCategoriesFilterInput: ListCategoriesFilterInput;
};


export type QuerylistCouponsArgs = {
  listCouponsFilterInput: ListCouponsFilterInput;
};


export type QuerylistOrdersArgs = {
  listOrdersFilterInput: ListOrdersFilterInput;
};


export type QuerylistProductsArgs = {
  listProductsFilterInput: ListProductsFilterInput;
};


export type QuerylistRolesArgs = {
  listRolesFilterInput: ListRolesFilterInput;
};


export type QuerylistTransactionStatusesArgs = {
  listTransactionStatusesFilterInput: ListTransactionStatusesFilterInput;
};


export type QuerylistTransactionsArgs = {
  listTransactionsFilterInput: ListTransactionsFilterInput;
};


export type QueryuploadPreviewImageArgs = {
  input: PreviewImageInput;
};

export type RoleFilterInput = {
  id?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Array<Scalars['String']>>;
};

export type RoleInput = {
  name: Scalars['String'];
};

export type RoleOperatorInput = {
  id?: Maybe<OptionsOperator>;
  name?: Maybe<OptionsOperator>;
};

export type RoleWS = {
  __typename?: 'RoleWS';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum SortDir {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type SortingInput = {
  sortBy?: Maybe<Array<Scalars['String']>>;
  sortDir?: Maybe<Array<SortDir>>;
};

export type TransactionFilterInput = {
  additionalAddress?: Maybe<Array<Scalars['String']>>;
  address?: Maybe<Array<Scalars['String']>>;
  city?: Maybe<Array<Scalars['String']>>;
  code?: Maybe<Array<Scalars['String']>>;
  country?: Maybe<Array<Scalars['String']>>;
  email?: Maybe<Array<Scalars['String']>>;
  firstName?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Array<Scalars['Int']>>;
  lastName?: Maybe<Array<Scalars['String']>>;
  orderId?: Maybe<Array<Scalars['Int']>>;
  phoneNumber?: Maybe<Array<Scalars['String']>>;
  postalCode?: Maybe<Array<Scalars['String']>>;
  statusId?: Maybe<Array<Scalars['Int']>>;
};

export type TransactionInput = {
  additionalAddress?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  city: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  couponId?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  orderId: Scalars['Int'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  statusId?: Maybe<Scalars['Int']>;
};

export type TransactionOperatorInput = {
  additionalAddress?: Maybe<OptionsOperator>;
  address?: Maybe<OptionsOperator>;
  city?: Maybe<OptionsOperator>;
  code?: Maybe<OptionsOperator>;
  country?: Maybe<OptionsOperator>;
  email?: Maybe<OptionsOperator>;
  firstName?: Maybe<OptionsOperator>;
  id?: Maybe<OptionsOperator>;
  lastName?: Maybe<OptionsOperator>;
  orderId?: Maybe<OptionsOperator>;
  phoneNumber?: Maybe<OptionsOperator>;
  postalCode?: Maybe<OptionsOperator>;
  statusId?: Maybe<OptionsOperator>;
};

export type TransactionStatusFilterInput = {
  id?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Array<Scalars['String']>>;
};

export type TransactionStatusInput = {
  name: Scalars['String'];
};

export type TransactionStatusOperatorInput = {
  id?: Maybe<OptionsOperator>;
  name?: Maybe<OptionsOperator>;
};

export type TransactionStatusWS = {
  __typename?: 'TransactionStatusWS';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TransactionWS = {
  __typename?: 'TransactionWS';
  additionalAddress: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  code: Scalars['String'];
  country: Scalars['String'];
  coupon?: Maybe<CouponWS>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  order?: Maybe<OrderWS>;
  orderId?: Maybe<Scalars['Int']>;
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  statusId: Scalars['Int'];
  updatedAt: Scalars['String'];
};


export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<UserWS>;
};

export type UserWS = {
  __typename?: 'UserWS';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  updatedAt: Scalars['String'];
};
