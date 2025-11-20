export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Laya</h1>
      <p className="text-lg text-gray-600 max-w-md">
        Transform your life, one session at a time.
      </p>
      <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800">
        Get Early Access
      </button>
    </main>
  );
}