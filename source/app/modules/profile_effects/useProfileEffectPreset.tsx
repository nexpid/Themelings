// app/modules/profile_effects/useProfileEffectPreset.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/profile_effects/useProfileEffectPreset.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        entity = 2;
        tangon = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.useStateFromStores;
        entity = _closure1_slot3;
        tangon = new Array(1);
        tangon[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.getProfileEffectById;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = report.bind(oscard)(tangon, entity);
        tangon = null;
        oscard = tangon != entity;
        var _closure2_slot1 = oscard;
        report = _closure1_slot2;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00002_ip = 20; continue _fun00001 }
 16:
                entity = _closure2_slot1;
 20:
                if(entity) { _fun00002_ip = 61; continue _fun00001 }
 23:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchUserProfileEffects;
                entity = true;
                entity = michal.bind(zuuluu)(entity);
 61:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useProfileEffectPreset'] = michal;
    return entity;
})();