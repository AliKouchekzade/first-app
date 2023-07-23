const Product = (props) => {
  return (
    <div>
      <p>product : {props.name}</p>
      <p>price : {props.price}</p>
      {props.children}
    </div>
  );
};

export default Product;
