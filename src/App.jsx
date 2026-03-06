import { useState } from "react"
import "./App.css"

const products = [
{
id:1,
name:"shirt",
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

function App(){

const [cart,setCart] = useState([])

const addToCart = (product)=>{
setCart([...cart,product])
}

const removeFromCart = (index)=>{
const newCart = cart.filter((item,i)=> i !== index)
setCart(newCart)
}

return(

<div>

<header className="navbar">

<h2>XtraShop</h2>

<ul>
<li>Home</li>
<li>Products</li>
<li>Contact</li>
</ul>



</header>

<section className="products">

{products.map((product)=>(
<div className="card" key={product.id}>

<img src={product.image} alt={product.name} />

<h3>{product.name}</h3>

<p>${product.price}</p>

<button onClick={()=>addToCart(product)}>
Add to Cart
</button>

</div>
))}

</section>
<h2 style={{paddingLeft:"40px"}}>Your Cart</h2>
<div className="cart">

{cart.map((item,index)=>(
<div className="cart-item" key={index}>

<img src={item.image} width="60"/>

<p>{item.name}</p>

<button onClick={()=>removeFromCart(index)}>
Remove
</button>

</div>
))}

</div>

</div>

)

}

export default App