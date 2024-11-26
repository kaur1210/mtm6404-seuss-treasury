import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Style/BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Book details:', data);
        setBook(data);
      })
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <div className="book-header">
        <div className="book-image">
          <img
            src={book.image}
            alt={book.title}
            className="img-fluid rounded-3"
          />
        </div>
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author text-muted">{book.author}</p>
          <p className="book-description">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
