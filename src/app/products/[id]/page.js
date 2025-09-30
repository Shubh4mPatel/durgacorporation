
import ProductsDetails from "../../components/ProductDetails/ProductDetails";
import products from "../../data/Products";
import ProductHeroSection from '../../components/Producthero-section/ProductHeroSection'

// Needed for static export
export async function generateStaticParams() {
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  
    
    return <><ProductHeroSection />< ProductsDetails productId={id} />;</>
}