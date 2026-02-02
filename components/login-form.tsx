import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-border/50">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center mb-4">
                <h1 className="font-header text-3xl text-foreground">
                  Welcome back
                </h1>
                <p className="text-foreground/60 text-balance">
                  Sign in to your Lahwita account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm text-primary/70 hover:text-primary underline-offset-4 hover:underline transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field className="mt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-lg py-6 text-base font-medium shadow-[0_4px_0_0_hsl(var(--primary)/0.7)] hover:shadow-[0_2px_0_0_hsl(var(--primary)/0.7)] hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all"
                >
                  Sign in
                </Button>
              </Field>
              <FieldDescription className="text-center mt-4">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-primary">
                  Sign up
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-[#1A0E0A] relative hidden md:block">
            <Image
              src="/login.jpg"
              width={1920}
              height={1080}
              alt="Legal scales"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center text-foreground/40">
        By continuing, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
