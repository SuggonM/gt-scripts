import { Season, Chain, Event, Option } from './season-prototype.mjs';

Season (`Noir`)

Chain (`Benefit`, `Artifact`, `Chain`)
Event (
	`The Cop and The Thief`,
	`A snowman runs at you asking you to provide cover. You can see a cop blowing whistle and dashing from far away.`
)
Option (
	`Tell the cop.`,
	`You don't know what's going on but this snowman clearly did something wrong. No matter how much she begs, you hand her over to the police.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks Route [[#Joint Investigation|# Joint Investigation]]`,
		`This option sets the player's Route to '''Road of the Protector'''.`
	]
)
Option (
	`Provide cover.`,
	`You lie to the cop that the snowman went the other way. When she's sure that it's safe enough, the snowman runs away without any word.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks Route [[#Proposition|# Proposition]]`,
		`This option the player's Route to '''Road of Shadows'''.`
	]
)


Chain (`Benefit`, `Artifact`, `Chain`)
Event (
	`Joint Investigation`,
	`A cop approaches. She asks for your cooperation to take down a criminal gang that's been spreading its influence to Kama-ZONE. You must have impressed her when you got that snowman.`
)
Option (
	`Accept.`,
	`With great power comes great responsibility. You decide to use your power for justice.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocked from #[The Cop and The Thief#Tell the cop.]`,
		`Unlocks #[Espionage]`
	]
)
Option (
	`Decline.`,
	`You are way too occupied with other important matters to help the investigation. Such as cleaning your fingernails or toenails.`,
	`Nothing happened.`,
	`Unlocked from #[The Cop and The Thief#Tell the cop.]`
)
Event (
	`Espionage`,
	`Tea shops have always been the perfect place to collect information. You visit a sparkling barley tea shop to gain some intel about the gang you are told about.`
)
Option (
	`Eavesdrop on others.`,
	`The true identity of Soylent Red or meaningless gossips about some noble lady's ideal type is all you can get.`,
	`Nothing happened.`
)
Option (
	`Tip the waiter.`,
	`You wink at the waiter and hand over silver coins. The waiter accepts the coins and gives you the secret code, "swordfish." He goes back to wiping cups as if nothing happened.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`{{Icon/Currency|SilverCoin}} Silver coins -50`,
		`Unlocks '''Outcome 2''' in #[Black Market#Change the subject.]`
	],
	`More than 50 silver coins`
)
Option (
	`Just drink for now.`,
	`This is a rare visit to a sparkling barley tea shop. You enjoy your time, taking a shot after another. For each shot, your stress, as well as your plan, fades away.`,
	[
		`Lose silver coins`,
		`Recover all Heroes' HP`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -20`,
		`All Heroes recover 20% of their own max HP.`
	],
	`More than 20 silver coins`
)
Event (
	`War on Crime`,
	`With the help of the information you gained from the black market you finally confront the axis of evil.`
)
Option (
	`Charge!`,
	[
		`You charge in high spirits but the gang fought back harder than you expected. You are wounded and decide to retreat.`,
		`You take down the gang members skillfully. But, it's not enough to chase after the remaining rabble, so you take the deal payment from the ones you took down.`
	],
	[
		`All Heroes take damage`,
		`Acquire silver coins`
	],
	[
		[
			`All Heroes take damage by 20% of their own max HP.`
		],
		[
			`{{Icon/Currency|SilverCoin}} Silver coins +50`
		]
	]
)
Option (
	`Call for backup.`,
	`There are too many enemies to face on your own. You swiftly ask for police backup, but there's no answer. The frequency must not be right. You helplessly watch the gang members make the deal and return.`,
	`Nothing happened.`,
	[],
	`{{Color|low|Walkie-talkie Set}}`
)
Option (
	`Infiltrate.`,
	`You attempt to sneakily infiltrate the enemy, but you're caught. Right as you're about to accept your final moments, one of the lieutenants lets you go after saying he'll send someone.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Conciliation]`
	],
	`{{Color|low|Stealth Suit MG-2}}`
)
Option (
	`Make a deal.`,
	`You pose as a merchant and purchase a rare artifact. The criminals have fallen for your disguise and tell you not to forget the business meeting in the black market. Something smells fishy.`,
	[
		`Lose silver coins`,
		`Acquire {{Color|high|Hope}}`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -200`,
		`Skips to #[Tiger's Den]`
	],
	`More than 200 silver coins`
)
Event (
	`Conciliation`,
	`The gang sent a negotiator to you. The negotiator says they'll reward you handsomely if you hand over intel about the police and join the gang.`
)
Option (
	`Hand the information over.`,
	`Duty and devotion won't feed you. You need to take the chances you can get during tough times like this. The negotiator praises your brave decision and sets up a meeting with the boss.`,
	[
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Calculation]`,
		`Unlocks '''Outcome 4''' in #[Calculation#Kiss the boss's hand.]`,
		`The player betrays the Route and switches to '''Road of Shadows'''.`
	]
)
Option (
	`Pretend to hand over the information.`,
	`It's a chance to infiltrate the gang! You pretend to think it over a while, and hand off fake information to the negotiator. The dummy praises you for making an excellent choice, and sets up a meeting with the boss. I guess the gang will soon its end.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Calculation]`,
		`Unlocks '''Outcome 1''' in #[Calculation#Kiss the boss's hand.]`,
		`The player remains faithful to Route '''Road of the Protector'''.`
	]
)
Event (
	`Tiger's Den`,
	`You join the business meeting in the black market. The great boss of the gang reveals himself. You didn't expect this to happen. No, you actually did expect this!`
)
Option (
	`Arrest everyone.`,
	`You leap your body and take down the boss. The rest of the members are confused by the sudden development of the situation and you don't miss the chance to arrest them all.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocked from #[War on Crime#Make a deal.]`,
		`Unlocks #[Perfect Operation!]`
	]
)
Event (
	`Perfect Operation!`,
	`There is a ceremony to praise your effort for playing a crucial role in arresting the gang members.`
)
Option (
	`Accept the reward.`,
	[
		`You have executed an intricate plan with daring determination to deliver justice and now you are rewarded by grandiose fame and rewards. You humbly comment that it's not your victory but everyone's victory.`,
		`{{cite}}`
	],
	[
		`Acquire silver coins, Benefit unlocked, Chain event unlocked.`,
		`Acquire silver coins, Benefit unlocked, Chain event unlocked.{{cite|This outcome is hypothetical and derived from the fact that #[Calculation#Kiss the boss's hand.] has '''Outcome 3 & 4'''. Does the outcome even exist?}}`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +500`,
		`{{Icon/Currency|SilverCoin}} Silver coins +100`,
		`Unlocks Benefit [[Noir Season#Benefits|Road of the Protector]]`,
		`Unlocks #[Scratch My Back and I'll Scratch Yours]`,
		`Unlocks #[In the Name of the Gang]`,
		[
			`Unlocked from #[Tiger's Den] or '''Outcome 1''' of #[Calculation#Kiss the boss's hand.]`,
			`Triggered if the player remained faithful to Route '''Road of the Protector'''.`
		],
		[
			`Unlocked from '''Outcome 2''' in #[Calculation#Kiss the boss's hand.]`,
			`Triggered if the player betrayed Route '''Road of Shadows'''.`
		]
	]
)
Event (
	`Scratch My Back and I'll Scratch Yours`,
	`You visit the quartermaster to obtain equipment for your investigation. But, the quartermaster says all equipment is fully booked, and it will be difficult to hand out equipment. As you're turning around, the quartermaster offers to use his strengths.`,
	`Special`, `Chain`
)
Option (
	`Ask for the quartermaster's help`,
	`The quartermaster seems flustered by your bubbly request and coughs dryly. He asks for a show of sincerity. You're not sure about what kind of sincerity the quartermaster is talking about.`,
	`Chain event complete.`
)
Option (
	`Express your sincerity`,
	`You put on a warm face, and place a bag of silver coins into the quartermaster's pockets. The quartermaster tells you to stop, but doesn't actually try. A moment later, the quartermaster brings the equipment you need!`,
	[
		`Lose silver coins`,
		`Acquire {{Color|special|Totem of Reinforcements}}`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -400`
	],
	`More than 400 silver coins`
)
Event (
	`In the Name of the Gang`,
	`A mob comes out of the blue and surrounds you in a blink of time. The mob claims they are here to avenge in the name Of their gang.`,
	`Chain`
)
Option (
	`Take them out.`,
	`There must be remaining forces you couldn't take care of. It's a good chance to mop up the rest of them.`,
	`Start battle`,
	`Starts Elite Battle '''(Snowman Gang Trooper)'''`
)
Option (
	`Run.`,
	`You attempt to flee, but it's no use. You end up paying the price for interfering with the gang.`,
	[
		`1 random Hero take damage`,
		`1 random Hero take damage`,
		`1 random Hero take damage`
	],
	`3 random Heroes faint.`
)


Chain (`Benefit`, `Artifact`, `Chain`)
Event (
	`Proposition`,
	`A dangerous-looking man approaches you and thanks you for helping the snowman the other day. He offers you to join the gang's business in return for immense rewards.`
)
Option (
	`Accept.`,
	`The man leaves you with an instruction from the gang. It contains the mission for you to do.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocked from #[The Cop and The Thief#Provide cover.]`,
		`Unlocks #[Storage Job]`
	]
)
Option (
	`Decline.`,
	`You firmly deny the man's offer. He leaves with an unsatisfied look.`,
	`Nothing happened.`,
	`Unlocked from #[The Cop and The Thief#Provide cover.]`
)
Event (
	`Storage Job`,
	`You follow the instruction from the snowman criminal gang and sneak into the Kama-ZONE's artifact storage. Now you have to decide in what way you will steal the artifact.`
)
Option (
	`Loud`,
	`You cause a scene. Guards try to take you down but they are no match for you. Before reinforcement comes, you quickly take the loots and escape the storage.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks '''Outcome 3''' in #[Black Market#Change the subject.]`
	]
)
Option (
	`Smart`,
	`You throw smoke shells in the storage and casually walk out of the storage with all the loots while the guards are distracted by the dense smoke.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks '''Outcome 3''' in #[Black Market#Change the subject.]`
	]
)
Event (
	`Result Report`,
	`The snowman gang's executive visits you to hear how did the storage job go.`
)
Option (
	`Make a correct report.`,
	`You make a correct report on the sale money of the artifacts and hand over all the profits. The executive says you will shortly receive rewards from the gang.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`{{Icon/Currency|SilverCoin}} Silver coins -100`,
		`Skips to #[Calculation]`,
		`Unlocks '''Outcome 3''' in #[Calculation#Kiss the boss's hand.]`
	]
)
Option (
	`Make a false report.`,
	`You deserve the part of the money as the charge for your service. You lie about the sale money of the artifacts and hand over part of the profits. The stupid executive doesn't even notice!`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Crossroad]`
	]
)
Event (
	`Crossroad`,
	`One of the snowman gang members makes secret contact with you. He reveals that he's on the police's side and suggests you do the right thing.`
)
Option (
	`Accept.`,
	`This all has been part of your plan to infiltrate into the gang. It was your plan to gain the trust of the gang and take the chance to make a roundup. Refuse any logical refutation against it.`,
	`Chain event unlocked.`,
	[
		`Unlocks #[Calculation]`,
		`Unlocks '''Outcome 2''' in #[Calculation#Kiss the boss's hand.]`,
		`The player betrays the Route and switches to '''Road of the Protector'''.`
	]
)
Option (
	`Decline.`,
	`No dumb-dumb can survive in the gang. You take down the spy. This is your chance to prove your loyalty to the gang!`,
	`Chain event unlocked.`,
	[
		`Unlocks #[Calculation]`,
		`Unlocks '''Outcome 3''' in #[Calculation#Kiss the boss's hand.]`,
		`The player remains faithful to Route '''Road of Shadows'''.`
	]
)
Event (
	`Criminal World's Bigshot`,
	`Just as the boss promised, the shops within the area are all under your control. The shopkeepers will be grateful for your protection and pay protection fees.`
)
Option (
	`Collect Fees.`,
	`The shopkeepers all rush to pay protection fees to you. Seeing their happy faces makes you feel more satisfied with your job. You'll have to work harder for them.`,
	[
		`Acquire silver coins`,
		`Benefit unlocked.`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +500`,
		`{{Icon/Currency|SilverCoin}} Silver coins +100`,
		`Unlocks Benefit [[Noir Season#Benefits|Road of Shadows]]`,
		`Unlocks #[Becoming Part of the Family]`,
		`Unlocks #[The Judgement]`
	]
)
Event (
	`Becoming Part of the Family`,
	`You meet with the lieutenant to borrow the gang's power. But, the lieutenant claims you're not truly a part of the family in a sarcastic manner.`,
	`Special`, `Chain`
)
Option (
	`Call the lieutenant uncle.`,
	`The lieutenant sighs deeply at your naive words and actions. Soon, he shouts asking if you didn't understand what he meant. But you have nothing more to say. It seems the lieutenant had something else he wanted.`,
	`Chain event complete.`
)
Option (
	`Become a part of the family.`,
	`When you hand over a large bag of silver coins, the lieutenant's face lights up. The lieutenant grasps your hands tightly and tells you to don't hesitate in calling the family if trouble arrives.`,
	[
		`Lose silver coins`,
		`Acquire {{Color|special|Partnership}}`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -400`
	],
	`More than 400 silver coins`
)
Event (
	`The Judgement`,
	`The siren goes off and you are suddenly surrounded by the police. The police demand you to surrender immediately. They must know about the things you've done for the snowman gang.`,
	`Chain`
)
Option (
	`Resist.`,
	`You're not the type to kneel here. You resist violently and try to teach them who you are.`,
	`Start battle`,
	`Starts Elite Battle '''(Police Trooper)'''`
)
Option (
	`Flee.`,
	`You attempt to flee, but it's no use. You're disarmed and judged by the law.`,
	[
		`Lose silver coins`,
		`Lose random artifact{{cite|are these two results upside-down?}}`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -200`
)


Chain (`Benefit`, `Artifact`, `Chain`)
Event (
	`Black Market`,
	`You enter a covert black market. A merchant is waving at you under the dark shade.`
)
Option (
	`Buy something.`,
	`It doesn't matter where this item came from. The important thing is that this amazing artifact is now yours.`,
	[
		`Lose silver coins`,
		`Acquire 1 random {{Color|high|Omnipotent Container}}, {{Color|high|Reactive Armor Mk. I}}, {{Color|high|Reactive Armor Mk. II}}, {{Color|high|Mask of Courage}}`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -100`
	],
	`More than 100 silver coins`
)
Option (
	`Try to negotiate.`,
	[
		`The merchant starts flicking the abacus beads then shakes your hand. We have a deal!`,
		`The merchant waves dismissively and decline your offer. You leave the market as if you are being kicked out.`,
		`After a long haggling, the merchant accepts your final offer and takes small amounts of silver coins. But the police show up to bust the black market, and the merchant flees before you can take the artifact. You must have taken your time too much.`
	],
	[
		`Lose silver coins, Acquire 1 random {{Color|high|Omnipotent Container}}, {{Color|high|Reactive Armor Mk. I}}, {{Color|high|Reactive Armor Mk. II}}, {{Color|high|Mask of Courage}}`,
		`Nothing happened.`,
		`Lose silver coins`
	],
	[
		[
			`{{Icon/Currency|SilverCoin}} Silver coins -60`
		],
		[],
		[
			`{{Icon/Currency|SilverCoin}} Silver coins -60`
		]
	],
	`More than 60 silver coins`
)
Option (
	`Leave.`,
	`You should not get involved in such shady stuff. You slowly leave the market.`,
	`Nothing happened.`
)
Option (
	`Change the subject.`,
	[
		`You share a nice conversation with the merchant. The merchant thanks you for the pleasant talk and gives you some food.`,
		`Swordfish. You tell the secret code and the merchant hands you a small note. The note has the destination for the next deal.`,
		`You sell the smuggled item to the merchant. This money will be a good use for the gang.`,
		`{{cite}}`
	],
	[
		`Nothing happened.`,
		`Chain event unlocked.`,
		`Acquire silver coins, Chain event unlocked.`,
		`Recover 1 random Hero's HP`
	],
	[
		[],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
			`Unlocked from #[Espionage#Tip the waiter.]`,
			`Unlocks #[War on Crime]`
		],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
			`{{Icon/Currency|SilverCoin}} Silver coins +100`,
			`Unlocked from #[Storage Job]`,
			`Unlocks #[Results Report]`
		],
		[
			`1 random Hero recovers 20% of their own max HP.`
		]
	]
)


Chain (`Benefit`, `Artifact`, `Chain`)
Event (
	`Calculation`,
	`You finally meet with the boss after the gang calls you. When you kneel near his feet, he puts out his hand solemnly.`
)
Option (
	`Kiss the boss's hand.`,
	[
		`The moment you stand close to the boss, you pull out the weapon you've prepared and take down the boss! All the rest of the members panic and you successfully arrest all the key members of the snowman gang.`,
		`{{cite}}`,
		`You're accepted as a true gang member. The boss praises your precise work and loyalty highly and gives you a great reward. On top of that you're promised a high rank in the gang and profits!`,
		`The information you gave has been judged to be very valuable so the boss gives you a large reward. You're also promised a high rank in the gang and profits!`
	],
	[
		`Chain event unlocked.`,
		`Chain event unlocked.`,
		`Acquire {{Color|high|Hope}}, Chain event unlocked.`,
		`Acquire {{Color|high|Hope}}, Chain event unlocked.`
	],
	[
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
			`Unlocked from #[Conciliation#Pretend to hand over the information.]`,
			`Unlocks #[Perfect Operation!]`,
			`Unlocks '''Outcome 1''' in #[Perfect Operation!#Accept the reward.]`,
			`The player remained faithful to Route '''Road of the Protector'''.`
		],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +20{{cite|is the amount same after betrayal?}}`,
			`Unlocked from #[Crossroad#Accept.]`,
			`Unlocks #[Perfect Operation!]`,
			`Unlocks '''Outcome 2''' in #[Perfect Operation!#Accept the reward.]`,
			`The player betrayed Route '''Road of Shadows'''.`
		],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
			`Unlocked from #[Crossroad#Decline.]`,
			`Unlocks #[Criminal World's Bigshot]`,
			`The player remained faithful to Route '''Road of Shadows'''.`
		],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +100{{cite|is the amount same after betrayal?}}`,
			`Unlocked from #[Conciliation#Hand the information over.]`,
			`Unlocks #[Criminal World's Bigshot]`,
			`The player betrayed Route '''Road of the Protector'''.`
		],
	]
)


