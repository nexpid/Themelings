// app/records/InteractionRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun55264: for(var _fun55264_ip = 0; ; ) switch(_fun55264_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zulu)();
            if(entity) { _fun55264_ip = 48; continue _fun55264 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun55264_ip = 86; continue _fun55264;
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
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun55265: for(var _fun55265_ip = 0; ; ) switch(_fun55265_ip) {
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
            _fun55265_ip = 74; continue _fun55265;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    oscar = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = report[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = report[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = report[tango];
    tango = golf.bind(entity)(tango);
    oscar = 6;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: InteractionRecord
            _fun55269: for(var _fun55269_ip = 0; ; ) switch(_fun55269_ip) {
 0:
                zulu = argFoo;
                report = this;
                oscar = _closure1_slot0;
                tango = _closure2_slot0;
                mike = undefined;
                oscar = oscar.bind(mike)(report, tango);
                entity = _closure1_slot6;
                entity = entity.bind(mike)(report, tango);
                mike = zulu.id;
                entity['id'] = mike;
                mike = zulu.name;
                entity['name'] = mike;
                mike = zulu.type;
                entity['type'] = mike;
                mike = zulu.user;
                entity['user'] = mike;
                mike = zulu.name_localized;
                tango = null;
                if(!(tango == mike)) { _fun55269_ip = 99; continue _fun55269 }
 94:
                mike = zulu.name;
 99:
                entity['displayName'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot4;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot1;
        entity = {};
        oscar = 'createFromServer';
        entity['key'] = oscar;
        mike = function(argFoo) { // Original name: value
            mike = argFoo;
            zulu = _closure2_slot0;
            entity = {};
            golf = entity;
            oscar = mike;
            tango = copyDataProperties(golf, oscar);
            report = _closure1_slot5;
            golf = mike.user;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            options = tango;
            mike = new options[report](golf, oscar);
            tango = mike instanceof Object ? mike : tango;
            mike = 'user';
            entity[mike] = tango;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            options = mike;
            golf = entity;
            entity = new options[zulu](golf, oscar);
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
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'records/InteractionRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();