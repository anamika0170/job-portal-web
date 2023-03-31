import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {  NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo1.svg";
import "../../assets/styles/sharedLayout.css";
import Stats from "./Stats";
import AddJob from "./AddJob";
import AllJobs from "./AllJobs";
import Profile from "./Profile";
import { Button, Menu } from "@mui/material";
import { useAppContext } from "../../context/appContext";
import LogoutIcon from "@mui/icons-material/Logout";
import links from "../../utils/links";
import { useState } from "react";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function SharedLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openLog, setOpenLog] = useState(false);
  const { user, logoutUser } = useAppContext();

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { pathname } = useLocation();
 
  const showLayoutPage = () => {
    if (pathname === "/stats") {
      return <Stats />;
    }
    if (pathname === "/add-job") {
      return <AddJob />;
    }
    if (pathname === "/all-jobs") {
      return <AllJobs />;
    }
    if (pathname === "/profile") {
      return <Profile />;
    }
    return <Stats />;
  };

  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="appbar" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div">
              {open ? null : "Job Portal"}
            </Typography>
          </Typography>
          <div>
            <Button
              variant="contained"
              className="userName"
            >
              {user?.name}
            </Button>
          </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className="drawerHeader">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img style={{ height: "13vh" }} src={logo} />
            </div>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="nav-links">
          {links.map((link) => {
            const { text, path, id, icon } = link;

            return (
              <NavLink
                to={path}
                key={id}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link inactive"
                }
                end
              >
                <span className="icon">{icon}</span>
                {text}
              </NavLink>
            );
          })}
          <NavLink onClick={logoutUser} className={'logout'}><span className="icon"><LogoutIcon/></span>Logout</NavLink>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography
          sx={{ maxWidth: "1700px", width: "100%" }}
          component={"div"}
        >
          {showLayoutPage()}
        </Typography>
      </Main>
    </Box>
  );
}
