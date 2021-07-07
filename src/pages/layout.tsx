import { Header } from '../components/organisms/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="m-auto w-11/12 sm:w-11/12 md:w-10/12 lg:w-9/12">{children}</div>
    </div>
  )
}
