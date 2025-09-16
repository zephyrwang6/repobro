import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <Link href="/">
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
          <nav className="nav-menu">
            <Link href="/#features">产品介绍</Link>
            <Link href="/100products">分析案例</Link>
            <Link href="/#pricing">定价</Link>
            <Link href="/#process">服务流程</Link>
            <a href="https://v3oxu28gnc.feishu.cn/share/base/form/shrcnGjGtbvIUfnSvYRbDr7mqoc" target="_blank" rel="noopener noreferrer" className="cta-btn">立即开始</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
