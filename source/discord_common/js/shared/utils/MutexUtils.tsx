// discord_common/js/shared/utils/MutexUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/shared/utils/MutexUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: createLock
        michal = global;
        tangon = michal.Promise;
        zuuluu = tangon.resolve;
        michal = null;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            tangon = function(argFoo, argBar) {
                tangon = _closure2_slot0;
                zuuluu = tangon.then;
                entity = _closure3_slot0;
                report = zuuluu.bind(tangon)(entity);
                tangon = report.then;
                zuuluu = argFoo;
                entity = argBar;
                entity = tangon.bind(report)(zuuluu, entity);
                _closure2_slot0 = entity;
                entity = undefined;
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        return entity;
    };
    zuuluu['createLock'] = tangon;
    michal = function(argFoo) { // Original name: createObservableLock
        entity = argFoo;
        zuuluu = global;
        report = zuuluu.Promise;
        tangon = report.resolve;
        zuuluu = null;
        zuuluu = tangon.bind(report)(zuuluu);
        var _closure2_slot0 = zuuluu;
        zuuluu = new Array(0);
        var _closure2_slot1 = zuuluu;
        zuuluu = false;
        var _closure2_slot2 = zuuluu;
        zuuluu = entity.onContention;
        var _closure2_slot3 = zuuluu;
        zuuluu = entity.onContentionResolved;
        var _closure2_slot4 = zuuluu;
        zuuluu = entity.onTimeout;
        var _closure2_slot5 = zuuluu;
        entity = entity.timeoutMs;
        var _closure2_slot6 = entity;
        entity = function(argFoo, argBar) { // Original name: mutex
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argBar;
                michal = argFoo;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = report;
                michal = _closure2_slot1;
                tangon = michal.length;
                michal = 0;
                if(!(!(tangon > michal))) { _fun00002_ip = 59; continue _fun00001 }
 34:
                michal = _closure2_slot2;
                if(!michal) { _fun00002_ip = 81; continue _fun00001 }
 41:
                tangon = _closure2_slot4;
                michal = undefined;
                michal = tangon.bind(michal)();
                michal = false;
                _closure2_slot2 = michal;
                _fun00002_ip = 81; continue _fun00001;
 59:
                oscard = _closure2_slot3;
                tangon = _closure2_slot1;
                michal = undefined;
                michal = oscard.bind(michal)(report, tangon);
                michal = true;
                _closure2_slot2 = michal;
 81:
                tangon = _closure2_slot1;
                michal = tangon.push;
                michal = michal.bind(tangon)(report);
                michal = _closure2_slot6;
                report = null;
                tangon = report == michal;
                michal = null;
                if(tangon) { _fun00002_ip = 150; continue _fun00001 }
 110:
                tangon = _closure2_slot5;
                tangon = report == tangon;
                michal = null;
                if(tangon) { _fun00002_ip = 150; continue _fun00001 }
 123:
                tangon = global;
                oscard = tangon.setTimeout;
                report = _closure2_slot6;
                tangon = undefined;
                zuuluu = function() {
                    tangon = _closure2_slot5;
                    zuuluu = _closure3_slot1;
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                michal = oscard.bind(tangon)(zuuluu, report);
 150:
                var _closure3_slot2 = michal;
                michal = global;
                zuuluu = michal.Promise;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                option = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        oscard = _closure2_slot0;
                        report = oscard.then;
                        tangon = _closure3_slot0;
                        golfie = report.bind(oscard)(tangon);
                        oscard = golfie.then;
                        report = argFoo;
                        tangon = argBar;
                        oscard = oscard.bind(golfie)(report, tangon);
                        report = oscard.then;
                        tangon = function() {
                            tangon = _closure2_slot1;
                            zuuluu = tangon.splice;
                            michal = 0;
                            entity = 1;
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        tangon = report.bind(oscard)(tangon);
                        _closure2_slot0 = tangon;
                        tangon = _closure3_slot2;
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00004_ip = 99; continue _fun00003 }
 74:
                        tangon = _closure2_slot0;
                        zuuluu = tangon.then;
                        entity = function() {
                            entity = global;
                            zuuluu = entity.clearTimeout;
                            michal = _closure3_slot2;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(entity);
                        _closure2_slot0 = entity;
 99:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = michal;
                entity = new verify[zuuluu](option, golfie);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        zuuluu = function() {
            entity = _closure2_slot1;
            michal = entity.length;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        entity['isMutexHeld'] = zuuluu;
        michal = function() {
            entity = _closure2_slot1;
            return entity;
        };
        entity['getLockHolders'] = michal;
        return entity;
    };
    zuuluu['createObservableLock'] = michal;
    return entity;
})();