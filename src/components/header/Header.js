import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Avatar, Fade, IconButton } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import * as client from "../../utils/ClientApi";
import { initState } from "../../redux/actions/user.actions";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";

function Header() {
  // const userData = useSelector((state) => state.userReducer);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeconnexion = async () => {
    await client
      .doGet(client.signOut)
      .then((res) => {
        console.log(res.data);
        dispatch(initState());
        setAnchorEl(null);
        window.location = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 1);
    });
  }, []);
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.toggle(
      "sticky",
      location.pathname !== "/" &&
        !location.pathname.startsWith("/defunt/") &&
        location.pathname !== "/cimetiere"
    );
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Creative-Tail-xray2.svg/1200px-Creative-Tail-xray2.svg.png"
            alt="app-logo"
          />
        </Link>
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Recherche" />
        </div>
      </div>
      <div className="header_center">
        <ul className="navbar">
          <li>
            <Link to="/" className="text_menu">
              Accueil
            </Link>
            <Link to="/" className="icon_menu">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link to="/cimetiere" className="text_menu">
              Cimetière
            </Link>
            <Link to="/cimetiere" className="icon_menu">
              <SummarizeIcon />
            </Link>
          </li>
          <li>
            <a href="#" className="text_menu">
              Nous aider
            </a>
            <a href="#" className="icon_menu">
              <ContactSupportIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="header_right">
        {userData.token && userData.userCredentials && (
          <>
            <div className="large_right">
              <div className="header_info">
                <Avatar
                  src={userData.userCredentials.imageUrl}
                  component={Link}
                  to="/profil"
                />
                <h4 component={Link} to="/profil">
                  {userData.userCredentials.pseudo}
                </h4>
              </div>
              <IconButton>
                <NotificationsActiveIcon className="icon_right" />
              </IconButton>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleOpen}
              >
                <ExpandMoreIcon className="icon_right" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="basic-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem component={Link} to="/profil" onClick={handleClose}>
                  <Avatar />
                  Profil
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Settings frontSize="small" />
                  </ListItemIcon>
                  Parametres
                </MenuItem>
                <MenuItem onClick={handleDeconnexion}>
                  <ListItemIcon>
                    <LogoutIcon frontSize="small" />
                  </ListItemIcon>
                  Deconnexion
                </MenuItem>
              </Menu>
              {/* <Menu
                                id="basic-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button'
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}>
                                <MenuItem onClick={handleClose} disableRipple>
                                    <PersonIcon />{' '}
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <AccountCircleIcon />{' '}
                                    My account
                                </MenuItem>
                                <MenuItem onClick={handleDeconnexion}>
                                    <LogoutIcon />{' '}
                                    {' Logout'}
                                </MenuItem>
                            </Menu> */}
            </div>
            <div className="small_right">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleOpen}
              >
                <ExpandMoreIcon className="icon_right" />
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
