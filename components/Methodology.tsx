import { Video, Palette, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

export default function Methodology({ dict }: { dict: any }) {
  const steps = [
    {
      number: '01',
      icon: Video,
      title: dict.steps[0].title,
      description: dict.steps[0].description,
      features: dict.steps[0].features
    },
    {
      number: '02',
      icon: Palette,
      title: dict.steps[1].title,
      description: dict.steps[1].description,
      features: dict.steps[1].features
    },
    {
      number: '03',
      icon: Code2,
      title: dict.steps[2].title,
      description: dict.steps[2].description,
      features: dict.steps[2].features
    },
    {
      number: '04',
      icon: Rocket,
      title: dict.steps[3].title,
      description: dict.steps[3].description,
      features: dict.steps[3].features
    }
  ]

  return (
    <section id="metodologia" className="relative py-24 overflow-hidden bg-slate-900/50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-accent-300">{dict.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {dict.title1} <span className="gradient-text">{dict.title2}</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal
                key={index}
                direction="right"
                delay={index * 0.15}
                className="relative group h-full"
              >
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
                    {step.features.map((feature: string, featureIndex: number) => (
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
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400">
            {dict.delivery.prefix} <span className="text-primary-400 font-semibold">{dict.delivery.time}</span> {dict.delivery.suffix}
          </p>
        </div>
      </div>
    </section>
  )
}