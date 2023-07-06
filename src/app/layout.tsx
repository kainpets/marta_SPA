import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "700"]
})

export const metadata = {
  title: 'Pierwszy Taniec Marta Klisowska',
  description: 'Strona Marty Klisowskiej przygotowującej pary do pierwszego tańca na weselach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${poppins.className} bg-slate-200`}>{children}</body>
    </html>
  )
}
