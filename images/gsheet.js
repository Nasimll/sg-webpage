const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    service: form.service.value,
    message: form.message.value,
    privacy: form.privacy.checked ? "Agreed" : "Not Agreed"
  };

  fetch('https://script.google.com/macros/s/AKfycbzG8AFxwuLz1hpTlT_k__4XvVnYyz2gbuLFzvX4hc7SsQfx7HJ5c2XpHDNG6_Ib0tOaIg/exec', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.text())
  .then(data => {
    alert('Спасибо! Ваша заявка отправлена.');
    form.reset();
  })
  .catch(error => {
    console.error('Ошибка!', error.message);
    alert('Ошибка отправки. Попробуйте еще раз.');
  });
});
