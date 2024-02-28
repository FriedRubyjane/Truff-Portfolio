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
		<div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] inline-block min-w-[256px]'>
			<Link href={link} target='_blank'>
				<div className='flex flex-col'>
					<Image
						src={src}
						alt={title}
						width={512}
						height={512}
						className='w-full object-cover'
					/>
					<div className='relative p-4'>
						<h1 className='text-2xl font-semibold text-white'>{title}</h1>
						<p className='mt-2 text-gray-300'>{description}</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default ProjectsCard