Chain (`Benefit`, `Chain`)
Event (
	`Lucrative Intel`,
	`Suspicious looking men in robes approach you. They whisper an offer to give lucrative intel if you pay a fee.`
)
Option (
	`Pay for the intel.`,
	`You buy the intel off the men and give them the benefit of the doubt. Apparently, a priceless item in the criminal world came into the luxury goods store. Stealing this will give you a decent profit. The item is shaped like a square with a few round decorations.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`{{Icon/Currency|SilverCoin}} Silver coins -50`,
		`Unlocks #[Secretly Confusingly]`
	],
	`More than 50 silver coins`
)
Option (
	`Ignore them.`,
	`You've met types like them countless times. Men who claim their information can multiply money. It's false hope. You walk away and don't look back.`,
	`Nothing happened.`
)
Event (
	`Secretly Confusingly`,
	`You avoid the uptight employee's gaze and succeed in approaching the display case. But you're too nervous and forget which item you were supposed to steal!`
)
Option (
	`A round item with many round decorations`,
	`You search your memories and manage to remember the item's shape. It's uncertain why this item is in a luxury goods shop, but you take the item and leave carefully.`,
	[
		`Acquire {{Color|high|Deep Void Shield}}`,
		`Chain event unlocked.`
	],
	`Unlocks #[Fence]`
)
Option (
	`A square item with a few round decorations`,
	[
		`You search your memories and manage to remember the item's shape. Seeing the item's fantastic outline, you're certain it's the item you searched for. You take the item and leave carefully.`,
		`You search your memories and manage to remember the item's shape. But you can't find an item like that anywhere. Your frantic searching gets you caught by the employee and into trouble.`,
		`You search your memories and realize you had the item all along. You leave the luxury goods shop carefully.`
	],
	[
		`Acquire {{Color|high|Hope}}, Chain event unlocked.`,
		`Chain event complete.`,
		`Chain event unlocked.`
	],
	[
		[
			`Unlocks #[Fence]`,
			`Triggered on the first attempt only.{{cite|or does it keep triggering until #[Fence] is completed?}}`
		],
		[
			`Triggered on all attempts after the first one.`
		],
		[
			`Unlocks #[Fence]`,
			`Triggered if the player already has a {{Color|high|Hope}}.`,
			`If the condition is met, this rules out all other outcomes.{{cite|or will completing #[Fence] always result in '''Outcome 2''' regardless? ("Chain event unlocked." wouldn't make sense otherwise)}}`
		]
	]
)
Option (
	`A square item with many round decorations`,
	`You search your memories and manage to remember the item's shape. It's uncertain why this item is in a luxury goods shop, but you take the item and leave carefully.`,
	[
		`Acquire {{Color|high|Orichalcum Spike}}`,
		`Chain event unlocked.`
	],
	`Unlocks #[Fence]`
)
Option (
	`Give up.`,
	`You realize your actions are wrong. When you're about to give up, you lock eyes with the shop's employee. You end up getting caught by the employee and spend an eternity being interrogated.`,
	`Nothing happened.`
)
Event (
	`Fence`,
	`You arrive at the fence at the black market. This one should give you a fair price for the item. You show the stolen item from the shop to the fence.`
)
Option (
	`A round item with many round decorations`,
	`The fence inspects the item, and your expectations start to soar. However, the fence claims this item is worthless and sends you back. It seems you stole the wrong item.`,
	`Nothing happened.{{cite|"Chain event complete." too?}}`,
	[],
	`{{Color|high|Deep Void Shield}}`
)
Option (
	`A square item with a few round decorations`,
	`The fence inspects the item and disappears into the shop. Suddenly, the police start running out from the shop! You've been caught by a sting operation. You're hit by the strange bullets shot by the police and fall. Electric shocks run through your body. This is gonna hurt for a while.`,
	[
		`All Heroes take damage`,
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`Unlocks Benefit [[Noir Season#Benefits|Electric Shock]]`
	],
	`{{Color|high|Hope}}`
)
Option (
	`A square item with many round decorations`,
	`The fence inspects the item, and your expectations start to soar. However, the fence claims this item is worthless and sends you back. It seems you stole the wrong item.`,
	`Nothing happened.{{cite|"Chain event complete." too?}}`,
	[],
	`{{Color|high|Orichalcum Spike}}`
)
Option (
	`Head back.`,
	`After some thinking, this item fits your tastes quite well. You don't sell the item and decide to keep it.`,
	`Chain event complete.`
)


