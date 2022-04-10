import Count from "./components/Count";
import store from "./redux/store";
import CountContainer from "./containers/Count";

function App() {
  return (
    <div className="App">
      <CountContainer store={store}/>
    </div>
  );
}

export default App;
