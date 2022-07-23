import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Dummy_data = [
  { id: "p1", price: 6, title: "my first book", description: "amazing book" },
  { id: "p2", price: 900, title: "phone", description: "iphone 13 pro max" },
  { id: "p3", price: 1400, title: "notebook", description: "macbook 15inc 2019" },
  { id: "p4", price: 5, title: "drink", description: "ice tea" }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_data.map(product => (
          <ProductItem
          key= {product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
