import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <List className="header" component="nav" aria-label="mailbox folders">
      <Link to="/" className="headerLink">
        <ListItem className="listItem" button>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/favourite" className="headerLink">
        <ListItem className="listItem" button>
          <ListItemText primary="Details" />
        </ListItem>
      </Link>
    </List>
  );
};

export default Header;
