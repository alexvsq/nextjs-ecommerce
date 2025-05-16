import { getProductById } from "@/api/api";
import { notFound } from "next/navigation";
import ImagesProduct from "@/components/product/ImagesProduct";
import InfoSideProduct from "@/components/product/InfoSideProduct";
import ProductReviews from "@/components/product/ProductReviews";
import AlsoLike from "@/components/product/AlsoLike";

export default async function Product({ id }: { id: number }) {
  const product = await getProductById(id);
  if (!product) {
    notFound();
  }
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row py-8 gap-4">
        <div className="md:w-1/2">
          <ImagesProduct images={product.images} />
        </div>
        <aside className="md:w-1/2">
          <InfoSideProduct product={product} />
        </aside>
      </div>

      <ProductReviews Reviews={product.reviews} />

      <AlsoLike categoryCode={product.category} />
    </section>
  );
}
