import { Cloud, Video, Cpu, Rocket, Sparkles } from 'lucide-react'

export default function ValueProposition() {
  const features = [
    {
      icon: Cloud,
      title: 'Desarrollo "Cloud-First"',
      description: 'No solo creamos tiendas, creamos experiencias de alta velocidad. Optimizamos cada línea de código para asegurar que tu plataforma cargue en milisegundos.',
      highlight: 'mejorando tu tasa de conversión y el posicionamiento en buscadores.'
    },
    {
      icon: Video,
      title: 'Sin Oficinas, Sin Fricción',
      description: 'Todo nuestro proceso de levantamiento de requerimientos y seguimiento es 100% digital.',
      highlight: 'Desde la primera reunión por videollamada hasta la entrega final, ahorramos tu tiempo.'
    },
    {
      icon: Cpu,
      title: 'Interfaces Potenciadas por AI',
      description: 'Utilizamos plataformas de Inteligencia Artificial para prototipar y generar interfaces visualmente impactantes.',
      highlight: 'Adaptadas a las tendencias actuales del mercado.'
    }
  ]

  return (
    <section id="propuesta" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Nuestra Propuesta de Valor</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Desarrollo <span className="gradient-text">"Cloud-First"</span>
            <br />y High Performance
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transformamos tu visión en una plataforma de e-commerce que destaca 
            por su velocidad, diseño y escalabilidad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative card h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-400" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 mb-4 flex-grow">
                  {feature.description}
                </p>
                
                <p className="text-sm text-primary-400 font-medium">
                  {feature.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <Sparkles className="w-8 h-8 text-accent-400" />
            <div className="text-left">
              <p className="font-semibold">¿Quieres una demo personalizada?</p>
              <p className="text-sm text-slate-400">Te mostramos cómo funciona nuestra metodología</p>
            </div>
            <a href="#contacto" className="btn-primary text-sm py-3 px-6 ml-4">
              Agendar Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}