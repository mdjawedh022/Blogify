import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AdminLogin from "./Admin/AdminLogin";
import AdminLayout from "./Admin/AdminLayout";

import Posts from "./Admin/Posts";
import Users from "./Admin/Users";
import Settings from "./Admin/Settings";
import Dashboard from "./Admin/Dashboard ";
const LayoutWrapper = () => {
  const location = useLocation();

  // Check admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Show Navbar only for client */}
      {!isAdminRoute && <Navbar />}

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blo" element={<Blog />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>

      {/* Show Footer only for client */}
      {!isAdminRoute && <Footer />}
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
};

export default App;
