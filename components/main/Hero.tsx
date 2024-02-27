const Hero = () => {
	return (
		<section className='relative flex flex-col h-full w-full items-center'>
			<video
				autoPlay
				muted
				loop
				src='/video/blackHole.webm'
				className='rotate-180 absolute z-[1] top-[-250px] w-[1080px] h-[650px] object-cover'
			></video>
		</section>
	)
}

export default Hero
