import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Article from './Article';

const Articles = ({ index, id, title, url, imageUrl, summary }) => {

    // console.log(title)
    return (
        <div>
            {/* <Link to={`/article/${url}`}>
                <h3>Hello</h3>
            </Link> */}
            <a href={url}>
                <p>Article {index + 1}</p>
            </a>
        </div>
    )
}

export default Articles
