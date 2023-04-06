interface Rating {
  rate: number;
  count: number;
}
export interface ProductInterface {
  amount?: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export type ContextProps = React.FC<{ children: React.ReactNode }>;
