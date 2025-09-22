import Head from 'next/head'
import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Process from '../components/Process'
import Scenarios from '../components/Scenarios'
import CaseStudies from '../components/CaseStudies'
import Guarantees from '../components/Guarantees'
import CTA from '../components/CTA'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'
import ImageModal from '../components/ImageModal'

export default function Home() {
  const { t } = useLanguage()

  useEffect(() => {
    // Initialize any client-side functionality here
    if (typeof window !== 'undefined') {
      // Add any initialization scripts
    }
  }, [])

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.twitterTitle')} />
        <meta name="twitter:description" content={t('meta.twitterDescription')} />
      </Head>

      <Header />
      <Hero />
      <Features />
      <CaseStudies />
      <Pricing />
      <Process />
      <Scenarios />
      <Guarantees />
      <CTA />
      <WhyChoose />
      <Footer />
      <ImageModal />
    </>
  )
}
