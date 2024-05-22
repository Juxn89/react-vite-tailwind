import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { shoppingCartContext } from '../../context'
import './styles.css'

export const ProductDetail = () => {
	const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(shoppingCartContext)
	const { image, title, price, description } = productToShow
	
	return (
		<aside 
			className={ `${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white` }
		>	
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div>
					<XMarkIcon className='size-6 text-black cursor-pointer' onClick={ () => closeProductDetail() }/>
				</div>
			</div>
			<figure className='px-6'>
				<img className="w-full h-full rounded-lg" 
					src={ image } 
					alt={ title }
				/>
			</figure>
			<p className='flex flex-col p-6'>
				<span className='font-medium text-2xl mb-2'>${price}</span>
				<span className='font-medium text-md'>{title}</span>
				<span className='font-light text-sm'>{description}</span>
			</p>
		</aside>
	)
}
