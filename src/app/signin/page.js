import { getProviders } from "next-auth/react";
import { AuthButton } from "@/components/AuthButton";

export default async function SignIn() {
  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Sign In</h1>
        <div className="flex flex-col space-y-4">
          {Object.values(providers).map((provider) => (
            <AuthButton key={provider.name} provider={provider} />
          ))}
        </div>
      </main>
    </div>
  );
}
