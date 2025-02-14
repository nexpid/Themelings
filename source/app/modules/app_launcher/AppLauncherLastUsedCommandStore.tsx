// app/modules/app_launcher/AppLauncherLastUsedCommandStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun114843: for(var _fun114843_ip = 0; ; ) switch(_fun114843_ip) {
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
            if(entity) { _fun114843_ip = 51; continue _fun114843 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun114843_ip = 92; continue _fun114843;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun114843_ip = 71; continue _fun114843 }
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
        _fun114844: for(var _fun114844_ip = 0; ; ) switch(_fun114844_ip) {
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
            _fun114844_ip = 76; continue _fun114844;
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
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.Millis;
    golf = mike.MINUTE;
    mike = 10;
    mike = mike * golf;
    var _closure1_slot5 = mike;
    mike = {'lastUsedCommandId': null, 'lastUsedTimeMs': null};
    var _closure1_slot6 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: AppLauncherLastUsedCommandStore
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun114849: for(var _fun114849_ip = 0; ; ) switch(_fun114849_ip) {
 0:
                entity = argFoo;
                mike = null;
                if(!(mike != entity)) { _fun114849_ip = 40; continue _fun114849 }
 9:
                mike = _closure1_slot6;
                zulu = entity.lastUsedCommandId;
                mike['lastUsedCommandId'] = zulu;
                entity = entity.lastUsedTimeMs;
                mike['lastUsedTimeMs'] = entity;
 40:
                entity = undefined;
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
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getLastUsedCommandId';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun114851: for(var _fun114851_ip = 0; ; ) switch(_fun114851_ip) {
 0:
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                report = entity.bind(mike)();
                entity = _closure1_slot6;
                entity = entity.lastUsedTimeMs;
                tango = null;
                zulu = tango == entity;
                entity = null;
                if(zulu) { _fun114851_ip = 108; continue _fun114851 }
 41:
                zulu = _closure1_slot6;
                zulu = zulu.lastUsedCommandId;
                zulu = tango == zulu;
                entity = null;
                if(zulu) { _fun114851_ip = 108; continue _fun114851 }
 60:
                zulu = _closure1_slot6;
                oscar = zulu.lastUsedTimeMs;
                zulu = _closure1_slot5;
                zulu = oscar + zulu;
                if(!(report > zulu)) { _fun114851_ip = 98; continue _fun114851 }
 82:
                zulu = _closure1_slot6;
                zulu['lastUsedCommandId'] = tango;
                zulu['lastUsedTimeMs'] = tango;
 98:
                mike = _closure1_slot6;
                entity = mike.lastUsedCommandId;
 108:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'AppLauncherLastUsedCommandStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = 7;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    tango = function(argFoo) { // Original name: handleApplicationCommandUsed
        entity = argFoo;
        entity = entity.command;
        mike = _closure1_slot6;
        entity = entity.id;
        mike['lastUsedCommandId'] = entity;
        entity = global;
        zulu = entity.Date;
        entity = zulu.now;
        entity = entity.bind(zulu)();
        mike['lastUsedTimeMs'] = entity;
        entity = undefined;
        return entity;
    };
    mike['APPLICATION_COMMAND_USED'] = tango;
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
    tango = 'modules/app_launcher/AppLauncherLastUsedCommandStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();