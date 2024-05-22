import { createContext, useState } from 'react'

export const shoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
	const [count, setCount] = useState(0)
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const [productToShow, setProductToShow] = useState({})

	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	return (
		<shoppingCartContext.Provider
			value={{
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow
			}}
		>
			{ children }
		</shoppingCartContext.Provider>
	)
}