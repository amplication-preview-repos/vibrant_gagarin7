import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductCreateInput = {
  imageUrl?: string | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: CategoryWhereUniqueInput | null;
};
