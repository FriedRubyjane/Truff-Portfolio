import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../app/firebase'
import { IBackHoleBG } from '../types/blackHole'

export const useBlackHole = () => {
	const [blackHole, setBlackHole] = useState<IBackHoleBG[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(
		() =>
			onSnapshot(query(collection(db, 'blackhole')), snapshot => {
				setBlackHole(
					snapshot.docs.map(
						d =>
							({
								_id: d.id,
								...d.data(),
							} as IBackHoleBG)
					)
				)

				setIsLoading(false)
			}),
		[]
	)

	return { blackHole, isLoading }
}
