import Router from 'koa-router';
export const router = new Router();

router.get('/users', async (ctx, next) => {
  ctx.body = 'User GET';
});
