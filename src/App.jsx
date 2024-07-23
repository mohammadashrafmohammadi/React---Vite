import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./views/Posts/post.page";
import { Dashboard } from "./views/Dashboard/dashboard.page";
import { LoginPage } from "./views/login/login.page";
import { RegisterPage } from "./views/Register/register.page";
import { IsAuthenticated } from "./components/misc/is-authenticated";
import { DashboardLayout } from "./components/layout/dashbboard.layout";
import { AuthLayout } from "./components/layout/auth.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IsAuthenticated>
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </IsAuthenticated>
    ),
  },
  {
    path: "/posts",
    element: (
      <IsAuthenticated>
        <DashboardLayout>
          <Posts />
        </DashboardLayout>
      </IsAuthenticated>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
