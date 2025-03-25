"use client";
import {
  Category,
  getDefaultFilter,
  SortOption,
  Filter,
} from "@/types/Product";
import { useContext, useState, createContext } from "react";
import { PropsWithChildren } from "react";
import { createStore, StoreApi, useStore } from "zustand";

type ProductFilterStore = {
  filter: Filter;
  resetFilter: () => void;
  addCategory: (category: Category) => void;
  removeCategory: (category: Category) => void;
  setSort: (sortOption: SortOption) => void;
  setMinPrice: (min: number) => void;
  setMaxPrice: (max: number) => void;
};

const ProductFilterContext = createContext<
  StoreApi<ProductFilterStore> | undefined
>(undefined);

type ProductFilterProviderProps = PropsWithChildren & {
  initialFilter?: Filter;
};

export default function ProductFilterProvider({
  children,
  initialFilter,
}: ProductFilterProviderProps) {
  const [store] = useState(() =>
    createStore<ProductFilterStore>((set) => ({
      filter: initialFilter || getDefaultFilter(),
      resetFilter: () => set({ filter: getDefaultFilter() }),
      addCategory: (category: Category) =>
        set((state) => ({
          filter: {
            ...state.filter,
            category: [...state.filter.category, category],
          },
        })),
      removeCategory: (category: Category) =>
        set((state) => ({
          filter: {
            ...state.filter,
            category: state.filter.category.filter((c) => c !== category),
          },
        })),
      setSort: (sortOption: SortOption) =>
        set((state) => ({ filter: { ...state.filter, sort: sortOption } })),
      setMinPrice: (minPrice: number) =>
        set((state) => ({ filter: { ...state.filter, minPrice } })),
      setMaxPrice: (maxPrice: number) =>
        set((state) => ({ filter: { ...state.filter, maxPrice } })),
    }))
  );

  return (
    <ProductFilterContext.Provider value={store}>
      {children}
    </ProductFilterContext.Provider>
  );
}

export function useProductFilterStore<T>(
  selector: (store: ProductFilterStore) => T
) {
  const context = useContext(ProductFilterContext);

  if (!context) {
    throw new Error(
      "useProductFilterStore must be used within a ProductFilterProvider"
    );
  }

  return useStore(context, selector);
}
