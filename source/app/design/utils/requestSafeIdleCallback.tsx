// app/design/utils/requestSafeIdleCallback.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    tangon = true;
    report['value'] = tangon;
    tangon = '__esModule';
    tangon = oscard.bind(golfie)(zuuluu, tangon, report);
    entity = entity.window;
    var _closure1_slot0 = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'design/utils/requestSafeIdleCallback.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: setOriginWindow
        entity = argFoo;
        _closure1_slot0 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['setOriginWindow'] = tangon;
    michal = function(argFoo, argBar) { // Original name: requestSafeIdleCallback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            oscard = argBar;
            var _closure2_slot0 = option;
            report = _closure1_slot0;
            var _closure2_slot1 = report;
            michal = undefined;
            if(!(michal !== report)) { _fun00002_ip = 51; continue _fun00001 }
 29:
            tangon = report.requestIdleCallback;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 51; continue _fun00001 }
 41:
            tangon = report.cancelIdleCallback;
            if(!(zuuluu == tangon)) { _fun00002_ip = 75; continue _fun00001 }
 51:
            golfie = report.setTimeout;
            tangon = 0;
            tangon = golfie.bind(report)(option, tangon);
            var _closure2_slot6 = tangon;
            tangon = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.clearTimeout;
                entity = _closure2_slot6;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            return tangon;
 75:
            tangon = false;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = zuuluu;
            golfie = function() { // Original name: runOnce
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot2;
                    if(michal) { _fun00004_ip = 59; continue _fun00003 }
 10:
                    michal = true;
                    _closure2_slot2 = michal;
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 49; continue _fun00003 }
 26:
                    report = _closure2_slot1;
                    tangon = report.clearTimeout;
                    zuuluu = _closure2_slot3;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _closure2_slot3 = michal;
 49:
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = michal.bind(entity)();
 59:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot4 = golfie;
            tangon = report.requestIdleCallback;
            tangon = tangon.bind(report)(golfie, oscard);
            var _closure2_slot5 = tangon;
            tangon = report.setTimeout;
            golfie = zuuluu == oscard;
            michal = undefined;
            if(golfie) { _fun00002_ip = 130; continue _fun00001 }
 124:
            michal = oscard.timeout;
 130:
            oscard = zuuluu != michal;
            zuuluu = 1000;
            if(!oscard) { _fun00002_ip = 146; continue _fun00001 }
 143:
            zuuluu = michal;
 146:
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot2;
                    if(michal) { _fun00006_ip = 29; continue _fun00005 }
 10:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.cancelIdleCallback;
                    michal = _closure2_slot5;
                    michal = zuuluu.bind(tangon)(michal);
 29:
                    michal = _closure2_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            _closure2_slot3 = michal;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.cancelIdleCallback;
                    entity = _closure2_slot5;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = _closure2_slot3;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00008_ip = 55; continue _fun00007 }
 32:
                    report = _closure2_slot1;
                    tangon = report.clearTimeout;
                    zuuluu = _closure2_slot3;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _closure2_slot3 = entity;
 55:
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        }
    };
    zuuluu['requestSafeIdleCallback'] = michal;
    return entity;
})();