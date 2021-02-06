import { Redirect, Route, Switch } from "react-router-dom";
import DolarExchangeRate from "./components/DollarExchangeRate/DolarExchangeRate";
import Layout from "./components/hoc/Layout";
import MainPage from "./components/UI/MainPage/MainPage";
function App() {
  let routes = (
    <Switch>
      <Route exact path={"/"} component={MainPage} />
      <Route exact path={"/dolar_exchange_rate"} component={DolarExchangeRate} />
      <Redirect to={""} />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
}

export default App;