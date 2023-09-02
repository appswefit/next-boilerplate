import { IProduct } from '@/infrastructure/hooks/product/dtos/GetProductListDTO';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface ICartContext {
  cart: IProduct[];
  totalCartValue: number;
  addProductInCart: (product: IProduct) => void;
  deleteProductInCart: (productId: number) => void;
  cleanCart: () => void;
}

export interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([]);

  const totalCartValue = useMemo(() => {
    const total = cart.reduce((acc, value) => acc + value.price, 0);
    return total;
  }, [cart]);

  const addProductInCart = useCallback(
    async (product: IProduct) => {
      try {
        const productInCart = cart.find(
          (productInCart: IProduct) => productInCart.id === product.id,
        );

        if (productInCart) return;

        setCart(oldState => [...oldState, product]);
      } catch (err) {
        console.error('FetchProducts error:', err);
      }
    },
    [cart],
  );

  const deleteProductInCart = useCallback(
    async (productId: number) => {
      try {
        const newProductsInCart = cart.filter(
          (productInCart: IProduct) => productInCart.id !== productId,
        );

        setCart(newProductsInCart);
      } catch (err) {
        console.error('FetchProducts error:', err);
      }
    },
    [cart],
  );

  const cleanCart = useCallback(() => {
    try {
      setCart([]);
    } catch (err) {
      console.error('Clean the cart error:', err);
    }
  }, []);

  const valueObj = useMemo(
    () => ({
      cart,
      totalCartValue,
      addProductInCart,
      deleteProductInCart,
      cleanCart,
    }),
    [cart, totalCartValue, addProductInCart, deleteProductInCart, cleanCart],
  );

  return (
    <CartContext.Provider value={valueObj}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
