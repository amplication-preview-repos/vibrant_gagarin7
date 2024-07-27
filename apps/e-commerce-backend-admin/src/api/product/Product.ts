import { Category } from "../category/Category";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string | null;
  name: string | null;
  description: string | null;
  price: number | null;
  category?: Category | null;
};
