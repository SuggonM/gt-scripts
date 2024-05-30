import { Season, Chain, Event, Option } from './season-prototype.mjs';

Season (`Greenhouse`)

Chain (`Benefit`, `Chain`)
Event (
	`Cliff`,
	`Oh no! An Innuit is about to fall from a high cliff!`
)
Option (
	`Climb up to the rescue.`,
	`You climb with all your might, but it's too late. The Innuit falls and is nowhere to be seen. You'll have to go and search a bit more.`,
	`Chain event unlocked.`,
	`Unlocks #[Stolen Artwork]`
)
Option (
	`Catch the falling Innuit.`,
	`You envision a cool scene of you catching the Innuit and jump below, but end up falling from the unexpectedly fast falling speed instead. The Innuit apologizes repeatedly and leaves the scene.`,
	[
		`1 random Hero take damage`,
		`Chain event unlocked.`
	],
	[
		`1 random Hero takes damage by 20% of their own max HP.`,
		`Unlocks #[Stolen Artwork]`
	]
)
Option (
	`Stand by and watch.`,
	`It was as you expected. The Innuit's thick clothes braced her fall despite falling from a cliff. She must be slightly embarrassed and leaves the scene after dusting herself off.`,
	`Chain event unlocked.`,
	`Unlocks #[Stolen Artwork]`
)

Event (
	`Stolen Artwork`,
	`You find the Innuit who fell from the cliff. She introduces herself as Nodin's granddaughter and explains how she got into that accident while frantically looking for her stolen artwork.`
)
Option (
	`Ask about the artwork.`,
	`She explains how she made a wooden sculpture after hearing about the rumor of high quality wood growing abundantly in Kama-Zone. Mysterious little wooden golems stole it from her.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +50`,
		`Unlocks #[Wooden Cutiepie]`
	]
)
Option (
	`Ask about her athletic abilities.`,
	`The Innuit seems to be embarrassed and blushes. She hands you bottle caps and asks you to help her find her statue. She tells you mysterious little wooden golems appeared and stole it from her.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +50`,
		`Unlocks #[Wooden Cutiepie]`
	]
)

Event (
	`Wooden Cutiepie`,
	`A small wooden golem skips out from a luxury goods shop with a high-end bag. It must be the thieving little golem the Innuit told you about.`
)
Option (
	`Apprehend the golem.`,
	`When you try to take the high-end bag from the wooden golem, an employee from the shop stops you. The employee claims to have lent the bag to the golem. It sheepishly takes back the bag and skips away.`,
	`Chain event unlocked.`,
	`Unlocks #[The Wooden Lady]`
)
Option (
	`Check out the luxury goods shop.`,
	`There seems to be no issues with the luxury goods shop. The employee claims to have lent the bag to the golem when you ask about it. The employee says the wooden golem is full of charm and became the local cutiepie.`,
	`Chain event unlocked.`,
	`Unlocks #[The Wooden Lady]`
)

Event (
	`The Wooden Lady`,
	`You tailed the wooden golem who left the luxury goods shop. The golem looks around before walking into a narrow alleyway.`
)
Option (
	`Follow the golem.`,
	`Eureka! You find the small wooden golems surrounding a wooden sculpture of Yuze. You have to return the wooden sculpture to the rightful owner, but will have to punish these golems first.`,
	[
		`Start battle`,
		`Benefit unlocked.`,
		`Chain event unlocked.`
	],
	[
		`Starts Normal Battle '''(Wooden Baby Golem)'''`,
		`Unlocks Benefit [[Greenhouse Season#Benefits|Basic Seduction]]`,
		`Unlocks #[The Alchemist and Sculptor]`
	]
)
Option (
	`Come back later.`,
	`Now is not the time. You wait for the next opportunity.`,
	`Nothing happened.`
)

