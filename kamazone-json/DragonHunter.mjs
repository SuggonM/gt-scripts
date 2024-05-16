import { Season, Chain, Event, Option } from './season-prototype.mjs';

Season (`Dragon Hunter`)

Chain ()
Event (
    `Infiltration`,
    `You find a hunter's amulet laying on the road. Who could have left it behind?`,
)
Option (
    `Pick it up.`,
    [
        `It's your lucky day! You take the artifact without hesitation.`,
        `It's your lucky day! You take the artifact without hesitation.`
    ],
    [
        `Acquire A[High|Hunter of Hunter Amulets], Chain event complete.`,
        `Acquire A[Low|Hunter Amulet], Chain event complete.`
    ],
    [
        [],
        [
            `Triggered if the player already has a A[High|Hunter of Hunter Amulets].`
        ]
    ]
)
Option (
    `Leave`,
    `Thinking this tiny artifact was waiting for your arrival would be your imagination running wild. If it wasn't waiting for you, then there's no reason to take it. So you just walk past it.`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
    `Hatchling Outbreak`,
    `As you walk, you witness a horde of hatchlings coming towards you.`
)
Option (
    `Slay them all.`,
    `You engage the hatchlings confidently!`,
    [
        `Start battle`,
        `Chain event unlocked.`
    ],
    [
        `Starts Elite Battle '''(Hatchlings)'''`,
        `Unlocks #[Hatchling vs. Dragon Hunter]`
    ]
)
Option (
    `Run away.`,
    `You escape from the hatchlings with your mad running skills you've trained for a long time.`,
	`Chain event unlocked.`,
	`Unlocks #[Hatchling vs. Dragon Hunter]`
)
Option (
    `Howl.`,
    `As your outcry shakes the atmosphere the hatchlings turn back and run away.`,
    [
        `Acquire silver coins`,
        `Chain event unlocked.`
    ],
    [
        `{{Icon/Currency|SilverCoin}} Silver coins +100`,
        `Unlocks #[Hatchling vs. Dragon Hunter]`
    ],
	`A[Low|Dragon Language Translator]`
)

Event (
    `Hatchling vs. Dragon Hunter`,
    `The hatchling horde strikes again and surrounds you. In the most perilous moment, a dragon hunter intervenes!`
)
Option (
    `Fight Together Back to Back`,
    `You and the dragon hunter successfully fend off the hatchlings. However, the dragon hunter gets gravely injured in the process. As the dragon hunter breathes his final breath, he gives his equipment to you.`,
    [
        `Acquire all A[High|Rapture Breaker], A[High|Deep Void Shield] artifacts`,
        `Chain event complete.`
    ]
)
Option (
    `Trip the Dragon Hunter`,
    `As the hatchlings attack the fallen dragon hunter, you make your escape.`,
	`Chain event complete.`
)


Chain ()
Event (
	`Joy of Reading`,
	`The ancient library covered in dust entices your attention. You brush off the dust and pick up a book.`
)
Option (
	`Ring War: Would You Distract the Demon King? I'll Slay Him Behind!`,
	`It's a tale of a warrior against the great evil. Something disturbs your joy of reading and it's a monster strolling nearby. Time to tidy up your reading space.`,
	`Start battle.`
)
Option (
	`The Dog and the Boy`,
	`A sad story. You shed tears as the protagonist falls in front of a famous artist's painting. After crying for a while you feel much better.`,
	`Recover all Heroes' HP`,
	`All Heroes recover 30% of their own max HP.`
)
Option (
	`North Iceland Mythology`,
	`A tale with the God of Hammer. The story is not bad, but it excels at being the right height for a pillow, so you take the book with you.`,
	`Nothing happened.`,
	`Unlocks '''Outcome 2''' in #[Seeking the Forgotten Arms#Talk]`
)
Option (
	`50 Shades of Play`,
	`The vivid and very visual descriptions of versatile plays of shadow are impressive. Nothing can stop your turning the page, even your bloody nose.`,
	`All Heroes take damage`,
	`All Heroes take damage by 30% of their own max HP.`,
)


Chain (`Artifact`, `Chain`)
Event (
	`Seeking the Forgotten Arms`,
	`You meet a blacksmith from the dragon hunter tribe. He came here to find a clue of how to restore the god's equipment from his tribe's legend.`
)
Option (
	`Talk`,
	[
		`The blacksmith passionately explains about the god's equipment. You wish luck for the blacksmith after hearing some interesting tales.`,
		`The blacksmith passionately explains about the god's equipment. You realize that his story is very similar to what you recently read. You hand over the book to the blacksmith, and the blacksmith cannot hide his excitement.`
	],
	[
		`Nothing happened.`,
		`Chain event unlocked.`
	],
	[
		[],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
			`Unlocked from #[Joy of Reading#North Iceland Mythology]`,
			`Unlocks #[Banished Blacksmith]`
		]
	]
)

