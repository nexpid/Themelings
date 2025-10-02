// app/records/SubscriptionRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function createSubscriptionItemFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.plan_id;
        var1['planId'] = var3;
        var2 = var2.quantity;
        var1['quantity'] = var2;
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.PaymentGateways;
    var _closure1_slot10 = var8;
    var8 = var7.SubscriptionStatusTypes;
    var _closure1_slot11 = var8;
    var8 = var7.SubscriptionStatusTypesSets;
    var _closure1_slot12 = var8;
    var7 = var7.SubscriptionTypes;
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.SubscriptionPauseReason;
    var _closure1_slot14 = var8;
    var7 = var7.SubscriptionPauseReasonSets;
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.PREMIUM_PLANS;
    var _closure1_slot16 = var8;
    var8 = var7.REVERSE_TRIAL_IDS;
    var _closure1_slot17 = var8;
    var8 = var7.SubscriptionPlanInfo;
    var _closure1_slot18 = var8;
    var7 = var7.SubscriptionPlans;
    var _closure1_slot19 = var7;
    var2 = function(arg1) {
        var5 = function SubscriptionRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var11 = undefined;
                var1 = var1.bind(var11)(var4, var3);
                var1 = _closure1_slot6;
                var12 = var1.bind(var11)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot20;
                var1 = var1.bind(var11)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var4, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var10 = var6.Reflect;
                var9 = var10.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var11)(var4);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var9.bind(var10)(var12, var6, var7);
