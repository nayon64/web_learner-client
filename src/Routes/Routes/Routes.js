import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Blogs from '../../pages/Blogs/Blogs';
import Courses from '../../pages/Courses/Courses';
import Error404 from '../../pages/Error404/Error404';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

export const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <Error404></Error404>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			},
			{
				path: '/home',
				element:<Home></Home>
			},
			{
				path: "/courses",
				element: <Courses></Courses>,
				loader:()=>fetch('http://localhost:5000/courses')
			},
			{
				path: "/Blogs",
				element:<Blogs></Blogs>
			},
			{
				path: "/login",
				element:<Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			}
		]
	}
])