Event (
	`The Alchemist and Sculptor`,
	`You return the Innuit's sculpture. She's grateful. It's a mystery why the golems are lingering in Kama-ZONE, but a rumor about a skilled alchemist creating the golems put her on the verge of giving up.`,
	`Chain`
)
Option (
	`Claim the reward.`,
	`The sculpture, golems, it doesn't matter. The Innuit expressed her gratitude. What matters is that you solved another case today.`,
	[
		`Acquire 1 random {{Color|high|High-grade}} Artifact`,
		`Chain event unlocked.`
	],
	`Unlocks #[Attack of the Wooden Golems]`
)
Option (
	`Tell her to return safely.`,
	`You tell the Innuit to go back before she gets her sculpture taken away again. She gives you a gift as an expression of her gratitude and leaves.`,
	[
		`Acquire 1 random {{Color|high|High-grade}} Artifact`,
		`Chain event unlocked.`
	],
	`Unlocks #[Attack of the Wooden Golems]`
)

Event (
	`Attack of the Wooden Golems`,
	`The wooden golems are invading. They must think you still have the wooden sculpture of Yuze, and start to threaten you as if they're knights rescuing a princess.`,
	`Chain`
)
Option (
	`Fight back.`,
	`It's unsure who they take after, but they're sorely mistaken. It's time to teach these baby golems a lesson.`,
	`Start battle`,
	`Starts Normal Battle '''(Wooden Baby Golem)'''`,
)


Chain (`Artifact`, `Chain`)
Event (
	`A Romantic Gift for a Lover`,
	`You meet a man with a face full of anxiety. He's been preparing a gift for his lover, but is having trouble finding a humidifier. Now he's in an awkward position.`
)
Option (
	`Give him the humidifier.`,
	`You hand the object the man's been looking for. He jumps in joy and expresses his gratitude.`,
	[
		`Lose A[Low|Unlimited Stream Humidifier]`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[An Invitation]`
	],
	`A[Low|Unlimited Stream Humidifier]`
)
Option (
	`Ignore him.`,
	`A rough journey towards love is what makes the fruits of love sweeter. It seems this one's still an amateur.`,
	`result`
)

Event (
	`An Invitation`,
	`You've received an invitation. It's from the man you helped in getting a gift. The love between the man and his lover deepened thanks to your help, and he wants you to bear witness to their eternal vow of love.`
)
Option (
	`Accept.`,
	`It's exciting and rewarding that the fruits of love between two people finally came to be! Let's hope the wedding has a buffet for the guests!`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Becoming One]`
	]
)
Option (
	`Tear up the invitation.`,
	`You didn't think your small actions would cause such an unwelcome situation. You scream 'death for couples, long live singles' while tearing up the invitation.`,
	`Nothing happened.`
)

Event (
	`Becoming One`,
	`You arrive at the location written on the invitation. You witness an overgrown Man-Eater and the man. The man is sweetly calling the Man-Eater Audria as he places his head inside the giant mouth.`
)
Option (
	`Rescue him.`,
	`You throw your entire body towards the man in an attempt to pull him out from the monster's mouth, but you're too late. Audria swallows the man whole and all you can do is watch while being stunned.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Love Changes.]`
	]
)
Option (
	`Leave him be.`,
	`It seems nothing can stop the love between these two. The man screams happily and becomes one with Audria, and you cry emotional tears while watching the scene.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Love Changes.]`
	]
)

Event (
	`Love Changes.`,
	`You visit the spot where Audria is again. The Man-Eater seems to be in rough shape since there's no one to take care of her after the man disappeared. For some reason her wilting flower petals look beautiful.`
)
Option (
	`Take her with you.`,
	`You used the Steel Bone Wings to carefully move Audria. As Audria wraps her vines gently around you, you're overcome by happiness. It's time to start looking for something to feed your hungry darling.`,
	[
		`Lose A[Low|Steel Bone Wings]`,
		`Acquire A[Special|Audria]`,
		`Chain event complete.`
	],
	[],
	`A[Low|Steel Bone Wings]`
)
Option (
	`Leave.`,
	`You shake your head violently and come back to your senses. The thing in front of your eyes is a horrible monster that ate a person. You become frightened and rush to leave the scene.`,
	`Chain event complete.`
)
Option (
	`Take her down.`,
	`You realize Audria has the power to charm people and take her down to prevent further casualties. From Audria's split stem, you find an undigested artifact.`,
	[
		`All Heroes take damage`,
		`Acquire 1 random {{Color|high|High-grade}} Artifact`,
		`Chain event complete.`
	],
	`All Heroes take damage by 30% of their own max HP.`
)


