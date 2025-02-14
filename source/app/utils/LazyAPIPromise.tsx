// app/utils/LazyAPIPromise.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/LazyAPIPromise.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useLazyAPIPromise
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        offset = _closure1_slot4;
        tango = offset.useState;
        zulu = false;
        zulu = tango.bind(offset)(zulu);
        options = _closure1_slot3;
        mike = undefined;
        golf = 2;
        report = options.bind(mike)(zulu, golf);
        zulu = 0;
        tango = report[zulu];
        oscar = 1;
        report = report[oscar];
        var _closure2_slot2 = report;
        verify = offset.useState;
        report = null;
        report = verify.bind(offset)(report);
        report = options.bind(mike)(report, golf);
        zulu = report[zulu];
        report = report[oscar];
        var _closure2_slot3 = report;
        entity = function() {
            tango = _closure1_slot2;
            zulu = undefined;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun76198: for(var _fun76198_ip = 0; ; ) switch(_fun76198_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun76198_ip = 180; continue _fun76198 }
 10:
                        report = undefined;
                        tango = undefined;
                        oscar = _closure2_slot2;
                        mike = true;
                        mike = oscar.bind(report)(mike);
                        oscar = _closure2_slot3;
                        mike = null;
                        oscar = oscar.bind(report)(mike);
 39: // try_start_0
                        oscar = _closure2_slot0;
                        oscar = oscar.bind(report)();
                        SaveGenerator(address=51);
 49:
                        return oscar;
 51:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(golf) { _fun76198_ip = 80; continue _fun76198 }
 57:
                        options = _closure2_slot2;
                        golf = false;
                        golf = options.bind(report)(golf);
                        golf = _closure2_slot3;
                        golf = golf.bind(report)(mike);
 77: // try_end0
                        return oscar;
 80:
                        return oscar;
 83: // catch_target0
                        CatchBlockStart(arg_register=7);
                        golf = _closure1_slot0;
                        verify = _closure1_slot1;
                        oscar = 3;
                        oscar = verify[oscar];
                        oscar = golf.bind(report)(oscar);
                        oscar = oscar.APIError;
                        golf = oscar.prototype;
                        golf = Object.create(golf, {constructor: {value: oscar}});
                        yankee = golf;
                        offset = options;
                        oscar = new yankee[oscar](offset, verify);
                        tango = oscar instanceof Object ? oscar : golf;
                        oscar = _closure2_slot1;
                        if(!(mike != oscar)) { _fun76198_ip = 157; continue _fun76198 }
 145:
                        golf = _closure2_slot1;
                        oscar = tango;
                        oscar = golf.bind(report)(oscar);
 157:
                        oscar = _closure2_slot3;
                        tango = oscar.bind(report)(tango);
                        tango = _closure2_slot2;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        return mike;
 180:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        mike = entity.bind(mike)();
        entity = new Array(2);
        entity[0] = mike;
        mike = {};
        mike['loading'] = tango;
        mike['error'] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();