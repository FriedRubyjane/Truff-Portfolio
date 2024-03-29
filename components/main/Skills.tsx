'use client'

import {
	BackendSkills,
	FrontendSkills,
	FullstackSkills,
} from '@/constants/types'
import { useBlackHole } from '../hooks/useBlackHole'
import SkillDataProvider from '../sub/SkillsDataProvider'
import SkillsText from '../sub/SkillsText'

const Skills = () => {
	const { blackHole, isLoading } = useBlackHole()

	return (
		<section
			id='skills'
			className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-[20] px-16'
		>
			<SkillsText />
			<div className='flex flex-row items-center justify-around flex-wrap mt-4 gap-5'>
				{FrontendSkills.map((image, index) => (
					<SkillDataProvider
						key={image.name}
						src={image.image}
						width={image.width}
						height={image.height}
						index={index}
					/>
				))}
			</div>
			<div className='flex flex-row items-center justify-around flex-wrap mt-4 gap-5'>
				{BackendSkills.map((image, index) => (
					<SkillDataProvider
						key={image.name}
						src={image.image}
						width={image.width}
						height={image.height}
						index={index}
					/>
				))}
			</div>
			<div className='flex flex-row items-center justify-around flex-wrap mt-4 gap-5'>
				{FullstackSkills.map((image, index) => (
					<SkillDataProvider
						key={image.name}
						src={image.image}
						width={image.width}
						height={image.height}
						index={index}
					/>
				))}
			</div>
			<div className='w-full h-full min-w-[1080px] min-h-[1080px] absolute   top-[-200px] sm:top-[-100px] md:top-[-100px]'>
				<div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
					{!isLoading && (
						<video
							className='w-full h-auto'
							preload='false'
							playsInline
							loop
							muted
							autoPlay
						>
							<source src={blackHole[1].src} type='video/mp4' />
						</video>
					)}
				</div>
			</div>
		</section>
	)
}

export default Skills