case 8:
                var1 = var3.bind(var11)(var4, var1);
                var3 = var5.id;
                var1['id'] = var3;
                var3 = var5.type;
                var1['type'] = var3;
                var3 = var5.items;
                var1['items'] = var3;
                var3 = var5.createdAt;
                var1['createdAt'] = var3;
                var3 = var5.canceledAt;
                var1['canceledAt'] = var3;
                var3 = var5.currentPeriodStart;
                var1['currentPeriodStart'] = var3;
                var3 = var5.currentPeriodEnd;
                var1['currentPeriodEnd'] = var3;
                var3 = var5.status;
                var1['status'] = var3;
                var3 = var5.paymentSourceId;
                var1['paymentSourceId'] = var3;
                var3 = var5.paymentGateway;
                var1['paymentGateway'] = var3;
                var3 = var5.paymentGatewayPlanId;
                var1['paymentGatewayPlanId'] = var3;
                var3 = var5.paymentGatewaySubscriptionId;
                var1['paymentGatewaySubscriptionId'] = var3;
                var3 = var5.trialId;
                var1['trialId'] = var3;
                var3 = var5.trialEndsAt;
                var1['trialEndsAt'] = var3;
                var3 = var5.renewalMutations;
                var1['renewalMutations'] = var3;
                var3 = var5.currency;
                var1['currency'] = var3;
                var3 = var5.pauseEndsAt;
                var1['pauseEndsAt'] = var3;
                var3 = var5.pauseReason;
                var1['pauseReason'] = var3;
                var3 = var5.metadata;
                var1['metadata'] = var3;
                var3 = var5.latestInvoice;
                var1['latestInvoice'] = var3;
                var3 = var5.useStorekitResubscribe;
                var1['useStorekitResubscribe'] = var3;
                var3 = var5.price;
                var1['price'] = var3;
                var3 = var5.userId;
                var1['userId'] = var3;
                var3 = var5.streakStartedAt;
                var1['streakStartedAt'] = var3;
                var3 = var5.eligiblePaymentGateways;
                var1['eligiblePaymentGateways'] = var3;
                var3 = var5.priceChange;
                var1['priceChange'] = var3;
                var3 = var1.renewalMutations;
                var4 = var5.items;
                var12 = 0;
                var4 = var4[var12];
                var10 = var4.planId;
                var _closure3_slot0 = var10;
                var6 = null;
                var _closure3_slot1 = var6;
                var7 = var5.type;
                var4 = _closure1_slot13;
                var4 = var4.PREMIUM;
                if(!(var7 !== var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var9 = var6 != var3;
                if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = var3.items;
                var4 = var4.length;
                var9 = var4 > var12;
case 11:
                var7 = var10;
                var4 = null;
                if(!var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var9 = var3.items;
                var9 = var9[var12];
                var9 = var9.planId;
                _closure3_slot1 = var9;
                var7 = var10;
                var4 = var9;
                _fun0002_ip = 13; continue _fun0002;
case 9:
                var10 = _closure1_slot18;
                var9 = var5.items;
                var9 = var9[var12];
                var9 = var9.planId;
                var9 = var10[var9];
                var13 = var9.interval;
                var12 = var9.intervalCount;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var14 = 11;
                var9 = var9[var14];
                var15 = var10.bind(var11)(var9);
                var10 = var15.getBasePlanIdForSubscriptionItems;
                var9 = var5.items;
                var9 = var10.bind(var15)(var9, var13, var12);
                _closure3_slot0 = var9;
                var10 = var6 != var3;
                var7 = var9;
                var4 = null;
                if(!var10) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var14];
                var11 = var10.bind(var11)(var8);
                var10 = var11.getBasePlanIdForSubscriptionItems;
                var8 = var3.items;
                var8 = var10.bind(var11)(var8, var13, var12);
                _closure3_slot1 = var8;
                var7 = var9;
                var4 = var8;
case 13:
                var1['planId'] = var7;
                var8 = var5.items;
                var7 = var8.filter;
                var5 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.planId;
                    var1 = _closure3_slot0;
                    var1 = var2 !== var1;
                    return var1;
                };
                var5 = var7.bind(var8)(var5);
                var1['additionalPlans'] = var5;
                var5 = var6 != var3;
                if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var5 = var6 != var4;
case 16:
                if(!var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var3['planId'] = var4;
                var5 = var3.items;
                var4 = var5.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.planId;
                    var1 = _closure3_slot1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var3['additionalPlans'] = var2;
case 18:
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
        var2 = 'getCurrentSubscriptionPlanIdForGroup';
        var6['key'] = var2;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = this;
                var3 = var2.items;
                var2 = var3.find;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.planId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var1 = var2.planId;
case 20:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(25);
        var2[0] = var6;
        var6 = {};
        var7 = 'isPremium';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.type;
            var1 = _closure1_slot13;
            var1 = var1.PREMIUM;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'planIdForCurrencies';
        var6['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var1 = var2.isPremium;
                if(var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var1 = var2.planId;
                _fun0004_ip = 24; continue _fun0004;
case 22:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 12;
                var3 = var5[var3];
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var2.planIdFromItems;
                var3 = 'Premium subscription has no planId for currencies';
                var3 = var5.bind(var6)(var4, var3);
                var1 = var2.planIdFromItems;
case 24:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'planIdFromItems';
        var6['key'] = var7;
        var7 = function get() {
            var3 = this;
            var2 = var3.getCurrentSubscriptionPlanIdForGroup;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.values;
            var1 = _closure1_slot19;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['get'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'premiumPlanIdFromItems';
        var6['key'] = var7;
        var7 = function get() {
            var3 = this;
            var2 = var3.getCurrentSubscriptionPlanIdForGroup;
            var7 = _closure1_slot16;
            var1 = new Array(0);
            var6 = 0;
            var8 = var1;
            var4 = arraySpread(var8, var7, var6);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['get'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'isPurchasedViaApple';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.paymentGateway;
            var1 = _closure1_slot10;
            var1 = var1.APPLE;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'isPurchasedViaGoogle';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.paymentGateway;
            var1 = _closure1_slot10;
            var1 = var1.GOOGLE;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'isPurchasedExternally';
        var6['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var1 = var2.isPurchasedViaApple;
                if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 23:
                var1 = var2.isPurchasedViaGoogle;
case 25:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'isOnPlatformMatchingExternalPaymentGateway';
        var6['key'] = var7;
        var7 = function get() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var1 = var2.isPurchasedViaApple;
                if(!var1) { _fun0006_ip = 26; continue _fun0006 }
case 23:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.isIOS;
                var1 = var3.bind(var4)();
case 26:
                if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var2 = var2.isPurchasedViaGoogle;
                if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.isAndroid;
                var2 = var3.bind(var4)();
case 29:
                var1 = var2;
case 27:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[8] = var6;
        var6 = {};
        var7 = 'hasExternalPlanChange';
        var6['key'] = var7;
        var7 = function get() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = var2.isPurchasedExternally;
                if(!var1) { _fun0007_ip = 31; continue _fun0007 }
case 23:
                var4 = var2.renewalMutations;
                var3 = null;
                var1 = var3 != var4;
case 31:
                if(!var1) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var3 = var2.paymentGatewayPlanId;
                var2 = var2.renewalMutations;
                var2 = var2.paymentGatewayPlanId;
                var1 = var3 !== var2;
case 32:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[9] = var6;
        var6 = {};
        var7 = 'hasPremiumNitroMonthly';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var3 = var1.items;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.planId;
                var1 = _closure1_slot19;
                var1 = var1.PREMIUM_MONTH_TIER_2;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6['get'] = var7;
        var2[10] = var6;
        var6 = {};
        var7 = 'isBoostOnly';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var3 = var1.items;
            var2 = var3.every;
            var1 = function(arg1) {
                var1 = _closure1_slot19;
                var2 = var1.PREMIUM_MONTH_GUILD;
                var3 = new Array(2);
                var3[0] = var2;
                var1 = var1.PREMIUM_YEAR_GUILD;
                var3[1] = var1;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['get'] = var7;
        var2[11] = var6;
        var6 = {};
        var7 = 'isPausedOrPausePending';
        var6['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            var3 = var1.ALL_PAUSE;
            var2 = var3.has;
            var1 = this;
            var1 = var1.status;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['get'] = var7;
        var2[12] = var6;
        var6 = {};
        var7 = 'isPaused';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.status;
            var1 = _closure1_slot11;
            var1 = var1.PAUSED;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[13] = var6;
        var6 = {};
        var7 = 'isPausedForFractionalPremium';
        var6['key'] = var7;
        var7 = function get() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = this;
                var4 = var3.status;
                var1 = _closure1_slot11;
                var1 = var1.PAUSED;
                var1 = var4 === var1;
                if(!var1) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var3 = var3.pauseReason;
                var2 = _closure1_slot14;
                var2 = var2.FRACTIONAL_PREMIUM;
                var1 = var3 === var2;
case 34:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[14] = var6;
        var6 = {};
        var7 = 'isPausedAllowsUpdatesButNotResume';
        var6['key'] = var7;
        var7 = function get() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var4 = var2.status;
                var1 = _closure1_slot11;
                var1 = var1.PAUSED;
                var1 = var4 === var1;
                if(!var1) { _fun0009_ip = 7; continue _fun0009 }
case 35:
                var3 = _closure1_slot15;
                var4 = var3.CAN_MAKE_SUBSCRIPTION_UPDATES;
                var3 = var4.has;
                var2 = var2.pauseReason;
                var1 = var3.bind(var4)(var2);
case 7:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[15] = var6;
        var6 = {};
        var7 = 'isPausedAllowsResumeButNotUpdates';
        var6['key'] = var7;
        var7 = function get() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = this;
                var2 = var3.status;
                var1 = _closure1_slot11;
                var1 = var1.PAUSED;
                var1 = var2 === var1;
                if(!var1) { _fun0010_ip = 36; continue _fun0010 }
case 35:
                var5 = var3.pauseReason;
                var2 = null;
                var2 = var2 === var5;
                if(var2) { _fun0010_ip = 5; continue _fun0010 }
case 37:
                var4 = _closure1_slot15;
                var5 = var4.CAN_MAKE_SUBSCRIPTION_UPDATES;
                var4 = var5.has;
                var3 = var3.pauseReason;
                var3 = var4.bind(var5)(var3);
                var2 = !var3;
case 5:
                var1 = var2;
case 36:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[16] = var6;
        var6 = {};
        var7 = 'isEnded';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.status;
            var1 = _closure1_slot11;
            var1 = var1.ENDED;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[17] = var6;
        var6 = {};
        var7 = 'endedAt';
        var6['key'] = var7;
        var7 = function get() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = this;
                var5 = var3.status;
                var1 = _closure1_slot11;
                var2 = var1.ENDED;
                var4 = null;
                var1 = null;
                if(!(var5 === var2)) { _fun0011_ip = 8; continue _fun0011 }
case 38:
                var5 = var3.metadata;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0011_ip = 28; continue _fun0011 }
case 39:
                var2 = var5.ended_at;
case 28:
                if(!(var4 == var2)) { _fun0011_ip = 40; continue _fun0011 }
case 7:
                var2 = var3.currentPeriodEnd;
                _fun0011_ip = 41; continue _fun0011;
case 40:
                var4 = global;
                var5 = var4.Date;
                var3 = var3.metadata;
                var7 = var3.ended_at;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var2 = var3 instanceof Object ? var3 : var4;
case 41:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[18] = var6;
        var6 = {};
        var7 = 'isActive';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var2 = var1.status;
            var1 = _closure1_slot11;
            var1 = var1.ACTIVE;
            var1 = var2 === var1;
            return var1;
        };
        var6['get'] = var7;
        var2[19] = var6;
        var6 = {};
        var7 = 'hasActiveTrial';
        var6['key'] = var7;
        var7 = function get() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var1 = var2.trialId;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0012_ip = 35; continue _fun0012 }
case 25:
                var3 = var2.trialEndsAt;
                var1 = var4 != var3;
case 35:
                if(!var1) { _fun0012_ip = 24; continue _fun0012 }
case 42:
                var3 = global;
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var5 = var4;
                var3 = new var5[var3](var4);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.trialEndsAt;
                var1 = var3 < var2;
case 24:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[20] = var6;
        var6 = {};
        var7 = 'inReverseTrial';
        var6['key'] = var7;
        var7 = function get() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var1 = var2.trialId;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0013_ip = 43; continue _fun0013 }
case 25:
                var6 = _closure1_slot17;
                var5 = var6.includes;
                var4 = var2.trialId;
                var1 = var5.bind(var6)(var4);
case 43:
                if(!var1) { _fun0013_ip = 7; continue _fun0013 }
case 39:
                var2 = var2.paymentSourceId;
                var1 = var3 == var2;
case 7:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[21] = var6;
        var6 = {};
        var7 = 'premiumSince';
        var6['key'] = var7;
        var7 = function get() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = this;
                var1 = var2.streakStartedAt;
                var3 = null;
                if(!(var3 == var1)) { _fun0014_ip = 44; continue _fun0014 }
case 45:
                var1 = var2.createdAt;
case 44:
                return var1;
            }
        };
        var6['get'] = var7;
        var2[22] = var6;
        var6 = {};
        var7 = 'hasAnyPremiumNitro';
        var6['key'] = var7;
        var7 = function get() {
            var1 = this;
            var3 = var1.items;
            var2 = var3.some;
            var1 = function(arg1) {
                var3 = _closure1_slot16;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['get'] = var7;
        var2[23] = var6;
        var6 = {};
        var7 = 'hasPremiumAtLeast';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = var3.isPremium;
                var4 = !var1;
                var1 = !var4;
                if(var4) { _fun0015_ip = 32; continue _fun0015 }
case 33:
                var4 = var3.items;
                var3 = var4.some;
                var2 = function(arg1) {
                    var3 = _closure1_slot18;
                    var1 = arg1;
                    var1 = var1.planId;
                    var1 = var3[var1];
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isPremiumAtLeast;
                    var2 = var1.premiumType;
                    var1 = _closure3_slot0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 32:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[24] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.type;
                var1['type'] = var4;
                var7 = global;
                var6 = var7.Date;
                var13 = var2.created_at;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var14 = var5;
                var4 = new var14[var6](var13, var12);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['createdAt'] = var4;
                var5 = var2.canceled_at;
                var4 = null;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0016_ip = 46; continue _fun0016 }
case 47:
                var9 = var7.Date;
                var13 = var2.canceled_at;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var14 = var8;
                var6 = new var14[var9](var13, var12);
                var5 = var6 instanceof Object ? var6 : var8;
case 46:
                var1['canceledAt'] = var5;
                var8 = var7.Date;
                var13 = var2.current_period_start;
                var6 = var8.prototype;
                var6 = Object.create(var6, {constructor: {value: var8}});
                var14 = var6;
                var5 = new var14[var8](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['currentPeriodStart'] = var5;
                var8 = var7.Date;
                var13 = var2.current_period_end;
                var6 = var8.prototype;
                var6 = Object.create(var6, {constructor: {value: var8}});
                var14 = var6;
                var5 = new var14[var8](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['currentPeriodEnd'] = var5;
                var5 = var2.status;
                var1['status'] = var5;
                var5 = var2.payment_source_id;
                var1['paymentSourceId'] = var5;
                var5 = var2.payment_gateway;
                var1['paymentGateway'] = var5;
                var5 = var2.payment_gateway_plan_id;
                var1['paymentGatewayPlanId'] = var5;
                var5 = var2.payment_gateway_subscription_id;
                var1['paymentGatewaySubscriptionId'] = var5;
                var5 = var2.trial_id;
                var1['trialId'] = var5;
                var5 = var2.trial_ends_at;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0016_ip = 48; continue _fun0016 }
case 49:
                var9 = var7.Date;
                var13 = var2.trial_ends_at;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var14 = var8;
                var6 = new var14[var9](var13, var12);
                var5 = var6 instanceof Object ? var6 : var8;
case 48:
                var1['trialEndsAt'] = var5;
                var9 = var2.items;
                var8 = var9.map;
                var6 = _closure1_slot21;
                var6 = var8.bind(var9)(var6);
                var1['items'] = var6;
                var6 = var2.renewal_mutations;
                var8 = var4 != var6;
                var6 = null;
                if(!var8) { _fun0016_ip = 50; continue _fun0016 }
case 51:
                var8 = {};
                var9 = var2.renewal_mutations;
                var11 = var9.items;
                var10 = var11.map;
                var9 = _closure1_slot21;
                var9 = var10.bind(var11)(var9);
                var8['items'] = var9;
                var9 = var2.renewal_mutations;
                var9 = var9.payment_gateway_plan_id;
                var8['paymentGatewayPlanId'] = var9;
                var6 = var8;
case 50:
                var1['renewalMutations'] = var6;
                var6 = var2.streak_started_at;
                var8 = var4 != var6;
                var6 = null;
                if(!var8) { _fun0016_ip = 52; continue _fun0016 }
case 53:
                var10 = var7.Date;
                var13 = var2.streak_started_at;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var14 = var9;
                var8 = new var14[var10](var13, var12);
                var6 = var8 instanceof Object ? var8 : var9;
case 52:
                var1['streakStartedAt'] = var6;
                var6 = var2.currency;
                var1['currency'] = var6;
                var6 = var2.pause_ends_at;
                var8 = var4 != var6;
                var6 = null;
                if(!var8) { _fun0016_ip = 54; continue _fun0016 }
case 55:
                var9 = var7.Date;
                var13 = var2.pause_ends_at;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var14 = var8;
                var7 = new var14[var9](var13, var12);
                var6 = var7 instanceof Object ? var7 : var8;
case 54:
                var1['pauseEndsAt'] = var6;
                var6 = var2.pause_reason;
                var1['pauseReason'] = var6;
                var6 = var2.metadata;
                var1['metadata'] = var6;
                var6 = var2.use_storekit_resubscribe;
                var1['useStorekitResubscribe'] = var6;
                var6 = var2.price;
                var1['price'] = var6;
                var6 = var2.user_id;
                var1['userId'] = var6;
                var6 = var2.latest_invoice;
                if(!(var4 == var6)) { _fun0016_ip = 56; continue _fun0016 }
case 57:
                var6 = {};
                _fun0016_ip = 58; continue _fun0016;
case 56:
                var7 = {};
                var10 = _closure1_slot9;
                var9 = var10.createInvoiceFromServer;
                var8 = var2.latest_invoice;
                var8 = var9.bind(var10)(var8);
                var7['latestInvoice'] = var8;
                var6 = var7;
case 58:
                var13 = var1;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var6 = var2.eligible_payment_gateways;
                var8 = var4 != var6;
                var7 = null;
                if(!var8) { _fun0016_ip = 59; continue _fun0016 }
case 60:
                var7 = var6;
case 59:
                var6 = 'eligiblePaymentGateways';
                var1[var6] = var7;
                var6 = var2.price_change;
                var6 = var4 != var6;
                var4 = null;
                if(!var6) { _fun0016_ip = 61; continue _fun0016 }
case 62:
                var6 = _closure1_slot8;
                var5 = var6.createFromServer;
                var2 = var2.price_change;
                var4 = var5.bind(var6)(var2);
case 61:
                var2 = 'priceChange';
                var1[var2] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var14 = var2;
                var13 = var1;
                var1 = new var14[var3](var13, var12);
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
    var2 = var2.bind(var1)(var4);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/SubscriptionRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['SubscriptionRecord'] = var2;
    return var1;
})();