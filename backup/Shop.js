// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// function Shop() {
class Shop extends React.Component {

    //     useEffect(() => {
    //         // fetchItems();
    //         fetchUsers();
    //     }, []);

    state = {
        items: [],
    };

    componentDidMount() {
        // fetchItems();
        this.fetchUsers();
    }

    // const fetchItems = async () => {
    //     const data = await fetch('https://fortnite-api.com/v2/shop/br');
    //     const items = await data.json();
    //     console.log(items.data.specialFeatured.entries[0].bundle.image)
    //     setItems(items.data.specialFeatured.entries);
    // }

    loadOn() {
        var spinner = document.querySelector('.loader');
        spinner.classList.add('spin');
    }

    loadOff() {
        var spinner = document.querySelector('.loader');
        spinner.classList.remove('spin');
        spinner.classList.add('loader-off');
    }

    fetchUsers = () => {
        this.loadOn();
        fetch('https://fortnite-api.com/v2/shop/br/combined')
            .then((response) => response.json())
            .then((items) => {
                // setItems(items.data.specialFeatured.entries);
                this.setState({
                    items: items.data.specialFeatured.entries,
                })
                this.loadOff();
            })
    }

    // console.log(items)

    render() {
        const { items } = this.state;

        return (
            <div >
                <h1>Shop Page</h1>
                <div className="loader" ></div>
                {
                    items.map((item) => {
                        const { bundle, offerId, section, regularPrice } = item;
                        console.log(item)

                        if (bundle) {
                            return (
                                <div className='items shop-items' key={offerId}>
                                    <Link to={`/shop${':cool'}`}>
                                        <img className='shop-img' src={bundle.image} alt='FortNiteImage'></img>
                                    </Link>
                                    <h2 >{section.name}</h2>
                                    <h3>Regular Price {regularPrice}</h3>
                                </div>
                            );
                        }
                        else {
                            return (
                                <h3 key={offerId}>
                                </h3>
                            );

                        }
                    })
                }
            </div >
        );
    }
}
export default Shop;
