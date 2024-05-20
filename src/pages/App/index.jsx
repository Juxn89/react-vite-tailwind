import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import { Navbar } from '../../components/navbar'
import './App.css'

const App = () => {
  return (
    <>
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
			</BrowserRouter>
    </>
  )
}

export default App
