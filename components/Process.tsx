export default function Process() {
  const steps = [
    {
      number: 1,
      title: "提交需求",
      description: "填写需求表单，详细描述分析要求，明确行业和重点领域"
    },
    {
      number: 2,
      title: "确认支付", 
      description: "支付9.9元服务费用，获得订单确认信息"
    },
    {
      number: 3,
      title: "专家对接",
      description: "添加专属分析指导员微信，一对一需求深度沟通"
    },
    {
      number: 4,
      title: "报告交付",
      description: "24小时内完成分析，获得完整分析报告，支持后续答疑"
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2>服务流程</h2>
          <p>简单四步，获得专业行业分析报告</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
