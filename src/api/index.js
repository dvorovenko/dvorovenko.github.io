import combineRouters from 'koa-combine-routers';

export default () =>
  combineRouters([
    require('./main').router,
    require('./user').router
  ]);
