import "./product-card.css";

export type ProductProps = {
  name: string;
  variant: "orange" | "blue" | "green" | "grey";
  Icon: React.FC;
};

const variantColors = {
  orange: "Sunny Orange",
  blue: "Deep Blue",
  green: "Floral Green",
  grey: "Interstellar Grey",
};

export const ProductCard = ({ Icon, ...props }: ProductProps) => (
  <button
    key={props.name}
    className={`product-card product-card--${props.variant}`}
  >
    <Icon />
    <h3 className="product-card__name">{props.name}</h3>
    <p className="product-card__color">{variantColors[props.variant]}</p>
  </button>
);
