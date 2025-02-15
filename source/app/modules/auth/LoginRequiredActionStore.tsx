// app/modules/auth/LoginRequiredActionStore.tsx
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
            entity = _closure1_slot9;
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
    var _closure1_slot8 = entity;
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
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRequiredActions
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = argBar;
            entity = null;
            if(!(entity != zulu)) { _fun00006_ip = 29; continue _fun00005 }
 12:
            if(!(entity != mike)) { _fun00006_ip = 51; continue _fun00005 }
 16:
            entity = _closure1_slot5;
            entity[mike] = zulu;
            _fun00006_ip = 51; continue _fun00005;
 29:
            zulu = _closure1_slot5;
            zulu = mike in zulu;
            if(!zulu) { _fun00006_ip = 51; continue _fun00005 }
 43:
            entity = _closure1_slot5;
            entity = delete entity[mike];
 51:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    options = function(argFoo) { // Original name: handleUpdateUser
        entity = argFoo;
        entity = entity.user;
        mike = entity.id;
        _closure1_slot7 = mike;
        entity = undefined;
        return entity;
    };
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
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
    mike = {};
    var _closure1_slot5 = mike;
    mike = null;
    var _closure1_slot6 = mike;
    var _closure1_slot7 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: LoginRequiredActionStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
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
                if(!(entity != mike)) { _fun00008_ip = 16; continue _fun00007 }
 9:
                _closure1_slot5 = mike;
 16:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'requiredActions';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = _closure1_slot5;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00010_ip = 26; continue _fun00009 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'requiredActionsIncludes';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argBar;
                tango = this;
                zulu = tango.requiredActions;
                entity = argFoo;
                zulu = zulu.bind(tango)(entity);
                var _closure3_slot0 = zulu;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00012_ip = 58; continue _fun00011 }
 37:
                tango = report.reduce;
                zulu = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        if(entity) { _fun00014_ip = 26; continue _fun00013 }
 6:
                        tango = _closure3_slot0;
                        zulu = tango.includes;
                        mike = argBar;
                        entity = zulu.bind(tango)(mike);
 26:
                        return entity;
                    }
                };
                mike = false;
                entity = tango.bind(report)(zulu, mike);
 58:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'wasLoginAttemptedInSession';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot6;
            entity = argFoo;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'LoginRequiredActionStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = 6;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleLoginAttempted
        entity = argFoo;
        tango = entity.required_actions;
        zulu = entity.user_id;
        mike = _closure1_slot10;
        _closure1_slot6 = zulu;
        entity = undefined;
        mike = mike.bind(entity)(zulu, tango);
        return entity;
    };
    mike['LOGIN_ATTEMPTED'] = verify;
    mike['CONNECTION_OPEN'] = options;
    mike['CURRENT_USER_UPDATE'] = options;
    options = function(argFoo) { // Original name: handleLogout
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            entity = entity.isSwitchingAccount;
            if(entity) { _fun00016_ip = 25; continue _fun00015 }
 12:
            zulu = _closure1_slot7;
            mike = null;
            entity = mike == zulu;
 25:
            if(entity) { _fun00016_ip = 49; continue _fun00015 }
 28:
            tango = _closure1_slot10;
            zulu = _closure1_slot7;
            mike = undefined;
            entity = null;
            entity = tango.bind(mike)(zulu, entity);
 49:
            entity = undefined;
            return entity;
        }
    };
    mike['LOGOUT'] = options;
    options = function(argFoo) { // Original name: handlePasswordUpdated
        entity = argFoo;
        tango = entity.userId;
        zulu = _closure1_slot10;
        entity = undefined;
        mike = null;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['PASSWORD_UPDATED'] = options;
    tango = function(argFoo) { // Original name: handleRemoveMultiAccount
        entity = argFoo;
        tango = entity.userId;
        zulu = _closure1_slot10;
        entity = undefined;
        mike = null;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['MULTI_ACCOUNT_REMOVE_ACCOUNT'] = tango;
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
    tango = 'modules/auth/LoginRequiredActionStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();