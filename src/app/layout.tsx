import type { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Wastewater Management Service',
  description:
    'Kami adalah perusahaan yang Khusus menangani Pengolahan Airvlimbah, di mana telah di terangkan dalam Akta pendirian perusahaan kategori bidang usaha yang di jalankanvsebagai General contraktor (Mekanikal Eliktrikal), Treatment Air, Treatment Air limbah dan Produsen pembuatan Fibergalss sekaligus perusahaan yangvmelakukan perdagangan produk Septictank, IPAL,STP, WTP dan bahan bahan fiber lainnya.',
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
