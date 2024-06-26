import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import { AccountCircle, Logout, PersonAdd, Settings, Person, Lock, LogoutRounded } from '@mui/icons-material'
import { logOut } from '../../redux-store/auth/authSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux-store/store'
import DialogBoxUi from "../ui/DialogBox";
import { useNavigate } from 'react-router-dom'
import ToastUi from '../../components/ui/ToastifyUi';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const PopupComponents = {
  USER_PROFILE: 'userprofile',
  CHANGE_PASSWORD: 'changepassword',
}

const menuItems = [
  { icon: <Person sx={{ color: 'grey.500', marginRight: "10px" }} />, text: 'User Profile', component: PopupComponents.USER_PROFILE },
  { icon: <Lock sx={{ color: 'grey.500', marginRight: "10px" }} />, text: 'Change Password', component: PopupComponents.CHANGE_PASSWORD },
  { icon: <PersonAdd sx={{ color: 'grey.500', marginRight: "10px" }} />, text: 'Add another account' },
  { icon: <Settings sx={{ color: 'grey.500', marginRight: "10px" }} />, text: 'Settings', route: '/settings' },
  { icon: <Logout sx={{ color: 'grey.500', marginRight: "10px" }} />, text: 'Logout', action: 'logout' },
];

const addMenuItems = [
  {
    title: 'CUSTOMERS', items: [
      { icon: <GroupIcon sx={{ color: 'grey.500', marginRight: "10px" }} />, text: 'Add User', route: 'roles/list' },
      { icon: <AddIcon sx={{ color: 'grey.500' }} />, text: 'Add Customer', route: 'customer/create' }
    ]
  },
  {
    title: 'PURCHASES', items: [
      { icon: <ShoppingCartIcon sx={{ color: 'grey.500', marginRight: "10px" }} />, text: 'Add Invoice', route: 'invoice/create' },
      { icon: <AddIcon sx={{ color: 'grey.500' }} />, text: 'Add Report', route: 'reports' }
    ]
  }
];

const MenuComponent = ({ anchorEl, open, handleClose, menuItems, onMenuItemClick }: any) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    PaperProps={{
      elevation: 0,
      sx: {
        borderRadius: '5px',
        filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.32))',
        mt: 1.5,
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    {menuItems.map((item: any, index: any) => (
      <MenuItem

        key={index}
        onClick={() => onMenuItemClick(item)}
        sx={{
          ":hover": {
            color: "primary.dark"
          },
          fontSize: "13px"
        }}
      >
        <ListItemIcon sx={{
          "& .css-c7koz-MuiSvgIcon-root": {
            width: "20px"
          },
          ":hover": {
            color: "primary.dark"
          },
        }} >{item.icon}</ListItemIcon>
        {item.text}
      </MenuItem>
    ))}
  </Menu>
);

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [addMenuAnchorEl, setAddMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [opendialogBox, setIsOpenDialogBox] = useState(false);
  const [popUpComponent, setPopUpComponent] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleMenuOpen = (setAnchor: any) => (event: any) => {
    setAnchor(event.currentTarget);
  }

  const handleMenuClose = (setAnchor: any) => () => {
    setAnchor(null);
  }
  const handleLogout = () => {
    dispatch(logOut());
    // Additional cleanup if needed
    // Example: Redirecting to login page
    window.location.href = '/login';
  };

  const handleMenuItemClick = (item: any) => {
    if (item.component) {
      setPopUpComponent(item.component);
      setIsOpenDialogBox(true);
    } else if (item.route) {
      navigate(item.route);
    } else if (item.action === 'logout') {
      dispatch(logOut());
    }
    setAnchorEl(null);
    setAddMenuAnchorEl(null);
  }

  return (
    <>
      <ToastUi autoClose={1000} />
      <AppBar sx={{ width: "100%", boxShadow: 'none', backgroundColor: "#fbfbff !important" }} position='sticky' color='transparent'>
        <Toolbar sx={{
          '@media (min-width: 600px)': {
            minHeight: "43px",
            paddingLeft: "15px !important",
            paddingRight: "15px !important",
          },
          justifyContent: 'end',
          backgroundColor: "#ffffff",
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

            <Tooltip title="Logout">
              <IconButton sx={{ width: "30px" }} onClick={handleLogout} size="small">
                <LogoutRounded sx={{
                  ":hover": {
                    color: "primary.main"
                  }, color: 'grey.500', width: "20px"
                }} />
              </IconButton>
            </Tooltip>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}
