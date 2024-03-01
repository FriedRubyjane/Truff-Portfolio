'use client'

import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const SkillsText = () => {
	return (
		<div className='w-full h-auto flex flex-col items-center justify-center'>
			<h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
				Навыки
			</h1>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={slideInFromTop}
				className='welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
			>
				<SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
				<h1 className='welcome-text text-[13px]'>Думаю лучше с NextJS</h1>
			</motion.div>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={slideInFromLeft(0.5)}
				className='text-white font-medium mt-[10px] text-center mb-[15px]  text-[20px] sm:text-[20px] lg:text-[30px] xl:text-[30px]'
			>
				Созданию приложения с использованием современных технологий
			</motion.div>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={slideInFromRight(0.5)}
				className='cursive sm:text-[15px] lg:text-[20px] xl:text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
			>
				Псс... этот список пополняется регулярно)
			</motion.div>
		</div>
	)
}

export default SkillsText
