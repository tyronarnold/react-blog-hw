// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// function Shop() {
class Item extends React.Component {

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

    fetchUsers = () => {
        fetch('https://fortnite-api.com/v2/shop/br')
            .then((response) => response.json())
            .then((items) => {
                // setItems(items.data.specialFeatured.entries);
                this.setState({
                    items: items.data.specialFeatured.entries,
                })
            })
    }

    // console.log(items)

    render() {
        const { items } = this.state;

        return (
            <div >
                <h1>Item</h1>
            </div >
        );
    }
}
export default Item;
