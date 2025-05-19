import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic';
 
const HomeThreeModule = dynamic(() => import('@/modules/HomeThree'), {
  loading: () => <Preloader />,
});

export default function HomeThree() {
	return (
		<main>
			<Header
				headerClass= "header-one v-2 header--sticky" 
				topbarEnable= {true} 
				menuItemsLeft = {true}
			/>

			<HomeThreeModule />

			<Footer 
				footerClass="footer-callto-action-area bg-dark-footer-1"
				footerLogo="/images/logo/logo-2.svg"
				CTAEnable="two"
			/>
		</main>
	)
}
