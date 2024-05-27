import { useRoutes } from 'react-router-dom'
import { Home, MyAccount, MyOrder, MyOrders, SignIn, NotFound } from '../pages'

export const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/my-account', element: <MyAccount /> },
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-order/last', element: <MyOrder /> },
		{ path: '/my-order/:id', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/signin', element: <SignIn /> },
		{ path: '/clothes', element: <Home /> },
		{ path: '/electronics', element: <Home /> },
		{ path: '/furnitures', element: <Home /> },
		{ path: '/toys', element: <Home /> },
		{ path: '/others', element: <Home /> },
		{ path: '/*', element: <NotFound /> },
	])

	return routes
}