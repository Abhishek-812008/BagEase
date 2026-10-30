import Header from '../components/Header';

function Dashboard() {
  return (
    <div className="page dashboard-page">
      <Header />

      <section className="dashboard-hero">
        <div className="hero-content">
          <p className="hero-greeting">Good Morning,</p>

          <h2>
            Welcome to <span>BagEase</span>
          </h2>

          <p className="hero-description">
            Manage bag inventory, repair services, offline sales,
            and customer feedback — all in one place.
          </p>
        </div>
      </section>

      <div className="stats-grid">
        <div className="stat-card stat-blue">
          <div className="stat-icon">👜</div>
          <h3>Total Bag Types</h3>
          <strong>4</strong>
          <p>Different types of bags</p>
        </div>

        <div className="stat-card stat-green">
          <div className="stat-icon">📦</div>
          <h3>Total Stock Items</h3>
          <strong>38</strong>
          <p>Items in stock</p>
        </div>

        <div className="stat-card stat-orange">
          <div className="stat-icon">⚠️</div>
          <h3>Low Stock Bags</h3>
          <strong>1</strong>
          <p>Needs attention</p>
        </div>

        <div className="stat-card stat-purple">
          <div className="stat-icon">🔧</div>
          <h3>Repair Records</h3>
          <strong>2</strong>
          <p>In progress / completed</p>
        </div>
      </div>

      <div className="dashboard-lower">
        <div className="dashboard-card overview-card">
          <h2>📊 Quick Overview</h2>

          <p>
            BagEase helps shop staff manage inventory, repair services,
            offline sales, payment records, and customer feedback.
          </p>

          <div className="overview-items">
            <div>
              <span>👜</span>
              <h4>Inventory</h4>
              <p>Track and manage bag stock</p>
            </div>

            <div>
              <span>🔧</span>
              <h4>Repairs</h4>
              <p>Handle repair records and status</p>
            </div>

            <div>
              <span>🧾</span>
              <h4>Sales & Records</h4>
              <p>Record offline sales and payments</p>
            </div>

            <div>
              <span>💬</span>
              <h4>Feedback</h4>
              <p>View customer ratings and comments</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card tasks-card">
          <h2>📅 Today's Tasks</h2>

          <div className="task-item">
            <span className="task-dot red"></span>
            <p>Check bags with low stock.</p>
            <span>›</span>
          </div>

          <div className="task-item">
            <span className="task-dot blue"></span>
            <p>Update pending repair records.</p>
            <span>›</span>
          </div>

          <div className="task-item">
            <span className="task-dot green"></span>
            <p>Record today's offline sales.</p>
            <span>›</span>
          </div>

          <div className="task-item">
            <span className="task-dot purple"></span>
            <p>Review customer feedback.</p>
            <span>›</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;