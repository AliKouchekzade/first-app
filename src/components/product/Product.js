import style from "./Product.module.css";
import { FaTrashCan } from "react-icons/fa6";

const Product = ({ product, onSetText, increase, decrease, onDelete }) => {
  return (
    <div className={style.product}>
      <p>product : {product.title}</p>
      <p>price : {product.price} $</p>
      <span>{product.quantity} </span>
      <input type="text" value={product.title} onChange={onSetText}></input>
      <button onClick={increase}>+</button>
      <button
        className={`${product.quantity === 1 && style.remove}`}
        onClick={decrease}
      >
        {product.quantity > 1 ? "-" : <FaTrashCan />}
      </button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default Product;
