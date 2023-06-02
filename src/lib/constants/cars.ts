import ferrariImg from '$lib/assets/ferrari_488.jpeg?h=200&webp';
import fordImg from '$lib/assets/ford_mustang.jpeg?h=200&webp';
import lamborghiniImg from '$lib/assets/lamborghini_hurracan.jpeg?h=200&webp';

interface Car {
	img: string;
	title: string;
	ps: number;
	toHundred: number;
	length: number;
	maxKmh: number;
	cylinders: number;
	roundsPerMin: number;
}

const mustang: Car = {
	img: fordImg,
	title: 'Ford Mustang V8 GT Modell 2017',
	ps: 421,
	toHundred: 4.8,
	length: 4.78,
	maxKmh: 250,
	cylinders: 8,
	roundsPerMin: 6500
};
const hurracan: Car = {
	img: lamborghiniImg,
	title: 'Lamborghini Huracán',
	ps: 610,
	toHundred: 3.2,
	length: 4.5,
	maxKmh: 325,
	cylinders: 10,
	roundsPerMin: 8250
};

const ferrari: Car = {
	img: ferrariImg,
	title: 'Ferrari F488 GTB',
	ps: 670,
	toHundred: 3,
	length: 4.56,
	maxKmh: 330,
	cylinders: 8,
	roundsPerMin: 8000
};

export default [mustang, hurracan, ferrari];
