let container = document.getElementById("product_cart")

let cart = JSON.parse(localStorage.getItem("paytm_cart"))

console.log(cart);
showdata(cart);

    function showdata(product) {
        parent.innerHTML = null

        product.forEach(function(product) {

            let div = document.createElement('div')
            // div.style.border = "1px solid black"
             let div1 = document.createElement('p')
             let div2 = document.createElement('p');

            let img = document.createElement('img')
             img.src = product.img1
             img.style.width = "100px"
             img.style.height = "160px"
             img.style.margin = "10px"

           let Name = document.createElement('p')
           Name.innerText = product.name


          let price1 = document.createElement('p')
          price1.innerText = "Offering Price:- " + " " + product.price1

          let price2 = document.createElement('p')
          price2.innerText = "Original Price:- "+ " " + product.price2

          let ram = document.createElement('p')
          ram.innerText = "RAM"+ " " + product.ram

          let hurray = document.createElement('p')
          hurray.innerHTML = "Hurry! Only 8 left!";
          hurray.style.color = "red";

          let save = document.createElement('p')
          save.innerHTML = "You saved ₹300!"
          save.style.color = "green"

            div2.append(img);
            div1.append(Name, price1,price2, ram,hurray);
            div.append(div1, div2)
            container.append(div);

        });

  var num = document.createElement("h4");
  num.textContent = "My Bag" + " " + cart.length + " " + "items";

  let added  = document.getElementById("add");
  added.append(num);

  var total = 0;
  let total_pr =JSON.parse(localStorage.getItem("paytm_cart"));

  total_pr.forEach(function(total_pr){
      total= total + +total_pr.price1;
      totalfinal = " " + "₹"+ total;


  });
  add_qun.append(totalfinal);
  add_qun1.append(totalfinal);

  console.log(totalfinal);

}
let arr = totalfinal;
localStorage.setItem("totalfinal", JSON.stringify(arr));


function chechout() {
  window.location.assign("checkout.html");
}

