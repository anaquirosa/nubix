import { NavBar } from "./navBar"

export const Header = () => {
  return (
    <header className="flex justify-between">
      <a href="/">
        <img className="w-20" src="/images/logo-nubix.svg" alt="Logo" />
      </a>
      <NavBar />
      
    </header>
  )
}
