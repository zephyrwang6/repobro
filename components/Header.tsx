import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                alt="报告佬 Logo" 
                width={32} 
                height={32}
                style={{ marginRight: '8px' }}
                onError={(e) => {
                  // 如果logo加载失败，隐藏图片元素
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span>报告佬</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-menu">
            <Link href="/home#features">产品介绍</Link>
            <Link href="/templates">分析案例</Link>
            <Link href="/home#pricing">定价</Link>
            <Link href="/home#process">服务流程</Link>
            <a href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" target="_blank" rel="noopener noreferrer" className="cta-btn">立即开始</a>
          </nav>

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <a href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" target="_blank" rel="noopener noreferrer" className="cta-btn mobile-cta">立即开始</a>
            <button className="hamburger" onClick={toggleMobileMenu} aria-label="菜单">
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                <Link href="/home#features" onClick={closeMobileMenu}>产品介绍</Link>
                <Link href="/templates" onClick={closeMobileMenu}>分析案例</Link>
                <Link href="/home#pricing" onClick={closeMobileMenu}>定价</Link>
                <Link href="/home#process" onClick={closeMobileMenu}>服务流程</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
