"use clien";

import React from "react";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { cn, formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
  const itemsCount = 0;
  const fee = 1;
  const total = 23;

  return (
    <Sheet>
      <SheetTrigger
        className={cn(buttonVariants({ variant: "ghost" }), "p-2")}
        aria-label="Open cart"
      >
        <ShoppingCart
          aria-hidden="true"
          className="w-26 h-6 flex-shrink-0 text-gray-400"
        />
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="text-center">Cart ({itemsCount})</SheetTitle>
        </SheetHeader>
        {itemsCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* TODO: cart logic */}
              cart items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    className={buttonVariants({ className: "w-full" })}
                    href="/cart"
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image
                src="/hippo-empty-cart.png"
                alt="empty shopping cart hippo"
                fill
              />
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