Chain (`Chain`)
Event (
	`Accidental Discovery`,
	`You stumble upon a mess of brutal fights and a shady-looking box on the side. It seems there was a battle to win this box.`
)
Option (
	`Take the box.`,
	`This box must have some high value. You look around and scuttle away with the box.`,
	[
		`Acquire {{Color|low|Pandora's Box}}`,
		`Chain event unlocked.`
	],
	`Unlocks #[Metamorphosis]{{cite|Can "Metamorphosis" be encountered before this event? If NO, these two tables can be combined.}}`
)
Option (
	`Leave the box.`,
	`No psychopathic killer would follow you day and night just because you took the box. This is not a movie. But it doesn't feel right anyway, so you decide to leave the box and go on your way.`,
	`Nothing happened.`
)


Chain ()
Event (
	`Metamorphosis`,
	`The archeologist approaches you full of excitement. He tells you that some artifacts from the ancient scroll have been found in Kama-ZONE lately. He offers you to awaken its true and hidden potential if you have any.`
)
Option (
	`Wake the true potential of the artifact.`,
	[
		`A new artifact breaks out of the shell! You are slowly filled with rage at the sight of it.`,
		`A new artifact breaks out of the shell! You are mesmerized by the beauty of it.`
	],
	[
		`Lose {{Color|low|Pandora's Box}}, Acquire {{Color|mid|Despair and Anger}}, Chain event complete.`,
		`Lose {{Color|low|Pandora's Box}}, Acquire {{Color|high|Hope}}, Chain event complete.`
	],
	[],
	`{{Color|low|Pandora's Box}}`
)
Option (
	`Ignore him.`,
	`It's never fun to get mess around with excited scholars' stuff. You go on your way.`,
	`Nothing happened.`
)


