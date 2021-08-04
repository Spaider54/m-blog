import './App.css';
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import Navbar from './Navbar';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
       <Footer/>
      </div>
    </Router>
  );
}

export default App;
