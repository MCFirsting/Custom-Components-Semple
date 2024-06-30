import { world, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('minecraft:name', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            const UseEvent = custom
            if (selectedItem.typeId === 'minecraft:name')
        }
    });
})
