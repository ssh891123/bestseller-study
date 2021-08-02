import React, {useState, useEffect} from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser'

const SECRET_KEY = '5952E9CD239391177679E2E20F3EDCF14282B693FEF174B7CBE6C98D443D34E4';
//useEfferct: https://www.youtube.com/watch?v=1O496C-79Pg
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async() => {
            const res = await axios.get(
                '/api/bestSeller.api?key=5952E9CD239391177679E2E20F3EDCF14282B693FEF174B7CBE6C98D443D34E4&categoryId=101&output=json'
            )
            setBooks(res.data.item)
            console.log(res.data.item)
        }

        fetchBooks()
    }, [])

    return (
        <div>
            <h1>Books</h1>
            <section>
                {books.map((book) => {
                    const {link, title, author, 
                    coverSmallUrl, priceStandard, pubDate, publisher, description} = book

                    return (
                        <article key={link} href={link}>
                            <div>
                                <img src={coverSmallUrl} alt={title}/>
                            </div>

                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <p>{author}</p>
                            </div>
                            
                            <ul>
                                <li>Publisher: {publisher}</li>
                                <li>Public Date: {pubDate}</li>
                                <li>Price: {priceStandard}</li>
                            </ul>

                            

                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Books
