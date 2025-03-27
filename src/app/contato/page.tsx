"use client";

import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-background"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-background"
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border rounded-md bg-background"
              placeholder="Sua mensagem"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Outras Formas de Contato</h2>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> contato@exemplo.com
            </p>
            <p>
              <strong>Telefone:</strong> (11) 1234-5678
            </p>
            <p>
              <strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 