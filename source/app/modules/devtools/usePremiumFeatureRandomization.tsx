// app/modules/devtools/usePremiumFeatureRandomization.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function getRandomElement(arg1) {
        var2 = arg1;
        var1 = global;
        var4 = var1.Math;
        var3 = var4.floor;
        var5 = var1.Math;
        var1 = var5.random;
        var5 = var1.bind(var5)();
        var1 = var2.length;
        var1 = var5 * var1;
        var1 = var3.bind(var4)(var1);
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _randomizeTheme() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 476; continue _fun0001 }
 10:
                    var2 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var7 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var9 = function getAvailableGradientPresets() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var3 = _closure1_slot9;
                            var1 = var3.getCurrentUser;
                            var4 = var1.bind(var3)();
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var1 = var3.canUseClientThemes;
                            var1 = var1.bind(var3)(var4);
                            if(var1) { _fun0002_ip = 58; continue _fun0002 }
 52:
                            var1 = new Array(0);
                            _fun0002_ip = 99; continue _fun0002;
 58:
                            var3 = global;
                            var4 = var3.Object;
                            var3 = var4.keys;
                            var2 = _closure1_slot11;
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.map;
                            var2 = function(arg1) {
                                var1 = global;
                                var3 = var1.Number;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2);
 99:
                            return var1;
                        }
                    };
                    var10 = var9.bind(var2)();
                    var4 = var10;
                    var10 = var10.length;
                    var11 = 0;
                    var10 = var10 > var11;
                    var9 = var10;
                    if(!var10) { _fun0001_ip = 89; continue _fun0001 }
 57:
                    var10 = global;
                    var12 = var10.Math;
                    var10 = var12.random;
                    var12 = var10.bind(var12)();
                    var10 = 0.7;
                    var9 = var12 > var10;
 89:
                    var3 = var9;
 92: // try_start_0
                    var9 = var3;
                    var10 = _closure1_slot13;
                    if(var9) { _fun0001_ip = 207; continue _fun0001 }
 105:
                    var9 = _closure1_slot12;
                    var9 = var10.bind(var2)(var9);
                    var13 = _closure1_slot2;
                    var16 = _closure1_slot3;
                    var12 = 9;
                    var12 = var16[var12];
                    var14 = var13.bind(var2)(var12);
                    var13 = var14.saveClientTheme;
                    var12 = {};
                    var12['theme'] = var9;
                    var12['backgroundGradientPresetId'] = var2;
                    var12['customUserThemeSettings'] = var2;
                    var15 = _closure1_slot0;
                    var9 = 10;
                    var9 = var16[var9];
                    var9 = var15.bind(var2)(var9);
                    var9 = var9.UserSettingsDelay;
                    var9 = var9.INFREQUENT_USER_ACTION;
                    var9 = var13.bind(var14)(var12, var9);
                    SaveGenerator(address=195);
 193:
                    return var9;
 195:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(!var12) { _fun0001_ip = 466; continue _fun0001 }
 204: // try_end0
                    return var9;
 207: // try_start_1
                    var18 = var4;
                    var4 = new Array(1);
                    var19 = var4;
                    var17 = 0;
                    var12 = arraySpread(var19, var18, var17);
                    var9 = null;
                    var4[var12] = var9;
                    var11 = 1;
                    var11 = var12 + var11;
                    var4 = var10.bind(var2)(var4);
                    var8 = var4;
                    if(!(var9 == var4)) { _fun0001_ip = 306; continue _fun0001 }
 249:
                    var10 = _closure1_slot13;
                    var4 = _closure1_slot10;
                    var11 = var4.DARK;
                    var4 = new Array(3);
                    var4[0] = var11;
                    var11 = _closure1_slot10;
                    var11 = var11.DARKER;
                    var4[1] = var11;
                    var11 = _closure1_slot10;
                    var11 = var11.MIDNIGHT;
                    var4[2] = var11;
                    var7 = var10.bind(var2)(var4);
                    _fun0001_ip = 360; continue _fun0001;
 306:
                    var10 = _closure1_slot11;
                    var4 = var8;
                    var4 = var10[var4];
                    var6 = var4;
                    var10 = var9 == var4;
                    var4 = undefined;
                    if(var10) { _fun0001_ip = 335; continue _fun0001 }
 329:
                    var4 = var6.theme;
 335:
                    var5 = var4;
                    if(!(var9 == var4)) { _fun0001_ip = 354; continue _fun0001 }
 342:
                    var4 = _closure1_slot10;
                    var4 = var4.DARK;
                    _fun0001_ip = 357; continue _fun0001;
 354:
                    var4 = var5;
 357:
                    var7 = var4;
 360:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var4 = 9;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.saveClientTheme;
                    var4 = {};
                    var4['theme'] = var7;
                    var7 = var8;
                    var9 = var9 != var7;
                    var7 = undefined;
                    if(!var9) { _fun0001_ip = 408; continue _fun0001 }
 405:
                    var7 = var8;
 408:
                    var4['backgroundGradientPresetId'] = var7;
                    var4['customUserThemeSettings'] = var2;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 10;
                    var3 = var8[var3];
                    var3 = var7.bind(var2)(var3);
                    var3 = var3.UserSettingsDelay;
                    var3 = var3.INFREQUENT_USER_ACTION;
                    var3 = var5.bind(var6)(var4, var3);
                    SaveGenerator(address=460);
 458:
                    return var3;
 460:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 468; continue _fun0001 }
 466: // try_end1
                    _fun0001_ip = 473; continue _fun0001;
 468:
                    return var3;
 471: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
 473:
                    return var2;
 476:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _randomizeCollectibles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 332; continue _fun0003 }
 16:
                    var6 = var7;
                    var4 = var9;
                    var2 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    var8 = var7.length;
                    var7 = 0;
                    var8 = var8 > var7;
                    var5 = var8;
                    var9 = var9.length;
                    var3 = var9 > var7;
                    if(var8) { _fun0003_ip = 63; continue _fun0003 }
 54:
                    var8 = var3;
                    if(!var8) { _fun0003_ip = 329; continue _fun0003 }
 63: // try_start_0
                    if(!var5) { _fun0003_ip = 139; continue _fun0003 }
 66:
                    var8 = _closure1_slot13;
                    var12 = var6;
                    var6 = new Array(1);
                    var13 = var6;
                    var11 = 0;
                    var10 = arraySpread(var13, var12, var11);
                    var9 = null;
                    var6[var10] = var9;
                    var9 = 1;
                    var9 = var10 + var9;
                    var8 = var8.bind(var2)(var6);
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 11;
                    var5 = var9[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.setPendingAvatarDecoration;
                    var5 = var5.bind(var6)(var8);
 139:
                    if(!var3) { _fun0003_ip = 215; continue _fun0003 }
 142:
                    var5 = _closure1_slot13;
                    var12 = var4;
                    var4 = new Array(1);
                    var13 = var4;
                    var11 = 0;
                    var7 = arraySpread(var13, var12, var11);
                    var6 = null;
                    var4[var7] = var6;
                    var6 = 1;
                    var6 = var7 + var6;
                    var5 = var5.bind(var2)(var4);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 11;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.setGlobalPendingNameplate;
                    var3 = var3.bind(var4)(var5);
 215:
                    var5 = _closure1_slot8;
                    var4 = var5.getAllPending;
                    var5 = var4.bind(var5)();
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 12;
                    var3 = var7[var3];
                    var4 = var6.bind(var2)(var3);
                    var3 = var4.getAccountUpdateForUpdateRequest;
                    var8 = var3.bind(var4)(var5);
                    var3 = 11;
                    var4 = var7[var3];
                    var5 = var6.bind(var2)(var4);
                    var4 = var5.saveAccountChanges;
                    var5 = var4.bind(var5)(var8);
                    var4 = var5.finally;
                    var3 = var7[var3];
                    var3 = var6.bind(var2)(var3);
                    var3 = var3.resetPendingAccountChanges;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=316);
 314:
                    return var3;
 316:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 324; continue _fun0003 }
 322: // try_end0
                    _fun0003_ip = 329; continue _fun0003;
 324:
                    return var3;
 327: // catch_target0
                    CatchBlockStart(arg_register=2);
 329:
                    return var2;
 332:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ThemeTypes;
    var _closure1_slot10 = var7;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BACKGROUND_GRADIENT_PRESETS_MAP;
    var _closure1_slot11 = var4;
    var8 = var7.DARK;
    var4 = new Array(4);
    var4[0] = var8;
    var8 = var7.LIGHT;
    var4[1] = var8;
    var8 = var7.DARKER;
    var4[2] = var8;
    var7 = var7.MIDNIGHT;
    var4[3] = var7;
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/usePremiumFeatureRandomization.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumFeatureRandomization() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 13;
        var3 = var6[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var3);
        var3 = var7.useGetOrFetchCollectiblesCategoriesAndPurchases;
        var3 = var3.bind(var7)();
        var3 = 14;
        var3 = var6[var3];
        var7 = var5.bind(var1)(var3);
        var6 = var7.useStateFromStoresArray;
        var3 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var2 = _closure1_slot7;
            var4 = var2.purchases;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 15;
            var1 = var6[var2];
            var3 = undefined;
            var7 = var5.bind(var3)(var1);
            var1 = var7.getAvatarDecorationsFromPurchases;
            var7 = var1.bind(var7)(var4);
            var1 = new Array(2);
            var1[0] = var7;
            var2 = var6[var2];
            var3 = var5.bind(var3)(var2);
            var2 = var3.getNameplatesFromPurchases;
            var2 = var2.bind(var3)(var4);
            var1[1] = var2;
            return var1;
        };
        var6 = var6.bind(var7)(var5, var3);
        var5 = _closure1_slot4;
        var3 = 2;
        var5 = var5.bind(var1)(var6, var3);
        var3 = 0;
        var7 = var5[var3];
        var _closure2_slot0 = var7;
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot1 = var3;
        var5 = _closure1_slot6;
        var6 = var5.useCallback;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var3;
        var3 = function() {
            var3 = function randomizeTheme() {
                var1 = undefined;
                var4 = _closure1_slot14;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var3 = var3.bind(var1)();
            var3 = !var3;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = function randomizeCollectibles() {
                var1 = undefined;
                var4 = _closure1_slot15;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var6 = var6.bind(var5)(var3, var4);
        var _closure2_slot2 = var6;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var2 = global;
            var5 = var2.setInterval;
            var4 = undefined;
            var3 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = 5000;
            var2 = var5.bind(var4)(var3, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearInterval;
                var2 = _closure3_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();