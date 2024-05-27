import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

export const OrdersCard = ({ totalPrice, totalProducts }) => {
	return (
		<div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg">
			<div className='flex justify-between w-full'>
				<p className='flex flex-col'>
					<span className='font-light'>01.01.24</span>
					<span className='font-light'>{ `${totalProducts} articles` }</span>
				</p>
				<p className='flex gap-2 items-center'>
					<span className='font-medium text-2xl'>${ totalPrice }</span>
					<ChevronDoubleRightIcon className='h-6 w-6 text-black cursor-pointer'/>
				</p>
			</div>
		</div>
	)
}
