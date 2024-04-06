import { UserButton, useClerk } from "@clerk/clerk-react";
import React, { useEffect, useState  } from "react";
  import { Link,  useNavigate } from "react-router-dom";

  import { DashLinks, SideLinks } from "../constants/index.js";
  import { active, email, search } from "../assets/icons/index.js";


const useAutoLogout = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    const handleUnload = (event) => {
      event.preventDefault();
      signOut();
    };

    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, [signOut, navigate]);
};



  const HeaderDash = () => {
    useAutoLogout();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
      <header className="  ">
        <nav className="flex justify-between w-full border-b-[1px] pb-[10.5px] border-[#4d4b4b43] items-center">
          <a href="">
            <h1 className="sm:mx-0  font-medium text-xl">
              {" "}
              {
                SideLinks.find((link) =>
                  window.location.pathname.includes(link.href.split("/")[1])
                ).label
              }
            </h1>
          </a>

          <ul className=" flex justify-center items-center gap-8 max-lg:hidden ">
            {DashLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {renderIcon(item.icon)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "active":
        return (
          <img src={active} className="m-0 w-[29px] h-[29px]" alt="active" />
        );
      case "email":
        return <img src={email} className="m-0 w-[29px] h-[29px]" alt="email" />;
      case "search":
        return (
          <img src={search} className="m-0 w-[29px] h-[29px]" alt="search" />
        );
      case "user":
        return <UserButton afterSignOutUrl="/" />;

      default:
        return null;
    }
  };

  export default HeaderDash;
