// app/modules/premium/native/MobileTrialUtils.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
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
    tangon = tangon.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/MobileTrialUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useShouldShowPremiumTrialUserSettingsAvatarBadge
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 1;
            entity = golfie[entity];
            zuuluu = undefined;
            michal = oscard.bind(zuuluu)(entity);
            entity = michal.usePremiumTrialOffer;
            tangon = entity.bind(michal)();
            entity = 2;
            entity = golfie[entity];
            report = oscard.bind(zuuluu)(entity);
            michal = report.useIsDismissibleContentTypeDismissed;
            entity = 3;
            entity = golfie[entity];
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.DismissibleContent;
            entity = entity.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE;
            michal = michal.bind(report)(entity);
            entity = null;
            report = entity == tangon;
            if(report) { _fun00002_ip = 97; continue _fun00001 }
 91:
            zuuluu = tangon.expires_at;
 97:
            zuuluu = entity != zuuluu;
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 111; continue _fun00001 }
 108:
            entity = !zuuluu;
 111:
            if(!entity) { _fun00002_ip = 117; continue _fun00001 }
 114:
            entity = !michal;
 117:
            return entity;
        }
    };
    zuuluu['useShouldShowPremiumTrialUserSettingsAvatarBadge'] = tangon;
    michal = function() { // Original name: usePremiumTrialOfferPremiumType
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            michal = tangon[michal];
            report = undefined;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.usePremiumTrialOffer;
            zuuluu = michal.bind(zuuluu)();
            tangon = null;
            oscard = tangon == zuuluu;
            michal = undefined;
            if(oscard) { _fun00004_ip = 67; continue _fun00003 }
 46:
            zuuluu = zuuluu.subscription_trial;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00004_ip = 67; continue _fun00003 }
 61:
            michal = zuuluu.sku_id;
 67:
            entity = _closure1_slot2;
            entity = entity[michal];
            return entity;
        }
    };
    zuuluu['usePremiumTrialOfferPremiumType'] = michal;
    return entity;
})();