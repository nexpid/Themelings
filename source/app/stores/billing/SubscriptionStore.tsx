// app/stores/billing/SubscriptionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function getUpdatedActiveSubscriptions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.activeSubscriptions;
            var2 = var2.record;
            var _closure2_slot0 = var2;
            var4 = var3.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var3)(var1);
            var1 = -1;
            if(!(var1 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = new Array(0);
            var8 = 0;
            var10 = var1;
            var9 = var3;
            var5 = arraySpread(var10, var9, var8);
            var7 = _closure1_slot25;
            var6 = undefined;
            var6 = var7.bind(var6)(var2);
            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var2.status;
            var5 = _closure1_slot8;
            var5 = var5.ENDED;
            if(!(var6 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 8:
            var6 = var1.splice;
            var5 = 1;
            var5 = var6.bind(var1)(var4, var5);
            _fun0002_ip = 11; continue _fun0002;
case 10:
            var1[var4] = var2;
case 11:
            return var1;
case 6:
            var1 = new Array(1);
            var1[0] = var2;
            var8 = 1;
            var10 = var1;
            var9 = var3;
            var2 = arraySpread(var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var5 = function reset() {
        var1 = null;
        _closure1_slot11 = var1;
        _closure1_slot12 = var1;
        _closure1_slot13 = var1;
        _closure1_slot14 = var1;
        _closure1_slot15 = var1;
        var3 = false;
        _closure1_slot16 = var3;
        _closure1_slot17 = var1;
        _closure1_slot18 = var3;
        _closure1_slot19 = var3;
        _closure1_slot21 = var3;
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var1 = function isPaid(arg1) {
        var1 = arg1;
        var2 = var1.status;
        var1 = _closure1_slot8;
        var1 = var1.UNPAID;
        var1 = var2 !== var1;
        return var1;
    };
    var _closure1_slot25 = var1;
    var2 = function getSubscriptionOfType(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var13 = arg1;
            var12 = arg2;
            var1 = arguments[2];
            var11 = undefined;
            if(!(var1 === var11)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = true;
case 12:
            if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var9 = _closure1_slot11;
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var9 = _closure1_slot12;
case 16:
            var1 = null;
            if(!(var1 != var9)) { _fun0003_ip = 10; continue _fun0003 }
case 17:
            var7 = var9;
            for(var4 in var7)
case 18:
            {
case 19:
                var2 = var4;
                var2 = var9[var2];
                var14 = var2.userId;
                var15 = _closure1_slot7;
                var3 = var15.getId;
                var3 = var3.bind(var15)();
                if(!(var14 === var3)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var3 = var2.type;
                if(var3 !== var13) { _fun0003_ip = 18; continue _fun0003 }
case 22:
                if(!(var1 != var12)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var3 = var12.bind(var11)(var2);
                if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 23:
                return var2;
case 20:
                return var1;
            }
case 25:
            return var1;
case 10:
            return var1;
        }
    };
    var _closure1_slot26 = var2;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.isNoneSubscription;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.SubscriptionRecord;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.SubscriptionStatusTypes;
    var _closure1_slot8 = var9;
    var4 = var4.SubscriptionTypes;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.REVERSE_TRIAL_IDS;
    var _closure1_slot10 = var4;
    var4 = null;
    var _closure1_slot11 = var4;
    var _closure1_slot12 = var4;
    var _closure1_slot13 = var4;
    var _closure1_slot14 = var4;
    var _closure1_slot15 = var4;
    var9 = false;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var4;
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var9;
    var _closure1_slot20 = var4;
    var _closure1_slot21 = var9;
    var _closure1_slot22 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function SubscriptionStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 28; continue _fun0004;
case 26:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 28:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'hasFetchedSubscriptions';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot11;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasFetchedMostRecentPremiumTypeSubscription';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasFetchedPreviousPremiumTypeSubscription';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getPremiumSubscription';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arguments[0];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var5 = true;
case 29:
                var3 = _closure1_slot26;
                var1 = _closure1_slot9;
                var2 = var1.PREMIUM;
                var1 = function(arg1) {
                    var3 = _closure1_slot5;
                    var1 = arg1;
                    var2 = var1.planId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1, var5);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPremiumTypeSubscription';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arguments[0];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var4 = true;
case 29:
                var2 = _closure1_slot26;
                var1 = _closure1_slot9;
                var1 = var1.PREMIUM;
                var1 = var2.bind(var3)(var1, var3, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'inReverseTrial';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = _closure1_slot26;
                var1 = _closure1_slot9;
                var4 = var1.PREMIUM;
                var2 = undefined;
                var1 = true;
                var4 = var5.bind(var2)(var4, var2, var1);
                var5 = null;
                var1 = var5 != var4;
                if(!var1) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                var2 = var4.trialId;
                var2 = var5 != var2;
                if(!var2) { _fun0007_ip = 33; continue _fun0007 }
case 18:
                var7 = _closure1_slot10;
                var6 = var7.includes;
                var3 = var4.trialId;
                var3 = var6.bind(var7)(var3);
                var6 = !var3;
                var3 = !var6;
                if(var6) { _fun0007_ip = 21; continue _fun0007 }
case 34:
                var4 = var4.paymentSourceId;
                var3 = var5 == var4;
case 21:
                var2 = var3;
case 33:
                var1 = var2;
case 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSubscriptions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                var1 = true;
case 29:
                if(var1) { _fun0008_ip = 15; continue _fun0008 }
case 12:
                var1 = _closure1_slot11;
                _fun0008_ip = 35; continue _fun0008;
case 15:
                var1 = _closure1_slot12;
case 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSubscriptionById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = _closure1_slot11;
                var3 = null;
                var4 = var3 == var5;
                var2 = undefined;
                if(var4) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                var4 = arg1;
                var2 = var5[var4];
case 36:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0009_ip = 32; continue _fun0009 }
case 38:
                var1 = var2;
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getActiveGuildSubscriptions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getActiveApplicationSubscriptions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getSubscriptionForPlanIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arguments[1];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0010_ip = 39; continue _fun0010 }
case 29:
                var2 = true;
case 39:
                var _closure3_slot0 = var1;
                var4 = global;
                var6 = var4.Set;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var7 = arg1;
                var8 = var5;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var5;
                _closure3_slot0 = var1;
                if(var2) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                var6 = _closure1_slot11;
                _fun0010_ip = 42; continue _fun0010;
case 40:
                var6 = _closure1_slot12;
case 42:
                var2 = null;
                var5 = var2 == var6;
                var1 = null;
                if(var5) { _fun0010_ip = 43; continue _fun0010 }
case 34:
                var5 = var4.Object;
                var4 = var5.values;
                var5 = var4.bind(var5)(var6);
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.items;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.planId;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0010_ip = 44; continue _fun0010 }
case 11:
                var2 = var3;
case 44:
                var1 = var2;
case 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getMostRecentPremiumTypeSubscription';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getPreviousPremiumTypeSubscription';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getIsSubscriptionEligibleForReward';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getIsFetchingSubscriptionRewardEligibility';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getIsFetchingMostRecentSubscription';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getLastLazyPerkSync';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SubscriptionStore';
    var9['displayName'] = var4;
    var4 = 11;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleSubscriptionsFetch(arg1) {
        var1 = arg1;
        var9 = var1.subscriptions;
        var2 = var1.lastLazyPerkSync;
        var6 = {};
        var _closure2_slot0 = var6;
        var5 = {};
        var _closure2_slot1 = var5;
        var4 = new Array(0);
        var _closure2_slot2 = var4;
        var3 = new Array(0);
        var _closure2_slot3 = var3;
        var10 = _closure1_slot7;
        var8 = var10.getId;
        var8 = var8.bind(var10)();
        var _closure2_slot4 = var8;
        var8 = var9.forEach;
        var7 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var3 = var5.user_id;
                var2 = _closure2_slot4;
                if(!(var3 === var2)) { _fun0011_ip = 45; continue _fun0011 }
case 15:
                var3 = _closure1_slot6;
                var2 = var3.createFromServer;
                var3 = var2.bind(var3)(var5);
                var5 = _closure2_slot0;
                var2 = var3.id;
                var5[var2] = var3;
                var5 = _closure1_slot25;
                var2 = undefined;
                var2 = var5.bind(var2)(var3);
                if(!var2) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                var5 = _closure2_slot1;
                var2 = var3.id;
                var5[var2] = var3;
                var5 = var3.type;
                var2 = _closure1_slot9;
                var2 = var2.GUILD;
                var2 = var5 === var2;
                if(!var2) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                var6 = var3.status;
                var5 = _closure1_slot8;
                var5 = var5.ENDED;
                var2 = var6 !== var5;
case 47:
                if(!var2) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                var5 = _closure2_slot2;
                var2 = var5.push;
                var2 = var2.bind(var5)(var3);
case 49:
                var5 = var3.type;
                var2 = _closure1_slot9;
                var2 = var2.APPLICATION;
                var2 = var5 === var2;
                if(!var2) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                var5 = var3.status;
                var4 = _closure1_slot8;
                var4 = var4.ENDED;
                var2 = var5 !== var4;
case 51:
                if(!var2) { _fun0011_ip = 45; continue _fun0011 }
case 53:
                var2 = _closure2_slot3;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
case 45:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var8.bind(var9)(var7);
        _closure1_slot11 = var6;
        _closure1_slot12 = var5;
        _closure1_slot14 = var4;
        _closure1_slot15 = var3;
        _closure1_slot22 = var2;
        var1 = undefined;
        return var1;
    };
    var4['BILLING_SUBSCRIPTION_FETCH_SUCCESS'] = var11;
    var11 = function handleSubscriptionUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = var1.subscription;
            var3 = var4.user_id;
            var5 = _closure1_slot7;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            if(!(var3 === var1)) { _fun0012_ip = 54; continue _fun0012 }
case 17:
            var3 = _closure1_slot6;
            var1 = var3.createFromServer;
            var5 = var1.bind(var3)(var4);
            var1 = {};
            var8 = _closure1_slot11;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            var3 = var5.id;
            var1[var3] = var5;
            _closure1_slot11 = var1;
            var1 = _closure1_slot25;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0012_ip = 6; continue _fun0012 }
case 31:
            var1 = {};
            var8 = _closure1_slot12;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            var3 = var5.id;
            var1[var3] = var5;
            _closure1_slot12 = var1;
case 6:
            var1 = _closure1_slot14;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0012_ip = 55; continue _fun0012 }
case 56:
            var7 = var5.type;
            var6 = _closure1_slot9;
            var6 = var6.GUILD;
            var1 = var7 === var6;
case 55:
            if(!var1) { _fun0012_ip = 53; continue _fun0012 }
case 57:
            var6 = _closure1_slot24;
            var1 = {};
            var7 = _closure1_slot14;
            var1['activeSubscriptions'] = var7;
            var1['record'] = var5;
            var1 = var6.bind(var4)(var1);
            _closure1_slot14 = var1;
case 53:
            var1 = _closure1_slot15;
            var1 = var3 != var1;
            if(!var1) { _fun0012_ip = 58; continue _fun0012 }
case 59:
            var6 = var5.type;
            var3 = _closure1_slot9;
            var3 = var3.APPLICATION;
            var1 = var6 === var3;
case 58:
            if(!var1) { _fun0012_ip = 54; continue _fun0012 }
case 60:
            var3 = _closure1_slot24;
            var1 = {};
            var6 = _closure1_slot15;
            var1['activeSubscriptions'] = var6;
            var1['record'] = var5;
            var1 = var3.bind(var4)(var1);
            _closure1_slot14 = var1;
case 54:
            var1 = undefined;
            return var1;
        }
    };
    var4['BILLING_SUBSCRIPTION_UPDATE_SUCCESS'] = var11;
    var11 = function handleMostRecentSubscriptionFetchStart() {
        var1 = true;
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var4['BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START'] = var11;
    var11 = function handleMostRecentSubscriptionFetch(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = var1.subscription;
            var1 = true;
            _closure1_slot16 = var1;
            var1 = false;
            _closure1_slot21 = var1;
            var3 = null;
            if(!(var3 != var5)) { _fun0013_ip = 61; continue _fun0013 }
case 62:
            var4 = var5.user_id;
            var6 = _closure1_slot7;
            var3 = var6.getId;
            var3 = var3.bind(var6)();
            if(!(var4 === var3)) { _fun0013_ip = 63; continue _fun0013 }
case 64:
            var4 = _closure1_slot6;
            var3 = var4.createFromServer;
            var3 = var3.bind(var4)(var5);
            _closure1_slot13 = var3;
case 61:
            var3 = undefined;
            return var3;
case 63:
            _closure1_slot16 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS'] = var11;
    var11 = function handleMostRecentSubscriptionFetchFail() {
        var1 = false;
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var4['BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL'] = var11;
    var11 = function handlePreviousSubscriptionFetch(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var4 = var1.subscription;
            var1 = true;
            _closure1_slot18 = var1;
            var1 = null;
            if(!(var1 != var4)) { _fun0014_ip = 65; continue _fun0014 }
case 66:
            var3 = var4.user_id;
            var5 = _closure1_slot7;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            if(!(var3 === var1)) { _fun0014_ip = 46; continue _fun0014 }
case 67:
            var3 = _closure1_slot6;
            var1 = var3.createFromServer;
            var1 = var1.bind(var3)(var4);
            _closure1_slot17 = var1;
case 65:
            var1 = undefined;
            return var1;
case 46:
            var1 = false;
            _closure1_slot18 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS'] = var11;
    var4['BILLING_SUBSCRIPTION_RESET'] = var5;
    var11 = function handleSubscriptionRewardEligibilityFetchStart() {
        var1 = true;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var4['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START'] = var11;
    var11 = function handleSubscriptionRewardEligibilityFetch(arg1) {
        var1 = arg1;
        var1 = var1.eligible;
        _closure1_slot20 = var1;
        var1 = false;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var4['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS'] = var11;
    var10 = function handleSubscriptionRewardEligibilityFetchFailed(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0015_ip = 68; continue _fun0015 }
case 30:
            var1 = false;
            _closure1_slot20 = var1;
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
case 68:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var4['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE'] = var10;
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/billing/SubscriptionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getSubscriptionOfType'] = var2;
    return var1;
})();