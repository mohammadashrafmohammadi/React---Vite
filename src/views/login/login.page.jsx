import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";
import { Navigate } from "react-router-dom";

export function LoginPage() {
  const { isLoggedIn, token, login } = useAuthStore();

  if (isLoggedIn && token) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <>
      <div>LoginPage</div>
      <Button onClick={() => login({ user: "BIBI", token: "DDDDDDDD" })}>
        Login
      </Button>
    </>
  );
}
