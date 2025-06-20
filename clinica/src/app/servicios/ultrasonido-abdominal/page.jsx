"use client"

import { ServiceHero } from "@/components/serviceHero"
import { ServiceDetails } from "@/components/serviceDetails"
import { ProcessSteps } from "@/components/processSteps"
import { FAQSection } from "@/components/faqSection"
import {
  Stethoscope,
  LeafIcon as Liver,
  BabyIcon as Kidney,
  BellIcon as Gallbladder,
  PiIcon as Pancreas,
  Clock,
  FileText,
  Shield,
} from "lucide-react"

export default function UltrasonidoAbdominal() {
  const heroData = {
    title: "Ultrasonido Abdominal",
    subtitle: "Diagnóstico Preciso de Órganos Internos",
    description:
      "Evaluación completa y detallada de todos los órganos abdominales con tecnología de alta resolución. Detectamos problemas de salud de manera temprana y precisa.",
    icon: Stethoscope,
    imageUrl: "/placeholder.svg?height=400&width=500",
    features: [
      "Evaluación de hígado, vesícula y vías biliares",
      "Análisis de riñones y vías urinarias",
      "Examen de páncreas y bazo",
      "Detección de cálculos y masas",
      "Resultados inmediatos",
    ],
  }

  const serviceDetails = [
    {
      icon: Liver,
      title: "Evaluación Hepática",
      description: "Análisis completo del hígado para detectar enfermedades, inflamación o alteraciones estructurales.",
      features: ["Tamaño y textura hepática", "Detección de esteatosis", "Evaluación de cirrosis", "Masas hepáticas"],
    },
    {
      icon: Gallbladder,
      title: "Vesícula Biliar",
      description: "Examen detallado de la vesícula biliar y vías biliares para detectar cálculos o inflamación.",
      features: ["Cálculos vesiculares", "Colecistitis aguda", "Pólipos vesiculares", "Dilatación de vías biliares"],
    },
    {
      icon: Kidney,
      title: "Sistema Renal",
      description: "Evaluación completa de riñones y vías urinarias para detectar patologías renales.",
      features: ["Cálculos renales", "Quistes renales", "Hidronefrosis", "Masas renales"],
    },
    {
      icon: Pancreas,
      title: "Páncreas y Bazo",
      description: "Análisis del páncreas y bazo para detectar inflamación, masas o alteraciones.",
      features: ["Pancreatitis", "Masas pancreáticas", "Esplenomegalia", "Lesiones esplénicas"],
    },
    {
      icon: FileText,
      title: "Informe Detallado",
      description: "Reporte médico completo con hallazgos, mediciones y recomendaciones profesionales.",
      features: ["Descripción detallada", "Mediciones precisas", "Recomendaciones médicas", "Imágenes incluidas"],
    },
    {
      icon: Shield,
      title: "Detección Temprana",
      description: "Identificación precoz de patologías que permiten tratamiento oportuno y efectivo.",
      features: [
        "Screening preventivo",
        "Seguimiento de patologías",
        "Control post-tratamiento",
        "Evaluación pre-quirúrgica",
      ],
    },
  ]

  const processSteps = [
    {
      icon: Clock,
      title: "Preparación",
      description: "Debes venir en ayunas de 8-12 horas para una mejor visualización de los órganos abdominales.",
      duration: "Preparación previa",
    },
    {
      icon: FileText,
      title: "Registro y Evaluación",
      description: "Revisamos tu historial médico y los síntomas que te llevaron a solicitar el estudio.",
      duration: "10 minutos",
    },
    {
      icon: Stethoscope,
      title: "Realización del Ultrasonido",
      description: "Examen completo de todos los órganos abdominales con equipos de alta resolución.",
      duration: "20-30 minutos",
    },
    {
      icon: FileText,
      title: "Análisis y Entrega",
      description: "Interpretación de resultados y entrega del informe médico con explicación detallada.",
      duration: "15 minutos",
    },
  ]

  const pricingPackages = [
    {
      name: "Ultrasonido Básico",
      description: "Evaluación estándar abdominal",
      price: "280",
      features: [
        "Ultrasonido abdominal completo",
        "Evaluación de todos los órganos",
        "Informe médico detallado",
        "Imágenes incluidas",
        "Explicación de resultados",
      ],
    },
    {
      name: "Ultrasonido Premium",
      description: "Evaluación completa con seguimiento",
      price: "420",
      popular: true,
      features: [
        "Ultrasonido abdominal extendido",
        "Evaluación con Doppler",
        "Mediciones especializadas",
        "Informe detallado con imágenes",
        "Consulta de seguimiento incluida",
        "Recomendaciones personalizadas",
      ],
    },
    {
      name: "Paquete Preventivo",
      description: "Chequeo abdominal anual",
      price: "750",
      features: [
        "3 ultrasonidos al año",
        "Seguimiento personalizado",
        "Todos los informes incluidos",
        "Consultas ilimitadas",
        "Descuento en estudios adicionales",
        "Recordatorios de citas",
      ],
    },
  ]

  const faqs = [
    {
      question: "¿Por qué debo venir en ayunas?",
      answer:
        "El ayuno es necesario para vaciar el estómago y los intestinos de gases y contenido, lo que permite una mejor visualización de los órganos abdominales, especialmente la vesícula biliar y el páncreas.",
    },
    {
      question: "¿Puedo tomar agua antes del examen?",
      answer:
        "Puedes tomar pequeñas cantidades de agua hasta 2 horas antes del examen. Sin embargo, es mejor evitar cualquier líquido en las 2 horas previas para obtener mejores imágenes.",
    },
    {
      question: "¿El examen es doloroso?",
      answer:
        "No, el ultrasonido abdominal es completamente indoloro. Solo sentirás la presión suave del transductor sobre tu abdomen con gel conductor.",
    },
    {
      question: "¿Cuánto tiempo dura el examen?",
      answer:
        "El examen completo toma entre 20-30 minutos, dependiendo de los hallazgos y la necesidad de obtener imágenes adicionales de algún órgano específico.",
    },
    {
      question: "¿Qué patologías puede detectar?",
      answer:
        "Puede detectar cálculos biliares y renales, quistes, masas, inflamación de órganos, esteatosis hepática, dilatación de vías biliares, y muchas otras condiciones abdominales.",
    },
    {
      question: "¿Necesito alguna medicación especial?",
      answer:
        "No necesitas suspender tus medicamentos habituales. Sin embargo, informa al médico sobre todos los medicamentos que tomas, especialmente si tienes diabetes.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero {...heroData} />
      <ServiceDetails details={serviceDetails} />
      <ProcessSteps steps={processSteps} title="¿Cómo prepararse para el examen?" />
      <FAQSection faqs={faqs} />
    </div>
  )
}
