import "./App.css";
import DisplayContainer from "./components/DisplayContainer";
import FormContainer from "./components/FormContainer";

function App() {
  return (
    <>
      <header className="main">
        <div className="parent-container">
          <FormContainer />
          <hr />
          <DisplayContainer />
        </div>
      </header>
    </>
  );
}
export default App;
