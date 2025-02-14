// app/utils/DateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    yankee = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = options;
    entity = function(argFoo) { // Original name: startOfDay
        _fun43453: for(var _fun43453_ip = 0; ; ) switch(_fun43453_ip) {
 0:
            entity = argFoo;
            mike = arguments[1];
            zulu = undefined;
            if(!(mike === zulu)) { _fun43453_ip = 14; continue _fun43453 }
 12:
            mike = true;
 14:
            report = typeof entity;
            zulu = 'string';
            zulu = zulu === report;
            if(zulu) { _fun43453_ip = 36; continue _fun43453 }
 28:
            tango = 'number';
            zulu = tango === report;
 36:
            if(zulu) { _fun43453_ip = 51; continue _fun43453 }
 39:
            tango = global;
            tango = tango.Date;
            zulu = entity instanceof tango;
 51:
            report = entity;
            if(zulu) { _fun43453_ip = 115; continue _fun43453 }
 57:
            oscar = _closure1_slot3;
            tango = oscar.error;
            zulu = {};
            zulu['d'] = entity;
            entity = 'Invalid date given to startOfDay';
            entity = tango.bind(oscar)(entity, zulu);
            entity = global;
            entity = entity.Date;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            verify = zulu;
            entity = new verify[entity](options);
            report = entity instanceof Object ? entity : zulu;
 115:
            entity = global;
            zulu = entity.Date;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            verify = tango;
            options = report;
            zulu = new verify[zulu](options, golf);
            tango = zulu instanceof Object ? zulu : tango;
            zulu = tango.getTime;
            zulu = zulu.bind(tango)();
            report = zulu;
            if(mike) { _fun43453_ip = 187; continue _fun43453 }
 162:
            mike = tango.getTimezoneOffset;
            tango = mike.bind(tango)();
            mike = _closure1_slot4;
            mike = tango * mike;
            report = zulu - mike;
 187:
            tango = entity.Math;
            zulu = tango.floor;
            mike = _closure1_slot5;
            mike = report / mike;
            mike = zulu.bind(tango)(mike);
            entity = _closure1_slot5;
            entity = mike * entity;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    report = function(argFoo, argBar) { // Original name: differenceInCalendarDays
        entity = global;
        zulu = entity.Math;
        mike = zulu.floor;
        options = _closure1_slot8;
        golf = undefined;
        tango = argFoo;
        oscar = false;
        report = options.bind(golf)(tango, oscar);
        tango = argBar;
        tango = options.bind(golf)(tango, oscar);
        tango = report - tango;
        entity = _closure1_slot5;
        entity = tango / entity;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot9 = report;
    tango = function(argFoo, argBar) { // Original name: dateFormat
        _fun43455: for(var _fun43455_ip = 0; ; ) switch(_fun43455_ip) {
 0:
            tango = argFoo;
            options = argBar;
            mike = _closure1_slot11;
            zulu = undefined;
            report = mike.bind(zulu)(tango);
            mike = report.locale;
            verify = mike.bind(report)();
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 2;
            mike = oscar[mike];
            mike = report.bind(zulu)(mike);
            report = mike.TimestampHourCycle;
            mike = report.getSetting;
            yankee = mike.bind(report)();
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            sizing = '';
            mike = ':';
            kilo = verify;
            backup = mike;
            foxtrot = options;
            romeo = mike;
            golf = sizing[oscar](kilo, backup, foxtrot, romeo, yankee, offset);
            mike = _closure1_slot6;
            mike = mike[golf];
            report = null;
            if(!(report == mike)) { _fun43455_ip = 153; continue _fun43455 }
 117:
            oscar = _closure1_slot6;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            report = 3;
            report = offset[report];
            report = verify.bind(zulu)(report);
            report = report.bind(zulu)(options);
            oscar[golf] = report;
            mike = report;
 153:
            entity = _closure1_slot12;
            entity = entity.bind(zulu)(tango);
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = function(argFoo) { // Original name: toMoment
        _fun43456: for(var _fun43456_ip = 0; ; ) switch(_fun43456_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot1;
            entity = _closure1_slot2;
            oscar = 4;
            entity = entity[oscar];
            zulu = undefined;
            report = report.bind(zulu)(entity);
            entity = report.isMoment;
            report = entity.bind(report)(tango);
            entity = tango;
            if(report) { _fun43456_ip = 67; continue _fun43456 }
 45:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            entity = mike.bind(zulu)(tango);
 67:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: toDate
        _fun43457: for(var _fun43457_ip = 0; ; ) switch(_fun43457_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.isMoment;
            mike = entity.bind(mike)(zulu);
            entity = zulu;
            if(!mike) { _fun43457_ip = 55; continue _fun43457 }
 45:
            mike = zulu.toDate;
            entity = mike.bind(zulu)();
 55:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    oscar = global;
    romeo = oscar.Object;
    offset = romeo.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeo)(zulu, entity, verify);
    entity = 0;
    verify = options[entity];
    entity = undefined;
    offset = yankee.bind(entity)(verify);
    verify = 1;
    verify = options[verify];
    romeo = yankee.bind(entity)(verify);
    verify = romeo.prototype;
    yankee = Object.create(verify, {constructor: {value: romeo}});
    kilo = 'DateUtils';
    sizing = yankee;
    verify = new sizing[romeo](kilo, backup);
    verify = verify instanceof Object ? verify : yankee;
    var _closure1_slot3 = verify;
    verify = 60000;
    var _closure1_slot4 = verify;
    verify = 86400000;
    var _closure1_slot5 = verify;
    yankee = oscar.Object;
    verify = yankee.create;
    oscar = null;
    oscar = verify.bind(yankee)(oscar);
    var _closure1_slot6 = oscar;
    verify = offset.addChangeListener;
    oscar = function() {
        entity = global;
        zulu = entity.Object;
        mike = zulu.create;
        entity = null;
        mike = mike.bind(zulu)(entity);
        _closure1_slot6 = mike;
        entity = undefined;
        return entity;
    };
    oscar = verify.bind(offset)(oscar);
    oscar = new Array(4);
    verify = {'key': 'days', 'millisecondsInUnit': 86400000};
    oscar[0] = verify;
    verify = {'key': 'hours', 'millisecondsInUnit': 3600000};
    oscar[1] = verify;
    verify = {'key': 'minutes', 'millisecondsInUnit': 60000};
    oscar[2] = verify;
    verify = {'key': 'seconds', 'millisecondsInUnit': 1000};
    oscar[3] = verify;
    var _closure1_slot7 = oscar;
    oscar = 6;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/DateUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['differenceInCalendarDays'] = report;
    report = function(argFoo, argBar) { // Original name: isSameHourMoment
        _fun43459: for(var _fun43459_ip = 0; ; ) switch(_fun43459_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            entity = zulu.toDate;
            zulu = entity.bind(zulu)();
            entity = mike.toDate;
            tango = entity.bind(mike)();
            entity = global;
            report = entity.Math;
            mike = report.abs;
            oscar = zulu - 0;
            entity = tango - 0;
            entity = oscar - entity;
            mike = mike.bind(report)(entity);
            entity = 3600000;
            entity = mike <= entity;
            if(!entity) { _fun43459_ip = 92; continue _fun43459 }
 68:
            mike = zulu.getHours;
            zulu = mike.bind(zulu)();
            mike = tango.getHours;
            mike = mike.bind(tango)();
            entity = zulu === mike;
 92:
            return entity;
        }
    };
    zulu['isSameHourMoment'] = report;
    report = function(argFoo, argBar) { // Original name: isSameDay
        _fun43460: for(var _fun43460_ip = 0; ; ) switch(_fun43460_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            entity = global;
            report = entity.Math;
            mike = report.abs;
            oscar = zulu - 0;
            entity = tango - 0;
            entity = oscar - entity;
            mike = mike.bind(report)(entity);
            entity = _closure1_slot5;
            entity = mike <= entity;
            if(!entity) { _fun43460_ip = 73; continue _fun43460 }
 49:
            mike = zulu.getDate;
            zulu = mike.bind(zulu)();
            mike = tango.getDate;
            mike = mike.bind(tango)();
            entity = zulu === mike;
 73:
            return entity;
        }
    };
    zulu['isSameDay'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: isWithinInterval
        tango = argFoo;
        report = argBar;
        entity = global;
        zulu = entity.Math;
        mike = zulu.abs;
        entity = tango.valueOf;
        tango = entity.bind(tango)();
        entity = report.valueOf;
        entity = entity.bind(report)();
        entity = tango - entity;
        mike = mike.bind(zulu)(entity);
        entity = argBaz;
        entity = mike < entity;
        return entity;
    };
    zulu['isWithinInterval'] = report;
    zulu['dateFormat'] = tango;
    tango = function(argFoo) { // Original name: calendarFormat
        _fun43462: for(var _fun43462_ip = 0; ; ) switch(_fun43462_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 4;
            golf = oscar[entity];
            tango = undefined;
            options = zulu.bind(tango)(golf);
            golf = options.localeData;
            verify = golf.bind(options)();
            entity = oscar[entity];
            entity = zulu.bind(tango)(entity);
            options = entity.bind(tango)();
            oscar = _closure1_slot9;
            entity = _closure1_slot12;
            zulu = entity.bind(tango)(report);
            entity = options.toDate;
            entity = entity.bind(options)();
            oscar = oscar.bind(tango)(zulu, entity);
            entity = -1;
            if(!(!(oscar < entity))) { _fun43462_ip = 175; continue _fun43462 }
 90:
            entity = 0;
            entity = oscar < entity;
            golf = 'lastDay';
            if(entity) { _fun43462_ip = 141; continue _fun43462 }
 103:
            entity = 1;
            zulu = oscar < entity;
            entity = 'sameDay';
            if(zulu) { _fun43462_ip = 138; continue _fun43462 }
 117:
            zulu = 2;
            oscar = oscar < zulu;
            zulu = 'sameElse';
            if(!oscar) { _fun43462_ip = 135; continue _fun43462 }
 131:
            zulu = 'nextDay';
 135:
            entity = zulu;
 138:
            golf = entity;
 141:
            zulu = _closure1_slot10;
            oscar = verify.calendar;
            entity = _closure1_slot11;
            entity = entity.bind(tango)(report);
            entity = oscar.bind(verify)(golf, entity, options);
            entity = zulu.bind(tango)(report, entity);
            _fun43462_ip = 191; continue _fun43462;
 175:
            zulu = _closure1_slot10;
            mike = 'L LT';
            entity = zulu.bind(tango)(report, mike);
 191:
            return entity;
        }
    };
    zulu['calendarFormat'] = tango;
    tango = function(argFoo) { // Original name: calendarFormatCompact
        _fun43463: for(var _fun43463_ip = 0; ; ) switch(_fun43463_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 4;
            golf = report[entity];
            zulu = undefined;
            options = mike.bind(zulu)(golf);
            golf = options.localeData;
            offset = golf.bind(options)();
            entity = report[entity];
            entity = mike.bind(zulu)(entity);
            verify = entity.bind(zulu)();
            report = _closure1_slot9;
            entity = _closure1_slot12;
            mike = entity.bind(zulu)(tango);
            entity = verify.toDate;
            entity = entity.bind(verify)();
            golf = report.bind(zulu)(mike, entity);
            mike = _closure1_slot10;
            entity = 'LT';
            report = 0;
            if(!(report !== golf)) { _fun43463_ip = 158; continue _fun43463 }
 94:
            report = -1;
            if(!(report !== golf)) { _fun43463_ip = 129; continue _fun43463 }
 104:
            report = -7;
            golf = golf > report;
            report = 'L';
            if(!golf) { _fun43463_ip = 127; continue _fun43463 }
 121:
            report = 'dddd';
 127:
            _fun43463_ip = 155; continue _fun43463;
 129:
            options = offset.calendar;
            oscar = _closure1_slot11;
            golf = oscar.bind(zulu)(tango);
            oscar = 'lastDay';
            report = options.bind(offset)(oscar, golf, verify);
 155:
            entity = report;
 158:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    zulu['calendarFormatCompact'] = tango;
    tango = function(argFoo) { // Original name: accessibilityLabelCalendarFormat
        _fun43464: for(var _fun43464_ip = 0; ; ) switch(_fun43464_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            romeo = 4;
            entity = entity[romeo];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = mike.localeData;
            verify = entity.bind(mike)();
            entity = global;
            entity = entity.Date;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            output = mike;
            entity = new output[entity](sizing);
            offset = entity instanceof Object ? entity : mike;
            entity = _closure1_slot9;
            foxtrot = entity.bind(zulu)(tango, offset);
            mike = _closure1_slot10;
            entity = -1;
            entity = foxtrot < entity;
            oscar = 'sameElse';
            options = oscar;
            if(entity) { _fun43464_ip = 153; continue _fun43464 }
 100:
            entity = 0;
            golf = foxtrot < entity;
            entity = 'lastDay';
            if(golf) { _fun43464_ip = 150; continue _fun43464 }
 113:
            golf = 1;
            yankee = foxtrot < golf;
            golf = 'sameDay';
            if(yankee) { _fun43464_ip = 147; continue _fun43464 }
 127:
            yankee = 2;
            foxtrot = foxtrot < yankee;
            yankee = oscar;
            if(!foxtrot) { _fun43464_ip = 144; continue _fun43464 }
 140:
            yankee = 'nextDay';
 144:
            golf = yankee;
 147:
            entity = golf;
 150:
            options = entity;
 153:
            entity = 'LLL';
            if(!(oscar !== options)) { _fun43464_ip = 210; continue _fun43464 }
 161:
            golf = verify.calendar;
            yankee = _closure1_slot1;
            report = _closure1_slot2;
            oscar = report[romeo];
            oscar = yankee.bind(zulu)(oscar);
            oscar = oscar.bind(zulu)(tango);
            report = report[romeo];
            report = yankee.bind(zulu)(report);
            report = report.bind(zulu)(offset);
            entity = golf.bind(verify)(options, oscar, report);
 210:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    zulu['accessibilityLabelCalendarFormat'] = tango;
    tango = function(argFoo, argBar) { // Original name: diffAsUnits
        _fun43465: for(var _fun43465_ip = 0; ; ) switch(_fun43465_ip) {
 0:
            oscar = argFoo;
            golf = argBar;
            zulu = arguments[2];
            report = undefined;
            if(!(zulu === report)) { _fun43465_ip = 19; continue _fun43465 }
 17:
            zulu = false;
 19:
            var _closure2_slot0 = report;
            var _closure2_slot1 = report;
            entity = {'days': 0, 'hours': 0, 'minutes': 0};
            tango = 0;
            if(!zulu) { _fun43465_ip = 45; continue _fun43465 }
 42:
            tango = 1;
 45:
            entity['seconds'] = tango;
            _closure2_slot0 = entity;
            if(!(!(oscar > golf))) { _fun43465_ip = 157; continue _fun43465 }
 58:
            if(!zulu) { _fun43465_ip = 99; continue _fun43465 }
 61:
            zulu = global;
            tango = zulu.Number;
            options = tango.bind(report)(oscar);
            tango = 1200;
            tango = options + tango;
            zulu = zulu.Number;
            zulu = zulu.bind(report)(golf);
            if(!(!(tango > zulu))) { _fun43465_ip = 155; continue _fun43465 }
 99:
            zulu = global;
            tango = zulu.Number;
            tango = tango.bind(report)(golf);
            zulu = zulu.Number;
            zulu = zulu.bind(report)(oscar);
            zulu = tango - zulu;
            _closure2_slot1 = zulu;
            tango = _closure1_slot7;
            zulu = tango.forEach;
            mike = function(argFoo) {
                entity = argFoo;
                report = entity.key;
                tango = entity.millisecondsInUnit;
                zulu = _closure2_slot0;
                entity = global;
                golf = entity.Math;
                oscar = golf.floor;
                entity = _closure2_slot1;
                entity = entity / tango;
                entity = oscar.bind(golf)(entity);
                zulu[report] = entity;
                zulu = _closure2_slot1;
                entity = _closure2_slot0;
                entity = entity[report];
                entity = entity * tango;
                entity = zulu - entity;
                _closure2_slot1 = entity;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
 155:
            return entity;
 157:
            return entity;
        }
    };
    zulu['diffAsUnits'] = tango;
    mike = function(argFoo, argBar) { // Original name: unitsAsStrings
        _fun43467: for(var _fun43467_ip = 0; ; ) switch(_fun43467_ip) {
 0:
            oscar = argFoo;
            mike = argBar;
            entity = oscar.days;
            zulu = 0;
            if(!(!(entity > zulu))) { _fun43467_ip = 188; continue _fun43467 }
 21:
            entity = oscar.hours;
            if(!(!(entity > zulu))) { _fun43467_ip = 115; continue _fun43467 }
 31:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 5;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            report = entity.intl;
            tango = report.formatToPlainString;
            zulu = mike.minutes;
            entity = {};
            golf = global;
            offset = golf.Math;
            verify = offset.max;
            options = oscar.minutes;
            golf = 1;
            golf = verify.bind(offset)(golf, options);
            entity['minutes'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun43467_ip = 186; continue _fun43467;
 115:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 5;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            golf = zulu.intl;
            report = golf.formatToPlainString;
            tango = mike.hours;
            zulu = {};
            options = oscar.hours;
            zulu['hours'] = options;
            options = oscar.minutes;
            zulu['minutes'] = options;
            entity = report.bind(golf)(tango, zulu);
 186:
            _fun43467_ip = 259; continue _fun43467;
 188:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 5;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            report = zulu.intl;
            tango = report.formatToPlainString;
            zulu = mike.days;
            mike = {};
            golf = oscar.days;
            mike['days'] = golf;
            oscar = oscar.hours;
            mike['hours'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 259:
            return entity;
        }
    };
    zulu['unitsAsStrings'] = mike;
    return entity;
})();