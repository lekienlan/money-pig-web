import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';

const dmSans = Inter({
  subsets: ['vietnamese'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Money Pig',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
