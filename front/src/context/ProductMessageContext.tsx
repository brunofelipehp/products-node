import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface MessageProductProps {
  messageProduct: boolean;
  setMessageProduct: Dispatch<SetStateAction<boolean>>;
  errorMessage: boolean;
  setErrorMessage: Dispatch<SetStateAction<boolean>>;
}

const ProductContext = createContext<MessageProductProps>({
  messageProduct: false,
  setMessageProduct: (): boolean => false,
  errorMessage: false,
  setErrorMessage: (): boolean => false,
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageProduct, setMessageProduct] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        messageProduct,
        setMessageProduct,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
