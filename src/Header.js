import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { DockSharp } from "@mui/icons-material";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen == true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <header>
        <svg
          class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
            fill="currentColor"
          ></path>
        </svg>

        <ul className="middle-ul">
          <li>
            <a href="#">Vehicles</a>
          </li>
          <li>
            <a href="#">Energy</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>

        <ul className="right-ul">
          <li>
            <a href="#">
              <HelpOutlineIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LanguageIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <AccountCircleIcon />
            </a>
          </li>
        </ul>

        <button onClick={() => setIsOpen((prev) => !prev)} className="menu">
          Menu
        </button>

        {isOpen ? (
          <ul className="hamberger">
            <div style={{ marginBottom: "15px" }}>
              <CloseIcon
                onClick={() => setIsOpen((prev) => !prev)}
                className="close"
              />
            </div>

            <li>
              <a href="#">Vehicles</a>
            </li>
            <li>
              <a href="#">Energy</a>
            </li>
            <li>
              <a href="#">Charging</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <div className="list">
                <LanguageIcon />
                <a>&nbsp;United States</a>
              </div>
            </li>
            <li>
              <div className="list">
                <AccountCircleIcon />
                <a>&nbsp;Account</a>
              </div>
            </li>
          </ul>
        ) : (
          ""
        )}
      </header>
    </>
  );
}

export default Header;
