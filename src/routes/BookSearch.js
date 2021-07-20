import React from 'react';
import axios from 'axios';
import BookItem from '../components/BookItem';
import "./Home.css";
import "./BookSearch.css";

class BookSearch extends React.Component {
    state = {
        isLoading: true,
        books: [],
        value: ""
    };

    getSearchBook = async () => {
        const ID_KEY = 'PoKPGNn3tXFlo5EpAPri';
        const SECRET_KEY = '8j_Igdim0w';
        const search = this.state.value;
        
        try {
            if (search === "") {
                this.setState({books: [], isLoading: false})
            }
            else {
                const {data: 
                {
                    items }} = await axios.get('/v1/search/book.json', {
                        params:{
                            query: search,
                            display: 20
                        },
                                
                        headers: {
                            'X-Naver-Client-Id': ID_KEY,
                            'X-Naver-Client-Secret': SECRET_KEY
                        }
                });
                    
                this.setState({books: items, isLoading: false});
            }
        }
        catch (error) {
            console.log(error);
        }
    };
            
    componentDidMount() {
        this.getSearchBook();
    };
            
    handleChange = (e : any) => {
        this.setState({value: e.target.value});
    };
            
    handleSubmit = (e : any) => {
        e.preventDefault(); 
        this.getSearchBook();
    };
            
    render() {
        const {books, isLoading} = this.state;
                
        return (
            <section className="container"> {
                isLoading ?
                (<div className="loader">
                <span className="loader__text">Loading...</span>
                </div>)
                :
                (<form onSubmit={this.handleSubmit}>
                <div>
                    <div className="input_div">
                        <h1>Book Search</h1>
                        <input className="input_search" type="text" value={this.state.value}
                        onChange={this.handleChange} placeholder="Input Book Title."/>
                    </div>
                    
                    <div className="books"> {
                        books.map(book => (
                            <BookItem key={book.link} id={book.link} title={book.title}
                                image={book.image} author={book.author} publisher={book.publisher}
                                pubdate={book.pubdate} description={book.description}
                        />))
                    }
                    </div>
                </div>
                </form>)
            }
            </section>);
        }
    }

export default BookSearch;