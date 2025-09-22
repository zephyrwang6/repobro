import { useLanguage } from '../contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()

  const pricingFeatures = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
    t('pricing.feature4'),
    t('pricing.feature5')
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>{t('pricing.title')}</h2>
        </div>
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>{t('pricing.cardTitle')}</h3>
            <div className="price">
              <span className="currency">{t('pricing.currency')}</span>
              <span className="amount">{t('pricing.amount')}</span>
              <span className="period">{t('pricing.period')}</span>
            </div>
            <p className="price-description">{t('pricing.description')}</p>
          </div>
          <div className="pricing-features">
            {pricingFeatures.map((feature, index) => (
              <span key={index} className="feature-item">{feature}</span>
            ))}
          </div>
          <div className="value-proposition">
            <div className="value-badge">
              <span>{t('pricing.valueBadge')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
