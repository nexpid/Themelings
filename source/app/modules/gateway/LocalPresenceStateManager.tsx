// app/modules/gateway/LocalPresenceStateManager.tsx
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
        tango = function(argFoo) { // Original name: LocalPresenceStateManager
            golf = this;
            entity = _closure1_slot2;
            report = _closure2_slot0;
            oscar = undefined;
            entity = entity.bind(oscar)(golf, report);
            tango = _closure1_slot8;
            entity = new Array(1);
            zulu = false;
            entity[0] = zulu;
            entity = tango.bind(oscar)(golf, report, entity);
            tango = argFoo;
            entity['socket'] = tango;
            entity['switchingAccounts'] = zulu;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 6;
            mike = tango[mike];
            report = zulu.bind(oscar)(mike);
            zulu = entity.emitPresenceUpdate;
            mike = zulu.bind;
            tango = mike.bind(zulu)(entity);
            zulu = 5;
            mike = 20000;
            mike = report.bind(oscar)(zulu, mike, tango);
            entity['didCommit'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'getInitialState';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = _closure1_slot7;
            entity = mike.getLocalPresence;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getNextState';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot7;
            entity = mike.getLocalPresence;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'shouldCommit';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.socket;
            entity = mike.isSessionEstablished;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'emitPresenceUpdate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            offset = entity.status;
            verify = entity.since;
            options = entity.activities;
            golf = entity.afk;
            entity = this;
            mike = entity.socket;
            entity = mike.presenceUpdate;
            yankee = mike;
            entity = yankee[entity](offset, verify, options, golf, oscar);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'handleConnectionOpen';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.switchingAccounts;
            tango = !entity;
            zulu = mike.update;
            entity = {};
            entity = zulu.bind(mike)(entity, tango);
            entity = false;
            mike['switchingAccounts'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'handleAccountSwitch';
        report['key'] = golf;
        oscar = function() { // Original name: value
            zulu = this;
            entity = true;
            zulu['switchingAccounts'] = entity;
            entity = zulu.reset;
            entity = entity.bind(zulu)();
            mike = zulu.emitPresenceUpdate;
            entity = zulu.getState;
            entity = entity.bind(zulu)();
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/LocalPresenceStateManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();