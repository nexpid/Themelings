// discord_common/js/packages/leaky-bucket/LeakyBucket.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo, argBar) { // Original name: LeakyBucket
            tangon = argFoo;
            zuuluu = this;
            report = _closure1_slot0;
            michal = _closure2_slot0;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            zuuluu['_capacity'] = tangon;
            zuuluu['_tokenCount'] = tangon;
            michal = new Array(0);
            zuuluu['_queue'] = michal;
            michal = argBar;
            michal = michal / tangon;
            zuuluu['_intervalPeriod'] = michal;
            michal = null;
            zuuluu['_intervalID'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = '_processQueue';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = global;
            tangon = entity.setTimeout;
            entity = undefined;
            zuuluu = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal._queue;
                    michal = michal.length;
                    zuuluu = 0;
                    if(!(michal > zuuluu)) { _fun00002_ip = 155; continue _fun00001 }
 27:
                    michal = _closure3_slot0;
                    michal = michal._tokenCount;
                    if(!(michal > zuuluu)) { _fun00002_ip = 155; continue _fun00001 }
 41:
                    michal = _closure3_slot0;
                    zuuluu = michal._tokenCount;
                    zuuluu = zuuluu - 1;
                    michal['_tokenCount'] = zuuluu;
                    zuuluu = michal._intervalID;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00002_ip = 111; continue _fun00001 }
 72:
                    tangon = _closure3_slot0;
                    zuuluu = global;
                    golfie = zuuluu.setInterval;
                    oscard = tangon._intervalPeriod;
                    report = undefined;
                    zuuluu = function() {
                        michal = _closure3_slot0;
                        entity = michal._iterate;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    zuuluu = golfie.bind(report)(zuuluu, oscard);
                    tangon['_intervalID'] = zuuluu;
 111:
                    zuuluu = _closure3_slot0;
                    tangon = zuuluu._queue;
                    zuuluu = tangon.shift;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!(michal != zuuluu)) { _fun00002_ip = 141; continue _fun00001 }
 135:
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
 141:
                    michal = _closure3_slot0;
                    entity = michal._processQueue;
                    entity = entity.bind(michal)();
 155:
                    entity = undefined;
                    return entity;
                }
            };
            michal = 0;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = '_iterate';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                entity = global;
                oscard = entity.Math;
                report = oscard.min;
                tangon = michal._capacity;
                golfie = michal._tokenCount;
                zuuluu = 1;
                zuuluu = golfie + zuuluu;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                michal['_tokenCount'] = zuuluu;
                tangon = michal._tokenCount;
                zuuluu = michal._capacity;
                zuuluu = tangon >= zuuluu;
                if(!zuuluu) { _fun00004_ip = 78; continue _fun00003 }
 66:
                report = michal._intervalID;
                tangon = null;
                zuuluu = tangon != report;
 78:
                if(!zuuluu) { _fun00004_ip = 108; continue _fun00003 }
 81:
                tangon = entity.clearInterval;
                zuuluu = michal._intervalID;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = null;
                michal['_intervalID'] = entity;
 108:
                entity = michal._processQueue;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'process';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            tangon = function(argFoo) {
                michal = _closure3_slot0;
                tangon = michal._queue;
                zuuluu = tangon.push;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity);
                entity = michal._processQueue;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();