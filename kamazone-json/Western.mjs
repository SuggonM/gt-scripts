import { Season, Chain, Event, Option } from './season-prototype.mjs';

Season (`Western`)

Chain (`Benefit`, `Chain`)

Event (
	`Suffering People`,
	`The staff of Kama-ZONE are in a group and conversing with a serious look on their faces. This is an unprecedented event.`
)
Option (
	`Ask what's going one`,
	`The staff starts talking about the suffering they got from the recently emerged outlaws' bullying. It's time for the Guardian to take action.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Outlaws]`
	]
)
Option (
	`Go back.`,
	`The conversation is painfully obvious. It's probably just some trivial gossip. There's no need to waste your time.`,
	`Nothing happened.`
)

Event (
	`Outlaws`,
	`A rough-looking crowd comes over looking for trouble. They seem to be the ones who bullied the staff.`
)
Option (
	`Teach them a lesson.`,
	`These types are like weeds and won't die down after one or two tramplings, but you do what should be done.`,
	`Start battle`,
	`Starts Normal Battle '''(Outlaw Desert Elf)'''`
)
Option (
	`Lower their resolve to fight.`,
	`You lower the outlaws' resolve to fight with your god-like shooting skills. What are the security androids of Kama-ZONE been doing while they run wild?`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Systems Down]`
	],
	`A[High|Peacemaker]`
)

Event (
	`Systems Down`,
	`You find the shut down security androids of Kama-ZONE.`
)
Option (
	`Investigate.`,
	`You find out the security android's have all been turned off. There's no sign of physical damage, so they must have lost their functionalities for other reasons. You head to the security center to find clues.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Dereliction of Duty]`
	]
)

Event (
	`Dereliction of Duty`,
	`You head to Kama-ZONE's security center and meet with the chief of security.`
)
Option (
	`Ask for an explanation.`,
	`The security chief only gives different excuses. There's a bounty on the outlaws, and the chief suggests inquiring about them at the bounty office and dealing with the outlaws yourself.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Dead or Alive 1]`
	]
)

Event (
	`Dead or Alive 1`,
	`You arrive at the bounty office. You can inquire about bounty hunting as the security chief said.`
)
Option (
	`Check bounties.`,
	`You accept a wanted poster from the android. The person on it seems to be a weak target.`,
	[
		`Special Boss`,
		`Chain event complete.`
	],
	`A powerful boss awaits you at the end of this challenge.`
)
Option (
	`Receive bounties.`,
	`You receive your bounty for bringing justice. It's not a hefty sum, but it's proof of your efforts towards rectifying justice.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`Unlocks #[Dead or Alive 2]`
	],
	`[Defeat Atrociously Evil Goblin Chief]`
)
Option (
	`Leave.`,
	`Taking down outlaws is important too, but there are other pressing matters. You walk away.`,
	`Nothing happened.`
)

Event (
	`Dead or Alive 2`,
	`You arrive at the bounty office. There are 3 outlaws left.`
)
Option (
	`Check bounties.`,
	`You receive the wanted poster from the android. For some reason, the person on it seems extremely angry.`,
	[
		`Special Boss`,
		`Chain event complete.`
	],
	`A powerful boss awaits you at the end of this challenge.`
)
Option (
	`Receive bounties.`,
	`You receive your bounty for bringing justice. The shining bottle caps praise your hard work.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +150`,
		`Unlocks #[Commission Collection]`
	],
	`[Defeat Train Robber Minotaur]`
)
Option (
	`Leave.`,
	`Taking down outlaws is important too, but there are other pressing matters. You walk away.`,
	`Nothing happened.`
)

Event (
	`Commission Collection`,
	`You meet with the security chief who had been waiting for you and the bounty office. The security chief demands a commission from the bounties you received.`
)
Option (
	`Refuse.`,
	`You swiftly refuse the greedy security chief's request. The security chief threatens you with cutting off further bounty inquiries if you don't pay up.`,
	`Nothing happened.`
)
Option (
	`Pay the commission.`,
	`You're mad but pay the commission. The sight of the security chief smiling as he receives the sack of silver coins makes you angry, but you hold back for Kama-ZONE's peace.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -300`,
		`Unlocks #[Dead or Alive 3]`
	],
	`More than 100 silver coins`
)

