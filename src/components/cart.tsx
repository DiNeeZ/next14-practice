"use clien";

import React from "react";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Cart = () => (
  <Sheet>
    <SheetTrigger>
      <ShoppingCart className="w-26 h-6 flex-shrink-0 text-gray-400" />
    </SheetTrigger>
    <SheetContent className="bg-transparent">
      <SheetHeader>
        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export default Cart;
