import style from './Product.module.css';

const Product = (props) => {
  return (
    <div className={style.product}>
      <p>product : {props.product.title}</p>
      <p>price : {props.product.price} $</p>
      <span>{props.product.quantity} </span>
      <button onClick={props.increase}>increament</button>
      <button onClick={props.delete}>delete</button>
    </div>
  );
};

export default Product;
