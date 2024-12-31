import { world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('minecraft:name', {
        onRandomTick: cropGrowRandomTick,
    });
});


function cropGrowRandomTick(event) {
    const age = event.block.permutation.getState('minecaft:crop_age');
    if (age === undefined || typeof age !== 'number') {
        return;
    }
    else if (age === 4) {
        return; //full Level
    }
    event.block.setPermutation(event.block.permutation.withState('minecaft:crop_age', age + 1));
}
