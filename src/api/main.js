import Router from 'koa-router';

export const router = new Router();
const aliveAt = new Date();

router.get('/', async (ctx, next) => {
  ctx.body = {
    alive: true, // Static value to ensure response integrity
    aliveAt: aliveAt.toString(), // Used to calculate roll-out times
    timestamp: new Date().toString(), // Is the system clock in sync?
    instance: process.env.HOSTNAME // Who is responding?
  };
});
