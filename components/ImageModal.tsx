import { useState, useEffect } from 'react'

export default function ImageModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentFolder, setCurrentFolder] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [totalImages, setTotalImages] = useState(0)
  const [imageList, setImageList] = useState<string[]>([])
  const [modalTitle, setModalTitle] = useState('')

  // 全局函数，用于打开弹窗
  useEffect(() => {
    // 将openModal函数挂载到window对象上，供其他组件调用
    (window as any).openImageModal = (folder: string, title: string) => {
      console.log('Opening modal for:', folder, title)
      setCurrentFolder(folder)
      setCurrentImageIndex(0)
      setModalTitle(title)
      
      // Generate image list (只检查前10张图片，减少404错误)
      const images: string[] = []
      for (let i = 0; i < 10; i++) {
        images.push(`/${folder}/${i}.png`)
      }
      
      // Check which images exist
      checkImagesExist(images).then(existingImages => {
        console.log('Found images:', existingImages)
        setImageList(existingImages)
        setTotalImages(existingImages.length)
        if (existingImages.length > 0) {
          console.log('Opening modal with', existingImages.length, 'images')
          setIsOpen(true)
          document.body.style.overflow = 'hidden'
        } else {
          console.log('No images found for folder:', folder)
        }
      }).catch(error => {
        console.error('Error checking images:', error)
      })
    }

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === 'Escape') {
          closeModal()
        } else if (e.key === 'ArrowLeft') {
          showPreviousImage()
        } else if (e.key === 'ArrowRight') {
          showNextImage()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      delete (window as any).openImageModal
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const checkImagesExist = (imageList: string[]): Promise<string[]> => {
    const promises = imageList.map(src => {
      return new Promise<string | null>((resolve) => {
        const img = new Image()
        img.onload = () => resolve(src)
        img.onerror = () => {
          // 静默处理404错误，不输出到控制台
          resolve(null)
        }
        img.src = src
      })
    })
    
    return Promise.all(promises).then(results => {
      return results.filter(src => src !== null) as string[]
    })
  }

  const showPreviousImage = () => {
    if (totalImages > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
    }
  }

  const showNextImage = () => {
    if (totalImages > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  if (!isOpen || imageList.length === 0) return null

  return (
    <div id="imageModal" className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="modal-header">
          <h3 id="modalTitle">{modalTitle}</h3>
        </div>
        <div className="modal-body">
          <button className="nav-btn prev-btn" id="prevBtn" onClick={showPreviousImage}>‹</button>
          <div className="image-container">
            <img 
              id="modalImage" 
              src={imageList[currentImageIndex]} 
              alt={`${currentFolder} 分析报告案例 ${currentImageIndex + 1}`}
            />
          </div>
          <button className="nav-btn next-btn" id="nextBtn" onClick={showNextImage}>›</button>
        </div>
        <div className="modal-footer">
          <div className="image-counter">
            <span id="currentImage">{currentImageIndex + 1}</span> / <span id="totalImages">{totalImages}</span>
          </div>
        </div>
      </div>
    </div>
  )
}