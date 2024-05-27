import { useContext, useEffect } from 'react'
import { shoppingCartContext } from '../context'

export const useProducts = () => {
	const { 
		filteredProducts, 
		filterProductsByCategory,
		filterProductsByTitle, 
		products, 
		searchByCategory, 
		searchByTitle, 
		setFilteredProducts, 
	} = useContext(shoppingCartContext)

	useEffect( () => {
		if(searchByTitle) setFilteredProducts(filterProductsByTitle(products, searchByTitle))
		if(searchByCategory) setFilteredProducts(filterProductsByCategory(products, searchByCategory))

	}, [searchByTitle, searchByCategory, setFilteredProducts, products])

	return {
		filteredProducts
	}
}