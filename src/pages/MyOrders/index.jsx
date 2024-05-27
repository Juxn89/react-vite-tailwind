import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/layout'
import { shoppingCartContext } from '../../context'
import { OrdersCard } from '../../components/OrdersCard'

export const MyOrders = () => {
	const { order } = useContext(shoppingCartContext)

	return (
		<Layout>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>My Orders</h1>
			</div>
			{
				order.map(order => (
					<Link 
						key={ crypto.randomUUID() }
						to={ `/my-order/${order.id}` }
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