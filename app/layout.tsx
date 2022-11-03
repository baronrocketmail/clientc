import localFont from '@next/font/local';
import './globals.css'


const myFont = localFont({ src: './GoldmanSans_W_Th.woff2' , preload: true , variable: "--goldmanSansLight"});

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
    return (
            <html lang="en" className={myFont.className}>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>{children}</body>
            </html>
            );
}
