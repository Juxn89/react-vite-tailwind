import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import { Navbar } from '../../components/navbar'
import { ShoppingCartProvider } from '../../context'
import { CheckoutSideMenu } from '../../components/checkoutSideMenu'
import './App.css'

const App = () => {
  return (
    <>
			<ShoppingCartProvider>
				<BrowserRouter>
					<Navbar />
					<AppRoutes />
					<CheckoutSideMenu />
				</BrowserRouter>				
			</ShoppingCartProvider>
    </>
  )
}

export default App
