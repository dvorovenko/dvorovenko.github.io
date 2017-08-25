import _ from 'lodash';
import NError from '../libs/NError';

// Don't add keys here, adding keys will cause fragmentation of behavior;
const ALLOWED_ERROR_KEYS = ['code', 'message', 'meta'];

export const formatNError = err => {
  if (!(err instanceof NError)) return undefined;
  return {
    status: err.status,
    formattedError: {
      code: _.snakeCase(err.code),
      message: err.message,
      meta: err.meta
    }
  };
};

export const formatUnformattedError = err => ({
  status: 500,
  formattedError: {
    code: _.snakeCase(err.name) || 'internal_error',
    message: 'Internal server error',
    meta: {
      // Report this message to aid in debugging efforts
      internalMessage: err.message
    }
  }
});

// eslint-disable-next-line import/prefer-default-export
export const formatError = (err, ctx) => {
  // Will try formatters until one returns a non null object.
  let errorInfo = formatNError(err);
  // This is the catch all formatter put your conditional formatters before this.
  errorInfo = errorInfo || formatUnformattedError(err);
  // Send our formatted error to the client, we are restricting keys to ensure this is uniform.
  ctx.status = errorInfo.status;
  ctx.body = _.pick(errorInfo.formattedError, ALLOWED_ERROR_KEYS);
  ctx.app.emit('error', err, ctx);
};