Chain (`Artifact`, `Chain`)
Event (
	`Herb Collecting.`,
	`You find Favi searching around for something. When you call him over he jumps in surprise. When you ask him what he's doing, he quietly answers he's looking for a magic enhancing herb.`
)
Option (
	`Look for the herb together.`,
	`You pull Favi, who's waving his hands in refusal, and start looking for the herb. By working together, you two collect a bunch of herbs and split the haul.`,
	[
		`Acquire A[Low|Mandrake]`,
		`Chain event unlocked.`
	],
	`Unlocks #[Growth Spell Research]`
)
Option (
	`Cheer him on.`,
	`Favi sees you cheering him on and quietly mutters to himself he did the wrong thing, but you don't pay any attention.`,
	`Nothing happened.`
)

Event (
	`Growth Spell Research`,
	`You find Favi struggling and reading a book. When you ask him what he's doing, he says he's conducting an experiment to enhance the effects of the herbs he found from before.`
)
Option (
	`Think about it together.`,
	`You think deep and hard but a solution doesn't come to mind. Favi says he didn't expect much, but thanks you anyways. He'll read through the book by himself.`,
	`Nothing happened.`
)
Option (
	`Pour the energy drink.`,
	`You shove the flabbergasted Favi to the side and pour the energy drink. The mandrake grows rapidly! The effects were definitely enhanced, but Favi says it's not what he expected and hands the herb to you.`,
	[
		`Lose A[Low|Energy Drink]`,
		`Acquire A[High|Mandrake of Dawn]`,
		`Chain event unlocked.`
	],
	`Unlocks #[Unspeakable Spell]`,
	`A[Low|Energy Drink]`
)

Event (
	`Unspeakable Spell`,
	`You find Favi shaking in fear. When you ask him what's wrong, he claims to have read an unspeakable thing while searching for a way to enhance the herb's effects.`
)
Option (
	`Calm him down.`,
	`When you comfort Favi and tell him not to worry, he becomes calm. However, he tells you the spell cannot be spoken about for your sake.`,
	`Nothing happened.`
)
Option (
	`Tell him to speak up.`,
	`The moment Favi caves in to your prying and opens his mouth, Lavi appears. She says she has a sparring appointment with Favi and takes him away. You pick up the book he dropped but it's illegible.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Forbidden Growth Spell]`
	]
)

Event (
	`Forbidden Growth Spell`,
	`You show the book Favi dropped to the professor of the Magic School on the street. The professor reads the book and urges you to start the experiment excitedly.`
)
Option (
	`Grow the mandrake.`,
	[
		`You witness a horrific scene of a powered up mandrake through a spell taking its prey. There's no choice but to justify that an unlucky companion ended up as a source of nutrition for the mandrake.`,
		`As the professor chants the incantation, a dandelion seed flies into the professor's nose. The tickling causes the professor to stop chanting and sneeze. The mandrake screams dreadfully and shrivels up.`
	],
	[
		`Lose A[Low|Mandrake], Acquire A[Special|Mandrake of Twilight], 1 random Hero take damage`,
		`Lose A[Low|Mandrake], Chain event complete.`
	],
	[
		[
			`1 random Hero faints.`
		],
		[
			`Triggered if the player already has a A[Special|Mandrake of Twilight].`
		]
	],
	`A[Low|Mandrake]`
)
Option (
	`Make a potion from the mandrake.`,
	`The professor excitedly boils the mandrake. The mandrake had to be thrown back into the boiling pot when it attempted to flee multiple times, but in the end you obtain an effective potion.`,
	[
		`Lose A[Low|Mandrake]`,
		`Recover all Heroes' HP`,
		`Chain event complete.`
	],
	`All Heroes recover 100% of their own max HP.`,
	`A[Low|Mandrake]`
)
Option (
	`Leave.`,
	`You feel disgusted and leave.`,
	`Chain event complete.{{cite|"Nothing happened." or "Chain event complete."?}}`
)


Chain (`Benefit`, `Chain`)
Event (
	`Horrific Habitat`,
	`Your colleagues call for a break. A break will surely help, but there are full of weird flowers all around. It almost feels as if you're being watched.`
)
Option (
	`Camp.`,
	`A new day awaits you after a good night's sleep. But you also notice that an abomination also awaits you. It's a plant that almost resembles a human, no… you.`,
	[
		`Recover all Heroes' HP`,
		`Chain event unlocked.`
	],
	[
		`All Heroes recover 50% of their own max HP.`,
		`Unlocks #[The Flowering Trees' identity]`
	]
)
Option (
	`Push through.`,
	`It's horrifying. You can't sleep at a place like this. But your colleagues are furious not getting their sweet break.`,
	`Acquire A[Curse|Wailing Box] curse`
)

