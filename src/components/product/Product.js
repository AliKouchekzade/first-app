import style from './Product.module.css';
import {FaTrashCan} from 'react-icons/fa6';

const Product = (props) => {
  return (
    <div className={style.product}>
      <p>product : {props.product.title}</p>
      <p>price : {props.product.price} $</p>
      <span>{props.product.quantity} </span>
      <input type='text' value={props.product.title} onChange={props.onSetText}></input>
      <button onClick={props.increase}>+</button>
      <button className={`${props.product.quantity === 1 && style.remove}`} onClick={props.decrease}>{props.product.quantity > 1 ? "-" : <FaTrashCan />}</button>
      <button onClick={props.delete}>delete</button>
    </div>
  );
};

export default Product;
