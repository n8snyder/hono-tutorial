import { } from 'hono'

type Head = {
  title?: string
}

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {
      DB: D1Database;
      MY_BUCKET: R2Bucket;
    };
  }
}
