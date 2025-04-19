import Search from "./components/Search/search";
import Navigation from "./components/Nav/navigation";
import "./global.css";

function App() {
  return (
    <>
      <div className="Header">
        <Search className="Search" />
        <Navigation />
      </div>
    </>
  );
}

export default App;
