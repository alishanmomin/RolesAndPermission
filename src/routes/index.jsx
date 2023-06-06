import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));

const MyRoutes = () => {
  const isLogged = localStorage?.getItem("isLogged");

  return (
    <BrowserRouter>
      <div className="background">
        <Suspense fallback={<Loader />}>
          <Routes>
            {!isLogged && <Route path="/login" element={<Login />} />}
            <Route path="*" element={isLogged ? (<Navigate to="/" replace />) : (<Navigate to="/login" replace />)}/>
            <Route element={<PrivateRoute isLogged={isLogged} />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default MyRoutes;
