import mongoose from 'mongoose';
import User from './User.js';
const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [{
    user: String,
    content: String,
    votes: Number
  }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Blog = model('Blog', blogSchema);
export default Blog;