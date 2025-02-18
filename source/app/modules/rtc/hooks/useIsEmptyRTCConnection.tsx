// app/modules/rtc/hooks/useIsEmptyRTCConnection.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: isEmpty
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            michal = report.size;
            entity = 0;
            entity = entity === michal;
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 17:
            zuuluu = report.size;
            michal = 1;
            michal = michal === zuuluu;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 32:
            tangon = report.has;
            zuuluu = argBar;
            michal = tangon.bind(report)(zuuluu);
 45:
            entity = michal;
 48:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rtc/hooks/useIsEmptyRTCConnection.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useIsStreamRTCConnectionEmpty
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot4;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot2;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00004_ip = 70; continue _fun00003 }
 13:
                report = _closure1_slot4;
                tangon = report.getUserIds;
                zuuluu = _closure2_slot0;
                report = tangon.bind(report)(zuuluu);
                entity = entity == report;
                if(entity) { _fun00004_ip = 68; continue _fun00003 }
 42:
                tangon = _closure1_slot5;
                zuuluu = _closure1_slot2;
                michal = zuuluu.getId;
                zuuluu = michal.bind(zuuluu)();
                michal = undefined;
                entity = tangon.bind(michal)(report, zuuluu);
 68:
                return entity;
 70:
                entity = true;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsStreamRTCConnectionEmpty'] = tangon;
    michal = function() { // Original name: useIsCallRTCConnectionEmpty
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot2;
        michal[1] = entity;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot3;
                entity = zuuluu.getUserIds;
                report = entity.bind(zuuluu)();
                entity = null;
                entity = entity == report;
                if(entity) { _fun00006_ip = 52; continue _fun00005 }
 26:
                tangon = _closure1_slot5;
                zuuluu = _closure1_slot2;
                michal = zuuluu.getId;
                zuuluu = michal.bind(zuuluu)();
                michal = undefined;
                entity = tangon.bind(michal)(report, zuuluu);
 52:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsCallRTCConnectionEmpty'] = michal;
    return entity;
})();