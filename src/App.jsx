import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import Quotes from './components/Quotes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
  
    setTimeout(() => setLoading(false), 2000); 

  }, []);

  return (
    <Router>
      {!loading && <Navbar />}
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
