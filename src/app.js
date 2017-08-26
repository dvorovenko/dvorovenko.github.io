import Koa from 'koa';
import next from 'next';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import compress from 'koa-compress';
import morgan from 'koa-morgan';
import {
  REQUEST_LOGGER_MODE,
  REQUEST_SIZE_LIMIT,
  URL_ENCODING_REQUEST_PARAMETER_LIMIT,
  NODE_ENV,
  PORT
} from './scripts/config';
import router from './api';
import { koaErrorReporter } from './errorHandler';
import { connect } from './db';
import db from './db';
import Router from 'koa-router';
import UserController from './contollers/user';

const debug = require('debug')('night:server');

const app = next({});
export const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = new Koa();

    server.use(
      bodyParser({
        jsonLimit: REQUEST_SIZE_LIMIT,
        formLimit: URL_ENCODING_REQUEST_PARAMETER_LIMIT
      })
    );

    server.use(koaErrorReporter);
    // server.use(router());
    server.use(helmet());
    server.use(compress());
    server.use(morgan(REQUEST_LOGGER_MODE));

    const router = new Router();

    router.get('/users/list', UserController.list);
    router.get('/users/:id', UserController.get);
    router.post('/users', UserController.post);
    router.delete('/users/:id', UserController.delete);

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(router.routes());

    debug(`Starting Night App in '${NODE_ENV}' mode...`);
    server.listen(PORT, (err) => {
      if (err) throw err;
      return db.connect((dbErr) => {
        if (dbErr) return done(dbErr);
        debug(`Night APP listening on 'localhost:${PORT}'`);
      });
    })
  });
