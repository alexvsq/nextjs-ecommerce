"use client";
import DivisorLine from "@/components/shared/DivisorLine";
import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";
import NumberFlow from "@number-flow/react";

export default function OrderSummary() {
  const { cartItems } = useCartStore();

  let subTotal = 0;
  let discount = 0;
  let total = 0;

  if (cartItems.length > 0) {
    cartItems.forEach((item) => {
      subTotal +=
        item.product.price *
        (1 - item.product.discountPercentage / 100) *
        item.quantity;
    });

    discount = subTotal * 0.05;
    total = (subTotal + 15) * 0.95;
  }

  return (
    <div className="md:col-span-1 border border-black/10 rounded-[20px] px-4 py-6 h-fit">
      <header className="pb-5">
        <p className="text-xl font-bold">Order Summary</p>
      </header>

      <article className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-black/60 text-lg">Subtotal</p>
          <p className="text-black text-lg font-bold">${subTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black/60 text-lg">Discount (-5%)</p>
          <p className="text-red text-lg font-bold">-${discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black/60 text-lg">Delivery Fee</p>
          <p className="text-black text-lg font-bold">$15</p>
        </div>
      </article>

      <DivisorLine className="my-3 " />

      <footer className="flex flex-col gap-4 py-2">
        <div className="flex justify-between items-center">
          <p className="text-black text-lg">Total</p>
          <p className="text-black text-xl font-bold">
            {/* ${total.toFixed(2)} */}
            <NumberFlow
              value={total}
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
            />
          </p>
        </div>

        <div className="flex gap-2 ">
          <div className="bg-gray rounded-full px-4 py-2 flex items-center gap-2">
            <Image
              src="/icons/promo-input.png"
              alt="promo-input"
              width={20}
              height={20}
            />
            <input
              className="focus:outline-none w-28 md:w-auto"
              type="text"
              placeholder="Promo Code"
            />
          </div>

          <button className="bg-black py-2 rounded-full flex items-center justify-center flex-1 text-white cursor-pointer">
            Apply
          </button>
        </div>

        <button className="bg-black py-3 rounded-full flex gap-2 items-center justify-center w-full text-white cursor-pointer">
          Go to Checkout
          <Image
            src="/icons/arrow-checkout.png"
            alt="arrow-checkout"
            width={20}
            height={20}
          />
        </button>
      </footer>
    </div>
  );
}
