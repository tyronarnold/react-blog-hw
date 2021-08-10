import { Link } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react';
import Details from './Details';

const Article = ({ index, id, title, url, imageUrl, summary }) => {

    // console.log(index)
    return (
        <Details
            index={index}
            id={id}
            title={title}
            url={url}
            imageUrl={imageUrl}
            summary={summary}
        />
    )
}

export default Article
