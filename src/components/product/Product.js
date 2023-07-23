import style from './Product.module.css';

const Product = (props) => {
  return (
    <div className={style.product}>
      <p>product : {props.name}</p>
      <p>price : {props.price}</p>
      {props.children}
    </div>
  );
};

export default Product;
