// app/stores/SessionsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
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
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    tango = function(argFoo) { // Original name: handleUpdate
        entity = {};
        _closure1_slot9 = entity;
        entity = argFoo;
        zulu = entity.sessions;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = _closure1_slot9;
            entity = zulu.sessionId;
            mike[entity] = zulu;
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    golf = global;
    offset = golf.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = report[entity];
    entity = undefined;
    options = oscar.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = report[options];
    options = oscar.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = report[options];
    options = oscar.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = report[options];
    options = oscar.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = report[options];
    options = oscar.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 5;
    options = report[options];
    options = oscar.bind(entity)(options);
    var _closure1_slot7 = options;
    verify = golf.Object;
    options = verify.freeze;
    golf = new Array(0);
    golf = options.bind(verify)(golf);
    var _closure1_slot8 = golf;
    golf = {};
    var _closure1_slot9 = golf;
    golf = 7;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    golf = golf.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: SessionsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
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
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot7;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getSessions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSession';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = this;
                mike = _closure1_slot7;
                entity = mike.getSessionId;
                zulu = entity.bind(mike)();
                entity = null;
                mike = entity != zulu;
                if(!mike) { _fun00006_ip = 40; continue _fun00005 }
 29:
                mike = tango.getSessionById;
                entity = mike.bind(tango)(zulu);
 40:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getRemoteActivities';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure1_slot7;
                zulu = tango.getSessionId;
                zulu = zulu.bind(tango)();
                var _closure3_slot0 = zulu;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 6;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.find;
                zulu = _closure1_slot9;
                mike = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        mike = argFoo;
                        entity = mike.active;
                        if(!entity) { _fun00010_ip = 29; continue _fun00009 }
 12:
                        zulu = mike.sessionId;
                        mike = _closure3_slot0;
                        entity = zulu !== mike;
 29:
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike);
                zulu = null;
                if(!(zulu == mike)) { _fun00008_ip = 77; continue _fun00007 }
 71:
                entity = _closure1_slot8;
                _fun00008_ip = 83; continue _fun00007;
 77:
                entity = mike.activities;
 83:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getSessionById';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot9;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getActiveSession';
        report['key'] = golf;
        oscar = function() { // Original name: value
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.find;
            mike = _closure1_slot9;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.active;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'SessionsStore';
    golf['displayName'] = mike;
    mike = 8;
    mike = report[mike];
    foxtrot = oscar.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = tango;
    mike['SESSIONS_REPLACE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    backup = tango;
    romeo = mike;
    mike = new backup[golf](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/SessionsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();