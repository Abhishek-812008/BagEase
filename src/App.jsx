import { useState } from 'react';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Repairs from './pages/Repairs';
import SalesRecords from './pages/SalesRecords';
import Feedback from './pages/Feedback';

import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'Inventory':
        return <Inventory />;

      case 'Repairs':
        return <Repairs />;

      case 'Sales & Records':
        return <SalesRecords />;

      case 'Customer Feedback':
        return <Feedback />;

      case 'Dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1>BagEase</h1>

        <div className="nav-links">
          <button
            className={activePage === 'Dashboard' ? 'active' : ''}
            onClick={() => setActivePage('Dashboard')}
          >
            Dashboard
          </button>

          <button
            className={activePage === 'Inventory' ? 'active' : ''}
            onClick={() => setActivePage('Inventory')}
          >
            Inventory
          </button>

          <button
            className={activePage === 'Repairs' ? 'active' : ''}
            onClick={() => setActivePage('Repairs')}
          >
            Repairs
          </button>

          <button
            className={activePage === 'Sales & Records' ? 'active' : ''}
            onClick={() => setActivePage('Sales & Records')}
          >
            Sales & Records
          </button>

          <button
            className={activePage === 'Customer Feedback' ? 'active' : ''}
            onClick={() => setActivePage('Customer Feedback')}
          >
            Customer Feedback
          </button>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;