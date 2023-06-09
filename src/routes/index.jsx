import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoute"

const Login = lazy(() => import("../pages/Login"));
const Articles = lazy(() => import("../pages/Articles"));
const Roles = lazy(() => import("../pages/Roles"));

const MyRoutes = () => {
  const isLogged = localStorage?.getItem("isLogged");

  // The routes are setup in such a way, if user is logged in it cannot see login page. If user enter invalid routes it will redirect to home
  return (
    <BrowserRouter>
      <div className="background">
        <Suspense fallback={<Loader />}>
          <Routes>
            {!isLogged && <Route path="/login" element={<Login />} />}
            <Route path="*" element={isLogged ? (<Navigate to="/articles" replace />) : (<Navigate to="/login" replace />)}/>
            <Route element={<PrivateRoute isLogged={isLogged} />}>
              <Route path="/articles" element={<Articles />} />
              <Route path="/roles" element={<Roles />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default MyRoutes;
