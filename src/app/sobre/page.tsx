export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Somos uma empresa especializada em produtos físicos de alta qualidade.
          Nossa missão é fornecer produtos excepcionais que atendam às
          necessidades e expectativas dos nossos clientes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
        <p className="mb-6">
          Fundada em 2020, nossa empresa tem se dedicado a desenvolver e
          comercializar produtos inovadores que fazem a diferença na vida das
          pessoas. Ao longo dos anos, construímos uma reputação sólida baseada em
          qualidade, confiabilidade e excelência no atendimento ao cliente.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Qualidade em primeiro lugar</li>
          <li className="mb-2">Inovação constante</li>
          <li className="mb-2">Satisfação do cliente</li>
          <li className="mb-2">Responsabilidade social</li>
          <li>Sustentabilidade</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Nossa Equipe</h2>
        <p className="mb-6">
          Contamos com uma equipe altamente qualificada e comprometida com a
          excelência. Nossos profissionais trabalham em conjunto para garantir que
          cada produto atenda aos mais altos padrões de qualidade.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Compromisso com a Qualidade</h2>
        <p>
          Todos os nossos produtos passam por rigorosos testes de qualidade antes
          de chegarem até você. Utilizamos materiais de primeira linha e
          tecnologias avançadas em nossos processos de produção, garantindo
          durabilidade e satisfação.
        </p>
      </div>
    </div>
  );
} 