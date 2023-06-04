import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_CATEGORIES, NAV_RIGHT } from '../../utils/constants';

const NavBar = () => {
	const textDecoration = 'underline underline-offset-4';
	const textDecorationHover = 'hover:underline hover:underline-offset-4';

	return (
		<nav className='flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light'>
			<ul className='flex items-center gap-3'>
				<li>
					<NavLink
						to='/'
						className='font-semibold text-lg'
					>
						Shopi
					</NavLink>
				</li>

				{
					NAV_CATEGORIES.map( navCategory => {
						return (
							<li
								key={ navCategory.text }
								className={ navCategory.className }
							>
								<NavLink
									to={ navCategory.to }
									className={ ( { isActive } ) => isActive ? `${ textDecoration } ${ textDecorationHover }` : `${ textDecorationHover }` }
								>
									{ navCategory.text }
								</NavLink>
							</li>
						);
					} )
				}
			</ul>

			<ul className='flex items-center gap-3'>
				<li className='text-black/60'>
					juanmer382@gmail.com
				</li>
				{
					NAV_RIGHT.map( nav => {
						return (
							<li
								key={ nav.text }
								className={ nav.className }
							>
								<NavLink
									to={ nav.to }
									className={ ( { isActive } ) => isActive ? `${ textDecoration } ${ textDecorationHover }` : `${ textDecorationHover }` }
								>
									{ nav.text }
								</NavLink>
							</li>
						);
					} )
				}
			</ul>
		</nav>
	);
};

export { NavBar };
