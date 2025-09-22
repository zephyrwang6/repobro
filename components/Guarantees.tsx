import { useLanguage } from '../contexts/LanguageContext'

export default function Guarantees() {
  const { t } = useLanguage()

  const guarantees = [
    {
      title: t('guarantees.efficiency.title'),
      items: [
        t('guarantees.efficiency.item1'),
        t('guarantees.efficiency.item2'),
        t('guarantees.efficiency.item3'),
        t('guarantees.efficiency.item4')
      ]
    },
    {
      title: t('guarantees.quality.title'),
      items: [
        t('guarantees.quality.item1'),
        t('guarantees.quality.item2'),
        t('guarantees.quality.item3'),
        t('guarantees.quality.item4')
      ]
    },
    {
      title: t('guarantees.service.title'),
      items: [
        t('guarantees.service.item1'),
        t('guarantees.service.item2'),
        t('guarantees.service.item3'),
        t('guarantees.service.item4')
      ]
    },
    {
      title: t('guarantees.security.title'),
      items: [
        t('guarantees.security.item1'),
        t('guarantees.security.item2'),
        t('guarantees.security.item3'),
        t('guarantees.security.item4')
      ]
    }
  ]

  return (
    <section className="guarantees">
      <div className="container">
        <div className="section-header">
          <h2>{t('guarantees.title')}</h2>
          <p>{t('guarantees.description')}</p>
        </div>
        <div className="guarantees-grid">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="guarantee-card">
              <h3>{guarantee.title}</h3>
              <ul>
                {guarantee.items.map((item, itemIndex) => (
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
