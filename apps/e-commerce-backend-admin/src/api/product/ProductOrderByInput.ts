import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  categoryId?: SortOrder;
};
