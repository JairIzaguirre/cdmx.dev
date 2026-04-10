import { Cloud, Video, Cpu, Rocket, Sparkles } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export default function ValueProposition({ dict }: { dict: any }) {
  const features = [
    {
      icon: Cloud,
      title: dict.features[0].title,
      description: dict.features[0].description,
      highlight: dict.features[0].highlight
    },
    {
      icon: Video,
      title: dict.features[1].title,
      description: dict.features[1].description,
      highlight: dict.features[1].highlight
    },
    {
      icon: Cpu,
      title: dict.features[2].title,
      description: dict.features[2].description,
      highlight: dict.features[2].highlight
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
            <span className="text-sm text-primary-300">{dict.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {dict.title1} <span className="gradient-text">{dict.title2}</span>
            <br />{dict.title3}
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.2}
              className="group relative h-full"
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
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <Sparkles className="w-8 h-8 text-accent-400" />
            <div className="text-left">
              <p className="font-semibold">{dict.cta.title}</p>
              <p className="text-sm text-slate-400">{dict.cta.subtitle}</p>
            </div>
            <a href="#contacto" className="btn-primary text-sm py-3 px-6 ml-4">
              {dict.cta.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}