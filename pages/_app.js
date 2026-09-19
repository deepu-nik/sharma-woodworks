import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/globals.css';

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={[headingFont.variable, bodyFont.variable].join(' ')}>
      <Component {...pageProps} />
    </div>
  );
}
