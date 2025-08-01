// app/modules/premium/native/UserTrialOfferManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot10 = var8;
    var8 = var4.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot11 = var8;
    var8 = var4.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot12 = var8;
    var4 = var4.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function UserTrialOfferManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTrialOfferFetchSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot8;
                        var2 = var3.getCurrentUser;
                        var5 = var2.bind(var3)();
                        var2 = null;
                        var2 = var2 == var5;
                        if(var2) { _fun0003_ip = 34; continue _fun0003 }
 25:
                        var3 = var5.verified;
                        var2 = !var3;
 34:
                        if(var2) { _fun0003_ip = 70; continue _fun0003 }
 37:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 8;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        var3 = var4.isPremium;
                        var2 = var3.bind(var4)(var5);
 70:
                        if(var2) { _fun0003_ip = 87; continue _fun0003 }
 73:
                        var4 = _closure1_slot9;
                        var3 = var4.isFetchingOffer;
                        var2 = var3.bind(var4)();
 87:
                        if(var2) { _fun0003_ip = 122; continue _fun0003 }
 90:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.fetchUserTrialOffer;
                        var1 = var1.bind(var2)();
 122:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePostConnectionOpen'] = var3;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.userTrialOffer;
                        var7 = null;
                        if(!(var7 != var5)) { _fun0004_ip = 237; continue _fun0004 }
 18:
                        var1 = _closure1_slot10;
                        var4 = new Array(4);
                        var4[0] = var1;
                        var1 = _closure1_slot11;
                        var4[1] = var1;
                        var1 = _closure1_slot12;
                        var4[2] = var1;
                        var1 = _closure1_slot13;
                        var4[3] = var1;
                        var3 = var4.includes;
                        var1 = var5.trial_id;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0004_ip = 237; continue _fun0004 }
 79:
                        var4 = var5.trial_id;
                        var3 = _closure1_slot13;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var1 = 10;
                        var1 = var11[var1];
                        var6 = undefined;
                        var9 = var10.bind(var6)(var1);
                        var8 = var9.UNSAFE_isDismissibleContentDismissed;
                        var1 = 11;
                        var1 = var11[var1];
                        var1 = var10.bind(var6)(var1);
                        var1 = var1.DismissibleContent;
                        var1 = var1.TRIAL_FOR_ALL_INITIAL_UPSELL;
                        var1 = var8.bind(var9)(var1);
                        var5 = var5.expires_at;
                        if(!(var7 != var5)) { _fun0004_ip = 165; continue _fun0004 }
 156:
                        if(!(var4 === var3)) { _fun0004_ip = 163; continue _fun0004 }
 160:
                        if(!var1) { _fun0004_ip = 165; continue _fun0004 }
 163:
                        return var6;
 165:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var3 = 12;
                        var3 = var1[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.openLazy;
                        var5 = _closure1_slot0;
                        var2 = 14;
                        var2 = var1[var2];
                        var5 = var5.bind(var6)(var2);
                        var2 = 13;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var5.bind(var6)(var2, var1);
                        var1 = 'PremiumTrialOfferActionSheet';
                        var1 = var3.bind(var4)(var2, var1);
 237:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTrialOfferFetchSuccess'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/UserTrialOfferManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();