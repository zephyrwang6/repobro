import { useLanguage } from '../contexts/LanguageContext'

export default function Scenarios() {
  const { t } = useLanguage()

  const scenarios = [
    {
      title: t('scenarios.business.title'),
      items: [
        t('scenarios.business.item1'),
        t('scenarios.business.item2'),
        t('scenarios.business.item3'),
        t('scenarios.business.item4')
      ]
    },
    {
      title: t('scenarios.academic.title'),
      items: [
        t('scenarios.academic.item1'),
        t('scenarios.academic.item2'),
        t('scenarios.academic.item3'),
        t('scenarios.academic.item4')
      ]
    },
    {
      title: t('scenarios.enterprise.title'),
      items: [
        t('scenarios.enterprise.item1'),
        t('scenarios.enterprise.item2'),
        t('scenarios.enterprise.item3'),
        t('scenarios.enterprise.item4')
      ]
    },
    {
      title: t('scenarios.investment.title'),
      items: [
        t('scenarios.investment.item1'),
        t('scenarios.investment.item2'),
        t('scenarios.investment.item3'),
        t('scenarios.investment.item4')
      ]
    }
  ]

  return (
    <section className="scenarios">
      <div className="container">
        <div className="section-header">
          <h2>{t('scenarios.title')}</h2>
          <p>{t('scenarios.description')}</p>
        </div>
        <div className="scenarios-grid">
          {scenarios.map((scenario, index) => (
            <div key={index} className="scenario-card">
              <h3>{scenario.title}</h3>
              <ul>
                {scenario.items.map((item, itemIndex) => (
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
