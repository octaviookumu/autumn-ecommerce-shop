interface Rating {
  rate: number;
  count: number;
}
export interface ProductInterface {
  amount?: number;
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export type ContextProps = React.FC<{ children: React.ReactNode }>;
