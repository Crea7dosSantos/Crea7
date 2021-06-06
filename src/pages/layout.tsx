import { Header } from '../components/organisms/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="m-auto w-9/12">{children}</div>
    </div>
  )
}
