import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <p>Menu</p>
      {routes.map(({ to, text }, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            isActive ? "text-lg text-red-500" : "text-blue-400 text-lg"
          }
          to={to}
        >
          {text}
        </NavLink>
      ))}
      {/* <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg text-red-500" : "text-blue-400 text-lg"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg text-red-500" : "text-blue-400 text-lg"
        }
        to="/blog"
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg text-red-500" : "text-blue-400 text-lg"
        }
        to="/profile"
      >
        Profile
      </NavLink> */}
    </div>
  );
};

const routes = [];
routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
export { Menu };
