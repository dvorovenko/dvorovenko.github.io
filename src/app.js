import Koa from 'koa';
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
import { koaErrorReporter } from './errorHandler';

const debug = require('debug')('night:server');

export const app = new Koa();

app.use(
  bodyParser({
    jsonLimit: REQUEST_SIZE_LIMIT,
    formLimit: URL_ENCODING_REQUEST_PARAMETER_LIMIT
  })
);

app.use(koaErrorReporter);
app.use(helmet());
app.use(compress());
app.use(morgan(REQUEST_LOGGER_MODE));

const aliveAt = new Date();

app.use(async ctx => {
  ctx.body = {
    alive: true, // Static value to ensure response integrity
    aliveAt: aliveAt.toString(), // Used to calculate roll-out times
    timestamp: new Date().toString(), // Is the system clock in sync?
    instance: process.env.HOSTNAME // Who is responding?
  };
});

export const listen = done => {
  debug(`Starting Night App in '${NODE_ENV}' mode...`);
  return app.listen(PORT, conErr => {
    if (conErr) return done(conErr);
    debug(`Night API listening on 'localhost:${PORT}'`);
  });
};
