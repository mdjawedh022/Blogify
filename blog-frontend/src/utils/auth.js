export const ADMIN_KEY = "blogify_admin_auth";

export const loginAdmin = (email, password) => {
  if (email === "admin@blogify.com" && password === "admin123") {
    localStorage.setItem(ADMIN_KEY, "true");
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem(ADMIN_KEY);
};

export const isAdminLoggedIn = () => {
  return localStorage.getItem(ADMIN_KEY) === "true";
};
