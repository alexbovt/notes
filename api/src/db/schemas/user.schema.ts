import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  login: String,
  password: String,
  name: String,
  email: String,
})
