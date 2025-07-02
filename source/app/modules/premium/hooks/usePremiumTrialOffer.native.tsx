// app/modules/premium/hooks/usePremiumTrialOffer.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: useGetTrialOffer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 2;
            michal = verify[michal];
            golfie = undefined;
            zuuluu = option.bind(golfie)(michal);
            michal = zuuluu.useTrialOffer;
            michal = michal.bind(zuuluu)(oscard);
            zuuluu = global;
            report = zuuluu.Object;
            tangon = report.values;
            zuuluu = 3;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(golfie)(zuuluu);
            zuuluu = zuuluu.TrialIdToProductOfferId;
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.every;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = null;
            if(!zuuluu) { _fun00002_ip = 112; continue _fun00001 }
 109:
            entity = michal;
 112:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot3 = golfie;
    golfie = tangon.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot4 = golfie;
    golfie = tangon.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = golfie;
    golfie = tangon.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot6 = golfie;
    tangon = tangon.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/hooks/usePremiumTrialOffer.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: usePremiumTrialOffer
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        michal = 4;
        michal = report[michal];
        verify = undefined;
        oscard = tangon.bind(verify)(michal);
        report = oscard.useStateFromStores;
        michal = _closure1_slot2;
        tangon = new Array(1);
        tangon[0] = michal;
        michal = function() {
            michal = _closure1_slot2;
            entity = michal.getOfferIds;
            entity = entity.bind(michal)();
            return entity;
        };
        option = report.bind(oscard)(tangon, michal);
        golfie = _closure1_slot8;
        michal = _closure1_slot6;
        oscard = golfie.bind(verify)(michal, option);
        michal = _closure1_slot3;
        report = golfie.bind(verify)(michal, option);
        michal = _closure1_slot4;
        tangon = golfie.bind(verify)(michal, option);
        michal = _closure1_slot5;
        michal = golfie.bind(verify)(michal, option);
        zuuluu = _closure1_slot7;
        golfie = golfie.bind(verify)(zuuluu, option);
        zuuluu = new Array(5);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        zuuluu[2] = report;
        zuuluu[3] = tangon;
        zuuluu[4] = michal;
        michal = zuuluu.find;
        entity = function(argFoo) {
            michal = null;
            entity = argFoo;
            entity = michal != entity;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['usePremiumTrialOffer'] = michal;
    return entity;
})();