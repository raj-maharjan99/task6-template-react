import Header from "./Header";
import styles from "./app.module.css";
import Home from "./home/home";
import Footer from "./footer/footer";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./component/home";

// import Home from "./component/home";
// import Contact from "./component/contact";
// import About from "./component/about";
// import Gallery from "./component/gallery";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router> */}
    </>
  );
}
export default App;
