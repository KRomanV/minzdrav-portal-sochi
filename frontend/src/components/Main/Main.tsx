import { Switch, Route } from "react-router";
import FacePage from "../FacePage/FacePage";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <FacePage/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
      </Switch>
    </div>
  )
}