Event (
	`Dead or Alive 3`,
	`You arrive at the bounty office. There are 2 outlaws left.`
)
Option (
	`Check bounties.`,
	`You receive the wanted poster from the android. The person on it seems willing to do anything for money.`,
	[
		`Special Boss`,
		`Chain event complete.`
	],
	`A powerful boss awaits you at the end of this challenge.`
)
Option (
	`Receive bounties.`,
	`You receive your bounty for bringing justice. However, your righteousness itself is more valuable than this bounty.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +200`,
		`Unlocks #[Dead or Alive 4]`
	],
	`[Defeat Mad Panda Bandits]`
)
Option (
	`Leave.`,
	`Taking down outlaws is important too, but there are other pressing matters. You walk away.`,
	`Nothing happened.`
)

Event (
	`Dead or Alive 4`,
	`You visit the bounty office for the final bounty.`
)
Option (
	`Check bounties.`,
	`You receive the wanted poster from the android. Oh dear, this one is awfully ugly.`,
	[
		`Special Boss`,
		`Chain event complete.`
	],
	`A powerful boss awaits you at the end of this challenge.`
)
Option (
	`Receive bounties.`,
	`You receive the bounty for bringing justice. All outlaws causing trouble in Kama-ZONE have been arrested. Everyone will express their gratitude!`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +250`,
		`Unlocks #[Sheriff of Kama-ZONE]`
	],
	`[Defeat Butcher Viper Clan Leader]`
)
Option (
	`Leave.`,
	`Taking down outlaws is important too, but there are other pressing matters. You walk away.`,
	`Nothing happened.`
)

Event (
	`Sheriff of Kama-ZONE`,
	`For your services of driving out the outlaws from Kama-ZONE, the staff nominates you as the sheriff of Kama-ZONE!`
)
Option (
	`Give a speech.`,
	`You give a speech about doing what needed to be done. You put on your badge while being applauded by the people.`,
	[
		`Acquire A[High|Sheriff's Badge]`,
		`Benefit unlocked.`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`Unlocks Benefit [[Western Season#Benefits|Sheriff]]`,
		`Unlocks #[Gesture of Reconciliation], #[The Security Chief's Office], #[Dead or Alive: Survivor] and #[High Noon]{{cite|not exactly sure which event this one is unlocked from. Though the High Noon description ''does'' mention "avenging their boss"}}`
	]
)


Chain (`Chain`)
Event (
	`Gesture of Reconciliation`,
	`The security chief invites you over. He wants to apologize for all the mean things he's done and offers a toast of reconciliation.`
)
Option (
	`Accept the apology.`,
	`It's a trap! While you're drunk on sparkling barley tea, the security chief attacks you. You're caught off guard and don't even get a chance to retaliate.`,
	[
		`1 random Hero take damage`,
		`1 random Hero take damage`,
		`Chain event unlocked.`
	],
	[
		`Unlocked from #[Sheriff of Kama-ZONE#Give a speech.]`,
		`2 random Heroes faint.`,
		`Unlocks #[The Revenant]`
	]
)
Option (
	`Refuse.`,
	`Reconciliation is not possible at this point. You ignore the underhanded coward and leave.`,
	`Nothing happened.`
)

Event (
	`The Revenant`,
	`You wake up at a strange place. Your entire body aches from wounds during the ambush.`
)
Option (
	`Stand up.`,
	`You pull your weary body up and take a slow, deep breath. A cold fury fills your heart. It's time for revenge.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[The Unforgivable]`
	]
)

Event (
	`The Unforgivable`,
	`You go after the security chief for revenge. His face turns pale out of fear after seeing you return from the dead.`
)
Option (
	`Attack.`,
	`You and the security chief start a fierce gunfight with a table between each other. Soon, the security chief judges he's at a disadvantage and flees. You must chase after him!`,
	[
		`All Heroes take damage`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`All Heroes take damage by 20% of their own max HP.`,
		`Unlocks #[The Searcher]`
	]
)

