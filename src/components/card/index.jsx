import { useContext } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { shoppingCartContext } from '../../context'
import { truncateString } from '../../helpers'

export const Card = ({ product }) => {
	const { id, title, price, image, category } = product;
	const { 
		count, setCount, openProductDetail, setProductToShow, productsInCart, 
		setProductsInCart, openCheckoutSideMenuOpen 
	} = useContext(shoppingCartContext)

	const showProduct = () => {
		openProductDetail()
		setProductToShow(product)
	}
	
	const addToCart = (event) => {
		event.stopPropagation()

		const isProductInCart = productsInCart.filter(product => product.id === id).length > 0;

		if(!isProductInCart) {
			setProductsInCart([...productsInCart, product])
			setCount(count + 1)
			openCheckoutSideMenuOpen()			
		}
	}

	const renderIcon = () => {
		const isProductInCart = productsInCart.filter(product => product.id === id).length > 0;
		const backgroundColor = isProductInCart ? 'bg-black' : 'bg-white'
		const textColor = isProductInCart ? 'text-white' : 'text-black'

		return (
			<div
			className={ `absolute top-0 right-0 flex justify-center items-center ${ backgroundColor } w-6 h-6 rounded-full m-2 p-1` }
			onClick={ (event) => addToCart(event) } 
			>
				{ 
					isProductInCart
					? <CheckIcon className={ `h6 w-6 ${ textColor }` }/>
					: <PlusIcon className={ `h6 w-6 ${ textColor }` }/>
				}
			</div>
		)
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
				{ renderIcon() }
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{ truncateString(title, 50) }</span>
				<span className="text-lg font-medium">{ `$${price}` }</span>
			</p>
		</div>
	)
}
