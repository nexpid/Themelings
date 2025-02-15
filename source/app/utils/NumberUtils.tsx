// app/utils/NumberUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/NumberUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: shortenAndLocalizeNumber
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = 1000000;
            if(!(!(report < entity))) { _fun00002_ip = 99; continue _fun00001 }
 13:
            zulu = report / entity;
            mike = zulu.toFixed;
            entity = 1;
            oscar = mike.bind(zulu)(entity);
            golf = _closure1_slot0;
            options = _closure1_slot1;
            entity = 0;
            zulu = options[entity];
            mike = undefined;
            zulu = golf.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = options[entity];
            entity = golf.bind(mike)(entity);
            entity = entity.t;
            mike = entity.Iku48P;
            entity = {};
            entity['value'] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 99:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 0;
            zulu = golf[entity];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = golf[entity];
            entity = oscar.bind(mike)(entity);
            entity = entity.t;
            mike = entity.OiHat7;
            entity = {};
            entity['value'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['shortenAndLocalizeNumber'] = tango;
    tango = function(argFoo, argBar) { // Original name: humanizeValue
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golf = argFoo;
            report = 1000;
            if(!(!(golf < report))) { _fun00004_ip = 280; continue _fun00003 }
 16:
            options = 1000000;
            if(!(!(golf < options))) { _fun00004_ip = 189; continue _fun00003 }
 29:
            entity = global;
            oscar = entity.Math;
            tango = oscar.floor;
            zulu = 10;
            mike = zulu * golf;
            mike = mike / options;
            mike = tango.bind(oscar)(mike);
            zulu = mike / zulu;
            entity = entity.Intl;
            oscar = entity.NumberFormat;
            tango = {};
            entity = 1;
            tango['maximumFractionDigits'] = entity;
            entity = oscar.prototype;
            mike = Object.create(entity, {constructor: {value: oscar}});
            yankee = argBar;
            romeo = mike;
            offset = tango;
            entity = new romeo[oscar](yankee, offset, verify);
            mike = entity instanceof Object ? entity : mike;
            entity = mike.format;
            oscar = entity.bind(mike)(zulu);
            options = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 0;
            zulu = verify[entity];
            mike = undefined;
            zulu = options.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = verify[entity];
            entity = options.bind(mike)(entity);
            entity = entity.t;
            mike = entity.Iku48P;
            entity = {};
            entity['value'] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 189:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            entity = 0;
            zulu = options[entity];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = options[entity];
            entity = oscar.bind(mike)(entity);
            entity = entity.t;
            mike = entity.84R4TU;
            entity = {};
            oscar = global;
            options = oscar.Math;
            oscar = options.floor;
            report = golf / report;
            report = oscar.bind(options)(report);
            entity['value'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 280:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 0;
            zulu = oscar[entity];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = oscar[entity];
            entity = report.bind(mike)(entity);
            entity = entity.t;
            mike = entity.OiHat7;
            entity = {};
            report = global;
            oscar = report.Math;
            report = oscar.floor;
            report = report.bind(oscar)(golf);
            entity['value'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['humanizeValue'] = tango;
    tango = function(argFoo) { // Original name: parseInteger
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            tango = undefined;
            if(!(entity === tango)) { _fun00006_ip = 20; continue _fun00005 }
 12:
            mike = global;
            entity = mike.NaN;
 20:
            mike = null;
            if(!(mike != report)) { _fun00006_ip = 64; continue _fun00005 }
 26:
            zulu = global;
            mike = zulu.parseInt;
            mike = mike.bind(tango)(report);
            tango = zulu.Number;
            zulu = tango.isNaN;
            zulu = zulu.bind(tango)(mike);
            if(!zulu) { _fun00006_ip = 62; continue _fun00005 }
 59:
            mike = entity;
 62:
            return mike;
 64:
            return entity;
        }
    };
    zulu['parseInteger'] = tango;
    mike = function(argFoo, argBar) { // Original name: formatPercent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = arguments[2];
            mike = undefined;
            if(!(entity === mike)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            entity = {};
 11:
            mike = global;
            tango = mike.Intl;
            zulu = tango.NumberFormat;
            mike = {'style': 'percent', 'minimumFractionDigits': 0};
            oscar = mike;
            report = entity;
            entity = copyDataProperties(oscar, report);
            entity = argFoo;
            zulu = zulu.bind(tango)(entity, mike);
            mike = zulu.format;
            entity = argBar;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['formatPercent'] = mike;
    return entity;
})();