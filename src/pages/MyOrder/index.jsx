import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../../components/OrderCard'
import { shoppingCartContext } from '../../context'
import { Layout } from '../../components/layout'

export const MyOrder = () => {
	const { order } = useContext(shoppingCartContext)
	const { id } = useParams()

	const products = 
		id === undefined 
			? order?.slice(-1)[0].products 
			: order.find( item => item.id === id).products;

	return (
		<Layout>
			<div className='flex w-80 items-center relative justify-center mb-6'>
				<Link to='/my-orders' className='absolute left-0'>
					<ChevronLeftIcon className='h6 w-6 text-black cursor-pointer'/>
				</Link>
				<h1>My Orders</h1>
			</div>
			<div className='flex flex-col w-80'>
				{
					products.map((product) => (
						<OrderCard key={ product.id } product={ product} />
					))
				}
			</div>
		</Layout>
	)
}