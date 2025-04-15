const express = require('express');
const router = express.Router();

// Services overview
router.get('/', (req, res) => {
  res.render('services', { 
    title: 'Our Services',
    services: [
      {
        name: 'Eco-Groom',
        description: 'Our eco-friendly detailing process uses biodegradable products and minimal water for an environmentally conscious clean.',
        fullDescription: 'Our specialized Eco-Groom service combines the latest eco-friendly cleaning technologies with biodegradable products. We minimize water usage while ensuring your vehicle looks immaculate. This comprehensive service includes exterior wash, eco-wax, tire shine, interior vacuum and eco-friendly surface cleaning.',
        image: '/images/eco-groom.jpg',
        price: 'From $XXX'
      },
      {
        name: 'Eco-Coat',
        description: 'Our specialized protective coating enhances your car\'s paint while being environmentally friendly and long-lasting.',
        fullDescription: "Protect your vehicle with our specialized eco-friendly coating that creates a durable shield against environmental contaminants. Our Eco-Coat is free from harmful chemicals, provides UV protection, and enhances your paint's natural shine. The coating requires less frequent washing, conserving water in the long run.",
        image: '/images/eco-coat.jpg',
        price: 'From $XXX'
      },
      {
        name: 'Eco-Posh',
        description: 'Premium eco-friendly car care service combining our finest detailing products for a complete rejuvenating finish.',
        fullDescription: 'Our premium Eco-Posh service is the ultimate sustainable detailing experience. This comprehensive package includes our Eco-Groom service, followed by clay bar treatment, machine polishing with eco-friendly compounds, and finished with our highest grade Eco-Coat. Interior receives deep cleaning with steam, natural fabric protection, and environmentally safe treatment for all surfaces.',
        image: '/images/eco-posh.jpg',
        price: 'From $XXX'
      }
    ]
  });
});

// Individual service pages
router.get('/:service', (req, res) => {
  // You could look up the service from a database in a real application
  const services = {
    'eco-groom': {
      name: 'Eco-Groom',
      description: 'Our eco-friendly detailing process uses biodegradable products and minimal water for an environmentally conscious clean.',
      fullDescription: 'Our specialized Eco-Groom service combines the latest eco-friendly cleaning technologies with biodegradable products. We minimize water usage while ensuring your vehicle looks immaculate. This comprehensive service includes exterior wash, eco-wax, tire shine, interior vacuum and eco-friendly surface cleaning.',
      image: '/images/eco-groom.jpg',
      price: 'From $XXX'
    },
    'eco-coat': {
      name: 'Eco-Coat',
      description: 'Our specialized protective coating enhances your car\'s paint while being environmentally friendly and long-lasting.',
      fullDescription: "Protect your vehicle with our specialized eco-friendly coating that creates a durable shield against environmental contaminants. Our Eco-Coat is free from harmful chemicals, provides UV protection, and enhances your paint's natural shine. The coating requires less frequent washing, conserving water in the long run.",
      image: '/images/eco-coat.jpg',
      price: 'From $XXX'
    },
    'eco-posh': {
      name: 'Eco-Posh',
      description: 'Premium eco-friendly car care service combining our finest detailing products for a complete rejuvenating finish.',
      fullDescription: 'Our premium Eco-Posh service is the ultimate sustainable detailing experience. This comprehensive package includes our Eco-Groom service, followed by clay bar treatment, machine polishing with eco-friendly compounds, and finished with our highest grade Eco-Coat. Interior receives deep cleaning with steam, natural fabric protection, and environmentally safe treatment for all surfaces.',
      image: '/images/eco-posh.jpg',
      price: 'From $XXX'
    }
  };
  
  const service = services[req.params.service];
  
  if (service) {
    res.render('service-detail', { 
      title: service.name,
      service: service
    });
  } else {
    res.redirect('/services');
  }
});

module.exports = router;