Event (
	`Banished Blacksmith`,
	`You reunite with the blacksmith from the dragon hunter tribe. He claims an assailant wreaked havoc while he was fixing his weapons. So he escaped frantically.`
)
Option (
	`Tell him you'll go check.`,
	`The blacksmith's troubled face lights up. He tells you the location of the forge.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[The Already Banished Blacksmith]`
	]
)
Option (
	`Leave.`,
	`It's best to call the police when dealing with an unknown assailant. If you fight, it could lead to being charged with assault for both parties. It would be best to avoid that. You decide not to intervene any further.`,
	`Nothing happened.`
)

Event (
	`The Already Banished Blacksmith`,
	`You meet a familiar other blacksmith from the dragon hunter's forge. The blacksmith is excitedly banging on the equipment while saying there's many new never seen before equipment.`
)
Option (
	`Divert his attention.`,
	`This artifact should be enough to catch his attention. As expected, when you show the artifact, the blacksmith becomes excited. You toss the artifact far away, and the blacksmith chases after it.`,
	[
		`Lose random artifact`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Gods' Forge]`
	],
	`More than 1 artifacts`
)
Option (
	`Let him have this moment.`,
	`When you see the blacksmith being so happy, it's hard to kick him out. Maybe it's fine to let him be for a while. Of course, if it were your items, then you wouldn't just watch and let this happen.`,
	`Nothing happened.`
)

Event (
	`Gods' Forge`,
	`You visit the dragon hunter's forge. The blacksmith completed fixing the equipment, and offers to make one for you as a reward for helping out. But, the blacksmith asks for some good firewood to fire up the forge.`
)
Option (
	`Ask for a new belt.`,
	`A new artifact is born from the flames kindled by your artifact. As you wear the belt you feel yourself getting stronger. Now it feels as if you can deliver justice to evil spirits.`,
	[
		`Lose A[Low|Heresy Grinder]`,
		`Acquire A[Special|Thunder God's Lightning Hammer]`,
		`Chain event complete.`
	],
	[],
	`A[Low|Heresy Grinder]`
)
Option (
	`Ask for a new hammer.`,
	`A new artifact is born from the flames kindled by your artifact. This hammer makes light! and you feel MIGHTY!`,
	[
		`Lose A[Low|Heresy Grinder]`,
		`Acquire A[Special|Thunder God's Lightning Hammer]`,
		`Chain event complete.`
	],
	[],
	`A[Low|Heresy Grinder]`
)
Option (
	`Ask for a new gauntlet.`,
	`A new artifact is born from the flames kindled by your artifact. There are only four places to put your fingers, but somehow it fits in your hand.`,
	[
		`Lose A[Low|Heresy Grinder]`,
		`Acquire A[Special|Thunder God's Lightning Hammer]`,
		`Chain event complete.`
	],
	[],
	`A[Low|Heresy Grinder]`
)
Option (
	`Leave.`,
	`No matter how powerful god's equipment is, nothing could match an equipment you're already used to. You leave the forge without hesitation.`,
	`Nothing happened.`
)


Chain ()
Event (
	`Rite of Passage`,
	`A troop of young dragon hunters is performing a ritual. You were observing them, but in a blink of a moment, you are right at the center of the crowd.`
)
Option (
	`Participate in the ritual.`,
	`A hot iron brands your body. You endure the scorching pain. Now you are accepted as a warrior.`,
	[
		`1 random Hero take damage`,
		`Acquire A[Curse|Scorched Stigma] curse`
	],
	`Unlocks '''Outcome 2''' in #[You shall not pass.#Show the mark of a warrior.]`
)
Option (
	`Leave.`,
	`You do not want to participate in such a savage ritual. You quickly escape the area.`,
	`Nothing happened.`
)


