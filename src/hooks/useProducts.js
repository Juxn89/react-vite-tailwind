import { useContext, useEffect } from 'react'
import { shoppingCartContext } from '../context'

export const useProducts = () => {
	const { filterProductsByTitle, searchByTitle, filteredProducts, setFilteredProducts, products } = useContext(shoppingCartContext)

	useEffect( () => {
		setFilteredProducts(filterProductsByTitle(products, searchByTitle))
	}, [searchByTitle])

	return {
		filteredProducts
	}
}