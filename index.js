function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push({ name: name, price: price });

  localStorage.setItem('cart', JSON.stringify(cart));

  alert("Item added to cart!");
}
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let list = document.getElementById('cart-list');

  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);
  });
}

displayCart();

const user = {
  username: "admin",
  password: "1234"
};

function login() {
  let enteredUser = document.getElementById("username").value;
  let enteredPass = document.getElementById("password").value;

  if (enteredUser === user.username && enteredPass === user.password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
  } else {
    alert("Invalid credentials");
  }
}
if (localStorage.getItem("loggedIn") === "true") {
  console.log("User is logged in");
} else {
  console.log("User is NOT logged in");
}