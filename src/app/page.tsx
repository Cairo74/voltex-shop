import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Produtos de Qualidade Superior
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Descubra nossa linha exclusiva de produtos desenvolvidos com excelência
            e dedicação para proporcionar a melhor experiência.
          </p>
          <Link
            href="/produtos"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Conheça Nossos Produtos
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Por que Escolher Nossos Produtos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Qualidade Superior</h3>
              <p className="text-muted-foreground">
                Produtos desenvolvidos com os melhores materiais e rigoroso controle
                de qualidade.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Entrega Rápida</h3>
              <p className="text-muted-foreground">
                Enviamos seus produtos com rapidez e segurança para todo o Brasil.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Garantia Total</h3>
              <p className="text-muted-foreground">
                Oferecemos garantia em todos os nossos produtos para sua
                tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                nome: "Teclado mecânico HyperX",
                descricao: "Teclado mecânico gaming com switches RGB e design ergonômico para máxima performance.",
                imagem: "/images/produto1.png",
              },
              {
                id: 2,
                nome: "Kit teclado e mouse",
                descricao: "Kit completo com teclado e mouse gaming, ideal para jogadores iniciantes e intermediários.",
                imagem: "/images/produto2.png",
              },
              {
                id: 3,
                nome: "Teclado mecânico Knup",
                descricao: "Teclado mecânico compacto com switches de alta durabilidade e iluminação personalizável.",
                imagem: "/images/produto3.png",
              },
            ].map((produto) => (
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
                  <h3 className="text-2xl font-semibold mb-2">{produto.nome}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {produto.descricao}
                  </p>
                  <Link
                    href={`/produtos#produto${produto.id}`}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity inline-block"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">
            Pronto para Conhecer Nossos Produtos?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos produtos podem fazer a
            diferença para você.
          </p>
          <Link
            href="/contato"
            className="bg-background text-foreground px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </main>
  );
} 