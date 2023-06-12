import Home from "./Pages/Home/index";
import Profile from "./Pages/Profile/index"

const routes = [
      {
        exact: true,
        path: '/',
        component: Home,
      },
      {
        exact: true,
        path: '/profile/:username',
        component: Profile,
      },
]

export default routes