Event (
	`The Flowering Trees' identity`,
	`The plant human, or human plant you met at the campsite keeps following you.`
)
Option (
	`Defeat it.`,
	`It looks hideous. As you show aggression, the beast flees.`,
	`Nothing happened.`
)
Option (
	`Try talking to it.`,
	`You think it could be communicated with. But it doesn't response to any of your speech. You do get a feeling that it is listening to you quite attentively.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[An Offer from DaVinci]`
	]
)
Option (
	`Shoo it away.`,
	`You shoo the thing away. Though it is not sure the plant understood. You just hurry and go on your way.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[An Offer from DaVinci]`
	]
)

Event (
	`An Offer from DaVinci`,
	`It's Doctor DaVinci. He shows interest in the human plant following you for his research. You learn that these things are called Dopplants in academia.`
)
Option (
	`Send it away.`,
	`You were looking for this opportunity. But as you push the thing away to DaVinci, it wails sadly and runs away.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Dopplant]`
	]
)
Option (
	`Don't send it.`,
	`You thought it was creepy at first sight, but you admit it grew on you. It feels wrong to send it away to DaVinci. You decide to take the thing with you.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Dopplant]`
	]
)

Event (
	`Dopplant`,
	`As you take a corner in a steep corridor a rider jumps at you. It will be a disaster if you don't move fast!`
)
Option (
	`Roll to the side.`,
	`You roll to the side and avoid the accident, but you almost fall down to a pit. Thankfully your Dopplant appears and saves you. It seems you have a new friend in Kama-ZONE.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	`Unlocks Benefit [[Greenhouse Season#Benefits|Dopplant]]`
)
Option (
	`Roll forward.`,
	`You roll forward, with no good reason, but surprisingly you're intact. It's the Dopplant! Somehow it jumped in between you and the rider, shielding you with its body. It seems you have a new friend in Kama-ZONE.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	`Unlocks Benefit [[Greenhouse Season#Benefits|Dopplant]]`
)


Chain (`Benefit`, `Chain`)
Event (
	`Where is My Love`,
	`The succubus researcher Peggy approaches you with a broken heart. She lost her huge seed package for research. Peggy asks whether you have a member who can help her find the missing package.`
)
Option (
	`Scientist Sohee`,
	`You push Sohee's back, who is scolding you that it's a bad habit of yours to come to her first whenever something is up. Peggy shares some bottle caps to thank you.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +30`,
		`Unlocks #[Intelligent Investigator]`
	],
	`Hero Scientist Sohee`
)
Option (
	`Leaf Fairy Aoba`,
	`You decide it's a good idea to let the leaf fairy solve the seed problem. Peggy shares some bottle caps to thank you.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +30`,
		`Skips to #[Lazy Investigator]`
	],
	`Hero Leaf Fairy Aoba`
)
Option (
	`Swordsman Akayuki`,
	`A trustworthy member like Akayuki is crucial when looking for something in a harsh place like Kama-ZONE. Peggy shares some bottle caps to thank you.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +30`,
		`Unlocks #[Strong Investigator]`
	],
	`Hero Swordsman Akayuki`
)

Event (
	`New Investigator`,
	`Peggy, all exhausted, comes up to you. Probably it was hard to find the seed package with the member you recommended. You think maybe Aoba is the best option.`
)
Option (
	`Ask Aoba for help.`,
	`It's probably best to let the leaf fairy solve plant issues.`,
	`Chain event unlocked.`,
	`Unlocks #[Lazy Investigator]`,
	`Hero Leaf Fairy Aoba`
)
Option (
	`Promise you will help next time.`,
	`Unfortunately, this is not the time to help Peggy. You promise to help her next time, and she says she'll be looking for it herself until then.`,
	`Nothing happened.`
)

Event (
	`Lazy Investigator`,
	`You find Aoba asleep in her cozy pose and Peggy flustering beside her. It seems Aoba isn't helping at all. Time for you to intervene.`
)
Option (
	`Get her newest release of comics.`,
	`You get the newest release of comics from Kama-ZONE's bookstore, and Aoba gets up as if she has no other choice. Aoba finds traces of the seed with ease.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -50`,
		`Unlocks #[Seed Whereabouts]`
	],
	`More than 50 silver coins`
)
Option (
	`Force her up.`,
	`Forcing Aoba up was harder than you thought. You and your members consumed a lot of energy, but at least Aoba finds traces of the seed with ease.`,
	[
		`All Heroes take damage`,
		`Chain event unlocked.`
	],
	[
		`All Heroes take damage by 10% of their own max HP.`,
		`Unlocks #[Seed Whereabouts]`
	]
)

