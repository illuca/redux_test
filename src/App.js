import Count from "./containers/Count";
import store from "./redux/store";
import Person from "./containers/Person";

function App() {
  return (
    <div className="App">
      <Count/>
        <hr/>
        <Person/>
    </div>
  );
}

export default App;
