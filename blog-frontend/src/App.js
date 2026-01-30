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
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AdminLogin from "./Admin/AdminLogin";
import AdminLayout from "./Admin/AdminLayout";

import Posts from "./Admin/Posts";
import Users from "./Admin/Users";
import Settings from "./Admin/Settings";

import ProtectedAdmin from "./utils/ProtectedAdmin"; 
import Dashboard from "./Admin/Dashboard ";

const LayoutWrapper = () => {
  const location = useLocation();

  // Check admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar only for public site */}
      {!isAdminRoute && <Navbar />}

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          {/* ---------- Public Routes ---------- */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* ---------- Admin Login ---------- */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ---------- Protected Admin Routes ---------- */}
          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <AdminLayout />
              </ProtectedAdmin>
            }
          >
            <Route
              path="dashboard"
              element={
                <ProtectedAdmin>
                  <Dashboard />
                </ProtectedAdmin>
              }
            />
            <Route
              path="posts"
              element={
                <ProtectedAdmin>
                  <Posts />
                </ProtectedAdmin>
              }
            />
            <Route
              path="users"
              element={
                <ProtectedAdmin>
                  <Users />
                </ProtectedAdmin>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedAdmin>
                  <Settings />
                </ProtectedAdmin>
              }
            />
          </Route>

          {/* ---------- Fallback ---------- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>

      {/* Footer only for public site */}
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
