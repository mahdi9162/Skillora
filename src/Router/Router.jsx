import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import MyProfile from '../Pages/MyProfile';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/signup',
        Component: Signup,
      },
      {
        path: '/my-profile',
        Component: MyProfile,
      },
    ],
  },
]);

export default Router;
