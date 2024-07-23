import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  const { token, logout } = useAuthStore();

  return (
    <>
      {token ? (
        <>
          <div>Dashboard</div>
          <Link to="/posts" className="underline">
            Posts
          </Link>
          <br />
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          inventore est aliquam vitae aut fuga provident architecto dolorem
          deserunt ex error laudantium, quo expedita hic quam. Pariatur in non
          ipsa!
        </div>
      )}
    </>
  );
}
