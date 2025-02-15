// app/modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
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
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tango = function(argFoo) { // Original name: handleChange
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            entity = entity.expand;
            mike = _closure1_slot5;
            if(entity) { _fun00006_ip = 30; continue _fun00005 }
 24:
            entity = delete mike[zulu];
            _fun00006_ip = 36; continue _fun00005;
 30:
            entity = true;
            mike[zulu] = entity;
 36:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = report[entity];
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
    golf = {};
    var _closure1_slot5 = golf;
    golf = 5;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    golf = golf.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: ChannelListVoiceCategoryStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot6;
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
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity == mike)) { _fun00008_ip = 11; continue _fun00007 }
 9:
                mike = {};
 11:
                _closure1_slot5 = mike;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'isVoiceCategoryExpanded';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                entity = null;
                mike = entity != tango;
                if(!mike) { _fun00010_ip = 23; continue _fun00009 }
 12:
                zulu = _closure1_slot5;
                mike = zulu[tango];
 23:
                entity = entity != mike;
                if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 30:
                entity = mike;
 33:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isVoiceCategoryCollapsed';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu.isVoiceCategoryExpanded;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'ChannelListVoiceCategoryStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = 6;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    mike['VOICE_CATEGORY_COLLAPSE'] = tango;
    mike['VOICE_CATEGORY_EXPAND'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();