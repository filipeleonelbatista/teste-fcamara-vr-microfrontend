import React from "react";
import { Cart } from "shared/components/ui/Cart";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-primary text-neutral px-6 py-4 shadow">
      <h1 className="text-2xl font-bold">Green Cart Haven</h1>
      <Cart />
    </header>
  );
};

export default Header;