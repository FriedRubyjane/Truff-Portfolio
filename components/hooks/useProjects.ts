import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../app/firebase'
import { IProjects } from '../types/projects'

export const useProjects = () => {
	const [projects, setProjects] = useState<IProjects[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'projects'), orderBy('time', 'asc')),
				snapshot => {
					setProjects(
						snapshot.docs.map(
							d =>
								({
									_id: d.id,
									...d.data(),
								} as IProjects)
						)
					)

					setIsLoading(false)
				}
			),
		[]
	)

	return { projects, isLoading }
}
