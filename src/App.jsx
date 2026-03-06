import React, { useState, useEffect } from "react";

function App() {
  // Products array with category and multiple images
  const products = [
    {
      id:1, name:"Designer Bag", price:90, category:"Bag",
      images:["https://tiimg.tistatic.com/fp/1/009/273/ladies-designer-bags-448.jpg"]
    },
    
   
    {
      id:4, name:"T-Shirt", price:70, category:"Clothes",
      images:["https://images.unsplash.com/photo-1523381210434-271e8be1f52b"]
    },
    
    {
      id:6, name:"Lipstick", price:35, category:"Makeup",
      images:["https://images.unsplash.com/photo-1586495777744-4413f21062fa"]
    },
    {
      id:7, name:"Luxury Perfume", price:110, category:"Perfume",
      images:["https://images.unsplash.com/photo-1594035910387-fea47794261f"]
    }
  ];

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Load cart from localStorage
  useEffect(()=>{
    const storedCart = localStorage.getItem("cart");
    if(storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Save cart to localStorage
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product)=>{
    setCart([...cart, product]);
  };

  const removeFromCart = (index)=>{
    setCart(cart.filter((_,i)=> i!==index));
  };

  const total = cart.reduce((sum,item)=> sum + item.price,0);

  const filteredProducts = products
    .filter(p=> filter==="All" || p.category===filter)
    .filter(p=> p.name.toLowerCase().includes(search.toLowerCase()));

  const categories = ["All","Bag","Shoes","Clothes","Makeup","Perfume"];

  return (
    <div style={{fontFamily:"Arial"}}>
      {/* Header */}
      <header style={header}>
        <h2>XtraShop</h2>
        <nav>
          <button style={navBtn} onClick={()=>setPage("home")}>Home</button>
          <button style={navBtn} onClick={()=>setPage("products")}>Products</button>
          <button style={navBtn} onClick={()=>setPage("cart")}>Cart ({cart.length})</button>
          <button style={navBtn} onClick={()=>setPage("contact")}>Contact</button>
        </nav>
      </header>

      {/* Home */}
      {page==="home" && (
        <div style={section}>
          <h1>Welcome to XtraShop</h1>
          <p>Best online shop for Bags, Shoes, Clothes, Makeup, and Perfume.</p>
        </div>
      )}

      {/* Products */}
      {page==="products" && (
        <div style={section}>
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            style={searchBox}
          />

          {/* Category Filters */}
          <div style={{margin:"10px 0"}}>
            {categories.map(cat=>(
              <button key={cat} style={filterBtn} onClick={()=>setFilter(cat)}>{cat}</button>
            ))}
          </div>

          {/* Products Grid */}
          <div style={grid}>
            {filteredProducts.map(p=>(
              <div key={p.id} style={card}>
                <img src={p.images[0]} alt={p.name} style={image}/>
                <h3>{p.name}</h3>
                <p>{p.category}</p>
                <p>${p.price}</p>
                <button style={btn} onClick={()=>addToCart(p)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cart */}
      {page==="cart" && (
        <div style={section}>
          <h2>Your Cart ({cart.length})</h2>
          {cart.map((item,index)=>(
            <div key={index} style={cartItem}>
              <span>{item.name} - ${item.price}</span>
              <button style={removeBtn} onClick={()=>removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          {cart.length > 0 && <button style={checkoutBtn} onClick={()=>alert("Order placed successfully!")}>Checkout</button>}
        </div>
      )}

      {/* Contact */}
      {page==="contact" && (
        <div style={section}>
          <h2>Contact Us</h2>
          <p>Email: support@xtrashop.com</p>
          <p>Phone: +252 63 0000000</p>
          <p>Address: hargeisa ,somaliland</p>
        </div>
      )}
    </div>
  );
}

/* STYLES */
const header={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",background:"#27ae60",color:"white"};
const navBtn={background:"transparent",border:"none",color:"white",cursor:"pointer",margin:"0 5px",fontSize:"16px"};
const section={padding:"30px"};
const searchBox={padding:"10px",width:"300px",maxWidth:"100%",marginBottom:"20px"};
const filterBtn={padding:"6px 10px",margin:"0 5px",cursor:"pointer",borderRadius:"5px",border:"1px solid #27ae60",background:"white",color:"#27ae60"};
const grid={display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"};
const card={width:"200px",border:"1px solid rgb(184, 183, 183)",borderRadius:"10px",padding:"10px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"};
const image={width:"100%",height:"150px",objectFit:"cover",borderRadius:"8px"};
const btn={background:"#081c5f",color:"white",border:"none",padding:"8px 12px",borderRadius:"5px",cursor:"pointer"};
const cartItem={display:"flex",justifyContent:"space-between",border:"1px solid #ddd",padding:"10px",margin:"10px 0"};
const removeBtn={background:"red",color:"white",border:"none",padding:"5px 10px",cursor:"pointer"};
const checkoutBtn={background:"#27107a",color:"white",border:"none",padding:"10px 15px",borderRadius:"5px",cursor:"pointer",marginTop:"10px"};

export default App;