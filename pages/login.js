 import React from 'react';
 import { useSession, signIn, signOut } from 'next-auth/react';
 import Header from './components/header';
 import Link from 'next/link';

 function Login() {
 	const { data: session } = useSession();
	if (session) {
		return (
 			<>
			 <nav className="navigation">
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>

					{session ? (
						<>
							<li>
								<Link href="/admin">Admin</Link>
							</li>
							<button onClick={() => signOut()}>Sign out</button>
						</>
					) : (
						<button onClick={() => signIn()}>Sign in</button>
					)}
				</ul>
			</nav>
							 
				Signed in <br />
				
			</>
		);
	}
 	return (
 		<>
		 <Header/>
			Not signed in <br />
 			<button onClick={() => signIn()}>Sign in</button>
 		</>
	);
 }

 export default Login;
