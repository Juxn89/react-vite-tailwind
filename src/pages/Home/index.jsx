
import { Layout } from '../../components/layout'
import { Card } from '../../components/card'
import { URLS } from '../../common'
import { useFetch } from '../../hooks/'

export const Home = () => {
	const { fakeStoreApi } = URLS
	console.log(fakeStoreApi)
	const products = useFetch(fakeStoreApi.products)

	return (
		<Layout>
			Home
			<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
				{
					products?.map(product => (<Card key={ product.id } product={ product }/>))
				}
			</div>
		</Layout>
	)
}