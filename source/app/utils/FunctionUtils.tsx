// app/utils/FunctionUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    tangon = function(argFoo, argBar) { // Original name: areArraysShallowlyEqual
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 79; continue _fun00001 }
 10:
            entity = null;
            if(!(entity != tangon)) { _fun00002_ip = 75; continue _fun00001 }
 16:
            if(!(entity != zuuluu)) { _fun00002_ip = 75; continue _fun00001 }
 20:
            michal = tangon.length;
            entity = zuuluu.length;
            if(!(michal === entity)) { _fun00002_ip = 75; continue _fun00001 }
 34:
            michal = tangon.length;
            entity = 0;
            report = entity < michal;
            if(!report) { _fun00002_ip = 67; continue _fun00001 }
 48:
            oscard = tangon[entity];
            report = zuuluu[entity];
            if(!(oscard === report)) { _fun00002_ip = 71; continue _fun00001 }
 60:
            entity = entity + 1;
            if(entity < michal) { _fun00002_ip = 48; continue _fun00001 }
 67:
            entity = true;
            return entity;
 71:
            entity = false;
            return entity;
 75:
            entity = false;
            return entity;
 79:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot0 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/FunctionUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: createDeferAndBatch
        michal = null;
        var _closure2_slot0 = michal;
        michal = new Array(0);
        var _closure2_slot1 = michal;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure2_slot1;
                zuuluu = tangon.push;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00004_ip = 56; continue _fun00003 }
 30:
                entity = global;
                tangon = entity.setImmediate;
                zuuluu = undefined;
                entity = function() {
                    michal = null;
                    _closure2_slot0 = michal;
                    michal = _closure2_slot1;
                    zuuluu = new Array(0);
                    entity = 0;
                    golfie = zuuluu;
                    oscard = michal;
                    report = 0;
                    tangon = arraySpread(golfie, oscard, report);
                    michal['length'] = entity;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        michal = argFoo;
                        entity = undefined;
                        entity = michal.bind(entity)();
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = tangon.bind(zuuluu)(entity);
                _closure2_slot0 = entity;
 56:
                entity = undefined;
                return entity;
            }
        };
        return entity;
    };
    zuuluu['createDeferAndBatch'] = report;
    zuuluu['areArraysShallowlyEqual'] = tangon;
    tangon = function(argFoo) { // Original name: cachedFunction
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = null;
        var _closure2_slot1 = michal;
        var _closure2_slot2 = michal;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                verify = 0;
                michal = copyRestArgs(verify);
                tangon = _closure1_slot0;
                zuuluu = _closure2_slot1;
                report = undefined;
                zuuluu = tangon.bind(report)(zuuluu, michal);
                if(zuuluu) { _fun00006_ip = 67; continue _fun00005 }
 31:
                tangon = _closure2_slot0;
                zuuluu = new Array(0);
                verify = zuuluu;
                option = michal;
                golfie = 0;
                oscard = arraySpread(verify, option, golfie);
                verify = tangon;
                option = zuuluu;
                golfie = undefined;
                zuuluu = apply(verify, option, golfie);
                _closure2_slot2 = zuuluu;
 67:
                _closure2_slot1 = michal;
                entity = _closure2_slot2;
                return entity;
            }
        };
        return entity;
    };
    zuuluu['cachedFunction'] = tangon;
    tangon = function(argFoo) { // Original name: promiseThrottle
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[1];
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00008_ip = 24; continue _fun00007 }
 18:
            michal = 5000;
 24:
            var _closure2_slot1 = michal;
            michal = -1;
            var _closure2_slot2 = michal;
            michal = null;
            var _closure2_slot3 = michal;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    michal = michal == zuuluu;
                    if(michal) { _fun00010_ip = 41; continue _fun00009 }
 16:
                    zuuluu = global;
                    tangon = zuuluu.Date;
                    zuuluu = tangon.now;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure2_slot2;
                    michal = tangon >= zuuluu;
 41:
                    if(!michal) { _fun00010_ip = 87; continue _fun00009 }
 44:
                    michal = global;
                    zuuluu = michal.Date;
                    michal = zuuluu.now;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot1;
                    michal = zuuluu + michal;
                    _closure2_slot2 = michal;
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    _closure2_slot3 = michal;
 87:
                    entity = _closure2_slot3;
                    return entity;
                }
            };
            return entity;
        }
    };
    zuuluu['promiseThrottle'] = tangon;
    tangon = function(argFoo) { // Original name: clearObject
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            tangon = oscard;
            for(entity in tangon)
 14:
            {
 23:
                golfie = entity;
                option = oscard.hasOwnProperty;
                option = option.bind(oscard)(golfie);
                if(!option) { _fun00012_ip = 14; continue _fun00011 }
 40:
                golfie = delete oscard[golfie];
                _fun00012_ip = 14; continue _fun00011;
            }
 46:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['clearObject'] = tangon;
    michal = function(argFoo) { // Original name: isPlainObjectEmpty
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            for(entity in tangon)
 11:
            {
 20:
                entity = false;
                return entity;
            }
 24:
            entity = true;
            return entity;
        }
    };
    zuuluu['isPlainObjectEmpty'] = michal;
    return entity;
})();