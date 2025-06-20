import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

export function ServiceDetails({ details }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Qué incluye este <span className="text-pink-600">servicio</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce todos los detalles de nuestro servicio especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <Card
              key={index}
              className="group border-0 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-red-500 to-pink-500 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                  <div className="relative z-10">
                    <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <detail.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{detail.description}</p>

                  {detail.features && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-red-500" />
                        Incluye:
                      </h4>
                      <ul className="space-y-2">
                        {detail.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3 text-sm text-gray-600">
                            <div className="bg-green-100 rounded-full p-1">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500 group-hover:h-2 transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
