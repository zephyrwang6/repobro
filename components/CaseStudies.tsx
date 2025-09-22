import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function CaseStudies() {
  const { t } = useLanguage()

  const cases = [
    {
      folder: "granola",
      title: t('cases.granola.title'),
      description: t('cases.granola.description')
    },
    {
      folder: "huggingface", 
      title: t('cases.huggingface.title'),
      description: t('cases.huggingface.description')
    },
    {
      folder: "ollama",
      title: t('cases.ollama.title'),
      description: t('cases.ollama.description')
    },
    {
      folder: "supabase",
      title: t('cases.supabase.title'),
      description: t('cases.supabase.description')
    }
  ]

  const reportContents = [
    t('cases.content1'),
    t('cases.content2'),
    t('cases.content3'),
    t('cases.content4'),
    t('cases.content5'),
    t('cases.content6')
  ]

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <div className="section-header">
          <h2>{t('cases.title')}</h2>
          <Link href="/templates" className="view-more-btn">
            {t('cases.viewMore')}
          </Link>
        </div>
        <div className="case-grid">
          {cases.map((caseItem, index) => (
            <div 
              key={index} 
              className="case-item"
              onClick={() => {
                if ((window as any).openImageModal) {
                  (window as any).openImageModal(caseItem.folder, caseItem.title)
                }
              }}
            >
              <div className="case-image">
                <img src={`/${caseItem.folder}/0.png`} alt={`${caseItem.title} analysis report case`} />
              </div>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
            </div>
          ))}
        </div>
        <div className="report-contents">
          <h3>{t('cases.reportTitle')}</h3>
          <p className="report-subtitle">{t('cases.reportSubtitle')}</p>
          <div className="content-grid">
            {reportContents.map((content, index) => (
              <div key={index} className="content-item">
                <span>{content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