Event (
	`The Searcher`,
	`You chase after the security chief! You're almost out of breath, but can't let him go like this.`
)
Option (
	`Chase after him.`,
	`You chase after the security chief, but end up losing him. Unlike his appearance, he's quite agile.`,
	`Nothing happened.`
)
Option (
	`Aim for the legs.`,
	`The bullet hits him square in the leg. He won't make it very far from being shot!`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Last Stop]`
	],
	`A[High|Peacemaker]`
)

Event (
	`Last Stop`,
	`You finally succeed in driving the security chief into a corner. He claims he only did as he was told and begs for his life while giving incomprehensible excuses.`
)
Option (
	`There's no mercy.`,
	`You don't have the slightest thought of forgiving him. The security chief looks like he instinctively felt his fate and attempts a final struggle. It's time to give him his eternal rest!`,
	[
		`Start battle`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +500`,
		`Starts Elite Battle '''(Security Chief)'''`,
		`Unlocks '''Outcome 2''' in #[The Security Chief's Office]`
	]
)
Option (
	`Let him go.`,
	`Vengeance only leads to more vengeance. You decide to cut the cycle of hate and let the security chief go. He bows repeatedly to express his gratitude and leaves into the sunset after giving you a key to his safe.`,
	`Chain event complete.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +500`,
		`Unlocks '''Outcome 2''' in #[The Security Chief's Office]`
	]
)


Chain (`Chain`)
Event (
	`The Security Chief's Office`,
	`As Kama-ZONE's sheriff, you visit your office. This was originally used by the security chief.`
)
Option (
	`Take the badge.`,
	`You take the marvelous sheriff's badge. Everyone will recognize you from far away unless they're blind.`,
	[
		`Acquire A[High|Sheriff's Badge]`,
		`Chain event complete.`
	]
)
Option (
	`Take the gun.`,
	`You fashionably place the dual pistols on your hip. Double the guns, double the bullets, and double the bounty!`,
	[
		`Acquire A[High|Peacemaker]`,
		`Acquire A[High|Peacemaker]`,
		`Chain event complete.`
	]
)
Option (
	`Take the clothes.`,
	`Formality is important. You take some clothing that will help maintain your class as a sheriff.`,
	[
		`Acquire A[High|Pursuiter's Glasses]`,
		`Acquire A[High|Outlaw's Facemask]`,
		`Chain event complete.`
	]
)
Option (
	`Open the safe.`,
	[
		`There's an obviously heavy and strong-looking lock on the safe. Without its key, it will be impossible to open the safe.`,
		`After you open the safe with the key from the security chief, there's a bag of silver coins and a suspicious note with a message. "How did you like my gift? Shut down the security androids when I give the signal."`
	],
	[
		`Nothing happened.`,
		`Acquire silver coins, Chain event complete.`
	],
	[
		[],
		[
			`{{Icon/Currency|SilverCoin}} Silver coins +300`,
			`Unlocked from #[Last Stop]`
		]
	]
)


Chain (`Chain`)
Event (
	`Dead or Alive: Survivor`,
	`It's news about fresh outlaws appearing in Kama-ZONE. It's time for the sheriff of Kama-ZONE to take action.`
)
Option (
	`Check bounties.`,
	`You receive the wanted poster from the android. You get a feeling the person on it is a master of schemes from his sharp mustache.`,
	[
		`Special Boss`,
		`Chain event complete.`
	],
	`A powerful boss awaits you at the end of this challenge.`
)
Option (
	`Receive bounties.`,
	`You receive your bounty for bringing justice.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +300`,
		`Unlocks #[Dead or Alive: Conqueror]`
	],
	`[Defeat Sheriff Hunter Gast]`
)
Option (
	`Leave.`,
	`Taking down outlaws is important too, but there are other pressing matters. You walk away.`,
	`Nothing happened.`
)

