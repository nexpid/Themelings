// app/modules/premium/hooks/usePremiumTrialOffer.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: useGetTrialOffer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 2;
            entity = verify[entity];
            golfie = undefined;
            michal = option.bind(golfie)(entity);
            entity = michal.useTrialOffer;
            michal = entity.bind(michal)(oscard);
            entity = global;
            report = entity.Object;
            tangon = report.values;
            entity = 3;
            entity = verify[entity];
            entity = option.bind(golfie)(entity);
            entity = entity.TrialIdToProductOfferId;
            entity = entity[oscard];
            oscard = tangon.bind(report)(entity);
            report = argBaz;
            entity = null;
            if(!report) { _fun00002_ip = 120; continue _fun00001 }
 96:
            report = oscard.every;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            entity = null;
            if(!zuuluu) { _fun00002_ip = 120; continue _fun00001 }
 117:
            entity = michal;
 120:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    golfie = tangon.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID;
    var _closure1_slot6 = golfie;
    golfie = tangon.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot7 = golfie;
    tangon = tangon.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot8 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/hooks/usePremiumTrialOffer.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: usePremiumTrialOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 4;
            michal = verify[michal];
            yankee = undefined;
            michal = option.bind(yankee)(michal);
            oscard = michal.GooglePlayPremiumTrialsExperiment;
            report = oscard.useExperiment;
            tangon = {};
            michal = '1c1161_1';
            tangon['location'] = michal;
            michal = {};
            romeon = false;
            michal['autoTrackExposure'] = romeon;
            golfie = 5;
            offset = verify[golfie];
            foxtra = option.bind(yankee)(offset);
            offset = foxtra.isIOS;
            offset = offset.bind(foxtra)();
            michal['disable'] = offset;
            michal = report.bind(oscard)(tangon, michal);
            offset = michal.enabled;
            michal = 6;
            michal = verify[michal];
            michal = option.bind(yankee)(michal);
            oscard = michal.IOSPremiumTrialsExperiment;
            report = oscard.useExperiment;
            tangon = {};
            michal = '1c1161_2';
            tangon['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = romeon;
            golfie = verify[golfie];
            option = option.bind(yankee)(golfie);
            golfie = option.isAndroid;
            golfie = golfie.bind(option)();
            michal['disable'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
            michal = michal.enabled;
            if(offset) { _fun00004_ip = 181; continue _fun00003 }
 178:
            offset = michal;
 181:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 7;
            michal = report[michal];
            oscard = tangon.bind(yankee)(michal);
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
            verify = report.bind(oscard)(tangon, michal);
            option = _closure1_slot9;
            michal = _closure1_slot7;
            golfie = option.bind(yankee)(michal, verify, offset);
            michal = _closure1_slot3;
            oscard = option.bind(yankee)(michal, verify, offset);
            michal = _closure1_slot4;
            report = option.bind(yankee)(michal, verify, offset);
            michal = _closure1_slot5;
            tangon = option.bind(yankee)(michal, verify, offset);
            michal = _closure1_slot6;
            michal = option.bind(yankee)(michal, verify, offset);
            zuuluu = _closure1_slot8;
            option = option.bind(yankee)(zuuluu, verify, offset);
            zuuluu = new Array(6);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            zuuluu[2] = oscard;
            zuuluu[3] = report;
            zuuluu[4] = tangon;
            zuuluu[5] = michal;
            michal = zuuluu.find;
            entity = function(argFoo) {
                michal = null;
                entity = argFoo;
                entity = michal != entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['usePremiumTrialOffer'] = michal;
    return entity;
})();