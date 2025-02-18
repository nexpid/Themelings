// app/utils/PriceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo, argBar, argBaz) { // Original name: formatPrice
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBaz;
            entity = null;
            michal = entity == oscard;
            zuuluu = undefined;
            report = undefined;
            if(michal) { _fun00002_ip = 22; continue _fun00001 }
 16:
            report = oscard.localeOverride;
 22:
            if(!(entity == report)) { _fun00002_ip = 39; continue _fun00001 }
 26:
            entity = _closure1_slot2;
            report = entity.locale;
 39:
            michal = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 2;
            entity = tangon[entity];
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = tangon.formatPrice;
            offset = argFoo;
            verify = argBar;
            yankee = tangon;
            option = report;
            golfie = oscard;
            entity = yankee[zuuluu](offset, verify, option, golfie, oscard);
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: formatRate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            option = argBar;
            golfie = argBaz;
            michal = _closure1_slot3;
            michal = michal.YEAR;
            if(!(option !== michal)) { _fun00004_ip = 273; continue _fun00003 }
 29:
            michal = _closure1_slot3;
            michal = michal.MONTH;
            if(!(option === michal)) { _fun00004_ip = 53; continue _fun00003 }
 43:
            michal = 1;
            if(!(michal !== golfie)) { _fun00004_ip = 206; continue _fun00003 }
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
 206:
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
 273:
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
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    verify = option[entity];
    oscard = argBaz;
    entity = undefined;
    oscard = oscard.bind(entity)(verify);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.SubscriptionIntervalTypes;
    var _closure1_slot3 = oscard;
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/PriceUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['formatPrice'] = report;
    zuuluu['formatRate'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: formatPercent
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
    zuuluu['formatPercent'] = tangon;
    michal = function(argFoo) { // Original name: formatSubscriptionPlanRate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = 'interval_count';
            michal = michal in entity;
            if(michal) { _fun00006_ip = 22; continue _fun00005 }
 14:
            report = entity.intervalCount;
            _fun00006_ip = 28; continue _fun00005;
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
            zuuluu = _closure1_slot5;
            golfie = _closure1_slot4;
            oscard = michal.amount;
            michal = michal.currency;
            michal = golfie.bind(tangon)(oscard, michal);
            entity = entity.interval;
            entity = zuuluu.bind(tangon)(michal, entity, report);
            return entity;
        }
    };
    zuuluu['formatSubscriptionPlanRate'] = michal;
    return entity;
})();