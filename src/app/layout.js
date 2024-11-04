import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';

const dmSans = Inter({
  subsets: ['vietnamese'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Money Pig',
  description: 'Hãy bắt đầu hành trình quản lý tài chính thông minh hơn cùng Money Pig!',
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
