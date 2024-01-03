"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { ArrowRight } from "lucide-react";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";

const errorMessages = {
  emailError: "Email is incorrect",
  passwordError: "Password is incorrect",
  emailAndPasswordError: "Email and Password are incorrect",
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const getErrorMsg = () => {
    if (errors.email && errors.password)
      return errorMessages.emailAndPasswordError;
    if (errors.email) return errorMessages.emailError;
    if (errors.password) return errorMessages.passwordError;
  };

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({});

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    mutate({ email, password });
  };

  return (
    <>
      <div className="container relative flex flex-col justify-center pt-20 lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-2",
              })}
              href="/sign-in"
            >
              Already have an account? Sign in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid gap-1 py-2">
                <Label className="mb-2" htmlFor="email">
                  Email
                </Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.email,
                  })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-1 py-2">
                <Label className="mb-2" htmlFor="password">
                  Password
                </Label>
                <Input
                  {...register("password")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder="password"
                  type="password"
                />
              </div>
              <Button>Sign Up</Button>
              {!!Object.keys(errors).length && (
                <h3 className="text-center text-xl font-bold text-red-500">
                  {getErrorMsg()}
                </h3>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
