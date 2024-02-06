import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export interface MessageProductProps {
  messageProduct: boolean;
  setMessageProduct: Dispatch<SetStateAction<boolean>>;
}

const ProductContext = createContext<MessageProductProps>({
  messageProduct: false,
  setMessageProduct: (): boolean => false,
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageProduct, setMessageProduct] = useState(false);

  return (
    <ProductContext.Provider value={{ messageProduct, setMessageProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
