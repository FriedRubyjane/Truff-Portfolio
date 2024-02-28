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
		<div className='overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[20] inline-block min-h-[100%]'>
			<div>
				<Link href={link} target='_blank'>
					<Image
						src={src}
						alt={title}
						width={512}
						height={512}
						className='w-full object-cover'
					/>
				</Link>
			</div>
			<div className='p-4'>
				<h1 className='text-2xl font-semibold text-white'>{title}</h1>
				<p className='mt-2 text-gray-300'>{description}</p>
			</div>
		</div>
	)
}

export default ProjectsCard
