'use client'

import { useState } from 'react'
import { 
  Mail, 
  Code2, 
  Linkedin, 
  Github, 
  Twitter,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle2,
  Loader2
} from 'lucide-react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const projectTypes = [
    'Tienda E-Commerce Nueva',
    'Migración de Plataforma',
    'Rediseño de Tienda Existente',
    'Integración de APIs',
    'Consultoría Técnica',
    'Otro'
  ]

  // ⚠️ CAMBIA ESTO POR TU ENDPOINT DE FORMSPREE
  const formspreeEndpoint = 'https://formspree.io/f/xeelqqby'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          tipo_proyecto: formData.projectType
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', projectType: '' })
        
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setError('Error al enviar. Intenta de nuevo.')
      }
    } catch {
      setError('Error de conexión. Intenta de nuevo.')
    }
    
    setIsSubmitting(false)
  }

  return (
    <footer id="contacto" className="relative pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para dar el salto
            <span className="gradient-text"> a la nube</span>?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Olvídate de procesos burocráticos y traslados innecesarios. 
            Iniciemos tu proyecto hoy mismo de forma digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="glow" />
            <div className="relative card p-8">
              <h3 className="text-2xl font-bold mb-6">
                Formulario de Contacto
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-slate-400">Te contactaremos pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl 
                               text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 
                               focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl 
                               text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 
                               focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      Tipo de Proyecto
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl 
                               text-white focus:outline-none focus:border-primary-500 
                               focus:ring-1 focus:ring-primary-500 transition-colors
                               appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-800">Selecciona una opción</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-slate-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h4 className="text-lg font-semibold mb-4">Contacto Directo</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:hola@ecommerce.cdmx.dev" 
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  hola@ecommerce.cdmx.dev
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Ciudad de México, México (100% Remoto)
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-slate-800 rounded-xl hover:bg-primary-500/20 hover:text-primary-400 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h4 className="text-lg font-semibold mb-4">Navegación Rápida</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Propuesta', href: '#propuesta' },
                  { label: 'Tecnología', href: '#stack' },
                  { label: 'Metodología', href: '#metodologia' },
                  { label: 'Beneficios', href: '#beneficios' },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="p-2 bg-linear-to-br from-primary-500 to-accent-500 rounded-xl">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">
                ecommerce<span className="text-primary-400">.cdmx</span>.dev
              </span>
            </a>
            
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} ecommerce.cdmx.dev. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}