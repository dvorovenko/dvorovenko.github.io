import mongoose from 'mongoose';
import { MONGO_URI } from './scripts/config';
import { reportError } from './errorHandler';

mongoose.Promise = global.Promise;

const debug = require('debug')('night:db');

const connect = (done) => {
  debug('Connecting to mongo...');
  mongoose.connect(MONGO_URI, { useMongoClient: true });
  const db = mongoose.connection;
  db.on('error', (err) => {
    debug(`MongoDB error: ${err}`);
    reportError(err);
    return done(err);
  });
  db.on('connected', () => {
    debug('Connected to mongo!');
    done();
  });
  db.on('reconnected', () => {
    debug('Reconnected to mongo!');
  });
  db.on('disconnected', () => {
    debug('Disconnected from mongo...');
    debug('Reconnecting to mongo...');
  });
};

module.exports = { connect };
