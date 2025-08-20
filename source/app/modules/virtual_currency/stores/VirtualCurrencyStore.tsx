// app/modules/virtual_currency/stores/VirtualCurrencyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function VirtualCurrencyStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 5;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var10 = new Array(2);
                var10[0] = var1;
                var1 = {};
                var7 = function VIRTUAL_CURRENCY_REDEEM_START(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleRedeemVirtualCurrencyStart;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_REDEEM_START'] = var7;
                var7 = function VIRTUAL_CURRENCY_REDEEM_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleRedeemVirtualCurrencySuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_REDEEM_SUCCESS'] = var7;
                var7 = function VIRTUAL_CURRENCY_REDEEM_FAIL(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleRedeemVirtualCurrencyFail;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_REDEEM_FAIL'] = var7;
                var7 = function VIRTUAL_CURRENCY_BALANCE_FETCH(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleBalanceFetch;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_BALANCE_FETCH'] = var7;
                var7 = function VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleBalanceFetchSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS'] = var7;
                var7 = function VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleBalanceFetchFail;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL'] = var7;
                var7 = function VIRTUAL_CURRENCY_BALANCE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleBalanceUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_BALANCE_UPDATE'] = var7;
                var7 = function VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOnboardingModalOpen;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN'] = var7;
                var7 = function VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOnboardingModalReset;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET'] = var7;
                var7 = function VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleEarnedOrbsCoachmarkOpen;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN'] = var7;
                var7 = function VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleEarnedOrbsCoachmarkClose;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE'] = var7;
                var7 = function LOGIN_SUCCESS() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleBalanceStateReset;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['LOGIN_SUCCESS'] = var7;
                var7 = function VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setBalancePillOverlay;
                    var1 = arg1;
                    var1 = var1.balancePillOverlay;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY'] = var7;
                var10[1] = var1;
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 276; continue _fun0002 }
 263:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 310; continue _fun0002;
 276:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 310:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = null;
                var1['_entitlements'] = var3;
                var1['_redeemingSkuId'] = var3;
                var2 = false;
                var1['_isRedeemingVirtualCurrency'] = var2;
                var1['_redeemVirtualCurrencyError'] = var3;
                var1['_balance'] = var3;
                var1['_fetchBalanceError'] = var3;
                var1['_isFetchingBalance'] = var2;
                var1['_onboardingModalOpenedPrior'] = var2;
                var1['_earnedOrbsCoachmarkOpen'] = var2;
                var3 = new Array(0);
                var1['_earnedOrbsCoachmarkDedupeKeys'] = var3;
                var3 = 0;
                var1['_earnedOrbsCoachmarkQuantity'] = var3;
                var1['_balancePillOverlay'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'earnedOrbsCoachmark';
        var5['key'] = var1;
        var1 = function get() {
            var2 = this;
            var1 = {};
            var3 = var2._earnedOrbsCoachmarkOpen;
            var1['shouldOpen'] = var3;
            var2 = var2._earnedOrbsCoachmarkQuantity;
            var1['earnedOrbsQuantity'] = var2;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(24);
        var1[0] = var5;
        var5 = {};
        var7 = 'redeemError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._redeemVirtualCurrencyError;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isRedeeming';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._isRedeemingVirtualCurrency;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'redeemingSkuId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._redeemingSkuId;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'entitlements';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._entitlements;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'balance';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._balance;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'fetchBalanceError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._fetchBalanceError;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isFetchingBalance';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._isFetchingBalance;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'onboardingModalOpenedPrior';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._onboardingModalOpenedPrior;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'balancePillOverlay';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._balancePillOverlay;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'setBalancePillOverlay';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['_balancePillOverlay'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getCurrentBalance';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.balance;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'handleBalanceStateReset';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = null;
            var2['_balance'] = var1;
            var2['_fetchBalanceError'] = var1;
            var1 = false;
            var2['_isFetchingBalance'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'handleBalanceFetch';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var1 = null;
                if(!(var2 != var1)) { _fun0003_ip = 30; continue _fun0003 }
 12:
                var4 = true;
                var3['_isFetchingBalance'] = var4;
                var3['_fetchBalanceError'] = var1;
                var1 = undefined;
                return var1;
 30:
                var5 = "Cannot destructure 'undefined' or 'null'.";
                var6 = var2;
                var1 = throwTypeError(var6, var5);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'handleBalanceFetchSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var1 = var1.balance;
            var3 = false;
            var2['_isFetchingBalance'] = var3;
            var2['_balance'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'handleBalanceFetchFail';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var1 = var1.error;
            var3 = false;
            var2['_isFetchingBalance'] = var3;
            var2['_fetchBalanceError'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'handleBalanceUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var2 = var1.balance;
            var1 = this;
            var1['_balance'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'handleRedeemVirtualCurrencyStart';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var3 = var1.skuId;
            var1 = null;
            var2['_entitlements'] = var1;
            var2['_redeemingSkuId'] = var3;
            var2['_redeemVirtualCurrencyError'] = var1;
            var1 = true;
            var2['_isRedeemingVirtualCurrency'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'handleRedeemVirtualCurrencySuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var1 = var1.entitlements;
            var2['_entitlements'] = var1;
            var1 = null;
            var2['_redeemingSkuId'] = var1;
            var1 = false;
            var2['_isRedeemingVirtualCurrency'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'handleRedeemVirtualCurrencyFail';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var3 = var1.error;
            var1 = null;
            var2['_entitlements'] = var1;
            var2['_redeemVirtualCurrencyError'] = var3;
            var2['_redeemingSkuId'] = var1;
            var1 = false;
            var2['_isRedeemingVirtualCurrency'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'handleOnboardingModalOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0004_ip = 24; continue _fun0004 }
 9:
                var3 = true;
                var1 = this;
                var1['_onboardingModalOpenedPrior'] = var3;
                var1 = undefined;
                return var1;
 24:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'handleOnboardingModalReset';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var1 = null;
                if(!(var2 != var1)) { _fun0005_ip = 48; continue _fun0005 }
 12:
                var1 = false;
                var3['_onboardingModalOpenedPrior'] = var1;
                var3['_earnedOrbsCoachmarkOpen'] = var1;
                var1 = new Array(0);
                var3['_earnedOrbsCoachmarkDedupeKeys'] = var1;
                var1 = 0;
                var3['_earnedOrbsCoachmarkQuantity'] = var1;
                var1 = undefined;
                return var1;
 48:
                var5 = "Cannot destructure 'undefined' or 'null'.";
                var6 = var2;
                var1 = throwTypeError(var6, var5);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'handleEarnedOrbsCoachmarkOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var5 = var1.earnedOrbsQuantity;
                var4 = var1.dedupeKey;
                var1 = undefined;
                var3 = var1 !== var4;
                var6 = var3;
                if(!var6) { _fun0006_ip = 46; continue _fun0006 }
 30:
                var8 = var2._earnedOrbsCoachmarkDedupeKeys;
                var7 = var8.includes;
                var6 = var7.bind(var8)(var4);
 46:
                if(var6) { _fun0006_ip = 82; continue _fun0006 }
 49:
                var6 = true;
                var2['_earnedOrbsCoachmarkOpen'] = var6;
                var2['_earnedOrbsCoachmarkQuantity'] = var5;
                if(!var3) { _fun0006_ip = 82; continue _fun0006 }
 66:
                var3 = var2._earnedOrbsCoachmarkDedupeKeys;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'handleEarnedOrbsCoachmarkClose';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var1 = null;
                if(!(var2 != var1)) { _fun0007_ip = 32; continue _fun0007 }
 12:
                var1 = false;
                var3['_earnedOrbsCoachmarkOpen'] = var1;
                var1 = 0;
                var3['_earnedOrbsCoachmarkQuantity'] = var1;
                var1 = undefined;
                return var1;
 32:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var6;
        var1[23] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 'VirtualCurrencyStore';
    var2['displayName'] = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/stores/VirtualCurrencyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();