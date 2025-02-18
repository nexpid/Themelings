// app/modules/profile_effects/useReloadProfileEffectWhenConfigsAreMissing.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/profile_effects/useReloadProfileEffectWhenConfigsAreMissing.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() {
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        entity = 3;
        tangon = tangon[entity];
        entity = undefined;
        golfie = report.bind(entity)(tangon);
        oscard = golfie.useStateFromStores;
        tangon = _closure1_slot3;
        report = new Array(1);
        report[0] = tangon;
        tangon = function() {
            entity = _closure1_slot3;
            entity = entity.products;
            return entity;
        };
        oscard = oscard.bind(golfie)(report, tangon);
        var _closure2_slot0 = oscard;
        report = _closure1_slot2;
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.values;
            oscard = michal.bind(zuuluu)();
            tangon = new Array(0);
            report = 0;
            golfie = tangon;
            michal = arraySpread(golfie, oscard, report);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 4;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.CollectiblesItemType;
                entity = entity.PROFILE_EFFECT;
                entity = michal === entity;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.some;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    michal = entity.items;
                    entity = 0;
                    entity = michal[entity];
                    report = entity.id;
                    zuuluu = null;
                    entity = zuuluu != report;
                    if(!entity) { _fun00002_ip = 51; continue _fun00001 }
 29:
                    tangon = _closure1_slot4;
                    michal = tangon.getProfileEffectById;
                    michal = michal.bind(tangon)(report);
                    entity = zuuluu == michal;
 51:
                    return entity;
                }
            };
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.fetchUserProfileEffects;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useReloadProfileEffectWhenConfigsAreMissing'] = michal;
    return entity;
})();