export default function WhyChoose() {
  const reasons = [
    {
      title: "专业",
      description: "资深分析师 + AI工具双重保障"
    },
    {
      title: "高效", 
      description: "24小时快速交付，不让机会等待"
    },
    {
      title: "实惠",
      description: "9.9元超值价格，一杯奶茶钱"
    },
    {
      title: "全面",
      description: "文字+图表+PPT，满足不同需求"
    },
    {
      title: "有用",
      description: "实用分析报告，指导决策行动"
    },
    {
      title: "贴心",
      description: "一对一专属服务，全程无忧体验"
    }
  ]

  return (
    <section className="why-choose">
      <div className="container">
        <h2>选择我们的理由</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item">
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
