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
};

export type ItemDescriptionResponse = {
  plain_text: string;
};
