import { faqConstants } from '@/constants/products.constant'

export default function () {
	return (
		<div className='flex flex-col gap-y-10'>
			{faqConstants.map((item, index) => {
				console.log(faqConstants[index])
				return (
					<div key={index}>
						{/* {faqConstants[item as keyof object].map((faq) => {
							return (
								<div></div>
							)
						})} */}
					</div>
				)
			})}
		</div>
	)
}