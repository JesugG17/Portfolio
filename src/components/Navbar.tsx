
export const Navbar = () => {
  return (
    <nav className="flex justify-end items-center gap-5 p-5 bg-primary text-medium text-white fixed w-full">
        <img className="w-8 h-7 invert md:hidden" src="/img/menu-button.png" alt="" />
        <a className="hidden md:inline" href="">Intro</a>
        <a className="hidden md:inline" href="">About me</a>
        <a className="hidden md:inline" href="">Projects</a>
        <a className="hidden md:inline" href="">Contact</a>
    </nav>
  )
}
