import { Season, Chain, Event, Option } from './season-prototype.mjs';

Season (`Conqueror 2`)

Chain (`Artifact`, `Chain`)
Event (
	`Take care of Grandpa for me.`,
	`Mayreel has come to see you. She flies into a rage on the spot and tells you to do something about Kamael. She says he's a complete pain in the neck. What may be the matter?`
)
Option (
	`Tell her that you'll go see him.`,
	`You don't know what's going on but decide to go check it out. You head towards Kamael's office.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Foul-mouthed Kid]`
	]
)
Option (
	`Tell her to do it herself.`,
	`Nothing good comes from getting involved with someone else's family issues. You go your own way ignoring Mayreel's clamor.`,
	`Nothing happened.`
)

Event (
	`Foul-mouthed Kid`,
	`You entered Kamael's office. But there's only a kid and Kamael's nowhere to be seen. And the kid is blabbering things like Lousy? Are you annoyed? You don't know what he's talking about.`
)
Option (
	`Give the kid a scolding.`,
	`You start to get annoyed by the kid's foul language. Bad mannered children must be scolded. You give the kid's butt a good spanking.`,
	`Nothing happened.`
)
Option (
	`Pat the kid's head.`,
	`The kid pushes you away. The kid looks at you with spite. You suddenly feel like dying.`,
	`All Heroes take damage`,
	`All Heroes take damage by 20% of their own max HP.`
)
Option (
	`Examine the kid.`,
	`You realize the kid is Kamael. You presume something must have happened but it doesn't seem like you'll get an answer from the kid. You leave to go search for a way to bring Kamael back to normal.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Bari's Memory]`
	]
)

Event (
	`Bari's Memory`,
	`You've met Bari. As a servant of Kamael, perhaps she'll know something.`
)
Option (
	`Ask about Kamael's recent whereabouts.`,
	`For some reason Bari says she cant remember recent events. Instead she hands you Kamael's schedule thinking it may be of help.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Tracking whereabouts.]`
	]
)

Event (
	`Tracking whereabouts.`,
	`You check Kamael's schedule. The places Kamael recently visited are written in the schedule.`
)
Option (
	`Investigate the clothing shop`,
	`You head for the clothing shop.`,
	`Chain event unlocked.`,
	`Unlocks #[Investigate the clothing shop]`
)
Option (
	`Investigate the herb shop`,
	`You head for the herb shop.`,
	`Chain event unlocked.`,
	`Unlocks #[Investigate the herb shop]`
)
Option (
	`Check the back page.`,
	[
		`Come to think of it, checking carefully from the first page seems like a good idea. You decide to rethink what you have to do.`,
		`There's something about a witch that grants wishes written on the back page. Something smells fishy. You decide to go search for the witch.`
	],
	[
		`Nothing happened.`,
		`Chain event unlocked.`
	],
	[
		[],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
			`Triggered after completing #[Investigate the clothing shop] and #[Investigate the herb shop]`,
			`Unlocks #[A wish granting witch]`
		]
	]
)

Event (
	`Investigate the clothing shop`,
	`You've arrived at the clothing shop. The shopkeeper greets you with a bright smile.`,
	`Chain`
)
Option (
	`Ask about Kamael's recent whereabouts.`,
	`The shopkeeper tells you Kamael recently bought several sets of women's apparel. Nothing seems particularly worth your attention. You leave the clothing shop.`,
	`Nothing happened.`,
	[
		`Unlocked from #[Tracking whereabouts.#Investigate the clothing shop]`,
		`Returns back to #[Tracking whereabouts.]`
	]
)

Event (
	`Investigate the herb shop`,
	`You meet the apothecary. The apothecary gestures you to come in.`,
	`Chain`
)
Option (
	`Ask about Kamael's recent whereabouts.`,
	`The apothecary tells you Kamael recently bought a bunch of memory-improving medicine. There's nothing special other than that. You leave the herb shop.`,
	`Nothing happened.`,
	[
		`Unlocked from #[Tracking whereabouts.#Investigate the herb shop]`,
		`Returns back to #[Tracking whereabouts.]`
	]
)

