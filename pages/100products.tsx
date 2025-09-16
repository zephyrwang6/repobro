import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageModal from '../components/ImageModal'

export default function Products() {
  const [products, setProducts] = useState<Array<{
    folder: string;
    title: string;
    description: string;
  }>>([])

  useEffect(() => {
    // 定义所有产品分析文件夹
    const productFolders = [
      { folder: 'anthoripic', title: 'Anthropic 分析', description: 'AI安全与对齐技术研究分析' },
      { folder: 'chroma', title: 'Chroma 分析', description: '向量数据库技术优势分析' },
      { folder: 'doubao', title: '豆包 分析', description: '字节跳动AI产品市场定位研究' },
      { folder: 'google-AIstudio', title: 'Google AI 分析', description: '谷歌AI生态布局分析' },
      { folder: 'granola', title: 'Granola 分析', description: 'AI工作流自动化平台分析' },
      { folder: 'huggingface', title: 'Hugging Face 分析', description: 'AI开源平台商业模式研究' },
      { folder: 'juns', title: 'Juns 分析', description: 'AI工具产品功能分析' },
      { folder: 'kimi', title: 'Kimi 分析', description: '月之暗面AI产品分析' },
      { folder: 'manud', title: 'Manud 分析', description: 'AI内容创作工具分析' },
      { folder: 'ollama', title: 'Ollama 分析', description: '本地AI模型部署工具分析' },
      { folder: 'openai', title: 'OpenAI 分析', description: 'ChatGPT与GPT技术生态分析' },
      { folder: 'perplexity', title: 'Perplexity 分析', description: 'AI搜索引擎技术分析' },
      { folder: 'pika', title: 'Pika 分析', description: 'AI视频生成技术分析' },
      { folder: 'quilbot', title: 'Quillbot 分析', description: 'AI写作辅助工具分析' },
      { folder: 'runway', title: 'Runway 分析', description: 'AI视频编辑平台分析' },
      { folder: 'seweetchat', title: 'SeweetChat 分析', description: 'AI聊天机器人分析' },
      { folder: 'stabledeffision', title: 'Stable Diffusion 分析', description: '开源AI图像生成模型分析' },
      { folder: 'suno', title: 'Suno 分析', description: 'AI音乐生成技术分析' },
      { folder: 'supabase', title: 'Supabase 分析', description: '开源Firebase替代方案分析' },
      { folder: 'synthesia', title: 'Synthesia 分析', description: 'AI虚拟主播技术分析' }
    ]
    
    setProducts(productFolders)
  }, [])

  return (
    <>
      <Head>
        <title>产品分析案例 - 报告佬 RepoBro </title>
        <meta name="description" content="查看我们为100+AI产品提供的专业行业分析报告案例，包括OpenAI、Google AI、Hugging Face等知名产品" />
        <meta name="keywords" content="AI产品分析,行业报告,产品案例,技术分析" />
        <meta property="og:title" content="产品分析案例 - 报告佬 RepoBro " />
        <meta property="og:description" content="查看我们为100+AI产品提供的专业行业分析报告案例" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      

      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <h2>产品分析案例展示</h2>
            <p>点击任意产品查看详细分析报告</p>
          </div>
          <div className="case-grid">
            {products.map((product, index) => (
              <div key={index} className="case-item">
                <div 
                  className="case-image" 
                  onClick={() => {
                    if ((window as any).openImageModal) {
                      (window as any).openImageModal(product.folder, product.title)
                    }
                  }}
                >
                  <img src={`/${product.folder}/0.png`} alt={`${product.title} 分析报告案例`} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
          <div className="case-studies-footer">
            <a 
              href="https://xhslink.com/m/54wVlFmYcK5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-more-btn"
            >
              查看更多
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ImageModal />
    </>
  )
}
