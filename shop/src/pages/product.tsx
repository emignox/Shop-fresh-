import { useParams } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Product, Products } from "../components/DataShop";

function SingleProduct() {
  const { productTitle } = useParams();
  const product = Products.find((p) => p.title === productTitle);

  if (!product) {
    return <div>Prodotto non trovato</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.photoUrl} alt={product.title} />
      <p>Categoria: {product.category}</p>
      <p>Prezzo: {product.price}</p>
      <p>Descrizione: {product.description}</p>
    </div>
  );
}

export default SingleProduct;
