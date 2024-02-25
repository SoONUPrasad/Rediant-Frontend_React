import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App-container">
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
