export const metadata = {
  title: 'Digital Rengøring | Professionel datarengøring mens du sover',
  description: 'Få ryddet op i dine Excel-filer, kontaktlister og webshop-data. Fast pris, leveret natten over. Tillidsgaranti.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="antialiased">{children}</body>
    </html>
  )
}
