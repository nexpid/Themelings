// app/modules/premium/native/PremiumAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = offset;
    tangon = function(argFoo) { // Original name: getBaseAnalyticsFields
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            tangon = null;
            oscard = tangon == zuuluu;
            michal = undefined;
            report = undefined;
            if(oscard) { _fun00002_ip = 23; continue _fun00001 }
 18:
            report = zuuluu.id;
 23:
            entity['subscription_id'] = report;
            oscard = tangon == zuuluu;
            report = undefined;
            if(oscard) { _fun00002_ip = 42; continue _fun00001 }
 37:
            report = zuuluu.type;
 42:
            entity['subscription_type'] = report;
            oscard = tangon != zuuluu;
            report = undefined;
            if(!oscard) { _fun00002_ip = 107; continue _fun00001 }
 56:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 2;
            oscard = option[oscard];
            golfie = golfie.bind(michal)(oscard);
            oscard = golfie.getPremiumPlanItem;
            golfie = oscard.bind(golfie)(zuuluu);
            option = tangon == golfie;
            oscard = undefined;
            if(option) { _fun00002_ip = 104; continue _fun00001 }
 99:
            oscard = golfie.id;
 104:
            report = oscard;
 107:
            entity['subscription_plan_id'] = report;
            oscard = tangon == zuuluu;
            report = undefined;
            if(oscard) { _fun00002_ip = 127; continue _fun00001 }
 121:
            report = zuuluu.paymentGatewayPlanId;
 127:
            entity['subscription_plan_gateway_plan_id'] = report;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 146; continue _fun00001 }
 141:
            michal = zuuluu.status;
 146:
            entity['subscription_status'] = michal;
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 0;
    report = offset[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    oscard = report.SubscriptionTypes;
    var _closure1_slot3 = oscard;
    oscard = report.PurchaseTypeToAnalyticsPaymentType;
    var _closure1_slot4 = oscard;
    oscard = report.PurchaseTypes;
    var _closure1_slot5 = oscard;
    report = report.AnalyticEvents;
    var _closure1_slot6 = report;
    golfie = {};
    report = 'sku_select';
    golfie['SKU_SELECT'] = report;
    report = 'plan_select';
    golfie['PLAN_SELECT'] = report;
    report = 'review';
    golfie['REVIEW'] = report;
    report = 'confirm';
    golfie['CONFIRM'] = report;
    report = 'yearly_upsell';
    golfie['YEARLY_UPSELL'] = report;
    report = 'premium_upsell';
    golfie['PREMIUM_UPSELL'] = report;
    report = 'external_payment';
    golfie['EXTERNAL_PAYMENT'] = report;
    report = 'reward_sku_select';
    golfie['REWARD_SKU_SELECT'] = report;
    oscard = {};
    option = 1;
    oscard['WHAT_YOU_LOSE'] = option;
    report = 'WHAT_YOU_LOSE';
    oscard[option] = report;
    option = 2;
    oscard['CONFIRM'] = option;
    report = 'CONFIRM';
    oscard[option] = report;
    option = 3;
    oscard['PREVIEW'] = option;
    report = 'PREVIEW';
    oscard[option] = report;
    option = 4;
    oscard['DOWNGRADE_TO_TIER_0'] = option;
    report = 'DOWNGRADE_TO_TIER_0';
    oscard[option] = report;
    yankee = 5;
    oscard['MOBILE_SUBSCRIPTION_MANAGE'] = yankee;
    report = 'MOBILE_SUBSCRIPTION_MANAGE';
    oscard[yankee] = report;
    report = {};
    romeon = oscard.WHAT_YOU_LOSE;
    yankee = "What You're Losing";
    report[romeon] = yankee;
    romeon = oscard.DOWNGRADE_TO_TIER_0;
    yankee = 'Downgrade To Tier 0';
    report[romeon] = yankee;
    romeon = oscard.CONFIRM;
    yankee = 'Confirm Cancellation';
    report[romeon] = yankee;
    romeon = oscard.PREVIEW;
    yankee = 'Preview Updated Subscription';
    report[romeon] = yankee;
    romeon = oscard.MOBILE_SUBSCRIPTION_MANAGE;
    yankee = 'Mobile Subscription Manage';
    report[romeon] = yankee;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/premium/native/PremiumAnalyticsUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['PaymentFlowStep'] = golfie;
    golfie = function(argFoo) { // Original name: getBasePurchaseFlowAnalyticsFields
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.analyticsLoadId;
            report = entity.isGift;
            michal = undefined;
            if(!(report === michal)) { _fun00004_ip = 23; continue _fun00003 }
 21:
            report = false;
 23:
            zuuluu = entity.analyticsLocation;
            tangon = entity.analyticsLocations;
            entity = {};
            entity['load_id'] = oscard;
            option = _closure1_slot4;
            golfie = _closure1_slot5;
            golfie = golfie.SUBSCRIPTION;
            golfie = option[golfie];
            entity['payment_type'] = golfie;
            oscard = _closure1_slot3;
            oscard = oscard.PREMIUM;
            entity['subscription_type'] = oscard;
            entity['is_gift'] = report;
            entity['location'] = zuuluu;
            entity['location_stack'] = tangon;
            tangon = null;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00004_ip = 117; continue _fun00003 }
 112:
            michal = zuuluu.section;
 117:
            entity['location_section'] = michal;
            return entity;
        }
    };
    zuuluu['getBasePurchaseFlowAnalyticsFields'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: getPaymentFlowCompletedAnalyticsFields
        entity = {};
        zuuluu = argFoo;
        tangon = entity;
        michal = copyDataProperties(tangon, zuuluu);
        zuuluu = argBar;
        tangon = entity;
        michal = copyDataProperties(tangon, zuuluu);
        return entity;
    };
    zuuluu['getPaymentFlowCompletedAnalyticsFields'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: getPaymentFlowStepAnalyticsFields
        entity = {};
        zuuluu = argFoo;
        tangon = entity;
        michal = copyDataProperties(tangon, zuuluu);
        zuuluu = argBar;
        tangon = entity;
        michal = copyDataProperties(tangon, zuuluu);
        return entity;
    };
    zuuluu['getPaymentFlowStepAnalyticsFields'] = golfie;
    golfie = function() { // Original name: getNewAnalyticsLoadId
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.v4;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['getNewAnalyticsLoadId'] = golfie;
    zuuluu['CancellationFlowSteps'] = oscard;
    zuuluu['STEP_ANALYTICS_NAMES'] = report;
    zuuluu['getBaseAnalyticsFields'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: trackPremiumSubscriptionCancellationStarted
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CANCELLATION_FLOW_STARTED;
        michal = {};
        golfie = argBar;
        michal['location_stack'] = golfie;
        golfie = _closure1_slot7;
        oscard = argFoo;
        option = golfie.bind(entity)(oscard);
        verify = michal;
        oscard = copyDataProperties(verify, option);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackPremiumSubscriptionCancellationStarted'] = tangon;
    michal = function(argFoo) { // Original name: trackPremiumSubscriptionCancellationFlowStep
        entity = argFoo;
        offset = entity.fromStep;
        verify = entity.toStep;
        golfie = entity.subscription;
        option = entity.analyticsLocations;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CANCELLATION_FLOW_STEP;
        michal = {};
        michal['from_step'] = offset;
        michal['to_step'] = verify;
        michal['location_stack'] = option;
        oscard = _closure1_slot7;
        yankee = oscard.bind(entity)(golfie);
        romeon = michal;
        oscard = copyDataProperties(romeon, yankee);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackPremiumSubscriptionCancellationFlowStep'] = michal;
    return entity;
})();