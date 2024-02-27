import { BsTelegram } from 'react-icons/bs'
import { RxDiscordLogo, RxInstagramLogo } from 'react-icons/rx'

const Footer = () => {
	return (
		<div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]'>
			<div className='w-full flex flex-col items-center justify-center m-auto'>
				<div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
					<div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
						<div className='font-bold text-[16px]'>Social Media</div>
						<div className='flex flex-row gap-7 my-[15px] '>
							<p className='flex flex-row items-center cursor-pointer gap-2'>
								<RxInstagramLogo />
								<span className='text-[15px] ml-6px'>Instagram</span>
							</p>
							<a
								href='https://discordapp.com/users/296907285765160961'
								target='_blank'
								className='flex flex-row items-center gap-2'
							>
								<RxDiscordLogo />
								<span className='text-[15px] ml-6px'>Discord</span>
							</a>
							<p className='flex flex-row items-center cursor-pointer gap-2'>
								<BsTelegram />
								<span className='text-[15px] ml-6px'>Telegram</span>
							</p>
						</div>
					</div>
				</div>
				<div className='mt-[20px] mb-[20px] text-[15px] text-center'>
					&copy; Alex Truffle 2024
				</div>
			</div>
		</div>
	)
}

export default Footer
