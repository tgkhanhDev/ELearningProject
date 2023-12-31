import HomeLayout from "components/layouts/HomeLayout";
import { CourseAdmin, UserAdmin } from "components/templates/Admin";
import { PATH } from "constant";
import {AllCourse, CourseDetailPage, CourseFollowMenu, HomePage, NotFound } from "pages";
import AdminPage from "pages/AdminPage";
import UserInfomation from "pages/UserInformation/UserInfomation";
import { RouteObject } from "react-router-dom";



export const router: RouteObject[] = [
  {
    element: <HomeLayout/>,
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <UserInfomation />,
        path: PATH.user,
      },

      {
        element: <CourseDetailPage />,
        path: PATH.detail,
      },
      {
        element: <CourseFollowMenu />,
        path: PATH.course,
      },
      {
        element: <AllCourse />,
        path: PATH.allcourse,
      },
    ],
  },
  {
    element:<NotFound/>,
    path: '*',
  },
  {
    element: <AdminPage />,
    path: PATH.admin,
    children:[
      {
        element: <UserAdmin/>,
        index: true,
      },
      {
        element: <CourseAdmin/>,
        path: PATH.adminCourse
      }
    ]
  },
];
