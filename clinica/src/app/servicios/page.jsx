"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Baby,
  Stethoscope,
  Heart,
  Calendar,
  ArrowRight,
  Star,
  Shield,
  Clock,
  User,
  Zap,
  Activity,
  Target,
  Eye,
  Bone,
  UserCheck,
  Scan,
} from "lucide-react"
import Link from "next/link"

export default function ServiciosPage() {
  const serviceCategories = [
  {
    title: "Servicios Generales",
    services: [
      {
        id: "ultrasonido-general",
        title: "Ultrasonido General",
        subtitle: "Ecografía Médica General",
        description:
          "Evaluación médica completa con ultrasonido para diagnóstico general de diversas condiciones.",
        icon: Stethoscope,
        price: "Desde Q250",
        duration: "20-30 min",
        features: [
          "Evaluación completa",
          "Diagnóstico preciso",
          "Resultados inmediatos",
          "Sin preparación",
        ],
        popular: false,
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        id: "ultrasonido-abdominal",
        title: "Ultrasonido de Abdomen",
        subtitle: "Evaluación Abdominal Completa",
        description:
          "Examen detallado de todos los órganos abdominales para detectar patologías y alteraciones.",
        icon: Target,
        price: "Desde Q280",
        duration: "25-35 min",
        features: [
          "Órganos abdominales",
          "Detección de cálculos",
          "Evaluación hepática",
          "Análisis completo",
        ],
        popular: true,          // Ultrasonido de Abdomen Completo
        gradient: "from-green-500 to-emerald-500",
      },
    ],
  },
  {
    title: "Servicios Especializados por Órgano",
    services: [
      {
        id: "ultrasonido-renal",
        title: "Ultrasonido Renal y Vías Urinarias",
        subtitle: "Sistema Renal Completo",
        description:
          "Evaluación especializada de riñones y vías urinarias para detectar cálculos, quistes y patologías.",
        icon: Activity,
        price: "Desde Q320",
        duration: "25-30 min",
        features: [
          "Evaluación renal",
          "Detección de cálculos",
          "Vías urinarias",
          "Análisis de flujo",
        ],
        popular: false,
        gradient: "from-teal-500 to-cyan-500",
      },
      {
        id: "ultrasonido-hepatico",
        title: "Ultrasonido Hepático y Vía Biliar",
        subtitle: "Hígado, Páncreas y Bazo",
        description:
          "Examen especializado del sistema hepatobiliar, páncreas y bazo con análisis detallado.",
        icon: Zap,
        price: "Desde Q350",
        duration: "30-40 min",
        features: [
          "Evaluación hepática",
          "Vía biliar",
          "Páncreas y bazo",
          "Detección de patologías",
        ],
        popular: false,
        gradient: "from-orange-500 to-red-500",
      },
      {
        id: "ultrasonido-mamario",
        title: "Ultrasonido Mamario",
        subtitle: "Evaluación Mamaria Especializada",
        description:
          "Examen detallado de las mamas para detección temprana de alteraciones y seguimiento.",
        icon: Heart,
        price: "Desde Q380",
        duration: "20-30 min",
        features: [
          "Detección temprana",
          "Evaluación completa",
          "Seguimiento",
          "Alta precisión",
        ],
        popular: true,         // Ultrasonido de Mama
        gradient: "from-pink-500 to-rose-500",
      },
      {
        id: "ultrasonido-tiroides",
        title: "Ultrasonido de Tiroides",
        subtitle: "Evaluación Tiroidea",
        description:
          "Análisis especializado de la glándula tiroides para detectar nódulos y alteraciones.",
        icon: Eye,
        price: "Desde Q300",
        duration: "15-25 min",
        features: [
          "Evaluación tiroidea",
          "Detección de nódulos",
          "Análisis de textura",
          "Mediciones precisas",
        ],
        popular: false,
        gradient: "from-purple-500 to-indigo-500",
      },
    ],
  },
  {
    title: "Servicios Pélvicos y Reproductivos",
    services: [
      {
        id: "ultrasonido-pelvico-suprapubico",
        title: "Ultrasonido Pélvico Suprapúbico",
        subtitle: "Evaluación Pélvica Externa",
        description:
          "Examen pélvico no invasivo para evaluación de órganos reproductivos femeninos.",
        icon: User,
        price: "Desde Q280",
        duration: "20-30 min",
        features: [
          "Evaluación no invasiva",
          "Órganos reproductivos",
          "Vejiga incluida",
          "Cómodo y rápido",
        ],
        popular: false,
        gradient: "from-rose-500 to-pink-500",
      },
      {
        id: "ultrasonido-pelvico-endovaginal",
        title: "Ultrasonido Pélvico Endovaginal",
        subtitle: "Evaluación Pélvica Interna",
        description:
          "Examen pélvico interno de alta resolución para diagnóstico ginecológico detallado.",
        icon: UserCheck,
        price: "Desde Q350",
        duration: "25-35 min",
        features: [
          "Alta resolución",
          "Diagnóstico preciso",
          "Evaluación detallada",
          "Profesional especializado",
        ],
        popular: false,
        gradient: "from-purple-500 to-pink-500",
      },
      {
        id: "ultrasonido-prostatico",
        title: "Ultrasonido Prostático",
        subtitle: "Evaluación Prostática",
        description:
          "Examen especializado de la próstata para detección de alteraciones y seguimiento.",
        icon: Activity,
        price: "Desde Q320",
        duration: "20-30 min",
        features: [
          "Evaluación prostática",
          "Detección temprana",
          "Mediciones precisas",
          "Seguimiento",
        ],
        popular: false,
        gradient: "from-blue-500 to-indigo-500",
      },
      {
        id: "ultrasonido-testicular",
        title: "Ultrasonido Testicular",
        subtitle: "Evaluación Testicular",
        description:
          "Examen detallado de los testículos para detectar alteraciones y patologías.",
        icon: Bone,
        price: "Desde Q280",
        duration: "15-25 min",
        features: [
          "Evaluación testicular",
          "Detección de masas",
          "Análisis de flujo",
          "Diagnóstico preciso",
        ],
        popular: false,
        gradient: "from-cyan-500 to-blue-500",
      },
    ],
  },
  {
    title: "Servicios Especializados",
    services: [
      {
        id: "ultrasonido-obstetrico",
        title: "Ultrasonido Obstétrico",
        subtitle: "Después de las 13 semanas",
        description:
          "Seguimiento especializado del embarazo con tecnología 4D para ver a tu bebé con claridad.",
        icon: Baby,
        price: "Desde Q350",
        duration: "30-45 min",
        features: [
          "Tecnología 4D",
          "Seguimiento fetal",
          "Videos incluidos",
          "Fotos de alta calidad",
        ],
        popular: false,
        gradient: "from-pink-500 to-rose-500",
      },
      {
        id: "ultrasonido-piel",
        title: "Ultrasonido de Piel",
        subtitle: "Evaluación Dermatológica",
        description:
          "Análisis especializado de lesiones cutáneas y evaluación de la piel con alta resolución.",
        icon: Scan,
        price: "Desde Q250",
        duration: "15-20 min",
        features: [
          "Evaluación cutánea",
          "Lesiones de piel",
          "Alta resolución",
          "Diagnóstico preciso",
        ],
        popular: false,
        gradient: "from-yellow-500 to-orange-500",
      },
      {
        id: "ultrasonido-musculoesqueletico",
        title: "Ultrasonido Musculoesquelético",
        subtitle: "Articulaciones y Músculos",
        description:
          "Evaluación de articulaciones, tendones y músculos para diagnóstico de lesiones deportivas.",
        icon: Bone,
        price: "Desde Q380",
        duration: "25-35 min",
        features: [
          "Evaluación articular",
          "Tendones y músculos",
          "Lesiones deportivas",
          "Análisis dinámico",
        ],
        popular: true,        // Ultrasonido Musculoesquelético
        gradient: "from-indigo-500 to-purple-500",
      },
      {
        id: "biopsia-mama-ultrasonido",
        title: "Biopsia de Mama con Ultrasonido",
        subtitle: "Procedimiento Guiado",
        description:
          "Biopsia de mama guiada por ultrasonido para diagnóstico preciso de lesiones mamarias.",
        icon: Target,
        price: "Desde Q850",
        duration: "45-60 min",
        features: [
          "Procedimiento guiado",
          "Alta precisión",
          "Mínimamente invasivo",
          "Diagnóstico definitivo",
        ],
        popular: true,        // Biopsia de Mama con Guía de Ultrasonido
        gradient: "from-red-500 to-pink-500",
      },
    ],
  },
]

  const stats = [
    { number: "1000+", label: "Pacientes Atendidos", icon: Star },
    { number: "15+", label: "Años de Experiencia", icon: Shield },
    { number: "14", label: "Servicios Especializados", icon: Stethoscope },
  ]

 return (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-pink-50 via-red-50 to-white py-20">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Nuestros <span className="text-pink-600">Servicios Especializados</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Ofrecemos una amplia gama de servicios de ultrasonido con tecnología de vanguardia y profesionales
          altamente capacitados para cuidar tu salud en cada área especializada.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services by Category */}
    {serviceCategories.map((category, categoryIndex) => (
      <section
        key={categoryIndex}
        className={`py-16 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{category.title}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2 flex flex-col h-full"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                <CardContent className="p-0 flex flex-col flex-grow">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${service.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                    <div className="relative z-10">
                      <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-medium opacity-90">{service.subtitle}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-1 gap-1 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-bold text-pink-600"></span>
                      <Link href={`/servicios/${service.id}`}>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white group-hover:shadow-lg transition-all duration-300"
                        >
                          Ver Más
                          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-br from-pink-600 to-red-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-6">¿No estás seguro qué servicio necesitas?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Nuestros especialistas te ayudarán a elegir el servicio más adecuado para tu situación específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Consulta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white border-white text-black hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-semibold"
            >
              Contactar Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
)

}
