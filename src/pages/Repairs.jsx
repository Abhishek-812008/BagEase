import { useState } from 'react';
import Header from '../components/Header';

function Repairs() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const [repairs, setRepairs] = useState([
    {
      id: 1,
      customer: 'Rahul Patil',
      contact: '9876543210',
      bagType: 'Trolley Bag',
      service: 'Wheel Replacement',
      charge: 450,
      status: 'Ready',
    },
    {
      id: 2,
      customer: 'Sneha Joshi',
      contact: '9876543211',
      bagType: 'School Backpack',
      service: 'Zip Repair',
      charge: 150,
      status: 'In Progress',
    },
  ]);

  const [formData, setFormData] = useState({
    customer: '',
    contact: '',
    bagType: '',
    service: '',
    charge: '',
    status: 'Received',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new repair
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRepair = {
      id: Date.now(),
      customer: formData.customer,
      contact: formData.contact,
      bagType: formData.bagType,
      service: formData.service,
      charge: Number(formData.charge),
      status: formData.status,
    };

    setRepairs((previousRepairs) => [
      ...previousRepairs,
      newRepair,
    ]);

    setFormData({
      customer: '',
      contact: '',
      bagType: '',
      service: '',
      charge: '',
      status: 'Received',
    });

    setShowForm(false);
  };

  // Update repair status
  const updateStatus = (id, newStatus) => {
    setRepairs((previousRepairs) =>
      previousRepairs.map((repair) =>
        repair.id === id
          ? { ...repair, status: newStatus }
          : repair
      )
    );
  };

  // Search by customer name or bag type
  const filteredRepairs = repairs.filter(
    (repair) =>
      repair.customer.toLowerCase().includes(search.toLowerCase()) ||
      repair.bagType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Header />

      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <h2>Repair Services</h2>
          <p>Manage bag repair records and service status.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close Form' : '+ Add Repair'}
        </button>
      </div>

      {/* Add Repair Form */}
      {showForm && (
        <div className="dashboard-card inventory-form">
          <h2>Add Repair</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Customer Name</label>
                <input
                  type="text"
                  name="customer"
                  placeholder="Enter customer name"
                  value={formData.customer}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Enter contact number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Bag Type</label>
                <input
                  type="text"
                  name="bagType"
                  placeholder="Enter bag type"
                  value={formData.bagType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Repair Service</label>
                <input
                  type="text"
                  name="service"
                  placeholder="e.g. Wheel Replacement"
                  value={formData.service}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Repair Charge</label>
                <input
                  type="number"
                  name="charge"
                  placeholder="Enter charge"
                  value={formData.charge}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Repair Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Received">Received</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Ready">Ready</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>

            <button type="submit" className="primary-button">
              Add Repair
            </button>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="inventory-toolbar">
        <input
          type="text"
          placeholder="Search customer or bag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Repair Table */}
      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Bag Type</th>
              <th>Service</th>
              <th>Charge</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredRepairs.map((repair) => (
              <tr key={repair.id}>
                <td>{repair.customer}</td>
                <td>{repair.contact}</td>
                <td>{repair.bagType}</td>
                <td>{repair.service}</td>
                <td>₹{repair.charge}</td>

                <td>
                  <span className="stock available-stock">
                    {repair.status}
                  </span>
                </td>

                <td>
                  <select
                    value={repair.status}
                    onChange={(e) =>
                      updateStatus(repair.id, e.target.value)
                    }
                  >
                    <option value="Received">Received</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Ready">Ready</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Search Results */}
      {filteredRepairs.length === 0 && (
        <div className="dashboard-card">
          <p>No repair records found.</p>
        </div>
      )}
    </div>
  );
}

export default Repairs;