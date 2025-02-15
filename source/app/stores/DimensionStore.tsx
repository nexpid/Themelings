// app/stores/DimensionStore.tsx
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    entity = function(argFoo) { // Original name: guildDimensionFactory
        entity = {'guildId': null, 'scrollTop': null, 'scrollTo': null};
        mike = argFoo;
        entity['guildId'] = mike;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: _isAtBottom
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot7;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu == tango)) { _fun00006_ip = 24; continue _fun00005 }
 20:
            zulu = undefined;
            return zulu;
 24:
            entity = _closure1_slot7;
            entity = entity[mike];
            mike = entity.scrollTop;
            zulu = entity.scrollHeight;
            entity = entity.offsetHeight;
            entity = zulu - entity;
            entity = mike === entity;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    golf = 0;
    mike = report[golf];
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
    mike = {};
    var _closure1_slot7 = mike;
    mike = {};
    var _closure1_slot8 = mike;
    mike = {};
    mike['scrollTop'] = golf;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: DimensionStore
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
        entity = 'percentageScrolled';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = argFoo;
                zulu = _closure1_slot7;
                tango = zulu[mike];
                zulu = null;
                if(!(zulu == tango)) { _fun00008_ip = 25; continue _fun00007 }
 20:
                zulu = 1;
                return zulu;
 25:
                entity = _closure1_slot7;
                entity = entity[mike];
                mike = entity.scrollTop;
                entity = entity.scrollHeight;
                entity = mike / entity;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getChannelDimensions';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot7;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGuildDimensions';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                entity = _closure1_slot8;
                entity = entity[tango];
                zulu = null;
                if(!(zulu == entity)) { _fun00010_ip = 31; continue _fun00009 }
 20:
                zulu = _closure1_slot12;
                mike = undefined;
                entity = zulu.bind(mike)(tango);
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getGuildListDimensions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isAtBottom';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'DimensionStore';
    golf['displayName'] = mike;
    mike = 7;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleChannelScroll
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            mike = entity.channelId;
            options = entity.scrollTop;
            golf = entity.scrollHeight;
            report = entity.offsetHeight;
            zulu = _closure1_slot7;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu != options)) { _fun00012_ip = 121; continue _fun00011 }
 43:
            if(!(zulu != golf)) { _fun00012_ip = 121; continue _fun00011 }
 47:
            if(!(zulu != report)) { _fun00012_ip = 121; continue _fun00011 }
 51:
            oscar = {};
            oscar['channelId'] = mike;
            oscar['scrollTop'] = options;
            oscar['scrollHeight'] = golf;
            oscar['offsetHeight'] = report;
            if(!(zulu != tango)) { _fun00012_ip = 107; continue _fun00011 }
 76:
            options = _closure1_slot0;
            golf = _closure1_slot1;
            report = 5;
            report = golf[report];
            golf = undefined;
            report = options.bind(golf)(report);
            report = report.bind(golf)(tango, oscar);
            if(report) { _fun00012_ip = 117; continue _fun00011 }
 107:
            report = _closure1_slot7;
            report[mike] = oscar;
            _fun00012_ip = 133; continue _fun00011;
 117:
            report = false;
            return report;
 121:
            if(!(zulu != tango)) { _fun00012_ip = 137; continue _fun00011 }
 125:
            entity = _closure1_slot7;
            entity = delete entity[mike];
 133:
            entity = undefined;
            return entity;
 137:
            entity = false;
            return entity;
        }
    };
    mike['UPDATE_CHANNEL_DIMENSIONS'] = options;
    options = function(argFoo) { // Original name: handleGuildUpdate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            oscar = entity.guildId;
            golf = entity.scrollTop;
            zulu = entity.scrollTo;
            entity = _closure1_slot8;
            mike = entity[oscar];
            entity = null;
            if(!(entity == mike)) { _fun00014_ip = 56; continue _fun00013 }
 37:
            report = _closure1_slot8;
            options = _closure1_slot12;
            mike = undefined;
            mike = options.bind(mike)(oscar);
            report[oscar] = mike;
 56:
            report = undefined;
            if(!(report !== golf)) { _fun00014_ip = 76; continue _fun00013 }
 62:
            mike = _closure1_slot8;
            mike = mike[oscar];
            mike['scrollTop'] = golf;
 76:
            mike = false;
            if(!(report !== zulu)) { _fun00014_ip = 110; continue _fun00013 }
 82:
            report = _closure1_slot8;
            tango = report[oscar];
            tango = tango.scrollTo;
            mike = tango !== zulu;
            report = report[oscar];
            report['scrollTo'] = zulu;
 110:
            entity = entity != zulu;
            if(entity) { _fun00014_ip = 120; continue _fun00013 }
 117:
            entity = mike;
 120:
            return entity;
        }
    };
    mike['UPDATE_CHANNEL_LIST_DIMENSIONS'] = options;
    options = function(argFoo) { // Original name: handleGuildListUpdate
        entity = argFoo;
        mike = entity.scrollTop;
        entity = _closure1_slot9;
        entity['scrollTop'] = mike;
        entity = undefined;
        return entity;
    };
    mike['UPDATE_GUILD_LIST_DIMENSIONS'] = options;
    tango = function(argFoo) { // Original name: handleCallCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = _closure1_slot13;
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            if(!tango) { _fun00016_ip = 33; continue _fun00015 }
 25:
            mike = _closure1_slot7;
            mike = delete mike[zulu];
 33:
            return entity;
        }
    };
    mike['CALL_CREATE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/DimensionStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();