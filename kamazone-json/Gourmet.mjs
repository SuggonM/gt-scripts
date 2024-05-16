import { Season, Chain, Event, Option } from './season-prototype.mjs';

Season (`Gourmet`)

Chain (`Benefit`, `Artifact`, `Chain`)
Event (
	`Man on the Ground`,
	`You find a man on the ground. As you get closer, you can hear a giant rumbling sound from his stomach.`
)
Option (
	`Share some food.`,
	`The man takes the food you spared and gets back on his feet. He introduces himself as a gourmet who's visiting Kama-ZONE for a gourmet meal. Then he just wanders off somewhere.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Wandering Gourmet]`
	],
	`One or more artifacts from A[High|Waybread], A[High|Flesh Piece], A[Low|Blessing of Cooking God], A[Low|Dragon's Blood]`
)
Option (
	`Leave him be.`,
	`You might be the next one to be on the ground if you waste your precious provisions. You go on your way, no matter how much it breaks your heart to do so.`,
	`Nothing happened.`
)

Event (
	`Wandering Gourmet`,
	`You meet the goblin gourmet once again. He's devastated that he couldn't find any decent food in Kama-ZONE and is willing to pay a good price if you find him some.`
)
Option (
	`Accept.`,
	`You willingly accept his request. Some of your members who can help come to your mind.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Difficult Gourmet]`,
		`Unlocks #[Loraine's Joy of Cooking]`,
		`Unlocks #[Lynn's Bento Shop in Kama-ZONE.]`,
		`Unlocks #[Advanced Meal]`
	]
)
Option (
	`Decline.`,
	`One has to go through a painful path of endurance until finally finding and tasting the ultimate cuisine. How he is looking for an easy way on such a journey. He's not qualified to call himself a gourmet.`,
	`Nothing happened.`
)

Event (
	`Difficult Gourmet`,
	`You meet the goblin gourmet. He eagerly asks if you have anything for him to taste.`,
	`Chain`
)
Option (
	`Give him the dish.`,
	[
		`He takes a bite of the salad and gives a favorable comment that it has a very balanced and stable flavor. Yet he's not entirely satisfied, saying he feels something's missing.`,
		`He takes a bite of the salad and gives a favorable comment that it has a very balanced and stable flavor. Yet he's not entirely satisfied, saying he feels something's missing.`
	],
	[
		`Lose A[High|Predetor Salad], Acquire silver coins`,
		`Lose A[High|Predetor Salad], Acquire silver coins, Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +200`,
		[],
		[
			`Unlocks #[Heartbroken Gourmet]`
		]
	],
	`A[High|Predetor Salad]`
)
Option (
	`Give him the dish.`,
	[
		`He slowly feels the taste of the soup and gives a comment that it's a bit spicy but not half bad. But he once again asks for a better dish.`,
		`He slowly feels the taste of the soup and gives a comment that it's a bit spicy but not half bad. But he once again asks for a better dish.`
	],
	[
		`Lose A[High|Soup from Another Demension], Acquire silver coins`,
		`Lose A[High|Soup from Another Demension], Acquire silver coins, Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +300`,
		[],
		[
			`Unlocks #[Heartbroken Gourmet]`
		]
	],
	`A[High|Soup from Another Demension]`
)
Option (
	`Give him the dish.`,
	[
		`He takes a tablet and rolls it around in his mouth. He then spits it out to give harsh comments that there's no flavor, texture, smell and that it's not food at all in any aspect.`,
		`He takes a tablet and rolls it around in his mouth. He then spits it out to give harsh comments that there's no flavor, texture, smell and that it's not food at all in any aspect.`
	],
	[
		`Lose A[High|Magiton Supplement], Acquire silver coins`,
		`Lose A[High|Magiton Supplement], Acquire silver coins, Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins +100`,
		[],
		[
			`Unlocks #[Heartbroken Gourmet]`
		]
	],
	`A[High|Magiton Supplement]`
)
Option (
	`Leave.`,
	`You tell him the food's not quite ready and you need more time.`,
	`Nothing happened.`
)

Event (
	`Heartbroken Gourmet`,
	`You meet the goblin gourmet once again. He seems deeply heartbroken to not have any fine dish to please him.`,
	`Chain`
)
Option (
	`Cheer him up.`,
	`You cheer him up, but he says he would even sell his soul to the devil for a fine dish.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Dark Cooking]`
	]
)

