import React from "react";
import { Cart } from "shared/components/ui/Cart";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-primary text-neutral px-6 py-4 shadow">
      <img src="./images/logo.png" alt="Grocery" />
      <Cart />
    </header>
  );
};

export default Header;