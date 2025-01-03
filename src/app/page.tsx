import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
	const snippets = await db.snippet.findMany();

	const renderedSnippets = snippets.map((snippet) => {
		return (
			<Link
				key={snippet.id}
				href={`/snippets/${snippet.id}`}
				className='flex justify-between items-center p-2 border rounded'>
				<div>{snippet.title}</div>
				<div>View</div>
			</Link>
		);
	});

	return (
		<div>
			<div>
				<h1 className='text-xl font-bold py-4'>Snippets</h1>
				<Link
					href='/snippets/new'
					className='border p-2 rounded'>
					New
				</Link>
			</div>
			<div className='flex flex-col gap-2 py-3'>{renderedSnippets}</div>
		</div>
	);
}
