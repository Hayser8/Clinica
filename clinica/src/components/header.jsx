import Link from "next/link";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-pink-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-pink-600" />
          <div className="text-2xl font-bold text-pink-600">DeltaScan</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#inicio" className="text-gray-700 hover:text-red-600">
            Inicio
          </Link>
          <Link href="#especialistas" className="text-gray-700 hover:text-red-600">
            Especialistas
          </Link>
          <Link href="#servicios" className="text-gray-700 hover:text-red-600">
            Servicios
          </Link>
          <Link href="#contacto" className="text-gray-700 hover:text-red-600">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
);
}
