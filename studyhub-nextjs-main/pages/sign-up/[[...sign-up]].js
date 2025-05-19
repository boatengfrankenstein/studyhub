import Preloader from '@/components/Preloader';
import Header from '@/layout/Header';
import dynamic from 'next/dynamic';
import { SignUp } from '@clerk/nextjs'
const SignUpModule = dynamic(() => import('@/modules/SignUp'), {
  loading: () => <Preloader />,
});


export default function Home() {

	return (
		<main>
			<Header 
				authenticationHeader
			/>
			<SignUp />
			{/* <SignUpModule /> */}
		</main>
	)
}
