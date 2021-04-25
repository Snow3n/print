import React, { useState, useEffect } from 'react';
import '../App.css';
import api from '../api';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

export function Cups() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function load() {
            await api.getAllProducts().then(products => {
                setProducts(products.data.filter(product => (product.type === 'cup')))
            })
        }
        load();
    }, [])

    const handleBuy = (product) => {
        if (localStorage.getItem('podarok-print-en')) {
            let stored = JSON.parse(localStorage.getItem('podarok-print-en'));
            console.log(stored);
            stored.cart.cartItems.push({ "_id": `${product._id}`, "type": `${product.type}`, "name": `${product.name}`, "picture": `${product.picture}`, "quantity": 1, "price": `${product.price}` });
            localStorage.setItem('podarok-print-en', JSON.stringify(stored));
        }
        else {
            let string = { "cart": { "cartItems": [{ "_id": `${product._id}`, "type": `${product.type}`, "name": `${product.name}`, "picture": `${product.picture}`, "quantity": 1, "price": product.price }], "price": 0 } };
            localStorage.setItem('podarok-print-en', JSON.stringify(string));
            console.log(product)
            let test = JSON.parse(localStorage.getItem('podarok-print-en'));
            console.log(test.cart.cartItems);
        }
    }

    return (
        <div>
            <Grid container className="contentWrapper" spacing={1} style={{ 'width': '70%', margin: 'auto' }}>
                {products.map((product, i) => (
                    <Grid item key={i} className='contentBlock' style={{ margin: '10px 10px' }}>
                        <Paper className="paper">
                            <li><img src={'/imgs/' + product.picture + '.jpg'} alt={product.name + ' picture'} className="picture" /></li>
                            <li className="productName">{product.name}</li>
                            <li className="productPrice">{'₴' + product.price}</li>
                            <li className="productBuy"><Button variant="contained" onClick={() => { handleBuy(product) }}>Купить</Button></li>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cups;
