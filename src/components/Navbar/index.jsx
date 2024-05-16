import { NavLink } from "react-router-dom"
import { NavBarRoutesRight, NavbarRoutesLeft } from '../../routes'

export const Navbar = () => {
	const activeStyle = 'underline underline-offset-4'

	return (
		<nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink 
						to='/'
					>
						Shop
					</NavLink>
				</li>
				{
					NavbarRoutesLeft.map(link => (
						<li key={ link.name }>
							<NavLink								 
								to={ link.to }
								className={({ isActive }) => isActive ? activeStyle: 'undefined'}
							>
								{ link.name }
							</NavLink>
						</li>
					))
				}
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/50">
					dev@email.com
				</li>
				{
					NavBarRoutesRight.map(link => (
						<li key={link.name}>
							<NavLink
								to={ link.to }
							>
								{ link.name }
							</NavLink>
						</li>
					))
				}
				<li>
					🛒 0
				</li>
			</ul>
		</nav>
	)
}
