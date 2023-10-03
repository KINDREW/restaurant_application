import "./App.css";
import Navbar from "./components/navbar";
import FindUs from "./containers/Findus";
import About from "./containers/about";
import Awards from "./containers/awards";
import ChefWord from "./containers/chefword";
import Gallery from "./containers/gallery";
import Home from "./containers/home";
import Menu from "./containers/menu";
import NewsLetter from "./containers/newletter";
import Video from "./containers/video";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <ChefWord />
      <Video />
      <Awards />
      <Gallery />
      <FindUs />
      <NewsLetter />
    </div>
  );
}

export default App;
