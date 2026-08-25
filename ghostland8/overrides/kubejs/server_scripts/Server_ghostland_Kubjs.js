//Adding recipes
ServerEvents.recipes(event => {
	//>>>>>>>>>>>>>>>>>>IRON<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	event.shaped('minecraft:iron_pickaxe', [
		'AAA',
		' B ',
		' B '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_axe', [
		' AA',
		' BA',
		' B '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_axe', [
		'AA ',
		'AB ',
		' B '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_sword', [
		' A ',
		' A ',
		' B '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_hoe', [
		' AA',
		' B ',
		' B '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_hoe', [
		'AA ',
		' B ',
		' B '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_shovel', [
		' A ',
		' B ',
		' B '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_leggings', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'create:iron_sheet',
	})
	event.shaped('minecraft:iron_helmet', [
		'AAA',
		'A A'
	], {
		A: 'create:iron_sheet',
	})
	event.shaped('minecraft:iron_boots', [
		'A A',
		'A A'
	], {
		A: 'create:iron_sheet',
	})
	event.shaped('minecraft:iron_chestplate', [
		'A A',
		'AAA',
		'AAA'
	], {
		A: 'create:iron_sheet',
	})
	event.shaped(Item.of('minecraft:shield'), [
		'BAB',
		'BBB',
		' B '
	], {
		A: 'create:iron_sheet',
		B: { tag: 'minecraft:planks' }
	})

	//>>>>>>>>>>>>>>>>>>DIAMENTY<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	event.shaped('minecraft:diamond_axe', [
		' AA',
		' CA',
		' B '
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:stick',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_axe', [
		'AA ',
		'AC ',
		' B '
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:stick',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_sword', [
		' A ',
		' A ',
		' C '
	], {
		A: 'minecraft:diamond',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_hoe', [
		' AA',
		' C ',
		' B '
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:stick',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_hoe', [
		'AA ',
		' C ',
		' B '
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:stick',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_shovel', [
		' A ',
		' C ',
		' B '
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:stick',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_leggings', [
		'AAA',
		'ACA',
		'A A'
	], {
		A: 'minecraft:diamond',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_helmet', [
		'AAA',
		'ACA'
	], {
		A: 'minecraft:diamond',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_boots', [
		'A A',
		'A A',
		'C C'
	], {
		A: 'minecraft:diamond',
		C: 'create:polished_rose_quartz'
	})
	event.shaped('minecraft:diamond_chestplate', [
		'ACA',
		'AAA',
		'AAA'
	], {
		A: 'minecraft:diamond',
		C: 'create:polished_rose_quartz'
	})

	//>>>>>>>>>>>>>>>>>>   END   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	event.shaped(Item.of('minecraft:ender_eye', 2), [
		'AEP',
		'MCM',
		'GSB'
	], {
		S: "alexscaves:ferrouslime_ball",
		A: "aether:enchanted_berry",
		P: "the_bumblezone:pollen_puff",
		E: "minecraft:echo_shard",
		B: "minecraft:blaze_powder",
		G: "oritech:gold_dust",
		C: "minecraft:end_crystal",
		M: "minecraft:ender_pearl"
	})
	event.shaped(Item.of('minecraft:ender_eye', 5), [
		'GBG',
		'BMB',
		'PBP'
	], {
		B: "minecraft:ender_eye",
		P: "minecraft:blaze_powder",
		G: "oritech:small_gold_dust",
		M: "minecraft:ender_pearl"
	})
	event.shaped(Item.of('minecraft:end_crystal', 2), [
		'GGG',
		'GNG',
		'STS'
	], {
		S: "create:sturdy_sheet",
		G: "create:framed_glass_pane",
		T: "minecraft:ghast_tear",
		N: "minecraft:nether_star"
	})
	event.shaped('minecraft:beacon', [
		'GGG',
		'GCG',
		'SSS'
	], {
		S: "create:sturdy_sheet",
		G: "create:framed_glass_pane",
		C: "minecraft:end_crystal"
	})
	event.shaped('minecraft:netherite_ingot', [
		'AAA',
		'ACB',
		'BBB'
	], {
		A: 'minecraft:netherite_scrap',
		B: 'minecraft:gold_ingot',
		C: 'minecraft:chorus_flower'
	})

	//>>>>>>>>>>>>>>>>>>>>>   Create spout fix (worked without it for a moment recently, but just in case it breaks again...)   <<<<<<<<<<<<<<<<<<<
	event.shapeless('create:sturdy_sheet', [
		'minecraft:lava_bucket',
		'create:powdered_obsidian',
		'createdieselgenerators:hammer',
		'createdieselgenerators:hammer'
	])

	//>>>>>>>>>>>>>>>>>>>>>   Oritech   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	event.shaped('oritech:nuke', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'oritech:plutonium_pellet',
		B: 'oritech:heisenberg_compensator',
		C: 'kubejs:primary_fission_trigger'
	})
	event.shaped('oritech:low_yield_nuke', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'oritech:uranium_pellet',
		B: 'oritech:dubios_container',
		C: 'kubejs:primary_fission_trigger'
	})
	event.custom({
		type: 'extendedae:crystal_assembler',
		energy: 2000,
		input_items: [
			{ ingredient: { item: 'minecraft:blaze_powder', amount: 3 } },
			{ ingredient: { item: 'minecraft:ender_pearl', amount: 3 } },
			{ ingredient: { item: 'extendedae:entro_crystal', amount: 3 } },
			{ ingredient: { item: 'ae2:silicon_press', amount: 3 } }
		],
		output: {
			id: 'extendedae:concurrent_processor_press'
		}
	})
	event.recipes.oritech.assembler()
		.itemInputs(["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:tnt", "oritech:plutonium_dust"])
		.itemOutputs("kubejs:primary_fission_trigger").time(1800)
})

//Removing recipes
ServerEvents.recipes(event => {
	[
		'minecraft:iron_pickaxe', //Iron
		'minecraft:iron_axe',
		'minecraft:iron_shovel',
		'minecraft:iron_sword',
		'minecraft:iron_hoe',
		'minecraft:iron_chestplate',
		'minecraft:iron_leggings',
		'minecraft:iron_helmet',
		'minecraft:iron_boots',
		'minecraft:shield',
		'minecraft:diamond_axe',//Diamond
		'minecraft:diamond_shovel',
		'minecraft:diamond_sword',
		'minecraft:diamond_hoe',
		'minecraft:diamond_chestplate',
		'minecraft:diamond_leggings',
		'minecraft:diamond_helmet',
		'minecraft:diamond_boots',
		'oritech:crafting/nuke',
		'oritech:crafting/nukebetter',
	].forEach((recipeID) => event.remove({ id: recipeID })); //usuwa konkretną recepturę

	[].forEach((ingredientID) => event.remove({ input: ingredientID })); //usuwa wszystkie receptury z itemem

	[
		'minecraft:netherite_ingot',
		'extendedae:concurrent_processor_press',
		'minecraft:ender_eye',
		"minecraft:end_crystal",
		"minecraft:beacon"
	].forEach((itemID) => event.remove({ output: itemID })); //usuwa wszystkie receptury dające item
})
