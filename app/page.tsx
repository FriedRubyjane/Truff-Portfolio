import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import HeroContent from '@/components/sub/HeroContent'

export default function Home() {
	return (
		<main className='h-full w-full'>
			<div className='flex flex-col gap-20'>
				<Hero />
				<HeroContent />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</main>
	)
}
