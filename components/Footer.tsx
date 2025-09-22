import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>{t('footer.logo')}</span>
          </div>
          <p>{t('footer.tagline')}</p>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
