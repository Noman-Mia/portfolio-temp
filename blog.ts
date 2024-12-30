import mongoose, { Document, Schema } from 'mongoose';

// Blog Schema
export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  image?: string;
  tags: string[];
  readingTime?: number;
  likes: number;
  order: number;
  isPublished: boolean;
  publishDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String },
  tags: [{ type: String }],
  readingTime: { type: Number },
  likes: { type: Number, default: 0 },
  order: { type: Number, required: true },
  isPublished: { type: Boolean, default: false },
  publishDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Blog = mongoose.model<IBlog>('Blog', blogSchema);
