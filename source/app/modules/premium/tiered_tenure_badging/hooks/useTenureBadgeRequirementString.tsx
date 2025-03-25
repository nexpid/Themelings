// app/modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    michal = michal.TieredTenureBadge;
    var _closure1_slot2 = michal;
    michal = function(argFoo, argBar) { // Original name: getTenureBadgeRequirementString
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = argBar;
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_1_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 284; continue _fun00001 }
 26:
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_3_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 284; continue _fun00001 }
 43:
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_6_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 284; continue _fun00001 }
 60:
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_12_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 210; continue _fun00001 }
 77:
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_24_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 210; continue _fun00001 }
 91:
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_36_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 210; continue _fun00001 }
 105:
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_60_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 210; continue _fun00001 }
 119:
            michal = _closure1_slot2;
            michal = michal.PREMIUM_TENURE_72_MONTH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 137; continue _fun00001 }
 133:
            michal = null;
            return michal;
 137:
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
            zuuluu = michal.IfYQVF;
            michal = {};
            golfie = '6+';
            michal['years'] = golfie;
            michal = tangon.bind(oscard)(zuuluu, michal);
            return michal;
 210:
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
            zuuluu = michal.IfYQVF;
            michal = {};
            golfie = 12;
            golfie = report / golfie;
            michal['years'] = golfie;
            michal = tangon.bind(oscard)(zuuluu, michal);
            return michal;
 284:
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
            michal = entity.erUSmJ;
            entity = {};
            entity['months'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot3 = michal;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 1;
            entity = tangon[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.useTieredTenureBadge;
            oscard = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != oscard)) { _fun00004_ip = 95; continue _fun00003 }
 41:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 2;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.getTieredTenureBadgeData;
            zuuluu = zuuluu.bind(tangon)(oscard);
            tangon = zuuluu.id;
            zuuluu = zuuluu.tenureReqNumMonths;
            michal = _closure1_slot3;
            michal = michal.bind(report)(tangon, zuuluu);
            return michal;
 95:
            return entity;
        }
    };
    zuuluu['useTenureBadgeRequirementString'] = tangon;
    zuuluu['getTenureBadgeRequirementString'] = michal;
    return entity;
})();