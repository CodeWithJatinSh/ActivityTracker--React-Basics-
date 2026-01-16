import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <div className="app-content">
        <ActivityList />
      </div>
    </>
  );
}

export default App;