Event (
	`Seed Whereabouts`,
	`At the end of the trace Aoba told you, you find a damaged drone. It's holding a ripped package in its claw.`
)
Option (
	`Pick up the drone.`,
	`As you expected. The drone was holding Peggy's seed package. Apparently, the damaged drone was spreading the seeds all over Kama-ZONE.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +50`,
		`Unlocks #[Peggy's New Research]`
	]
)

Event (
	`Peggy's New Research`,
	`Peggy approaches with a damaged drone. Although she lost the seed package, she gets all excited claiming drones in KAMA-zone are like living beings. Peggy suggests you pet the drone.`
)
Option (
	`Pet its head.`,
	`As you pet the drone's head, the drone starts to shake as if it feels good and flashes light at a certain place. You spot an artifact in that place.`,
	[
		`Acquire 1 random {{Color|low|Low-grade}} Artifact, {{Color|mid|Mid-grade}} Artifact, {{Color|high|High-grade}} Artifact{{cite}}`,
		`Chain event unlocked.`
	],
	`Unlocks #[Peggy's Continued Research]`
)
Option (
	`Pet its stomach.`,
	`As you pet the drone's stomach, the drone starts to shake as if it feels bloated. Suddenly, the drone spits out silver coins.`,
	[
		`Acquire silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +80`,
		`Unlocks #[Peggy's Continued Research]`
	]
)

Event (
	`Peggy's Continued Research`,
	`Peggy approaches with a damaged drone. She must have learned quite a bit about the broken drones, and asks you to pet the drone.`
)
Option (
	`Pet its head.`,
	`You pet the drone on the head. As you pet the drone, you see a special triangle pattern engraved on the tail. Regardless, you find an artifact from the drone's light.`,
	[
		`Acquire 1 random {{Color|low|Low-grade}} Artifact, {{Color|mid|Mid-grade}} Artifact, {{Color|high|High-grade}} Artifact{{cite}}`,
		`Chain event unlocked.`
	],
	`Unlocks #[Peggy's Drawn Out Research]`
)
Option (
	`Pet its stomach.`,
	`You pet the drone's stomach. As you pet the drone, you see a special triangle pattern engraved on the tail. Regardless, the drone must be feeling bloated and spits up silver coins.`,
	[
		`Acquire silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +80`,
		`Unlocks #[Peggy's Drawn Out Research]`
	]
)

Event (
	`Peggy's Drawn Out Research`,
	`You meet with Peggy and the drones again. There's probably nothing new to learn anymore, but she asks you to pet the drone again.`
)
Option (
	`Pet its head.`,
	`You pet the drone on the head. As you pet the drone, you see a special triangle pattern engraved on the tail. Regardless, the drone seems to be in a good mood again and shines its light. You find an artifact.`,
	`Acquire 1 random {{Color|low|Low-grade}} Artifact, {{Color|mid|Mid-grade}} Artifact, {{Color|high|High-grade}} Artifact{{cite|chain event complete too?}}`
)
Option (
	`Pet its stomach.`,
	`You pet the drone's stomach. As you pet the drone, you see a special triangle pattern engraved on the tail. Regardless, the drone must be feeling bloated and spits up silver coins.`,
	`Acquire silver coins{{cite|chain event complete too?}}`,
	`{{Icon/Currency|SilverCoin}} Silver coins +80`
)
Option (
	`Pet its tail.`,
	`As you pet the drone's engraved triangle pattern, it emits light from its entire body. Then it falls to the ground as if it's been powered off. Peggy is shocked and hugs it. You must have touched it in an inappropriate spot.`,
	`Chain event unlocked.`,
	`Unlocks #[Familiar Corridor]`
)

