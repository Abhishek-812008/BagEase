import { useState } from 'react';
import Header from '../components/Header';

function SalesRecords() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const [sales, setSales] = useState([
    {
      id: 1,
      customer: 'Amit Sharma',
      bagName: 'VIP Trolley Bag',
      quantity: 1,
      total: 2500,
      paymentMethod: 'Cash',
      paymentStatus: 'Paid',
    },
    {
      id: 2,
      customer: 'Priya Deshmukh',
      bagName: 'School Backpack',
      quantity: 2,
      total: 2400,
      paymentMethod: 'UPI',
      paymentStatus: 'Paid',
    },
  ]);

  const [formData, setFormData] = useState({
    customer: '',
    bagName: '',
    quantity: '',
    total: '',
    paymentMethod: 'Cash',
    paymentStatus: 'Paid',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSale = {
      id: Date.now(),
      customer: formData.customer,
      bagName: formData.bagName,
      quantity: Number(formData.quantity),
      total: Number(formData.total),
      paymentMethod: formData.paymentMethod,
      paymentStatus: formData.paymentStatus,
    };

    setSales((previousSales) => [
      ...previousSales,
      newSale,
    ]);

    setFormData({
      customer: '',
      bagName: '',
      quantity: '',
      total: '',
      paymentMethod: 'Cash',
      paymentStatus: 'Paid',
    });

    setShowForm(false);
  };

  const filteredSales = sales.filter(
    (sale) =>
      sale.customer.toLowerCase().includes(search.toLowerCase()) ||
      sale.bagName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Header />

      <div className="page-heading">
        <div>
          <h2>Sales & Records</h2>
          <p>Record offline bag sales and payment details.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close Form' : '+ Add Sale'}
        </button>
      </div>

      {showForm && (
        <div className="dashboard-card inventory-form">
          <h2>Add Sale</h2>

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
                <label>Bag Name</label>
                <input
                  type="text"
                  name="bagName"
                  placeholder="Enter bag name"
                  value={formData.bagName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </div>

              <div className="form-group">
                <label>Total Amount</label>
                <input
                  type="number"
                  name="total"
                  placeholder="Enter total amount"
                  value={formData.total}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="Card">Card</option>
                </select>
              </div>

              <div className="form-group">
                <label>Payment Status</label>
                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                >
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            <button type="submit" className="primary-button">
              Add Sale
            </button>
          </form>
        </div>
      )}

      <div className="inventory-toolbar">
        <input
          type="text"
          placeholder="Search customer or bag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Bag Name</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredSales.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.customer}</td>
                <td>{sale.bagName}</td>
                <td>{sale.quantity}</td>
                <td>₹{sale.total}</td>
                <td>{sale.paymentMethod}</td>
                <td>
                  <span
                    className={
                      sale.paymentStatus === 'Paid'
                        ? 'stock available-stock'
                        : 'stock low-stock'
                    }
                  >
                    {sale.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredSales.length === 0 && (
        <div className="dashboard-card">
          <p>No sales records found.</p>
        </div>
      )}
    </div>
  );
}

export default SalesRecords;