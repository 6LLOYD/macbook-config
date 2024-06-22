import Header from "./components/header/Header";
import Configuration from "./components/configuration/Configuration";

function App() {
  return (
    <div className="container">
      <div
        className="bg row d-flex pb-5"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Header />
        <Configuration />
      </div>
    </div>
  );
}

export default App;
