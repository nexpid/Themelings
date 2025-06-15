// app/modules/activities/useActivityUsers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useActivityUsers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useActivityUsers
        oscard = argFoo;
        golfie = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresArray;
        option = _closure1_slot3;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        michal = _closure1_slot2;
        zuuluu[1] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00002_ip = 125; continue _fun00001 }
 15:
                report = _closure1_slot3;
                tangon = report.getEmbeddedActivitiesForChannel;
                michal = _closure2_slot1;
                report = tangon.bind(report)(michal);
                tangon = report.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.applicationId;
                    entity = _closure2_slot0;
                    entity = michal === entity;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                if(!(zuuluu != michal)) { _fun00002_ip = 119; continue _fun00001 }
 59:
                zuuluu = global;
                tangon = zuuluu.Array;
                zuuluu = tangon.from;
                michal = michal.userIds;
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.getUser;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    michal = null;
                    entity = argFoo;
                    entity = michal != entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                _fun00002_ip = 123; continue _fun00001;
 119:
                entity = new Array(0);
 123:
                return entity;
 125:
                entity = new Array(0);
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();