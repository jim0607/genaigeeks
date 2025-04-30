export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Genaigeeks</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </nav>
      </header>
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-2">Welcome to Genaigeeks</h2>
        <p className="text-gray-600">Your AI learning and sharing hub. Discover knowledge, ask questions, and grow your expertise.</p>
        <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Get Started</button>
      </section>
    </main>
  );
}
