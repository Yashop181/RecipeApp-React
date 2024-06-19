import { Link,Outlet } from "react-router-dom"
import './Layout.css'
const Layout = () => {
  return (
    <div>
      <div className="layout-links">
        <Link to="/" className="layout-link">List</Link>
        {/* <Link to="/details" className="layout-link">Display</Link> */}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
