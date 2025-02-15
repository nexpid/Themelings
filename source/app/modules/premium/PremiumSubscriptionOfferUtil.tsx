// app/modules/premium/PremiumSubscriptionOfferUtil.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = golf[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = report;
    report = tango.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID;
    var _closure1_slot8 = report;
    report = tango.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot9 = report;
    report = tango.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot10 = report;
    report = tango.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot11 = report;
    report = tango.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot12 = report;
    report = tango.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot13 = report;
    report = tango.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot14 = report;
    report = tango.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot15 = report;
    tango = tango.PREMIUM_TIER_2_REFERRAL_INCENTIVE_1_MONTH_DISCOUNT_ID;
    var _closure1_slot16 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot17 = tango;
    tango = function() { // Original name: useHasDiscountApplied
        _fun104953: for(var _fun104953_ip = 0; ; ) switch(_fun104953_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            report = undefined;
            oscar = zulu.bind(report)(entity);
            tango = oscar.useStateFromStores;
            entity = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot6;
                entity = mike.getPremiumTypeSubscription;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = tango.bind(oscar)(zulu, entity);
            entity = null;
            oscar = entity == zulu;
            tango = undefined;
            if(oscar) { _fun104953_ip = 91; continue _fun104953 }
 68:
            zulu = zulu.metadata;
            oscar = entity == zulu;
            tango = undefined;
            if(oscar) { _fun104953_ip = 91; continue _fun104953 }
 83:
            tango = zulu.active_discount_expires_at;
 91:
            entity = entity != tango;
            if(!entity) { _fun104953_ip = 158; continue _fun104953 }
 98:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 10;
            zulu = golf[mike];
            options = oscar.bind(report)(zulu);
            zulu = global;
            verify = zulu.Date;
            zulu = verify.now;
            zulu = zulu.bind(verify)();
            zulu = options.bind(report)(zulu);
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.bind(report)(tango);
            entity = zulu <= mike;
 158:
            return entity;
        }
    };
    var _closure1_slot18 = tango;
    report = function() {
        tango = _closure1_slot4;
        zulu = undefined;
        mike = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun104957: for(var _fun104957_ip = 0; ; ) switch(_fun104957_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun104957_ip = 127; continue _fun104957 }
 7:
                    golf = undefined;
                    report = undefined;
                    tango = null;
                    mike = null;
 15: // try_start_0
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 11;
                    zulu = verify[zulu];
                    zulu = oscar.bind(golf)(zulu);
                    golf = zulu.HTTP;
                    oscar = golf.post;
                    zulu = {};
                    options = _closure1_slot17;
                    options = options.CHURN_USER_OFFER;
                    zulu['url'] = options;
                    options = true;
                    zulu['rejectWithError'] = options;
                    zulu = oscar.bind(golf)(zulu);
                    SaveGenerator(address=80);
 78:
                    return zulu;
 80:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun104957_ip = 119; continue _fun104957 }
 86:
                    oscar = zulu.body;
                    oscar = oscar.offer;
                    report = oscar;
                    oscar = tango != oscar;
                    tango = null;
                    if(!oscar) { _fun104957_ip = 114; continue _fun104957 }
 111:
                    tango = report;
 114:
                    mike = tango;
 117: // try_end0
                    _fun104957_ip = 124; continue _fun104957;
 119:
                    return zulu;
 122: // catch_target0
                    CatchBlockStart(arg_register=2);
 124:
                    return mike;
 127:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot19 = report;
    report = 14;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/PremiumSubscriptionOfferUtil.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: useIsInPremiumOfferExperience
        _fun104959: for(var _fun104959_ip = 0; ; ) switch(_fun104959_ip) {
 0:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 6;
            entity = golf[entity];
            zulu = undefined;
            tango = oscar.bind(zulu)(entity);
            entity = tango.usePremiumTrialOffer;
            entity = entity.bind(tango)();
            tango = 7;
            tango = golf[tango];
            report = oscar.bind(zulu)(tango);
            tango = report.useHasActiveTrial;
            report = tango.bind(report)();
            tango = 8;
            tango = golf[tango];
            oscar = oscar.bind(zulu)(tango);
            tango = oscar.usePremiumDiscountOffer;
            tango = tango.bind(oscar)();
            mike = _closure1_slot18;
            mike = mike.bind(zulu)();
            zulu = null;
            entity = zulu != entity;
            if(entity) { _fun104959_ip = 99; continue _fun104959 }
 96:
            entity = report;
 99:
            if(entity) { _fun104959_ip = 106; continue _fun104959 }
 102:
            entity = zulu != tango;
 106:
            if(entity) { _fun104959_ip = 112; continue _fun104959 }
 109:
            entity = mike;
 112:
            return entity;
        }
    };
    zulu['useIsInPremiumOfferExperience'] = report;
    zulu['useHasDiscountApplied'] = tango;
    tango = function() {
        _fun104960: for(var _fun104960_ip = 0; ; ) switch(_fun104960_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            report = oscar.useStateFromStores;
            zulu = _closure1_slot6;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                mike = _closure1_slot6;
                entity = mike.getPremiumTypeSubscription;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = report.bind(oscar)(tango, zulu);
            report = null;
            oscar = report == tango;
            zulu = undefined;
            if(oscar) { _fun104960_ip = 91; continue _fun104960 }
 68:
            tango = tango.metadata;
            report = report == tango;
            zulu = undefined;
            if(report) { _fun104960_ip = 91; continue _fun104960 }
 83:
            zulu = tango.active_discount_id;
 91:
            tango = _closure1_slot9;
            if(!(tango !== zulu)) { _fun104960_ip = 251; continue _fun104960 }
 102:
            tango = _closure1_slot11;
            if(!(tango !== zulu)) { _fun104960_ip = 251; continue _fun104960 }
 113:
            tango = _closure1_slot10;
            if(!(tango !== zulu)) { _fun104960_ip = 235; continue _fun104960 }
 121:
            tango = _closure1_slot13;
            if(!(tango !== zulu)) { _fun104960_ip = 235; continue _fun104960 }
 129:
            tango = _closure1_slot15;
            if(!(tango !== zulu)) { _fun104960_ip = 235; continue _fun104960 }
 137:
            tango = _closure1_slot12;
            if(!(tango !== zulu)) { _fun104960_ip = 219; continue _fun104960 }
 145:
            tango = _closure1_slot7;
            if(!(tango !== zulu)) { _fun104960_ip = 203; continue _fun104960 }
 153:
            tango = _closure1_slot8;
            if(!(tango !== zulu)) { _fun104960_ip = 187; continue _fun104960 }
 161:
            mike = _closure1_slot16;
            if(!(mike !== zulu)) { _fun104960_ip = 171; continue _fun104960 }
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
    zulu['useActiveDiscountInfo'] = tango;
    tango = function(argFoo) {
        _fun104962: for(var _fun104962_ip = 0; ; ) switch(_fun104962_ip) {
 0:
            foxtrot = _closure1_slot5;
            mike = foxtrot.useState;
            oscar = false;
            mike = mike.bind(foxtrot)(oscar);
            yankee = _closure1_slot3;
            report = undefined;
            offset = 2;
            mike = yankee.bind(report)(mike, offset);
            zulu = 0;
            options = mike[zulu];
            verify = 1;
            mike = mike[verify];
            var _closure2_slot0 = mike;
            mike = foxtrot.useState;
            mike = mike.bind(foxtrot)(oscar);
            oscar = yankee.bind(report)(mike, offset);
            mike = oscar[zulu];
            golf = oscar[verify];
            var _closure2_slot1 = golf;
            romeo = foxtrot.useState;
            oscar = null;
            oscar = romeo.bind(foxtrot)(oscar);
            oscar = yankee.bind(report)(oscar, offset);
            zulu = oscar[zulu];
            oscar = oscar[verify];
            var _closure2_slot2 = oscar;
            oscar = argFoo;
            if(oscar) { _fun104962_ip = 204; continue _fun104962 }
 117:
            oscar = function() { // Original name: onFetchComplete
                tango = _closure2_slot0;
                entity = undefined;
                zulu = true;
                zulu = tango.bind(entity)(zulu);
                zulu = _closure2_slot1;
                mike = false;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            var _closure2_slot3 = oscar;
            oscar = mike;
            if(oscar) { _fun104962_ip = 137; continue _fun104962 }
 134:
            oscar = options;
 137:
            if(oscar) { _fun104962_ip = 190; continue _fun104962 }
 140:
            oscar = true;
            oscar = golf.bind(report)(oscar);
            tango = _closure1_slot19;
            oscar = tango.bind(report)();
            report = oscar.then;
            tango = function(argFoo) {
                tango = _closure2_slot2;
                entity = undefined;
                zulu = argFoo;
                zulu = tango.bind(entity)(zulu);
                mike = _closure2_slot3;
                mike = mike.bind(entity)();
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.catch;
            entity = function() {
                mike = _closure2_slot3;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            entity = tango.bind(report)(entity);
 190:
            entity = {};
            entity['churnUserDiscountOffer'] = zulu;
            entity['isFetchingChurnDiscountOffer'] = mike;
            return entity;
 204:
            entity = {};
            entity['churnUserDiscountOffer'] = zulu;
            entity['isFetchingChurnDiscountOffer'] = mike;
            return entity;
        }
    };
    zulu['useFetchChurnUserDiscountOffer'] = tango;
    tango = function() {
        _fun104966: for(var _fun104966_ip = 0; ; ) switch(_fun104966_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            oscar = tango.bind(mike)(zulu);
            report = oscar.useStateFromStores;
            zulu = _closure1_slot6;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                mike = _closure1_slot6;
                entity = mike.getPremiumTypeSubscription;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = report.bind(oscar)(tango, zulu);
            entity = _closure1_slot18;
            mike = entity.bind(mike)();
            report = null;
            entity = report !== tango;
            if(!entity) { _fun104966_ip = 82; continue _fun104966 }
 74:
            entity = tango.hasPremiumNitroMonthly;
 82:
            zulu = report != tango;
            if(!zulu) { _fun104966_ip = 99; continue _fun104966 }
 89:
            tango = tango.trialId;
            zulu = report != tango;
 99:
            if(!entity) { _fun104966_ip = 105; continue _fun104966 }
 102:
            entity = !zulu;
 105:
            if(!entity) { _fun104966_ip = 111; continue _fun104966 }
 108:
            entity = !mike;
 111:
            return entity;
        }
    };
    zulu['useShouldFetchChurnOffer'] = tango;
    mike = function(argFoo) {
        _fun104968: for(var _fun104968_ip = 0; ; ) switch(_fun104968_ip) {
 0:
            entity = argFoo;
            zulu = entity.location;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 9;
            mike = golf[mike];
            report = undefined;
            options = oscar.bind(report)(mike);
            tango = options.useStateFromStores;
            entity = _closure1_slot6;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                _fun104969: for(var _fun104969_ip = 0; ; ) switch(_fun104969_ip) {
 0:
                    zulu = _closure1_slot6;
                    mike = zulu.getPremiumTypeSubscription;
                    zulu = mike.bind(zulu)();
                    mike = null;
                    tango = mike == zulu;
                    mike = undefined;
                    if(tango) { _fun104969_ip = 34; continue _fun104969 }
 28:
                    mike = zulu.trialId;
 34:
                    entity = _closure1_slot14;
                    entity = mike === entity;
                    return entity;
                }
            };
            entity = tango.bind(options)(mike, entity);
            mike = 12;
            mike = golf[mike];
            tango = oscar.bind(report)(mike);
            mike = tango.useIsInReverseTrial;
            mike = mike.bind(tango)();
            tango = 13;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            oscar = tango.UpliftTrialNUXExperiment;
            report = oscar.useExperiment;
            tango = {};
            tango['location'] = zulu;
            zulu = {};
            golf = !entity;
            zulu['disable'] = golf;
            zulu['autoTrackExposure'] = entity;
            zulu = report.bind(oscar)(tango, zulu);
            zulu = zulu.enabled;
            if(!entity) { _fun104968_ip = 149; continue _fun104968 }
 146:
            entity = zulu;
 149:
            if(entity) { _fun104968_ip = 155; continue _fun104968 }
 152:
            entity = mike;
 155:
            return entity;
        }
    };
    zulu['useIsNUXEligible'] = mike;
    return entity;
})();