// app/records/GiftCodeRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var2 = global;
    var10 = var2.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var8 = 6;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot10 = var8;
    var9 = var2.Object;
    var8 = var9.freeze;
    var2 = {'PAYMENT_SOURCE_REQUIRED': 1, 'EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED': 2, 'NOT_SELF_REDEEMABLE': 4};
    var2 = var8.bind(var9)(var2);
    var _closure1_slot11 = var2;
    var4 = function(arg1) {
        var5 = function GiftCodeRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.userId;
                var1['userId'] = var3;
                var3 = var2.code;
                var1['code'] = var3;
                var3 = var2.skuId;
                var1['skuId'] = var3;
                var3 = var2.applicationId;
                var1['applicationId'] = var3;
                var3 = var2.uses;
                var1['uses'] = var3;
                var3 = var2.maxUses;
                var1['maxUses'] = var3;
                var3 = var2.expiresAt;
                var1['expiresAt'] = var3;
                var3 = var2.redeemed;
                var1['redeemed'] = var3;
                var3 = var2.storeListingId;
                var1['storeListingId'] = var3;
                var3 = var2.subscriptionPlanId;
                var1['subscriptionPlanId'] = var3;
                var3 = var2.subscriptionPlan;
                var1['subscriptionPlan'] = var3;
                var3 = var2.revoked;
                var1['revoked'] = var3;
                var3 = var2.entitlementBranches;
                var1['entitlementBranches'] = var3;
                var3 = var2.flags;
                var1['flags'] = var3;
                var3 = var2.subscriptionTrial;
                var1['subscriptionTrial'] = var3;
                var3 = var2.promotion;
                var1['promotion'] = var3;
                var2 = var2.giftStyle;
                var1['giftStyle'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var6 = {};
        var2 = 'isExpired';
        var6['key'] = var2;
        var2 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var4 = var1.expiresAt;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var3 = var2.bind(var3)();
                var2 = var3.isAfter;
                var1 = var2.bind(var3)(var4);
case 9:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(10);
        var2[0] = var6;
        var6 = {};
        var7 = 'hasMultipleCopies';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.maxUses;
            var1 = 1;
            var1 = var2 > var1;
            return var1;
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'isClaimed';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.uses;
            var1 = var1.maxUses;
            var1 = var2 >= var1;
            return var1;
        };
        var6['get'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'remainingUses';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.maxUses;
            var1 = var1.uses;
            var1 = var2 - var1;
            return var1;
        };
        var6['get'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'isSubscription';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.subscriptionPlanId;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6['get'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'premiumSubscriptionType';
        var6['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var1 = var2.isSubscription;
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = _closure1_slot10;
                var2 = var2.skuId;
                var1 = var3[var2];
case 11:
                if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = null;
case 13:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'isSelfRedeemable';
        var6['key'] = var7;
        var7 = function get() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.hasFlag;
            var2 = this;
            var2 = var2.flags;
            var1 = _closure1_slot11;
            var1 = var1.NOT_SELF_REDEEMABLE;
            var1 = var3.bind(var4)(var2, var1);
            var1 = !var1;
            return var1;
        };
        var6['get'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'isExistingPremiumSubscriptionDisallowed';
        var6['key'] = var7;
        var7 = function get() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.hasFlag;
            var2 = this;
            var2 = var2.flags;
            var1 = _closure1_slot11;
            var1 = var1.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6['get'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'analyticsData';
        var6['key'] = var7;
        var7 = function get() {
            var2 = this;
            var1 = {};
            var3 = var2.code;
            var1['gift_code'] = var3;
            var2 = var2.maxUses;
            var1['gift_code_max_uses'] = var2;
            return var1;
        };
        var6['get'] = var7;
        var2[8] = var6;
        var6 = {};
        var7 = 'toString';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.code;
            return var1;
        };
        var6['value'] = var7;
        var2[9] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var5 = var4.user;
                var2 = null;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var6 = var4.user;
                var5 = var6.id;
case 15:
                var1['userId'] = var5;
                var5 = var4.code;
                var1['code'] = var5;
                var5 = var4.sku_id;
                var1['skuId'] = var5;
                var5 = var4.application_id;
                var1['applicationId'] = var5;
                var5 = var4.uses;
                var1['uses'] = var5;
                var5 = var4.max_uses;
                var1['maxUses'] = var5;
                var5 = var4.store_listing;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var6 = var4.store_listing;
                var5 = var6.id;
case 17:
                var1['storeListingId'] = var5;
                var5 = var4.expires_at;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 9;
                var6 = var8[var6];
                var8 = undefined;
                var7 = var7.bind(var8)(var6);
                var6 = var4.expires_at;
                var5 = var7.bind(var8)(var6);
case 19:
                var1['expiresAt'] = var5;
                var5 = var4.redeemed;
                var1['redeemed'] = var5;
                var5 = var4.subscription_plan;
                if(!(var2 == var5)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var5 = var4.subscription_plan_id;
                _fun0005_ip = 23; continue _fun0005;
case 21:
                var6 = var4.subscription_plan;
                var5 = var6.id;
case 23:
                var1['subscriptionPlanId'] = var5;
                var5 = var4.subscription_plan;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var8 = _closure1_slot9;
                var7 = var8.createFromServer;
                var6 = var4.subscription_plan;
                var5 = var7.bind(var8)(var6);
case 24:
                var1['subscriptionPlan'] = var5;
                var5 = false;
                var1['revoked'] = var5;
                var5 = var4.entitlement_branches;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var5 = var4.entitlement_branches;
case 26:
                var1['entitlementBranches'] = var5;
                var5 = var4.flags;
                var6 = var2 != var5;
                var5 = 0;
                if(!var6) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var5 = var4.flags;
case 28:
                var1['flags'] = var5;
                var5 = var4.gift_style;
                var1['giftStyle'] = var5;
                var5 = var4.subscription_trial;
                var6 = var2 != var5;
                var5 = null;
                if(!var6) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var6 = {};
                var7 = var4.subscription_trial;
                var7 = var7.id;
                var6['id'] = var7;
                var7 = var4.subscription_trial;
                var7 = var7.interval;
                var6['interval'] = var7;
                var7 = var4.subscription_trial;
                var7 = var7.interval_count;
                var6['intervalCount'] = var7;
                var7 = var4.subscription_trial;
                var7 = var7.sku_id;
                var6['skuId'] = var7;
                var5 = var6;
case 30:
                var1['subscriptionTrial'] = var5;
                var5 = var4.promotion;
                var5 = var2 != var5;
                var2 = null;
                if(!var5) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var6 = _closure1_slot8;
                var5 = var6.createFromServer;
                var4 = var4.promotion;
                var2 = var5.bind(var6)(var4);
case 32:
                var1['promotion'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'records/GiftCodeRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GiftCodeFlags'] = var2;
    return var1;
})();