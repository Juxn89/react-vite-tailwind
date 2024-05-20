import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import { Navbar } from '../../components/navbar'
import { ShoppingCartProvider } from '../../context'
import './App.css'

const App = () => {
  return (
    <>
			<ShoppingCartProvider>
				<BrowserRouter>
					<Navbar />
					<AppRoutes />
				</BrowserRouter>				
			</ShoppingCartProvider>
    </>
  )
}

export default App
