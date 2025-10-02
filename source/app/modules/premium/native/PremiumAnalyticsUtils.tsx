// app/modules/premium/native/PremiumAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
    var1 = function getBaseAnalyticsFields(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = null;
            var6 = var4 == var3;
            var2 = undefined;
            var5 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.id;
case 2:
            var1['subscription_id'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.type;
case 4:
            var1['subscription_type'] = var5;
            var6 = var4 != var3;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var7 = var7.bind(var2)(var6);
            var6 = var7.getPremiumPlanItem;
            var7 = var6.bind(var7)(var3);
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.id;
case 8:
            var5 = var6;
case 6:
            var1['subscription_plan_id'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var3.paymentGatewayPlanId;
case 10:
            var1['subscription_plan_gateway_plan_id'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var3.status;
case 12:
            var1['subscription_status'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var5 = var4.SubscriptionTypes;
    var _closure1_slot3 = var5;
    var5 = var4.PurchaseTypeToAnalyticsPaymentType;
    var _closure1_slot4 = var5;
    var5 = var4.PurchaseTypes;
    var _closure1_slot5 = var5;
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var6 = {};
    var4 = 'sku_select';
    var6['SKU_SELECT'] = var4;
    var4 = 'plan_select';
    var6['PLAN_SELECT'] = var4;
    var4 = 'review';
    var6['REVIEW'] = var4;
    var4 = 'confirm';
    var6['CONFIRM'] = var4;
    var4 = 'apple_payment_link_nitro_standard_checkout';
    var6['APPLE_PAYMENT_LINK_NITRO_STANDARD_CHECKOUT'] = var4;
    var4 = 'yearly_upsell';
    var6['YEARLY_UPSELL'] = var4;
    var4 = 'premium_upsell';
    var6['PREMIUM_UPSELL'] = var4;
    var4 = 'external_payment';
    var6['EXTERNAL_PAYMENT'] = var4;
    var4 = 'reward_sku_select';
    var6['REWARD_SKU_SELECT'] = var4;
    var5 = {};
    var7 = 1;
    var5['WHAT_YOU_LOSE'] = var7;
    var4 = 'WHAT_YOU_LOSE';
    var5[var7] = var4;
    var7 = 2;
    var5['CONFIRM'] = var7;
    var4 = 'CONFIRM';
    var5[var7] = var4;
    var7 = 3;
    var5['PREVIEW'] = var7;
    var4 = 'PREVIEW';
    var5[var7] = var4;
    var7 = 4;
    var5['DOWNGRADE_TO_TIER_0'] = var7;
    var4 = 'DOWNGRADE_TO_TIER_0';
    var5[var7] = var4;
    var10 = 5;
    var5['MOBILE_SUBSCRIPTION_MANAGE'] = var10;
    var4 = 'MOBILE_SUBSCRIPTION_MANAGE';
    var5[var10] = var4;
    var4 = {};
    var11 = var5.WHAT_YOU_LOSE;
    var10 = "What You're Losing";
    var4[var11] = var10;
    var11 = var5.DOWNGRADE_TO_TIER_0;
    var10 = 'Downgrade To Tier 0';
    var4[var11] = var10;
    var11 = var5.CONFIRM;
    var10 = 'Confirm Cancellation';
    var4[var11] = var10;
    var11 = var5.PREVIEW;
    var10 = 'Preview Updated Subscription';
    var4[var11] = var10;
    var11 = var5.MOBILE_SUBSCRIPTION_MANAGE;
    var10 = 'Mobile Subscription Manage';
    var4[var11] = var10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/native/PremiumAnalyticsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['PaymentFlowStep'] = var6;
    var6 = function getBasePurchaseFlowAnalyticsFields(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.analyticsLoadId;
            var5 = var1.isGift;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0002_ip = 2; continue _fun0002 }
case 14:
            var5 = false;
case 2:
            var3 = var1.analyticsLocation;
            var4 = var1.analyticsLocations;
            var1 = {};
            var1['load_id'] = var6;
            var8 = _closure1_slot4;
            var7 = _closure1_slot5;
            var7 = var7.SUBSCRIPTION;
            var7 = var8[var7];
            var1['payment_type'] = var7;
            var6 = _closure1_slot3;
            var6 = var6.PREMIUM;
            var1['subscription_type'] = var6;
            var1['is_gift'] = var5;
            var1['location'] = var3;
            var1['location_stack'] = var4;
            var4 = null;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = var3.section;
case 15:
            var1['location_section'] = var2;
            return var1;
        }
    };
    var3['getBasePurchaseFlowAnalyticsFields'] = var6;
    var6 = function getPaymentFlowCompletedAnalyticsFields(arg1, arg2) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        var3 = arg2;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var3['getPaymentFlowCompletedAnalyticsFields'] = var6;
    var6 = function getPaymentFlowStepAnalyticsFields(arg1, arg2) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        var3 = arg2;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var3['getPaymentFlowStepAnalyticsFields'] = var6;
    var6 = function getNewAnalyticsLoadId() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getNewAnalyticsLoadId'] = var6;
    var3['CancellationFlowSteps'] = var5;
    var3['STEP_ANALYTICS_NAMES'] = var4;
    var4 = function trackPremiumSubscriptionCancellationStarted(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.CANCELLATION_FLOW_STARTED;
        var2 = {};
        var7 = arg2;
        var2['location_stack'] = var7;
        var7 = _closure1_slot7;
        var6 = arg1;
        var8 = var7.bind(var1)(var6);
        var9 = var2;
        var6 = copyDataProperties(var9, var8);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackPremiumSubscriptionCancellationStarted'] = var4;
    var2 = function trackPremiumSubscriptionCancellationFlowStep(arg1) {
        var1 = arg1;
        var10 = var1.fromStep;
        var9 = var1.toStep;
        var7 = var1.subscription;
        var8 = var1.analyticsLocations;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.CANCELLATION_FLOW_STEP;
        var2 = {};
        var2['from_step'] = var10;
        var2['to_step'] = var9;
        var2['location_stack'] = var8;
        var6 = _closure1_slot7;
        var11 = var6.bind(var1)(var7);
        var12 = var2;
        var6 = copyDataProperties(var12, var11);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackPremiumSubscriptionCancellationFlowStep'] = var2;
    return var1;
})();