export default function Features() {
  const features = [
    {
      title: "深度调研",
      items: [
        "全网信息源搜罗整合",
        "多维度数据收集分析",
        "行业专家观点汇总"
      ]
    },
    {
      title: "AI智能分析",
      items: [
        "专业分析模板定制",
        "AI工具精准指导",
        "数据洞察自动生成"
      ]
    },
    {
      title: "三重交付",
      items: [
        "可复用的分析模板",
        "详尽文字版分析报告",
        "精美图文PPT演示",
        "可视化数据图表"
      ]
    },
    {
      title: "高效服务",
      items: [
        "24小时内快速回复",
        "专属分析指导员对接",
        "一对一定制化服务"
      ]
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>产品介绍</h2>
          <p>一站式行业分析解决方案，专业AI指导员+AI协同，24小时快速响应</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <ul>
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
