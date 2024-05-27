import { createContext, useState } from 'react'

export const shoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [count, setCount] = useState(0)
	const [productToShow, setProductToShow] = useState({})
	const [productsInCart, setProductsInCart] = useState([])
	const [order, setOrder] = useState([])
	const [searchByTitle, setSearchByTitle] =  useState(null)
	
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)
	
	const [isCheckouSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
	const openCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(true)
	const closeCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(false)
	
	const [filteredProducts, setFilteredProducts] = useState([])
	const filterProductsByTitle = (products, title) => {
		return products?.filter(product => product.title.toLowerCase().includes(title.toLowerCase()) )
	}

	const [searchByCategory, setSearchByCategory] = useState(null)
	const filterProductsByCategory = (products, searchByCategory) => {
		return products?.filter(product => product.category.toLowerCase().includes(searchByCategory.toLowerCase()))
	}

	return (
		<shoppingCartContext.Provider
			value={{
				products,
				setProducts,
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow,
				productsInCart,
				setProductsInCart,
				isCheckouSideMenuOpen,
				setIsCheckoutSideMenuOpen,
				openCheckoutSideMenuOpen,
				closeCheckoutSideMenuOpen,
				order,
				setOrder,
				searchByTitle,
				setSearchByTitle,
				filteredProducts,
				setFilteredProducts,
				filterProductsByTitle,
				searchByCategory,
				setSearchByCategory,
				filterProductsByCategory
			}}
		>
			{ children }
		</shoppingCartContext.Provider>
	)
}