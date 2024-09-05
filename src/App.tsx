import "./App.css";
import RoutesModlue from "./Routes/Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutesModlue />
      </Provider>
    </div>
  );
}

export default App;
