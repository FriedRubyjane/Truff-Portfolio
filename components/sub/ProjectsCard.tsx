import Image from 'next/image'
import Link from 'next/link'

interface IProjectsCard {
	src: string
	title: string
	description: string
	link: string
}

const ProjectsCard = ({ src, title, description, link }: IProjectsCard) => {
	return (
		<div className='relative w-full rounded-lg shadow-lg border border-[#2A0E61] z-[20]'>
			<Link href={link} target='_blank'>
				<Image
					src={src}
					alt={title}
					width={512}
					height={512}
					className='w-full h-auto'
				/>
			</Link>
			<div className='bottom-0 left-0 right-0 bg-opacity-50 text-white p-4'>
				<h1 className='text-2xl font-semibold text-white'>{title}</h1>
				<p className='text-gray-300'>{description}</p>
			</div>
		</div>
	)
}

export default ProjectsCard
