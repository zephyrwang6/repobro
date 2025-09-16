import Link from 'next/link'

export default function CaseStudies() {
  const cases = [
    {
      folder: "granola",
      title: "Granola 行业分析",
      description: "深度分析 Granola 市场现状、竞争格局和发展趋势"
    },
    {
      folder: "huggingface", 
      title: "Hugging Face 分析",
      description: "AI 开源平台的市场定位和商业模式研究"
    },
    {
      folder: "ollama",
      title: "Ollama 分析", 
      description: "本地 AI 模型部署工具的技术优势分析"
    },
    {
      folder: "supabase",
      title: "Supabase 分析",
      description: "开源 Firebase 替代方案的市场机会评估"
    }
  ]

  const reportContents = [
    "行业概况与规模",
    "竞争格局分析", 
    "细分市场研究",
    "发展趋势预测",
    "风险机会评估",
    "策略建议总结"
  ]

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <div className="section-header">
          <h2>案例展示</h2>
          <Link href="/100products" className="view-more-btn">
            查看更多
          </Link>
        </div>
        <div className="case-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-item">
              <div 
                className="case-image" 
                onClick={() => {
                  if ((window as any).openImageModal) {
                    (window as any).openImageModal(caseItem.folder, caseItem.title)
                  }
                }}
              >
                <img src={`/${caseItem.folder}/0.png`} alt={`${caseItem.title} 分析报告案例`} />
              </div>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
            </div>
          ))}
        </div>
        <div className="report-contents">
          <h3>报告包含内容</h3>
          <p className="report-subtitle">具体根据产品特点而定</p>
          <div className="content-grid">
            {reportContents.map((content, index) => (
              <div key={index} className="content-item">
                <span>{content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
