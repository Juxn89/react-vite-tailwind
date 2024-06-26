import { XMarkIcon } from '@heroicons/react/24/solid'
import { truncateString } from '../../helpers'

export const OrderCard = ({ product, handleDelete }) => {
	const { id, title, image, price } = product

	return (
		<div className="flex justify-between items-center mb-3">
			<div className='flex items-center gap-2'>
				<figure className='w-20 h-20'>
					<img className='w-full h-full rounded-lg object-cover' src={ image } alt={ title } />
				</figure>
				<p className='text-sm font-light '>{ truncateString(title, 40) }</p>
			</div>
			<div className='flex items-center gap-2'>
				<p className='text-lg font-medium'> ${ price } </p>
				{
					handleDelete 
					? <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={ () => handleDelete(id) }/>
					: ''
				}
				
			</div>
		</div>
	)
}
