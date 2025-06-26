import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "shared/redux/store";
import { clearCart, removeFromCart } from "shared/redux/slices/cartSlice";
import Badge from "./Badge";
import Modal from "./Modal";
import Button from "./Button";

export const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
      >
        🛒 Carrinho
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-2">{totalItems}</Badge>
        )}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-2">Carrinho de Compras</h2>
        {items.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          <ul className="mb-4 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-1 border-b last:border-b-0">
                <span>
                  {item.title} <span className="text-xs text-gray-500">x{item.quantity}</span>
                </span>
                <span className="text-green-700 font-semibold mr-2">R$ {(item.price * item.quantity).toFixed(2)}</span>
                <button
                  className="text-red-500 hover:underline text-xs"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center">
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
