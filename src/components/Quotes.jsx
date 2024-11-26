import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Seuss Quotes</h1>
      <div className="row">
        {loading ? (
          <div className="col-12 text-center">
            <p>Loading...</p>
          </div>
        ) : quotes.length > 0 ? (
          quotes.map((quote, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-lg border-light rounded">
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-center">
                    <i>"{quote.text}"</i>
                  </p>
                  <footer className="blockquote-footer text-right mt-auto">
                    {quote.author || 'Unknown Author'}
                  </footer>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No quotes available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quotes;
