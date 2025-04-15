const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Sustainable Car Detailing',
    services: [
      {
        name: 'Eco-Groom',
        description: 'Our eco-friendly detailing process uses biodegradable products and minimal water for an environmentally conscious clean.',
        image: '/images/eco-groom.jpg'
      },
      {
        name: 'Eco-Coat',
        description: 'Our specialized protective coating enhances your car\'s paint while being environmentally friendly and long-lasting.',
        image: '/images/eco-coat.jpg'
      },
      {
        name: 'Eco-Posh',
        description: 'Premium eco-friendly car care service combining our finest detailing products for a complete rejuvenating finish.',
        image: '/images/eco-posh.jpg'
      }
    ],
    faqs: [
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    ]
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Bookings page
router.get('/bookings', (req, res) => {
  res.render('booking', { title: 'Book an Appointment' });
});

module.exports = router;