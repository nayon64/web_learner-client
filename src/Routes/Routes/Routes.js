import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Blogs from '../../pages/Blogs/Blogs';
import Checkout from '../../pages/Checkout/Checkout';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import Error404 from '../../pages/Error404/Error404';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivetRoutes from '../PrivetRoutes/PrivetRoutes';

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
				loader:()=>fetch('https://web-learner-server-site.vercel.app/courses')
			},
			{
				path: "/courses/:id",
				element: <CourseDetails></CourseDetails>,
				loader: ({params}) => {
					return fetch(`https://web-learner-server-site.vercel.app/courses/${params.id}`)
				}
			},
			{
				path: "/faq",
				element:<FAQ></FAQ>
			},
			{
				path: "/Blogs",
				element: <Blogs></Blogs>,
				loader:()=>fetch('https://web-learner-server-site.vercel.app/blogs')
			},
			{
				path: "/login",
				element:<Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			},
			{
				path: "/checkout/:id",
				element: <PrivetRoutes><Checkout></Checkout></PrivetRoutes>,
				loader: ({params}) => {
					return fetch(`https://web-learner-server-site.vercel.app/courses/${params.id}`)
				}
			}
		]
	}
])
