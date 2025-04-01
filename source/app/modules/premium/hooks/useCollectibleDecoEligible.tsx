// app/modules/premium/hooks/useCollectibleDecoEligible.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = report;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = report[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: withinReactivationCooldown
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            entity = entity.Date;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            oscard = michal;
            entity = new oscard[entity](report);
            zuuluu = entity instanceof Object ? entity : michal;
            michal = zuuluu.setDate;
            entity = zuuluu.getDate;
            tangon = entity.bind(zuuluu)();
            entity = 10;
            entity = tangon - entity;
            entity = michal.bind(zuuluu)(entity);
            entity = argFoo;
            michal = entity.endedAt;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 80; continue _fun00001 }
 76:
            entity = michal >= zuuluu;
 80:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    tangon = 10;
    report = report[tangon];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/hooks/useCollectibleDecoEligible.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['REACTIVATION_COOLDOWN_DAYS'] = tangon;
    michal = function(argFoo) { // Original name: useCollectibleDecoEligible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.location;
            romeon = undefined;
            var _closure2_slot5 = romeon;
            var _closure2_slot6 = romeon;
            zuuluu = _closure1_slot4;
            entity = zuuluu.useState;
            option = null;
            entity = entity.bind(zuuluu)(option);
            output = _closure1_slot3;
            sizing = 2;
            zuuluu = output.bind(romeon)(entity, sizing);
            yankee = 0;
            entity = zuuluu[yankee];
            kiloes = 1;
            zuuluu = zuuluu[kiloes];
            var _closure2_slot0 = zuuluu;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            zuuluu = 7;
            zuuluu = backup[zuuluu];
            zuuluu = foxtra.bind(romeon)(zuuluu);
            oscard = zuuluu.CollectibleDecoMarketingMomentExperiment;
            report = oscard.useExperiment;
            zuuluu = {};
            zuuluu['location'] = golfie;
            zuuluu = report.bind(oscard)(zuuluu);
            var _closure2_slot1 = zuuluu;
            oscard = 8;
            report = backup[oscard];
            result = foxtra.bind(romeon)(report);
            offset = result.useStateFromStoresArray;
            golfie = _closure1_slot6;
            verify = new Array(1);
            verify[0] = golfie;
            report = function() {
                zuuluu = _closure1_slot6;
                entity = zuuluu.getMostRecentPremiumTypeSubscription;
                michal = entity.bind(zuuluu)();
                entity = new Array(2);
                entity[0] = michal;
                michal = zuuluu.getPreviousPremiumTypeSubscription;
                michal = michal.bind(zuuluu)();
                entity[1] = michal;
                return entity;
            };
            report = offset.bind(result)(verify, report);
            report = output.bind(romeon)(report, sizing);
            offset = report[yankee];
            var _closure2_slot2 = offset;
            verify = report[kiloes];
            var _closure2_slot3 = verify;
            report = backup[oscard];
            update = foxtra.bind(romeon)(report);
            echoed = update.useStateFromStores;
            report = _closure1_slot7;
            result = new Array(1);
            result[0] = report;
            report = function() {
                michal = _closure1_slot7;
                entity = michal.hasFetchedOffer;
                entity = entity.bind(michal)();
                return entity;
            };
            report = echoed.bind(update)(result, report);
            result = backup[oscard];
            update = foxtra.bind(romeon)(result);
            echoed = update.useStateFromStoresArray;
            result = new Array(1);
            result[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot6;
                entity = zuuluu.hasFetchedMostRecentPremiumTypeSubscription;
                michal = entity.bind(zuuluu)();
                entity = new Array(2);
                entity[0] = michal;
                michal = zuuluu.hasFetchedPreviousPremiumTypeSubscription;
                michal = michal.bind(zuuluu)();
                entity[1] = michal;
                return entity;
            };
            golfie = echoed.bind(update)(result, golfie);
            golfie = output.bind(romeon)(golfie, sizing);
            yankee = golfie[yankee];
            golfie = golfie[kiloes];
            oscard = backup[oscard];
            kiloes = foxtra.bind(romeon)(oscard);
            backup = kiloes.useStateFromStores;
            oscard = _closure1_slot5;
            foxtra = new Array(1);
            foxtra[0] = oscard;
            oscard = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = backup.bind(kiloes)(foxtra, oscard);
            var _closure2_slot4 = oscard;
            foxtra = option == oscard;
            option = undefined;
            if(foxtra) { _fun00004_ip = 332; continue _fun00003 }
 322:
            foxtra = oscard.hasHadPremium;
            option = foxtra.bind(oscard)();
 332:
            if(!option) { _fun00004_ip = 338; continue _fun00003 }
 335:
            option = !yankee;
 338:
            if(!option) { _fun00004_ip = 344; continue _fun00003 }
 341:
            option = !golfie;
 344:
            _closure2_slot5 = option;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = 9;
            golfie = foxtra[golfie];
            yankee = yankee.bind(romeon)(golfie);
            golfie = yankee.isPremium;
            golfie = golfie.bind(yankee)(oscard);
            golfie = !golfie;
            if(!golfie) { _fun00004_ip = 388; continue _fun00003 }
 385:
            golfie = !report;
 388:
            _closure2_slot6 = golfie;
            report = _closure1_slot4;
            tangon = report.useEffect;
            yankee = zuuluu.enabled;
            zuuluu = new Array(6);
            zuuluu[0] = yankee;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = option;
            zuuluu[4] = golfie;
            zuuluu[5] = oscard;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot1;
                    michal = michal.enabled;
                    tangon = false;
                    if(!(tangon === michal)) { _fun00006_ip = 34; continue _fun00005 }
 18:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    _fun00006_ip = 451; continue _fun00005;
 34:
                    michal = _closure2_slot5;
                    if(michal) { _fun00006_ip = 451; continue _fun00005 }
 44:
                    michal = _closure2_slot6;
                    if(michal) { _fun00006_ip = 451; continue _fun00005 }
 54:
                    michal = _closure2_slot2;
                    golfie = null;
                    if(!(golfie === michal)) { _fun00006_ip = 144; continue _fun00005 }
 64:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 9;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    option = oscard.bind(zuuluu)(report);
                    oscard = option.isPremium;
                    report = _closure2_slot4;
                    michal = _closure1_slot8;
                    michal = michal.TIER_2;
                    report = oscard.bind(option)(report, michal);
                    michal = _closure2_slot0;
                    if(report) { _fun00006_ip = 134; continue _fun00005 }
 122:
                    report = true;
                    report = michal.bind(zuuluu)(report);
                    _fun00006_ip = 451; continue _fun00005;
 134:
                    michal = michal.bind(zuuluu)(tangon);
                    _fun00006_ip = 451; continue _fun00005;
 144:
                    michal = _closure2_slot2;
                    michal = michal.isPaused;
                    if(michal) { _fun00006_ip = 438; continue _fun00005 }
 160:
                    michal = _closure2_slot2;
                    michal = michal.isEnded;
                    if(michal) { _fun00006_ip = 355; continue _fun00005 }
 178:
                    michal = _closure2_slot2;
                    michal = michal.isActive;
                    if(michal) { _fun00006_ip = 207; continue _fun00005 }
 191:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    _fun00006_ip = 451; continue _fun00005;
 207:
                    option = _closure2_slot2;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    offset = 6;
                    zuuluu = zuuluu[offset];
                    report = undefined;
                    oscard = oscard.bind(report)(zuuluu);
                    zuuluu = oscard.getPremiumPlanItem;
                    zuuluu = zuuluu.bind(oscard)(option);
                    oscard = golfie == zuuluu;
                    verify = undefined;
                    if(oscard) { _fun00006_ip = 262; continue _fun00005 }
 256:
                    verify = zuuluu.planId;
 262:
                    zuuluu = report === verify;
                    if(zuuluu) { _fun00006_ip = 311; continue _fun00005 }
 269:
                    option = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[offset];
                    option = option.bind(report)(oscard);
                    oscard = option.getPremiumType;
                    option = oscard.bind(option)(verify);
                    oscard = _closure1_slot8;
                    oscard = oscard.TIER_2;
                    zuuluu = option !== oscard;
 311:
                    oscard = _closure2_slot3;
                    oscard = golfie == oscard;
                    if(oscard) { _fun00006_ip = 338; continue _fun00005 }
 322:
                    golfie = _closure1_slot9;
                    michal = _closure2_slot3;
                    michal = golfie.bind(report)(michal);
                    oscard = !michal;
 338:
                    michal = _closure2_slot0;
                    if(!zuuluu) { _fun00006_ip = 348; continue _fun00005 }
 345:
                    zuuluu = oscard;
 348:
                    michal = michal.bind(report)(zuuluu);
                    _fun00006_ip = 451; continue _fun00005;
 355:
                    report = _closure1_slot7;
                    zuuluu = report.hasAnyUnexpiredOffer;
                    zuuluu = zuuluu.bind(report)();
                    if(zuuluu) { _fun00006_ip = 425; continue _fun00005 }
 375:
                    report = _closure1_slot7;
                    zuuluu = report.hasAnyUnexpiredDiscountOffer;
                    zuuluu = zuuluu.bind(report)();
                    if(zuuluu) { _fun00006_ip = 425; continue _fun00005 }
 394:
                    zuuluu = _closure1_slot9;
                    michal = _closure2_slot2;
                    report = undefined;
                    michal = zuuluu.bind(report)(michal);
                    if(michal) { _fun00006_ip = 425; continue _fun00005 }
 412:
                    zuuluu = _closure2_slot0;
                    michal = true;
                    michal = zuuluu.bind(report)(michal);
                    _fun00006_ip = 451; continue _fun00005;
 425:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    _fun00006_ip = 451; continue _fun00005;
 438:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    entity = true;
                    entity = zuuluu.bind(michal)(entity);
 451:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useCollectibleDecoEligible'] = michal;
    return entity;
})();