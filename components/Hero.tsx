import { ArrowRight, Play, Sparkles, Zap, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-slate-300">Desarrollo 100% Remoto</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block">E-Commerce de</span>
            <span className="gradient-text">Próxima Generación</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-4 font-medium">
            Velocidad, Escalabilidad y Diseño.
          </p>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            Construimos plataformas de comercio electrónico en la nube utilizando
            tecnologías de vanguardia. Potenciamos tu negocio con arquitecturas modernas,
            entregas ágiles y un proceso 100% remoto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contacto" className="btn-primary flex items-center gap-2 group">
              Cotiza tu Proyecto Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#casos" className="btn-secondary flex items-center gap-2">
              <Play className="w-5 h-5" />
              Ver Casos de Éxito
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '50+', label: 'Proyectos Entregados' },
              { value: '<2s', label: 'Tiempo de Carga' },
              { value: '100%', label: 'Proceso Remoto' },
              { value: '24/7', label: 'Soporte Cloud' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Icons */}
       <div className="hidden lg:block">
  <div className="absolute top-1/4 left-4 animate-float">
    <div className="p-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl">
      <Zap className="w-8 h-8 text-yellow-400" />
    </div>
  </div>
  <div className="absolute top-1/4 right-4 animate-float delay-1000">
    <div className="p-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl">
      <Globe className="w-8 h-8 text-primary-400" />
    </div>
  </div>
</div>
      </div>
    </section>
  )
}