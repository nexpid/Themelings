// app/modules/parent_tools/hooks/useSelectedTeenUser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/parent_tools/hooks/useSelectedTeenUser.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() {
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        michal = 2;
        michal = oscard[michal];
        tangon = undefined;
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.bind(tangon)();
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot0;
        michal = 3;
        michal = oscard[michal];
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot4;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun00002_ip = 28; continue _fun00001 }
 13:
                zuuluu = _closure1_slot3;
                entity = zuuluu.getCurrentUser;
                entity = entity.bind(zuuluu)();
                return entity;
 28:
                zuuluu = _closure1_slot4;
                entity = zuuluu.getSelectedTeenId;
                tangon = entity.bind(zuuluu)();
                zuuluu = null;
                entity = undefined;
                if(!(zuuluu !== tangon)) { _fun00002_ip = 65; continue _fun00001 }
 50:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getUser;
                entity = michal.bind(zuuluu)(tangon);
 65:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useSelectedTeenUser'] = tangon;
    michal = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                michal = null;
                if(!(michal == entity)) { _fun00004_ip = 35; continue _fun00003 }
 31:
                michal = undefined;
                return michal;
 35:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useTeenUserForId'] = michal;
    return entity;
})();