// app/modules/usage/UsageStatisticsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    options = global;
    offset = options.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = {};
    verify = {};
    golf['sessions'] = verify;
    var _closure1_slot7 = golf;
    var _closure1_slot8 = golf;
    golf = {};
    verify = options.Date;
    options = verify.now;
    options = options.bind(verify)();
    golf['startTimestamp'] = options;
    var _closure1_slot9 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = tango.bind(entity)(golf);
    golf = golf.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: UsageStatisticsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = null;
                if(!(zulu == tango)) { _fun00006_ip = 19; continue _fun00005 }
 12:
                tango = _closure1_slot7;
 19:
                _closure1_slot8 = tango;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 5;
                report = report[tango];
                tango = undefined;
                oscar = oscar.bind(tango)(report);
                report = oscar.getDateOfTimestamp;
                tango = _closure1_slot9;
                tango = tango.startTimestamp;
                tango = report.bind(oscar)(tango);
                report = _closure1_slot8;
                report = report.sessions;
                oscar = report[tango];
                if(!(zulu == oscar)) { _fun00006_ip = 91; continue _fun00005 }
 87:
                oscar = new Array(0);
 91:
                report = oscar.push;
                zulu = _closure1_slot9;
                zulu = report.bind(oscar)(zulu);
                entity = _closure1_slot8;
                zulu = entity.sessions;
                report = oscar.slice;
                entity = -10;
                entity = report.bind(oscar)(entity);
                zulu[tango] = entity;
                entity = mike.pruneOldSessions;
                entity = entity.bind(mike)();
                entity = true;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'pruneOldSessions';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = {};
            var _closure3_slot0 = mike;
            entity = global;
            oscar = entity.Object;
            report = oscar.keys;
            tango = _closure1_slot8;
            tango = tango.sessions;
            report = report.bind(oscar)(tango);
            tango = report.forEach;
            zulu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = argFoo;
                    entity = global;
                    tango = entity.Date;
                    mike = tango.now;
                    mike = mike.bind(tango)();
                    entity = entity.Date;
                    tango = entity.prototype;
                    tango = Object.create(tango, {constructor: {value: entity}});
                    oscar = tango;
                    report = zulu;
                    entity = new oscar[entity](report, tango);
                    tango = entity instanceof Object ? entity : tango;
                    entity = tango.getTime;
                    entity = entity.bind(tango)();
                    mike = mike - entity;
                    entity = 2592000000.0;
                    if(!(mike < entity)) { _fun00008_ip = 105; continue _fun00007 }
 77:
                    mike = _closure3_slot0;
                    entity = _closure1_slot8;
                    entity = entity.sessions;
                    entity = entity[zulu];
                    mike[zulu] = entity;
 105:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            entity = _closure1_slot8;
            entity['sessions'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(golf);
    mike = 'UsageStatisticsStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 7;
    mike = oscar[mike];
    foxtrot = tango.bind(entity)(mike);
    mike = options.prototype;
    tango = Object.create(mike, {constructor: {value: options}});
    romeo = {};
    backup = tango;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/usage/UsageStatisticsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();