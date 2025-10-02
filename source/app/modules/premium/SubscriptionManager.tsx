// app/modules/premium/SubscriptionManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot12 = var8;
    var4 = var4.PremiumTypes;
    var _closure1_slot13 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function SubscriptionManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var5 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var6, var5);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var4)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var5.bind(var4)(var6, var1);
                var _closure3_slot0 = var1;
                var5 = {};
                var6 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.maybeFetchSubscriptions;
                    var1 = var1.bind(var2)();
                    var1 = var2.maybeFetchCountryCode;
                    var1 = var1.bind(var2)();
                    var1 = var2.maybeFetchMostRecentSubscription;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var5['POST_CONNECTION_OPEN'] = var6;
                var1['actions'] = var5;
                var3 = _closure1_slot2;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var4 = _closure1_slot8;
                            var2 = var4.getCurrentUser;
                            var7 = var2.bind(var4)();
                            var2 = _closure1_slot9;
                            var5 = var2.isSubscriptionFetching;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 11;
                            var4 = var4[var2];
                            var2 = undefined;
                            var6 = var6.bind(var2)(var4);
                            var4 = var6.isPremium;
                            var4 = var4.bind(var6)(var7);
                            if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var6 = _closure1_slot10;
                            var4 = var6.hasFetchedSubscriptions;
                            var4 = var4.bind(var6)();
                            if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var4 = var5;
case 13:
                            if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 12;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.fetchSubscriptions;
                            var4 = var4.bind(var5)();
                            SaveGenerator(address=132);
case 17:
                            return var4;
case 18:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(!var5) { _fun0003_ip = 15; continue _fun0003 }
case 19:
                            return var4;
case 15:
                            var5 = _closure1_slot10;
                            var4 = var5.getPremiumSubscription;
                            var6 = var4.bind(var5)();
                            var5 = null;
                            var7 = var5 == var6;
                            var4 = undefined;
                            if(var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                            var4 = var6.paymentSourceId;
case 20:
                            var4 = var5 != var4;
                            if(var4) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                            var5 = _closure1_slot11;
                            var7 = var5.applicationIdsFetched;
                            var6 = var7.has;
                            var5 = _closure1_slot12;
                            var4 = var6.bind(var7)(var5);
case 22:
                            if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 24:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 13;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.fetchUserEntitlementsForApplication;
                            var3 = _closure1_slot12;
                            var3 = var4.bind(var5)(var3);
                            SaveGenerator(address=245);
case 25:
                            return var3;
case 26:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 27:
                            return var3;
case 11:
                            return var2;
case 9:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var3.bind(var4)(var5);
                var1['maybeFetchSubscriptions'] = var5;
                var5 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot8;
                        var1 = var3.getCurrentUser;
                        var6 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 11;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.isPremiumAtMost;
                        var3 = null;
                        var5 = var3 == var6;
                        var4 = undefined;
                        if(var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var4 = var6.premiumType;
case 28:
                        var9 = var3 != var4;
                        var5 = null;
                        if(!var9) { _fun0004_ip = 7; continue _fun0004 }
case 30:
                        var5 = var4;
case 7:
                        var4 = _closure1_slot13;
                        var4 = var4.TIER_1;
                        var5 = var7.bind(var8)(var5, var4);
                        var7 = _closure1_slot10;
                        var4 = var7.getIsFetchingMostRecentSubscription;
                        var4 = var4.bind(var7)();
                        var3 = var3 != var6;
                        if(!var3) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var3 = var5;
case 31:
                        if(!var3) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var5 = var6.hasHadPremium;
                        var3 = var5.bind(var6)();
case 33:
                        if(!var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                        var3 = !var4;
case 35:
                        if(!var3) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 12;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchMostRecentSubscription;
                        var2 = var2.bind(var3)();
case 37:
                        return var1;
                    }
                };
                var1['maybeFetchMostRecentSubscription'] = var5;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                            var3 = _closure1_slot8;
                            var2 = var3.getCurrentUser;
                            var6 = var2.bind(var3)();
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 11;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.isPremium;
                            var2 = var2.bind(var5)(var6);
                            if(!var2) { _fun0005_ip = 3; continue _fun0005 }
case 41:
                            var4 = _closure1_slot9;
                            var4 = var4.ipCountryCodeLoaded;
                            var2 = !var4;
case 3:
                            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 12:
                            var4 = _closure3_slot0;
                            var2 = var4.fetchCountryCode;
                            var2 = var2.bind(var4)();
                            SaveGenerator(address=96);
case 43:
                            return var2;
case 44:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 45; continue _fun0005 }
case 42:
                            return var3;
case 45:
                            return var2;
case 39:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var3.bind(var4)(var5);
                var1['maybeFetchCountryCode'] = var5;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 40:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var6 = 12;
                            var2 = var2[var6];
                            var4 = undefined;
                            var5 = var5.bind(var4)(var2);
                            var2 = var5.fetchIpCountryCode;
                            var2 = var2.bind(var5)();
                            SaveGenerator(address=46);
case 47:
                            return var2;
case 48:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                            var5 = _closure1_slot9;
                            var7 = var5.ipCountryCode;
                            var5 = null;
                            if(!(var5 != var7)) { _fun0006_ip = 45; continue _fun0006 }
case 51:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.fetchPaymentSources;
                            var3 = var3.bind(var5)();
                            SaveGenerator(address=99);
case 52:
                            return var3;
case 53:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0006_ip = 39; continue _fun0006 }
case 45:
                            return var4;
case 39:
                            return var3;
case 49:
                            return var2;
case 46:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['fetchCountryCode'] = var2;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/SubscriptionManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();