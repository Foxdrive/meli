import "./App.css";
import { RouterProvider, useSearchParams, createBrowserRouter } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router';
import logo from "../src/assets/meli-logo.png";
import EmptySearch from "./components/search/emptySearch";
import SearchResults from "./components/search/searchResults";
import ItemDetail from "./components/search-items/item-detail/itemDetail";

async function fetchData(search) {
  const results = [];
  const data = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  ).then((res) => res.json());
  if (data.results.length > 0) {
    for (let i = 0; i < 4; i++) {
      results.push(data.results[i]);
    }
  }
  return results;
}

async function fetchDataDetail(id) {
  const data = await fetch(
    `https://api.mercadolibre.com/items/${id}`
  ).then((res) => res.json());
  return data || null;
}

async function fetchDataDetailDescription(id) {
  const data = await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  ).then((res) => res.json());
  return data || null;
}

function Layout({ children }){
  return (
    <>
      <header className="meli-header">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img src={logo} className="meliLogo" alt="Mercado Libre" />
            </div>
            <div className="col-11">
            <Search/>
            </div>
          </div>
        </div>
      </header>
      <main>
        { children }
      </main>
    </>
  );
}

function App() {

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout><EmptySearch/></Layout>,
    },
    {
      path: '/items',
      element: <Layout><SearchResults /></Layout>,
      loader: async ({ request }) => {
        const queryParams = new URL(request.url).searchParams
        const q = queryParams.get('search') || '';
      return fetchData(q);
    }},
    {
      path: '/items/:id',
      element: <Layout><ItemDetail/></Layout>,
      loader: async ({ params }) => {
        const detail = await fetchDataDetail(params.id);
        const detailDescription = await fetchDataDetailDescription(params.id);
      return [detail, detailDescription];
    }},
  ]);

  return (
    <div className="App">
      
      <RouterProvider router={routers} />
    </div>
  );

}
function Search(){
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("search") || "" ;
  const navigate = useNavigate();
  const location = useLocation();

  function onSearch(event) {
    event.preventDefault();
    const value = event.target.search.value;
    if(location.pathname !== '/items') {
      navigate(`/items?search=${value}`)
    }else {
      setSearchParams({ search: value });
    }
  }

  return (
    <form className="input-group mb-2" onSubmit={onSearch}>
      <input
        type="search"
        name="search"
        className="form-control"
        placeholder="Nunca dejes de buscar"
        defaultValue={q}
        aria-label="Search"
      />
      <button type="submit" className="input-group-text">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default App;
