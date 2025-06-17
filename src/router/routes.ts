// Route configuration for the application
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  NOT_FOUND: '/404',
} as const;

// Route parameters type
export type RouteParams = {
  [ROUTES.PRODUCT_DETAIL]: { id: string };
};

// Helper function to generate product detail URL
export const getProductDetailUrl = (id: string | number): string => {
  return `/products/${id}`;
}; 