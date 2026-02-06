import { Video, Palette, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Methodology() {
  const steps = [
    {
      number: '01',
      icon: Video,
      title: 'Levantamiento Digital',
      description: 'Sesiones de descubrimiento vía Zoom/Meet para definir objetivos, alcance y expectativas del proyecto.',
      features: ['Videollamadas programadas', 'Documentación compartida', 'Definición de MVP']
    },
    {
      number: '02',
      icon: Palette,
      title: 'Diseño Inteligente',
      description: 'Creación de UI/UX apoyada en herramientas de IA para velocidad y estética moderna.',
      features: ['Prototipos interactivos', 'AI-powered design', 'Iteraciones rápidas']
    },
    {
      number: '03',
      icon: Code2,
      title: 'Desarrollo Ágil (Scrum)',
      description: 'Entregas bi-semanales para que puedas probar el producto desde el primer mes.',
      features: ['Sprints de 2 semanas', 'Demos frecuentes', 'Feedback continuo']
    },
    {
      number: '04',
      icon: Rocket,
      title: 'CI/CD (Despliegue Continuo)',
      description: 'Automatizamos las pruebas y el despliegue. Cada mejora se integra a la nube de forma segura.',
      features: ['Tests automatizados', 'Zero downtime', 'Monitoreo 24/7']
    }
  ]

  return (
    <section id="metodologia" className="relative py-24 overflow-hidden bg-slate-900/50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-accent-300">Metodología de Trabajo</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Agilidad <span className="gradient-text">Real</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Nuestro flujo de trabajo está diseñado para que siempre 
            tengas visibilidad del progreso.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="card h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full text-sm font-bold">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mt-4 mb-4 group-hover:bg-primary-500/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-4">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-primary-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Arrow (between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400">
            Tiempo promedio de entrega: <span className="text-primary-400 font-semibold">8-12 semanas</span> para un MVP completo
          </p>
        </div>
      </div>
    </section>
  )
}