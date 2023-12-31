import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import {
  MenuOutlined,
  HomeOutlined,
  InfoOutlined,
  RestaurantMenuOutlined,
  SecurityOutlined,
  FoodBankOutlined,
  SearchOutlined,
  RecommendOutlined,
  Settings,
  LocalPostOffice,
  Category,
  CategoryTwoTone,
  SupervisedUserCircleOutlined,
} from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { SidebarFooter } from "./SidebarFooter";
import { Badge } from "./Badge";
import {
  useSidebar,
  useSidebarSelectedMenuTitleContext,
  useTemplateThemeModeContext,
} from "../hooks";
import { TemplateThemeModeContextType } from "../context";
import { getUserFromToken } from "../util/util";

const SideBar: FC = (): ReactElement => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { collapsed } = useProSidebar();
  const { toggle, menuItemStyles } = useSidebar();
  const { setMenuTitle } = useSidebarSelectedMenuTitleContext();
  const { isDark } =
    useTemplateThemeModeContext() as TemplateThemeModeContextType;

  const menuItemMouseUpHandler = (mnuTitle: string) => {
    // setMenuTitle(mnuTitle);
  };

  const user = getUserFromToken();
  const role = user ? parseInt(user.role_id, 10) : 4;
  return (
    <Sidebar
      rtl={false}
      breakPoint="sm"
      transitionDuration={800}
      style={{ height: "100vh" }}
      backgroundColor={
        isDark ? theme.palette.primary.dark : theme.palette.primary.light
      }
      rootStyles={{
        color: isDark
          ? theme.palette.secondary.dark
          : theme.palette.secondary.light,
        // color: color, isDark ? theme.palette.success.dark : theme.palette.success.light
      }}
    >
      <Menu>
        <MenuItem
          id="sidebarMnuHeader"
          style={{
            textAlign: "center",
            height: 68,
            marginTop: 0,
            backgroundColor: isDark
              ? theme.palette.info.dark
              : theme.palette.info.light,
          }}
        icon={
            <MenuOutlined
              sx={{
                color: isDark
                  ? theme.palette.success.dark
                  : theme.palette.success.light,
              }}
            />
          }
          onClick={() => {
            toggle();
          }}
        >
          {" "}
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: '1.3rem',
              my: "1rem",
              color: isDark
                ? theme.palette.success.dark
                : theme.palette.success.light,
            }}
            variant="h5"
          >
            会社ブログサイト
          </Typography>
        </MenuItem>
      </Menu>

      <Menu menuItemStyles={menuItemStyles}>
        <MenuItem
          icon={<HomeOutlined />}
          onClick={() => navigate("/", { replace: true })}
          onMouseUp={() => menuItemMouseUpHandler("トップページ")}
        >
          トップページ
        </MenuItem>
        {(role == 2 || role == 1) && (
          <SubMenu icon={<SupervisedUserCircleOutlined />} label="ユーザー管理">
            <MenuItem
              onClick={() => navigate("user/index", { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler("ユーザーリスト")}
            >
              ユーザーリスト
            </MenuItem>
            <MenuItem
              onClick={() => navigate("user/create", { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler("ユーザーを追加する")}
            >
              ユーザーを追加する
            </MenuItem>
          </SubMenu>
        )}

        <MenuItem
          icon={<Settings />}
          onClick={() => navigate("/config", { replace: true })}
          onMouseUp={() => menuItemMouseUpHandler("サイト構成")}
        >
          サイト構成
        </MenuItem>
      </Menu>
      {/* <SidebarFooter collapsed={collapsed}/> */}
    </Sidebar>
  );
};

export default SideBar;
