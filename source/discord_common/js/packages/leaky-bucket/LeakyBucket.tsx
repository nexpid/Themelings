// discord_common/js/packages/leaky-bucket/LeakyBucket.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo, argBar) { // Original name: LeakyBucket
            tango = argFoo;
            zulu = this;
            report = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            zulu['_capacity'] = tango;
            zulu['_tokenCount'] = tango;
            mike = new Array(0);
            zulu['_queue'] = mike;
            mike = argBar;
            mike = mike / tango;
            zulu['_intervalPeriod'] = mike;
            mike = null;
            zulu['_intervalID'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = '_processQueue';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = global;
            tango = entity.setTimeout;
            entity = undefined;
            zulu = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike._queue;
                    mike = mike.length;
                    zulu = 0;
                    if(!(mike > zulu)) { _fun00002_ip = 157; continue _fun00001 }
 27:
                    mike = _closure3_slot0;
                    mike = mike._tokenCount;
                    if(!(mike > zulu)) { _fun00002_ip = 157; continue _fun00001 }
 41:
                    mike = _closure3_slot0;
                    zulu = mike._tokenCount;
                    zulu = zulu - 1;
                    mike['_tokenCount'] = zulu;
                    zulu = mike._intervalID;
                    mike = null;
                    if(!(mike == zulu)) { _fun00002_ip = 113; continue _fun00001 }
 72:
                    tango = _closure3_slot0;
                    zulu = global;
                    golf = zulu.setInterval;
                    oscar = tango._intervalPeriod;
                    report = undefined;
                    zulu = function() {
                        mike = _closure3_slot0;
                        entity = mike._iterate;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    zulu = golf.bind(report)(zulu, oscar);
                    tango['_intervalID'] = zulu;
 113:
                    zulu = _closure3_slot0;
                    tango = zulu._queue;
                    zulu = tango.shift;
                    zulu = zulu.bind(tango)();
                    if(!(mike != zulu)) { _fun00002_ip = 143; continue _fun00001 }
 137:
                    mike = undefined;
                    mike = zulu.bind(mike)();
 143:
                    mike = _closure3_slot0;
                    entity = mike._processQueue;
                    entity = entity.bind(mike)();
 157:
                    entity = undefined;
                    return entity;
                }
            };
            mike = 0;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = '_iterate';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = this;
                entity = global;
                oscar = entity.Math;
                report = oscar.min;
                tango = mike._capacity;
                golf = mike._tokenCount;
                zulu = 1;
                zulu = golf + zulu;
                zulu = report.bind(oscar)(tango, zulu);
                mike['_tokenCount'] = zulu;
                tango = mike._tokenCount;
                zulu = mike._capacity;
                zulu = tango >= zulu;
                if(!zulu) { _fun00004_ip = 78; continue _fun00003 }
 66:
                report = mike._intervalID;
                tango = null;
                zulu = tango != report;
 78:
                if(!zulu) { _fun00004_ip = 108; continue _fun00003 }
 81:
                tango = entity.clearInterval;
                zulu = mike._intervalID;
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = null;
                mike['_intervalID'] = entity;
 108:
                entity = mike._processQueue;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'process';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo) {
                mike = _closure3_slot0;
                tango = mike._queue;
                zulu = tango.push;
                entity = argFoo;
                entity = zulu.bind(tango)(entity);
                entity = mike._processQueue;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();