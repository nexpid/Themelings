// app/records/LinkRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot6;
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
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
            _closure1_slot6 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: LinkRecord
            mike = argFoo;
            report = this;
            oscar = _closure1_slot0;
            tango = _closure2_slot0;
            zulu = undefined;
            oscar = oscar.bind(zulu)(report, tango);
            entity = _closure1_slot5;
            entity = entity.bind(zulu)(report, tango);
            zulu = mike.id;
            entity['id'] = zulu;
            mike = mike.path;
            entity['path'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot4;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot1;
        entity = {};
        oscar = 'fromPath';
        entity['key'] = oscar;
        mike = function(argFoo) { // Original name: value
            mike = argFoo;
            zulu = _closure2_slot0;
            entity = {};
            entity['id'] = mike;
            entity['path'] = mike;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            report = entity;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = null;
        entity = zulu.bind(tango)(report, entity, mike);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 6;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'records/LinkRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    zulu['LinkRecord'] = mike;
    return entity;
})();