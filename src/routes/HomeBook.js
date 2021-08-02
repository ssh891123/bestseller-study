import React from 'react';
import axios from 'axios';
import BookItem from '../components/BookItem';
import "./Home.css";

class HomeBook extends React.Component {
  state = {
    isLoading: true,
    books: []
  };

  //http://book.interpark.com/blog/basicInfoManageTotalForm.rdo
  //https://www.youtube.com/watch?v=1O496C-79Pg
  getBestSeller = async () => {
    const SECRET_KEY = 'SECRET_KEY';
    const res = await axios.get(
      '/api/bestSeller.api?key='+SECRET_KEY+'&categoryId=101&output=json'
    )
    console.log(res.data.item)
    this.setState({books:res.data.item, isLoading: false})
  };

  componentDidMount() {
    this.getBestSeller();
  }

  render() {
    const {isLoading, books} = this.state;

    return (<section className="container">
    {
      isLoading ? 
        (<div className="loader">
          <span className="loader__text">Loading..</span>
        </div>)
        : (<div><h1>Best Seller</h1>
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
        </div></div>)
    }
    </section>);
  }
}

export default HomeBook;