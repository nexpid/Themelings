// app/modules/calls/ParticipantFocusManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124383: for(var _fun124383_ip = 0; ; ) switch(_fun124383_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun124383_ip = 51; continue _fun124383 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124383_ip = 92; continue _fun124383;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124383_ip = 71; continue _fun124383 }
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
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124384: for(var _fun124384_ip = 0; ; ) switch(_fun124384_ip) {
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
            _fun124384_ip = 76; continue _fun124384;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: ParticipantFocusManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot0;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            zulu = _closure1_slot7;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            zulu = global;
            zulu = zulu.Map;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            romeo = tango;
            zulu = new romeo[zulu](yankee);
            report = zulu instanceof Object ? zulu : tango;
            tango = report.set;
            zulu = _closure1_slot6;
            mike = entity.handleFocusParticipant;
            mike = tango.bind(report)(zulu, mike);
            entity['stores'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot4;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot1;
        report = {};
        oscar = 'handleFocusParticipant';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun124389: for(var _fun124389_ip = 0; ; ) switch(_fun124389_ip) {
 0:
                zulu = _closure1_slot5;
                entity = zulu.getChannelId;
                oscar = entity.bind(zulu)();
                entity = null;
                if(!(entity != oscar)) { _fun124389_ip = 115; continue _fun124389 }
 25:
                report = _closure1_slot6;
                zulu = report.getSelectedParticipantId;
                zulu = zulu.bind(report)(oscar);
                var _closure3_slot0 = zulu;
                zulu = report.getVideoParticipants;
                oscar = zulu.bind(report)(oscar);
                zulu = _closure1_slot5;
                mike = zulu.getRTCConnection;
                zulu = mike.bind(zulu)();
                if(!(entity != zulu)) { _fun124389_ip = 115; continue _fun124389 }
 73:
                mike = zulu.setSelectedParticipant;
                report = oscar.find;
                tango = function(argFoo) {
                    _fun124390: for(var _fun124390_ip = 0; ; ) switch(_fun124390_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.id;
                        entity = _closure3_slot0;
                        entity = zulu === entity;
                        if(!entity) { _fun124390_ip = 31; continue _fun124390 }
 22:
                        mike = mike.localVideoDisabled;
                        entity = !mike;
 31:
                        return entity;
                    }
                };
                tango = report.bind(oscar)(tango);
                report = entity == tango;
                entity = undefined;
                if(report) { _fun124389_ip = 110; continue _fun124389 }
 105:
                entity = tango.id;
 110:
                entity = mike.bind(zulu)(entity);
 115:
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
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/calls/ParticipantFocusManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();