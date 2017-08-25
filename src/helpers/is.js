export default {
  null: value => value === null,
  undefined: value => value === undefined,
  function: value => typeof value === 'function',
  promise: value => value && typeof value.then === 'function',
  array: value => Array.isArray(value),
  number: value => typeof value === 'number',
  boolean: value => typeof value === 'boolean',
  string: value => typeof value === 'string',
  filledString: value => typeof value === 'string' && value.length > 0,
  objectId: value =>
  typeof value === 'string' && new RegExp('^[0-9a-fA-F]{24}$').test(value),
  date: value => Date.parse(value),
  object: value => !!value && value.constructor === Object
};