Event (
	`Dead or Alive: Conqueror`,
	`It's news about fresh outlaws appearing in Kama-ZONE. It's time for the sheriff of Kama-ZONE to take action.`
)
Option (
	`Check bounties.`,
	`You receive the wanted poster from the android. Sorry to say, but this one seems to be on fire.`,
	[
		`Special Boss`,
		`Chain event complete.`
	],
	`A powerful boss awaits you at the end of this challenge.`
)
Option (
	`Receive bounties.`,
	`You receive the bounty for bringing justice. Thanks to your efforts, things will be quiet within Kama-ZONE for a while.`,
	`Chain event complete.`,
	`{{Icon/Currency|BottleCap}} Bottle Caps +1000`,
	`[Defeat Wild Ancient Demon]`
)
Option (
	`Leave.`,
	`Taking down outlaws is important too, but there are other pressing matters. You walk away.`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
	`High Noon`,
	`The henchmen of the villain you took down, came to avenge their boss.`
)
Option (
	`Fight back.`,
	`You decide to give them a one-way train ticket. The destination is, of course, the underworld.`,
	`Start battle`,
	`Starts Elite Battle '''(Outlaw Desert Elf)'''`
)
Option (
	`Negotiate.`,
	`You attempt to have a calm conversation, but that won't work for some people. You're too soft and end up paying the price.`,
	[
		`Lose silver coins`,
		`All Heroes take damage`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -50`,
		`All Heroes take damage by 20% of their own max HP.`
	]
)
Option (
	`Negotiate.`,
	`Any intelligent being can have a conversation. Your cool friend did the talking for you, though. But you got an unexpected gift!`,
	`Acquire 1 random {{Color|high|High-grade}} Artifact`,
	``,
	`A[Special|Raining Justice]`
)
Option (
	`Play music.`,
	`As you start to perform the finale fitting for the villains' final moments, they all pee themselves and flee. You loot the things they left behind.`,
	`Acquire 1 random {{Color|high|High-grade}} Artifact`,
	``,
	`A[Special|Executioner's Noise Mouthpiece]`
)


Chain (`Chain`)
Event (
	`The Good, The Bad, and The Dumb`,
	`You witness a gruesome scene of violence towards the weak.`
)
Option (
	`Intervene.`,
	`The gunslinger praises your bravery for firmly stopping him, and requests a duel. You accept with a nod. It will be held at Kama-ZONE's lobby at high-noon.`,
	`Chain event unlocked.`,
	`Unlocks #[Gunfight at Kama-ZONE]`
)
Option (
	`Ignore.`,
	`The weak are destined to be trampled by the strong. It may be different elsewhere, but that's how it is in this place. You continue on your way.`,
	`Nothing happened.`
)

Event (
	`Gunfight at Kama-ZONE`,
	`Time to duel. Once the bell tolls for noon, you and the gunslinger will draw guns at each other. What's your plan for victory?`
)
Option (
	`Aim for the head.`,
	[
		`The bullet you aimed for the head missed, but ricochets off the wall and hits the gunslinger's heart. You expected this to happen, of course.`,
		`Your bullet misses, but unfortunately your opponent doesn't and hits you. You go limp and fall down.`
	],
	[
		`Acquire silver coins, Chain event complete.`,
		`1 random Hero take damage, Chain event complete.`
	],
	[
		[
			`{{Icon/Currency|SilverCoin}} Silver coins +100`
		],
		[
			`1 random Hero faints.`
		]
	]
)
Option (
	`Aim for the heart.`,
	[
		`The bullet misses your opponent's heart but ricochets off the wall and lands on the gunslinger's head. The bullet didn't miss, it just took a long way around.`,
		`Your bullet misses, but unfortunately your opponent doesn't and hits you. You go limp and fall down.`
	],
	[
		`Acquire silver coins, Chain event complete.`,
		`1 random Hero take damage, Chain event complete.`
	],
	[
		[
			`{{Icon/Currency|SilverCoin}} Silver coins +100`
		],
		[
			`1 random Hero faints.`
		]
	]
)
Option (
	`Roll the tumbleweed first.`,
	`Even a slime knows to roll a tumbleweed before a duel. The gunslinger's own ignorance took this one down.`,
	[
		`Acquire silver coins`,
		`Chain event complete.`
	],
	[
		`Acquire silver coins`,
		`{{Icon/Currency|SilverCoin}} Silver coins +200`
	],
	`A[Low|Tumbleweed]`
)
Option (
	`Give the signal.`,
	`Hekate sees your signal and snipes the gunslinger. If you consider something petty as fairness, then you won't last long in this field. You split the reward with Hekate and celebrate your victory.`,
	`Acquire silver coins`,
	`{{Icon/Currency|SilverCoin}} Silver coins +50`,
	`Hero Sniper Hekate`
)


Chain ()
Event (
	`They call me…`,
	`You visit a rundown saloon. You can see all the eyes of outlaws fall on you as the doors open. They shout and ask who you are.`
)
Option (
	`Kanterbury Guardian!`,
	`You proudly identified yourself, but all you got in return were taunts calling you a knight from a fallen kingdom. You leave the saloon feeling down.`,
	`Nothing happened.`
)
Option (
	`Filthy Dan`,
	`Everyone holding a grudge swarm towards you before you can finish speaking. You're overwhelmed and sustain a large injury.`,
	`All Heroes take damage`,
	`All Heroes take damage by 30% of their own max HP.`
)
Option (
	`Bonehead Larry`,
	`The outlaws have heard of your notoriety and offer a toast. You come back to your senses after drinking with them cheerfully, but it was too late when you realized your belongings were gone.`,
	`Lose random artifact`
)
Option (
	`Show them your badge.`,
	`You use your jurisdiction as a sheriff to arrest the outlaws and confiscate their equipment.`,
	[
		`Acquire 1 random A[High|Pursuiter's Glasses], A[High|Outlaw's Facemask], A[High|Heavy Firearms Case], A[High|Combat Pants of Pride], A[High|Peacemaker]`,
		`Acquire 1 random {{Color|low|Low-grade}} Artifact, {{Color|mid|Mid-grade}} Artifact, {{Color|high|High-grade}} Artifact`,
		`Chain event complete.`
	],
	``,
	`A[High|Sheriff's Badge]`
)


Chain (`Artifact`, `Chain`)
Event (
	`Dirge`,
	`You hear a bizarre sound coming from somewhere. It's hard to tell whether it's music or just some random noise.`
)
Option (
	`Follow the noise.`,
	`You get curious and follow the bizarre noise.`,
	`Chain event unlocked.`,
	`Unlocks #[The Warmth of the Dead]`
)
Option (
	`Ignore it.`,
	`It's probably the sound of a bull worm with a full stomach farting. You decide not to worry about it.`,
	`Nothing happened.`
)

Event (
	`The Warmth of the Dead`,
	`You find a man who's not moving a bit. Perhaps there was a snake in his boot? There's a shiny object inside his mouth.`
)
Option (
	`Take the object.`,
	`You take the somewhat cool object from his mouth, but you feel a bit uneasy about it.`,
	[
		`Acquire A[Special|Executioner's Noise Mouthpiece]`,
		`Acquire {{Color|curse|3 random}} curse(s)`,
		`Chain event complete.`
	]
)
Option (
	`Leave it be.`,
	`Judging by his horrific appearance, there must be a story behind him. It's no good getting involved, so you move on.`,
	`Chain event complete.`
)


Chain ()
Event (
	`Special Offer`,
	`You hear a whistle and see a merchant waving at you when you turn around. The merchant boasts and claims there's a lot of high-quality items for sale.`
)
Option (
	`Heavy Firearms Case`,
	`You purchase the heavy firearms case. With this, you think you can take down all the rabble in a single strike.`,
	[
		`Lose silver coins`,
		`Acquire A[High|Heavy Firearms Case]`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -300`,
	`More than 300 silver coins`
)
Option (
	`Combat Pants of Pride`,
	`You purchase the combat pants of pride. Wearing it gives you a confidence boost.`,
	[
		`Lose silver coins`,
		`Acquire A[High|Combat Pants of Pride]`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -300`,
	`More than 300 silver coins`
)
Option (
	`Say you don't need anything.`,
	`You firmly tell the merchant you're not buying anything. You won't see the merchant around for a while.`,
	`Chain event complete.`
)
Option (
	`Leave.`,
	`You don't feel the need to purchase any items and walk away.`,
	`Nothing happened.`
)


Chain (`Artifact`)
Event (
	`Super Discount`,
	`You hear a whistle and see a merchant waving at you when you turn around. The merchant claims to have obtained truly rare items and smiles triumphantly.`
)
Option (
	`Raining Justice`,
	`This artifact is Very, VERY LARGE! Now you are finally ready to make straight-up conversations with the outlaws.`,
	[
		`Lose silver coins`,
		`Acquire A[Special|Raining Justice]`,
		`Chain event complete.`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -1000`,
	`More than 1000 silver coins`
)
Option (
	`Leave.`,
	`You don't feel the need to buy the items and walk away. The merchant yells at you saying how there won't be another chance as you turn around.`,
	`Chain event complete.`
)


Chain (`Chain`)
Event (
	`Once Upon a Time in Kama-ZONE`,
	`An archaeologist stops you offering to tell an interesting tale.`
)
Option (
	`Listen to the tale.`,
	`You excitedly listen to the story about a faction of elves that used to live in this place but were chased off once Kama-ZONE started development. It's a shame there aren't any cookies and milk right now.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[The Elf and the Vending Machine]`
	]
)

Event (
	`The Elf and the Vending Machine`,
	`An elf you've never seen before is snooping around the vending machine. Does she need help?`
)
Option (
	`Get closer.`,
	`When you get closer, the elf hastily runs off. Looking at the vending machine, the drinks are still inside, but there's a trace of someone attempting to cut the wires. It seems you've found the culprit breaking the vending machines.`,
	`Chain event complete.`,
	`{{Icon/Currency|BottleCap}} Bottle Caps +30`
)
