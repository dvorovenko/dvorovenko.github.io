import ExtendableError from 'es6-error';

/**
 * Custom error object used in context of Night App
 * @extends Error
 *
 * @example
 * new NError(404, 'NotFound', 'Required property not found: name')
 * // Returns:
 * // PError {
 * //  status: 404,
 * //  code: 'NotFound',
 * //  meta: 'Required property not found: name',
 * // }
 * // NError also has a 'stack' and 'toJSON' methods as a normal Error
 */
export default class NError extends ExtendableError {
  /**
   * @param {number} status
   * @param {string} code
   * @param {string} title
   * @param {Object} meta - object containing specific information
   */
  constructor(status, code, title, meta) {
    super(title);

    this.status = status;
    this.code = code;
    this.meta = meta;
  }

  get stack() {
    return super.stack;
  }
}
