import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    title: String,
    color: String,
  },
  { versionKey: false }
  //version of the schema
);

export const CategoryModel = mongoose.model('Category', CategorySchema);
