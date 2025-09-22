import { useLanguage } from '../contexts/LanguageContext'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      title: t('features.research.title'),
      items: [
        t('features.research.item1'),
        t('features.research.item2'),
        t('features.research.item3')
      ]
    },
    {
      title: t('features.ai.title'),
      items: [
        t('features.ai.item1'),
        t('features.ai.item2'),
        t('features.ai.item3')
      ]
    },
    {
      title: t('features.delivery.title'),
      items: [
        t('features.delivery.item1'),
        t('features.delivery.item2'),
        t('features.delivery.item3'),
        t('features.delivery.item4')
      ]
    },
    {
      title: t('features.service.title'),
      items: [
        t('features.service.item1'),
        t('features.service.item2'),
        t('features.service.item3')
      ]
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>{t('features.title')}</h2>
          <p>{t('features.description')}</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <ul>
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
