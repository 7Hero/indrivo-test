import { AirplaneIcon, HelicopterIcon, RocketIcon, UFOIcon } from "../assets";
import { ProductCard, ProductProps } from "./product-card";

const products: ProductProps[] = [
  {
    name: "myProduct",
    variant: "orange",
    Icon: HelicopterIcon,
  },
  {
    name: "myProduct Plus",
    variant: "blue",
    Icon: RocketIcon,
  },
  {
    name: "myProduct Pro",
    variant: "green",
    Icon: UFOIcon,
  },
  {
    name: "myProduct Ultra",
    variant: "grey",
    Icon: AirplaneIcon,
  },
  {
    name: "myProduct",
    variant: "orange",
    Icon: RocketIcon,
  },
  {
    name: "myProduct Pro",
    variant: "green",
    Icon: UFOIcon,
  },
  // Uncomment the following lines to see the grid with more products
  // {
  //   name: "myProduct Ultra",
  //   variant: "grey",
  //   Icon: HelicopterIcon,
  // },
  // {
  //   name: "myProduct",
  //   variant: "orange",
  //   Icon: HelicopterIcon,
  // },
];

export const Products = () => (
  <div className="page__content">
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);
