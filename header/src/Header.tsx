import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "shared/redux/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between bg-primary text-neutral px-6 py-4 shadow">
      <h1 className="text-2xl font-bold">Green Cart Haven</h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="relative">
            Carrinho
            <Badge className="absolute -top-2 -right-2">{total}</Badge>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <h2 className="text-lg font-semibold mb-2">Itens no Carrinho</h2>
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.title} x{item.quantity}</span>
                  <span>R$ {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;