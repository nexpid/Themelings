// app/modules/custom_status/utils/computeInitialClearAfter.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ClearAfterValues;
    var _closure1_slot2 = golfie;
    option = golfie.MINUTES_30;
    tangon = new Array(3);
    tangon[0] = option;
    option = golfie.HOURS_1;
    tangon[1] = option;
    golfie = golfie.HOURS_4;
    tangon[2] = golfie;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/utils/computeInitialClearAfter.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: computeInitialClearAfter
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            golfie = undefined;
            zuuluu = tangon.bind(golfie)(zuuluu);
            tangon = zuuluu.CustomStatusSetting;
            zuuluu = tangon.getSetting;
            report = zuuluu.bind(tangon)();
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00002_ip = 355; continue _fun00001 }
 52:
            oscard = report.expiresAtMs;
            tangon = '';
            if(!(tangon !== oscard)) { _fun00002_ip = 355; continue _fun00001 }
 69:
            tangon = global;
            oscard = tangon.Number;
            report = report.expiresAtMs;
            oscard = oscard.bind(golfie)(report);
            report = tangon.isNaN;
            report = report.bind(golfie)(oscard);
            if(report) { _fun00002_ip = 343; continue _fun00001 }
 105:
            report = 0;
            if(!(report !== oscard)) { _fun00002_ip = 331; continue _fun00001 }
 114:
            report = tangon.Date;
            option = report.prototype;
            option = Object.create(option, {constructor: {value: report}});
            foxtra = option;
            report = new foxtra[report](romeon);
            verify = report instanceof Object ? report : option;
            report = tangon.Date;
            option = report.prototype;
            option = Object.create(option, {constructor: {value: report}});
            foxtra = option;
            romeon = oscard;
            report = new foxtra[report](romeon, yankee);
            offset = report instanceof Object ? report : option;
            report = verify.getFullYear;
            option = report.bind(verify)();
            report = offset.getFullYear;
            report = report.bind(offset)();
            report = option === report;
            if(!report) { _fun00002_ip = 220; continue _fun00001 }
 196:
            option = verify.getMonth;
            yankee = option.bind(verify)();
            option = offset.getMonth;
            option = option.bind(offset)();
            report = yankee === option;
 220:
            if(!report) { _fun00002_ip = 247; continue _fun00001 }
 223:
            option = verify.getDate;
            verify = option.bind(verify)();
            option = offset.getDate;
            option = option.bind(offset)();
            report = verify === option;
 247:
            if(report) { _fun00002_ip = 262; continue _fun00001 }
 250:
            report = _closure1_slot2;
            report = report.TODAY;
            return report;
 262:
            report = tangon.Number;
            report = report.bind(golfie)(oscard);
            oscard = tangon.Date;
            tangon = oscard.now;
            tangon = tangon.bind(oscard)();
            tangon = report - tangon;
            var _closure2_slot0 = tangon;
            report = _closure1_slot3;
            tangon = report.find;
            michal = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = michal <= entity;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            if(!(zuuluu == michal)) { _fun00002_ip = 329; continue _fun00001 }
 319:
            zuuluu = _closure1_slot2;
            michal = zuuluu.TODAY;
 329:
            return michal;
 331:
            michal = _closure1_slot2;
            michal = michal.DONT_CLEAR;
            return michal;
 343:
            michal = _closure1_slot2;
            michal = michal.TODAY;
            return michal;
 355:
            entity = _closure1_slot2;
            entity = entity.TODAY;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();