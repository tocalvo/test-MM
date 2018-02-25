'use strict';

const phonesMock = [
    {
        name:'IPhone X',
        description: 'Último modelo de apple, muy caro pero con lo último en tecnología!',
        color: 'negro',
        price: 1000,
        currency:'€',
        image: '200/200/city/'
    },
    {
        name:'Samsung S',
        description: 'Baratillo pero con lo suficiente para gente que solo usa whatsapp',
        color: 'blanco',
        price: 50,
        currency:'€',
        image: '200/200/food/'
    },
    {
        name:'Xiaomi',
        description: 'Gama media, pero con problemas de seguridad y privacidad',
        color: 'verde',
        price: 150,
        currency:'€',
        image: '200/200/cats/'
    }
]

exports.get = (req, res) => {
    res.status(200).json(phonesMock);
};