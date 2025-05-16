import ItemsCarts from "@/components/cart/ItemsCarts";
import OrderSummary from "@/components/cart/OrderSummary";

export default function page() {
  return (
    <section className="container mx-auto py-6">
      <h2 className="text-3xl font-bold">Shopping Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 px-2">
        <ItemsCarts />
        <OrderSummary />
      </div>
    </section>
  );
}
