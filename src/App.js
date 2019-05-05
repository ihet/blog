import React, { Component } from 'react';
import {Route,BrowserRouter} from "react-router-dom";
import Welcome from "./pages/welcome";
import NotFound from "./pages/notFound";

class  App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path={"/"} component={Welcome}/>
        <Route path={"/index"} component={Welcome}/>
        <Route path={"/notFound"} component={NotFound}/>
      </BrowserRouter>
    );
  }
}

export default App;
