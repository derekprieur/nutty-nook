import mongoose from 'mongoose';
import Product from './models/Product.js';
import dotenv from 'dotenv';

dotenv.config();

const products = [
    {
        id: 1,
        type: 'almonds',
        name: 'Almonds',
        price: 12.99,
        images: ['/almonds.jpg', '/almonds2.jpg', '/almonds3.jpg'],
        rating: 5,
        reviews: [
            {
                rating: 5,
                name: 'Nutty McSquirrelface',
                date: '2023-01-15',
                comment: 'These almonds are the best! Highly recommended for all squirrels.',
            },
        ],
    },
    {
        id: 2,
        type: 'walnuts',
        name: 'Walnuts',
        price: 10.99,
        images: ['/walnuts.jpg',],
        rating: 5,
        reviews: [
            {
                rating: 5,
                name: 'Chewy Oaktail',
                date: '2023-01-20',
                comment: 'Absolutely love these walnuts! Perfect for my squirrel family.',
            },
        ],
    },
    {
        id: 3,
        type: 'pecans',
        name: 'Pecans',
        price: 14.99,
        images: ['/pecans.jpg',],
        rating: 4.5,
        reviews: [
            {
                rating: 4.5,
                name: 'Fluffy Nutwhisker',
                date: '2023-02-05',
                comment: 'These pecans are delicious! My squirrel friends and I approve.',
            },
        ],
    },
    {
        id: 4,
        type: 'hazelnuts',
        name: 'Hazelnuts',
        price: 13.49,
        images: ['/hazelnuts.jpg',],
        rating: 4.5,
        reviews: [
            {
                rating: 4.5,
                name: 'Bushy Acornpaws',
                date: '2023-02-18',
                comment: 'Hazelnuts are amazing! Great quality and taste.',
            },
        ],
    },
    {
        id: 5,
        type: 'pistachios',
        name: 'Pistachios',
        price: 16.99,
        images: ['/pistachios.jpg',],
        rating: 4,
        reviews: [
            {
                rating: 4,
                name: 'Twiggy Pinefur',
                date: '2023-03-01',
                comment: 'Pistachios are tasty and make a great snack for us squirrels.',
            },
        ],
    },
    {
        id: 6,
        type: 'cashews',
        name: 'Cashews',
        price: 15.99,
        images: ['/cashews.jpg', '/cashews2.jpg', '/cashews3.jpg'],
        rating: 5,
        reviews: [
            {
                rating: 5,
                name: 'Whiskers Nutmuncher',
                date: '2023-03-10',
                comment: "Cashews are incredible! My fellow squirrels and I can't get enough.",
            },
        ],
    },
    {
        id: 7,
        type: 'macadamia',
        name: 'Macadamia Nuts',
        price: 22.99,
        images: ['/macadamia.jpg',],
        rating: 4,
        reviews: [
            {
                rating: 4,
                name: 'Nutter Butterclaws',
                date: '2023-03-15',
                comment: 'Macadamia nuts are pretty good. A bit pricey, but us squirrel folk enjoy them from time to time.',
            },
        ],
    },
    {
        id: 8,
        type: 'brazil_nuts',
        name: 'Brazil Nuts',
        price: 17.99,
        images: ['/brazil_nuts.jpg', '/brazil_nuts2.jpg', '/brazil_nuts3.jpg'],
        rating: 4.5,
        reviews: [
            {
                rating: 4.5,
                name: 'Scratchy Barkjumper',
                date: '2023-03-25',
                comment: 'Brazil nuts are awesome! Great source of nutrients for us squirrels.'
            }
        ]
    },
    {
        id: 9,
        type: 'pine_nuts',
        name: 'Pine Nuts',
        price: 21.99,
        images: ['/pine_nuts.jpg',],
        rating: 4.5,
        reviews: [
            {
                rating: 4.5,
                name: 'Furry Nutkins',
                date: '2023-04-02',
                comment: 'Pine nuts are fantastic! Highly recommended for every squirrel.',
            },
        ],
    },
    {
        id: 10,
        type: 'peanuts',
        name: 'Peanuts',
        price: 6.99,
        images: ['/peanuts.jpg',],
        rating: 4,
        reviews: [
            {
                rating: 4,
                name: 'Buddy Treetop',
                date: '2023-04-15',
                comment: 'Peanuts are always a classic favorite for us squirrels. Yum!',
            },
        ],
    },
    {
        id: 11,
        type: 'mixed_nuts',
        name: 'Mixed Nuts',
        price: 19.99,
        images: ['/mixed_nuts.jpg',],
        rating: 4.5,
        reviews: [
            {
                rating: 4.5,
                name: 'Squeaky Nutgatherer',
                date: '2023-04-20',
                comment: "Mixed nuts are perfect for when you can't decide which nut to eat.Squirrel approved!",
            },
        ],

    },
    {
        id: 12,
        type: 'sunflower_seeds',
        name: 'Sunflower Seeds',
        price: 5.99,
        images: ['/sunflower_seeds.jpg',],
        rating: 4.5,
        reviews: [
            {
                rating: 4.5,
                name: 'Jumpy Branchhopper',
                date: '2023-02-10',
                comment: 'Sunflower seeds are my favorite! Love the taste and quality.',
            },
        ],
    },
];


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        return Product.deleteMany({});
    })
    .then(() => {
        console.log('Deleted all existing products');
        return Product.insertMany(products);
    })
    .then(() => {
        console.log('Inserted new products');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error seeding products:', error);
    });
