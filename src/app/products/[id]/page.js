import ProductsDetails from "../../components/ProductDetails/ProductDetails";
import products from "../../data/Products";

// Needed for static export
export async function generateStaticParams() {
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default function ProductPage({ params }) {
  return <ProductsDetails productId={params.id} />;
}
