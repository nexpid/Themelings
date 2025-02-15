// app/modules/guild/BasicGuildStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun72204: for(var _fun72204_ip = 0; ; ) switch(_fun72204_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun72204_ip = 51; continue _fun72204 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun72204_ip = 92; continue _fun72204;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun72204_ip = 71; continue _fun72204 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun72205: for(var _fun72205_ip = 0; ; ) switch(_fun72205_ip) {
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
            _fun72205_ip = 76; continue _fun72205;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    mike = 0;
    golf = report[mike];
    entity = undefined;
    golf = oscar.bind(entity)(golf);
    var _closure1_slot0 = golf;
    golf = 1;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot1 = golf;
    golf = 2;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 3;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 4;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot4 = golf;
    var _closure1_slot5 = mike;
    mike = {};
    var _closure1_slot6 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: BasicGuildStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'getGuild';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun72210: for(var _fun72210_ip = 0; ; ) switch(_fun72210_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                entity = mike[entity];
                mike = null;
                if(!(mike != entity)) { _fun72210_ip = 33; continue _fun72210 }
 20:
                mike = 'type';
                mike = mike in entity;
                if(mike) { _fun72210_ip = 33; continue _fun72210 }
 31:
                return entity;
 33:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getGuildOrStatus';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot6;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getVersion';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'BasicGuildStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleBasicGuildFetch
        zulu = _closure1_slot6;
        entity = argFoo;
        mike = entity.guildId;
        entity = {};
        tango = 'loading';
        entity['type'] = tango;
        zulu[mike] = entity;
        entity = false;
        return entity;
    };
    mike['BASIC_GUILD_FETCH'] = options;
    options = function(argFoo) { // Original name: handleBasicGuildFetchSuccess
        entity = argFoo;
        tango = _closure1_slot6;
        zulu = entity.guildId;
        entity = entity.guildInfo;
        tango[zulu] = entity;
        entity = _closure1_slot5;
        entity = entity + 1;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    mike['BASIC_GUILD_FETCH_SUCCESS'] = options;
    tango = function(argFoo) { // Original name: handleBasicGuildFetchFailure
        zulu = _closure1_slot6;
        entity = argFoo;
        mike = entity.guildId;
        entity = {};
        tango = 'failed';
        entity['type'] = tango;
        zulu[mike] = entity;
        entity = false;
        return entity;
    };
    mike['BASIC_GUILD_FETCH_FAILURE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild/BasicGuildStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();