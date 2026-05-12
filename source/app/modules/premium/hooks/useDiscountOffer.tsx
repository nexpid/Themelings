// app/modules/premium/hooks/useDiscountOffer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot6 = var7;
    var4 = var4.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/useDiscountOffer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDiscountOffer(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 5;
            var2 = var2[var10];
            var9 = undefined;
            var7 = var5.bind(var9)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getUserDiscountOffer;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var5, var2);
            var _closure2_slot1 = var2;
            var8 = _closure1_slot3;
            var7 = var8.useState;
            var5 = null;
            var6 = var5 == var2;
            var11 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2.hasExpired;
            var11 = var6.bind(var2)();
case 2:
            var6 = var5 != var11;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var11;
case 4:
            var8 = var7.bind(var8)(var6);
            var7 = _closure1_slot2;
            var6 = 2;
            var8 = var7.bind(var9)(var8, var6);
            var6 = 0;
            var7 = var8[var6];
            var _closure2_slot2 = var7;
            var6 = 1;
            var6 = var8[var6];
            var _closure2_slot3 = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var10];
            var10 = var8.bind(var9)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isPremium;
                var4 = _closure1_slot4;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var8, var6);
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var8 = new Array(2);
            var8[0] = var7;
            var8[1] = var2;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot1;
                    var2 = var2.expiresAt;
                    if(!(var3 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                    var2 = undefined;
                    return var2;
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.Timeout;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var6 = var4;
                    var2 = new var6[var2](var5);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var _closure3_slot0 = var2;
                    var2 = function startTimer() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = _closure2_slot1;
                            var2 = var2.expiresAt;
                            var3 = null;
                            var2 = var3 != var2;
                            var4 = 0;
                            if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.expiresAt;
                            var1 = var2.getTime;
                            var2 = var1.bind(var2)();
                            var1 = global;
                            var5 = var1.Date;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var4 = var2 - var1;
case 9:
                            var2 = _closure3_slot0;
                            if(!(var3 != var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var3 = _closure3_slot0;
                            var2 = var3.start;
                            var1 = function() {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var2 = _closure2_slot2;
                                    if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                                    var3 = _closure2_slot1;
                                    var2 = var3.hasExpired;
                                    var2 = var2.bind(var3)();
                                    if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                                    var3 = _closure2_slot3;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var2)(var1);
                                    _fun0004_ip = 16; continue _fun0004;
case 13:
                                    var2 = _closure3_slot1;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 16:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var4, var1);
case 11:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var2;
                    var2 = var2.bind(var3)();
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var8);
            var1 = null;
            if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(!var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = arg2;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var6 = _closure1_slot6;
            if(!(var4 !== var6)) { _fun0001_ip = 19; continue _fun0001 }
case 22:
            var3 = _closure1_slot7;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();