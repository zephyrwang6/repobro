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
            <div className="user-group-nav">
              <span className="user-group-label">用户群</span>
              <div className="qr-code-tooltip">
                <Image 
                  src="/logo/wechat-qr.jpg" 
                  alt="微信用户群二维码" 
                  width={150} 
                  height={150}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <p>扫码加入用户群</p>
              </div>
            </div>
            <a href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" target="_blank" rel="noopener noreferrer" className="cta-btn">获取报告</a>
          </nav>

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <a href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" target="_blank" rel="noopener noreferrer" className="cta-btn mobile-cta">获取报告</a>
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
                <div className="mobile-user-group">
                  <span>用户群</span>
                  <div className="mobile-qr-code">
                    <Image 
                      src="/logo/wechat-qr.jpg" 
                      alt="微信用户群二维码" 
                      width={120} 
                      height={120}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <p>扫码加入用户群</p>
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
