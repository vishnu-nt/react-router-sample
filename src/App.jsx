import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';
import AppBar from './components/Appbar';
import AppLoader from './components/AppLoader';
import { groupByMake } from './utils';
import Home from './pages/Home';
import Models from './pages/Models';
import ProductDetail from './pages/ProductDetail';
import { SERVER_END_POINT } from './utils/constants';

function App() {
  const [products, setProducts] = useState([]);
  const [models, setModels] = useState({});

  const fetchProducts = () => {
    fetch(SERVER_END_POINT)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProducts(data);
        setModels(groupByMake(data));
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const content = (
    <div className="App">
      <AppBar />
      <div className="app-content">
        <Container>
          <Router>
            <Route path='/' exact render={() => <Home models={models} />} />
            <Route path='/model/:model' exact render={(props) => <Models models={models} {...props} />} />
            <Route path='/model/:model/:car' render={(props) => <ProductDetail models={models} {...props} />} />
          </Router>

        </Container>
      </div>
    </div>
  );

  return products.length ? content : <AppLoader />;
}

export default App;
