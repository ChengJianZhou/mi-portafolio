import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ProjectsPage from './pages/Projects'
import ProjectDetailPage from './pages/ProjectDetail'
import ContactPage from "./pages/Contact";
import Navbar from './components/Navbar'
import useTheme from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <LangProvider>
      <BrowserRouter>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}