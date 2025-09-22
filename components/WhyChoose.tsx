import { useLanguage } from '../contexts/LanguageContext'

export default function WhyChoose() {
  const { t } = useLanguage()

  const reasons = [
    {
      title: t('whyChoose.professional.title'),
      description: t('whyChoose.professional.description')
    },
    {
      title: t('whyChoose.efficient.title'),
      description: t('whyChoose.efficient.description')
    },
    {
      title: t('whyChoose.affordable.title'),
      description: t('whyChoose.affordable.description')
    },
    {
      title: t('whyChoose.comprehensive.title'),
      description: t('whyChoose.comprehensive.description')
    },
    {
      title: t('whyChoose.useful.title'),
      description: t('whyChoose.useful.description')
    },
    {
      title: t('whyChoose.thoughtful.title'),
      description: t('whyChoose.thoughtful.description')
    }
  ]

  return (
    <section className="why-choose">
      <div className="container">
        <h2>{t('whyChoose.title')}</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item">
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
