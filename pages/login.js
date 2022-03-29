 import React from 'react';
 import { useSession, signIn, signOut } from 'next-auth/react';
 import Header from './components/header';

 function Login() {
 	const { data: session } = useSession();
	if (session) {
		return (
 			<>
			 <Header/>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
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
