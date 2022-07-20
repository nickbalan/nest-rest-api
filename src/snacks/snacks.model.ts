import * as mongoose from 'mongoose';

export const SnackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  shopLocation: { type: String, required: true },
});

export interface Snacks extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
  shopLocation: string;
}