Event (
	`Familiar Corridor`,
	`As you walk down a familiar corridor, you find the same triangular pattern engraved on the damaged drone's tail. The pattern's always been there, but you just never paid attention to it until now.`
)
Option (
	`Stroke the pattern.`,
	`As you stroke the pattern, a wall opens up like a door and leads to a shop you've never seen before. You memorize the location of this secretive place.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[A Secret Shop]`
	]
)
Option (
	`Ignore it.`,
	`It's not a strange occurrence that a pattern on a drone is also inside a building, both made in Kamazon. You continue on your way.`,
	`Nothing happened.`
)

Event (
	`A Secret Shop`,
	`You entered the secret shop hidden behind a wall in the corridor again. There's definitely a trace of someone coming in and out, but luckily it seems they're absent right now.`
)
Option (
	`Check the counter.`,
	`As expected, there are a bunch of silver coins stored within the counter. However, the surprising thing was the space behind it. There's a pile of damaged drones as if someone's been collecting them. You get an ominous feeling and leave.`,
	[
		`Acquire silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +120`,
		`Unlocks #[The Elf's Warning]`
	]
)
Option (
	`Check the shelf.`,
	`As expected, there's a good artifact stored on it. However, the surprising thing was the space under it. There's a pile of damaged drones as if someone's been collecting them. You get an ominous feeling and leave.`,
	[
		`Acquire 1 random {{Color|low|Low-grade}} Artifact, {{Color|mid|Mid-grade}} Artifact, {{Color|high|High-grade}} Artifact{{cite}}`,
		`Chain event unlocked.`
	],
	`Unlocks #[The Elf's Warning]`
)

Event (
	`The Elf's Warning`,
	`When you enter the hidden shop behind the corridor wall, an elf meets you. Seems like you've been expected to arrive. An elf points a notched bow at you and asks your purpose and how much you know.`
)
Option (
	`Attempt to negotiate.`,
	`When you attempt to ease the elf's anger through words, the elf makes a disappointed face and sends you back outside. The elf warns you to never return again.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +50`,
		`Unlocks Benefit [[Greenhouse Season#Benefits|Moss Armor]]`
	]
)
Option (
	`Explain your innocence.`,
	`When you say you're only here out of curiosity, the elf makes an annoyed face and sends you back outside quietly. The elf warns you to never return again.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +50`,
		`Unlocks Benefit [[Greenhouse Season#Benefits|Moss Armor]]`
	]
)
Option (
	`Attempt to flee.`,
	`When you start running, the elf fires a warning shot. The elf shouts at your back to never return again.`,
	[
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +50`,
		`Unlocks Benefit [[Greenhouse Season#Benefits|Moss Armor]]`
	]
)


Chain (`Benefit`, `Chain`)
Event (
	`Intelligent Investigator`,
	`Peggy approaches you with Sohee. Sohee has not been any help in finding the seed package. Sohee says she won't help without the right price.`
)
Option (
	`Support the research fund.`,
	`Sohee accepts the research fund but has no intention to help. She says that she did say that she will not help without the right price, but she never said that she would work with the right price.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -50`,
		`Unlocks #[New Investigator]`
	],
	`More than 50 silver coins`
)
Option (
	`Support with human resources.`,
	`Sohee gets all excited, saying that she's been in need of subjects to do some new experiments. You know for sure that her experiments are not going to end safely.`,
	[
		`1 random Hero take damage`,
		`Chain event unlocked.`
	],
	[
		"1 random Hero takes damage by 30% of their own max HP.",
		`Unlocks #[New Investigator]`
	]
)


Chain (`Benefit`, `Chain`)
Event (
	`Strong Investigator`,
	`You hear a loud noise somewhere, and there's Akayuki knocking down monsters. Akayuki claims that it's her way of finding the seed thief to fight every single soul she encounters in Kama-ZONE. Now she wants to see if you're the seed thief by dueling you.`
)
Option (
	`Accept the duel.`,
	`Facing off Akayuki was not easy. Your member is significantly hurt, managed to put down Akayuki. Akayuki seems satisfied but Peggy doesn't approve of this situation.`,
	[
		`1 random Hero take damage`,
		`Chain event unlocked.`
	],
	[
		"1 random Hero takes damage by 50% of their own max HP.",
		`Unlocks #[New Investigator]`
	]
)
Option (
	`Decline the duel.`,
	`Akayuki criticizes you for being scared. You pretend that you are nonchalant, but it does hurt your ego. You cheer yourself by buying ice cream.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -30`,
		`Unlocks #[New Investigator]`
	]
)


