// app/utils/PriceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    oscard = function(argFoo, argBar, argBaz) { // Original name: formatPrice
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBaz;
            entity = null;
            oscard = michal;
            if(!(entity == oscard)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            oscard = {};
 14:
            tangon = entity == michal;
            zuuluu = undefined;
            report = undefined;
            if(tangon) { _fun00002_ip = 33; continue _fun00001 }
 25:
            report = michal.localeOverride;
 33:
            if(!(entity == report)) { _fun00002_ip = 50; continue _fun00001 }
 37:
            entity = _closure1_slot2;
            report = entity.locale;
 50:
            entity = 'en-US';
            entity = entity === report;
            if(!entity) { _fun00002_ip = 88; continue _fun00001 }
 61:
            golfie = _closure1_slot4;
            tangon = golfie.includes;
            michal = _closure1_slot2;
            michal = michal.systemLocale;
            entity = tangon.bind(golfie)(michal);
 88:
            if(!entity) { _fun00002_ip = 101; continue _fun00001 }
 91:
            entity = 'code';
            oscard['currencyDisplay'] = entity;
 101:
            michal = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 2;
            entity = tangon[entity];
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = tangon.formatPrice;
            yankee = argFoo;
            offset = argBar;
            romeon = tangon;
            verify = report;
            option = oscard;
            entity = romeon[zuuluu](yankee, offset, verify, option, golfie);
            return entity;
        }
    };
    var _closure1_slot5 = oscard;
    report = function(argFoo, argBar, argBaz) { // Original name: formatRate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            option = argBar;
            golfie = argBaz;
            michal = _closure1_slot3;
            michal = michal.YEAR;
            if(!(option !== michal)) { _fun00004_ip = 275; continue _fun00003 }
 29:
            michal = _closure1_slot3;
            michal = michal.MONTH;
            if(!(option === michal)) { _fun00004_ip = 53; continue _fun00003 }
 43:
            michal = 1;
            if(!(michal !== golfie)) { _fun00004_ip = 208; continue _fun00003 }
 53:
            michal = _closure1_slot3;
            michal = michal.MONTH;
            if(!(option === michal)) { _fun00004_ip = 74; continue _fun00003 }
 67:
            michal = 1;
            if(!(!(golfie > michal))) { _fun00004_ip = 134; continue _fun00003 }
 74:
            michal = global;
            tangon = michal.Error;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            zuuluu = 'Unsupported interval type: ';
            michal = ', and interval count: ';
            romeon = oscard.bind(zuuluu)(option, michal, golfie);
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            foxtra = zuuluu;
            michal = new foxtra[tangon](romeon, yankee);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 134:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 3;
            tangon = verify[michal];
            zuuluu = undefined;
            tangon = option.bind(zuuluu)(tangon);
            oscard = tangon.intl;
            tangon = oscard.formatToPlainString;
            michal = verify[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            zuuluu = michal.Qc+9w8;
            michal = {};
            michal['price'] = report;
            michal['intervalCount'] = golfie;
            michal = tangon.bind(oscard)(zuuluu, michal);
            return michal;
 208:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 3;
            tangon = option[michal];
            zuuluu = undefined;
            tangon = golfie.bind(zuuluu)(tangon);
            oscard = tangon.intl;
            tangon = oscard.formatToPlainString;
            michal = option[michal];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            zuuluu = michal.AbOLNj;
            michal = {};
            michal['price'] = report;
            michal = tangon.bind(oscard)(zuuluu, michal);
            return michal;
 275:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 3;
            zuuluu = golfie[entity];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = golfie[entity];
            entity = oscard.bind(michal)(entity);
            entity = entity.t;
            michal = entity.rS8FAw;
            entity = {};
            entity['price'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: maybeShortenPrice
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zuuluu = report.length;
            michal = 5;
            entity = report;
            if(!(zuuluu > michal)) { _fun00006_ip = 47; continue _fun00005 }
 18:
            tangon = report.replace;
            zuuluu = /\.00$/;
            michal = '';
            entity = tangon.bind(report)(zuuluu, michal);
 47:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    golfie = global;
    romeon = golfie.Object;
    yankee = romeon.defineProperty;
    offset = {};
    entity = true;
    offset['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, offset);
    entity = 0;
    yankee = verify[entity];
    offset = argBaz;
    entity = undefined;
    offset = offset.bind(entity)(yankee);
    var _closure1_slot2 = offset;
    offset = 1;
    offset = verify[offset];
    offset = option.bind(entity)(offset);
    offset = offset.SubscriptionIntervalTypes;
    var _closure1_slot3 = offset;
    yankee = golfie.Object;
    offset = yankee.freeze;
    golfie = ['en-CA', 'en-AU', 'en-NZ'];
    golfie = offset.bind(yankee)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/PriceUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['formatPrice'] = oscard;
    zuuluu['formatRate'] = report;
    report = function(argFoo, argBar) { // Original name: formatPercent
        entity = global;
        tangon = entity.Intl;
        zuuluu = tangon.NumberFormat;
        michal = argFoo;
        entity = {'style': 'percent', 'minimumFractionDigits': 0};
        zuuluu = zuuluu.bind(tangon)(michal, entity);
        michal = zuuluu.format;
        entity = argBar;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['formatPercent'] = report;
    report = function(argFoo) { // Original name: formatSubscriptionPlanRate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = 'interval_count';
            michal = michal in entity;
            if(michal) { _fun00008_ip = 22; continue _fun00007 }
 14:
            report = entity.intervalCount;
            _fun00008_ip = 28; continue _fun00007;
 22:
            report = entity.interval_count;
 28:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 4;
            michal = tangon[michal];
            tangon = undefined;
            golfie = zuuluu.bind(tangon)(michal);
            zuuluu = golfie.getPrice;
            michal = entity.id;
            michal = zuuluu.bind(golfie)(michal);
            zuuluu = _closure1_slot6;
            golfie = _closure1_slot5;
            oscard = michal.amount;
            michal = michal.currency;
            michal = golfie.bind(tangon)(oscard, michal);
            entity = entity.interval;
            entity = zuuluu.bind(tangon)(michal, entity, report);
            return entity;
        }
    };
    zuuluu['formatSubscriptionPlanRate'] = report;
    zuuluu['maybeShortenPrice'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: shortenAndFormatPrice
        zuuluu = _closure1_slot7;
        oscard = _closure1_slot5;
        michal = undefined;
        report = argFoo;
        tangon = argBar;
        entity = argBaz;
        entity = oscard.bind(michal)(report, tangon, entity);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['shortenAndFormatPrice'] = michal;
    return entity;
})();