import { useRoutes } from 'react-router-dom'
import { Home, MyAccount, MyOrder, MyOrders, SignIn, NotFound } from '../pages/'

export const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/my-account', element: <MyAccount /> },
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/signin', element: <SignIn /> },
		{ path: '/*', element: <NotFound /> },
	])

	return routes
}