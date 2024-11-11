export const RoutesUrls = {
  BASE_URL: '/',
  POST_URL: '/post/:postId',
} as const;

export type RouteUrl = (typeof RoutesUrls)[keyof typeof RoutesUrls];
