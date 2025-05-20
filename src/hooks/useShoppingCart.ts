import { useCartStore } from "@/stores/cartStore";
import { CartProductType, ProductType } from "@/types/types";

export function useShoppingCart() {
  const { cartItems, setCartItems } = useCartStore();

  const addToCart = (product: ProductType, quantity: number) => {
    const isInCart = cartItems.find((item) => item.product.id === product.id);
    if (isInCart) {
      const newList = cartItems.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });
      setCartItems(newList);

      return "Product updated quantity to " + quantity;
    }
    const itemToCart: CartProductType = {
      quantity,
      product,
    };

    const newCartItems = [itemToCart, ...cartItems];
    setCartItems(newCartItems);
    return "Product added to cart";
  };

  const removeFromCart = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.product.id !== id);
    setCartItems(newCartItems);
    return "Product removed from cart";
  };

  const removeAllFromCart = () => {
    setCartItems([]);
    return "All products removed from cart";
  };

  const updateQuantity = (id: number, quantity: number) => {
    const newCartItems = cartItems.map((item) => {
      if (item.product.id === id) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  return { addToCart, removeFromCart, removeAllFromCart, updateQuantity };
}
