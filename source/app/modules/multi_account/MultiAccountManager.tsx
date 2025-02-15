// app/modules/multi_account/MultiAccountManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot5 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot12 = tango;
    tango = false;
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: MultiAccountManager
            entity = argFoo;
            verify = this;
            report = entity.onSwitchStart;
            tango = entity.onSwitchSuccess;
            zulu = entity.onSwitchError;
            mike = entity.onTokenSet;
            offset = _closure1_slot5;
            options = _closure2_slot0;
            golf = undefined;
            offset = offset.bind(golf)(verify, options);
            entity = _closure1_slot14;
            entity = entity.bind(golf)(verify, options);
            var _closure3_slot0 = entity;
            golf = {};
            options = function(argFoo) { // Original name: LOGOUT
                zulu = _closure3_slot0;
                mike = zulu.handleLogout;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf['LOGOUT'] = options;
            entity['actions'] = golf;
            golf = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot10;
                    mike = zulu.getCurrentUser;
                    zulu = mike.bind(zulu)();
                    tango = null;
                    if(!(tango != zulu)) { _fun00006_ip = 392; continue _fun00005 }
 25:
                    mike = _closure1_slot4;
                    if(!(tango != mike)) { _fun00006_ip = 267; continue _fun00005 }
 36:
                    report = _closure1_slot4;
                    mike = _closure1_slot3;
                    if(!(report === mike)) { _fun00006_ip = 130; continue _fun00005 }
 48:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 8;
                    report = report[mike];
                    mike = undefined;
                    oscar = oscar.bind(mike)(report);
                    report = oscar.track;
                    mike = _closure1_slot12;
                    mike = mike.MULTI_ACCOUNT_SWITCH_FAILURE;
                    mike = report.bind(oscar)(mike);
                    report = _closure3_slot0;
                    report = report.onSwitchError;
                    if(!(tango != report)) { _fun00006_ip = 263; continue _fun00005 }
 110:
                    report = _closure3_slot0;
                    mike = report.onSwitchError;
                    mike = mike.bind(report)(zulu);
                    _fun00006_ip = 263; continue _fun00005;
 130:
                    report = _closure1_slot11;
                    mike = report.getUsers;
                    oscar = mike.bind(report)();
                    report = oscar.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    options = report.bind(oscar)(mike);
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 8;
                    report = report[mike];
                    mike = undefined;
                    golf = oscar.bind(mike)(report);
                    oscar = golf.track;
                    mike = _closure1_slot12;
                    report = mike.MULTI_ACCOUNT_SWITCH_SUCCESS;
                    mike = {};
                    verify = _closure1_slot4;
                    mike['from_user_id'] = verify;
                    mike['linked_user_ids'] = options;
                    mike = oscar.bind(golf)(report, mike);
                    report = _closure3_slot0;
                    report = report.onSwitchSuccess;
                    if(!(tango != report)) { _fun00006_ip = 263; continue _fun00005 }
 243:
                    oscar = _closure3_slot0;
                    report = oscar.onSwitchSuccess;
                    mike = _closure1_slot13;
                    mike = report.bind(oscar)(zulu, mike);
 263:
                    var _closure1_slot4 = tango;
 267:
                    mike = zulu.id;
                    var _closure1_slot3 = mike;
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    golf = 9;
                    mike = mike[golf];
                    report = undefined;
                    oscar = oscar.bind(report)(mike);
                    mike = oscar.getToken;
                    oscar = mike.bind(oscar)();
                    mike = tango != oscar;
                    if(!mike) { _fun00006_ip = 323; continue _fun00005 }
 315:
                    options = '';
                    mike = options !== oscar;
 323:
                    if(!mike) { _fun00006_ip = 360; continue _fun00005 }
 326:
                    mike = _closure1_slot1;
                    entity = _closure1_slot2;
                    entity = entity[golf];
                    report = mike.bind(report)(entity);
                    mike = report.setToken;
                    entity = zulu.id;
                    entity = mike.bind(report)(oscar, entity);
 360:
                    mike = _closure3_slot0;
                    mike = mike.onTokenSet;
                    if(!(tango != mike)) { _fun00006_ip = 392; continue _fun00005 }
 377:
                    mike = _closure3_slot0;
                    entity = mike.onTokenSet;
                    entity = entity.bind(mike)(zulu);
 392:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleConnectionOpen'] = golf;
            oscar = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.isSwitchingAccount;
                    if(zulu) { _fun00008_ip = 60; continue _fun00007 }
 15:
                    zulu = false;
                    _closure1_slot13 = zulu;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 9;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.removeToken;
                    zulu = _closure1_slot3;
                    zulu = tango.bind(report)(zulu);
                    _fun00008_ip = 117; continue _fun00007;
 60:
                    zulu = _closure1_slot3;
                    _closure1_slot4 = zulu;
                    tango = _closure3_slot0;
                    report = tango.onSwitchStart;
                    tango = null;
                    if(!(tango != report)) { _fun00008_ip = 101; continue _fun00007 }
 87:
                    tango = _closure3_slot0;
                    zulu = tango.onSwitchStart;
                    zulu = zulu.bind(tango)();
 101:
                    entity = entity.goHomeAfterSwitching;
                    entity = !entity;
                    entity = !entity;
                    _closure1_slot13 = entity;
 117:
                    entity = null;
                    _closure1_slot3 = entity;
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleLogout'] = oscar;
            entity['onSwitchStart'] = report;
            entity['onSwitchSuccess'] = tango;
            entity['onSwitchError'] = zulu;
            entity['onTokenSet'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot6;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 10;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.subscribe;
            tango = 'CONNECTION_OPEN';
            mike = function() {
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            mike = zulu.handleConnectionOpen;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 10;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = 'CONNECTION_OPEN';
            mike = function() {
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/multi_account/MultiAccountManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();