import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ServiceHero({ title, subtitle, description, icon: Icon, backLink = "/servicios" }) {
  return (
    <section className="relative bg-white py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-pink-50 to-white opacity-60"></div>

      <div className="container mx-auto px-4 relative">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href={backLink}
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a servicios
          </Link>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon and Subtitle */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 p-4 rounded-2xl shadow-lg">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <span className="text-pink-600 font-bold text-xl">{subtitle}</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>

          {/* Description */}
          <p className="text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">{description}</p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Agendar Mi Cita Ahora
            </Button>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-2">Resultados Inmediatos</h4>
              <p className="text-red-100">Obtén tus resultados el mismo día</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Profesionales Certificados</h4>
              <p className="text-red-100">Especialistas con años de experiencia</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Tecnología de Vanguardia</h4>
              <p className="text-red-100">Equipos de última generación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
