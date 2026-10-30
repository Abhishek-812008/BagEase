import { useState } from 'react';
import Header from '../components/Header';

function Inventory() {
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [bags, setBags] = useState([
    {
      id: 1,
      name: 'VIP Trolley Bag',
      category: 'Trolley Bag',
      price: 2500,
      stock: 15,
    },
    {
      id: 2,
      name: 'School Backpack',
      category: 'Backpack',
      price: 1200,
      stock: 8,
    },
    {
      id: 3,
      name: 'Laptop Bag',
      category: 'Laptop Bag',
      price: 950,
      stock: 12,
    },
    {
      id: 4,
      name: 'Travel Duffle Bag',
      category: 'Travel Bag',
      price: 1800,
      stock: 3,
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new bag
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBag = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    setBags((previousBags) => [...previousBags, newBag]);

    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
    });

    setShowForm(false);
  };

  // Increase or decrease stock
  const updateStock = (id, change) => {
    setBags((previousBags) =>
      previousBags.map((bag) =>
        bag.id === id
          ? {
              ...bag,
              stock: Math.max(0, bag.stock + change),
            }
          : bag
      )
    );
  };

  // Search bags by name
  const filteredBags = bags.filter((bag) =>
    bag.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Header />

      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <h2>Bag Inventory</h2>
          <p>Check bag availability and stock status.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close Form' : '+ Add New Bag'}
        </button>
      </div>

      {/* Add New Bag Form */}
      {showForm && (
        <div className="dashboard-card inventory-form">
          <h2>Add New Bag</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Bag Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter bag name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  placeholder="Enter quantity"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
            </div>

            <button type="submit" className="primary-button">
              Add Bag
            </button>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="inventory-toolbar">
        <input
          type="text"
          placeholder="Search bags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Inventory Table */}
      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Bag Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Stock Action</th>
              <th>Stock Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredBags.map((bag) => (
              <tr key={bag.id}>
                <td>{bag.name}</td>

                <td>{bag.category}</td>

                <td>₹{bag.price}</td>

                <td>
                  <strong>{bag.stock}</strong>
                </td>

                <td>
                  <button
                    className="stock-button"
                    onClick={() => updateStock(bag.id, -1)}
                    disabled={bag.stock === 0}
                  >
                    −
                  </button>

                  <button
                    className="stock-button"
                    onClick={() => updateStock(bag.id, 1)}
                  >
                    +
                  </button>
                </td>

                <td>
                  <span
                    className={
                      bag.stock === 0
                        ? 'stock out-stock'
                        : bag.stock <= 5
                        ? 'stock low-stock'
                        : 'stock available-stock'
                    }
                  >
                    {bag.stock === 0
                      ? 'Out of Stock'
                      : bag.stock <= 5
                      ? 'Low Stock'
                      : 'In Stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Search Results */}
      {filteredBags.length === 0 && (
        <div className="dashboard-card">
          <p>No bags found.</p>
        </div>
      )}
    </div>
  );
}

export default Inventory;