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
        const SECRET_KEY = '5952E9CD239391177679E2E20F3EDCF14282B693FEF174B7CBE6C98D443D34E4';
        const BOOKNAME = this.state.value;
        try {
            if(BOOKNAME==="") {
                this.setState({movies:[], isLoading:false})
            }
            else {
                const res = await axios.get('/api/search.api?key='+SECRET_KEY+'&query='+BOOKNAME+'&maxResults=10&output=json')
                console.log(res)
                console.log(BOOKNAME)
                console.log(res.data.item)
                this.setState({books:res.data.item, isLoading: false});
            }
        } catch(error) {
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
                    
                    <div className="movies"> {
                        books.map((book) => (
                            <BookItem key={book.link} id={book.link} 
                            title={book.title} rating={book.author}
                            year={book.pubDate}
                            poster={book.coverLargeUrl}
                            director={book.publisher}
                            pubdate={book.pubDate} actor={book.description} 
                            />
                        ))
                    }
                    </div>
                </div>
                </form>)
            }
            </section>);
        }
    }

export default BookSearch;