//eslint-disable-next-line
//@ts-ignore
import ferrariImg from '$lib/assets/ferrari_488.jpeg?h=200&webp';
//eslint-disable-next-line
//@ts-ignore
import fordImg from '$lib/assets/ford_mustang.jpeg?h=200&webp';
//eslint-disable-next-line
//@ts-ignore
import lamborghiniImg from '$lib/assets/lamborghini_hurracan.jpeg?h=200&webp';

export interface Car {
	img: string;
	title: string;
	shortTitle: string;
	ps: number;
	toHundred: number;
	length: number;
	maxKmh: number;
	cylinders: number;
	roundsPerMin: number;
	description: string[];
}

const mustang: Car = {
	img: fordImg,
	title: 'Ford Mustang V8 GT Modell 2017',
	shortTitle: 'ford',
	ps: 421,
	toHundred: 4.8,
	length: 4.78,
	maxKmh: 250,
	cylinders: 8,
	roundsPerMin: 6500,
	description: [
		'Erleben Sie das ultimative Fahrvergnügen im kraftvollen Ford Mustang V8 GT Modell 2017! Tauchen Sie ein in eine Welt voller Geschwindigkeit, Adrenalin und unvergleichlicher Leistung.',
		'Wir bieten Ihnen ein exklusives Erlebnis, bei dem Sie die Wahl haben: Entweder 18 km auf der renommierten Rennstrecke Anneau du Rhin oder 36 km entlang einer atemberaubenden Bergstraße. Ganz gleich, für welche Option Sie sich entscheiden, der Ford Mustang V8 GT wird Ihre Erwartungen übertreffen.',
		'Auf der Rennstrecke Anneau du Rhin können Sie Ihre Fahrkünste auf die Probe stellen und Ihre Rundenzeiten verbessern. Fühlen Sie den Nervenkitzel, wenn Sie mit unglaublicher Geschwindigkeit durch Kurven rasen und die Geraden erobern. Dies ist die perfekte Gelegenheit, um die beeindruckende Leistung des Ford Mustang V8 GT zu erleben.',
		'Alternativ können Sie sich für die Fahrt entlang der malerischen Bergstraße entscheiden. Genießen Sie die atemberaubende Landschaft, während Sie das brüllende Triebwerk des Ford Mustang V8 GT auf kurvenreichen Straßen spüren. Jeder Moment wird zu einem unvergesslichen Abenteuer.',
		'Unsere erfahrenen Instruktoren stehen Ihnen zur Seite, um Ihnen alle notwendigen Kenntnisse und Fähigkeiten zu vermitteln, damit Sie das Beste aus Ihrer Fahrt herausholen können. Sie werden lernen, wie man den Ford Mustang V8 GT sicher und souverän lenkt, um das volle Potenzial dieses kultigen Muscle Cars auszuschöpfen.'
	]
};
const hurracan: Car = {
	img: lamborghiniImg,
	title: 'Lamborghini Huracán',
	shortTitle: 'lamborghini',
	ps: 610,
	toHundred: 3.2,
	length: 4.5,
	maxKmh: 325,
	cylinders: 10,
	roundsPerMin: 8250,
	description: [
		'Erleben Sie das ultimative Fahrvergnügen im Lamborghini Huracán! Tauchen Sie ein in eine Welt voller Geschwindigkeit, Adrenalin und unvergleichlicher Leistung.',
		'Wir bieten Ihnen ein exklusives Erlebnis, bei dem Sie die Wahl haben: Entweder 9 km auf der renommierten Rennstrecke Anneau du Rhin oder 18 km entlang einer atemberaubenden Bergstraße. Ganz gleich, für welche Option Sie sich entscheiden, der Lamborghini Huracán wird Ihre Erwartungen übertreffen.',
		'Auf der Rennstrecke Anneau du Rhin können Sie Ihre Fahrkünste auf die Probe stellen und Ihre Rundenzeiten verbessern. Fühlen Sie den Nervenkitzel, wenn Sie mit unglaublicher Geschwindigkeit durch Kurven rasen und die Geraden erobern. Dies ist die perfekte Gelegenheit, um den Huracán in seinem Element zu erleben.',
		'Alternativ können Sie sich für die Fahrt entlang der malerischen Bergstraße entscheiden. Genießen Sie die atemberaubende Landschaft, während Sie die Kraft und Agilität des Lamborghini Huracán auf kurvenreichen Straßen spüren. Jeder Moment wird zu einem unvergesslichen Abenteuer.',
		'Unsere erfahrenen Instruktoren stehen Ihnen zur Seite, um Ihnen alle notwendigen Kenntnisse und Fähigkeiten zu vermitteln, damit Sie das Beste aus Ihrer Fahrt herausholen können. Sie werden lernen, wie man den Huracán sicher und souverän lenkt, um das volle Potenzial dieses atemberaubenden Supersportwagens auszuschöpfen.'
	]
};

const ferrari: Car = {
	img: ferrariImg,
	title: 'Ferrari F488 GTB',
	shortTitle: 'ferrari',
	ps: 670,
	toHundred: 3,
	length: 4.56,
	maxKmh: 330,
	cylinders: 8,
	roundsPerMin: 8000,
	description: [
		'Bereit für ein unvergessliches Abenteuer voller Geschwindigkeit und Adrenalin? Steigen Sie ein in den legendären Ferrari F488 GTB und erleben Sie eine Fahrt, die Ihnen den Atem rauben wird!',
		'Unser exklusives Angebot führt Sie entweder auf die berühmte Rennstrecke Anneau du Rhin, wo Sie 9 km voller Kurven, Geraden und Herausforderungen meistern können. Spüren Sie die unbändige Kraft des Ferraris, während Sie die Rundenzeiten verbessern und Ihre Fahrkünste bis an die Grenzen bringen.',
		'Wenn Sie hingegen die Schönheit der Natur und eine atemberaubende Landschaft genießen möchten, bieten wir Ihnen die Möglichkeit, 18 km auf einer spektakulären Bergstraße zu erleben. Kurvenreich und anspruchsvoll, werden Sie den Ferrari F488 GTB durch die malerischen Straßen steuern und das Zusammenspiel von Leistung und Präzision spüren.',
		'Egal, für welche Option Sie sich entscheiden, Sie werden von unseren erfahrenen Instruktoren gründlich eingewiesen, um das Beste aus Ihrem Ferrari-Erlebnis herauszuholen. Sie werden lernen, wie man den Sportwagen sicher und effektiv handhabt, damit Sie jeden Moment in vollen Zügen genießen können.'
	]
};

export default [mustang, hurracan, ferrari];
