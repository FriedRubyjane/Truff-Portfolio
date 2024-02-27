const Hero = () => {
	return (
		<section className='relative flex flex-col h-full w-full items-center'>
			<video
				autoPlay
				muted
				loop
				className='rotate-180 absolute z-[1] top-[-250px] w-[1080px] h-[650px] object-cover'
			>
				<source src='/video/blackHole.webm' type='video/webm' />
			</video>
		</section>
	)
}

export default Hero
