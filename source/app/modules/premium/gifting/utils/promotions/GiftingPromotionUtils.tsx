// app/modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: useIsPlanEligibleForGiftingPromotion
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            entity = michal[entity];
            michal = undefined;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            oscard = null;
            zuuluu = oscard == entity;
            tangon = undefined;
            if(zuuluu) { _fun00002_ip = 49; continue _fun00001 }
 43:
            tangon = entity.eligiblePlanIds;
 49:
            zuuluu = oscard == tangon;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 82; continue _fun00001 }
 58:
            zuuluu = tangon.includes;
            oscard = oscard == report;
            michal = undefined;
            if(oscard) { _fun00002_ip = 77; continue _fun00001 }
 72:
            michal = report.id;
 77:
            entity = zuuluu.bind(tangon)(michal);
 82:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: useClaimableGiftingPromotionRewards
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot4;
            entity = michal.useState;
            zuuluu = entity.bind(michal)();
            michal = _closure1_slot3;
            entity = undefined;
            golfie = 2;
            oscard = michal.bind(entity)(zuuluu, golfie);
            michal = 0;
            michal = oscard[michal];
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            var _closure2_slot0 = zuuluu;
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(entity)(zuuluu);
            oscard = zuuluu.bind(entity)();
            zuuluu = null;
            golfie = zuuluu == oscard;
            yankee = undefined;
            if(golfie) { _fun00004_ip = 88; continue _fun00003 }
 82:
            yankee = oscard.rewards;
 88:
            var _closure2_slot1 = yankee;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 3;
            oscard = option[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.useFetchPurchases;
            oscard = oscard.bind(golfie)();
            offset = oscard.purchases;
            var _closure2_slot2 = offset;
            verify = oscard.hasPreviouslyFetched;
            var _closure2_slot3 = verify;
            option = oscard.fetchPurchasesError;
            var _closure2_slot4 = option;
            golfie = _closure1_slot4;
            oscard = golfie.useRef;
            report = false;
            report = oscard.bind(golfie)(report);
            var _closure2_slot5 = report;
            oscard = golfie.useEffect;
            report = new Array(4);
            report[0] = yankee;
            report[1] = offset;
            report[2] = verify;
            report[3] = option;
            tangon = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00006_ip = 92; continue _fun00005 }
 10:
                    michal = _closure2_slot5;
                    michal = michal.current;
                    if(michal) { _fun00006_ip = 92; continue _fun00005 }
 22:
                    michal = _closure2_slot1;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00006_ip = 92; continue _fun00005 }
 32:
                    michal = _closure2_slot4;
                    if(!(zuuluu != michal)) { _fun00006_ip = 46; continue _fun00005 }
 40:
                    tangon = new Array(0);
                    _fun00006_ip = 69; continue _fun00005;
 46:
                    report = _closure2_slot1;
                    zuuluu = report.filter;
                    michal = function(argFoo) {
                        zuuluu = _closure2_slot2;
                        michal = zuuluu.get;
                        entity = argFoo;
                        entity = entity.skuId;
                        michal = michal.bind(zuuluu)(entity);
                        entity = null;
                        entity = entity == michal;
                        return entity;
                    };
                    tangon = zuuluu.bind(report)(michal);
 69:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    michal = _closure2_slot5;
                    entity = true;
                    michal['current'] = entity;
 92:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon, report);
            zuuluu = zuuluu != michal;
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 222; continue _fun00003 }
 219:
            entity = michal;
 222:
            return entity;
        }
    };
    zuuluu['useClaimableGiftingPromotionRewards'] = report;
    report = function(argFoo) { // Original name: useGiftingPromotionRewardCollectiblePurchase
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.useFetchPurchases;
            entity = entity.bind(michal)();
            zuuluu = entity.purchases;
            entity = null;
            michal = entity != tangon;
            if(!michal) { _fun00008_ip = 63; continue _fun00007 }
 53:
            michal = zuuluu.get;
            entity = michal.bind(zuuluu)(tangon);
 63:
            return entity;
        }
    };
    zuuluu['useGiftingPromotionRewardCollectiblePurchase'] = report;
    report = function(argFoo) { // Original name: getRewardAssetIdMap
        tangon = argFoo;
        entity = global;
        entity = entity.Map;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        oscard = zuuluu;
        entity = new oscard[entity](report);
        entity = entity instanceof Object ? entity : zuuluu;
        var _closure2_slot0 = entity;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            entity = argFoo;
            tangon = _closure2_slot0;
            zuuluu = tangon.set;
            michal = entity.skuId;
            entity = entity.assetId;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['getRewardAssetIdMap'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: useShouldShowSelectFreeSkuStep
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argBar;
            tangon = argBaz;
            report = _closure1_slot5;
            zuuluu = undefined;
            michal = argFoo;
            zuuluu = report.bind(zuuluu)(michal);
            michal = null;
            michal = michal != tangon;
            if(!michal) { _fun00010_ip = 44; continue _fun00009 }
 32:
            report = tangon.length;
            tangon = 1;
            michal = report > tangon;
 44:
            if(!entity) { _fun00010_ip = 50; continue _fun00009 }
 47:
            entity = zuuluu;
 50:
            if(!entity) { _fun00010_ip = 56; continue _fun00009 }
 53:
            entity = michal;
 56:
            return entity;
        }
    };
    zuuluu['useShouldShowSelectFreeSkuStep'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: useShouldAutoSelectGiftingPromotionReward
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argBar;
            tangon = argBaz;
            report = _closure1_slot5;
            zuuluu = undefined;
            entity = argFoo;
            zuuluu = report.bind(zuuluu)(entity);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00012_ip = 44; continue _fun00011 }
 32:
            report = tangon.length;
            tangon = 1;
            entity = tangon === report;
 44:
            if(!entity) { _fun00012_ip = 50; continue _fun00011 }
 47:
            entity = zuuluu;
 50:
            if(!entity) { _fun00012_ip = 56; continue _fun00011 }
 53:
            entity = michal;
 56:
            return entity;
        }
    };
    zuuluu['useShouldAutoSelectGiftingPromotionReward'] = report;
    zuuluu['useIsPlanEligibleForGiftingPromotion'] = tangon;
    michal = function(argFoo) { // Original name: createGradientStyle
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            option = arguments[1];
            entity = undefined;
            if(!(option === entity)) { _fun00014_ip = 22; continue _fun00013 }
 12:
            option = 78.98;
 22:
            oscard = null;
            if(!(oscard == zuuluu)) { _fun00014_ip = 30; continue _fun00013 }
 28:
            return entity;
 30:
            michal = global;
            tangon = michal.Array;
            entity = tangon.isArray;
            entity = entity.bind(tangon)(zuuluu);
            report = zuuluu;
            if(entity) { _fun00014_ip = 60; continue _fun00013 }
 54:
            report = zuuluu.gradient;
 60:
            entity = {};
            golfie = michal.Array;
            tangon = golfie.isArray;
            tangon = tangon.bind(golfie)(zuuluu);
            golfie = option;
            if(tangon) { _fun00014_ip = 103; continue _fun00013 }
 84:
            tangon = zuuluu.angle;
            golfie = option;
            if(!(oscard != tangon)) { _fun00014_ip = 103; continue _fun00013 }
 97:
            golfie = zuuluu.angle;
 103:
            tangon = report.join;
            zuuluu = ', ';
            offset = tangon.bind(report)(zuuluu);
            michal = michal.HermesInternal;
            report = michal.concat;
            foxtra = 'linear-gradient(';
            yankee = 'deg, ';
            verify = ')';
            romeon = golfie;
            michal = foxtra[report](romeon, yankee, offset, verify, option);
            entity['background'] = michal;
            return entity;
        }
    };
    zuuluu['createGradientStyle'] = michal;
    return entity;
})();