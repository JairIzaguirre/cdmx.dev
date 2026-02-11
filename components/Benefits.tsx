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

export default function Benefits({ dict }: { dict: any }) {
  const benefits = [
    {
      icon: TrendingUp,
      title: dict.items[0].title,
      description: dict.items[0].description,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Shield,
      title: dict.items[1].title,
      description: dict.items[1].description,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Smartphone,
      title: dict.items[2].title,
      description: dict.items[2].description,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Search,
      title: dict.items[3].title,
      description: dict.items[3].description,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Zap,
      title: dict.items[4].title,
      description: dict.items[4].description,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Globe,
      title: dict.items[5].title,
      description: dict.items[5].description,
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
            <span className="text-sm text-primary-300">{dict.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {dict.title1}
            <span className="gradient-text"> {dict.title2}</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {dict.description}
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
            {dict.trust_title}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {dict.trust_items.map((item: string, index: number) => (
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