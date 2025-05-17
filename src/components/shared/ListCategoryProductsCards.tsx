import CardProduct from "@/components/shared/CardProduct";
import { ProductType } from "@/types/types";
import { getByCategoryWithLimit } from "@/api/api";

interface Props {
  categoryCode: string;
  limit: number;
}

export default async function ListCategoryProductsCards({
  categoryCode,
  limit,
}: Props) {
  const res = await getByCategoryWithLimit(categoryCode, limit);

  return (
    <div className="">
      {res ? (
        <div className="container mx-auto flex  justify-between gap-5 w-full overflow-x-auto py-10 pl-2 md:pl-0">
          {res.products.map((item: ProductType) => (
            <CardProduct key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p>error</p>
      )}
    </div>
  );
}
