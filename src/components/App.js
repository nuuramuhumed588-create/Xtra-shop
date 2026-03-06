import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* Header */}
      <header className="header">
        <h1>FreshMart</h1>
        <input type="text" placeholder="Search Product..." />
        <span className="cart">0</span>
      </header>

      {/* Categories */}
      <section className="section">
        <h2>Shop by Category</h2>

        <div className="card">Fresh Fruits - 12 Products</div>
        <div className="card">Vegetables - 18 Products</div>
        <div className="card">Dairy Products - 8 Products</div>
        <div className="card">Bakery - 10 Products</div>
        <div className="card">Snacks - 20 Products</div>
      </section>

      {/* Products */}
      <section className="section">
        <h2>Fruits & Vegetable</h2>

        <div className="card">Dried Mango - $500</div>
        <div className="card">Crunchy Crisps - $300</div>
        <div className="card">Jewel Cranberries - $200</div>
        <div className="card">Almond Organic - $100</div>
      </section>

      {/* Breakfast */}
      <section className="section">
        <h2>Breakfast & Dairy</h2>

        <div className="card">Fresh Milk - $400</div>
        <div className="card">Brown Bread - $300</div>
        <div className="card">Organic Eggs - $200</div>
        <div className="card">Butter Croissant - $150</div>
      </section>

      {/* Blog */}
      <section className="section">
        <h2>Latest Blogs</h2>

        <div className="card">Learn React Easily</div>
        <div className="card">Understanding TypeScript</div>
        <div className="card">Tailwind CSS Guide</div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>FreshMart</h3>
        <p>Fresh groceries delivered to your door</p>
        <p>© 2026 FreshMart</p>
      </footer>

    </div>
  );
}

export default App;