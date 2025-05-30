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
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/hooks/usePremiumTrialOffer.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: usePremiumTrialOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 4;
            michal = oscard[michal];
            offset = undefined;
            michal = report.bind(offset)(michal);
            verify = michal.GooglePlayPremiumTrialsExperiment;
            option = verify.useExperiment;
            golfie = {};
            michal = '1c1161_1';
            golfie['location'] = michal;
            michal = {};
            tangon = false;
            michal['autoTrackExposure'] = tangon;
            tangon = 5;
            yankee = oscard[tangon];
            romeon = report.bind(offset)(yankee);
            yankee = romeon.isIOS;
            yankee = yankee.bind(romeon)();
            michal['disable'] = yankee;
            michal = option.bind(verify)(golfie, michal);
            michal = michal.enabled;
            tangon = oscard[tangon];
            report = report.bind(offset)(tangon);
            tangon = report.isIOS;
            verify = tangon.bind(report)();
            if(verify) { _fun00004_ip = 123; continue _fun00003 }
 120:
            verify = michal;
 123:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 6;
            michal = report[michal];
            oscard = tangon.bind(offset)(michal);
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
            oscard = golfie.bind(offset)(michal, option, verify);
            michal = _closure1_slot3;
            report = golfie.bind(offset)(michal, option, verify);
            michal = _closure1_slot4;
            tangon = golfie.bind(offset)(michal, option, verify);
            michal = _closure1_slot5;
            michal = golfie.bind(offset)(michal, option, verify);
            zuuluu = _closure1_slot7;
            golfie = golfie.bind(offset)(zuuluu, option, verify);
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
        }
    };
    zuuluu['usePremiumTrialOffer'] = michal;
    return entity;
})();