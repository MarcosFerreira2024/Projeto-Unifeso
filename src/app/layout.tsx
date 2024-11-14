export const metadata = {
  title: 'Agenda Facil Naf',
  description: 'Generated by Next.js',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://www.unifeso.edu.br/images/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
