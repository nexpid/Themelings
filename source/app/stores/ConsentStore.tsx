// app/stores/ConsentStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun63880: for(var _fun63880_ip = 0; ; ) switch(_fun63880_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun63880_ip = 51; continue _fun63880 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun63880_ip = 92; continue _fun63880;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun63880_ip = 71; continue _fun63880 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun63881: for(var _fun63881_ip = 0; ; ) switch(_fun63881_ip) {
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
            _fun63881_ip = 74; continue _fun63881;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    mike = false;
    var _closure1_slot5 = mike;
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot7 = mike;
    mike = null;
    var _closure1_slot8 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ConsentStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
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
        entity = 'hasConsented';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun63886: for(var _fun63886_ip = 0; ; ) switch(_fun63886_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot7;
                tango = entity[zulu];
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun63886_ip = 39; continue _fun63886 }
 23:
                mike = _closure1_slot7;
                mike = mike[zulu];
                entity = mike.consented;
 39:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'consents';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'fetchedConsents';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot5;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'receivedConsentsInConnectionOpen';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot6;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getAuthenticationConsentRequired';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'ConsentStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleConnectionOpen
        _fun63891: for(var _fun63891_ip = 0; ; ) switch(_fun63891_ip) {
 0:
            entity = argFoo;
            zulu = entity.consents;
            entity = null;
            if(!(entity != zulu)) { _fun63891_ip = 51; continue _fun63891 }
 15:
            entity = {};
            report = _closure1_slot7;
            oscar = entity;
            tango = copyDataProperties(oscar, report);
            oscar = entity;
            report = zulu;
            zulu = copyDataProperties(oscar, report);
            _closure1_slot7 = entity;
            entity = true;
            _closure1_slot6 = entity;
 51:
            entity = undefined;
            return entity;
        }
    };
    mike['CONNECTION_OPEN'] = options;
    options = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        zulu = entity.consents;
        entity = {};
        tango = entity;
        mike = copyDataProperties(tango, zulu);
        _closure1_slot7 = entity;
        entity = true;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = options;
    options = function(argFoo) { // Original name: handleUpdateConsents
        entity = argFoo;
        zulu = entity.consents;
        entity = {};
        tango = entity;
        mike = copyDataProperties(tango, zulu);
        _closure1_slot7 = entity;
        entity = true;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    mike['UPDATE_CONSENTS'] = options;
    options = function(argFoo) { // Original name: handleConsentRequired
        entity = argFoo;
        mike = entity.consentRequired;
        _closure1_slot8 = mike;
        entity = undefined;
        return entity;
    };
    mike['SET_CONSENT_REQUIRED'] = options;
    tango = function() { // Original name: handleLogout
        entity = null;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
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
    tango = 'stores/ConsentStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();