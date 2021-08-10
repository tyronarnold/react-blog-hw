import { Link } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react';


const Details = ({ index, id, title, url, imageUrl, summary }) => {

    console.log(index)
    return (
        <div>
            Hello
            ${index}
        </div>
    )
}

export default Details
