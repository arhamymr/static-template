import type { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Anugrah Teknologi',
  description:
    'Perusahaan yang bergerak dibidang pengadaan barang dan jasa, seperti Perlengkapan komputer dan laptop, CCTV, AC, dan lainnya. Perusahaan ini berdiri sejak 2013 hingga sekarang. Dengan berjalannya waktu,vperusahaan ini  menerapkan budaya kerja jujur, disiplin, bertanggung jawab, kerja sama, terbuka, serta loyal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <>
            <Navbar />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
