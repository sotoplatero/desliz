import fs from 'fs';
import { base } from '$app/paths';

export async function get({params,query}) {
	const files = fs
			.readdirSync( base + `./src/themes/cartel/`)
			.map( el => el.replace(/\.html$/,'') );

	return { body: files }
}