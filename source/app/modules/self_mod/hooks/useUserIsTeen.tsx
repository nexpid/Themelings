// app/modules/self_mod/hooks/useUserIsTeen.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/hooks/useUserIsTeen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useUserIsTeen
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot2;
                entity = michal.getCurrentUser;
                michal = entity.bind(michal)();
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00002_ip = 33; continue _fun00001 }
 27:
                entity = michal.nsfwAllowed;
 33:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal, entity);
        entity = false;
        entity = entity === michal;
        return entity;
    };
    zuuluu['useUserIsTeen'] = michal;
    return entity;
})();