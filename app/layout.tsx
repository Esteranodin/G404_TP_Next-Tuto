import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'

// global css importé dans le composant racine de toutes les autres "routes"
// composant layout = enveloppe de l'application entière
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
