"use client";
import { useProductContext } from "@/context/ProductMessageContext";
import { useAutoTimer } from "@/hooks/useAutoTimer";

interface MessageProps {
  page?: number;
}

export default function MessageProduct({ page }: MessageProps) {
  const { messageProduct, setMessageProduct, errorMessage, setErrorMessage } =
    useProductContext();

  useAutoTimer(() => {
    setMessageProduct(false);
    setErrorMessage(false);
  }, 5000);

  const messageText = errorMessage
    ? "Error ao inserir o produto."
    : page == 1
    ? "Produto atualizado com sucesso"
    : "Produto cadastrado com sucesso";

  const bgColor = errorMessage ? "bg-red-100" : "bg-green-100";
  const textColor = errorMessage ? "text-red-500" : "text-green-500";

  return (
    <>
      <div
        className={`${bgColor}
         p-2 rounded-md w-full mb-7 text-center transition-opacity duration-1000 ease-in-out delay-150 ${
           messageProduct ? "opacity-100" : "opacity-0"
         }`}
      >
        <strong className={`${textColor} transition ease-in-out delay-150`}>
          {messageText}
        </strong>
      </div>
    </>
  );
}
