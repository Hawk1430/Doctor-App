import { AuthButton } from "@/components/AuthButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>

      <AuthButton />
      {/* Rest of your existing content */}
    </main>
  );
}
