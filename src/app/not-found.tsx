import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="mt-24 grid place-items-center">
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="my-8 text-4xl font-bold text-blue-600">404</p>
          <p>Could not find requested resource</p>
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            Return Home
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default NotFound;
