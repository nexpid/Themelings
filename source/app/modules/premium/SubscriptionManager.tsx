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
 0:
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
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var4)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
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
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 257; continue _fun0003 }
 10:
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
                            if(!var4) { _fun0003_ip = 254; continue _fun0003 }
 75:
                            var6 = _closure1_slot10;
                            var4 = var6.hasFetchedSubscriptions;
                            var4 = var4.bind(var6)();
                            if(var4) { _fun0003_ip = 95; continue _fun0003 }
 92:
                            var4 = var5;
 95:
                            if(var4) { _fun0003_ip = 141; continue _fun0003 }
 98:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 12;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.fetchSubscriptions;
                            var4 = var4.bind(var5)();
                            SaveGenerator(address=132);
 130:
                            return var4;
 132:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(!var5) { _fun0003_ip = 141; continue _fun0003 }
 138:
                            return var4;
 141:
                            var5 = _closure1_slot10;
                            var4 = var5.getPremiumSubscription;
                            var6 = var4.bind(var5)();
                            var5 = null;
                            var7 = var5 == var6;
                            var4 = undefined;
                            if(var7) { _fun0003_ip = 172; continue _fun0003 }
 166:
                            var4 = var6.paymentSourceId;
 172:
                            var4 = var5 != var4;
                            if(var4) { _fun0003_ip = 203; continue _fun0003 }
 179:
                            var5 = _closure1_slot11;
                            var7 = var5.applicationIdsFetched;
                            var6 = var7.has;
                            var5 = _closure1_slot12;
                            var4 = var6.bind(var7)(var5);
 203:
                            if(var4) { _fun0003_ip = 254; continue _fun0003 }
 206:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 13;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.fetchUserEntitlementsForApplication;
                            var3 = _closure1_slot12;
                            var3 = var4.bind(var5)(var3);
                            SaveGenerator(address=245);
 243:
                            return var3;
 245:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(!var4) { _fun0003_ip = 254; continue _fun0003 }
 251:
                            return var3;
 254:
                            return var2;
 257:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var3.bind(var4)(var5);
                var1['maybeFetchSubscriptions'] = var5;
                var5 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                        if(var5) { _fun0004_ip = 61; continue _fun0004 }
 55:
                        var4 = var6.premiumType;
 61:
                        var9 = var3 != var4;
                        var5 = null;
                        if(!var9) { _fun0004_ip = 73; continue _fun0004 }
 70:
                        var5 = var4;
 73:
                        var4 = _closure1_slot13;
                        var4 = var4.TIER_1;
                        var5 = var7.bind(var8)(var5, var4);
                        var7 = _closure1_slot10;
                        var4 = var7.getIsFetchingMostRecentSubscription;
                        var4 = var4.bind(var7)();
                        var3 = var3 != var6;
                        if(!var3) { _fun0004_ip = 115; continue _fun0004 }
 112:
                        var3 = var5;
 115:
                        if(!var3) { _fun0004_ip = 128; continue _fun0004 }
 118:
                        var5 = var6.hasHadPremium;
                        var3 = var5.bind(var6)();
 128:
                        if(!var3) { _fun0004_ip = 134; continue _fun0004 }
 131:
                        var3 = !var4;
 134:
                        if(!var3) { _fun0004_ip = 167; continue _fun0004 }
 137:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 12;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchMostRecentSubscription;
                        var2 = var2.bind(var3)();
 167:
                        return var1;
                    }
                };
                var1['maybeFetchMostRecentSubscription'] = var5;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 108; continue _fun0005 }
 7:
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
                            if(!var2) { _fun0005_ip = 72; continue _fun0005 }
 59:
                            var4 = _closure1_slot9;
                            var4 = var4.ipCountryCodeLoaded;
                            var2 = !var4;
 72:
                            if(!var2) { _fun0005_ip = 102; continue _fun0005 }
 75:
                            var4 = _closure3_slot0;
                            var2 = var4.fetchCountryCode;
                            var2 = var2.bind(var4)();
                            SaveGenerator(address=96);
 94:
                            return var2;
 96:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 105; continue _fun0005 }
 102:
                            return var3;
 105:
                            return var2;
 108:
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
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 114; continue _fun0006 }
 7:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var6 = 12;
                            var2 = var2[var6];
                            var4 = undefined;
                            var5 = var5.bind(var4)(var2);
                            var2 = var5.fetchIpCountryCode;
                            var2 = var2.bind(var5)();
                            SaveGenerator(address=46);
 44:
                            return var2;
 46:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0006_ip = 111; continue _fun0006 }
 52:
                            var5 = _closure1_slot9;
                            var7 = var5.ipCountryCode;
                            var5 = null;
                            if(!(var5 != var7)) { _fun0006_ip = 105; continue _fun0006 }
 68:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.fetchPaymentSources;
                            var3 = var3.bind(var5)();
                            SaveGenerator(address=99);
 97:
                            return var3;
 99:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0006_ip = 108; continue _fun0006 }
 105:
                            return var4;
 108:
                            return var3;
 111:
                            return var2;
 114:
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