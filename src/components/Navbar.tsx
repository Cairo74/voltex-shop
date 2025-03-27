"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold">TechStore</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-4">
            <Link
              href="/produtos"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Produtos
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contato
            </Link>
            <div className="relative">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 