import Head from 'next/head'
import { useEffect } from 'react'
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
  useEffect(() => {
    // Initialize any client-side functionality here
    if (typeof window !== 'undefined') {
      // Add any initialization scripts
    }
  }, [])

  return (
    <>
      <Head>
        <title>报告佬 RepoBro- AI驱动的专业行业分析服务</title>
        <meta name="description" content="专业AI行业分析报告服务，24小时快速交付，仅需9.9元，提供分析模板、文字报告和PPT演示" />
        <meta name="keywords" content="行业分析,AI分析,报告,数据分析,市场研究" />
        <meta property="og:title" content="报告佬（RepoBro）- AI驱动的专业行业分析服务" />
        <meta property="og:description" content="专业AI行业分析报告服务，24小时快速交付，仅需9.9元" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="报告佬（RepoBro）- AI驱动的专业行业分析服务" />
        <meta name="twitter:description" content="专业AI行业分析报告服务，24小时快速交付，仅需9.9元" />
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
