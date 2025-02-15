// discord_common/js/packages/kv-storage/js/util/Key.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/kv-storage/js/util/Key.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: combineKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = global;
            zulu = mike.Array;
            entity = zulu.isArray;
            entity = entity.bind(zulu)(report);
            if(entity) { _fun00002_ip = 57; continue _fun00001 }
 27:
            entity = new Array(1);
            options = 0;
            offset = entity;
            verify = oscar;
            tango = arraySpread(offset, verify, options);
            entity[tango] = report;
            zulu = 1;
            zulu = tango + zulu;
            _fun00002_ip = 86; continue _fun00001;
 57:
            zulu = new Array(0);
            options = 0;
            offset = zulu;
            verify = oscar;
            options = arraySpread(offset, verify, options);
            offset = zulu;
            verify = report;
            tango = arraySpread(offset, verify, options);
            entity = zulu;
 86:
            tango = entity.length;
            zulu = 1;
            if(!(tango >= zulu)) { _fun00002_ip = 137; continue _fun00001 }
 98:
            tango = entity.length;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 0;
            report = report[zulu];
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            zulu = zulu.MAXIMUM_KEY_BITS;
            if(!(!(tango <= zulu))) { _fun00002_ip = 217; continue _fun00001 }
 137:
            tango = mike.Error;
            golf = entity.length;
            report = mike.JSON;
            zulu = report.stringify;
            oscar = zulu.bind(report)(entity);
            mike = mike.HermesInternal;
            report = mike.concat;
            zulu = 'combination results in an invalid key that has ';
            mike = ' elements: ';
            offset = report.bind(zulu)(golf, mike, oscar);
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            yankee = zulu;
            mike = new yankee[tango](offset, verify);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 217:
            return entity;
        }
    };
    zulu['combineKey'] = tango;
    mike = function(argFoo, argBar) { // Original name: combineKeyPrefix
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = global;
            zulu = mike.Array;
            entity = zulu.isArray;
            entity = entity.bind(zulu)(report);
            if(entity) { _fun00004_ip = 57; continue _fun00003 }
 27:
            entity = new Array(1);
            options = 0;
            offset = entity;
            verify = oscar;
            tango = arraySpread(offset, verify, options);
            entity[tango] = report;
            zulu = 1;
            zulu = tango + zulu;
            _fun00004_ip = 86; continue _fun00003;
 57:
            zulu = new Array(0);
            options = 0;
            offset = zulu;
            verify = oscar;
            options = arraySpread(offset, verify, options);
            offset = zulu;
            verify = report;
            tango = arraySpread(offset, verify, options);
            entity = zulu;
 86:
            tango = entity.length;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 0;
            report = report[zulu];
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            zulu = zulu.MAXIMUM_KEY_BITS;
            if(!(!(tango <= zulu))) { _fun00004_ip = 205; continue _fun00003 }
 125:
            tango = mike.Error;
            golf = entity.length;
            report = mike.JSON;
            zulu = report.stringify;
            oscar = zulu.bind(report)(entity);
            mike = mike.HermesInternal;
            report = mike.concat;
            zulu = 'combination results in an invalid prefix key that has ';
            mike = ' elements: ';
            offset = report.bind(zulu)(golf, mike, oscar);
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            yankee = zulu;
            mike = new yankee[tango](offset, verify);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 205:
            return entity;
        }
    };
    zulu['combineKeyPrefix'] = mike;
    return entity;
})();