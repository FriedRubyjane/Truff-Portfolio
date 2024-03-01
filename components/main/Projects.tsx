'use client'

import { useProjects } from '../hooks/useProjects'
import ProjectsCard from '../sub/ProjectsCard'

const Projects = () => {
	const { projects, isLoading } = useProjects()

	return (
		<section
			id='projects'
			className='flex flex-col items-center justify-center pb-10'
		>
			<h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
				Мои проекты
			</h1>
			<div className='h-full w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-16'>
				{!isLoading &&
					projects.map(project => (
						<ProjectsCard
							key={project.title}
							src={project.src}
							title={project.title}
							description={project.description}
							link={project.link}
						/>
					))}
			</div>
		</section>
	)
}

export default Projects
