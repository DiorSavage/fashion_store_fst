import { blogCarousel, BlogResponse } from '@/constants/main.constant'
import Carousel from 'react-multi-carousel'
import BlogComp from './BlogComp'
import Link from 'next/link'

const CarouselBlog = () => {
	return (
		<section className='flex flex-col gap-y-8 my-6'>
			<div className='flex w-full justify-between items-center'>
				<h1 className="font-extrabold text-[31px] text-black-main">Наш блог</h1>
				<Link className="transition-all duration-300 hover:text-site-blue underline underline-offset-8 text-black-main font-bold text-sm" href={'/blogs'}>Больше статей</Link>
			</div>
			<Carousel 
				responsive={BlogResponse}
				swipeable={false}
				draggable={true}
				showDots={true}
				// autoPlay={this.props.deviceType !== "mobile" ? true : false}
				removeArrowOnDeviceType={["tablet", "mobile"]}
			>
				{blogCarousel.map(blog => {
					return (
						<BlogComp key={blog.header} link={blog.link} header={blog.header} text={blog.text} image={blog.image} date={blog.date} />
					)
				})}
			</Carousel>
		</section>
	)
}

export default CarouselBlog