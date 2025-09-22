import { useLanguage } from '../contexts/LanguageContext'
import { Language } from '../lib/i18n'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <button 
      className="language-switcher" 
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'zh' ? 'English' : '中文'}`}
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  )
}