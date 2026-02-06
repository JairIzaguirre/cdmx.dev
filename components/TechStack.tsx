import { Server, Monitor, Database, ShoppingCart, Layers } from 'lucide-react'

export default function TechStack() {
  const stacks = [
    {
      icon: Monitor,
      layer: 'Frontend',
      technologies: ['Angular', 'React', 'Next.js'],
      description: 'SSR/SSG para SEO óptimo',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      layer: 'Backend',
      technologies: ['Node.js', 'Java (Spring Boot)', 'PHP (Yii2/Laravel)'],
      description: 'APIs robustas y escalables',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      layer: 'Infraestructura',
      technologies: ['AWS (Lightsail, EC2, S3, RDS)', 'Google Cloud'],
      description: 'Cloud computing de primer nivel',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: ShoppingCart,
      layer: 'E-Commerce Core',
      technologies: ['Headless WooCommerce', 'Shopify API', 'Custom Engines'],
      description: 'Soluciones flexibles para ventas',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="stack" className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-900/20 via-slate-950 to-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <Layers className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Stack Tecnológico</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Stack de <span className="gradient-text">Alto Rendimiento</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Para garantizar la eficiencia, seleccionamos las mejores 
            herramientas del mercado.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="card h-full text-center hover:scale-105 transition-all duration-300">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br ${stack.color} p-0.5`}>
                  <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                    <stack.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Layer Name */}
                <h3 className="text-lg font-bold mb-4 text-white">
                  {stack.layer}
                </h3>
                
                {/* Technologies */}
                <div className="space-y-2 mb-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-sm text-slate-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-xs text-slate-500 mt-auto">
                  {stack.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Logos Banner */}
        <div className="mt-16 py-8 border-t border-b border-slate-800">
          <p className="text-center text-sm text-slate-500 mb-6">
            Tecnologías que dominamos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['React', 'Next.js', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL', 'Angular', 'Vercel', 'Java', 'Docker'].map((tech, index) => (
              <span 
                key={index} 
                className="text-slate-400 font-mono text-sm hover:text-primary-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}