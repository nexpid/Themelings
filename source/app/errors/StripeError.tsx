// app/errors/StripeError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot4;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = _closure1_slot7;
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
            report = _closure1_slot4;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: StripeError
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golf = this;
                entity = argFoo;
                verify = entity.error;
                report = _closure1_slot1;
                mike = _closure2_slot0;
                zulu = undefined;
                mike = report.bind(zulu)(golf, mike);
                report = verify.param;
                mike = null;
                if(!(mike == report)) { _fun00006_ip = 75; continue _fun00005 }
 45:
                oscar = _closure1_slot6;
                report = _closure2_slot0;
                options = verify.message;
                mike = new Array(1);
                mike[0] = options;
                mike = oscar.bind(zulu)(golf, report, mike);
                _fun00006_ip = 130; continue _fun00005;
 75:
                oscar = _closure1_slot6;
                report = _closure2_slot0;
                options = {};
                tango = {};
                offset = verify.param;
                yankee = verify.message;
                verify = new Array(1);
                verify[0] = yankee;
                tango[offset] = verify;
                options['body'] = tango;
                tango = new Array(1);
                tango[0] = options;
                mike = oscar.bind(zulu)(golf, report, tango);
 130:
                entity = _closure1_slot2;
                entity = entity.bind(zulu)(mike);
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot5;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot0;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'errors/StripeError.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();