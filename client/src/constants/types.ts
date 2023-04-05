export type ItemDetail = {
  author: {
    lastname: string;
    name: string;
  };
  item: {
    condition: string;
    description: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    sold_quantity: number;
    title: string;
  };
};
