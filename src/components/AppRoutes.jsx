import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import NotFoundPage from "../pages/NotFound";
import { Card } from "../pages/Card";

function AppRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage loading={loading} />} />
        {/* Страница входа */}
        <Route path="/signin" element={<SignInPage />} />
        {/* Страница регистрации */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/card/:id" element={<Card />} />
        {/* Страница не найдена */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
