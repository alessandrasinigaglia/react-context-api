import { BrowserRouter, Routes, Route } from "react-router-dom";

//layout
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import HomePage from "./pages/Homepage";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import AboutUs from "./pages/AboutUs";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/AlertContext";

export default function App() {
  return (
    <>
    <AlertProvider >
    <Alert />
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />  
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AlertProvider >
    </>
  );
}
