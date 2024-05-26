import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormDialog } from "../components/dialog.form";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { openCartAction } from "../store/cartReducer";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { length } = useSelector((state) => state.cart);
  const [count, setCount] = useState(length);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    dispatch(openCartAction());
  };

  useEffect(() => {
    setCount(length);
  }, [length]);

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "rgb(22, 22, 22)" }}>
        <Toolbar>
          <Typography variant="h6">
            <Button
              style={{ color: "white" }}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <MenuItem component={Link} to="/cups" primarytext="Кружки">
                Кружки
              </MenuItem>

              <MenuItem component={Link} to="/t-shirts" primarytext="Футболки">
                Футболки
              </MenuItem>
            </Menu>
          </Typography>
          <Typography
            variant="h6"
            style={{ float: "right", margin: "0 10% 0 65%" }}
          >
            <Badge
              badgeContent={count}
              color="primary"
              onClick={handleClickOpen}
            >
              <ShoppingBasketIcon />
            </Badge>
            <FormDialog />
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
