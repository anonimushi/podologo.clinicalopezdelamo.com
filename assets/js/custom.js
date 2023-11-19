// Google Analytics Events

document.querySelectorAll('.contact__phone, .contact__whatsapp, .callnow > button').forEach(e => {
  e.addEventListener('click', () => {
    gtag('event', 'clic', {'event_category': 'llamar', 'event_label': 'podologia'})
  })
})