Event (
	`Dark Cooking`,
	`A mysterious cook blocks your way. The cook offers you the best dish that you can't find anywhere else in the world. If you bring the ingredients, of course.`,
	`Chain`
)
Option (
	`Give the ingredients.`,
	`The cook finishes the cooking. It looks familiar enough but with an extra stench. With fear, you take this horrific combination into your hands.`,
	[
		`Lose A[Low|Mace of Stench]`,
		`Acquire A[Curse|Pie from the Edge of Hell]`,
		`Chain event unlocked.`
	],
	`Unlocks #[Cuisine or Bizarre Food]`,
	`A[Low|Mace of Stench]`
)
Option (
	`Leave.`,
	`That gaudy outfit would make any cook look unworthy of trust. What, trying to get back to the world by cooking or something? You leave the cook and go on your way.`,
	`Nothing happened.`
)

Event (
	`Cuisine or Bizarre Food`,
	`You meet the goblin gourmet once again. He asks if the dish is ready. His voice is quivering.`,
	`Chain`
)
Option (
	`Give him the dish.`,
	`The goblin gourmet seems nervous to smell this awful stench, but he bravely takes a bite. And he collapses gloriously.`,
	[
		`Lose A[Curse|Pie from the Edge of Hell]`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +100`,
		`Unlocks '''Outcome 2''' in #[Chef from Dungeon Kingdom#Ask him to cook.]`
	]
)
Option (
	`Leave.`,
	`There's no way he'll endure this horrible dish. You make an excuse that the dish isn't quite ready yet.`,
	`Nothing happened.`
)

Event (
	`The Last Supper`,
	`You meet the goblin gourmet once again. The gourmet declares that he's leaving Kama-ZONE for good after one last supper.`,
	`Benefit`, `Chain`
)
Option (
	`Give him the dish.`,
	`The goblin gourmet tastes your dish and get deeply touched. He says it reminds him of his mama's meal. He practically munches the plate and leaves Kama-ZONE with a light heart.`,
	[
		`Lose A[Special|Special Meat Pie]`,
		`Benefit unlocked.`,
		`Chain event complete.`
	],
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +500`,
		`Unlocked from #[Hell's Kitchen#Cook.]`,
		`Unlocks Benefit [[Gourmet Season#Benefits|Top Chef]]`
	]
)
Option (
	`Leave.`,
	`The dish is not ready yet. Maybe you just don't want to share this wonderful dish…?`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
	`Loraine's Joy of Cooking`,
	`Loraine who feeds the whole Heavenhold must know what to make to satisfy the gourmet. Loraine reluctantly tells you the ingredients needed.`
)
Option (
	`Give the ingredients.`,
	`Loraine, as always, quickly knocks up a dish. It does look healthy, but the little princess wouldn't enjoy it so much.`,
	[
		`Lose A[Low|Predation Flower]`,
		`Acquire A[High|Predetor Salad]`,
		`Chain event complete.`
	],
	`Unlocked from #[Wandering Gourmet#Accept.]`,
	`A[Low|Predation Flower]`
)
Option (
	`Leave.`,
	`Loraine snaps at you to get the ingredients already. Time to get back on the journey.`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
	`Lynn's Bento Shop in Kama-ZONE.`,
	`A heavily drunk Swordmaster comes at you out of nowhere and offers you her cooking. She says that she feels like she can do anything right now, and asks you for smoking hot ingredients.`
)
Option (
	`Give the ingredients.`,
	`If there's anyone who can cook with ingredients from another dimension, it'd be her. Staggering and stumbling as she is, she manages to finish her cooking. Here it is, the sensational dish that'll never get off of one's mind.`,
	[
		`Lose A[Low|Dragon's Blood]`,
		`Acquire A[High|Soup from Another Demension]`,
		`Chain event complete.`
	],
	`Unlocked from #[Wandering Gourmet#Accept.]`,
	`A[Low|Dragon's Blood]`
)
Option (
	`Leave.`,
	`She doesn't seem to be suitable to do any kind of cooking. You politely decline her offer and leave.`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
	`Advanced Meal`,
	`Sohee must be smart enough to know about the fine food for the gourmet. Sohee is pleased with the happy coincidence that she's been doing regarding research. She asks you to get some ingredients.`
)
Option (
	`Give the ingredients.`,
	`Sohee's machine makes a rowdy noise and the food pops out. You are deeply doubtful about its ingredients but Sohee asserts that it's the best food since it contains all the vital nutrients.`,
	[
		`Lose A[Low|Genius Wig]`,
		`Acquire A[High|Magiton Supplement]`,
		`Chain event complete.`
	],
	`Unlocked from #[Wandering Gourmet#Accept.]`,
	`A[Low|Genius Wig]`
)
Option (
	`Leave.`,
	`You quickly leave to find the ingredients before Sohee changes her mind to help.`,
	`Nothing happened.`
)


