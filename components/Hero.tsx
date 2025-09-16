export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">报告佬 RepoBro</span>
              <br />AI驱动的专业行业分析服务
            </h1>
            <p className="hero-subtitle">
              让数据说话，让分析更智能——为您量身定制的行业深度分析报告
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <span>24小时快速交付</span>
              </div>
              <div className="feature-item">
                <span>AI智能分析</span>
              </div>
              <div className="feature-item">
                <span>超值9.9元</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-title">行业分析报告</div>
              </div>
              <div className="mockup-content">
                <div className="chart-placeholder">
                  <div className="chart-title">数据分析报告</div>
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '60%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '45%' }}></div>
                    <div className="bar" style={{ height: '90%' }}></div>
                  </div>
                </div>
                <div className="report-preview">
                  <div className="preview-line"></div>
                  <div className="preview-line short"></div>
                  <div className="preview-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
