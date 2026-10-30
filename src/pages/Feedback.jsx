import { useState } from 'react';
import Header from '../components/Header';

function Feedback() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      customer: 'Rahul Patil',
      type: 'Repair Service',
      rating: 5,
      comment: 'Good service and quick wheel replacement.',
    },
    {
      id: 2,
      customer: 'Sneha Joshi',
      type: 'Bag Purchase',
      rating: 4,
      comment: 'Good quality bag and helpful staff.',
    },
  ]);

  const [formData, setFormData] = useState({
    customer: '',
    type: 'Repair Service',
    rating: '5',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      customer: formData.customer,
      type: formData.type,
      rating: Number(formData.rating),
      comment: formData.comment,
    };

    setFeedback((previousFeedback) => [
      ...previousFeedback,
      newFeedback,
    ]);

    setFormData({
      customer: '',
      type: 'Repair Service',
      rating: '5',
      comment: '',
    });

    setShowForm(false);
  };

  const filteredFeedback = feedback.filter(
    (item) =>
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.comment.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Header />

      <div className="page-heading">
        <div>
          <h2>Customer Feedback</h2>
          <p>View customer responses and service ratings.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close Form' : '+ Add Feedback'}
        </button>
      </div>

      {showForm && (
        <div className="dashboard-card inventory-form">
          <h2>Add Feedback</h2>

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
                <label>Feedback Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Repair Service">Repair Service</option>
                  <option value="Bag Purchase">Bag Purchase</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Rating</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="2">2 - Poor</option>
                  <option value="1">1 - Very Poor</option>
                </select>
              </div>

              <div className="form-group">
                <label>Comment</label>
                <input
                  type="text"
                  name="comment"
                  placeholder="Enter customer feedback"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="primary-button">
              Add Feedback
            </button>
          </form>
        </div>
      )}

      <div className="inventory-toolbar">
        <input
          type="text"
          placeholder="Search customer or feedback..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Feedback Type</th>
              <th>Rating</th>
              <th>Comment</th>
            </tr>
          </thead>

          <tbody>
            {filteredFeedback.map((item) => (
              <tr key={item.id}>
                <td>{item.customer}</td>
                <td>{item.type}</td>
                <td>{'★'.repeat(item.rating)}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredFeedback.length === 0 && (
        <div className="dashboard-card">
          <p>No feedback records found.</p>
        </div>
      )}
    </div>
  );
}

export default Feedback;