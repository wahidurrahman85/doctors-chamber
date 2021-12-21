import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigationbar from "./Pages/Home/Navbar/Navigationbar";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Home/Register/Register";
import Login from "./Pages/Home/Login/Login";
import Notfound from "./Pages/Home/Notfound/Notfound";
import Service from "./Pages/Home/Service/Service";
import AuthProvider from "./Context/AuthProvider";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigationbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRouter path="/service/:serviceId">
              <Service />
            </PrivateRouter>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
