import { Image } from 'antd'
import Link from 'next/link'

const CalculatorComp = () => {
	return (
		<section className='flex justify-between items-center my-20 px-16 h-[631px] w-full bg-[url(/calculatorComp_bg.png)]'>
			<div className='flex flex-col gap-y-5 w-[76%]'>
				<h1 className='font-extrabold text-[51px] tracking-widest leading-10 text-white'>Рассчитать стоимость</h1>
				<p className='text-[19px] font-normal text-white'>Если вам не удалось найти то, что искали, вы всегда можете воспользоваться автоматическим расчетом стоимость заказа на маркетплейсе <span className='font-bold'>Poizon</span>, включая комиссию сервиса и доставку</p>
				<div className='w-full flex justify-between items-center gap-x-[2%]'>
					<div className='flex gap-x-5 items-center text-white'>
						<span className='rounded-full flex items-center justify-center bg-transparent border border-white px-8 py-6 font-bold text-2xl'>1</span>
						<p className='font-semibold text-sm'>Подробная, пошаговая статья о том, как установить приложение Poizon</p>
					</div>
					<div className='flex gap-x-5 items-center text-white'>
						<span className='rounded-full flex items-center justify-center bg-transparent border border-white px-8 py-6 font-bold text-2xl'>2</span>
						<p className='font-semibold text-sm'>Напишите нам в Telegram или WhatsApp какую вещь хотите купить</p>
					</div>
				</div>
				<Link className='transition-all my-10 duration-300 hover:bg-site-blue hover:text-black-main bg-black-main w-[35%] flex items-center justify-center rounded-md text-white text-xs font-bold py-5 px-7' href={'/'}>Рассчитать стоимость</Link>
			</div>
			<Image src="/IPhone_calc.png" preview={false} />
		</section>
	)
}

export default CalculatorComp