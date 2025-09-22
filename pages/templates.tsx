import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageModal from '../components/ImageModal'
import SubscribeModal from '../components/SubscribeModal'

export default function Products() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Array<{
    folder: string;
    title: string;
    description: string;
  }>>([])

  useEffect(() => {
    // 根据语言获取产品数据
    const productFolders = [
      { folder: 'anthoripic', titleKey: 'products.anthropic.title', descKey: 'products.anthropic.description' },
      { folder: 'chroma', titleKey: 'products.chroma.title', descKey: 'products.chroma.description' },
      { folder: 'doubao', titleKey: 'products.doubao.title', descKey: 'products.doubao.description' },
      { folder: 'google-AIstudio', titleKey: 'products.google.title', descKey: 'products.google.description' },
      { folder: 'granola', titleKey: 'products.granola.title', descKey: 'products.granola.description' },
      { folder: 'huggingface', titleKey: 'products.huggingface.title', descKey: 'products.huggingface.description' },
      { folder: 'juns', titleKey: 'products.juns.title', descKey: 'products.juns.description' },
      { folder: 'kimi', titleKey: 'products.kimi.title', descKey: 'products.kimi.description' },
      { folder: 'manud', titleKey: 'products.manud.title', descKey: 'products.manud.description' },
      { folder: 'ollama', titleKey: 'products.ollama.title', descKey: 'products.ollama.description' },
      { folder: 'openai', titleKey: 'products.openai.title', descKey: 'products.openai.description' },
      { folder: 'perplexity', titleKey: 'products.perplexity.title', descKey: 'products.perplexity.description' },
      { folder: 'pika', titleKey: 'products.pika.title', descKey: 'products.pika.description' },
      { folder: 'quilbot', titleKey: 'products.quillbot.title', descKey: 'products.quillbot.description' },
      { folder: 'runway', titleKey: 'products.runway.title', descKey: 'products.runway.description' },
      { folder: 'seweetchat', titleKey: 'products.seweetchat.title', descKey: 'products.seweetchat.description' },
      { folder: 'stabledeffision', titleKey: 'products.stablediffusion.title', descKey: 'products.stablediffusion.description' },
      { folder: 'suno', titleKey: 'products.suno.title', descKey: 'products.suno.description' },
      { folder: 'supabase', titleKey: 'products.supabase.title', descKey: 'products.supabase.description' },
      { folder: 'synthesia', titleKey: 'products.synthesia.title', descKey: 'products.synthesia.description' }
    ]
    
    const localizedProducts = productFolders.map(item => ({
      folder: item.folder,
      title: t(item.titleKey as any),
      description: t(item.descKey as any)
    }))
    
    setProducts(localizedProducts)
  }, [t])

  return (
    <>
      <Head>
        <title>{t('templates.title')}</title>
        <meta name="description" content={t('templates.description')} />
        <meta name="keywords" content={t('templates.keywords')} />
        <meta property="og:title" content={t('templates.ogTitle')} />
        <meta property="og:description" content={t('templates.ogDescription')} />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      

      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <h2>{t('templates.header')}</h2>
            <p>{t('templates.subheader')}</p>
            
            {/* 订阅每日分析按钮 */}
            <div className="subscribe-section">
              <button 
                className="subscribe-btn"
                onClick={() => {
                  if ((window as any).openSubscribeModal) {
                    (window as any).openSubscribeModal()
                  }
                }}
              >
                {t('templates.subscribeButton')}
              </button>
            </div>
          </div>
          
          <div className="case-grid">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="case-item"
                onClick={() => {
                  if ((window as any).openImageModal) {
                    (window as any).openImageModal(product.folder, product.title)
                  }
                }}
              >
                <div className="case-image">
                  <img src={`/${product.folder}/0.png`} alt={`${product.title} ${t('templates.altText')}`} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
          <div className="case-studies-footer">
            <a 
              href="https://xhslink.com/m/54wVlFmYcK5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-more-btn"
            >
              {t('templates.viewMore')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ImageModal />
      <SubscribeModal />
    </>
  )
}
