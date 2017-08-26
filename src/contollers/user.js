import User from '../models/user';
import is from '../helpers/is';
import NError from '../libs/NError';
import _ from 'lodash';



export default {
  async get(req, res, next) {
    try {
      if (!is.objectId(req.params.id)) {
        throw new NError(400, 'invalid_parameter', 'Invalid parameter');
      }
      const user = await User.findOne({ _id: req.params.id });
      if (!user) {
        throw new NError(404, 'not_found', 'User not found');
      }
      // Render component with user
    } catch (err) {
      return next(err);
    }
  },

  async post(req, res, next) {
    try {
      if (req.body.id) {
        if (!is.objectId(req.body.id)) throw new HError(400, 'invalid_parameter', 'Invalid parameter');
      }
      const user = await User.findOne({ _id: req.body.id });
      if (user) {
        throw new NError(409, 'conflict', 'User already exist');
      }
      const createdUser = User.create(_.pick(req.body, ['id', 'name', 'login', 'avatar', 'location', 'rank', 'email', 'creation_date', 'followers']));
      // Render component with user
    } catch (err) {
      return next(err);
    }
  },

  async delete(req, res, next) {
    try {
      if (req.body.id) {
        if (!is.objectId(req.body.id)) throw new HError(400, 'invalid_parameter', 'Invalid parameter');
      }
      const user = await User.findOne({ _id: req.body.id })
      if (!user) {
        throw new NError(404, 'not_found', 'User not found');
      }
      await user.delegate();
      // Render component as true
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {

    } catch (err) {
      return next(err);
    }
  }
}