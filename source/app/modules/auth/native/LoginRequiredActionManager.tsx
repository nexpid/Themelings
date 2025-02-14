// app/modules/auth/native/LoginRequiredActionManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123932: for(var _fun123932_ip = 0; ; ) switch(_fun123932_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun123932_ip = 51; continue _fun123932 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123932_ip = 92; continue _fun123932;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123932_ip = 71; continue _fun123932 }
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
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123933: for(var _fun123933_ip = 0; ; ) switch(_fun123933_ip) {
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
            _fun123933_ip = 76; continue _fun123933;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    tango = report.bind(entity)(tango);
    options = tango.LoginRequiredActions;
    var _closure1_slot10 = options;
    options = tango.Routes;
    var _closure1_slot11 = options;
    tango = tango.UserSettingsSections;
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: LoginRequiredActionManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot13;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = {};
            zulu = entity.handleConnectionOpen;
            mike['POST_CONNECTION_OPEN'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = 'handleConnectionOpen';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun123938: for(var _fun123938_ip = 0; ; ) switch(_fun123938_ip) {
 0:
                mike = _closure1_slot8;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                var _closure3_slot0 = entity;
                mike = null;
                if(!(mike != entity)) { _fun123938_ip = 204; continue _fun123938 }
 31:
                golf = _closure1_slot9;
                zulu = golf.wasLoginAttemptedInSession;
                mike = entity.id;
                mike = zulu.bind(golf)(mike);
                oscar = golf.requiredActionsIncludes;
                zulu = entity.id;
                entity = _closure1_slot10;
                options = entity.UPDATE_PASSWORD;
                entity = new Array(1);
                entity[0] = options;
                entity = oscar.bind(golf)(zulu, entity);
                if(!mike) { _fun123938_ip = 94; continue _fun123938 }
 91:
                if(entity) { _fun123938_ip = 142; continue _fun123938 }
 94:
                if(!entity) { _fun123938_ip = 204; continue _fun123938 }
 97:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.logout;
                entity = _closure1_slot11;
                entity = entity.LOGIN;
                entity = mike.bind(zulu)(entity);
                _fun123938_ip = 204; continue _fun123938;
 142:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.openUserSettings;
                entity = {};
                report = _closure1_slot12;
                report = report.ACCOUNT_CHANGE_PASSWORD;
                entity['screen'] = report;
                tango = function() { // Original name: onClose
                    _fun123939: for(var _fun123939_ip = 0; ; ) switch(_fun123939_ip) {
 0:
                        report = _closure1_slot9;
                        tango = report.requiredActionsIncludes;
                        mike = _closure3_slot0;
                        zulu = mike.id;
                        mike = _closure1_slot10;
                        oscar = mike.UPDATE_PASSWORD;
                        mike = new Array(1);
                        mike[0] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        if(!mike) { _fun123939_ip = 95; continue _fun123939 }
 52:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 9;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = tango.bind(mike)(zulu);
                        mike = zulu.logout;
                        entity = _closure1_slot11;
                        entity = entity.LOGIN;
                        entity = mike.bind(zulu)(entity);
 95:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onClose'] = tango;
                entity = mike.bind(zulu)(entity);
 204:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth/native/LoginRequiredActionManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();