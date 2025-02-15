// app/errors/AppliedGuildBoostError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
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
            report = _closure1_slot6;
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
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo, argBar) { // Original name: AppliedGuildBoostError
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                oscar = this;
                mike = _closure1_slot3;
                report = _closure2_slot0;
                tango = undefined;
                mike = mike.bind(tango)(oscar, report);
                mike = _closure1_slot8;
                entity = new Array(2);
                entity[0] = zulu;
                golf = argBar;
                entity[1] = golf;
                entity = mike.bind(tango)(oscar, report, entity);
                tango = entity.status;
                mike = 429;
                if(!(mike === tango)) { _fun00006_ip = 88; continue _fun00005 }
 69:
                mike = entity._getMessageFromRateLimit;
                mike = mike.bind(entity)(zulu);
                entity['message'] = mike;
 88:
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = '_getMessageFromRateLimit';
        report['key'] = oscar;
        entity = function(argFoo) { // Original name: value
            entity = argFoo;
            entity = entity.body;
            zulu = entity.retry_after;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 5;
            tango = options[entity];
            oscar = undefined;
            report = golf.bind(oscar)(tango);
            tango = report.diffAsUnits;
            verify = _closure1_slot1;
            mike = 6;
            mike = options[mike];
            mike = verify.bind(oscar)(mike);
            mike = mike.Millis;
            mike = mike.SECOND;
            zulu = zulu * mike;
            mike = 0;
            tango = tango.bind(report)(mike, zulu);
            entity = options[entity];
            zulu = golf.bind(oscar)(entity);
            mike = zulu.unitsAsStrings;
            entity = {};
            report = 7;
            verify = options[report];
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.iXc/IS;
            entity['days'] = verify;
            verify = options[report];
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.WW9P5+;
            entity['hours'] = verify;
            report = options[report];
            report = golf.bind(oscar)(report);
            report = report.t;
            report = report.I7rYen;
            entity['minutes'] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'errors/AppliedGuildBoostError.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();