export type ItemPrice = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Item = {
  condition: string;
  description: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: ItemPrice;
  sold_quantity: number;
  state_name: string;
  title: string;
};

export type ItemsList = {
  author: {
    name: string;
    lastname: string;
  };
  categories: [];
  items: Item[];
};

export type ItemDetail = {
  author: {
    lastname: string;
    name: string;
  };
  item: Item;
};
