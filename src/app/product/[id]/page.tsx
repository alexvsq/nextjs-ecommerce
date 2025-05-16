import Product from "@/components/product/Product";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductSkeleton } from "@/components/shared/Skeletons";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <Product id={Number(id)} />
    </Suspense>
  );
}
