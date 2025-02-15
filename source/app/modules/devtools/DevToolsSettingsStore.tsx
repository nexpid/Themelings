// app/modules/devtools/DevToolsSettingsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun98278: for(var _fun98278_ip = 0; ; ) switch(_fun98278_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun98278_ip = 51; continue _fun98278 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun98278_ip = 92; continue _fun98278;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun98278_ip = 71; continue _fun98278 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun98279: for(var _fun98279_ip = 0; ; ) switch(_fun98279_ip) {
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
            _fun98279_ip = 76; continue _fun98279;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    tango = {'sidebarWidth': 360, 'lastOpenTabId': null, 'displayTools': false, 'showDevWidget': false};
    mike = 360;
    options = {'x': 0, 'y': 0};
    tango['devWidgetPosition'] = options;
    options = new Array(0);
    tango['sortedScreenKeys'] = options;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.DeviceSettingsStore;
    tango = function(argFoo) {
        tango = function() { // Original name: DevToolsSettingsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
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
            _fun98284: for(var _fun98284_ip = 0; ; ) switch(_fun98284_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity == zulu)) { _fun98284_ip = 16; continue _fun98284 }
 9:
                zulu = _closure1_slot8;
 16:
                _closure1_slot8 = zulu;
                tango = zulu.sortedScreenKeys;
                if(!(entity == tango)) { _fun98284_ip = 37; continue _fun98284 }
 33:
                tango = new Array(0);
 37:
                entity = {};
                report = _closure1_slot8;
                oscar = entity;
                zulu = copyDataProperties(oscar, report);
                zulu = 'sortedScreenKeys';
                entity[zulu] = tango;
                _closure1_slot8 = entity;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.actionLogger;
                mike = _closure1_slot7;
                mike = mike.isDeveloper;
                zulu['persist'] = mike;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'getUserAgnosticState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'sidebarWidth';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun98286: for(var _fun98286_ip = 0; ; ) switch(_fun98286_ip) {
 0:
                entity = this;
                mike = entity.displayTools;
                entity = 0;
                if(!mike) { _fun98286_ip = 27; continue _fun98286 }
 14:
                mike = _closure1_slot8;
                entity = mike.sidebarWidth;
 27:
                return entity;
            }
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'lastOpenTabId';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun98287: for(var _fun98287_ip = 0; ; ) switch(_fun98287_ip) {
 0:
                entity = _closure1_slot8;
                mike = entity.lastOpenTabId;
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun98287_ip = 25; continue _fun98287 }
 22:
                entity = mike;
 25:
                return entity;
            }
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'displayTools';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun98288: for(var _fun98288_ip = 0; ; ) switch(_fun98288_ip) {
 0:
                entity = _closure1_slot7;
                entity = entity.isDeveloper;
                if(!entity) { _fun98288_ip = 26; continue _fun98288 }
 16:
                mike = _closure1_slot8;
                entity = mike.displayTools;
 26:
                return entity;
            }
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'showDevWidget';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun98289: for(var _fun98289_ip = 0; ; ) switch(_fun98289_ip) {
 0:
                entity = _closure1_slot7;
                entity = entity.isDeveloper;
                if(!entity) { _fun98289_ip = 26; continue _fun98289 }
 16:
                mike = _closure1_slot8;
                entity = mike.showDevWidget;
 26:
                return entity;
            }
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'devWidgetPosition';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot8;
            entity = entity.devWidgetPosition;
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'sortedScreenKeys';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot8;
            entity = entity.sortedScreenKeys;
            return entity;
        };
        report['get'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'DevToolsSettingsStore';
    options['displayName'] = tango;
    options['persistKey'] = tango;
    tango = 6;
    tango = oscar[tango];
    romeo = golf.bind(entity)(tango);
    tango = {};
    report = function(argFoo) { // Original name: handleDevToolsSettingsUpdate
        _fun98292: for(var _fun98292_ip = 0; ; ) switch(_fun98292_ip) {
 0:
            entity = _closure1_slot7;
            entity = entity.isDeveloper;
            if(!entity) { _fun98292_ip = 49; continue _fun98292 }
 16:
            entity = {};
            tango = _closure1_slot8;
            report = entity;
            zulu = copyDataProperties(report, tango);
            zulu = argFoo;
            tango = zulu.settings;
            report = entity;
            zulu = copyDataProperties(report, tango);
            _closure1_slot8 = entity;
 49:
            entity = undefined;
            return entity;
        }
    };
    tango['DEV_TOOLS_SETTINGS_UPDATE'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    foxtrot = report;
    yankee = tango;
    tango = new foxtrot[options](romeo, yankee, offset);
    tango = tango instanceof Object ? tango : report;
    report = 8;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/devtools/DevToolsSettingsStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['DEVTOOLS_SIDEBAR_MIN_WIDTH'] = mike;
    return entity;
})();