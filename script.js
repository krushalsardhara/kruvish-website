const data = {
  "products": [
    {
      "name": "Elegant Gold Ring",
      "description": "A timeless design with a solitaire diamond centerpiece.",
      "price": 799,
      "image": "https://via.placeholder.com/250x250?text=Gold+Ring"
    },
    {
      "name": "Floral Diamond Pendant",
      "description": "Inspired by nature, crafted with love and precision.",
      "price": 1099,
      "image": "https://via.placeholder.com/250x250?text=Pendant"
    },
    {
      "name": "Royal Bangles Set",
      "description": "Intricately crafted bangles to complement every outfit.",
      "price": 1299,
      "image": "https://via.placeholder.com/250x250?text=Bangles"
    },
    {
      "name": "Minimalist Stud Earrings",
      "description": "Subtle sparkle for your everyday elegance.",
      "price": 599,
      "image": "https://via.placeholder.com/250x250?text=Earrings"
    }
  ]
};

const container = document.getElementById('product-list');
data.products.forEach(product => {
  container.innerHTML += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>₹${product.price}</strong>
    </div>
  `;
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! We will contact you soon.');
  this.reset();
});
