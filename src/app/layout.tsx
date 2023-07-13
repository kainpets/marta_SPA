import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700", "900"]
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
      <body className={`${poppins.className} bg-[#d1d3d5] overflow-x-hidden`}>{children}</body>
    </html>
  )
}
