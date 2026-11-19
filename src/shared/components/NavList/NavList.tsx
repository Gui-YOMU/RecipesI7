import { Link } from "react-router"

export const NavList = () => {
  return (
    <>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/shoppingList">Courses</Link>
      </li>
      <li>
        <Link to="/planning">Planning</Link>
      </li>
    </>
  )
}