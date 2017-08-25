import Router from 'koa-router';
export const router = new Router({ prefix: '/users' });

router.get('/', async (ctx, next) => {
  ctx.body = 'User GET';
});
