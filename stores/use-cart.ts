"use client";
import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  itemCount: 0,

  addItem: (newItem, quantity = 1) => {
    const { items } = get();
    const existingIndex = items.findIndex((item) => item.id === newItem.id);

    let updatedItems;
    if (existingIndex > -1) {
      // Update quantity if item already exists
      updatedItems = [...items];
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity: updatedItems[existingIndex].quantity + quantity,
      };
    } else {
      // Add new item with the provided quantity
      updatedItems = [...items, { ...newItem, quantity }];
    }

    set({
      items: updatedItems,
      itemCount: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
    });
  },

  removeItem: (id: string) => {
    const { items } = get();
    const updatedItems = items.filter((item) => item.id !== id);
    set({
      items: updatedItems,
      itemCount: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
    });
  },

  updateQuantity: (id: string, quantity: number) => {
    if (quantity < 1) return;
    const { items } = get();
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    set({
      items: updatedItems,
      itemCount: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
    });
  },

  clearCart: () => {
    set({
      items: [],
      itemCount: 0,
    });
  },
}));

export default useCartStore;