Chain ()
Event (
	`Bizzare Flower Garden`,
	`You end up in a beautiful flower garden.<br>The sign says you can pick any one flower.`
)
Option (
	`Pick the invigorating flower.`,
	`As you pick the flower, your wounds start to heal.`,
	`Recover all Heroes' HP`,
	`All Heroes recover 50% of their own max HP.`
)
Option (
	`Pick the rejuvenating flower.`,
	`As you pick the flower, your fainted members come back to life.`,
	`Revive 1 random Hero(es)`
)
Option (
	`Pick the prosperous flower.`,
	`As you pick the flower, a bunch of silver coins blossoms inside your arms.`,
	`Acquire silver coins`,
	`{{Icon/Currency|SilverCoin}} Silver coins +80`
)
Option (
	`Pick all of them.`,
	`Maybe you were too greedy. As you pick all three flowers, flowers start to scream then all wither. You feel shiver all over your body.`,
	[
		`Lose random artifact`,
		`Acquire 1 random A[Curse|Pie From Hell], A[Curse|Ugly Boots], A[Curse|Someone's Yearbook], A[Curse|Wailing Box]`
	]
)


Chain ()
Event (
	`Green Growth`,
	`You discover an ancient gardening book. According to the book, the ancients have grown plants in unthinkable ways. Very suspicious but worth a try.`
)
Option (
	`Turn on classical music.`,
	`What?! Predation Flower is…?<br>Congratulations! Predation Flower grew into Flower from Hell!`,
	[
		`Lose A[Low|Predation Flower]`,
		`Acquire A[High|Flower from Hell]`
	],
	[],
	`A[Low|Predation Flower]`
)
Option (
	`Turn on heavy metal.`,
	`What?! Predation Flower is…?<br>Congratulations! Predation Flower grew into Man-Eater!`,
	[
		`Lose A[Low|Predation Flower]`,
		`Acquire A[High|Man-Eater]`
	],
	[],
	`A[Low|Predation Flower]`
)
Option (
	`Sing it yourself.`,
	`What?! Predation Flower is…?<br>Well, nothing happened.`,
	`Nothing happened.`,
	[],
	`A[Low|Predation Flower]`
)
Option (
	`Do nothing.`,
	`Thinking that the plant might not want to grow, you go on your way.`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
	`Giant Tree`,
	`A giant tree that grew up through the ceiling is blocking your path.`
)
Option (
	`Climb up the trunk.`,
	`You discover a hidden treasure chest on the top of the tree. You happily collect silver coins from the chest and get down.`,
	[
		`Acquire silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +100`,
		`Unlocks #[Jerk and the Giant Tree]`
	]
)
Option (
	`Go around the tree.`,
	`Took you a while but you are back on track.`,
	`Nothing happened.`
)
Option (
	`Cut down the tree.`,
	`You are successfully cut down the tree. However, the tree falls in your direction and you hurt yourself a bit.`,
	[
		`All Heroes take damage`,
		`Chain event complete.{{cite|probably...}}`
	],
	`All Heroes take damage by 20% of their own max HP.`
)

Event (
	`Jerk and the Giant Tree`,
	`An orge comes out of nowhere and starts to taunt you. He is furious that you stole the treasure hidden in the tree.`
)
Option (
	`Pretend you know nothing.`,
	`When you pretend you know nothing, orge becomes enraged and rallies nearby monsters. No one knows why the monsters are helping the orge, but they'll figure out it was a bad idea once you teach them a lesson.`,
	[
		`Start battle`,
		`Chain event complete.`
	],
	`Starts Elite Battle`
)
Option (
	`Give back the treasure.`,
	`You return the silver coins but the orge is not satisfied. After paying him the whole amount of principal and interest the orge lets you leave.`,
	[
		`Lose silver coins`,
		`Chain event complete.`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -120`
)
