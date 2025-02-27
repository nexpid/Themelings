// app/modules/premium/premium_marketing/PremiumMarketingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _getSubscriptionRewardEligibility
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 276; continue _fun00001 }
 10:
                    option = argFoo;
                    tangon = undefined;
                    zuuluu = undefined;
 17: // try_start_0
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 2;
                    michal = golfie[michal];
                    michal = oscard.bind(tangon)(michal);
                    golfie = michal.HTTP;
                    oscard = golfie.get;
                    michal = {};
                    offset = _closure1_slot4;
                    verify = offset.Billing_SUBSCRIPTION_REWARD_ELIGIBILITY;
                    option = verify.bind(offset)(option);
                    michal['url'] = option;
                    option = true;
                    michal['rejectWithError'] = option;
                    michal = oscard.bind(golfie)(michal);
                    SaveGenerator(address=86);
 84:
                    return michal;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 221; continue _fun00001 }
 95:
                    zuuluu = michal;
                    oscard = michal.ok;
                    if(oscard) { _fun00002_ip = 154; continue _fun00001 }
 107:
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 3;
                    oscard = option[oscard];
                    option = golfie.bind(tangon)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    verify = 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE';
                    oscard['type'] = verify;
                    oscard = golfie.bind(option)(oscard);
 149: // try_end0
                    oscard = false;
                    return oscard;
 154: // try_start_1
                    zuuluu = zuuluu.body;
                    zuuluu = zuuluu.eligible;
                    zuuluu = !zuuluu;
                    zuuluu = !zuuluu;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 3;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS';
                    report['type'] = option;
                    report['eligible'] = zuuluu;
                    report = oscard.bind(golfie)(report);
 218: // try_end1
                    return zuuluu;
 221:
                    return michal;
 224: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 3;
                    michal = report[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = false;
                    return michal;
 276:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _fetchPremiumMarketingContent
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 155; continue _fun00003 }
 10:
                    oscard = undefined;
                    tangon = undefined;
 14: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 2;
                    michal = golfie[michal];
                    michal = report.bind(oscard)(michal);
                    golfie = michal.HTTP;
                    report = golfie.get;
                    michal = {};
                    option = _closure1_slot4;
                    option = option.PREMIUM_MARKETING;
                    michal['url'] = option;
                    option = true;
                    michal['rejectWithError'] = option;
                    michal = report.bind(golfie)(michal);
                    SaveGenerator(address=78);
 76:
                    return michal;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 145; continue _fun00003 }
 84:
                    tangon = michal;
                    report = michal.ok;
                    if(report) { _fun00004_ip = 137; continue _fun00003 }
 96:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    oscard = report.bind(oscard)(zuuluu);
                    report = oscard.captureMessage;
                    zuuluu = 'fetchPremiumMarketingContent failed';
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = null;
                    _fun00004_ip = 142; continue _fun00003;
 137:
                    zuuluu = tangon.body;
 142: // try_end0
                    return zuuluu;
 145:
                    return michal;
 148: // catch_target0
                    CatchBlockStart(arg_register=1);
                    michal = null;
                    return michal;
 155:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _fetchPremiumMarketingContentWithUserOffer
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 218; continue _fun00005 }
 13:
                    romeon = michal.userTrialOffer;
                    yankee = michal.userDiscount;
                    offset = michal.userDiscountOffer;
                    golfie = undefined;
                    report = undefined;
                    SaveGenerator(address=39);
 37:
                    return golfie;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 215; continue _fun00005 }
 48: // try_start_0
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 2;
                    zuuluu = option[zuuluu];
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    option = zuuluu.HTTP;
                    oscard = option.post;
                    zuuluu = {};
                    verify = _closure1_slot4;
                    verify = verify.PREMIUM_MARKETING;
                    zuuluu['url'] = verify;
                    verify = {};
                    verify['user_trial_offer'] = romeon;
                    verify['user_discount'] = yankee;
                    verify['user_discount_offer'] = offset;
                    zuuluu['body'] = verify;
                    verify = true;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = oscard.bind(option)(zuuluu);
                    SaveGenerator(address=134);
 132:
                    return zuuluu;
 134:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00006_ip = 203; continue _fun00005 }
 140:
                    report = zuuluu;
                    oscard = zuuluu.ok;
                    if(oscard) { _fun00006_ip = 195; continue _fun00005 }
 152:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 4;
                    tangon = option[tangon];
                    golfie = oscard.bind(golfie)(tangon);
                    oscard = golfie.captureMessage;
                    tangon = 'fetchPremiumMarketingContentWithUserOffer failed';
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = new Array(0);
                    _fun00006_ip = 200; continue _fun00005;
 195:
                    tangon = report.body;
 200: // try_end0
                    return tangon;
 203:
                    return zuuluu;
 206: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zuuluu = new Array(0);
                    return zuuluu;
 215:
                    return michal;
 218:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _grantSubscriptionRewards
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 199; continue _fun00007 }
 13:
                    option = michal.subscriptionId;
                    verify = michal.rewardSkuIds;
                    oscard = undefined;
                    SaveGenerator(address=31);
 29:
                    return oscard;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 196; continue _fun00007 }
 40: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 2;
                    zuuluu = golfie[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    golfie = zuuluu.HTTP;
                    report = golfie.post;
                    zuuluu = {};
                    yankee = _closure1_slot4;
                    offset = yankee.BILLING_SUBSCRIPTION_REWARDS;
                    option = offset.bind(yankee)(option);
                    zuuluu['url'] = option;
                    option = {};
                    option['reward_sku_ids'] = verify;
                    zuuluu['body'] = option;
                    option = true;
                    zuuluu['rejectWithError'] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
                    SaveGenerator(address=121);
 119:
                    return zuuluu;
 121:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 186; continue _fun00007 }
 127:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 3;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'ENTITLEMENT_CREATE';
                    tangon['type'] = golfie;
                    golfie = zuuluu.body;
                    tangon['entitlement'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    tangon = zuuluu.ok;
 183: // try_end0
                    return tangon;
 186:
                    return zuuluu;
 189: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zuuluu = false;
                    return zuuluu;
 196:
                    return michal;
 199:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
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
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/premium_marketing/PremiumMarketingActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getSubscriptionRewardEligibility
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getSubscriptionRewardEligibility'] = tangon;
    tangon = function(argFoo) { // Original name: setSubscriptionRewardEligibilityLocally
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS';
        michal['type'] = report;
        report = argFoo;
        michal['eligible'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setSubscriptionRewardEligibilityLocally'] = tangon;
    tangon = function() { // Original name: fetchPremiumMarketingContent
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchPremiumMarketingContent'] = tangon;
    tangon = function() { // Original name: fetchPremiumMarketingContentWithUserOffer
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchPremiumMarketingContentWithUserOffer'] = tangon;
    michal = function() { // Original name: grantSubscriptionRewards
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['grantSubscriptionRewards'] = michal;
    return entity;
})();