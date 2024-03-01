import Image from 'next/image'

const Navbar = () => {
	return (
		<div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001465] backdrop-blur-md z-50'>
			<div className='w-full h-full flex flex-row items-center justify-between m-auto px-10'>
				<a
					href='#about-me'
					className='h-auto w-auto flex flex-row items-center'
				>
					<Image
						src='/icons/navLogo.png'
						alt='NavbarLogo'
						width={40}
						height={40}
						className='hover:animate-spin hidden md:block'
					/>
					<span className='font-bold text-[20px] ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
						Алексей Трюфилькин
					</span>
				</a>
				<div className='w-[450px] h-full flex flex-row items-center'>
					<div className='flex items-center justify-between w-full h-auto mr-[10px] px-[15px] py-[10px] rounded-full text-gray-200'>
						<a href='#about-me' className='cursor-pointer'>
							Обо мне
						</a>
						<a href='#skills' className='cursor-pointer'>
							Навыки
						</a>
						<a href='#projects' className='cursor-pointer'>
							Проекты
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