Chain ()
Event (
	`Promise of Faith`,
	`The blacksmith calls you to stop. She says she has a way to enhance your artifact and insists that you let her do so.`
)
Option (
	`Accept.`,
	`The blacksmith strikes the hammer and there goes a huge explosion. Wait, don't lose your hope just yet. It wasn't an artifact that's been broken! Don't mind that blacksmith that looks somehow disappointed.`,
	`Remove {{Color|curse|1 random}} curses`,
	[],
	`More than 1 artifacts`
)
Option (
	`Decline.`,
	`You know you'll end up thinking the original is the best. You don't see any point in upgrading your artifact and go on your way.`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
	`Coin Toss`,
	`A man with an impressive hairstyle approaches you. He tosses a coin and forces you to call which side he has.`
)
Option (
	`Head.`,
	[
		`He has the head. The man gives you the coin and tells you to keep it well since that's now your lucky coin.`,
		`He has the tail. The man pulls the trigger before you can do anything.`
	],
	[
		`Acquire silver coins, Chain event complete.`,
		`1 random Hero take damage{{cite}}`
	],
	[
		[
			`{{Icon/Currency|SilverCoin}} Silver coins +10`
		],
		[
			`1 random Hero faints.`
		]
	]
)
Option (
	`Tail.`,
	[
		`He has the tail. The man gives you the coin and tells you to keep it well since that's now your lucky coin.`,
		`He has the head. The man pulls the trigger before you can do anything.`
	],
	[
		`Acquire silver coins, Chain event complete.`,
		`1 random Hero take damage{{cite}}`
	],
	[
		[
			`{{Icon/Currency|SilverCoin}} Silver coins +10`
		],
		[
			`1 random Hero faints.`
		]
	]
)
Option (
	`Refuse.`,
	`The man flinches and pulls the trigger on you. Before you can do anything, you collapse.`,
	`1 random Hero take damage{{cite}}`,
	`1 random Hero faints.`
)


