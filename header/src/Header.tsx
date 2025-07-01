import React from "react";
import { Cart } from "shared/components/ui/Cart";

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between bg-primary text-neutral px-6">
      <img className="h-20" src="./images/logo.png" alt="Grocery" />
      <Cart />
    </header>
  );
};

export default Header;