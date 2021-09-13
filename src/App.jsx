import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          {/* You don't need exact in every page just in "/" for home */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/:category" component={CategoryPage} />
          <Route exact path="/:category/:id" component={ProductPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
