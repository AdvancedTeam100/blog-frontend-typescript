import { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Container,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  Box,
  Select,
  MenuItem,
  SvgIcon,
  Avatar,
  useTheme
} from "@mui/material";
import { Menu, Search, } from "@mui/icons-material";
import { Bell } from "../assets";
import { useProSidebar } from "react-pro-sidebar";
import { 
  useSidebar, 
  useSidebarSelectedMenuTitleContext,
  useTemplateThemeModeContext, 
} from "../hooks";
import { TemplateThemeModeContextType } from "../context";
import { logout } from "../redux/actionCreators/authActions";
import { RootState } from "../redux/store/store";

const Navbar: FC = (): ReactElement => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { broken } = useProSidebar();
  const { toggle } = useSidebar();
  const { menuTitle } = useSidebarSelectedMenuTitleContext();
  const { isDark } = useTemplateThemeModeContext() as TemplateThemeModeContextType;
  const dispatch = useDispatch(); // Add this line to get the dispatch function
  const user: any = useSelector(
    (state: RootState) =>  state.auth.user 
  )
  let name = '';
  if(user) {
    name = user.name;
  }
  

  return (
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Typography
              variant="h6"
              color={isDark ? theme.palette.success.dark : theme.palette.success.light}
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              {menuTitle}
            </Typography>
            {broken && (
            <IconButton
              onClick={toggle}
              sx={{
                color:isDark ? theme.palette.success.dark : theme.palette.success.light, 
                mt:"8px"}}
            >
              <Menu />
            </IconButton>)}
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <Box sx={{display:'flex', justifyContent:'flex-end'}}>
              <Search sx={{m:'auto', 
              color:isDark ? theme.palette.success.dark : theme.palette.success.light, 
              width:30, height:30}} />
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end', py:0, my:0}}>
              <Select
                sx={{'.MuiOutlinedInput-notchedOutline': { border: 0 }, maxHeight:'100%', py:0, my:0}}
                displayEmpty
                renderValue={(value) => {
                  return (
                    <Box sx={{ display: "flex", gap: 1, py:0, my:0 }}>
                      <>
                        <SvgIcon style={{ 
                          color:isDark ? theme.palette.success.dark : theme.palette.success.light, 
                          width:30, height:30, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0}}>
                          <Bell />
                        </SvgIcon>
                        {value}
                      </>
                    </Box>
                  );
                }}
              >
                <MenuItem>通知 #1</MenuItem>
                <MenuItem>通知 #1</MenuItem>
                <MenuItem>通知 #1</MenuItem>
              </Select>
              <Divider orientation="vertical" flexItem sx={{py:0, my:0}}/>
              <Select id='navbarSelect'
                sx={{'.MuiOutlinedInput-notchedOutline': { border: 0 }, maxHeight:'100%', px:0.5, py:0, my:0 }}
                displayEmpty
                renderValue={(value) => {
                  return (
                    <Box sx={{ display:"flex", justifyContent:'flex-end', gap: 1, py:0, my:0 }}>
                      <>
                        <Typography mx='auto' my={0} py={0} 
                        color={isDark ? theme.palette.success.dark : theme.palette.success.light} 
                        >{name}</Typography>
                        <Avatar sx={{ width:35, height:35, m:0, p:0}}
                            src='http://localhost:8000/upload/images/images.png'
                            alt='avatar'
                        />
                        {value}
                      </>
                    </Box>
                  );
                }}
              >
                <MenuItem>私のプロフィール</MenuItem>
                <MenuItem onClick={() => dispatch(logout(navigate))}>ログアウト</MenuItem>
              </Select>
            </Box>
          </Box>
        </Toolbar>
      </Container>
  );
};

export default Navbar;

      // {/* <ConsoleLog title={'navbarSelect height'} message={document.getElementById("navbarSelect")?.clientHeight.toString()}/> */}

          //   {/* <Menu
          //     id="menu-appbar"
          //     anchorEl={anchorElNav}
          //     anchorOrigin={{
          //       vertical: "bottom",
          //       horizontal: "left",
          //     }}
          //     keepMounted
          //     transformOrigin={{
          //       vertical: "top",
          //       horizontal: "left",
          //     }}
          //     open={Boolean(anchorElNav)}
          //     onClose={toggle}
          //     sx={{
          //       display: { xs: "block", md: "none" },
          //     }}
          //   >
          //     {routes.map((page) => (
          //       <Link
          //         key={page.key}
          //         component={NavLink}
          //         to={page.path}
          //         color="black"
          //         underline="none"
          //         variant="button"
          //       >
          //         <MenuItem onClick={toggle}>
          //           <Typography textAlign="center">{page.title}</Typography>
          //         </MenuItem>
          //       </Link>
          //     ))}
          //   </Menu> 
          // </Box>*/}
          // {/*<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          //    <Box
          //     sx={{
          //       display: "flex",
          //       flexDirection: "row",
          //       justifyContent: "flex-start",
          //       alignItems: "center",
          //       marginLeft: "1rem",
          //     }}
          //   >
          //     {routes.map((page) => (
          //       <Link
          //         key={page.key}
          //         component={NavLink}
          //         to={page.path}
          //         color="black"
          //         underline="none"
          //         variant="button"
          //         sx={{ fontSize: "large", marginLeft: "2rem" }}
          //       >
          //         {page.title}
          //       </Link>
          //     ))}
          //   </Box> 
          // </Box>*/}
