'use client'

import { useBlackHole } from '../hooks/useBlackHole'

const Hero = () => {
	const { blackHole, isLoading } = useBlackHole()

	return (
		<section className='relative flex flex-col h-full w-full items-center top-[-325px]'>
			{!isLoading && (
				<video
					preload='false'
					playsInline
					loop
					muted
					autoPlay
					className='rotate-180 absolute z-[1] w-[1080px] h-[800px] object-cover'
				>
					<source src={blackHole[0].src} type='video/mp4' />
				</video>
			)}
		</section>
	)
}

export default Hero
