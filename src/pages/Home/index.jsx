import { useContext } from 'react'
import { URLS } from '../../common'
import { useFetch, useProducts } from '../../hooks/'
import { Card } from '../../components/card'
import { Layout } from '../../components/layout'
import { ProductDetail } from '../../components/productsDetail'
import { shoppingCartContext } from '../../context'

export const Home = () => {
	const { fakeStoreApi } = URLS
	const products = useFetch(fakeStoreApi.products)
	const { filteredProducts } = useProducts()
	const { setSearchByTitle, searchByTitle, searchByCategory } = useContext(shoppingCartContext)

	console.log(products)

	const onChangeHandler = (event) => {
		const text = event.target.value;
		setSearchByTitle(text)
	}

	const renderProducts = () => {
		try {
			if(searchByTitle?.trim().length > 0) {
				console.log('1')
				if(filteredProducts.length > 0)
					return filteredProducts?.map(product => (<Card key={ product.id } product={ product }/>))
				else
				return <p>No products to show</p>
			}
			else if(searchByCategory?.trim().length > 0) {
				console.log('2', searchByCategory, filteredProducts)
				return filteredProducts?.map(product => (<Card key={ product.id } product={ product }/>))
			}
			else {
				console.log('3')
				return products?.map(product => (<Card key={ product.id } product={ product }/>))
			}			
		} catch (error) {
			console.error(error)
		}

	}

	return (
		<Layout>			
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>Exclusive Products</h1>
			</div>

			<input
				type='text' 
				placeholder='Seach a product' 
				className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none text-center'
				onChange={ onChangeHandler }
			/>

			<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
				{ renderProducts() }
			</div>
			<ProductDetail />
		</Layout>
	)
}