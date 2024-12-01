'use client';
import React, { useCallback, useState } from 'react';
// types.ts
// Grundlegende Typdefinitionen für unseren Shop
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

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    if (!product.inStock) {
      return;
    }

    if (items.find((item) => item.product.id === product.id)) {
      const newItems = items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setItems(newItems);
    } else {
      setItems([...items, { product, quantity }]);
    }
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    if (items.find((item) => item.product.id === productId)) {
      const newItems = items.filter((item) => item.product.id !== productId);
      setItems(newItems);
    } else {
      return; // Todo: error message "Produkt nicht im Warenkorb"
    }
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    items.map((item) => {
      if (item.product.id === productId) {
        if (quantity === 0) {
          removeFromCart(productId);
          return;
        }
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
  }, []);

  const calculateTotal = useCallback(() => {
    /*    // Berechne den Gesamtpreis aller Produkte

    // 1. Iteriere über alle Produkte im Warenkorb
    // 2. Multipliziere den Preis mit der Menge
    // 3. Summiere alle Preise
    // 4. Runde das Ergebnis auf zwei Nachkommastellen

    return 0;*/
  }, [items]);

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal,
  };
};

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
  console.log(availableProducts);
  // TODO: Implementiere das UI
  // - Liste verfügbare Produkte auf
  // - Zeige den Warenkorb mit allen Produkten und Mengen
  // - Füge Buttons zum Hinzufügen/Entfernen/Aktualisieren hinzu
  // - Zeige den Gesamtpreis an

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {/* Produktliste */}
      <div className="mb-8">
        <h2 className="">Available Products</h2>
        {/* TODO: Implementiere die Produktliste mit Add-to-Cart Buttons */}
        <ul>
          {availableProducts.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Warenkorb */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
        {/* TODO: Implementiere die Warenkorbansicht */}

        <div className="mt-4">
          {/*    <strong>Total: ${calculateTotal().toFixed(2)}</strong>*/}
        </div>
      </div>
    </div>
  );
};

const FunctionPlayground = () => {
  return <></> /*<ShoppingCart availableProducts={sampleProducts} />*/;
};

export default FunctionPlayground;
