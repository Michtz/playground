'use client';
import React, { useCallback, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Electronics' | 'Books' | 'Clothing';
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

// Beispieldaten zum Testen
export const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Mechanische Tastatur',
    price: 129.99,
    category: 'Electronics',
    inStock: true,
  },
  {
    id: 2,
    name: 'Developer Hoodie',
    price: 49.99,
    category: 'Clothing',
    inStock: true,
  },
  {
    id: 3,
    name: 'React & TypeScript Guide',
    price: 34.99,
    category: 'Books',
    inStock: false,
  },
];

interface UseShoppingCartProps {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  deleteItemFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  calculateTotal: () => number;
  getItems: () => CartItem[];
}

export const useShoppingCart = (): UseShoppingCartProps => {
  const [items, setItems] = useState<CartItem[]>([]);

  const getItems = (): CartItem[] => {
    return items;
  };

  const addToCart = (product: Product, quantity = 1) => {
    if (!product.inStock) return;

    setItems((currentItems) => {
      const existing = currentItems.find(
        (item) => item.product.id === product.id,
      );

      if (existing) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...currentItems, { product, quantity }];
    });
  };

  const deleteItemFromCart = (productId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      deleteItemFromCart(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const calculateTotal = () => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  return {
    items,
    addToCart,
    deleteItemFromCart,
    updateQuantity,
    calculateTotal,
    getItems,
  };
};

// ___________ All over this should work as intended ________________________________________________________

/*
// components/ShoppingCart.tsx
import React from 'react';
import { Product } from './types';
import { useShoppingCart } from './hooks/useShoppingCart';
*/

interface ShoppingCartProps {
  products: Product[];
}

const ShoppingCartContainer: React.FC<ShoppingCartProps> = ({ products }) => {
  const {
    items,
    addToCart,
    deleteItemFromCart,
    updateQuantity,
    calculateTotal,
    getItems,
  } = useShoppingCart();

  return (
    <>
      <h1>Shopping Cart</h1>

      <div>
        {items.map((item) => (
          <div
            style={{
              padding: '10px 60px',
              margin: '10px',
              width: '80%',
              border: '1px solid white',
            }}
            key={item.product.id}
          >
            <span style={{ display: 'inline-block' }}>
              <h2>{item.product.name}</h2>
              <p children={item.product.price} />
            </span>
            <p>{item.quantity}</p>
          </div>
        ))}
        {/* TODO: Implementiere die Produktliste mit Add-to-Cart Buttons */}
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                onClick={() => addToCart(product, 1)}
                disabled={!product.inStock}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Your Cart</h2>
        {/* TODO: Implementiere die Warenkorbansicht */}

        <div>
          <strong>Total: ${calculateTotal().toFixed(2)}</strong>
        </div>
      </div>
    </>
  );
};

const FunctionPlayground = () => {
  return <ShoppingCartContainer products={sampleProducts} />;
};

export default FunctionPlayground;
