import React from "react"

const products = [
  {
    id:1,
    name:"Black Abaya",
    price:70,
    image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80"
  },
  {
    id:2,
    name:"Running Shoes",
    price:120,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
  },
  {
    id:3,
    name:"Hand Bag",
    price:90,
    image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=400&q=80"
  }
]

function Home({ addToCart }) {
  return (
    <section className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </section>
  )
}

export default Home