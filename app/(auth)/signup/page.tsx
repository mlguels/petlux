import Link from "next/link";

import AuthForm from "@/components/auth-form";
import H1 from "@/components/h1";

export default function Page() {
  return (
    <main>
      <H1 className="mb-5 text-center">Sign up</H1>
      <AuthForm type="signup" />

      <p className="mt-6 text-sm text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link href="/login" className="font-medium">
          Log In
        </Link>
      </p>
    </main>
  );
}
