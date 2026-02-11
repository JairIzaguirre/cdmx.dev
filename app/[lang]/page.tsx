import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import TechStack from '@/components/TechStack'
import Methodology from '@/components/Methodology'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'
import { getDictionary } from '@/app/dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'es')

  return (
    <>
      <Hero dict={dict.hero} />
      <ValueProposition dict={dict.value_proposition} />
      <TechStack dict={dict.tech_stack} />
      <Methodology dict={dict.methodology} />
      <Benefits dict={dict.benefits} />
      <Footer dict={dict.footer} />
    </>
  )
}