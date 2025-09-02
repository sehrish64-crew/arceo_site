import '../globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Poppins } from 'next/font/google';
import LayoutWrapper from '../components/LayoutWrapper';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/admin.css'; // Admin specific styles


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');
  const isAuthRoute = router.pathname.startsWith('/auth');

  return (
    <>
      <Head>
        <title>{isAdminRoute ? 'CRM - Clinic Management' : 'Arceo Website'}</title>
        <meta name="description" content={isAdminRoute ? 'Clinic Management System CRM' : 'Arceo Website Description'} />
      </Head>
       <div className={`${poppins.variable} font-sans`} style={{ fontFamily: 'var(--font-poppins)' }}>
        {isAuthRoute ? (
          <Component {...pageProps} />
        ) : isAdminRoute ? (
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </>
  );
}
