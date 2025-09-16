export default function Guarantees() {
  const guarantees = [
    {
      title: "效率保证",
      items: [
        "24小时快速响应",
        "专业模板加速",
        "AI工具辅助分析",
        "高效交付流程"
      ]
    },
    {
      title: "质量保证",
      items: [
        "专业分析师团队",
        "多重质量检查",
        "数据来源可靠",
        "分析逻辑严谨"
      ]
    },
    {
      title: "服务保证",
      items: [
        "一对一专属服务",
        "全程跟踪指导",
        "后续答疑支持",
        "满意度保障"
      ]
    },
    {
      title: "安全保证",
      items: [
        "信息严格保密",
        "数据安全传输",
        "专业合规处理",
        "隐私充分保护"
      ]
    }
  ]

  return (
    <section className="guarantees">
      <div className="container">
        <div className="section-header">
          <h2>服务保障</h2>
          <p>全方位保障，让您安心选择</p>
        </div>
        <div className="guarantees-grid">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="guarantee-card">
              <h3>{guarantee.title}</h3>
              <ul>
                {guarantee.items.map((item, itemIndex) => (
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
