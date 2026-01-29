import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <Link href="/" onClick={closeMobileMenu}>
              <Image 
                src="/logo/logo.png" 
                alt={`\${t('header.logo')} Logo`}
                width={32} 
                height={32}
                style={{ marginRight: '8px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span>{t('header.logo')}</span>
            </Link>
          </div>
          
          <nav className="nav-menu desktop-menu">
            <Link href="/home#features">{t('header.features')}</Link>
            <Link href="/templates">{t('header.cases')}</Link>
            <Link href="/home#pricing">{t('header.pricing')}</Link>
            <Link href="/home#process">{t('header.process')}</Link>
            <div className="user-group-nav">
              <span className="user-group-label">{t('header.userGroup')}</span>
              <div className="qr-code-tooltip">
                <Image 
                  src="/logo/wechat-qr.jpg" 
                  alt={t('header.wechatQr')}
                  width={150} 
                  height={150}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <p>{t('header.joinGroup')}</p>
              </div>
            </div>
            <ThemeSwitcher />
            <LanguageSwitcher />
            <a href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" target="_blank" rel="noopener noreferrer" className="cta-btn">{t('header.getReport')}</a>
          </nav>

          <div className="mobile-nav">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <a href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" target="_blank" rel="noopener noreferrer" className="cta-btn mobile-cta">{t('header.getReport')}</a>
            <button className="hamburger" onClick={toggleMobileMenu} aria-label={t('header.menu')}>
              <span className={`hamburger-line \${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line \${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line \${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                <Link href="/home#features" onClick={closeMobileMenu}>{t('header.features')}</Link>
                <Link href="/templates" onClick={closeMobileMenu}>{t('header.cases')}</Link>
                <Link href="/home#pricing" onClick={closeMobileMenu}>{t('header.pricing')}</Link>
                <Link href="/home#process" onClick={closeMobileMenu}>{t('header.process')}</Link>
                <div className="mobile-user-group">
                  <span>{t('header.userGroup')}</span>
                  <div className="mobile-qr-code">
                    <Image 
                      src="/logo/wechat-qr.jpg" 
                      alt={t('header.wechatQr')}
                      width={120} 
                      height={120}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <p>{t('header.joinGroup')}</p>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
