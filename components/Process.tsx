import { useLanguage } from '../contexts/LanguageContext'

export default function Process() {
  const { t } = useLanguage()

  const steps = [
    {
      number: 1,
      title: t('process.step1.title'),
      description: t('process.step1.description')
    },
    {
      number: 2,
      title: t('process.step2.title'),
      description: t('process.step2.description')
    },
    {
      number: 3,
      title: t('process.step3.title'),
      description: t('process.step3.description')
    },
    {
      number: 4,
      title: t('process.step4.title'),
      description: t('process.step4.description')
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2>{t('process.title')}</h2>
          <p>{t('process.description')}</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
