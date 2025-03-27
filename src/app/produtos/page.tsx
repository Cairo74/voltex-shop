import Image from "next/image";

export default function ProdutosPage() {
  const produtos = [
    {
      id: 1,
      nome: "Teclado mecânico HyperX",
      descricao: "Teclado mecânico gaming com switches RGB e design ergonômico para máxima performance.",
      preco: "R$ 699,90",
      imagem: "/images/produto1.png",
    },
    {
      id: 2,
      nome: "Kit teclado e mouse",
      descricao: "Kit completo com teclado e mouse gaming, ideal para jogadores iniciantes e intermediários.",
      preco: "R$ 399,90",
      imagem: "/images/produto2.png",
    },
    {
      id: 3,
      nome: "Teclado mecânico Knup",
      descricao: "Teclado mecânico compacto com switches de alta durabilidade e iluminação personalizável.",
      preco: "R$ 499,90",
      imagem: "/images/produto3.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Nossos Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{produto.nome}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {produto.descricao}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                  {produto.preco}
                </span>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 