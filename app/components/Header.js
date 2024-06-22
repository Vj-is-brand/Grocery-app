import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./../styles/header.css";
import HeroSection from "./HeroSection";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <span>
            GO<b>FOOD</b>
          </span>
        </div>
        <ul
          className="menu"
          style={{
            listStyle: "none",
            fontFamily: "sans-serif",
            fontSize: "14px",
          }}
        >
          <li>
            <Link href="/" className="menuItem">
              Home
            </Link>
          </li>
          <li>
            <Link href="/groceries" className="menuItem">
              Groceries
            </Link>
          </li>
          <li>
            <Link href="/pages" className="menuItem">
              Pages
            </Link>
          </li>
        </ul>

        <div className="connect">
          <span className="connectText">
            Connect with us <ArrowForwardIcon />
          </span>

          <div className="headerIcons">
            <SearchIcon className="icon" />
            <PersonOutlineIcon className="icon" />
            <FavoriteBorderIcon className="icon" />
            <LocalMallIcon className="icon" />
          </div>
        </div>
      </div>

      <HeroSection />
    </>
  );
};

export default Header;
