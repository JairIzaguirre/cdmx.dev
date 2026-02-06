import { 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Search, 
  Zap, 
  Globe,
  CheckCircle2,
  Star
} from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Escalabilidad Total',
      description: 'Tu tienda crece conforme crecen tus ventas gracias a la arquitectura en la nube.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Shield,
      title: 'Seguridad Robusta',
      description: 'Implementación de certificados SSL, DNSSEC y mejores prácticas de protección de datos.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Diseños pensados para la mejor experiencia de compra desde smartphones.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Search,
      title: 'Optimización SEO',
      description: 'Estructura técnica limpia para que Google ame tu sitio y lo posicione mejor.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Zap,
      title: 'Alta Velocidad',
      description: 'Páginas que cargan en milisegundos, mejorando la experiencia del usuario.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Globe,
      title: 'Alcance Global',
      description: 'Infraestructura preparada para servir clientes de cualquier parte del mundo.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ]

  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Beneficios</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Beneficios de nuestras
            <span className="gradient-text"> plataformas</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Cada solución que entregamos está diseñada para maximizar 
            el rendimiento de tu negocio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group card hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${benefit.bgColor} group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison or Trust Badges */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-8">
            ¿Por qué elegirnos?
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Entregas a tiempo',
              'Código limpio y documentado',
              'Soporte post-lanzamiento',
              'Precios transparentes',
              'Comunicación constante'
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}