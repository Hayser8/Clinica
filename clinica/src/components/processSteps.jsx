import { Card, CardContent } from "@/components/ui/card"

export function ProcessSteps({ steps, title = "¿Cómo es el proceso?" }) {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Te explicamos paso a paso cómo realizamos el procedimiento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 mr-8">
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <Card className="flex-1 border-pink-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-red-100 p-3 rounded-full">
                      <step.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      {step.duration && (
                        <div className="inline-flex items-center bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                          Duración: {step.duration}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
