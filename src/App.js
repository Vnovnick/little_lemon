import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
