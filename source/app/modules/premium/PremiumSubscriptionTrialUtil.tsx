// app/modules/premium/PremiumSubscriptionTrialUtil.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = golfie;
    golfie = tangon.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot6 = golfie;
    golfie = tangon.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID;
    var _closure1_slot7 = golfie;
    golfie = tangon.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot8 = golfie;
    tangon = tangon.PREMIUM_TRIAL_IDS_ALL;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/PremiumSubscriptionTrialUtil.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.useStateFromStores;
            michal = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot3;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = null;
            tangon = michal == zuuluu;
            if(tangon) { _fun00002_ip = 72; continue _fun00001 }
 66:
            entity = zuuluu.trialId;
 72:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['useHasActiveTrial'] = tangon;
    tangon = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot3;
            entity = michal.getPremiumTypeSubscription;
            zuuluu = entity.bind(michal)();
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 34; continue _fun00003 }
 28:
            entity = zuuluu.trialId;
 34:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['hasActiveTrial'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            michal = null;
            zuuluu = michal == tangon;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 20; continue _fun00005 }
 14:
            entity = tangon.trialId;
 20:
            entity = michal != entity;
            if(!entity) { _fun00006_ip = 98; continue _fun00005 }
 27:
            report = tangon.trialId;
            michal = _closure1_slot5;
            michal = report === michal;
            if(michal) { _fun00006_ip = 61; continue _fun00005 }
 47:
            oscard = tangon.trialId;
            report = _closure1_slot6;
            michal = oscard === report;
 61:
            if(michal) { _fun00006_ip = 78; continue _fun00005 }
 64:
            oscard = tangon.trialId;
            report = _closure1_slot7;
            michal = oscard === report;
 78:
            if(michal) { _fun00006_ip = 95; continue _fun00005 }
 81:
            tangon = tangon.trialId;
            zuuluu = _closure1_slot8;
            michal = tangon === zuuluu;
 95:
            entity = michal;
 98:
            return entity;
        }
    };
    zuuluu['isEligibleTrialSub'] = tangon;
    tangon = function() { // Original name: useCurrentPremiumTrialTier
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 4;
            report = golfie[tangon];
            michal = undefined;
            offset = oscard.bind(michal)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot3;
            option = new Array(1);
            option[0] = report;
            report = function() {
                michal = _closure1_slot3;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            report = verify.bind(offset)(option, report);
            tangon = golfie[tangon];
            oscard = oscard.bind(michal)(tangon);
            tangon = oscard.useStateFromStores;
            golfie = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            entity = function() {
                michal = _closure1_slot2;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(oscard)(zuuluu, entity);
            tangon = null;
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00008_ip = 113; continue _fun00007 }
 107:
            entity = report.trialId;
 113:
            report = tangon != entity;
            entity = null;
            if(!report) { _fun00008_ip = 140; continue _fun00007 }
 122:
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00008_ip = 137; continue _fun00007 }
 131:
            michal = zuuluu.premiumType;
 137:
            entity = michal;
 140:
            return entity;
        }
    };
    zuuluu['useCurrentPremiumTrialTier'] = tangon;
    michal = function() { // Original name: getPremiumTrialOffer
        tangon = _closure1_slot9;
        zuuluu = tangon.map;
        michal = function(argFoo) {
            zuuluu = _closure1_slot4;
            michal = zuuluu.getUserTrialOffer;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00010_ip = 51; continue _fun00009 }
 12:
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 5;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.hasUserTrialOfferExpired;
                michal = michal.bind(zuuluu)(tangon);
                entity = !michal;
 51:
                return entity;
            }
        };
        michal = michal.bind(zuuluu)(entity);
        entity = michal.shift;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['getPremiumTrialOffer'] = michal;
    return entity;
})();