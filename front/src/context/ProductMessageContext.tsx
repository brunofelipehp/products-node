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
  countPage: number;
  setCountPage: Dispatch<SetStateAction<number>>;
}

const ProductContext = createContext<MessageProductProps>({
  messageProduct: false,
  setMessageProduct: (): boolean => false,
  errorMessage: false,
  setErrorMessage: (): boolean => false,
  countPage: 0,
  setCountPage: (): number => 0,
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageProduct, setMessageProduct] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [countPage, setCountPage] = useState<number>(0);

  return (
    <ProductContext.Provider
      value={{
        messageProduct,
        setMessageProduct,
        errorMessage,
        setErrorMessage,
        countPage,
        setCountPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
