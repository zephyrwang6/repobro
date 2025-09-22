import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function SubscribeModal() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  // 全局函数，供其他组件调用
  if (typeof window !== 'undefined') {
    (window as any).openSubscribeModal = openModal
  }

  if (!isOpen) return null

  return (
    <div className="subscribe-modal-overlay" onClick={closeModal}>
      <div className="subscribe-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="subscribe-modal-body">
          <div className="qr-code-container">
            <Image 
              src="/logo/wechat-qr.jpg" 
              alt={t('header.wechatQr')}
              width={200} 
              height={200}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          <p className="subscribe-modal-desc">{t('templates.subscribeModalDesc')}</p>
        </div>
      </div>
    </div>
  )
}