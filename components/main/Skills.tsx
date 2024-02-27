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
			className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-[20]'
			style={{ transform: 'scale(0.9)' }}
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
			<div className='w-full h-full absolute'>
				<div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
					{!isLoading && (
						<video
							className='w-full h-auto'
							preload='false'
							src={blackHole[1].src}
							playsInline
							loop
							muted
							autoPlay
						></video>
					)}
				</div>
			</div>
		</section>
	)
}

export default Skills
