//import React from 'react';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const categoryMap = {
  mutton: ['Lamb Mutton', 'Sheep Mutton', 'Goat Mutton'],
  chicken: ['Broiler', 'Desi', 'Country Chicken'],
  fish: ['Rohu', 'Katla', 'Tilapia'],
  'sea fish': ['Pomfret', 'Tuna', 'Salmon'],
};

const IndexPage = () => {

    const [category, setCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [subcategory, setSubcategory] = useState('');

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setSubcategories(categoryMap[selected] || []);
    setSubcategory(''); // reset subcategory

  };
  const handleProductSubmit = async () => {
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);

    // Optional: convert FormData to a plain object
    const payload = {
      name: formData.get('name'),
      category,
      subcategory,
      price: parseFloat(formData.get('price')),
      discount: parseFloat(formData.get('discount')),
      unit: formData.get('unit'),
      shortDescription: formData.get('shortDescription'),
      longDescription: formData.get('longDescription'),
      // image: formData.get('image'), // For now we'll skip file uploads
    };

    try {
      const response = await fetch('http://localhost:8081/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Product added successfully!');
        form.reset(); // clear form
      } else {
        alert('❌ Failed to add product: ' + result.message);
      }
    } catch (error) {
      alert('⚠️ Error: ' + error.message);
    }
  };



  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to="/">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                Dashboard
              </Link>

              <div className="sb-sidenav-menu-heading">My Data Sets</div>
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
              
              <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                All Data Sets
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </a>
              <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#uploadDataModal">Load Data</a>
                  <Link className="nav-link" to="/layout-sidenav-light">View Data</Link>
                </nav>
              </div>

            
            
              <div className="sb-sidenav-menu-heading">Interface</div>
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                Layouts
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </a>
              <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/layout-static">Static Navigation</Link>
                  <Link className="nav-link" to="/layout-sidenav-light">Light Sidenav</Link>
                </nav>
              </div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                Pages
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </a>
              <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth"
                  >
                    Authentication
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                  </a>
                  <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="/login">Login</Link>
                      <Link className="nav-link" to="/signup">Register</Link>
                    </nav>
                  </div>

                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError"
                  >
                    Error
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                  </a>
                  <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="401.html">401 Page</a>
                      <a className="nav-link" href="404.html">404 Page</a>
                      <a className="nav-link" href="500.html">500 Page</a>
                    </nav>
                  </div>
                </nav>
              </div>

              <div className="sb-sidenav-menu-heading">Addons</div>
              <Link className="nav-link" to="/charts">
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                Charts
              </Link>
              <Link className="nav-link" to="/tables">
                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                Tables
              </Link>
            </div>
          </div>

          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>

      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Khasi Mansa</li>
            </ol>

            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                  <div className="card-body">Total Sale</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <a className="small text-white stretched-link" href="#">View Details</a>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card bg-warning text-white mb-4">
                  <div className="card-body">This month Sale</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <a className="small text-white stretched-link" href="#">View Details</a>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                  <div className="card-body">Success Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <a className="small text-white stretched-link" href="#">View Details</a>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card bg-danger text-white mb-4">
                  <div className="card-body">Danger Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <a className="small text-white stretched-link" href="#">View Details</a>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    Area Chart Example
                  </div>
                  <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-bar me-1"></i>
                    Bar Chart Example
                  </div>
                  <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1"></i>
                DataTable Example
              </div>
            </div>
          </div>
        </main>

        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright &copy; Your Website 2023</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      

{/* Full Upload Modal */}
<div className="modal fade" id="uploadDataModal" tabIndex="-1" aria-labelledby="uploadDataModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content border-0 shadow">
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title" id="uploadDataModalLabel">📦 Add New Product Dataset</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form id="uploadForm">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
            <input type="text" className="form-control" placeholder="e.g., chicken lolipop" name="name" />
        </div>

         {/* Category */}
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select className="form-select" value={category} onChange={handleCategoryChange} required>
                  <option value="">Select Category</option>
                  {Object.keys(categoryMap).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Subcategories */}
              <div className="mb-3">
                <label className="form-label">Subcategory</label>
                <select
                  className="form-select"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  disabled={!subcategories.length}
                  required
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <input type="number" className="form-control" placeholder="e.g., 120" name="price" />
          </div>

          {/* Discount */}
          <div className="mb-3">
            <label className="form-label">Discount (%)</label>
            <input type="number" className="form-control" placeholder="e.g., 10" name="discount" />
          </div>

          {/* Unit */}
          <div className="mb-3">
            <label className="form-label">Unit</label>
            <select className="form-select" name="unit">
              <option value="">Select Unit</option>
              <option value="kg">Kilogram</option>
              <option value="gram">Gram</option>
              <option value="litre">Litre</option>
              <option value="ml">Millilitre</option>
              <option value="piece">Piece</option>
            </select>
          </div>
          {/* Short Description */}
<div className="mb-3">
  <label className="form-label">Short Description</label>
  <input
    type="text"
    className="form-control"
    name="shortDescription"
    placeholder="Enter a brief summary..."
    maxLength={100} // Optional limit
  />
</div>

{/* Long Description */}
<div className="mb-3">
  <label className="form-label">Long Description</label>
  <textarea
    className="form-control"
    name="longDescription"
    rows="4"
    placeholder="Enter detailed product information..."
  ></textarea>
</div>


          {/* Image Upload */}
          
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input type="file" className="form-control" accept="image/*" name="image" />
            <small className="form-text text-muted">Upload product image (JPG, PNG).</small>
          </div>
        </form>
      </div>

      <div className="modal-footer justify-content-between">
        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleProductSubmit}
        >
          <i className="bi bi-check-circle me-1"></i> Submit
        </button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default IndexPage;
