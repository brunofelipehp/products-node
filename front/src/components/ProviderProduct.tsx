"use client";
import { ProductProvider } from "@/context/ProductMessageContext";

export const ProviderProduct = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ProductProvider>{children}</ProductProvider>;
};
