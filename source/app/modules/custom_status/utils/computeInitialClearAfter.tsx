// app/modules/custom_status/utils/computeInitialClearAfter.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(golf);
    options = golf.ClearAfterValues;
    var _closure1_slot2 = options;
    golf = tango.Object;
    tango = golf.values;
    options = tango.bind(golf)(options);
    golf = options.filter;
    tango = function(argFoo) {
        mike = 'number';
        entity = argFoo;
        entity = typeof entity;
        entity = mike === entity;
        return entity;
    };
    options = golf.bind(options)(tango);
    golf = options.sort;
    tango = function(argFoo, argBar) {
        mike = argFoo;
        entity = argBar;
        entity = mike - entity;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/custom_status/utils/computeInitialClearAfter.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: computeInitialClearAfter
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 1;
            zulu = report[zulu];
            golf = undefined;
            zulu = tango.bind(golf)(zulu);
            tango = zulu.CustomStatusSetting;
            zulu = tango.getSetting;
            report = zulu.bind(tango)();
            zulu = null;
            if(!(zulu != report)) { _fun00002_ip = 357; continue _fun00001 }
 52:
            oscar = report.expiresAtMs;
            tango = '';
            if(!(tango !== oscar)) { _fun00002_ip = 357; continue _fun00001 }
 69:
            tango = global;
            oscar = tango.Number;
            report = report.expiresAtMs;
            oscar = oscar.bind(golf)(report);
            report = tango.isNaN;
            report = report.bind(golf)(oscar);
            if(report) { _fun00002_ip = 345; continue _fun00001 }
 105:
            report = 0;
            if(!(report !== oscar)) { _fun00002_ip = 333; continue _fun00001 }
 114:
            report = tango.Date;
            options = report.prototype;
            options = Object.create(options, {constructor: {value: report}});
            foxtrot = options;
            report = new foxtrot[report](romeo);
            verify = report instanceof Object ? report : options;
            report = tango.Date;
            options = report.prototype;
            options = Object.create(options, {constructor: {value: report}});
            foxtrot = options;
            romeo = oscar;
            report = new foxtrot[report](romeo, yankee);
            offset = report instanceof Object ? report : options;
            report = verify.getFullYear;
            options = report.bind(verify)();
            report = offset.getFullYear;
            report = report.bind(offset)();
            report = options === report;
            if(!report) { _fun00002_ip = 220; continue _fun00001 }
 196:
            options = verify.getMonth;
            yankee = options.bind(verify)();
            options = offset.getMonth;
            options = options.bind(offset)();
            report = yankee === options;
 220:
            if(!report) { _fun00002_ip = 247; continue _fun00001 }
 223:
            options = verify.getDate;
            verify = options.bind(verify)();
            options = offset.getDate;
            options = options.bind(offset)();
            report = verify === options;
 247:
            if(report) { _fun00002_ip = 262; continue _fun00001 }
 250:
            report = _closure1_slot2;
            report = report.TODAY;
            return report;
 262:
            report = tango.Number;
            report = report.bind(golf)(oscar);
            oscar = tango.Date;
            tango = oscar.now;
            tango = tango.bind(oscar)();
            tango = report - tango;
            var _closure2_slot0 = tango;
            report = _closure1_slot3;
            tango = report.find;
            mike = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = mike <= entity;
                return entity;
            };
            mike = tango.bind(report)(mike);
            if(!(zulu == mike)) { _fun00002_ip = 331; continue _fun00001 }
 321:
            zulu = _closure1_slot2;
            mike = zulu.TODAY;
 331:
            return mike;
 333:
            mike = _closure1_slot2;
            mike = mike.DONT_CLEAR;
            return mike;
 345:
            mike = _closure1_slot2;
            mike = mike.TODAY;
            return mike;
 357:
            entity = _closure1_slot2;
            entity = entity.TODAY;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();