import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import HomePage from "./pages/HomePage";
import WishlistPage from "./pages/WishlistPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseListPage />} />
          <Route path="/" element={<CoursePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
