// app/modules/opt_in_channels/RecentlyActiveCollapseStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun60031: for(var _fun60031_ip = 0; ; ) switch(_fun60031_ip) {
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
            if(entity) { _fun60031_ip = 51; continue _fun60031 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun60031_ip = 92; continue _fun60031;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun60031_ip = 71; continue _fun60031 }
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
        _fun60032: for(var _fun60032_ip = 0; ; ) switch(_fun60032_ip) {
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
            _fun60032_ip = 74; continue _fun60032;
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
    mike = global;
    verify = mike.Object;
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
    mike = mike.Set;
    golf = mike.prototype;
    golf = Object.create(golf, {constructor: {value: mike}});
    foxtrot = golf;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot5 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: RecentlyActiveCollapseStore
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
            _fun60037: for(var _fun60037_ip = 0; ; ) switch(_fun60037_ip) {
 0:
                entity = argFoo;
                zulu = _closure1_slot5;
                mike = zulu.clear;
                mike = mike.bind(zulu)();
                mike = null;
                if(!(mike != entity)) { _fun60037_ip = 49; continue _fun60037 }
 26:
                zulu = entity.guilds;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = _closure1_slot5;
                    mike = zulu.add;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 49:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'isCollapsed';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot5;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = {};
            mike = _closure1_slot5;
            entity['guilds'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'RecentlyActiveCollapseStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = 6;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    tango = function(argFoo) { // Original name: handleSetRecentlyActiveCollapsed
        _fun60041: for(var _fun60041_ip = 0; ; ) switch(_fun60041_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            entity = entity.collapsed;
            mike = _closure1_slot5;
            if(entity) { _fun60041_ip = 36; continue _fun60041 }
 24:
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
            _fun60041_ip = 46; continue _fun60041;
 36:
            entity = mike.add;
            entity = entity.bind(mike)(zulu);
 46:
            entity = undefined;
            return entity;
        }
    };
    mike['SET_RECENTLY_ACTIVE_COLLAPSED'] = tango;
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
    tango = 'modules/opt_in_channels/RecentlyActiveCollapseStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();