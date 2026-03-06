function Navbar({cartCount}) {

return(

<div className="navbar">

<h2>XtraShop</h2>

<ul>
<li>Home</li>
<li>Products</li>
<li>Contact</li>
</ul>

<p>Cart: {cartCount}</p>

</div>

)

}

export default Navbar