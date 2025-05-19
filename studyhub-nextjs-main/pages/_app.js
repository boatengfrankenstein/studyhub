import '@/assets/scss/style.scss';
import { Providers } from '@/redux/providers';
import {
	ClerkProvider,
  } from '@clerk/nextjs'
function StudyHubNextJS({ Component, pageProps }) {
  return (
    <Providers>
      <ClerkProvider {...pageProps}>
      <Component {...pageProps} />  
      </ClerkProvider>
    </Providers>
  );
}

export default StudyHubNextJS;
