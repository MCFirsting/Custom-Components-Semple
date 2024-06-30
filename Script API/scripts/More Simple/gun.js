
onUse: e => {
    const { itemStack: item, source } = e,
    head = source.getHeadLocation(),
    viewVector = source.getViewDirection(),
    ammo = 'minecraft:fireball',
    direction = { x: head.x + viewVector.x, y: head.y + viewVector.y, z: head.z + viewVector.z },
    power = { x: viewVector.x*0.75, y: viewVector.y*0.75, z: viewVector.z*0.75 },
    damage = item.getComponent("durability").damage,
    durability = item.getComponent("durability").maxDurability,
    inventory = source.getComponent('inventory').container;
//
    source.dimension.spawnEntity(ammo, direction).getComponent('minecraft:projectile').shoot(power, { owner: source });
    source.dimension.playSound('sound_name', source.location);
    if (damage == durability) {
        inventory.setItem(source.selectedSlotIndex, null)
        source.dimension.playSound("random.break", source.location);
    }
    else {
        item.getComponent("durability").damage += 1
        inventory.setItem(source.selectedSlotIndex, item)
    }
}