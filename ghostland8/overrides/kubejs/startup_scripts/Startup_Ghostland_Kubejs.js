//Non-test
StartupEvents.registry('item', event => {
    event.create('primary_fission_trigger')
        .displayName('§a§lPrimary Fission Trigger')
        .glow(true)
        .tooltip('Used in oritech explosives')
        .useAnimation('brush')
        .useDuration(itemstack => 64)
        .unstackable()
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            entity.potionEffects.add('minecraft:nausea', 7200),
            entity.potionEffects.add('minecraft:wither', 7200, 3)
            return itemstack
            })
})