function navbar() {
    return ` 
    <div id= "navbar">
    <div id="navbar_1">
    <img id="navbar_logo" src="https://paytmmall.com/massets/paytmmall-logo.jpg" alt="">
   </div>

   <div id="navbar_a">
       <div>
           <button id="navbar_left">☰ Shop By Category</button>
       </div>
       <div id="search_box">
           <input id="navbar_input" type="text" placeholder="search by product brands and categries" >
           <div> <button id="search_button"; type="submit"><i class="fa fa-search"></i></button></div>
       </div>
       <div id="nabvar_right">
           <div id="cart_logo2">
               <img id="cart_logo" src="https://cdn-icons.flaticon.com/png/512/2618/premium/2618267.png?token=exp=1642564688~hmac=2b895175e79162a317f950498831af13" alt="">
               <p id="order">My orders</p>
           </div>
           <div id="cart_logo2">
               <img id="cart_logo1" src="data:image/jpeg;base64,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" alt="">
               <p id="cart_logo3">Cart</p>
           </div>
           <div id="cart_logo2">
           <img id="cart_logo4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJt13zsYYjKk8ZsOiWrzIjHAVdh7-u4FMEtg&usqp=CAU" alt="">
               <p id="cart_logo5">Log In/Sign Up</p>
           </div>
       </div>

   </div>
   </div>`
}



export default navbar
