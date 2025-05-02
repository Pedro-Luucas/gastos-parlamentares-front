import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/politico/${searchTerm.trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">Gastos Parlamentares</h1>

          {/* Barra de pesquisa */}
          <div className="flex gap-2 w-1/2">
            <input
              type="text"
              placeholder="Buscar por CPF ou nome"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Buscar
            </button>
          </div>

          {/* Links */}
          <nav className="flex gap-4 text-gray-700 font-medium">
            <a href="/ranking" className="hover:text-blue-600">Ranking</a>
            <a href="/pesquisa-avancada" className="hover:text-blue-600">Pesquisa Avançada</a>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Bem-vindo à plataforma!</h2>
        <p className="text-gray-600">Use a barra de pesquisa acima para consultar gastos de políticos ou explore rankings e filtros avançados.</p>
      </main>
    </div>
  );
}
