import mongoose, { Schema, Model } from 'mongoose';

export const UserSchema = Schema({
  name: {
    type: String,
    maxlength: [255, '{VALUE} is more than 255 characters!'],
  },
  login: {
    type: String,
    maxlength: [255, '{VALUE} is more than 255 characters!'],
  },
  avatar: {
    type: String,
    maxlength: [255, '{VALUE} is more than 255 characters!'],
  },
  location: {
    type: String,
    maxlength: [2, '{VALUE} is more than 2 characters!'],
  },
  rank: {
    type: String,
    minlength: [1, '{VALUE} is more than 1 characters!'],
  },
  email: String,
  creation_date: Date,
  followers: String,

});

