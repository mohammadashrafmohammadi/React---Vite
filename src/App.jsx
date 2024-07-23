// import { Fragment, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Button } from "./components/button/button";
// import { LoginSchema } from "./schema/login.schema";
// import { useDebounce } from "@uidotdev/usehooks";
// // import { Posts } from "./views/post.page";
// // import { Input } from "./components/form/input";

// function App() {
//   const [isloading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(LoginSchema),
//   });
//   const debouncedEmail = useDebounce(email, 1000);
//   useEffect(() => console.log(debouncedEmail), [debouncedEmail]);

//   const onSubmit = async (data) => {
//     try {
//       console.log(data);
//       setIsLoading(true);
//       const apiData = await fetch(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             userId: 1,
//             id: 1,
//             title: data.email,
//             body: data.password,
//           }),
//         }
//       )
//         .then((response) => response.json())
//         .then((json) => json);

//       if (apiData) {
//         reset();
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Fragment>
//       <form onSubmit={handleSubmit((data) => onSubmit(data))}>
//         <input
//           label="Name: "
//           placeholder="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <p>{errors.email?.message}</p>}
//         <br />
//         <input
//           label="Name: "
//           placeholder="password"
//           {...register("password")}
//         />
//         {errors.password && <p>{errors.password?.message}</p>}
//         <br />
//         <Button disabled={isloading} type="submit" size="sm" label="Submit">
//           {" "}
//         </Button>
//       </form>
//       <br />

//       {/* <Posts /> */}
//     </Fragment>
//   );
// }

// export default App;

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
