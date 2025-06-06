import { Button } from "@/components/ui/button";

export const NewsLetter = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Stay Updated
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Subscribe to our newsletter for new product announcements and
              exclusive offers
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
