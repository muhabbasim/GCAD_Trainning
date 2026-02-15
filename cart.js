let cart = [
  {
    id: 1,
    name: "iPhone 11 128GB Black",
    price: 1219,
    quantity: 3,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "iPhone 11 Silicone Case - Black",
    price: 59,
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
];



const cartItemsContainer = document.getElementById("cart-items");

function renderCart() {
  cartItemsContainer.innerHTML = ""

  cart.forEach(item => {
    const div = document.createElement('div')
    div.className = 'cart-item'

    div.innerHTML = `
     <div class="item-left">
          <img src="${item.image}" />
          <div>
              <div class="item-name">${item.name} ($${item.price})</div>
          </div>
      </div>
      <div class="quantity">
          <button onclick="decrease(${item.id})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increase(${item.id})">+</button>
      </div>
      <div class="price">$${item.price * item.quantity}</div>
      <div class="remove" onclick="removeItem(${item.id})">✕</div>
    `;

    cartItemsContainer.appendChild(div)
  })
  updateSummary()
}


function increase(id) {
  const item = cart.find(p => p.id === id)
  item.quantity++
  renderCart()
}

function decrease(id) {
  const item = cart.find(p => p.id === id)
  if( item.quantity > 1) {
    item.quantity--
  }
  renderCart()
}

function removeItem(id) {
  // const index = cart.findIndex((p,i) => p.id === id)
  // cart.splice(index, 1)

  cart = cart.filter((p) => p.id !== id)
  renderCart()  
}

function updateSummary() {
  const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subTotal * 0.15;
  const total = subTotal + tax;

  document.getElementById('subtotal').innerText = "$" + subTotal.toFixed(2)
  document.getElementById('tax').innerText = "$" + tax.toFixed(2)
  document.getElementById('total').innerText = "$" + total.toFixed(2)
}


renderCart()