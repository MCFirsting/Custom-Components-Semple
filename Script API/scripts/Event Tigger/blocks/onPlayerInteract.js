import { world, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('mc:khomloy', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            const khomloyonfire = location.dimension.spawnEntity("mc:khomloy", {
                x: location.x,
                y: location.y,
                z: location.z,
            });
            if (selectedItem.typeId === 'minecraft:flint_and_steel') {
                player.playSound('fire.ignite');
                block.setType("minecraft:air");
                khomloyonfire.dimension.spawnEntity("mc:khomloy_onfire")
            }
        }
    });
});