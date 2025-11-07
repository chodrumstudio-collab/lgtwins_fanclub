import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LG Twins Fan Club',
  description: 'LG Twins 팬클럽',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

