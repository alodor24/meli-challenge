export type ItemList = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  address: {
    state_name: string;
  };
};

export type ItemListResponse = {
  results: ItemList[];
  filters: {
    values: {
      path_from_root: {
        name: string;
      }[];
    }[];
  }[];
};

export type ItemResponse = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  pictures: {
    secure_url: string;
  }[];
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  sold_quantity: number;
  category_id: string;
};

export type ItemDescriptionResponse = {
  plain_text: string;
};

export type ItemDetailCategoryResponse = {
  path_from_root: {
    name: string;
  }[];
};
