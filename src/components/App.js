import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Color from "./color";
import Colors from "./colors";
import ColorNew from "./colornew";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <ColorNew />
          </Route>
          <Route exact path="/colors/:color">
            <Color />
          </Route>
          <Route exact path="/colors">
            <Colors />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
