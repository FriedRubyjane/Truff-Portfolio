import { BsTelegram } from 'react-icons/bs'
import { RxDiscordLogo, RxInstagramLogo } from 'react-icons/rx'

const Footer = () => {
	return (
		<footer className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]'>
			<div className='w-full flex flex-col items-center justify-center m-auto'>
				<div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
					<div className='min-w-[100px] h-auto flex flex-col items-center justify-start'>
						<div className='font-bold text-[16px]'>Соц. сети</div>
						<div className='flex flex-row gap-7 my-[15px] '>
							<a
								href='https://www.instagram.com/jme_truffle?igsh=bXgxcHA2OWljcHN1&utm_source=qr'
								target='_blank'
								className='flex flex-row items-center gap-2'
							>
								<RxInstagramLogo />
								<span className='text-[15px]'>Instagram</span>
							</a>
							<a
								href='https://discordapp.com/users/296907285765160961'
								target='_blank'
								className='flex flex-row items-center gap-2'
							>
								<RxDiscordLogo />
								<span className='text-[15px]'>Discord</span>
							</a>
							<a
								href='https://t.me/FriedTruffle'
								target='_blank'
								className='flex flex-row items-center gap-2'
							>
								<BsTelegram />
								<span className='text-[15px]'>Telegram</span>
							</a>
						</div>
					</div>
				</div>
				<div className='mt-[20px] mb-[20px] text-[15px] text-center'>
					&copy; Alex Truffle 2024
				</div>
			</div>
		</footer>
	)
}

export default Footer
