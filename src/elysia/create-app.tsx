import Elysia from 'elysia';
import type * as elements from 'typed-html';

export const createElysiaApp = () => {
  return new Elysia<
    '',
    {
      error: {};
      meta: { defs: {}; exposed: {}; schema: {} };
      request: { html: (v: string) => Response; sanitize: typeof elements };
      schema: {};
      store: {};
    }
  >();
};
