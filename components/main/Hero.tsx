'use client'

import { useBlackHole } from '../hooks/useBlackHole'

const Hero = () => {
	const { blackHole, isLoading } = useBlackHole()

	return (
		<section className='relative flex flex-col h-full w-full items-center'>
			{!isLoading && (
				<video
					autoPlay
					muted
					loop
					src={blackHole[0].src}
					className='rotate-180 absolute z-[1] top-[-250px] w-[1080px] h-[650px] object-cover'
				></video>
			)}
		</section>
	)
}

export default Hero
