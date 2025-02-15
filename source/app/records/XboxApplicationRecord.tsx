// app/records/XboxApplicationRecord.tsx
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
            entity = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: XboxApplicationRecord
            mike = argFoo;
            oscar = this;
            zulu = _closure1_slot2;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot7;
            entity = new Array(1);
            entity[0] = mike;
            entity = zulu.bind(tango)(oscar, report, entity);
            oscar = mike.name;
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = 'xbox:';
            zulu = report.bind(tango)(zulu, oscar);
            entity['id'] = zulu;
            mike = mike.name;
            entity['name'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot6;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot3;
        report = {};
        oscar = 'getIconURL';
        report['key'] = oscar;
        entity = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.get;
            entity = 'xbox';
            entity = mike.bind(zulu)(entity);
            entity = entity.icon;
            entity = entity.lightPNG;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'records/XboxApplicationRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    mike = 'xbox:';
    zulu['XBOX_APPLICATION_ID_PREFIX'] = mike;
    return entity;
})();