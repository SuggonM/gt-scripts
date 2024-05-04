import { writeFileSync } from 'fs';

export default class Season {
	SEASON_EVENT = -1;
	SEASON_EVENT_CHAIN = -1;
	SEASON_EVENT_TYPE = [];

	constructor() {
		this.SEASON = {};
		this.SEASON.season = '';
		this.SEASON.events = [];

		this.exportJson();  // export on process exit
	}

	set name(season) {
		this.SEASON.season = season;
	}

	Event(...type) {
		const Event = [];

		this.SEASON_EVENT++;
		this.SEASON_EVENT_CHAIN = -1;
		this.SEASON_EVENT_TYPE = type;
		this.SEASON.events.push(Event);
	}

	Chain(title, description, ...type) {
		const Chain = {
			title,
			type: (type.length && type) || this.SEASON_EVENT_TYPE,  // optional override for type
			description,
			options: []
		};

		this.SEASON_EVENT_CHAIN++;
		this.SEASON.events[this.SEASON_EVENT].push(Chain);
	}

	Option(option, response, results, notes, required) {
		const Option = {
			option,
			response,
			results: (Array.isArray(results) && results) || [ results ],  // convert into array if string
			notes: (Array.isArray(notes) && notes) || (typeof(notes) === 'string' && [ notes ]) || [],
			required
		}

		this.SEASON.events[this.SEASON_EVENT][this.SEASON_EVENT_CHAIN].options.push(Option);
	}

	exportJson() {
		process.on('exit', () => {
			const file = this.SEASON.season.replace(' ', '');
			const json = JSON.stringify(this.SEASON, null, '\t');
			writeFileSync(`./json/${file}.json`, json);
		});
	}
}

const season = new Season();
const Event = season.Event.bind(season);
const Chain = season.Chain.bind(season);
const Option = season.Option.bind(season);

export {
	season as Season,
	Event,
	Chain,
	Option
}
