document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!type || !name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // You could replace this with an email API integration
    alert(`Thank you, ${name}! Your order inquiry for ${type} T-shirts has been received.`);
    document.getElementById('orderForm').reset();
  });
  