import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@components/ThemeProvider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Portfolio',
	icons: {
		icon: ['/favicon.ico'],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<Head>
				<link rel='shortcut icon' href='/favicon/favicon.ico' />
			</Head>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system'>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
