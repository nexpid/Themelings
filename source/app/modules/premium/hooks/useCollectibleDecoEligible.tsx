// app/modules/premium/hooks/useCollectibleDecoEligible.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PaymentGateways;
    var _closure1_slot9 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/hooks/useCollectibleDecoEligible.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 10;
    zuuluu['REACTIVATION_COOLDOWN_DAYS'] = tangon;
    michal = function(argFoo) { // Original name: useCollectibleDecoEligible
        entity = argFoo;
        option = entity.location;
        report = _closure1_slot4;
        zuuluu = report.useState;
        entity = null;
        oscard = zuuluu.bind(report)(entity);
        zuuluu = _closure1_slot3;
        yankee = undefined;
        entity = 2;
        oscard = zuuluu.bind(yankee)(oscard, entity);
        entity = 0;
        entity = oscard[entity];
        zuuluu = 1;
        zuuluu = oscard[zuuluu];
        var _closure2_slot0 = zuuluu;
        offset = _closure1_slot0;
        romeon = _closure1_slot2;
        zuuluu = 8;
        zuuluu = romeon[zuuluu];
        zuuluu = offset.bind(yankee)(zuuluu);
        golfie = zuuluu.CollectibleDecoMarketingMomentExperiment;
        oscard = golfie.useExperiment;
        zuuluu = {};
        zuuluu['location'] = option;
        zuuluu = oscard.bind(golfie)(zuuluu);
        var _closure2_slot1 = zuuluu;
        oscard = 9;
        golfie = romeon[oscard];
        backup = offset.bind(yankee)(golfie);
        foxtra = backup.useStateFromStores;
        verify = _closure1_slot6;
        option = new Array(1);
        option[0] = verify;
        golfie = function() {
            michal = _closure1_slot6;
            entity = michal.getMostRecentPremiumTypeSubscription;
            entity = entity.bind(michal)();
            return entity;
        };
        option = foxtra.bind(backup)(option, golfie);
        var _closure2_slot2 = option;
        golfie = romeon[oscard];
        kiloes = offset.bind(yankee)(golfie);
        backup = kiloes.useStateFromStores;
        golfie = _closure1_slot7;
        foxtra = new Array(1);
        foxtra[0] = golfie;
        golfie = function() {
            michal = _closure1_slot7;
            entity = michal.shouldFetchOffer;
            entity = entity.bind(michal)();
            entity = !entity;
            return entity;
        };
        golfie = backup.bind(kiloes)(foxtra, golfie);
        var _closure2_slot3 = golfie;
        foxtra = romeon[oscard];
        kiloes = offset.bind(yankee)(foxtra);
        backup = kiloes.useStateFromStores;
        foxtra = new Array(1);
        foxtra[0] = verify;
        verify = function() {
            michal = _closure1_slot6;
            entity = michal.hasFetchedMostRecentPremiumTypeSubscription;
            entity = entity.bind(michal)();
            return entity;
        };
        verify = backup.bind(kiloes)(foxtra, verify);
        var _closure2_slot4 = verify;
        oscard = romeon[oscard];
        kiloes = offset.bind(yankee)(oscard);
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
        foxtra = backup.bind(kiloes)(foxtra, oscard);
        oscard = 10;
        oscard = romeon[oscard];
        offset = offset.bind(yankee)(oscard);
        oscard = offset.isPremium;
        oscard = oscard.bind(offset)(foxtra);
        var _closure2_slot5 = oscard;
        offset = _closure1_slot1;
        tangon = 11;
        tangon = romeon[tangon];
        offset = offset.bind(yankee)(tangon);
        tangon = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot4;
                if(entity) { _fun00002_ip = 45; continue _fun00001 }
 10:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.fetchMostRecentSubscription;
                entity = entity.bind(michal)();
 45:
                zuuluu = _closure1_slot7;
                michal = zuuluu.shouldFetchOffer;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00002_ip = 194; continue _fun00001 }
 68:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                report = 13;
                michal = michal[report];
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(michal);
                michal = tangon.isAndroid;
                michal = michal.bind(tangon)();
                if(michal) { _fun00002_ip = 146; continue _fun00001 }
 102:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[report];
                tangon = tangon.bind(zuuluu)(michal);
                michal = tangon.isIOS;
                michal = michal.bind(tangon)();
                tangon = undefined;
                if(!michal) { _fun00002_ip = 156; continue _fun00001 }
 134:
                michal = _closure1_slot9;
                tangon = michal.APPLE;
                _fun00002_ip = 156; continue _fun00001;
 146:
                michal = _closure1_slot9;
                tangon = michal.GOOGLE;
 156:
                michal = _closure1_slot0;
                report = _closure1_slot2;
                entity = 14;
                entity = report[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.fetchUserOffer;
                entity = 'useCollectibleDecoIsEligible';
                entity = michal.bind(zuuluu)(entity, tangon);
 194:
                entity = undefined;
                return entity;
            }
        };
        tangon = offset.bind(yankee)(tangon);
        tangon = report.useEffect;
        offset = zuuluu.enabled;
        zuuluu = new Array(5);
        zuuluu[0] = offset;
        zuuluu[1] = verify;
        zuuluu[2] = option;
        zuuluu[3] = golfie;
        zuuluu[4] = oscard;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot1;
                michal = michal.enabled;
                tangon = false;
                if(!(tangon === michal)) { _fun00004_ip = 34; continue _fun00003 }
 18:
                zuuluu = _closure2_slot0;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon);
                _fun00004_ip = 416; continue _fun00003;
 34:
                michal = _closure2_slot4;
                if(!michal) { _fun00004_ip = 416; continue _fun00003 }
 44:
                michal = _closure2_slot3;
                if(!michal) { _fun00004_ip = 416; continue _fun00003 }
 54:
                michal = _closure2_slot2;
                oscard = null;
                if(!(oscard === michal)) { _fun00004_ip = 87; continue _fun00003 }
 64:
                report = _closure2_slot0;
                michal = _closure2_slot5;
                zuuluu = !michal;
                michal = undefined;
                michal = report.bind(michal)(zuuluu);
                _fun00004_ip = 416; continue _fun00003;
 87:
                michal = _closure2_slot2;
                michal = michal.isPaused;
                if(michal) { _fun00004_ip = 403; continue _fun00003 }
 103:
                michal = _closure2_slot2;
                michal = michal.isEnded;
                if(michal) { _fun00004_ip = 266; continue _fun00003 }
 119:
                michal = _closure2_slot2;
                michal = michal.isActive;
                if(michal) { _fun00004_ip = 148; continue _fun00003 }
 132:
                zuuluu = _closure2_slot0;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon);
                _fun00004_ip = 416; continue _fun00003;
 148:
                option = _closure2_slot2;
                golfie = _closure1_slot0;
                zuuluu = _closure1_slot2;
                verify = 7;
                zuuluu = zuuluu[verify];
                report = undefined;
                golfie = golfie.bind(report)(zuuluu);
                zuuluu = golfie.getPremiumPlanItem;
                zuuluu = zuuluu.bind(golfie)(option);
                oscard = oscard == zuuluu;
                option = undefined;
                if(oscard) { _fun00004_ip = 203; continue _fun00003 }
 197:
                option = zuuluu.planId;
 203:
                zuuluu = report === option;
                if(zuuluu) { _fun00004_ip = 252; continue _fun00003 }
 210:
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                oscard = oscard[verify];
                golfie = golfie.bind(report)(oscard);
                oscard = golfie.getPremiumType;
                oscard = oscard.bind(golfie)(option);
                michal = _closure1_slot8;
                michal = michal.TIER_2;
                zuuluu = oscard !== michal;
 252:
                michal = _closure2_slot0;
                michal = michal.bind(report)(zuuluu);
                _fun00004_ip = 416; continue _fun00003;
 266:
                report = _closure1_slot7;
                zuuluu = report.hasAnyUnexpiredOffer;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00004_ip = 390; continue _fun00003 }
 286:
                zuuluu = _closure1_slot7;
                michal = zuuluu.hasAnyUnexpiredDiscountOffer;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00004_ip = 390; continue _fun00003 }
 305:
                michal = _closure2_slot2;
                zuuluu = global;
                zuuluu = zuuluu.Date;
                report = zuuluu.prototype;
                report = Object.create(report, {constructor: {value: zuuluu}});
                yankee = report;
                zuuluu = new yankee[zuuluu](offset);
                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                oscard = zuuluu.setDate;
                report = zuuluu.getDate;
                golfie = report.bind(zuuluu)();
                report = 10;
                report = golfie - report;
                report = oscard.bind(zuuluu)(report);
                michal = michal.currentPeriodEnd;
                if(!(!(michal >= zuuluu))) { _fun00004_ip = 390; continue _fun00003 }
 375:
                report = _closure2_slot0;
                zuuluu = undefined;
                michal = true;
                michal = report.bind(zuuluu)(michal);
                _fun00004_ip = 416; continue _fun00003;
 390:
                zuuluu = _closure2_slot0;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon);
                _fun00004_ip = 416; continue _fun00003;
 403:
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
 416:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useCollectibleDecoEligible'] = michal;
    return entity;
})();