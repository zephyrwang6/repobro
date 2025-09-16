export default function Scenarios() {
  const scenarios = [
    {
      title: "商业决策",
      items: [
        "市场进入分析",
        "竞争对手研究", 
        "投资机会评估",
        "商业模式分析"
      ]
    },
    {
      title: "学术研究",
      items: [
        "毕业论文支撑",
        "课题研究资料",
        "行业现状梳理",
        "趋势预测分析"
      ]
    },
    {
      title: "企业规划",
      items: [
        "战略制定支撑",
        "市场拓展研究",
        "产品定位分析",
        "风险评估报告"
      ]
    },
    {
      title: "投资分析",
      items: [
        "行业前景评估",
        "项目可行性研究",
        "市场规模测算",
        "盈利模式分析"
      ]
    }
  ]

  return (
    <section className="scenarios">
      <div className="container">
        <div className="section-header">
          <h2>适用场景</h2>
          <p>满足不同需求，助力各种决策</p>
        </div>
        <div className="scenarios-grid">
          {scenarios.map((scenario, index) => (
            <div key={index} className="scenario-card">
              <h3>{scenario.title}</h3>
              <ul>
                {scenario.items.map((item, itemIndex) => (
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