Chain (`Benefit`, `Artifact`, `Chain`)
Event (
	`Mouthwatering News`,
	`People are gathered around a poster, talking about something.`
)
Option (
	`Ask what's going on.`,
	`She gives you the news that a renowned chef in Dungeon Kingdom has arrived in Kama-ZONE for his pop-up restaurant. Seeing everyone's so excited, you realize you won't get a taste of his dish unless you make a quick reservation.`,
	`Chain event unlocked.`,
	[
		`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
		`Unlocks #[Chef from Dungeon Kingdom]`
	]
)

Event (
	`Chef from Dungeon Kingdom`,
	`You visit the pop-up restaurant run by the chef from Dungeon Kingdom. There's already a long queue of people waiting to get a table.`
)
Option (
	`Ask him to cook.`,
	[
		`You wait for a long, long time to get into the restaurant. But the chef declines to give service, saying he has run out of ingredients.`,
		`You tell him the story of the goblin gourmet. He suggests that he'll teach you how to cook, and you cook for the gourmet yourself.`
	],
	[
		`Nothing happened.`,
		`Chain event unlocked.`
	],
	[
		[],
		[
			`{{Icon/Currency|BottleCap}} Bottle Caps +20`,
			`Unlocked from #[Cuisine or Bizarre Food#Give him the dish.]`,
			`Unlocks #[Hell's Kitchen]`
		]
	]
)
Option (
	`Leave.`,
	`All those high-rated restaurants that are hot on Facebreak were overrated. This must be one of them. You walk the other way.`,
	`Nothing happened.`
)

Event (
	`Hell's Kitchen`,
	`You start cooking under the chef's watch!`
)
Option (
	`Cook.`,
	`You put the condiment you brought behind the chef's back into the dish. And the verdict is… a huge success!`,
	[
		`Lose A[High|Flesh Piece]`,
		`Acquire A[Special|Special Meat Pie]`,
		`Chain event unlocked.`
	],
	`Unlocks #[The Last Supper]`,
	`A[High|Flesh Piece]`
)
Option (
	`Leave.`,
	`The missing ingredients just pop into your mind. You quickly run out of the kitchen while the chef is yelling at your back.`,
	`Nothing happened.`
)


