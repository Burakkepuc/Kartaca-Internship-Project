import { BrowserRouter,Routes,Route } from "react-router-dom" 
import LandingPage from "./pages/LandingPage"
import NotFound from "./pages/NotFound"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CalenderPage from "./pages/CalenderPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/"  element={<LandingPage/>} />
        <Route path = "/login" element={<LoginPage/>} />
        <Route path = "/register" element={<RegisterPage/>} />
        <Route path = "/calender" element={<CalenderPage/>} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router