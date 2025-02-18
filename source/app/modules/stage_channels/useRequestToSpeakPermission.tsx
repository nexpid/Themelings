// app/modules/stage_channels/useRequestToSpeakPermission.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/useRequestToSpeakPermission.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useRequestToSpeakPermission
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 4;
            tangon = oscard[tangon];
            report = undefined;
            verify = golfie.bind(report)(tangon);
            option = verify.useStateFromStores;
            tangon = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = option.bind(verify)(golfie, zuuluu, tangon);
            var _closure2_slot1 = golfie;
            tangon = _closure1_slot1;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.canEveryoneRole;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.REQUEST_TO_SPEAK;
            tangon = tangon.bind(oscard)(zuuluu, golfie);
            oscard = _closure1_slot4;
            zuuluu = oscard.useState;
            oscard = zuuluu.bind(oscard)(tangon);
            zuuluu = _closure1_slot3;
            entity = 2;
            oscard = zuuluu.bind(report)(oscard, entity);
            entity = 0;
            zuuluu = oscard[entity];
            entity = 1;
            entity = oscard[entity];
            var _closure2_slot2 = entity;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 168; continue _fun00001 }
 163:
            entity = entity.bind(report)(tangon);
 168:
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure2_slot1;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00004_ip = 77; continue _fun00003 }
 16:
                    entity = _closure2_slot2;
                    oscard = undefined;
                    entity = entity.bind(oscard)(report);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.setEveryoneRolePermissionAllowed;
                    michal = _closure2_slot1;
                    entity = _closure1_slot6;
                    entity = entity.REQUEST_TO_SPEAK;
                    entity = zuuluu.bind(tangon)(michal, entity, report);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            entity[1] = michal;
            return entity;
        }
    };
    zuuluu['useRequestToSpeakPermission'] = michal;
    return entity;
})();