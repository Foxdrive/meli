import './App.css';
import { Routes, Route } from 'react-router-dom';
import logo from'../src/assets/meli-logo.png';
import EmptySearch from './components/search/emptySearch';
import SearchResults from './components/search/searchResults';
import ItemDetail from './components/search-items/item-detail/itemDetail';

function App() {
  return (
    <div className="App">
      <header className="meli-header">
        <div className='container'>
          <div className="row">
            <div className="col-1">
              <img src={logo} className='meliLogo' alt='Mercado Libre'/>
            </div>
            <div className="col-11">
              <form className="input-group mb-2">
                <input type="search" className="form-control" placeholder="Nunca dejes de buscar" aria-label="Search"/>
                <button className="input-group-text"><i className="fa fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={ <EmptySearch /> } />
        <Route path="/search" element={ <SearchResults /> } />
        <Route path="/item" element={ <ItemDetail /> } />
      </Routes>
    </div>
  );
}

export default App;
