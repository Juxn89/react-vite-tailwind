import { useEffect, useContext } from 'react'
import { shoppingCartContext } from '../context'

export const useFetch = (url) => {
	const { products, setProducts } = useContext(shoppingCartContext)

	useEffect( () => {
		try {
			fetch(url)
				.then(response => response.json())
				.then(data => setProducts(data))
		} catch (error) {
			console.error(error)
			setProducts([])
		}

	}, [])

	return products;
}