Event (
	`A wish granting witch`,
	`You followed the schedule to search after the witch. She claims she'll grant you any wish if you give her the proper offering.`
)
Option (
	`Ask to return Kamael back to his regular state.`,
	`The witch laughs and says your wish was granted. Some of your comrades seem to be missing, but it's probably just your imagination.`,
	[
		`1 random Hero take damage`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`1 random Hero faints.`,
		`Unlocks #[Returned Kamael]`
	]
)
Option (
	`Ask to be rich.`,
	`The witch laughs and says your wish was granted. Some of your comrades seem to be missing, but it's probably just your imagination.`,
	[
		`Acquire silver coins`,
		`1 random Hero take damage`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +100`,
		`1 random Hero faints.`
	]
)
Option (
	`Ask for a good Artifact.`,
	`The witch laughs and says your wish was granted. Some of your comrades seem to be missing, but it's probably just your imagination.`,
	[
		`Acquire 1 random {{Color|high|High-grade}} Artifact`,
		`1 random Hero take damage`
	],
	`1 random Hero faints.`
)

Event (
	`Returned Kamael`,
	`You returned to Kamael's office. The Harvest God family are all together. It seems Kamael returned to his normal state as well.`
)
Option (
	`Accept their expression of gratitude.`,
	`Bari, Mayreel and Kamael all thank you. Receiving expressions of gratitude from gods isn't so bad.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +1000`,
		`Unlocks #[At the office] and #[What's your wish.]`
	]
)

Event (
	`At the office`,
	`You remembered how you didn't return the schedule. So you visited Kamael's office. But it seems no one is here right now.`,
	`Chain`
)
Option (
	`Wait.`,
	`You waited all day long, but nobody came. You reluctantly head back.`,
	`Nothing happened.`
)
Option (
	`Search the drawers.`,
	`You're not supposed to, but that's why it's more fun. You find a Hard Cover Diary in the drawers.`,
	[
		`Acquire A[Low|Hard Cover Diary]`,
		`Chain event complete.`
	]
)
Option (
	`Come back later.`,
	`You can't sit and wait all day long for someone who won't show. You decide to return on a later date.`,
	`Nothing happened.`
)

Event (
	`What's your wish.`,
	`You're reunited with the witch. She asks what your wish is. She claims she can give you great power if you desire.`
)
Option (
	`Enhance the God of Harvest's power.`,
	`The witch accepts the offering, and hands you an Artifact that enhances the God of Harvest's power.`,
	[
		`Acquire A[Exclusive|Divine Branch]`,
		`1 random Hero take damage`,
		`Chain event complete.`
	],
	`1 random Hero faints.`
)
Option (
	`Enhance the Flower Girl's power.`,
	`The witch accepts the offering, and hands you an Artifact that enhances the Flower Girl's power.`,
	[
		`Acquire A[Exclusive|Flower of Precious Memory]`,
		`1 random Hero take damage`,
		`Chain event complete.`
	],
	`1 random Hero faints.`
)
Option (
	`Enhance the Divine Beast's power.`,
	`The witch accepts the offering, and hands you an Artifact that enhances the Divine Beast's power.`,
	[
		`Acquire A[Exclusive|Talisman of Energy]`,
		`1 random Hero take damage`,
		`Chain event complete.`
	],
	`1 random Hero faints.`
)
Option (
	`Ask for great power.`,
	`You pay the offering to the witch, and obtain a powerful Artifact.`,
	[
		`Acquire A[Special|Warrior's Mushroom]`,
		`1 random Hero take damage`,
		`Chain event complete.`
	],
	`1 random Hero faints.`
)
Option (
	`Leave.`,
	`You're well aware of the kind of doom making a deal with the witch will bring. You start walking away.`,
	`Nothing happened.`
)
