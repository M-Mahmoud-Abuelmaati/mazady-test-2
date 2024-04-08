export type NavItem = {
  name: string;
  path: string;
};

export interface IProduct {
  image: string;
  title: string;
  price: number;
  isFavorite?: boolean;
  sale?: boolean;
  lotStartAt?: Date | string;
}
