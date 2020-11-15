const dag_spawn = new JavaAdapter(UnitSpawnAbility, {}, UnitTypes.dagger, 300, 0, 24);
const crawl_spawn = new JavaAdapter(UnitSpawnAbility, {}, UnitTypes.crawler, 240, -24, -8);
const flare_spawn = new JavaAdapter(UnitSpawnAbility, {}, UnitTypes.flare, 210, 24, -8);

const former = extendContent(UnitType, "former", {});
former.constructor = () => extend(MechUnit, {});

former.health = 1500;
former.armor = 6;
former.speed = 0.8;
former.drag = 0.3;
former.flying = false;
former.canBoost = false;

former.abilities.add(dag_spawn, crawl_spawn, flare_spawn);