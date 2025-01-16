export type Product = {
  name: string;
  color: string;
  bgColor: string;
  textColor: string;
  icon: React.FC;
};

export type ProductProps = {
  product: Product;
};
