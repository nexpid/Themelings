// app/modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx
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
    tangon = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSecureFramesUserVerifiedKeysCount
        michal = argFoo;
        oscard = michal.userId;
        var _closure2_slot0 = oscard;
        zuuluu = michal.keyToOmit;
        var _closure2_slot1 = zuuluu;
        golfie = _closure1_slot2;
        report = golfie.useMemo;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 83; continue _fun00001 }
 13:
                zuuluu = global;
                tangon = zuuluu.Uint8Array;
                oscard = _closure2_slot1;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                golfie = zuuluu;
                michal = new golfie[tangon](oscard, report);
                tangon = michal instanceof Object ? michal : zuuluu;
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 2;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.serializeKey;
                michal = michal.bind(zuuluu)(tangon);
                return michal;
 83:
                return entity;
            }
        };
        golfie = report.bind(golfie)(zuuluu, tangon);
        var _closure2_slot2 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot3;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getUserVerifiedKeys;
                entity = _closure2_slot0;
                tangon = michal.bind(zuuluu)(entity);
                entity = null;
                michal = entity == tangon;
                entity = 0;
                if(michal) { _fun00004_ip = 76; continue _fun00003 }
 36:
                michal = global;
                zuuluu = michal.Object;
                michal = zuuluu.keys;
                tangon = michal.bind(zuuluu)(tangon);
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    michal = _closure2_slot2;
                    entity = argFoo;
                    entity = entity !== michal;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                entity = michal.length;
 76:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useSecureFramesUserVerifiedKeysCount'] = michal;
    return entity;
})();