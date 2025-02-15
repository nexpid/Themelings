// app/stores/RegionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = null;
    var _closure1_slot8 = mike;
    mike = {};
    var _closure1_slot9 = mike;
    mike = 7;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: RegionStore
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
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot7;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getOptimalRegion';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = arguments[0];
                mike = this;
                oscar = undefined;
                if(!(zulu === oscar)) { _fun00006_ip = 14; continue _fun00005 }
 12:
                zulu = null;
 14:
                entity = mike.getRegions;
                report = entity.bind(mike)(zulu);
                zulu = null;
                mike = zulu != report;
                entity = null;
                if(!mike) { _fun00006_ip = 96; continue _fun00005 }
 36:
                tango = report.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.optimal;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                if(!(zulu == mike)) { _fun00006_ip = 93; continue _fun00005 }
 59:
                tango = _closure1_slot0;
                golf = _closure1_slot1;
                zulu = 6;
                zulu = golf[zulu];
                tango = tango.bind(oscar)(zulu);
                zulu = tango.sample;
                mike = zulu.bind(tango)(report);
 93:
                entity = mike;
 96:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getOptimalRegionId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = arguments[0];
                mike = this;
                entity = undefined;
                if(!(zulu === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
                zulu = null;
 14:
                entity = mike.getOptimalRegion;
                mike = entity.bind(mike)(zulu);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00008_ip = 41; continue _fun00007 }
 36:
                entity = mike.id;
 41:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getRandomRegion';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = arguments[0];
                mike = this;
                report = undefined;
                if(!(zulu === report)) { _fun00010_ip = 14; continue _fun00009 }
 12:
                zulu = null;
 14:
                entity = mike.getRegions;
                tango = entity.bind(mike)(zulu);
                entity = null;
                mike = entity != tango;
                if(!mike) { _fun00010_ip = 68; continue _fun00009 }
 34:
                zulu = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = 6;
                mike = oscar[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.sample;
                entity = mike.bind(zulu)(tango);
 68:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getRandomRegionId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = arguments[0];
                mike = this;
                entity = undefined;
                if(!(zulu === entity)) { _fun00012_ip = 14; continue _fun00011 }
 12:
                zulu = null;
 14:
                entity = mike.getRandomRegion;
                mike = entity.bind(mike)(zulu);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00012_ip = 41; continue _fun00011 }
 36:
                entity = mike.id;
 41:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getRegions';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity == zulu)) { _fun00014_ip = 18; continue _fun00013 }
 9:
                entity = _closure1_slot8;
                _fun00014_ip = 29; continue _fun00013;
 18:
                mike = _closure1_slot9;
                entity = mike[zulu];
 29:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'RegionStore';
    golf['displayName'] = mike;
    mike = 8;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleLoadRegions
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 6;
            tango = tango[entity];
            entity = undefined;
            golf = report.bind(entity)(tango);
            oscar = golf.sortBy;
            report = mike.regions;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.name;
                return entity;
            };
            tango = oscar.bind(golf)(report, tango);
            oscar = mike.guildId;
            report = null;
            if(!(report == oscar)) { _fun00016_ip = 72; continue _fun00015 }
 66:
            _closure1_slot8 = tango;
            _fun00016_ip = 85; continue _fun00015;
 72:
            zulu = _closure1_slot9;
            mike = mike.guildId;
            zulu[mike] = tango;
 85:
            return entity;
        }
    };
    mike['LOAD_REGIONS'] = options;
    tango = function(argFoo) { // Original name: handleDeleteGuild
        mike = _closure1_slot9;
        entity = argFoo;
        entity = entity.guild;
        entity = entity.id;
        entity = delete mike[entity];
        entity = undefined;
        return entity;
    };
    mike['GUILD_DELETE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/RegionStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();