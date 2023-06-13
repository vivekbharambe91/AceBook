import { getItem } from "./localstorage";

export const isAuthenticated = () => {
    const userInfo = JSON.parse(getItem('userInfo')) || '';
    if (userInfo) {
      return true;
    }
    return false;
  };