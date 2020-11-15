const inferno_fx = new JavaAdapter(Effect, {}, 33, 80, e => {
  Draw.color(Pal.lancerLaser, Pal.sap, Pal.spore, e.fin());
  Angles.randLenVectors(e.id, 10, e.finpow() * 200, e.rotation, 5, (x, y) => {
     Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.6);
   });
});
    
const infernofire = extend(BulletType, {});
infernofire.speed = 32;
infernofire.damage = 38;
infernofire.hitSize = 7;
infernofire.lifetime = 6;
infernofire.pierce = true;
infernofire.status = StatusEffects.burning;
infernofire.ammoMultiplier = 20;
infernofire.statusDuration = 300;
infernofire.keepVelocity = false;
infernofire.hittable = false;
infernofire.shootEffect = inferno_fx;
infernofire.hitEffect = Fx.hitFlameSmall;
infernofire.despawnEffect = Fx.none;

const inferno = extendContent(ItemTurret, "inferno", {});
inferno.ammo(Items.pyratite, infernofire);
/*inferno.buildType = () => extendContent(ItemTurret.ItemTurretBuild, inferno, {
  hasAmmo(){
    return ((inferno.ammo.size > 0) && (inferno.ammo.amount >= 1) && (inferno.liquids.get(Liquids.oil) > 0));
  }
});*/