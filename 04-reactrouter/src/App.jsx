import { HashRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./pages/NotFound";
import { BlogPost } from "./BlogPost";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
