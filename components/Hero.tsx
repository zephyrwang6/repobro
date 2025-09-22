import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">{t('hero.title')}</span>
              <br /><span className="hero-subtitle-text">{t('hero.subtitle')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('hero.description')}
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <span>{t('hero.feature1')}</span>
              </div>
              <div className="feature-item">
                <span>{t('hero.feature2')}</span>
              </div>
              <div className="feature-item">
                <span>{t('hero.feature3')}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-title">{t('hero.mockupTitle')}</div>
              </div>
              <div className="mockup-content">
                <div className="chart-placeholder">
                  <div className="chart-title">{t('hero.chartTitle')}</div>
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '60%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '45%' }}></div>
                    <div className="bar" style={{ height: '90%' }}></div>
                  </div>
                </div>
                <div className="report-preview">
                  <div className="preview-line"></div>
                  <div className="preview-line short"></div>
                  <div className="preview-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
