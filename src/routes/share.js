import { Octokit } from "@octokit/rest";
import { customAlphabet } from 'nanoid'
import { encode } from 'js-base64';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEGHYJKLMNOPQESTVWXYZ', 10)

const host = import.meta.env.VITE_APP_URL || 'https://cartelkit.herokuapp.com'

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_ACCESS_TOKEN,
});

export async function post({ query, body }) {

	let cartel = JSON.parse(body)
	const res = await fetch( host + cartel.src + '&data=true')
	const img = await res.text()

	const id = nanoid()
	const contentEncoded = encode(JSON.stringify({ 
		...cartel, 
		img, 
		src: `https://cartelkit.dsoto.dev${cartel.src}` 
	}));

	const { data } = await octokit.repos.createOrUpdateFileContents({
	  owner: 'sotoplatero',
	  repo: 'data',
	  path: `cartelkit/${id}`,
	  message: '+',
	  content: contentEncoded,
	});

	return {
		body: id
	}
}