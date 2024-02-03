import React, { createContext, useCallback, useContext, useState } from "react";

const ProductContext = createContext({});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageProduct, setMessageProduct] = useState<boolean>();

  const handleMessageChange = useCallback((isMsg: boolean) => {
    setMessageProduct(isMsg);
  }, []);

  return (
    <ProductContext.Provider value={{ messageProduct, handleMessageChange }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
