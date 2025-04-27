import Logo from './_components/Logo'
import Navigation from './_components/Navigation'

export const metadata = {
  title: 'The Wilde Oasis',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  )
}
