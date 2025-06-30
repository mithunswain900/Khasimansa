import React from 'react';
import './HomePage.css';

const bestsellers = [
  {
    name: "Chicken Curry Cut - Small Pieces",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/af70e450-6a7d-456e-b4d4-e97bde3f7f59/original/Chicken_Curry_Cut_Small_Pieces_Hero_Shot.jpg",
    weight: "500 g",
    price: 160,
    actualPrice: 193,
    offer: "17% off",
    delivery: "Today in 30 mins"
  },
  {
    name: "Chicken Breast - Boneless",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/552a659e-1431-0ef3-0479-c0fd5c1270a4/original/Chicken_Breast_Boneless_Hero_Shot.jpg",
    weight: "450 g",
    price: 252,
    actualPrice: 311,
    offer: "19% off",
    delivery: "Today in 30 mins"
  }
];

const categories = [
  { name: 'Chicken', img: 'https://www.licious.in/img/default/category-chicken.png' },
  { name: 'Fish & Seafood', img: 'https://www.licious.in/img/default/category-fish.png' },
  { name: 'Eggs', img: 'https://www.licious.in/img/default/category-eggs.png' },
  { name: 'Ready to Cook', img: 'https://www.licious.in/img/default/category-readytocook.png' },
  // Add more as needed
];

function HomePage() {
  return (
    <div className="home-page">
      <header className="navbar">
        <div className="logo">Khasimansa 🍖</div>
        <div className="location">📍 Bhubaneswar</div>
        <input type="text" placeholder="Search for any delicious product" />
        <div className="nav-icons">
          <span>📦 Categories</span>
          <span>🏪 Stores</span>
          <span>👤 Login</span>
          <span>🛒 Cart</span>
        </div>
      </header>

      <div className="banner">
        <img src="https://www.licious.in/img/default/banner.jpg" alt="Offer Banner" />
      </div>

      <section className="section">
        <h2>Bestsellers</h2>
        <p>Most popular products near you!</p>
        <div className="product-grid">
          {bestsellers.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.weight}</p>
              <p>
                ₹{item.price}{' '}
                <span className="strike">₹{item.actualPrice}</span>{' '}
                <span className="offer">{item.offer}</span>
              </p>
              <p className="delivery">{item.delivery}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Shop by categories</h2>
        <p>Freshest meats and much more!</p>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-block">
          <h3>We will sell only the meat that we would eat ourselves.</h3>
          <p>Every single product is handpicked by a team with years of experience.</p>
        </div>
        <div className="info-block">
          <h3>If it’s not fresh, we won’t sell it</h3>
          <p>We maintain chill temperature from procurement to delivery.</p>
        </div>
        <div className="info-block">
          <h3>We will charge only for what you buy</h3>
          <p>No tricks. You pay for what you get. Fair & square.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Khasimansa Meats | All rights reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
