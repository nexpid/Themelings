// app/lib/CachedEntriesMap.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: CachedEntriesMap
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = 0;
            zulu['version'] = report;
            report = global;
            report = report.Map;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            romeo = oscar;
            report = new romeo[report](yankee);
            report = report instanceof Object ? report : oscar;
            zulu['data'] = report;
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 2;
            golf = oscar[tango];
            verify = report.bind(entity)(golf);
            options = verify.cachedFunction;
            golf = function() {
                entity = global;
                zulu = entity.Array;
                mike = zulu.from;
                entity = _closure3_slot0;
                tango = entity.data;
                entity = tango.values;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = options.bind(verify)(golf);
            zulu['cachedValues'] = golf;
            golf = oscar[tango];
            verify = report.bind(entity)(golf);
            options = verify.cachedFunction;
            golf = function() {
                entity = global;
                zulu = entity.Array;
                mike = zulu.from;
                entity = _closure3_slot0;
                tango = entity.data;
                entity = tango.keys;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = options.bind(verify)(golf);
            zulu['cachedKeys'] = golf;
            tango = oscar[tango];
            report = report.bind(entity)(tango);
            tango = report.cachedFunction;
            mike = function() {
                entity = global;
                zulu = entity.Array;
                mike = zulu.from;
                entity = _closure3_slot0;
                tango = entity.data;
                entity = tango.entries;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(mike);
            zulu['cachedEntries'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'keys';
        entity['key'] = mike;
        mike = function() { // Original name: value
            zulu = this;
            mike = zulu.cachedKeys;
            entity = zulu.version;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(8);
        mike[0] = entity;
        entity = {};
        oscar = 'values';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu.cachedValues;
            entity = zulu.version;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'entries';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu.cachedEntries;
            entity = zulu.version;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'size';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.data;
            entity = entity.size;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.data;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'set';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                tango = argBar;
                mike = this;
                zulu = mike.data;
                entity = zulu.get;
                entity = entity.bind(zulu)(report);
                if(!(entity !== tango)) { _fun00002_ip = 59; continue _fun00001 }
 28:
                zulu = mike.data;
                entity = zulu.set;
                entity = entity.bind(zulu)(report, tango);
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
 59:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = this;
                tango = zulu.data;
                mike = tango.delete;
                entity = argFoo;
                entity = mike.bind(tango)(entity);
                if(!entity) { _fun00004_ip = 39; continue _fun00003 }
 24:
                mike = zulu.version;
                mike = mike + 1;
                zulu['version'] = mike;
 39:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                entity = mike.data;
                zulu = entity.size;
                entity = 0;
                if(!(entity !== zulu)) { _fun00006_ip = 49; continue _fun00005 }
 19:
                zulu = mike.data;
                entity = zulu.clear;
                entity = entity.bind(zulu)();
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
 49:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[7] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/CachedEntriesMap.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();