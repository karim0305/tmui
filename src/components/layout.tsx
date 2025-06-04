import React from 'react';
import { Link } from 'react-router-dom';
import PrimarySearchAppBar from './AppBar';
import SideBar from './SideBar';
import { createContext, useState} from 'react';
import { Box } from '@mui/material';





type IsOpenContextType = {
  opens: boolean;
  handleOpen: () => void;
};

export const IsOpenContext = createContext<IsOpenContextType>({
  opens: true,
  handleOpen: () => {},
});
type LayoutProps = {
  children: React.ReactNode;
};






const Layout: React.FC<LayoutProps> = ({ children }) => {



const [opens, setOpen] = useState(true);
const handleOpen = () => {
  setOpen(!opens);
}





  return (
    <div>
    <IsOpenContext.Provider value={{ opens, handleOpen }}>
  <PrimarySearchAppBar />
  <SideBar />
  
  <Box sx={{ marginLeft: opens ? '250px' : 0, transition: 'margin 0.3s ease' }}>
    {children}
  </Box>
</IsOpenContext.Provider>
    </div>
  );
};

export default Layout;
