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
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import { Avatar, Typography } from '@mui/material';



export default function LeftDrawer() {
  const { opens } = useContext(IsOpenContext); // no setState here
  const navigate = useNavigate();
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatarUrl: 'https://i.pravatar.cc/150?img=3',
};
  const drawerList = (

       <Box sx={{ width: 250,}} role="presentation">
           <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Avatar
        alt={user.name}
        src={user.avatarUrl}
        sx={{ width: 64, height: 64, mb: 1 }}
      />
      <Typography variant="subtitle1" fontWeight={600}>
        {user.name}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {user.email}
      </Typography>
    </Box>
      <List>

        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/dashboard')}
            sx={{
              px: 3,
              py: 1.5,
              mx: 1,
              borderRadius: 1,
              backgroundColor: location.pathname === '/dashboard' ? 'primary.main' : 'transparent',
              color: location.pathname === '/dashboard' ? 'white' : 'text.primary',
              '&:hover': {
                backgroundColor: location.pathname === '/dashboard' ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === '/dashboard' ? 'white' : 'text.secondary' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {/* Customer */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/customer')}
            sx={{
              px: 3,
              py: 1.5,
              mx: 1,
              borderRadius: 1,
              backgroundColor: location.pathname === '/customer' ? 'primary.main' : 'transparent',
              color: location.pathname === '/customer' ? 'white' : 'text.primary',
              '&:hover': {
                backgroundColor: location.pathname === '/customer' ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === '/customer' ? 'white' : 'text.secondary' }}>
              <PeopleAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItemButton>
        </ListItem>

        {/* Booking */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/booking')}
            sx={{
              px: 3,
              py: 1.5,
              mx: 1,
              borderRadius: 1,
              backgroundColor: location.pathname === '/booking' ? 'primary.main' : 'transparent',
              color: location.pathname === '/booking' ? 'white' : 'text.primary',
              '&:hover': {
                backgroundColor: location.pathname === '/booking' ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === '/booking' ? 'white' : 'text.secondary' }}>
              <EventNoteOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Booking" />
          </ListItemButton>
        </ListItem>

        {/* User */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/user')}
            sx={{
              px: 3,
              py: 1.5,
              mx: 1,
              borderRadius: 1,
              backgroundColor: location.pathname === '/user' ? 'primary.main' : 'transparent',
              color: location.pathname === '/user' ? 'white' : 'text.primary',
              '&:hover': {
                backgroundColor: location.pathname === '/user' ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === '/user' ? 'white' : 'text.secondary' }}>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
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
        width: 200,
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
