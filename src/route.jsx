import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NewVideo } from "./pages/NewVideo"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newvideo" element={<NewVideo />} />
      </Routes>
    </BrowserRouter>
  )
}