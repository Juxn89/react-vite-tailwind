import { useContext } from 'react'
import { OrderCard } from '../../components/OrderCard'
import { shoppingCartContext } from '../../context'
import { Layout } from '../../components/layout'

export const MyOrder = () => {
	const { order } = useContext(shoppingCartContext)

	return (
		<Layout>
			<div className='flex flex-col w-80'>
				{
					order?.slice(-1)[0].products.map((product) => (
						<OrderCard key={ product.id } product={ product} />
					))
				}
			</div>
		</Layout>
	)
}