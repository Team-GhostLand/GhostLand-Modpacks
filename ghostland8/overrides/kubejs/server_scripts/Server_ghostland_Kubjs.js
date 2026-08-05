//HowTo Recipes
ServerEvents.recipes(event => {
    //>>>>>>>>>>>>>>>>>>IRON<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    event.shaped('minecraft:iron_pickaxe',[
        'AAA',
        ' B ',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:stick'
    })
        event.shaped('minecraft:iron_axe',[
        ' AA',
        ' BA',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:stick'
    })
        event.shaped('minecraft:iron_axe',[
        'AA ',
        'AB ',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:stick'
    })
        event.shaped('minecraft:iron_sword',[
        ' A ',
        ' A ',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:stick'
    })
        event.shaped('minecraft:iron_hoe',[
        ' AA',
        ' B ',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:stick'
    })
        event.shaped('minecraft:iron_hoe',[
        'AA ',
        ' B ',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:stick'
    })
        event.shaped('minecraft:iron_shovel',[
        ' A ',
        ' B ',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: 'minecraft:stick'
    })
        event.shaped('minecraft:iron_leggings',[
        'AAA',
        'A A',
        'A A'
    ],{
        A: 'create:iron_sheet',
    })
        event.shaped('minecraft:iron_helmet',[
        'AAA',
        'A A'
    ],{
        A: 'create:iron_sheet',
    })
        event.shaped('minecraft:iron_boots',[
        'A A',
        'A A'
    ],{
        A: 'create:iron_sheet',
    })
        event.shaped('minecraft:iron_chestplate',[
        'A A',
        'AAA',
        'AAA'
    ],{
        A: 'create:iron_sheet',
    })
    event.shaped(Item.of('minecraft:shield'),[
        'BAB',
        'BBB',
        ' B '
    ],{
        A: 'create:iron_sheet',
        B: {tag: 'minecraft:planks'}
    })


    //>>>>>>>>>>>>>>>>>>DIAMENTY<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


        event.shaped('minecraft:diamond_axe',[
        ' AA',
        ' CA',
        ' B '
    ],{
        A: 'minecraft:diamond',
        B: 'minecraft:stick',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_axe',[
        'AA ',
        'AC ',
        ' B '
    ],{
        A: 'minecraft:diamond',
        B: 'minecraft:stick',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_sword',[
        ' A ',
        ' A ',
        ' C '
    ],{
        A: 'minecraft:diamond',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_hoe',[
        ' AA',
        ' C ',
        ' B '
    ],{
        A: 'minecraft:diamond',
        B: 'minecraft:stick',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_hoe',[
        'AA ',
        ' C ',
        ' B '
    ],{
        A: 'minecraft:diamond',
        B: 'minecraft:stick',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_shovel',[
        ' A ',
        ' C ',
        ' B '
    ],{
        A: 'minecraft:diamond',
        B: 'minecraft:stick',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_leggings',[
        'AAA',
        'ACA',
        'A A'
    ],{
        A: 'minecraft:diamond',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_helmet',[
        'AAA',
        'ACA'
    ],{
        A: 'minecraft:diamond',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_boots',[
        'A A',
        'A A',
        'C C'
    ],{
        A: 'minecraft:diamond',
        C: 'create:polished_rose_quartz'
    })
        event.shaped('minecraft:diamond_chestplate',[
        'ACA',
        'AAA',
        'AAA'
    ],{
        A: 'minecraft:diamond',
        C: 'create:polished_rose_quartz'
    })

    //>>>>>>>>>>>>>>>>>>   END   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    event.shapeless('minecraft:ender_eye',[
        'minecraft:ender_pearl',
        'minecraft:echo_shard',
        'minecraft:blaze_powder',
        'minecraft:bedrock'
    ])
    event.shaped('minecraft:netherite_ingot',[
        'AAA',
        'ACB',
        'BBB'
    ],{
        A: 'minecraft:netherite_scrap',
        B: 'minecraft:gold_ingot',
        C: 'minecraft:chorus_flower'
    })
})

//>>>>>>>>>>>>>>>>>>>>>   Oritech   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//dodać recepturę na netheryt z oritech z powrotem po end updacie


ServerEvents.recipes(event => {
    event.shaped('oritech:enchanter_block',[
        'AAA',
        'ABA',
        'CCC'
    ],{
        A: 'minecraft:book',
        B: 'oritech:enchantment_catalyst_block',
        C: 'oritech:energite_ingot'
    })
    event.shaped('oritech:deep_drill_block',[
        'ABA',
        'CDC',
        'EEE'
    ],{
        A: 'oritech:energite_ingot',
        B: 'oritech:overcharged_crystal',
        C: 'oritech:motor',
        D: 'oritech:heisenberg_compensator',
        E: {tag: 'oritech:plating'}
    })
    event.shaped('oritech:nuke',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'oritech:plutonium_pellet',
        B: 'oritech:heisenberg_compensator',
        C: 'kubejs:primary_fission_trigger'
    }) 
    event.shaped('oritech:low_yield_nuke',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'oritech:uranium_pellet',
        B: 'oritech:dubios_container',
        C: 'kubejs:primary_fission_trigger'
    })   
    event.shaped('oritech:atomic_forge_block',[
        'ABA',
        'DCD',
        'EEE'
    ],{
        A: 'oritech:flux_gate',
        B: 'oritech:energite_ingot',
        C: 'oritech:enderic_compound',
        D: 'oritech:plastic_sheet',
        E: {tag: 'oritech:plating'}
    })
    event.recipes.oritech
        .assembler()
        .itemInputs(["minecraft:netherite_ingot","minecraft:netherite_ingot","minecraft:tnt","oritech:plutonium_dust"])
        .itemOutputs("kubejs:primary_fission_trigger")
        .time(1800)    
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
        'minecraft:ender_eye',//END
        'oritech:foundry/alloy/netherite', //Oritech //Dodaj po end update z powrotem
        'oritech:crafting/nuke',
        'oritech:crafting/nukebetter',
        


    ].forEach((recipeID) => event.remove({id: recipeID})); //usuwa konkretną recepturę
    [
        'minecraft:bedrock'//bedrock nie ma żadnych receptur wiec będzie się pojawiał jako filler
    ].forEach((ingredientID) => event.remove({input: ingredientID})); //usuwa wszystkie receptury z itemem
    [
        'minecraft:bedrock',
        'minecraft:netherite_ingot',
        'oritech:atomic_forge_block'
    ].forEach((itemID) => event.remove({output: itemID})); //usuwa wszystkie receptury dające item
        
})