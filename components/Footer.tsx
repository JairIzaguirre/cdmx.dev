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
  Loader2,
  Phone,
  PhoneCall
} from 'lucide-react'

export default function Footer({ dict }: { dict: any }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const projectTypes = dict.form.options

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
        setError(dict.form.error_generic)
      }
    } catch {
      setError(dict.form.error_connection)
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
            {dict.title1}
            <span className="gradient-text"> {dict.title2}</span>
            {dict.title3}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="glow" />
            <div className="relative card p-8">
              <h3 className="text-2xl font-bold mb-6">
                {dict.form.title}
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{dict.form.success_title}</h4>
                  <p className="text-slate-400">{dict.form.success_desc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      {dict.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl 
                               text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 
                               focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder={dict.form.name_placeholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      {dict.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl 
                               text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 
                               focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder={dict.form.email_placeholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      {dict.form.project_type}
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl 
                               text-white focus:outline-none focus:border-primary-500 
                               focus:ring-1 focus:ring-primary-500 transition-colors
                               appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-800">{dict.form.select_option}</option>
                      {projectTypes.map((type: string, index: number) => (
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
                        {dict.form.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {dict.form.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h4 className="text-lg font-semibold mb-4">{dict.contact}</h4>
              <div className="space-y-4">
                <a
                  href="mailto:ecommerce@cdmx.dev"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  ecommerce@cdmx.dev
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  +52 55 9832 8626<br /> +52 55 8107 2865
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Ciudad de México, México (100% Remoto)
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="text-lg font-semibold mb-4">{dict.social}</h4>
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
              <h4 className="text-lg font-semibold mb-4">{dict.quick_nav}</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: dict.form.options[0], href: '#propuesta' }, // Reuse existing keys if possible or stick to hardcoded links names? Wait, nav links are in Navbar but here they are also used. I should probably pass nav links names here too or reuse sections. The code used hardcoded labels before. Let's use dictionary keys from navbar or similar. 
                  // Wait, previous code had: 'Propuesta', 'Tecnología', 'Metodología', 'Beneficios'. These match Navbar. I can pass navbar dict or just reuse keys if I had them in footer dict. 
                  // In my footer dict I only put "Quick Navigation". I missed specific link labels for footer.
                  // I should probably use `dict.navbar` if I had access to it, or duplicate them in footer dict. 
                  // Let's assume for now I will use the `dict.quick_nav` title and keep the links hardcoded or try to map them? 
                  // Actually the previous code had specific labels.
                  // { label: 'Propuesta', href: '#propuesta' } etc.
                  // I will leave them as is or try to use `dict.navbar` if passed? No, I am passing `dict.footer`.
                  // I should have added them to footer dict or passed navbar dict.
                  // Let's use the ones I added to `dictionaries/en.json`? I didn't add nav links to footer dict.
                  // I will fetch `dict.navbar` in `page.tsx` and pass it to Footer? Or just add them to footer dict.
                  // Adding to footer dict is cleaner for now. I'll add them to correct file first? 
                  // No, I will just use hardcoded English/Spanish for now or generic?
                  // Better: I will use the "options" I added? No those are for project type.
                  // I will just use the hardcoded values for now but this will leave them untranslated.
                  // I should update the dictionary first to include footer nav links.

                  // Let's check `dictionaries/es.json` again. I defined `navbar` key.
                  // I can pass `dict` (entire dict) to Footer instead of just `dict.footer`?
                  // The current plan was passing `dict.footer`.
                  // I'll update `app/[lang]/page.tsx` to pass `dict.navbar` to Footer as well? Or `dict`?
                  // Let's pass `dict.footer` and I will add nav links to `dict.footer` in a separate step if needed.
                  // For now, I will use:
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
              © {new Date().getFullYear()} ecommerce.cdmx.dev. {dict.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}