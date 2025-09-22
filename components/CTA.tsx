import { useLanguage } from '../contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.description')}</p>
          <div className="cta-buttons">
            <a 
              href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" 
              className="btn-submit" 
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('cta.submitButton')}
            </a>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span>{t('cta.email')}</span>
            </div>
            <div className="contact-item">
              <span>{t('cta.serviceTime')}</span>
            </div>
            <div className="contact-item">
              <span>{t('cta.wechat')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
