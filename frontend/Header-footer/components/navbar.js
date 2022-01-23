function navbar() {
    return ` 
    <div id= "navbar">
    <div id="navbar_1">
    <img id="navbar_logo" src="https://paytmmall.com/massets/paytmmall-logo.jpg" alt="">
   </div>

   <div id="navbar_a">
       <div>
           <button onclick="productMove()" id="navbar_left">☰ Shop By Category</button>
       </div>
       <div id="search_box">
           <input id="navbar_input" type="text" placeholder="search by product brands and categries" >
           <div> <button id="search_button"; type="submit"><i class="fa fa-search"></i></button></div>
       </div>
       <div id="nabvar_right">
           <div id="cart_logo2">
               <img id="cart_logo" src="https://cdn-icons.flaticon.com/png/512/2618/premium/2618267.png?token=exp=1642564688~hmac=2b895175e79162a317f950498831af13" alt="">
               <p id="order"><a href="/frontend/html/cart.html">My orders</a></p>
           </div>
           <div id="cart_logo2">
               <img id="cart_logo1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwdVLvMRdRaZxmJQi9OdckXZiuQlxogw3CA&usqp=CAU" alt="">
               <p id="cart_logo3"><a href="/frontend/html/cart.html">Cart</a></p>
           </div>
           <div id="cart_logo2">
           <img id="cart_logo4" src="http://cdn.onlinewebfonts.com/svg/img_337531.png">
               <p id="cart_logo5" ><a href="/frontend/html/signup.html">Log In/Sign Up</a></p>
           </div>
       </div>

   </div>
   </div>`
}



export default navbar
