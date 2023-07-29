import style from "./Product.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { useRef, useEffect } from "react";
import { useProductsAction } from "../providers/productsProvider";

const Product = ({ product, preTitle }) => {
  const inputRef = useRef();

  //const { deleteHandler, increaseHandler, decreseHandler, setTextHandler } =useProductsAction();
  const dispatchProducts = useProductsAction();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={style.product}>
      <p>
        product : {product.title} + {preTitle}
      </p>
      <p>price : {product.price} $</p>
      <span>{product.quantity} </span>
      <input
        ref={inputRef}
        type="text"
        value={product.title}
        onChange={(event) =>
          dispatchProducts({ type: "setText", id: product.id, event: event })
        }
      ></input>
      <button
        onClick={() =>
          dispatchProducts({ type: "add", value: 1, id: product.id })
        }
      >
        +
      </button>
      <button
        className={`${product.quantity === 1 && style.remove}`}
        onClick={() =>
          dispatchProducts({ type: "add", value: -1, id: product.id })
        }
      >
        {product.quantity > 1 ? "-" : <FaTrashCan />}
      </button>
      <button
        onClick={() => dispatchProducts({ type: "delete", id: product.id })}
      >
        delete
      </button>
    </div>
  );
};

export default Product;
