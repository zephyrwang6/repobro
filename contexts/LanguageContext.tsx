import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language, TranslationKey, defaultLanguage } from '../lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 检测浏览器语言
function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage
  
  const browserLang = navigator.language || navigator.languages?.[0] || 'zh'
  
  // 如果浏览器语言是英文相关，返回英文
  if (browserLang.toLowerCase().startsWith('en')) {
    return 'en'
  }
  
  // 默认返回中文
  return 'zh'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)

  useEffect(() => {
    // 优先从localStorage读取，如果没有则使用浏览器语言
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    } else {
      const browserLanguage = getBrowserLanguage()
      setLanguageState(browserLanguage)
      localStorage.setItem('language', browserLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    
    // 更新CSS变量用于"点击查看大图"翻译
    document.documentElement.style.setProperty(
      '--click-to-view-text', 
      `"${translations[lang]['cases.clickToView']}"`
    )
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations[defaultLanguage][key] || key
  }

  // 在语言变化时更新CSS变量
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--click-to-view-text', 
      `"${t('cases.clickToView')}"`
    )
  }, [language, t])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}