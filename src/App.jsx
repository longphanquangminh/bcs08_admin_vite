import Spinner from "./components/Spinner";
import HomeLayout from "./layout/Layout";
import PrivateRoute from "./layout/PrivateRoute";
import FormLogin from "./page/Login/Login";
import MoviePage from "./page/MoviePage/MoviePage";
import PageNotFound from "./page/PageNotFound/PageNotFound";
import UserPage from "./page/UserPage/UserPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path=''
            element={
              <PrivateRoute>
                <HomeLayout />
              </PrivateRoute>
            }
          >
            <Route path='/' element={<Navigate to='/user' />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/movie' element={<MoviePage />} />
          </Route>
          <Route path='/login' element={<FormLogin />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
