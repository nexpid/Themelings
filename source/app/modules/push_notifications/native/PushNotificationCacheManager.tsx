// app/modules/push_notifications/native/PushNotificationCacheManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124416: for(var _fun124416_ip = 0; ; ) switch(_fun124416_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun124416_ip = 51; continue _fun124416 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124416_ip = 92; continue _fun124416;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124416_ip = 71; continue _fun124416 }
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
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124417: for(var _fun124417_ip = 0; ; ) switch(_fun124417_ip) {
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
            _fun124417_ip = 76; continue _fun124417;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 7;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: PushNotificationCacheManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot8;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handleUserUpdate;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['POST_CONNECTION_OPEN'] = tango;
            tango = function() { // Original name: CURRENT_USER_UPDATE
                mike = _closure3_slot0;
                entity = mike.handleUserUpdate;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['CURRENT_USER_UPDATE'] = tango;
            tango = function() { // Original name: LOGOUT
                mike = _closure3_slot0;
                entity = mike.handleLogout;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['LOGOUT'] = tango;
            entity['actions'] = zulu;
            zulu = function() {
                _fun124425: for(var _fun124425_ip = 0; ; ) switch(_fun124425_ip) {
 0:
                    zulu = _closure1_slot7;
                    entity = zulu.getCurrentUser;
                    entity = entity.bind(zulu)();
                    report = null;
                    if(!(report == entity)) { _fun124425_ip = 58; continue _fun124425 }
 22:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 6;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    zulu = tango.setCurrentUser;
                    zulu = zulu.bind(tango)(report, report);
                    _fun124425_ip = 102; continue _fun124425;
 58:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.setCurrentUser;
                    mike = entity.username;
                    entity = entity.id;
                    entity = zulu.bind(tango)(mike, entity);
 102:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleUserUpdate'] = zulu;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clearPushNotificationLogs;
                mike = mike.bind(zulu)();
                zulu = _closure3_slot0;
                mike = zulu.handleUserUpdate;
                mike = mike.bind(zulu)();
                return entity;
            };
            entity['handleLogout'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/push_notifications/native/PushNotificationCacheManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();