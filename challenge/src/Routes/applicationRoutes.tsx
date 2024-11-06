import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import WinePage from "../Pages/WineItem"


export const ApplicationRoutes = () => {
    return(
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/wine-item/:id"} element={<WinePage />} />
        </Routes>
    )
}