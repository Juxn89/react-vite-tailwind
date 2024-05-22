import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { shoppingCartContext } from '../../context'
import './styles.css'

export const CheckoutSideMenu = () => {
	const { isCheckouSideMenuOpen, closeCheckoutSideMenuOpen } = useContext(shoppingCartContext)
	
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
		</aside>
	)
}
