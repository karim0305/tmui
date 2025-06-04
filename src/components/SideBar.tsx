import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useContext } from "react";
import { IsOpenContext } from "./layout";
import { useNavigate } from "react-router-dom";


export default function LeftDrawer() {
  const { opens } = useContext(IsOpenContext); // no setState here
  const navigate = useNavigate();

  const drawerList = (

    <Box sx={{ width: 200, }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/dashboard')}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/customer')}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/booking')}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Booking" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/user')}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={opens} // uses context state only
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          marginTop: '64px',
          height: 'calc(100% - 64px)'
        }
      }}
    >
      {drawerList}
    </Drawer>
  );
}
