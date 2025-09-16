export default function Pricing() {
  const pricingFeatures = [
    "专业分析模板",
    "全面文字报告",
    "图文PPT演示",
    "24小时快速交付",
    "一对一专属服务"
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>产品定价</h2>
        </div>
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>定制行业分析报告</h3>
            <div className="price">
              <span className="currency">¥</span>
              <span className="amount">9.9</span>
              <span className="period">/ 份</span>
            </div>
            <p className="price-description">专业团队 + AI工具，以传统咨询1/100的价格，获得同等质量的分析报告</p>
          </div>
          <div className="pricing-features">
            {pricingFeatures.map((feature, index) => (
              <span key={index} className="feature-item">{feature}</span>
            ))}
          </div>
          <div className="value-proposition">
            <div className="value-badge">
              <span>超值性价比</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
