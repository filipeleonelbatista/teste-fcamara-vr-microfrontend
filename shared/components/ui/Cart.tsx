import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "shared/redux/store";
import { clearCart, removeFromCart } from "shared/redux/slices/cartSlice";
import Badge from "./Badge";
import Modal from "./Modal";
import { ShoppingCart } from "lucide-react"

export const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {
        !open && (
          <button className="w-[40px] h-[40px] p-2 flex rounded-full items-center justify-center bg-green-300 text-white hover:bg-green-500"
            onClick={() => setOpen(true)}
          >
            <ShoppingCart className="w-8 h-8" />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2">{totalItems}</Badge>
            )}
          </button>
        )
      }
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-2">Carrinho de Compras</h2>
        {items.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          <ul className="mb-4 max-h-60 overflow-y-auto divide-y divide-gray-200">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-3 px-2 bg-white hover:bg-gray-50 transition"
              >
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium truncate">{item.title}</span>
                  <span className="text-xs text-gray-500">
                    Quantidade: <span className="font-semibold">{item.quantity}</span>
                  </span>
                </div>
                <div className="flex flex-col items-end min-w-[90px] ml-4">
                  <span className="text-green-700 font-semibold">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="text-red-500 hover:underline text-xs mt-1"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between gap-2 items-center">
          <button
            className="text-sm text-gray-600 hover:underline"
            onClick={() => dispatch(clearCart())}
            disabled={items.length === 0}
          >
            Limpar carrinho
          </button>
          <button
            className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800"
            onClick={() => setOpen(false)}
          >
            Fechar
          </button>
        </div>
      </Modal>
    </>
  );
};
