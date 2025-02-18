// app/modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSecureFramesUserVerifiedKeys
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStoresArray;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 2;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            oscard = _closure1_slot3;
            report = oscard.getUserVerifiedKeys;
            michal = _closure2_slot0;
            michal = report.bind(oscard)(michal);
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.entries;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    michal = report().value;
                    zuuluu = entity;
                    golfie = undefined;
                    tangon = zuuluu === golfie;
                    zuuluu = undefined;
                    if(tangon) { _fun00002_ip = 27; continue _fun00001 }
 24:
                    zuuluu = michal;
 27:
                    michal = undefined;
                    if(tangon) { _fun00002_ip = 57; continue _fun00001 }
 32:
                    oscard = report().value;
                    report = entity;
                    report = report === golfie;
                    michal = undefined;
                    tangon = report;
                    if(report) { _fun00002_ip = 57; continue _fun00001 }
 51:
                    michal = oscard;
                    tangon = report;
 57:
                    if(tangon) { _fun00002_ip = 63; continue _fun00001 }
 60:
                    entity.return();
 63:
                    entity = {};
                    entity['verifiedKey'] = zuuluu;
                    entity['timestamp'] = michal;
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.timestamp;
                entity = -1;
                entity = entity * michal;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useSecureFramesUserVerifiedKeys'] = michal;
    return entity;
})();