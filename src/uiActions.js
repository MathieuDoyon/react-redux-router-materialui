import {
  TOGGLE_SIDEBAR,
  SET_SIDEBAR_VISIBILITY,
  REFRESH_VIEW
} from "./uiTypes";

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const setSidebarVisibility = isOpen => ({
  type: SET_SIDEBAR_VISIBILITY,
  payload: isOpen
});

export const refreshView = () => ({
  type: REFRESH_VIEW
});
