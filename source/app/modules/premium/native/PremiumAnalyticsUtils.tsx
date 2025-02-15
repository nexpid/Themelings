// app/modules/premium/native/PremiumAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = offset;
    tango = function(argFoo) { // Original name: getBaseAnalyticsFields
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = {};
            tango = null;
            oscar = tango == zulu;
            mike = undefined;
            report = undefined;
            if(oscar) { _fun00002_ip = 23; continue _fun00001 }
 18:
            report = zulu.id;
 23:
            entity['subscription_id'] = report;
            oscar = tango == zulu;
            report = undefined;
            if(oscar) { _fun00002_ip = 42; continue _fun00001 }
 37:
            report = zulu.type;
 42:
            entity['subscription_type'] = report;
            oscar = tango != zulu;
            report = undefined;
            if(!oscar) { _fun00002_ip = 107; continue _fun00001 }
 56:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 2;
            oscar = options[oscar];
            golf = golf.bind(mike)(oscar);
            oscar = golf.getPremiumPlanItem;
            golf = oscar.bind(golf)(zulu);
            options = tango == golf;
            oscar = undefined;
            if(options) { _fun00002_ip = 104; continue _fun00001 }
 99:
            oscar = golf.id;
 104:
            report = oscar;
 107:
            entity['subscription_plan_id'] = report;
            oscar = tango == zulu;
            report = undefined;
            if(oscar) { _fun00002_ip = 127; continue _fun00001 }
 121:
            report = zulu.paymentGatewayPlanId;
 127:
            entity['subscription_plan_gateway_plan_id'] = report;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00002_ip = 146; continue _fun00001 }
 141:
            mike = zulu.status;
 146:
            entity['subscription_status'] = mike;
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 0;
    report = offset[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    oscar = report.SubscriptionTypes;
    var _closure1_slot3 = oscar;
    oscar = report.PurchaseTypeToAnalyticsPaymentType;
    var _closure1_slot4 = oscar;
    oscar = report.PurchaseTypes;
    var _closure1_slot5 = oscar;
    report = report.AnalyticEvents;
    var _closure1_slot6 = report;
    golf = {};
    report = 'sku_select';
    golf['SKU_SELECT'] = report;
    report = 'plan_select';
    golf['PLAN_SELECT'] = report;
    report = 'review';
    golf['REVIEW'] = report;
    report = 'confirm';
    golf['CONFIRM'] = report;
    report = 'yearly_upsell';
    golf['YEARLY_UPSELL'] = report;
    report = 'premium_upsell';
    golf['PREMIUM_UPSELL'] = report;
    report = 'external_payment';
    golf['EXTERNAL_PAYMENT'] = report;
    report = 'reward_sku_select';
    golf['REWARD_SKU_SELECT'] = report;
    oscar = {};
    options = 1;
    oscar['WHAT_YOU_LOSE'] = options;
    report = 'WHAT_YOU_LOSE';
    oscar[options] = report;
    options = 2;
    oscar['CONFIRM'] = options;
    report = 'CONFIRM';
    oscar[options] = report;
    options = 3;
    oscar['PREVIEW'] = options;
    report = 'PREVIEW';
    oscar[options] = report;
    options = 4;
    oscar['DOWNGRADE_TO_TIER_0'] = options;
    report = 'DOWNGRADE_TO_TIER_0';
    oscar[options] = report;
    yankee = 5;
    oscar['MOBILE_SUBSCRIPTION_MANAGE'] = yankee;
    report = 'MOBILE_SUBSCRIPTION_MANAGE';
    oscar[yankee] = report;
    report = {};
    romeo = oscar.WHAT_YOU_LOSE;
    yankee = "What You're Losing";
    report[romeo] = yankee;
    romeo = oscar.DOWNGRADE_TO_TIER_0;
    yankee = 'Downgrade To Tier 0';
    report[romeo] = yankee;
    romeo = oscar.CONFIRM;
    yankee = 'Confirm Cancellation';
    report[romeo] = yankee;
    romeo = oscar.PREVIEW;
    yankee = 'Preview Updated Subscription';
    report[romeo] = yankee;
    romeo = oscar.MOBILE_SUBSCRIPTION_MANAGE;
    yankee = 'Mobile Subscription Manage';
    report[romeo] = yankee;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/premium/native/PremiumAnalyticsUtils.tsx';
    options = verify.bind(offset)(options);
    zulu['PaymentFlowStep'] = golf;
    golf = function(argFoo) { // Original name: getBasePurchaseFlowAnalyticsFields
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscar = entity.analyticsLoadId;
            report = entity.isGift;
            mike = undefined;
            if(!(report === mike)) { _fun00004_ip = 23; continue _fun00003 }
 21:
            report = false;
 23:
            zulu = entity.analyticsLocation;
            tango = entity.analyticsLocations;
            entity = {};
            entity['load_id'] = oscar;
            options = _closure1_slot4;
            golf = _closure1_slot5;
            golf = golf.SUBSCRIPTION;
            golf = options[golf];
            entity['payment_type'] = golf;
            oscar = _closure1_slot3;
            oscar = oscar.PREMIUM;
            entity['subscription_type'] = oscar;
            entity['is_gift'] = report;
            entity['location'] = zulu;
            entity['location_stack'] = tango;
            tango = null;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00004_ip = 117; continue _fun00003 }
 112:
            mike = zulu.section;
 117:
            entity['location_section'] = mike;
            return entity;
        }
    };
    zulu['getBasePurchaseFlowAnalyticsFields'] = golf;
    golf = function(argFoo, argBar) { // Original name: getPaymentFlowCompletedAnalyticsFields
        entity = {};
        zulu = argFoo;
        tango = entity;
        mike = copyDataProperties(tango, zulu);
        zulu = argBar;
        tango = entity;
        mike = copyDataProperties(tango, zulu);
        return entity;
    };
    zulu['getPaymentFlowCompletedAnalyticsFields'] = golf;
    golf = function(argFoo, argBar) { // Original name: getPaymentFlowStepAnalyticsFields
        entity = {};
        zulu = argFoo;
        tango = entity;
        mike = copyDataProperties(tango, zulu);
        zulu = argBar;
        tango = entity;
        mike = copyDataProperties(tango, zulu);
        return entity;
    };
    zulu['getPaymentFlowStepAnalyticsFields'] = golf;
    golf = function() { // Original name: getNewAnalyticsLoadId
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.v4;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['getNewAnalyticsLoadId'] = golf;
    zulu['CancellationFlowSteps'] = oscar;
    zulu['STEP_ANALYTICS_NAMES'] = report;
    zulu['getBaseAnalyticsFields'] = tango;
    tango = function(argFoo, argBar) { // Original name: trackPremiumSubscriptionCancellationStarted
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CANCELLATION_FLOW_STARTED;
        mike = {};
        golf = argBar;
        mike['location_stack'] = golf;
        golf = _closure1_slot7;
        oscar = argFoo;
        options = golf.bind(entity)(oscar);
        verify = mike;
        oscar = copyDataProperties(verify, options);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackPremiumSubscriptionCancellationStarted'] = tango;
    mike = function(argFoo) { // Original name: trackPremiumSubscriptionCancellationFlowStep
        entity = argFoo;
        offset = entity.fromStep;
        verify = entity.toStep;
        golf = entity.subscription;
        options = entity.analyticsLocations;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CANCELLATION_FLOW_STEP;
        mike = {};
        mike['from_step'] = offset;
        mike['to_step'] = verify;
        mike['location_stack'] = options;
        oscar = _closure1_slot7;
        yankee = oscar.bind(entity)(golf);
        romeo = mike;
        oscar = copyDataProperties(romeo, yankee);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackPremiumSubscriptionCancellationFlowStep'] = mike;
    return entity;
})();