Chain ()
Event (
	`Amy's Cake Company`,
	`You visit the cake shop Amy and Dolf opened in Kama-ZONE that you heard about.`
)
Option (
	`Order a cake.`,
	`It tastes horrible. You try to talk about the quality of the cake, but Amy's going crazy saying you're the problem, not her cake.`,
	[
		`Lose silver coins`,
		`Acquire A[Curse|Rainbow Cake] curse`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -50`,
	`More than 50 silver coins`
)
Option (
	`Leave.`,
	`There's nothing you'd like to buy and you try to leave the shop. But then, Dolf grabs you and says you didn't get any cake, but you still have to pay. It's nonsensical, but you fall for his fluent tongue and pay him the price.`,
	`Lose silver coins`,
	`{{Icon/Currency|SilverCoin}} Silver coins -50`
)


Chain ()
Event (
	`Eating Contest`,
	`There are various eating contests going on, with Ruri broadcasting them live. You stop at the enticing smell of foods and the fever of the event.`
)
Option (
	`Take part in an eating contest.`,
	`Someone else finishes 80 dishes and be a winner while you struggle with your pile of food. You're just happy you became full enough.`,
	`Recover all Heroes' HP`,
	`All Heroes recover 20% of their own max HP.`
)
Option (
	`Take part in a drinking contest.`,
	`You can drink all the sparkling barley tea in the world. You indulge glass after glass of sparkling barley tea and easily win the contest.`,
	`Acquire silver coins`,
	`{{Icon/Currency|SilverCoin}} Silver coins +50`
)
Option (
	`Let Girgas to take part in a contest.`,
	`You couldn't bear Girgas's pestering and let him take part in the contest, but he goes out there and gobbles up other contestants' food as well. See how angry contestants are coming at you!`,
	`Start battle`,
	`Starts Elite Battle`,
	`Hero Fire Dragon Girgas`
)
Option (
	`Stay and just watch.`,
	`You have your own rule to slowly savor the food. You choose not to take part in the contest.`,
	`Nothing happened.`
)


Chain ()
Event (
	`Grocery Selling`,
	`A merchant from Shen city is selling fresh groceries.`
)
Option (
	`Buy a pound ot meat.`,
	`You buy a pound of lovely marbled meat. Meat is definitely murder. Delicious, tasty murder.`,
	[
		`Lose silver coins`,
		`Acquire A[High|Flesh Piece]`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -100`,
	`More than 100 silver coins`
)
Option (
	`Buy vegetables.`,
	`You buy a bunch of fresh vegetables. You feel healthy already.`,
	[
		`Lose silver coins`,
		`Acquire A[Low|Predation Flower]`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -40`,
	`More than 40 silver coins`
)
Option (
	`Buy condiments.`,
	`You buy condiments. The merchant is pleased to see you making the right choice, saying you do know your way with taste.`,
	[
		`Lose silver coins`,
		`Acquire A[Low|Blessing of Cooking God]`
	],
	`{{Icon/Currency|SilverCoin}} Silver coins -40`,
	`More than 40 silver coins`
)
Option (
	`Leave.`,
	`However excellent the ingredients are, they'll all end up be a burden to your journey unless you have a way to cook them. You walk the other way around.`,
	`Nothing happened.`
)


Chain (`Chain`)
Event (
	`Today's Fortune`,
	`Oh, it's that beautiful, mysterious thief…? No, it's a normal fortune teller. She offers you she'd tell your future.`
)
Option (
	`Let her tell your future.`,
	`The fortune teller takes the fee and gives you the psychic reading. She reads that you'll be granted a great fortune in a near future, but you should not get overly greedy. She warns you to mind over your head.`,
	[
		`Lose silver coins`,
		`Chain event unlocked.`
	],
	[
		`{{Icon/Currency|SilverCoin}} Silver coins -50`,
		`Unlocks #[Cloudy with a Chance of Food]`
	],
	`More than 50 silver coins`
)
Option (
	`Go on your way.`,
	`You are a sensible, decisive person with a crystal-clear mind. You don't need anything like fortune telling. Your choice for today's lunch menu was excellent as well, right?`,
	`Nothing happened.`
)

Event (
	`Cloudy with a Chance of Food`,
	`With a giant roaring sound, the ceiling cracks open. Food begins raining through the crack!`
)
Option (
	`Open your mouth.`,
	`You open up your mouth hoping you could catch some in it, but things just won't go as you imagined. You flounder in the rain of food then fall down.`,
	`All Heroes take damage`,
	`All Heroes take damage by 30% of their own max HP.`
)
Option (
	`Pick up the food.`,
	`You patiently wait until the rain of food dies down then pick up one least bruised food.`,
	`Acquire A[High|Waybread]`
)
Option (
	`Spread open a cloak.`,
	[
		`You take off your cloak and spread it open to catch the food. Your cloak provides cushion and you manage to pick up some of the food that's not too damaged.`,
		`{{cite}}`
	],
	[
		`Acquire A[High|Waybread], Acquire 1 random A[High|Flesh Piece], A[Low|Blessing of Cooking God], A[Low|Dragon's Blood], Chain event complete.`,
		`{{cite|The trigger for this outcome has never been discovered. However, [https://docs.google.com/spreadsheets/d/1oKYVRJB9nOsHJBRyyZVABsteSPVCLm4f1wzH_Sdv8nE/edit#gid{{=}}0&range{{=}}C297:C299 an uncited source] claims this outcome to grant one of the three {{Color|high|High-grade}} dishes.}}`
	],
	[],
	`A[High|Elegant Cloak]`
)
