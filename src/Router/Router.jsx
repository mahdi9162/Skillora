import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import MyProfile from '../Pages/MyProfile';
import Home from '../Pages/Home';
import SkillDetails from '../Pages/SkillDetails';
import PrivateRoute from '../Provider/PrivateRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home,
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
      {
        path: '/skill-details/:id',
        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
