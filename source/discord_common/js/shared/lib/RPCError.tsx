// discord_common/js/shared/lib/RPCError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot6;
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
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
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
            _closure1_slot6 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, oscar);
    entity = 0;
    oscar = report[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot0 = oscar;
    oscar = 1;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot1 = oscar;
    oscar = 2;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 3;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 4;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 5;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    tango = tango.Error;
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo, argBar) { // Original name: RPCError
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                golf = this;
                tango = _closure1_slot1;
                oscar = _closure2_slot0;
                report = undefined;
                tango = tango.bind(report)(golf, oscar);
                tango = _closure1_slot5;
                entity = new Array(1);
                entity[0] = mike;
                entity = tango.bind(report)(golf, oscar, entity);
                tango = 'closeCode';
                tango = tango in zulu;
                if(tango) { _fun00006_ip = 87; continue _fun00005 }
 61:
                tango = zulu.errorCode;
                entity['code'] = tango;
                tango = zulu.errorCode;
                entity['errorCode'] = tango;
                _fun00006_ip = 111; continue _fun00005;
 87:
                tango = zulu.closeCode;
                entity['code'] = tango;
                zulu = zulu.closeCode;
                entity['closeCode'] = zulu;
 111:
                entity['message'] = mike;
                mike = 'RPCError';
                entity['name'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot4;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot0;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 6;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/shared/lib/RPCError.tsx';
    tango = report.bind(oscar)(tango);
    zulu['RPCError'] = mike;
    return entity;
})();