// app/utils/DateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = option;
    entity = function(argFoo) { // Original name: startOfDay
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = arguments[1];
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            michal = true;
 14:
            report = typeof entity;
            zuuluu = 'string';
            zuuluu = zuuluu === report;
            if(zuuluu) { _fun00002_ip = 36; continue _fun00001 }
 28:
            tangon = 'number';
            zuuluu = tangon === report;
 36:
            if(zuuluu) { _fun00002_ip = 51; continue _fun00001 }
 39:
            tangon = global;
            tangon = tangon.Date;
            zuuluu = entity instanceof tangon;
 51:
            report = entity;
            if(zuuluu) { _fun00002_ip = 115; continue _fun00001 }
 57:
            oscard = _closure1_slot3;
            tangon = oscard.error;
            zuuluu = {};
            zuuluu['d'] = entity;
            entity = 'Invalid date given to startOfDay';
            entity = tangon.bind(oscard)(entity, zuuluu);
            entity = global;
            entity = entity.Date;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            verify = zuuluu;
            entity = new verify[entity](option);
            report = entity instanceof Object ? entity : zuuluu;
 115:
            entity = global;
            zuuluu = entity.Date;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            verify = tangon;
            option = report;
            zuuluu = new verify[zuuluu](option, golfie);
            tangon = zuuluu instanceof Object ? zuuluu : tangon;
            zuuluu = tangon.getTime;
            zuuluu = zuuluu.bind(tangon)();
            report = zuuluu;
            if(michal) { _fun00002_ip = 186; continue _fun00001 }
 162:
            michal = tangon.getTimezoneOffset;
            tangon = michal.bind(tangon)();
            michal = 60000;
            michal = michal * tangon;
            report = zuuluu - michal;
 186:
            tangon = entity.Math;
            zuuluu = tangon.floor;
            michal = _closure1_slot4;
            michal = report / michal;
            michal = zuuluu.bind(tangon)(michal);
            entity = _closure1_slot4;
            entity = michal * entity;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    report = function(argFoo, argBar) { // Original name: differenceInCalendarDays
        entity = global;
        zuuluu = entity.Math;
        michal = zuuluu.floor;
        option = _closure1_slot7;
        golfie = undefined;
        tangon = argFoo;
        oscard = false;
        report = option.bind(golfie)(tangon, oscard);
        tangon = argBar;
        tangon = option.bind(golfie)(tangon, oscard);
        tangon = report - tangon;
        entity = _closure1_slot4;
        entity = tangon / entity;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot8 = report;
    tangon = function(argFoo, argBar) { // Original name: dateFormat
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            option = argBar;
            michal = _closure1_slot10;
            zuuluu = undefined;
            report = michal.bind(zuuluu)(tangon);
            michal = report.locale;
            verify = michal.bind(report)();
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            report = michal.TimestampHourCycle;
            michal = report.getSetting;
            yankee = michal.bind(report)();
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            sizing = '';
            michal = ':';
            kiloes = verify;
            backup = michal;
            foxtra = option;
            romeon = michal;
            golfie = sizing[oscard](kiloes, backup, foxtra, romeon, yankee, offset);
            michal = _closure1_slot5;
            michal = michal[golfie];
            report = null;
            if(!(report == michal)) { _fun00004_ip = 153; continue _fun00003 }
 117:
            oscard = _closure1_slot5;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            report = 3;
            report = offset[report];
            report = verify.bind(zuuluu)(report);
            report = report.bind(zuuluu)(option);
            oscard[golfie] = report;
            michal = report;
 153:
            entity = _closure1_slot11;
            entity = entity.bind(zuuluu)(tangon);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = function(argFoo) { // Original name: toMoment
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot1;
            entity = _closure1_slot2;
            oscard = 4;
            entity = entity[oscard];
            zuuluu = undefined;
            report = report.bind(zuuluu)(entity);
            entity = report.isMoment;
            report = entity.bind(report)(tangon);
            entity = tangon;
            if(report) { _fun00006_ip = 67; continue _fun00005 }
 45:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            entity = michal.bind(zuuluu)(tangon);
 67:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: toDate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.isMoment;
            michal = entity.bind(michal)(zuuluu);
            entity = zuuluu;
            if(!michal) { _fun00008_ip = 55; continue _fun00007 }
 45:
            michal = zuuluu.toDate;
            entity = michal.bind(zuuluu)();
 55:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    oscard = global;
    romeon = oscard.Object;
    offset = romeon.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeon)(zuuluu, entity, verify);
    entity = 0;
    verify = option[entity];
    entity = undefined;
    offset = yankee.bind(entity)(verify);
    verify = 1;
    verify = option[verify];
    romeon = yankee.bind(entity)(verify);
    verify = romeon.prototype;
    yankee = Object.create(verify, {constructor: {value: romeon}});
    kiloes = 'DateUtils';
    sizing = yankee;
    verify = new sizing[romeon](kiloes, backup);
    verify = verify instanceof Object ? verify : yankee;
    var _closure1_slot3 = verify;
    verify = 86400000;
    var _closure1_slot4 = verify;
    yankee = oscard.Object;
    verify = yankee.create;
    oscard = null;
    oscard = verify.bind(yankee)(oscard);
    var _closure1_slot5 = oscard;
    verify = offset.addChangeListener;
    oscard = function() {
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.create;
        entity = null;
        michal = michal.bind(zuuluu)(entity);
        _closure1_slot5 = michal;
        entity = undefined;
        return entity;
    };
    oscard = verify.bind(offset)(oscard);
    oscard = new Array(4);
    verify = {'key': 'days', 'millisecondsInUnit': 86400000};
    oscard[0] = verify;
    verify = {'key': 'hours', 'millisecondsInUnit': 3600000};
    oscard[1] = verify;
    verify = {'key': 'minutes', 'millisecondsInUnit': 60000};
    oscard[2] = verify;
    verify = {'key': 'seconds', 'millisecondsInUnit': 1000};
    oscard[3] = verify;
    var _closure1_slot6 = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/DateUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['differenceInCalendarDays'] = report;
    report = function(argFoo, argBar) { // Original name: isSameHourMoment
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            entity = zuuluu.toDate;
            zuuluu = entity.bind(zuuluu)();
            entity = michal.toDate;
            tangon = entity.bind(michal)();
            entity = global;
            report = entity.Math;
            michal = report.abs;
            oscard = zuuluu - 0;
            entity = tangon - 0;
            entity = oscard - entity;
            michal = michal.bind(report)(entity);
            entity = 3600000;
            entity = michal <= entity;
            if(!entity) { _fun00010_ip = 92; continue _fun00009 }
 68:
            michal = zuuluu.getHours;
            zuuluu = michal.bind(zuuluu)();
            michal = tangon.getHours;
            michal = michal.bind(tangon)();
            entity = zuuluu === michal;
 92:
            return entity;
        }
    };
    zuuluu['isSameHourMoment'] = report;
    report = function(argFoo, argBar) { // Original name: isSameDay
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            entity = global;
            report = entity.Math;
            michal = report.abs;
            oscard = zuuluu - 0;
            entity = tangon - 0;
            entity = oscard - entity;
            michal = michal.bind(report)(entity);
            entity = _closure1_slot4;
            entity = michal <= entity;
            if(!entity) { _fun00012_ip = 73; continue _fun00011 }
 49:
            michal = zuuluu.getDate;
            zuuluu = michal.bind(zuuluu)();
            michal = tangon.getDate;
            michal = michal.bind(tangon)();
            entity = zuuluu === michal;
 73:
            return entity;
        }
    };
    zuuluu['isSameDay'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: isWithinInterval
        tangon = argFoo;
        report = argBar;
        entity = global;
        zuuluu = entity.Math;
        michal = zuuluu.abs;
        entity = tangon.valueOf;
        tangon = entity.bind(tangon)();
        entity = report.valueOf;
        entity = entity.bind(report)();
        entity = tangon - entity;
        michal = michal.bind(zuuluu)(entity);
        entity = argBaz;
        entity = michal < entity;
        return entity;
    };
    zuuluu['isWithinInterval'] = report;
    zuuluu['dateFormat'] = tangon;
    tangon = function(argFoo) { // Original name: calendarFormat
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            michal = arguments[1];
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00014_ip = 14; continue _fun00013 }
 12:
            michal = false;
 14:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 4;
            option = golfie[report];
            verify = oscard.bind(zuuluu)(option);
            option = verify.localeData;
            verify = option.bind(verify)();
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            option = report.bind(zuuluu)();
            golfie = _closure1_slot8;
            report = _closure1_slot11;
            oscard = report.bind(zuuluu)(tangon);
            report = option.toDate;
            report = report.bind(option)();
            oscard = golfie.bind(zuuluu)(oscard, report);
            report = -1;
            if(!(!(oscard < report))) { _fun00014_ip = 199; continue _fun00013 }
 99:
            report = 0;
            report = oscard < report;
            golfie = 'lastDay';
            if(report) { _fun00014_ip = 165; continue _fun00013 }
 112:
            report = 1;
            if(!(!(oscard < report))) { _fun00014_ip = 142; continue _fun00013 }
 119:
            report = 2;
            oscard = oscard < report;
            report = 'sameElse';
            if(!oscard) { _fun00014_ip = 137; continue _fun00013 }
 133:
            report = 'nextDay';
 137:
            golfie = report;
            _fun00014_ip = 165; continue _fun00013;
 142:
            golfie = 'sameDay';
            if(!michal) { _fun00014_ip = 165; continue _fun00013 }
 149:
            report = _closure1_slot9;
            michal = 'LT';
            michal = report.bind(zuuluu)(tangon, michal);
            return michal;
 165:
            report = _closure1_slot9;
            oscard = verify.calendar;
            michal = _closure1_slot10;
            michal = michal.bind(zuuluu)(tangon);
            michal = oscard.bind(verify)(golfie, michal, option);
            michal = report.bind(zuuluu)(tangon, michal);
            return michal;
 199:
            michal = _closure1_slot9;
            entity = 'L LT';
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    zuuluu['calendarFormat'] = tangon;
    tangon = function(argFoo) { // Original name: calendarFormatCompact
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 4;
            golfie = report[entity];
            zuuluu = undefined;
            option = michal.bind(zuuluu)(golfie);
            golfie = option.localeData;
            offset = golfie.bind(option)();
            entity = report[entity];
            entity = michal.bind(zuuluu)(entity);
            verify = entity.bind(zuuluu)();
            report = _closure1_slot8;
            entity = _closure1_slot11;
            michal = entity.bind(zuuluu)(tangon);
            entity = verify.toDate;
            entity = entity.bind(verify)();
            golfie = report.bind(zuuluu)(michal, entity);
            michal = _closure1_slot9;
            entity = 'LT';
            report = 0;
            if(!(report !== golfie)) { _fun00016_ip = 158; continue _fun00015 }
 94:
            report = -1;
            if(!(report !== golfie)) { _fun00016_ip = 129; continue _fun00015 }
 104:
            report = -7;
            golfie = golfie > report;
            report = 'L';
            if(!golfie) { _fun00016_ip = 127; continue _fun00015 }
 121:
            report = 'dddd';
 127:
            _fun00016_ip = 155; continue _fun00015;
 129:
            option = offset.calendar;
            oscard = _closure1_slot10;
            golfie = oscard.bind(zuuluu)(tangon);
            oscard = 'lastDay';
            report = option.bind(offset)(oscard, golfie, verify);
 155:
            entity = report;
 158:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    zuuluu['calendarFormatCompact'] = tangon;
    tangon = function(argFoo) { // Original name: accessibilityLabelCalendarFormat
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            romeon = 4;
            entity = entity[romeon];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = michal.localeData;
            verify = entity.bind(michal)();
            entity = global;
            entity = entity.Date;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            output = michal;
            entity = new output[entity](sizing);
            offset = entity instanceof Object ? entity : michal;
            entity = _closure1_slot8;
            foxtra = entity.bind(zuuluu)(tangon, offset);
            michal = _closure1_slot9;
            entity = -1;
            entity = foxtra < entity;
            oscard = 'sameElse';
            option = oscard;
            if(entity) { _fun00018_ip = 153; continue _fun00017 }
 100:
            entity = 0;
            golfie = foxtra < entity;
            entity = 'lastDay';
            if(golfie) { _fun00018_ip = 150; continue _fun00017 }
 113:
            golfie = 1;
            yankee = foxtra < golfie;
            golfie = 'sameDay';
            if(yankee) { _fun00018_ip = 147; continue _fun00017 }
 127:
            yankee = 2;
            foxtra = foxtra < yankee;
            yankee = oscard;
            if(!foxtra) { _fun00018_ip = 144; continue _fun00017 }
 140:
            yankee = 'nextDay';
 144:
            golfie = yankee;
 147:
            entity = golfie;
 150:
            option = entity;
 153:
            entity = 'LLL';
            if(!(oscard !== option)) { _fun00018_ip = 210; continue _fun00017 }
 161:
            golfie = verify.calendar;
            yankee = _closure1_slot1;
            report = _closure1_slot2;
            oscard = report[romeon];
            oscard = yankee.bind(zuuluu)(oscard);
            oscard = oscard.bind(zuuluu)(tangon);
            report = report[romeon];
            report = yankee.bind(zuuluu)(report);
            report = report.bind(zuuluu)(offset);
            entity = golfie.bind(verify)(option, oscard, report);
 210:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    zuuluu['accessibilityLabelCalendarFormat'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: diffAsUnits
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argFoo;
            golfie = argBar;
            zuuluu = arguments[2];
            report = undefined;
            if(!(zuuluu === report)) { _fun00020_ip = 19; continue _fun00019 }
 17:
            zuuluu = false;
 19:
            var _closure2_slot0 = report;
            var _closure2_slot1 = report;
            entity = {'days': 0, 'hours': 0, 'minutes': 0};
            tangon = 0;
            if(!zuuluu) { _fun00020_ip = 45; continue _fun00019 }
 42:
            tangon = 1;
 45:
            entity['seconds'] = tangon;
            _closure2_slot0 = entity;
            if(!(!(oscard > golfie))) { _fun00020_ip = 157; continue _fun00019 }
 58:
            if(!zuuluu) { _fun00020_ip = 99; continue _fun00019 }
 61:
            zuuluu = global;
            tangon = zuuluu.Number;
            option = tangon.bind(report)(oscard);
            tangon = 1200;
            tangon = option + tangon;
            zuuluu = zuuluu.Number;
            zuuluu = zuuluu.bind(report)(golfie);
            if(!(!(tangon > zuuluu))) { _fun00020_ip = 155; continue _fun00019 }
 99:
            zuuluu = global;
            tangon = zuuluu.Number;
            tangon = tangon.bind(report)(golfie);
            zuuluu = zuuluu.Number;
            zuuluu = zuuluu.bind(report)(oscard);
            zuuluu = tangon - zuuluu;
            _closure2_slot1 = zuuluu;
            tangon = _closure1_slot6;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                entity = argFoo;
                report = entity.key;
                tangon = entity.millisecondsInUnit;
                zuuluu = _closure2_slot0;
                entity = global;
                golfie = entity.Math;
                oscard = golfie.floor;
                entity = _closure2_slot1;
                entity = entity / tangon;
                entity = oscard.bind(golfie)(entity);
                zuuluu[report] = entity;
                zuuluu = _closure2_slot1;
                entity = _closure2_slot0;
                entity = entity[report];
                entity = entity * tangon;
                entity = zuuluu - entity;
                _closure2_slot1 = entity;
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
 155:
            return entity;
 157:
            return entity;
        }
    };
    zuuluu['diffAsUnits'] = tangon;
    michal = function(argFoo, argBar) { // Original name: unitsAsStrings
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscard = argFoo;
            michal = argBar;
            entity = oscard.days;
            zuuluu = 0;
            if(!(!(entity > zuuluu))) { _fun00022_ip = 188; continue _fun00021 }
 21:
            entity = oscard.hours;
            if(!(!(entity > zuuluu))) { _fun00022_ip = 115; continue _fun00021 }
 31:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            report = entity.intl;
            tangon = report.formatToPlainString;
            zuuluu = michal.minutes;
            entity = {};
            golfie = global;
            offset = golfie.Math;
            verify = offset.max;
            option = oscard.minutes;
            golfie = 1;
            golfie = verify.bind(offset)(golfie, option);
            entity['minutes'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00022_ip = 186; continue _fun00021;
 115:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 5;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            golfie = zuuluu.intl;
            report = golfie.formatToPlainString;
            tangon = michal.hours;
            zuuluu = {};
            option = oscard.hours;
            zuuluu['hours'] = option;
            option = oscard.minutes;
            zuuluu['minutes'] = option;
            entity = report.bind(golfie)(tangon, zuuluu);
 186:
            _fun00022_ip = 259; continue _fun00021;
 188:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 5;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            report = zuuluu.intl;
            tangon = report.formatToPlainString;
            zuuluu = michal.days;
            michal = {};
            golfie = oscard.days;
            michal['days'] = golfie;
            oscard = oscard.hours;
            michal['hours'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 259:
            return entity;
        }
    };
    zuuluu['unitsAsStrings'] = michal;
    return entity;
})();