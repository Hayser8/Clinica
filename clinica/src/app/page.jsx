import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Baby,
  Stethoscope,
  Users,
  Clock,
  Droplet,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ClinicaUltrasonido() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-gradient-to-br from-red-50 to-pink-50 py-20"
      >
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Tu <span className="text-pink-600">Clínica de Ultrasonidos</span>
              <br />
              en Guatemala
            </h1>
            <p className="text-xl text-gray-600">
              Ofrecemos diagnóstico por ultrasonido: abdominal, obstétrico,
              pélvico, mamario y Doppler, con tecnología 4D y protocolos de
              seguridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg"
              >
                <Calendar className="h-5 w-5 mr-2 text-pink-100" />
                Agendar Cita
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-pink-600" />
                <span>Lun–Vie 8AM–6PM</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-3xl p-8">
              <Image
                src="/prueba.jpg"
                alt="Equipo de ultrasonido moderno"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center space-x-3">
              <div className="bg-pink-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">+1,000 Pacientes</p>
                <p className="text-sm text-gray-600">Atendidos con éxito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialistas */}
      <section id="especialistas" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-pink-600">Especialistas</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipo de radiólogos certificados con experiencia en ultrasonido
            abdominal, obstétrico, mamario y Doppler.
          </p>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Dra. Berta Coto */}
          <Card className="border-red-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-100 to-red-100 rounded-full p-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Dra. Berta Coto"
                    width={180}
                    height={180}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
                  Especialista
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Dra. Berta Coto
              </h4>
              <p className="text-pink-600 font-semibold mb-4">
                Médico Radiólogo
              </p>
              <p className="text-gray-600 mb-6">
                11 años de experiencia en Imágenes Diagnosticas. 8 años de
                experiencia en biopsia de mama.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Baby className="h-4 w-4 text-pink-600" />
                  <span>Ultrasonido 4D</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4 text-pink-600" />
                  <span>Ultrasonido Obstétrico</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dr. Estuardo Pérez */}
          <Card className="border-red-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-100 to-red-100 rounded-full p-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Dr. Carlos Mendoza"
                    width={180}
                    height={180}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
                  Especialista
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Dr. Estuardo Pérez
              </h4>
              <p className="text-pink-600 font-semibold mb-4">
                Radiólogo Abdominal y Vascular
              </p>
              <p className="text-gray-600 mb-6">
                11 años de experiencia en Imágenes Diagnosticas. 8 años de
                experiencia en biopsia de mama.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Stethoscope className="h-4 w-4 text-pink-600" />
                  <span>Ultrasonido Abdominal</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Droplet className="h-4 w-4 text-pink-600" />
                  <span>Ultrasonido Doppler</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Servicios Principales */}
      <section
        id="servicios"
        className="py-20 bg-gradient-to-br from-red-50 to-pink-50"
      >
        <div className="container mx-auto px-4 text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros{" "}
            <span className="text-pink-600">5 Estudios Más Solicitados</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diagnóstico por ultrasonido en Guatemala con precios claros y
            resultados rápidos.
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Ultrasonido de Mama */}
          <Card className="bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center flex flex-col h-full">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Ultrasonido de Mama
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Detección y seguimiento de lesiones mamarias con alta
                resolución.
              </p>
              <div className="mt-auto">
                <Button size="sm" className="text-pink-600">
                  Más información
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Biopsia de Mama con Guía de Ultrasonido */}
          <Card className="bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center flex flex-col h-full">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Biopsia de Mama con Guía de Ultrasonido
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Biopsia TRUCUT y aspiración con aguja fina (BAAF) guiadas por
                ultrasonido.
              </p>
              <div className="mt-auto">
                <Button size="sm" className="text-red-600">
                  Más información
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Doppler Vascular */}
          <Card className="bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center flex flex-col h-full">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Doppler Vascular
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Evaluación arterial y venosa en extremidades y abdomen,
                incluyendo fístulas arteriovenosas y carótidas.
              </p>
              <div className="mt-auto">
                <Button size="sm" className="text-pink-600">
                  Más información
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ultrasonido de Abdomen Completo */}
          <Card className="bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center flex flex-col h-full">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Ultrasonido de Abdomen Completo
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Examen completo de órganos intraabdominales para diagnóstico y
                seguimiento.
              </p>
              <div className="mt-auto">
                <Button size="sm" className="text-red-600">
                  Más información
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ultrasonido Musculoesquelético */}
          <Card className="bg-white hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center flex flex-col h-full">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Ultrasonido Musculoesquelético
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Detección de lesiones de ligamentos, músculos y tendones en
                patologías traumáticas o degenerativas.
              </p>
              <div className="mt-auto">
                <Button size="sm" className="text-pink-600">
                  Más información
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg"
          >
            <Users className="h-5 w-5 mr-2 text-pink-100" />
            Ver todos los servicios
          </Button>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Agenda tu <span className="text-pink-600">Cita Hoy</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              En nuestra clínica en Zona 10, Ciudad de Guatemala, encontrarás
              atención profesional y resultados confiables.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Dirección</p>
                  <p className="text-gray-600">Zona 10, Ciudad de Guatemala</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">+502 2234-5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@ultrasonidogt.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 flex items-center justify-center">
            <Image
              src="/placeholder.svg"
              alt="Clínica de ultrasonido Guatemala"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
