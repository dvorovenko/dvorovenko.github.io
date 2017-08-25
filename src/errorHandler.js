import { IS_PROD } from './scripts/config';
import _ from 'lodash';
import _NError from './libs/NError';
import { formatError } from './services/error_formatter';

const INFO_LEVEL = [];
const escapeExpStr = str => str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
const INFO_LEVEL_EXP = new RegExp(_.map(INFO_LEVEL, escapeExpStr).join('|'));

export const NError = _NError;

/**
 * General purpose error reporter.
 * @param err The error object.
 * @param ctx The additional context to report.
 */
export const reportError = (err, ctx) => {
  if (!err) return;
  const otherInfo = { custom: {} };
  const isInfoMessage =
    INFO_LEVEL_EXP.test(err.message) && INFO_LEVEL.length !== 0;
  if (isInfoMessage) {
    otherInfo.level = 'info';
  }

  if (!IS_PROD) {
    if (otherInfo.level === 'info') return;
    console.error(err); // eslint-disable no-console
    console.error(err.stack); // eslint-disable no-console
    return;
  }

  // Track the user who made the erred request
  const context = ctx || {};
  if (context.userId) {
    otherInfo.custom.userId = context.userId;
  }
  debug('Sent error!', err.message);
};

process.on('unhandledRejection', error => reportError(error));
process.on('uncaughtException', error => reportError(error));

export async function koaErrorReporter(ctx, next) {
  try {
    await next();
  } catch (err) {
    // If you need to format an error for presentation do it in the error formatter :)
    formatError(err, ctx);
  }
}
