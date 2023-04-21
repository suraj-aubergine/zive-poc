import { Login } from 'components/pages/Login';
import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import Public from './gaurds/public';
import Private from './gaurds/private';
import { Home } from '@pages/Home';
import { SignUp } from '@pages/SignUp/SignUp';

export const router = createBrowserRouter(
  createRoutesFromElements(
		<Route path="/">
			{/* Public routes - These will work without authentication */}
			<Route path='/' element={<Public />}>
				<Route index path='/' element={<SignUp />} />
				<Route index path='/login' element={<Login />} />
				<Route index path='/signup' element={<SignUp />} />
			</Route>

			{/* Private routes - These will require authentication */}
			<Route path='/' element={<Private />}>
				<Route index path='/home' element={<Home />} />
				<Route index path='/profile' element={<Home />} />
			</Route>
		</Route>,
  ));
