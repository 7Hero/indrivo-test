import { AirplaneIcon, HelicopterIcon, RocketIcon, UFOIcon } from "../assets";
import { Product, ProductProps } from "../types";

const products: Product[] = [
  {
    name: "myProduct",
    color: "Sunny Orange",
    bgColor: "#FFF6CE",
    textColor: "#E76101",
    icon: HelicopterIcon,
  },
  {
    name: "myProduct Plus",
    color: "Deep Blue",
    bgColor: "#A2D7E7",
    textColor: "#0465AC",
    icon: RocketIcon,
  },
  {
    name: "myProduct Pro",
    color: "Floral Green",
    bgColor: "#ADEDB3",
    textColor: "#018D31",
    icon: UFOIcon,
  },
  {
    name: "myProduct Ultra",
    color: "Interstellar Grey",
    bgColor: "#46454A",
    textColor: "#FFF",
    icon: AirplaneIcon,
  },
  {
    name: "myProduct",
    color: "Sunny Orange",
    bgColor: "#FFF6CE",
    textColor: "#E76101",
    icon: HelicopterIcon,
  },
  {
    name: "myProduct Plus",
    color: "Deep Blue",
    bgColor: "#A2D7E7",
    textColor: "#0465AC",
    icon: RocketIcon,
  },
  {
    name: "myProduct Pro",
    color: "Floral Green",
    bgColor: "#ADEDB3",
    textColor: "#018D31",
    icon: UFOIcon,
  },
];

const ProductCard = ({ product }: ProductProps) => (
  <div
    key={product.name}
    className="product-card"
    style={{ backgroundColor: product.bgColor, color: product.textColor }}
  >
    {<product.icon />}
    <h3 className="product-card__name">{product.name}</h3>
    <p className="product-card__color">{product.color}</p>
  </div>
);

export const Products = () => (
  <div className="page__content">
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  </div>
);
