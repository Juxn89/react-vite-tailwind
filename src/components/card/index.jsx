import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import { shoppingCartContext } from '../../context'

export const Card = ({ product }) => {
	const { title, price, image, category } = product;
	const { count, setCount, openProductDetail, setProductToShow, productsInCart, setProductsInCart } = useContext(shoppingCartContext)

	const showProduct = () => {
		openProductDetail()
		setProductToShow(product)
	}
	
	const addToCart = () => {
		setProductsInCart([...productsInCart, product])
		setCount(count + 1)
	}

	return (
		<div 
			className="bg-white cursor-pointer w-56 h-60 rounded-lg mb-6"
			onClick={ showProduct }
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{ category }
				</span>
				<img
					src={ image }
					alt={ title }
					title={ title }
					className="w-full h-full object-cover rounded-lg"/>
				<div
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
					onClick={ () => addToCart() } 
				>
					<PlusIcon className='h6 w-6 text-black'/>
				</div>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{ title.length > 50 ? `${title.substring(0, 50) }...` : title }</span>
				<span className="text-lg font-medium">{ `$${price}` }</span>
			</p>
		</div>
	)
}
