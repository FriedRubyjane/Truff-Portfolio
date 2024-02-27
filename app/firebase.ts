import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyC0iXHQrPg6fv1A3MsH3AhaW-VVxduDR8w',
	authDomain: 'my-portfolio-f9a82.firebaseapp.com',
	projectId: 'my-portfolio-f9a82',
	storageBucket: 'my-portfolio-f9a82.appspot.com',
	messagingSenderId: '701349403595',
	appId: '1:701349403595:web:39809035fb1377e923344e',
	measurementId: 'G-0BT5GF4794',
}

initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()
