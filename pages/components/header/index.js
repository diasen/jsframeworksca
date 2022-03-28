import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

function Header() {
	const { data: session } = useSession();

	return (
		<header className="navBar">
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<Link href="/login">Log in</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;