Chain (`Benefit`, `Chain`)
Event (
	`Dangerous Temptation`,
	`A suspicious-looking man suggests you try some of the curses. He claims curses can be beneficial if used properly and shows his best collection for you to pick.`
)
Option (
	`Something that gives electrifying sensations.`,
	`You accept the curse and you feel the shooting pain.`,
	`Acquire {{Color|curse|Toe Grinder}} curse`
)
Option (
	`Something that opens up your eyes.`,
	`You accept the curse and you feel the kick as if you're struck by a hammer in the head.`,
	`Acquire {{Color|curse|Scorched Stigma}} curse`
)
Option (
	`Something that can take your breath away.`,
	[
		`You accept the curse and it's getting hard to breathe as if you are restrained by a torture rack.`,
		`Tinia the white rose that slashes evil appears out of nowhere and shoots an arrow to destroy the curse. Look how proud she looks. She must have really hated that curse.`
	],
	[
		`Acquire {{Color|curse|Sinner's Torture Rack}} curse`,
		`Nothing happened.`
	]
)
Option (
	`Anything that can blow your mind.`,
	`The man smirks and gives you all the curses. You can know for sure that they're the best collection since you're losing consciousness.`,
	[
		`Acquire {{Color|curse|3 random}} curse(s)`,
		`Chain event unlocked.`
	],
	`Unlocks #[Qualifications for a Business Partner]`
)
Option (
	`Decline.`,
	`There are things you should never try. You walk the other way.`,
	`Nothing happened.`
)
Event (
	`Qualifications for a Business Partner`,
	`You're reunited with the suspicious man offering you curses. He seems impressed you're still walking around. He speaks about the perfect job offer, and says he'll recommend you if you want it.`
)
Option (
	`Ask him to recommend you.`,
	`The man says he'll deliver the recommendation, and tells you to go to the spot marked on this map. He also says this job's only for those who can move the product and wishes you luck.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Qualification Check]`
	]
)
Option (
	`Tell him you don't need it.`,
	`The last job was only to sate your curiosity. You have strong willpower and firmly express your refusal. The man laments your refusal and sends you off.`,
	`Nothing happened.`
)
Option (
	`Ask for more curses instead.`,
	`The man looks surprised, then laughs heartily. Then says it'd be better if you stay as a client instead after taking out his product. Except, he asked for a fair price and you pay it with no hesitation after seeing the product.`,
	[
		`Lose silver coins`,
		`Acquire {{Color|curse|1 random}} curse(s)`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -50`,
	`More than 50 silver coins`
)
Event (
	`Qualification Check`,
	`You visit the workshop the suspicious man told you about. The manager of the workshop heard your footsteps and carefully walk towards you.`
)
Option (
	`Ask for a job.`,
	[
		`The manager gives you the product and map for the delivery spot with a hesitant look on his face. I guess he hasn't heard about "Kanterbury's Silver Flash"… but he'll know soon enough.`,
		`The manager recognised "Kanterbury's Silver Flash" and hands you the product and map with a bright smile. He says come whenever you need a job. Now, it's time to deliver happiness again!`
	],
	[
		`Acquire {{Color|curse|Ugly Boots}} curse, Chain event unlocked.`,
		`Acquire {{Color|curse|Ugly Boots}} curse, Chain event unlocked.`,
	],
	[
		`Unlocks #[Delivering Happiness]`,
		[
			`Triggered if the job has yet to be completed.`
		],
		[
			`Triggered if the job has already been completed once.`
		]
	]
)
Option (
	`Purchase a bunch of curses.`,
	[
		`The manager shouts at you after hearing your request. And says the courier shouldn't
		covet the product. Ashamed, you quietly leave the workshop.`,
		`The manager says he'll make an exception for you, and sells the product at a good price. You already feel your consciousness swimming from it. High quality products are high quality for a reason.`
	],
	[
		`Nothing happened.`,
		`Lose silver coins, Acquire {{Color|curse|5 random}} curse(s), Chain event complete.`
	],
	[
		[
			`Triggered if the job has yet to be completed.`
		],
		[
			`{{Icon/Currency|SilverCoin}} Silver coins -300`,
			`Triggered if the job has already been completed once.`
		]
	],
	`More than 300 silver coins`
)
Option (
	`Leave.`,
	`The damp smell of the workshop makes your head spin. You leave to get some fresh air.`,
	`Chain event complete.`
)
Event (
	`Delivering Happiness`,
	`You arrive at the place marked on the map, and find a person who looks like a customer. The customer is eagerly waiting for the product and biting her nails.`
)
Option (
	`Deliver the product.`,
	`When you send the signal, the customer runs over happily. The customer hugs, touches, smells and tastes the product you delivered. Is it that good? Anyways, "Kanterbury's Silver Flash" has brilliantly completed the mission again today.`,
	[
		`Remove {{Color|curse|Ugly Boots}} curses`,
		`Acquire silver coins`,
		`Chain event complete.`,
		`Benefit unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +200`,
		`Unlocks Benefit [[Noir Season#Benefits|Bad Habit]]`
	],
	`Curse {{Color|curse|Ugly Boots}}`
)
Option (
	`Intercept the product.`,
	`You already know how attached you became to this product on your journey. It's not professional, but you decide to stay true to your desires today.`,
	`Chain event complete.{{cite}}`
)
Option (
	`Say you don't have the product honestly.`,
	`Intentional or not, you don't have the product in hand. When you tell the truth, the customer starts to cry and laugh like a deranged person. Soon the customer starts shouting words of hate and lunges towards you!`,
	[
		`Start battle{{cite}}`,
		`Chain event complete.{{cite}}`
	],
	`Starts Elite Battle '''(Furious Customer)'''`
)
