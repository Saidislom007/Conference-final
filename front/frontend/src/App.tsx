import { Routes,Route,BrowserRouter} from "react-router"
import './App.css'
import HomePage from './pages/homePage'
import RegisterPage from './pages/registerPage'
import LoginPage from './pages/loginPage'
import ConferenceDetailPage from "./pages/conferenceDetailPage"
import ShobaDetailPage from "./pages/shobaDetailPage"
import ConferencesPage from "./pages/conferencesPage"
import VerifyEmailPage from "./pages/verifyEmailPage"
// import Apoi from "./hooks/app"

function App() {
  return (
    <>
     {/* <Apoi/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/conference/detail" element={<ConferenceDetailPage />} />
          <Route path="/shoba/detail" element={<ShobaDetailPage />} />
          <Route path="/conferences" element={<ConferencesPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          
        </Routes>
      </BrowserRouter> 
    </>
  )
}


export default App