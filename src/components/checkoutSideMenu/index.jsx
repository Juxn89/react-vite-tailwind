import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../OrderCard'
import { shoppingCartContext } from '../../context'
import './styles.css'

export const CheckoutSideMenu = () => {
	const { isCheckouSideMenuOpen, closeCheckoutSideMenuOpen, productsInCart, setProductsInCart } = useContext(shoppingCartContext)

	const handleDelete = (id) => {
		const filteredProducts = productsInCart.filter(product => product.id !== id)
		setProductsInCart(filteredProducts)
	}
	
	return (
		<aside 
			className={ `${isCheckouSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white` }
		>	
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>My Order</h2>
				<div>
					<XMarkIcon className='size-6 text-black cursor-pointer' onClick={ () => closeCheckoutSideMenuOpen() }/>
				</div>
			</div>
			<div className='px-6 overflow-y-scroll'>
				{
					productsInCart.map(product => (
						<OrderCard key={ product.id } product={ product} handleDelete={ handleDelete }/>
					))
				}
			</div>
		</aside>
	)
}
