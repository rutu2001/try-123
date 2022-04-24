import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/Registration";
import AllEmp from "./components/AllEmp";
import EditUser from "./components/EditUser";
import View from "./components/View";
import district from "./components/district/district";
import AllForts from "./components/Allforts/AllForts";
import Viewfort from "./components/Viewfort/Viewfort";
import Dummy from "./components/dummy";
import { sliderData } from "./components/sliderData";
import FooterPage from "./components/FooterPage";
import Allforts1 from "./components/Allforts/Allforts1";
import bootstrap from "bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path={"/"}>
            <Home slides={sliderData}></Home>
          </Route>
          <Route path={"/registration"} component={Registration} />
          <Route path={"/all"} component={AllEmp} />
          <Route path={"/edituser/:id"} component={EditUser} />
          <Route path={"/view/:id"} component={View} />
          <Route path={"/district"} component={district} />
          <Route path={`/allforts/:distid`} component={AllForts} />
          <Route path={"/viewfort/:distid/:fortid"} component={Viewfort} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