Chain (`Benefit`, `Chain`)
Event (
	`You shall not pass.`,
	`A belligerent warrior blocks your path. Seems like she won't let you go so easily.`,
)
Option (
	`Fight.`,
	[
		`The warrior never should have come here. You defeat the warrior with your robust combat skills and claim the prize.`,
		`You are defeated by the warrior's attack. If it wasn't for your wound on your knees, it would have been your victory.`
	],
	[
		`Acquire 1 random A[Low|Hunter Amulet], A[High|Life Spring Helmet]`,
		`All Heroes take damage`
	],
	[
		[],
		[
			`All Heroes take damage by 30% of their own max HP.`,
		]
	]
)
Option (
	`Show the mark of a warrior.`,
	[
		`You announce yourself as an esteemed Kanterbury Guardian, but the only answer you got was a sucker punch.`,
		`The warrior recognizes your mark. She chants the tribe's rally and shares some supplies with you.`
	],
	[
		`All Heroes take damage`,
		`Acquire A[High|Berserker Mask], Chain event unlocked.`
	],
	[
		[
			`All Heroes take damage by 30% of their own max HP.`
		],
		[
			`Unlocked from #[Rite of Passage#Participate in the ritual.]`,
			`Unlocks #[The Strongest Warrior]`
		]
	]
)

Event (
	`The Strongest Warrior`,
	`You reunite with the warrior who blocked your path from before. The warrior recognizes you and requests for a duel for the title of strongest warrior in the tribe.`
)
Option (
	`Accept.`,
	`You and the warrior shout the tribe's chant and run towards each other. Judging by both of your spirits, one of you may end up feasting in the palace of the gods.`,
	[
		`Start battle`,
		`Chain event unlocked.`
	],
	[
		`Starts Elite Battle '''(Dragon Hunter Warrior (F))'''`,
		`Unlocks #[Dragon Hunter's Heat Therapy]`
	]
)
Option (
	`Ignore.`,
	`Everyone has the title of tribe's strongest warrior these days. Adding another line to your resume with something like that won't help your career. You leave in search of activities that will be more helpful in the future.`,
	`Nothing happened.`
)

Event (
	`Dragon Hunter's Heat Therapy`,
	`You meet with the tribe's warrior again. Now that you've clashed swords and shed blood together, you two are practically siblings. The warrior offers doing the tribe's traditional therapy excellent for recovering from exhaustion after battle.`,
)
Option (
	`Do the therapy together.`,
	`The hot and dense air feels as if you're in the belly of a dragon. Each second and minute is excruciating, but you put the pride of the Guardian on the line and endure it. A moment later, you walk out of the therapy room rejuvenated.`,
	[
		`Recover all Heroes' HP`,
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`All Heroes recover 30% of their own max HP.`,
		`Unlocks Benefit [[Dragon Hunter Season#Benefits|Rejuvenation]]`
	],
	`A[High|Regeneration Mask]`
)
Option (
	`Refuse.`,
	`You remember the warrior hitting you very painfully, and turn your head. You're definitely not upset, and not acknowledging the fact you feel such emotions. Absolutely not!`,
	`Nothing happened.`
)


Chain (`Benefit`, `Chain`)
Event (
	`The Complaining Dragon Hunter`,
	`A dragon hunter is complaining while holding a Golden War Horn the hunter got from Kama-ZONE. The hunter came to Kama-ZONE after hearing rumors about it being fun, but seems disappointed by having nothing to do.`
)
Option (
	`Suggest going to the Teatan Ranger's autographing event.`,
	`You suggest going to the Teatan Ranger's autographing event, but the dragon hunter smirks and pulls out a backpack. The dragon hunter already has signed Red, Blue, Green and even Pink helmets! You feel embarrassed.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +30`,
		`Unlocks #[Graduating Kama-ZONE]`
	],
	`One or more artifacts from A[Mid|Blue's Helmet], A[Mid|Red's Helmet], A[Mid|Green's Helmet]`
)
Option (
	`Suggest visiting Agatha's Shop.`,
	`You hand over the VIP membership card and suggest going to Agatha's shop, the dragon hunter smirks and pulls out a wallet. The dragon hunter has 10 VIP membership cards! Is Agatha paying the dragon hunter to take artifacts from her?`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +30`,
		`Unlocks #[Graduating Kama-ZONE]`
	],
	`A[Mid|VIP Membership Card]`
)
Option (
	`Ignore the hunter.`,
	`If there's one lesson to learn from school, it's not to befriend people wearing strange outfits. You carefully leave to avoid being mistaken as the dragon hunter's comrade.`,
	`Nothing happened.`
)

