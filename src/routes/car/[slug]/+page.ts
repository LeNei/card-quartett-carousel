import { error } from '@sveltejs/kit';
import cars from '$lib/constants/cars';

interface Params {
	params: {
		slug: string;
	};
}

/** @type {import('./$types').PageLoad} */
export function load({ params }: Params) {
	const car = cars.find((car) => car.shortTitle === params.slug);
	if (!car) {
		throw error(404, 'Not found');
	}
	return {
		car
	};
}
