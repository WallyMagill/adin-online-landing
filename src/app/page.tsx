import Header from "@/Components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Welcome to ADIN
          </h1>
          <p className="text-gray-600 text-lg">
            Your landing page content will go here
          </p>
        </div>
      </main>
    </div>
  );
}
