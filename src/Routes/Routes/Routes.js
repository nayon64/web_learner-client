import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Error404 from '../../pages/Error404/Error404';
import Home from '../../pages/Home/Home';

export const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <Error404></Error404>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			}
		]
	}
])
