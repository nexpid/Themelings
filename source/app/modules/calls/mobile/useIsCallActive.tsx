// app/modules/calls/mobile/useIsCallActive.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: checkIsCallActive
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot2;
            zuuluu = report.isCallActive;
            entity = argBar;
            entity = zuuluu.bind(report)(tangon, entity);
            if(!entity) { _fun00002_ip = 61; continue _fun00001 }
 28:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getParticipants;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.some;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.type;
                    entity = _closure1_slot4;
                    entity = entity.USER;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00004_ip = 37; continue _fun00003 }
 28:
                    michal = michal.ringing;
                    entity = !michal;
 37:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 61:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ParticipantTypes;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/calls/mobile/useIsCallActive.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: useIsCallActive
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        option = _closure1_slot2;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        michal = _closure1_slot3;
        zuuluu[1] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            tangon = _closure1_slot5;
            zuuluu = _closure2_slot0;
            michal = _closure2_slot1;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = report;
    zuuluu['checkIsCallActive'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useIsCallActiveNullable
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        option = _closure1_slot2;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        michal = _closure1_slot3;
        zuuluu[1] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00006_ip = 39; continue _fun00005 }
 16:
                report = _closure1_slot5;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                michal = undefined;
                entity = report.bind(michal)(tangon, zuuluu);
 39:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useIsCallActiveNullable'] = michal;
    return entity;
})();