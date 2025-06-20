import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-red-600" />
            <h4 className="text-2xl font-bold">DeltaScan</h4>
          </div>
          <p className="text-gray-400">
            Diagnóstico por ultrasonido en Guatemala con tecnología de punta y
            atención personalizada.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Servicios</h5>
          <ul className="space-y-2 text-gray-400">
            <li>Ultrasonido Obstétrico Guatemala</li>
            <li>Ultrasonido Abdominal Guatemala</li>
            <li>Ultrasonido Pélvico Guatemala</li>
            <li>Ultrasonido Mamario Guatemala</li>
            <li>Ultrasonido Doppler Guatemala</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Contacto</h5>
          <p className="text-gray-400">Zona 10, Ciudad de Guatemala</p>
          <p className="text-gray-400">+502 2234-5678</p>
          <p className="text-gray-400">info@ultrasonidogt.com</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        &copy; 2025 DeltaScan. Todos los derechos reservados.
      </div>
    </footer>
  );
}
