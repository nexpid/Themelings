// app/modules/premium/useTrialOffer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function hasUserTrialOfferExpired(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.expires_at;
            var1 = var4 != var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = global;
            var5 = var4.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var5 = var4.Date;
            var4 = var5.parse;
            var2 = var2.expires_at;
            var2 = var4.bind(var5)(var2);
            var1 = var3 > var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/useTrialOffer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['hasUserTrialOfferExpired'] = var4;
    var2 = function useTrialOffer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var2 = var8[var3];
            var6 = undefined;
            var10 = var7.bind(var6)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getUserTrialOffer;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var5, var2);
            var _closure2_slot1 = var2;
            var10 = _closure1_slot3;
            var9 = var10.useState;
            var5 = _closure1_slot6;
            var5 = var5.bind(var6)(var2);
            var10 = var9.bind(var10)(var5);
            var9 = _closure1_slot2;
            var5 = 2;
            var10 = var9.bind(var6)(var10, var5);
            var5 = 0;
            var5 = var10[var5];
            var _closure2_slot2 = var5;
            var9 = 1;
            var9 = var10[var9];
            var _closure2_slot3 = var9;
            var3 = var8[var3];
            var8 = var7.bind(var6)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
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
            var3 = var7.bind(var8)(var6, var3);
            var3 = !var3;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = _closure1_slot5;
            var6 = var7.canFractionalPremiumUserUseOffer;
            var3 = var6.bind(var7)();
case 6:
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var5;
            var4[1] = var2;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = _closure2_slot1;
                    var2 = var2.expires_at;
                    if(!(var3 == var2)) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                    var2 = undefined;
                    return var2;
case 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
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
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.expires_at;
                            var3 = null;
                            var1 = var3 != var1;
                            var4 = 0;
                            if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                            var1 = global;
                            var6 = var1.Date;
                            var5 = var6.parse;
                            var2 = _closure2_slot1;
                            var2 = var2.expires_at;
                            var2 = var5.bind(var6)(var2);
                            var5 = var1.Date;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var4 = var2 - var1;
case 11:
                            var2 = _closure3_slot0;
                            if(!(var3 != var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                            var3 = _closure3_slot0;
                            var2 = var3.start;
                            var1 = function() {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var2 = _closure2_slot2;
                                    if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                                    var4 = _closure1_slot6;
                                    var2 = _closure2_slot1;
                                    var3 = undefined;
                                    var2 = var4.bind(var3)(var2);
                                    if(!var2) { _fun0005_ip = 15; continue _fun0005 }
case 17:
                                    var2 = _closure2_slot3;
                                    var1 = true;
                                    var1 = var2.bind(var3)(var1);
                                    _fun0005_ip = 18; continue _fun0005;
case 15:
                                    var2 = _closure3_slot1;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 18:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var4, var1);
case 13:
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
            var1 = var6.bind(var7)(var1, var4);
            var1 = null;
            if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = null;
            if(!var3) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var3['useTrialOffer'] = var2;
    return var1;
})();