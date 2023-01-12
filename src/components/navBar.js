import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar,  Box, Hidden, Button, Typography, Toolbar  } from '@mui/material';
import DrawerPermanent from "./DrawerPermanent"
import { render } from '@testing-library/react';

export default function ButtonAppBar() {
  // const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    render (
      <DrawerPermanent />
    )
  };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Hidden smUp>
              <MenuIcon />
            </Hidden>

          </IconButton>

          <Hidden smDown>
            <DrawerPermanent />
          </Hidden>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2}}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}