// app/modules/notification_center/getTimestampString.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    mike = function(argFoo) { // Original name: getDurationString
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeo = entity.seconds;
            entity = entity.getFormatter;
            report = undefined;
            mike = entity.bind(report)();
            entity = _closure1_slot3;
            if(!(!(romeo < entity))) { _fun00002_ip = 461; continue _fun00001 }
 35:
            entity = _closure1_slot4;
            if(!(!(romeo < entity))) { _fun00002_ip = 384; continue _fun00001 }
 46:
            entity = _closure1_slot5;
            if(!(!(romeo < entity))) { _fun00002_ip = 307; continue _fun00001 }
 57:
            entity = _closure1_slot6;
            if(!(!(romeo < entity))) { _fun00002_ip = 230; continue _fun00001 }
 68:
            entity = _closure1_slot7;
            if(!(!(romeo < entity))) { _fun00002_ip = 153; continue _fun00001 }
 76:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 0;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            golf = entity.intl;
            oscar = golf.formatToPlainString;
            tango = mike.years;
            entity = {};
            options = global;
            offset = options.Math;
            verify = offset.floor;
            options = _closure1_slot7;
            options = romeo / options;
            options = verify.bind(offset)(options);
            entity['years'] = options;
            entity = oscar.bind(golf)(tango, entity);
            _fun00002_ip = 228; continue _fun00001;
 153:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 0;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            options = tango.intl;
            golf = options.formatToPlainString;
            oscar = mike.months;
            tango = {};
            verify = global;
            yankee = verify.Math;
            offset = yankee.floor;
            verify = _closure1_slot6;
            verify = romeo / verify;
            verify = offset.bind(yankee)(verify);
            tango['months'] = verify;
            entity = golf.bind(options)(oscar, tango);
 228:
            _fun00002_ip = 305; continue _fun00001;
 230:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 0;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            options = tango.intl;
            golf = options.formatToPlainString;
            oscar = mike.days;
            tango = {};
            verify = global;
            yankee = verify.Math;
            offset = yankee.floor;
            verify = _closure1_slot5;
            verify = romeo / verify;
            verify = offset.bind(yankee)(verify);
            tango['days'] = verify;
            entity = golf.bind(options)(oscar, tango);
 305:
            _fun00002_ip = 382; continue _fun00001;
 307:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 0;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            options = tango.intl;
            golf = options.formatToPlainString;
            oscar = mike.hours;
            tango = {};
            verify = global;
            yankee = verify.Math;
            offset = yankee.floor;
            verify = _closure1_slot4;
            verify = romeo / verify;
            verify = offset.bind(yankee)(verify);
            tango['hours'] = verify;
            entity = golf.bind(options)(oscar, tango);
 382:
            _fun00002_ip = 459; continue _fun00001;
 384:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 0;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            options = tango.intl;
            golf = options.formatToPlainString;
            oscar = mike.minutes;
            tango = {};
            verify = global;
            yankee = verify.Math;
            offset = yankee.floor;
            verify = _closure1_slot3;
            verify = romeo / verify;
            verify = offset.bind(yankee)(verify);
            tango['minutes'] = verify;
            entity = golf.bind(options)(oscar, tango);
 459:
            _fun00002_ip = 512; continue _fun00001;
 461:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 0;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            report = zulu.intl;
            tango = report.formatToPlainString;
            zulu = mike.minutes;
            mike = {};
            oscar = 1;
            mike['minutes'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 512:
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 60;
    var _closure1_slot3 = entity;
    entity = 3600;
    var _closure1_slot4 = entity;
    entity = 86400;
    var _closure1_slot5 = entity;
    entity = 2592000;
    var _closure1_slot6 = entity;
    entity = 31104000;
    var _closure1_slot7 = entity;
    entity = 2;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/notification_center/getTimestampString.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: getTimestampString
        entity = argFoo;
        oscar = entity.since;
        tango = entity.getFormatter;
        zulu = _closure1_slot8;
        mike = {};
        verify = _closure1_slot1;
        offset = _closure1_slot2;
        report = 1;
        golf = offset[report];
        entity = undefined;
        golf = verify.bind(entity)(golf);
        options = golf.bind(entity)();
        golf = options.diff;
        report = offset[report];
        report = verify.bind(entity)(report);
        oscar = report.bind(entity)(oscar);
        report = 's';
        report = golf.bind(options)(oscar, report);
        mike['seconds'] = report;
        mike['getFormatter'] = tango;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['default'] = report;
    report = function() {
        entity = {};
        tango = _closure1_slot0;
        report = _closure1_slot2;
        mike = 0;
        oscar = report[mike];
        zulu = undefined;
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.XIGt+f;
        entity['minutes'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.rhY1Rk;
        entity['hours'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.GBLpQ0;
        entity['days'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.XzBNbW;
        entity['months'] = oscar;
        mike = report[mike];
        mike = tango.bind(zulu)(mike);
        mike = mike.t;
        mike = mike.I1E8p6;
        entity['years'] = mike;
        return entity;
    };
    zulu['getAbbreviatedFormatter'] = report;
    tango = function() {
        entity = {};
        tango = _closure1_slot0;
        report = _closure1_slot2;
        mike = 0;
        oscar = report[mike];
        zulu = undefined;
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.GqQ/Y2;
        entity['minutes'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.c5zfWV;
        entity['hours'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.amjnaG;
        entity['days'] = oscar;
        oscar = report[mike];
        oscar = tango.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.SoON3d;
        entity['months'] = oscar;
        mike = report[mike];
        mike = tango.bind(zulu)(mike);
        mike = mike.t;
        mike = mike.12B3RU;
        entity['years'] = mike;
        return entity;
    };
    zulu['getFullFormatter'] = tango;
    zulu['getDurationString'] = mike;
    return entity;
})();