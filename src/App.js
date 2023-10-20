import { React, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/add-review";
import Login from "./components/login";
import Restaurant from "./components/restaurant";
import RestaurantsList from "./components/restaurants-list";

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand ms-3">
          Restaurant Reviews
        </a>
        <div className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/restaurants" className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <a onClick={logout} className="nav-link">
                Logout {user.name}
              </a>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="conatiner mt-3">
        <Routes>
          <Route exact path="/restaurants" element={<RestaurantsList />} />
          <Route
            exact
            path="/restaurants/:id/review"
            element={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            exact
            path="/restaurants/:id"
            element={(props) => <Restaurant {...props} user={user} />}
          />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
