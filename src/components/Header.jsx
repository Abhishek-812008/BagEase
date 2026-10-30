function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-logo">
          <div className="logo-icon">👜</div>

          <div>
            <h1>BagEase</h1>
            <p>Smart Bag Shop Management</p>
          </div>
        </div>

        <div className="header-right">
          <span className="header-status">
            <span className="status-dot"></span>
            Shop Management
          </span>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>

            <div>
              <strong>BagEase Admin</strong>
              <small>Administrator</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;