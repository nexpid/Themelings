// app/modules/premium/native/PremiumAnalyticsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var10;
    var4 = function getBaseAnalyticsFields(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var4 = null;
            var6 = var4 == var3;
            var2 = undefined;
            var5 = undefined;
            if(var6) { _fun0001_ip = 23; continue _fun0001 }
 18:
            var5 = var3.id;
 23:
            var1['subscription_id'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 42; continue _fun0001 }
 37:
            var5 = var3.type;
 42:
            var1['subscription_type'] = var5;
            var6 = var4 != var3;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 107; continue _fun0001 }
 56:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var7 = var7.bind(var2)(var6);
            var6 = var7.getPremiumPlanItem;
            var7 = var6.bind(var7)(var3);
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 104; continue _fun0001 }
 99:
            var6 = var7.id;
 104:
            var5 = var6;
 107:
            var1['subscription_plan_id'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 127; continue _fun0001 }
 121:
            var5 = var3.paymentGatewayPlanId;
 127:
            var1['subscription_plan_gateway_plan_id'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 146; continue _fun0001 }
 141:
            var2 = var3.status;
 146:
            var1['subscription_status'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var6 = var5.SubscriptionTypes;
    var _closure1_slot3 = var6;
    var6 = var5.PurchaseTypeToAnalyticsPaymentType;
    var _closure1_slot4 = var6;
    var6 = var5.PurchaseTypes;
    var _closure1_slot5 = var6;
    var5 = var5.AnalyticEvents;
    var _closure1_slot6 = var5;
    var7 = {};
    var5 = 'sku_select';
    var7['SKU_SELECT'] = var5;
    var5 = 'plan_select';
    var7['PLAN_SELECT'] = var5;
    var5 = 'review';
    var7['REVIEW'] = var5;
    var5 = 'confirm';
    var7['CONFIRM'] = var5;
    var5 = 'yearly_upsell';
    var7['YEARLY_UPSELL'] = var5;
    var5 = 'premium_upsell';
    var7['PREMIUM_UPSELL'] = var5;
    var5 = 'external_payment';
    var7['EXTERNAL_PAYMENT'] = var5;
    var5 = 'reward_sku_select';
    var7['REWARD_SKU_SELECT'] = var5;
    var6 = {};
    var8 = 1;
    var6['WHAT_YOU_LOSE'] = var8;
    var5 = 'WHAT_YOU_LOSE';
    var6[var8] = var5;
    var8 = 2;
    var6['CONFIRM'] = var8;
    var5 = 'CONFIRM';
    var6[var8] = var5;
    var8 = 3;
    var6['PREVIEW'] = var8;
    var5 = 'PREVIEW';
    var6[var8] = var5;
    var8 = 4;
    var6['DOWNGRADE_TO_TIER_0'] = var8;
    var5 = 'DOWNGRADE_TO_TIER_0';
    var6[var8] = var5;
    var11 = 5;
    var6['MOBILE_SUBSCRIPTION_MANAGE'] = var11;
    var5 = 'MOBILE_SUBSCRIPTION_MANAGE';
    var6[var11] = var5;
    var5 = {};
    var12 = var6.WHAT_YOU_LOSE;
    var11 = "What You're Losing";
    var5[var12] = var11;
    var12 = var6.DOWNGRADE_TO_TIER_0;
    var11 = 'Downgrade To Tier 0';
    var5[var12] = var11;
    var12 = var6.CONFIRM;
    var11 = 'Confirm Cancellation';
    var5[var12] = var11;
    var12 = var6.PREVIEW;
    var11 = 'Preview Updated Subscription';
    var5[var12] = var11;
    var12 = var6.MOBILE_SUBSCRIPTION_MANAGE;
    var11 = 'Mobile Subscription Manage';
    var5[var12] = var11;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/premium/native/PremiumAnalyticsUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['PaymentFlowStep'] = var7;
    var7 = function getBasePurchaseFlowAnalyticsFields(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.analyticsLoadId;
            var5 = var1.isGift;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0002_ip = 23; continue _fun0002 }
 21:
            var5 = false;
 23:
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
            if(var4) { _fun0002_ip = 113; continue _fun0002 }
 108:
            var2 = var3.section;
 113:
            var1['location_section'] = var2;
            return var1;
        }
    };
    var3['getBasePurchaseFlowAnalyticsFields'] = var7;
    var7 = function getPaymentFlowCompletedAnalyticsFields(arg1, arg2) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        var3 = arg2;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var3['getPaymentFlowCompletedAnalyticsFields'] = var7;
    var7 = function getPaymentFlowStepAnalyticsFields(arg1, arg2) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        var3 = arg2;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var3['getPaymentFlowStepAnalyticsFields'] = var7;
    var7 = function getNewAnalyticsLoadId() {
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
    var3['getNewAnalyticsLoadId'] = var7;
    var3['CancellationFlowSteps'] = var6;
    var3['STEP_ANALYTICS_NAMES'] = var5;
    var3['getBaseAnalyticsFields'] = var4;
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