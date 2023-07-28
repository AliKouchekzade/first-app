import style from "./Product.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { useRef, useEffect } from "react";
import { useProductsAction } from "../providers/productsProvider";

const Product = ({ product, preTitle }) => {
  const inputRef = useRef();

  const { deleteHandler, increaseHandler, decreseHandler, setTextHandler } =
    useProductsAction();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={style.product}>
      <p>product : {product.title} + {preTitle}</p>
      <p>price : {product.price} $</p>
      <span>{product.quantity} </span>
      <input
        ref={inputRef}
        type="text"
        value={product.title}
        onChange={(event) => setTextHandler(event, product.id)}
      ></input>
      <button onClick={() => increaseHandler(product.id)}>+</button>
      <button
        className={`${product.quantity === 1 && style.remove}`}
        onClick={() => decreseHandler(product.id)}
      >
        {product.quantity > 1 ? "-" : <FaTrashCan />}
      </button>
      <button onClick={() => deleteHandler(product.id)}>delete</button>
    </div>
  );
};

export default Product;
