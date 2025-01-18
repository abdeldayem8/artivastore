import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navbarmenu } from "./Navbarmenuitems";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFetchlogout from "@hooks/useFetchLogout";
import API_ENDPOINTS from "@utils/API_ENDPOINTS";

const NavMenuItems = ({ ulClassName, liClassName, linkClassName, closeMenu }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Check if the user is logged in
  const token = localStorage.getItem("token");
  const isLoggedIn = Boolean(token);

  // Filter menu items based on login state
  const filteredMenu = Navbarmenu.filter((item) => {
    if (isLoggedIn && ["navbar.login", "navbar.register"].includes(item.titleKey)) {
      return false;
    }
    if (!isLoggedIn && ["navbar.profile", "navbar.logout"].includes(item.titleKey)) {
      return false;
    }
    return true;
  });

  // Update active link whenever the location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path); // Set active link on click
    closeMenu(); // Close the menu when a link is clicked
  };

  // Use the custom logout hook
  const { triggerLogout } = useFetchlogout(API_ENDPOINTS.Logout, token);

  const handleLogout = () => {
    triggerLogout(); // Trigger the logout API call
    localStorage.removeItem("token"); // Clear the token
    closeMenu(); // Close the menu
    navigate("/artivastore/login"); // Redirect to login page
  };

  return (
    <ul className={ulClassName}>
      {filteredMenu.map((item) => (
        <li key={item.id} className={liClassName}>
          {item.titleKey === "navbar.logout" ? (
            <button
            onClick={handleLogout}
              className={`${linkClassName} transition-all duration-300`}
            >
               {t(item.titleKey)}
            </button>
          ) : (
            <Link
              onClick={() => handleLinkClick(item.link)}
              to={item.link}
              className={`${linkClassName} ${
                activeLink === item.link
                  ? "sm:border-b-2 sm:border-white-500"
                  : "hover:text-gray-500"
              } transition-all duration-300`}
            >
              {t(item.titleKey)}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenuItems;
