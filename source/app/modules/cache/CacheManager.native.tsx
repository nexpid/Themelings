// app/modules/cache/CacheManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123226: for(var _fun123226_ip = 0; ; ) switch(_fun123226_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun123226_ip = 51; continue _fun123226 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123226_ip = 92; continue _fun123226;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123226_ip = 71; continue _fun123226 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123227: for(var _fun123227_ip = 0; ; ) switch(_fun123227_ip) {
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
            _fun123227_ip = 76; continue _fun123227;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'CacheStore';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    options = tango.MINUTE;
    tango = 15;
    tango = tango * options;
    var _closure1_slot11 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: CacheManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            mike = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            mike = mike.bind(tango)(oscar, report);
            mike = _closure1_slot12;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            mike = {};
            tango = entity.handleConnectionOpen;
            mike['POST_CONNECTION_OPEN'] = tango;
            tango = entity.handleConnectionClose;
            mike['CONNECTION_CLOSED'] = tango;
            tango = function(argFoo) { // Original name: APP_STATE_UPDATE
                zulu = _closure3_slot0;
                mike = zulu.handleAppStateUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['APP_STATE_UPDATE'] = tango;
            zulu = function(argFoo) { // Original name: WINDOW_FOCUS
                zulu = _closure3_slot0;
                mike = zulu.handleWindowFocus;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['WINDOW_FOCUS'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'handleConnectionOpen';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.doesDatabaseVersionMatchJsConstants;
            tango = mike.bind(zulu)();
            zulu = tango.then;
            mike = function(argFoo) {
                _fun123235: for(var _fun123235_ip = 0; ; ) switch(_fun123235_ip) {
 0:
                    entity = argFoo;
                    if(entity) { _fun123235_ip = 41; continue _fun123235 }
 6:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.writeCaches;
                    entity = entity.bind(mike)();
 41:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'handleConnectionClose';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = false;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleAppStateUpdate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun123237: for(var _fun123237_ip = 0; ; ) switch(_fun123237_ip) {
 0:
                entity = argFoo;
                tango = entity.state;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 11;
                mike = zulu[mike];
                zulu = undefined;
                report = report.bind(zulu)(mike);
                mike = report.isAndroid;
                mike = mike.bind(report)();
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                report = 12;
                report = golf[report];
                report = oscar.bind(zulu)(report);
                report = report.AppStates;
                if(mike) { _fun123237_ip = 79; continue _fun123237 }
 71:
                mike = report.INACTIVE;
                _fun123237_ip = 85; continue _fun123237;
 79:
                mike = report.BACKGROUND;
 85:
                mike = mike === tango;
                if(!mike) { _fun123237_ip = 106; continue _fun123237 }
 92:
                report = _closure1_slot8;
                tango = report.isConnected;
                mike = tango.bind(report)();
 106:
                if(!mike) { _fun123237_ip = 139; continue _fun123237 }
 109:
                mike = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 10;
                entity = tango[entity];
                mike = mike.bind(zulu)(entity);
                entity = mike.writeCaches;
                entity = entity.bind(mike)();
 139:
                entity = false;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'handleWindowFocus';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun123238: for(var _fun123238_ip = 0; ; ) switch(_fun123238_ip) {
 0:
                entity = argFoo;
                entity = entity.focused;
                if(entity) { _fun123238_ip = 132; continue _fun123238 }
 12:
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                zulu = entity.bind(mike)();
                mike = _closure1_slot9;
                mike = mike.lastWriteTime;
                zulu = zulu - mike;
                mike = _closure1_slot11;
                if(!(!(zulu > mike))) { _fun123238_ip = 79; continue _fun123238 }
 56:
                tango = _closure1_slot10;
                zulu = tango.verbose;
                mike = 'Not writing cache from window unfocus';
                mike = zulu.bind(tango)(mike);
                _fun123238_ip = 132; continue _fun123238;
 79:
                tango = _closure1_slot10;
                zulu = tango.verbose;
                mike = 'Writing cache from window unfocus';
                mike = zulu.bind(tango)(mike);
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.writeCaches;
                entity = entity.bind(mike)();
 132:
                entity = false;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/cache/CacheManager.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();