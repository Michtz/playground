'use client';
import React, { useState } from 'react';

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

export const useShoppingCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

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

  // to delete all of a item
  const removeFromCart = (productId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
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
    removeFromCart,
    updateQuantity,
    calculateTotal,
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
  availableProducts: Product[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ availableProducts }) => {
  const { items, addToCart, removeFromCart, updateQuantity, calculateTotal } =
    useShoppingCart();
  console.log(availableProducts, items);
  // TODO: Implementiere das UI
  // - Liste verfügbare Produkte auf
  // - Zeige den Warenkorb mit allen Produkten und Mengen
  // - Füge Buttons zum Hinzufügen/Entfernen/Aktualisieren hinzu
  // - Zeige den Gesamtpreis an

  return (
    <>
      <h1>Shopping Cart</h1>

      <div>
        <h2>Available Products</h2>
        {/* TODO: Implementiere die Produktliste mit Add-to-Cart Buttons */}
        <ul>
          {availableProducts.map((product) => (
            <li key={product.id}>
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
              >
                Add to Cart
              </button>
            </li>
          ))}
          {availableProducts.map((product) => (
            <li key={product.id}>
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                onClick={() => removeFromCart(product.id)}
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
  return <ShoppingCart availableProducts={sampleProducts} />;
};

export default FunctionPlayground;
