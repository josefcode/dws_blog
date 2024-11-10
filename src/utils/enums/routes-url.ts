export const RoutesUrls = {
  BASE_URL: '/',
} as const;

export type RouteUrl = (typeof RoutesUrls)[keyof typeof RoutesUrls];
