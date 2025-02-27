// app/modules/premium/PremiumSubscriptionOfferUtil.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = golfie[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = report;
    report = tangon.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID;
    var _closure1_slot8 = report;
    report = tangon.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot9 = report;
    report = tangon.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot10 = report;
    report = tangon.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot11 = report;
    report = tangon.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot12 = report;
    report = tangon.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot13 = report;
    report = tangon.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot14 = report;
    report = tangon.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot15 = report;
    tangon = tangon.PREMIUM_TIER_2_REFERRAL_INCENTIVE_1_MONTH_DISCOUNT_ID;
    var _closure1_slot16 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot17 = tangon;
    tangon = function() { // Original name: useHasDiscountApplied
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            report = undefined;
            oscard = zuuluu.bind(report)(entity);
            tangon = oscard.useStateFromStores;
            entity = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(oscard)(zuuluu, entity);
            entity = null;
            oscard = entity == zuuluu;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 91; continue _fun00001 }
 68:
            zuuluu = zuuluu.metadata;
            oscard = entity == zuuluu;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 91; continue _fun00001 }
 83:
            tangon = zuuluu.active_discount_expires_at;
 91:
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 158; continue _fun00001 }
 98:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 10;
            zuuluu = golfie[michal];
            option = oscard.bind(report)(zuuluu);
            zuuluu = global;
            verify = zuuluu.Date;
            zuuluu = verify.now;
            zuuluu = zuuluu.bind(verify)();
            zuuluu = option.bind(report)(zuuluu);
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.bind(report)(tangon);
            entity = zuuluu <= michal;
 158:
            return entity;
        }
    };
    var _closure1_slot18 = tangon;
    report = function() {
        tangon = _closure1_slot4;
        zuuluu = undefined;
        michal = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 127; continue _fun00003 }
 7:
                    golfie = undefined;
                    report = undefined;
                    tangon = null;
                    michal = null;
 15: // try_start_0
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = verify[zuuluu];
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    golfie = zuuluu.HTTP;
                    oscard = golfie.post;
                    zuuluu = {};
                    option = _closure1_slot17;
                    option = option.CHURN_USER_OFFER;
                    zuuluu['url'] = option;
                    option = true;
                    zuuluu['rejectWithError'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    SaveGenerator(address=80);
 78:
                    return zuuluu;
 80:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 119; continue _fun00003 }
 86:
                    oscard = zuuluu.body;
                    oscard = oscard.offer;
                    report = oscard;
                    oscard = tangon != oscard;
                    tangon = null;
                    if(!oscard) { _fun00004_ip = 114; continue _fun00003 }
 111:
                    tangon = report;
 114:
                    michal = tangon;
 117: // try_end0
                    _fun00004_ip = 124; continue _fun00003;
 119:
                    return zuuluu;
 122: // catch_target0
                    CatchBlockStart(arg_register=2);
 124:
                    return michal;
 127:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot19 = report;
    report = 14;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/PremiumSubscriptionOfferUtil.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: useIsInPremiumOfferExperience
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(entity);
            entity = tangon.usePremiumTrialOffer;
            entity = entity.bind(tangon)();
            tangon = 7;
            tangon = golfie[tangon];
            report = oscard.bind(zuuluu)(tangon);
            tangon = report.useHasActiveTrial;
            report = tangon.bind(report)();
            tangon = 8;
            tangon = golfie[tangon];
            oscard = oscard.bind(zuuluu)(tangon);
            tangon = oscard.usePremiumDiscountOffer;
            tangon = tangon.bind(oscard)();
            michal = _closure1_slot18;
            michal = michal.bind(zuuluu)();
            zuuluu = null;
            entity = zuuluu != entity;
            if(entity) { _fun00006_ip = 99; continue _fun00005 }
 96:
            entity = report;
 99:
            if(entity) { _fun00006_ip = 106; continue _fun00005 }
 102:
            entity = zuuluu != tangon;
 106:
            if(entity) { _fun00006_ip = 112; continue _fun00005 }
 109:
            entity = michal;
 112:
            return entity;
        }
    };
    zuuluu['useIsInPremiumOfferExperience'] = report;
    zuuluu['useHasDiscountApplied'] = tangon;
    tangon = function() {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot6;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = report.bind(oscard)(tangon, zuuluu);
            report = null;
            oscard = report == tangon;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 91; continue _fun00007 }
 68:
            tangon = tangon.metadata;
            report = report == tangon;
            zuuluu = undefined;
            if(report) { _fun00008_ip = 91; continue _fun00007 }
 83:
            zuuluu = tangon.active_discount_id;
 91:
            tangon = _closure1_slot9;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 251; continue _fun00007 }
 102:
            tangon = _closure1_slot11;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 251; continue _fun00007 }
 113:
            tangon = _closure1_slot10;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 235; continue _fun00007 }
 121:
            tangon = _closure1_slot13;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 235; continue _fun00007 }
 129:
            tangon = _closure1_slot15;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 235; continue _fun00007 }
 137:
            tangon = _closure1_slot12;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 219; continue _fun00007 }
 145:
            tangon = _closure1_slot7;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 203; continue _fun00007 }
 153:
            tangon = _closure1_slot8;
            if(!(tangon !== zuuluu)) { _fun00008_ip = 187; continue _fun00007 }
 161:
            michal = _closure1_slot16;
            if(!(michal !== zuuluu)) { _fun00008_ip = 171; continue _fun00007 }
 169:
            return entity;
 171:
            entity = {'duration': 1, 'percentage': 40};
            return entity;
 187:
            entity = {'duration': 1, 'percentage': 25};
            return entity;
 203:
            entity = {'duration': 1, 'percentage': 20};
            return entity;
 219:
            entity = {'duration': 1, 'percentage': 40};
            return entity;
 235:
            entity = {'duration': 3, 'percentage': 30};
            return entity;
 251:
            entity = {'duration': 1, 'percentage': 30};
            return entity;
        }
    };
    zuuluu['useActiveDiscountInfo'] = tangon;
    tangon = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            foxtra = _closure1_slot5;
            michal = foxtra.useState;
            oscard = false;
            michal = michal.bind(foxtra)(oscard);
            yankee = _closure1_slot3;
            report = undefined;
            offset = 2;
            michal = yankee.bind(report)(michal, offset);
            zuuluu = 0;
            option = michal[zuuluu];
            verify = 1;
            michal = michal[verify];
            var _closure2_slot0 = michal;
            michal = foxtra.useState;
            michal = michal.bind(foxtra)(oscard);
            oscard = yankee.bind(report)(michal, offset);
            michal = oscard[zuuluu];
            golfie = oscard[verify];
            var _closure2_slot1 = golfie;
            romeon = foxtra.useState;
            oscard = null;
            oscard = romeon.bind(foxtra)(oscard);
            oscard = yankee.bind(report)(oscard, offset);
            zuuluu = oscard[zuuluu];
            oscard = oscard[verify];
            var _closure2_slot2 = oscard;
            oscard = argFoo;
            if(oscard) { _fun00010_ip = 204; continue _fun00009 }
 117:
            oscard = function() { // Original name: onFetchComplete
                tangon = _closure2_slot0;
                entity = undefined;
                zuuluu = true;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot1;
                michal = false;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            var _closure2_slot3 = oscard;
            oscard = michal;
            if(oscard) { _fun00010_ip = 137; continue _fun00009 }
 134:
            oscard = option;
 137:
            if(oscard) { _fun00010_ip = 190; continue _fun00009 }
 140:
            oscard = true;
            oscard = golfie.bind(report)(oscard);
            tangon = _closure1_slot19;
            oscard = tangon.bind(report)();
            report = oscard.then;
            tangon = function(argFoo) {
                tangon = _closure2_slot2;
                entity = undefined;
                zuuluu = argFoo;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot3;
                michal = michal.bind(entity)();
                return entity;
            };
            report = report.bind(oscard)(tangon);
            tangon = report.catch;
            entity = function() {
                michal = _closure2_slot3;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = tangon.bind(report)(entity);
 190:
            entity = {};
            entity['churnUserDiscountOffer'] = zuuluu;
            entity['isFetchingChurnDiscountOffer'] = michal;
            return entity;
 204:
            entity = {};
            entity['churnUserDiscountOffer'] = zuuluu;
            entity['isFetchingChurnDiscountOffer'] = michal;
            return entity;
        }
    };
    zuuluu['useFetchChurnUserDiscountOffer'] = tangon;
    tangon = function() {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            oscard = tangon.bind(michal)(zuuluu);
            report = oscard.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot6;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = report.bind(oscard)(tangon, zuuluu);
            entity = _closure1_slot18;
            michal = entity.bind(michal)();
            report = null;
            entity = report !== tangon;
            if(!entity) { _fun00012_ip = 82; continue _fun00011 }
 74:
            entity = tangon.hasPremiumNitroMonthly;
 82:
            zuuluu = report != tangon;
            if(!zuuluu) { _fun00012_ip = 99; continue _fun00011 }
 89:
            tangon = tangon.trialId;
            zuuluu = report != tangon;
 99:
            if(!entity) { _fun00012_ip = 105; continue _fun00011 }
 102:
            entity = !zuuluu;
 105:
            if(!entity) { _fun00012_ip = 111; continue _fun00011 }
 108:
            entity = !michal;
 111:
            return entity;
        }
    };
    zuuluu['useShouldFetchChurnOffer'] = tangon;
    michal = function(argFoo) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.location;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 9;
            michal = golfie[michal];
            report = undefined;
            option = oscard.bind(report)(michal);
            tangon = option.useStateFromStores;
            entity = _closure1_slot6;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.getPremiumTypeSubscription;
                    zuuluu = michal.bind(zuuluu)();
                    michal = null;
                    tangon = michal == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00016_ip = 34; continue _fun00015 }
 28:
                    michal = zuuluu.trialId;
 34:
                    entity = _closure1_slot14;
                    entity = michal === entity;
                    return entity;
                }
            };
            entity = tangon.bind(option)(michal, entity);
            michal = 12;
            michal = golfie[michal];
            tangon = oscard.bind(report)(michal);
            michal = tangon.useIsInReverseTrial;
            michal = michal.bind(tangon)();
            tangon = 13;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            oscard = tangon.UpliftTrialNUXExperiment;
            report = oscard.useExperiment;
            tangon = {};
            tangon['location'] = zuuluu;
            zuuluu = {};
            golfie = !entity;
            zuuluu['disable'] = golfie;
            zuuluu['autoTrackExposure'] = entity;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            zuuluu = zuuluu.enabled;
            if(!entity) { _fun00014_ip = 149; continue _fun00013 }
 146:
            entity = zuuluu;
 149:
            if(entity) { _fun00014_ip = 155; continue _fun00013 }
 152:
            entity = michal;
 155:
            return entity;
        }
    };
    zuuluu['useIsNUXEligible'] = michal;
    return entity;
})();