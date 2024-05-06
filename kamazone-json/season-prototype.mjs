import { writeFileSync } from 'fs';

export default class Season {
	SEASON;
	SEASON_EVENT = -1;
	SEASON_EVENT_CHAIN = -1;
	SEASON_EVENT_TYPE = [];

	constructor() {
		this.SEASON = {};
		this.SEASON.season = '';
		this.SEASON.events = [];

		this.exportJson();  // export on process exit
	}

	Season(season) {
		this.SEASON.season = season;
	}

	Chain(...type) {
		const Chain = [];

		this.SEASON_EVENT++;
		this.SEASON_EVENT_CHAIN = -1;
		this.SEASON_EVENT_TYPE = type;
		this.SEASON.events.push(Chain);
	}

	Event(title, description, ...type) {
		const Event = {
			title,
			type: (type.length && type) || this.SEASON_EVENT_TYPE,  // optional override for type
			description,
			options: []
		};

		this.SEASON_EVENT_CHAIN++;
		this.SEASON.events[this.SEASON_EVENT].push(Event);
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

const SEASON = new Season();
const season = SEASON.Season.bind(SEASON);
const Chain = SEASON.Chain.bind(SEASON);
const Event = SEASON.Event.bind(SEASON);
const Option = SEASON.Option.bind(SEASON);

export {
	SEASON,
	season as Season,
	Chain,
	Event,
	Option
}