Event (
	`Graduating Kama-ZONE`,
	`You meet with the complaining dragon hunter again. It seems the hunter acquired more things at Kama-ZONE, but the hunter still seems unsatisfied.`
)
Option (
	`Advise the dragon hunter to explore more.`,
	`The dragon hunter looks at you pitifully, and advises you to not expect too much from Kama-ZONE. The dragon hunter seems to be leaving Kama-ZONE soon, and gives all the silver coins to you.`,
	[
		`Acquire silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +100`,
		`Unlocks #[Mindset of a Master]`
	]
)
Option (
	`Advise the dragon hunter to leave.`,
	`The dragon hunter was already planning to leave before hearing your advice, and gives you silver coins.`,
	[
		`Acquire silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +100`,
		`Unlocks #[Mindset of a Master]`
	]
)

Event (
	`Mindset of a Master`,
	`A rich goblin is shouting in the middle of a hallway. The goblin shouts how business of selling trashy low-grade artifacts can be done in Kama-ZONE, and causing a scene to the androids.`,
)
Option (
	`Stop the goblin.`,
	`As you're about to step in, the rich goblin falls without making a noise. It was the complaining dragon hunter! The dragon hunter warns the rich goblin to never disregard low-grade artifacts again. The dragon hunter may have lots of complaints, but the hunter's heart seems to be true towards Kama-ZONE. You're touched by the hunter's attitude.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`Unlocks Benefit [[Dragon Hunter Season#Benefits|Professional Mindset]]`
	]
)
Option (
	`Ignore the goblin.`,
	`As you're about to step in, the rich goblin falls without making a noise. It was the complaining dragon hunter! The dragon hunter warns the rich goblin to never disregard low-grade artifacts again. The dragon hunter may have lots of complaints, but the hunter's heart seems to be true towards Kama-ZONE. You're touched by the hunter's attitude.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`Unlocks Benefit [[Dragon Hunter Season#Benefits|Professional Mindset]]`,
	]
)


Chain (`Benefit`, `Chain`)
Event (
	`Here Comes The Dragon Hunter`,
	`You meet Neva. Neva tells you about her ruthless relatives coming to Kama-ZONE after rumors about a dragon here spread around.`
)
Option (
	`Talk.`,
	`Neva tells you that she has to find the dragon before her relatives do some cruel things to the dragon. Moved by Neva's determination, you decide to search for the dragon, too.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[It's a Dragon!]`
	]
)

Event (
	`It's a Dragon!`,
	`You visit the source of the rumor and listen to a boy's account. He is claimed to be the first witness of the dragon.`
)
Option (
	`Trust him.`,
	`Head to the place where the boy witnessed the dragon.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Compete or Cooperate]`
	]
)
Option (
	`Don't trust him.`,
	`You're not sure if you can trust the boy's goofy demeanor. You walk the other way around.`,
	`Nothing happened.`
)

Event (
	`Compete or Cooperate`,
	`As you travel to the place where the dragon is last seen, you encounter a Dragon Hunter crowd seeking the dragon as well.`
)
Option (
	`Eliminate competitors.`,
	`No one can find the dragon faster than you. You take down every single competitor.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Close Encounters of the Dragon]`
	]
)
Option (
	`Exchange information.`,
	`You exchange information with the dragon hunters and engage in conversations. They look tough but they ain't bad people.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Close Encounters of the Dragon]`
	]
)

Event (
	`Close Encounters of the Dragon`,
	`After a long search, you finally discover an organism that seems to be a dragon.`
)
Option (
	`Have a closer look.`,
	`How unfortunate. The dragon you found is actually Ranpang practicing new poses. Ranpang thinks highly of her underboss's seeking skills.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[It's a REAL Dragon!]`
	]
)

Event (
	`It's a REAL Dragon!`,
	`The boy, who claimed to be the first witness of a dragon, stops you. The boy asks for help claiming that this time there really is a dragon out there.`
)
Option (
	`Ignore.`,
	`You shove the begging boy away. Even though you hear what might sound like a dragon flapping its wings and a boy screaming, you are not going to be fooled twice.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Positive Prospect]`
	]
)
Option (
	`Give him another chance.`,
	`You decide to fall for the lie again and rush to the place. You witness captivating traces of a dragon in the place.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Positive Prospect]`
	]
)

Event (
	`Positive Prospect`,
	`You find Neva sniffing the ground with a huge footprint.`
)
Option (
	`Ask whether she found a dragon.`,
	`Neva shakes her head. However, she is delighted that she will soon no doubt find a dragon since she discovered new traces of dragon.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`Unlocks Benefit [[Dragon Hunter Season#Benefits|Dragon Lover]]`
	]
)
