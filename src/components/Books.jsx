import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style/Books.css';
function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    fetch('https://seussology.info/api/books')
      .then(response => {
        console.log('API Response Status:', response.status); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Books data:', data); 
        setBooks(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching books:', error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Loading books...</p>; 
  }

  return (
    <div>
      <h1 className="text-center mb-4">Books</h1>
      <div className="container">
        <div className="row">
          {books.length > 0 ? (
            books.map(book => (
              <div className="col-md-4 mb-4" key={book.id}>
                <Link to={`/book/${book.id}`} className="card text-center shadow-lg hover-shadow">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top rounded-3"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                      {book.title}
                    </h5>
                    <p className="card-text text-muted">{book.year_published}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No books available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
