import Head from 'next/head';
import peopleJson from '../../libs/people-data';
import Header from '../components/header';

export default function Person({ name, about, company, age }) {
	return (
		<div>
			<Head>
				<title>People</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main style={{ textAlign: 'center', width: '40%', margin: 'auto' }}>
				<h1>{name}</h1>
				<h2>{age}</h2>

				<div>
					<h3>{company}</h3>
					<p>{about}</p>
				</div>
				<a href="http://localhost:3000/">Return</a>
			</main>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = peopleJson.map((person) => {
		return {
			params: {
				guid: person.guid,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const foundPerson = peopleJson.find((person) => person.guid === params.guid);

	return {
		props: foundPerson,
	};
}
