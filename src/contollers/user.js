import User from '../models/user';
import is from '../helpers/is';
import NError from '../libs/NError';
import _ from 'lodash';


export default {
  async get(ctx, next) {
    try {
      if (!is.objectId(ctx.req.params.id)) {
        throw new NError(400, 'invalid_parameter', 'Invalid parameter');
      }
      const user = await User.findOne({ _id: ctx.params.id });
      if (!user) {
        throw new NError(404, 'not_found', 'User not found');
      }
      // Render component with user
    } catch (err) {
      return next(err);
    }
  },

  async post(ctx, next) {
    try {
      if (ctx.req.body.id) {
        if (!is.objectId(ctx.req.body.id)) throw new NError(400, 'invalid_parameter', 'Invalid parameter');
      }
      const user = await User.findOne({ _id: ctx.req.body.id });
      if (user) {
        throw new NError(409, 'conflict', 'User already exist');
      }
      const createdUser = User.create(_.pick(ctx.req.body, ['id', 'name', 'login', 'avatar', 'location', 'rank', 'email', 'creation_date', 'followers']));
      // Render component with user
    } catch (err) {
      return next(err);
    }
  },

  async delete(ctx, next) {
    try {
      if (ctx.req.body.id) {
        if (!is.objectId(ctx.req.body.id)) throw new NError(400, 'invalid_parameter', 'Invalid parameter');
      }
      const user = await User.findOne({ _id: ctx.req.body.id })
      if (!user) {
        throw new NError(404, 'not_found', 'User not found');
      }
      await user.delegate();
      // Render component as true
    } catch (err) {
      return next(err);
    }
  },

  async list(ctx, next) {
    try {
      let limit = parseInt(ctx.req.query.limit, 10) || 10;
      let offset = parseInt(ctx.req.query.offset, 10) || 0;
      const users = await User.find().skip(offset).limit(limit);
    } catch (err) {
      return next(err);
    }
  }
}