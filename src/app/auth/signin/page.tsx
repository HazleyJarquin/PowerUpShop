"use client";

import { titleFont } from "@/config/fonts";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SignIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center w-[80%] md:w-[20%]">
        <h1 className={`${titleFont.className} antialiased text-3xl mb-4`}>
          Iniciar Sesión
        </h1>
        <button
          onClick={() => signIn("google", { redirect: true, callbackUrl })}
          className="flex gap-2 items-center rounded-lg bg-cyan-100 p-3 w-full hover:bg-cyan-200 border-b-2 border-cyan-200 hover:border-cyan-300"
        >
          <Image
            src="/google/logo-google.png"
            width={20}
            height={20}
            alt="Google Logo"
          />
          Iniciar Sesión con Google
        </button>

        <div className="flex items-center mb-3 w-full">
          <hr className="h-0 border-b border-solid border-grey-500 grow" />
          <p className="mx-4 text-grey-600">or</p>
          <hr className="h-0 border-b border-solid border-grey-500 grow" />
        </div>

        <div>
          <p className="opacity-30">username, password coming soon..</p>
        </div>
      </div>
    </div>
  );
}

// Wrap your component with Suspense
export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignIn />
    </Suspense>
  );
}
