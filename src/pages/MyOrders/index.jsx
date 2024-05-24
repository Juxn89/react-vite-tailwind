import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/layout'
import { shoppingCartContext } from '../../context'
import { OrdersCard } from '../../components/OrdersCard'

export const MyOrders = () => {
	const { order } = useContext(shoppingCartContext)

	return (
		<Layout>
			My Orders
			{
				order.map(order => (
					<Link 
						key={ crypto.randomUUID() }
						to={ `/my-orders/${order.id}` }
					>
						<OrdersCard 
							totalPrice={ order.totalPrice }
							totalProducts={ order.totalProducts }
						/>
					</Link>
				))
			}
		</Layout>
	)
}