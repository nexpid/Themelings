// app/utils/NumberUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/NumberUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: shortenAndLocalizeNumber
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = 1000000;
            if(!(!(report < entity))) { _fun00002_ip = 99; continue _fun00001 }
 13:
            zuuluu = report / entity;
            michal = zuuluu.toFixed;
            entity = 1;
            oscard = michal.bind(zuuluu)(entity);
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            entity = 0;
            zuuluu = option[entity];
            michal = undefined;
            zuuluu = golfie.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = option[entity];
            entity = golfie.bind(michal)(entity);
            entity = entity.t;
            michal = entity.Iku48P;
            entity = {};
            entity['value'] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 99:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 0;
            zuuluu = golfie[entity];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = golfie[entity];
            entity = oscard.bind(michal)(entity);
            entity = entity.t;
            michal = entity.OiHat7;
            entity = {};
            entity['value'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['shortenAndLocalizeNumber'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: humanizeValue
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            report = 1000;
            if(!(!(golfie < report))) { _fun00004_ip = 280; continue _fun00003 }
 16:
            option = 1000000;
            if(!(!(golfie < option))) { _fun00004_ip = 189; continue _fun00003 }
 29:
            entity = global;
            oscard = entity.Math;
            tangon = oscard.floor;
            zuuluu = 10;
            michal = zuuluu * golfie;
            michal = michal / option;
            michal = tangon.bind(oscard)(michal);
            zuuluu = michal / zuuluu;
            entity = entity.Intl;
            oscard = entity.NumberFormat;
            tangon = {};
            entity = 1;
            tangon['maximumFractionDigits'] = entity;
            entity = oscard.prototype;
            michal = Object.create(entity, {constructor: {value: oscard}});
            yankee = argBar;
            romeon = michal;
            offset = tangon;
            entity = new romeon[oscard](yankee, offset, verify);
            michal = entity instanceof Object ? entity : michal;
            entity = michal.format;
            oscard = entity.bind(michal)(zuuluu);
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 0;
            zuuluu = verify[entity];
            michal = undefined;
            zuuluu = option.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = verify[entity];
            entity = option.bind(michal)(entity);
            entity = entity.t;
            michal = entity.Iku48P;
            entity = {};
            entity['value'] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 189:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            entity = 0;
            zuuluu = option[entity];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = option[entity];
            entity = oscard.bind(michal)(entity);
            entity = entity.t;
            michal = entity.84R4TU;
            entity = {};
            oscard = global;
            option = oscard.Math;
            oscard = option.floor;
            report = golfie / report;
            report = oscard.bind(option)(report);
            entity['value'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 280:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 0;
            zuuluu = oscard[entity];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = oscard[entity];
            entity = report.bind(michal)(entity);
            entity = entity.t;
            michal = entity.OiHat7;
            entity = {};
            report = global;
            oscard = report.Math;
            report = oscard.floor;
            report = report.bind(oscard)(golfie);
            entity['value'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['humanizeValue'] = tangon;
    tangon = function(argFoo) { // Original name: parseInteger
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            tangon = undefined;
            if(!(entity === tangon)) { _fun00006_ip = 20; continue _fun00005 }
 12:
            michal = global;
            entity = michal.NaN;
 20:
            michal = null;
            if(!(michal != report)) { _fun00006_ip = 64; continue _fun00005 }
 26:
            zuuluu = global;
            michal = zuuluu.parseInt;
            michal = michal.bind(tangon)(report);
            tangon = zuuluu.Number;
            zuuluu = tangon.isNaN;
            zuuluu = zuuluu.bind(tangon)(michal);
            if(!zuuluu) { _fun00006_ip = 62; continue _fun00005 }
 59:
            michal = entity;
 62:
            return michal;
 64:
            return entity;
        }
    };
    zuuluu['parseInteger'] = tangon;
    michal = function(argFoo, argBar) { // Original name: formatPercent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = arguments[2];
            michal = undefined;
            if(!(entity === michal)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            entity = {};
 11:
            michal = global;
            tangon = michal.Intl;
            zuuluu = tangon.NumberFormat;
            michal = {'style': 'percent', 'minimumFractionDigits': 0};
            oscard = michal;
            report = entity;
            entity = copyDataProperties(oscard, report);
            entity = argFoo;
            zuuluu = zuuluu.bind(tangon)(entity, michal);
            michal = zuuluu.format;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['formatPercent'] = michal;
    return entity;
})();