// app/modules/app_icons/native/AppIconUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var8;
        var5 = function fetchCurrentAppIcon() {
            var1 = undefined;
            var4 = _closure1_slot15;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot14 = var5;
        var1 = function _fetchCurrentAppIcon() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3: // try_start_0
                        var4 = _closure1_slot13;
                        var2 = null;
                        var4 = var2 == var4;
                        var2 = undefined;
                        if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = _closure1_slot13;
                        var3 = var4.getCurrentIcon;
                        var2 = var3.bind(var4)();
case 4:
                        SaveGenerator(address=48);
case 6:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var3 = var2.id;
case 10: // try_end0
                        return var3;
case 8:
                        return var2;
case 11: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var5 = _closure1_slot12;
                        var4 = var5.warn;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var6 = var3.concat;
                        var3 = 'Error fetching current app icon: ';
                        var3 = var6.bind(var3)(var7);
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.FreemiumAppIconIds;
                        var2 = var2.DEFAULT;
                        return var2;
case 2:
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
        var4 = function useCurrentAppIcon() {
            var7 = _closure1_slot5;
            var5 = var7.useState;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var8.bind(var4)(var1);
            var1 = var1.FreemiumAppIconIds;
            var1 = var1.DEFAULT;
            var7 = var5.bind(var7)(var1);
            var5 = _closure1_slot3;
            var1 = 2;
            var7 = var5.bind(var4)(var7, var1);
            var1 = 0;
            var1 = var7[var1];
            var5 = 1;
            var5 = var7[var5];
            var _closure2_slot0 = var5;
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var7 = _closure1_slot4;
            var5 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 12:
                        var2 = _closure1_slot14;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 13:
                        return var2;
case 14:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var4 = _closure2_slot0;
                        var4 = var4.bind(var3)(var2);
                        return var3;
case 15:
                        return var2;
case 7:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var7.bind(var4)(var5);
            var5 = new Array(0);
            var5 = var8.bind(var9)(var7, var5);
            var _closure2_slot1 = var5;
            var5 = _closure1_slot1;
            var3 = 11;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var2 = function() {
                var4 = _closure2_slot1;
                var3 = undefined;
                var1 = var4.bind(var3)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.subscribe;
                var1 = 'APP_ICON_UPDATED';
                var1 = var2.bind(var3)(var1, var4);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot1;
                    var2 = 'APP_ICON_UPDATED';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot16 = var4;
        var1 = function _setAppIcon() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot4;
            var3 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 3:
                        var10 = arg1;
                        var9 = arg2;
case 18: // try_start_0
                        var2 = _closure1_slot13;
                        var7 = null;
                        var3 = var7 == var2;
                        var12 = undefined;
                        var2 = undefined;
                        if(var3) { _fun0004_ip = 9; continue _fun0004 }
case 19:
                        var5 = _closure1_slot13;
                        var4 = var5.setIcon;
                        var3 = var10;
                        var2 = var4.bind(var5)(var3);
case 9:
                        SaveGenerator(address=58);
case 20:
                        return var2;
case 21:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var4 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var3 = 12;
                        var3 = var13[var3];
                        var6 = var4.bind(var12)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var11 = 'APP_ICON_UPDATED';
                        var3['type'] = var11;
                        var3 = var5.bind(var6)(var3);
                        var3 = 13;
                        var3 = var13[var3];
                        var6 = var4.bind(var12)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot9;
                        var4 = var3.APP_ICON_UPDATED;
                        var3 = {};
                        var3['icon_id'] = var10;
                        var3['user_premium_tier'] = var9;
                        var11 = _closure1_slot0;
                        var9 = 10;
                        var9 = var13[var9];
                        var9 = var11.bind(var12)(var9);
                        var9 = var9.FreemiumAppIconIds;
                        var9 = var9.DEFAULT;
                        var7 = null;
                        if(!(var10 !== var9)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var8 = _closure1_slot11;
                        var7 = var8.TIER_2;
case 24:
                        var3['icon_premium_tier'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
case 26: // try_end0
                        _fun0004_ip = 27; continue _fun0004;
case 22:
                        return var2;
case 28: // catch_target0
                        CatchBlockStart(arg_register=5);
                        var4 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = 14;
                        var3 = var12[var3];
                        var11 = undefined;
                        var5 = var4.bind(var11)(var3);
                        var4 = var5.open;
                        var3 = {};
                        var7 = 'APP_ICON_LOGS_ERROR_MESSAGE_GENERIC';
                        var3['key'] = var7;
                        var10 = _closure1_slot0;
                        var7 = 15;
                        var8 = var12[var7];
                        var8 = var10.bind(var11)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var12[var7];
                        var7 = var10.bind(var11)(var7);
                        var7 = var7.t;
                        var7 = var7.c76eo/;
                        var7 = var8.bind(var9)(var7);
                        var3['content'] = var7;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot12;
                        var3 = var4.warn;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var2 = 'Error changing users app icon: ';
                        var2 = var5.bind(var2)(var6);
                        var2 = var3.bind(var4)(var2);
case 27:
                        var2 = undefined;
                        return var2;
case 17:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot17 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot17 = var1;
        var1 = global;
        var11 = var1.Object;
        var9 = var11.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var11)(var3, var1, var6);
        var1 = 0;
        var6 = var8[var1];
        var1 = undefined;
        var6 = var10.bind(var1)(var6);
        var _closure1_slot3 = var6;
        var6 = 1;
        var6 = var8[var6];
        var6 = var10.bind(var1)(var6);
        var _closure1_slot4 = var6;
        var6 = 2;
        var9 = var8[var6];
        var6 = metroImportAll;
        var6 = var6.bind(var1)(var9);
        var _closure1_slot5 = var6;
        var6 = 3;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var6 = var6.NativeModules;
        var9 = 4;
        var9 = var8[var9];
        var9 = var7.bind(var1)(var9);
        var11 = var9.getDefaultIcon;
        var _closure1_slot6 = var11;
        var11 = var9.getOfficialAlternateIcons;
        var _closure1_slot7 = var11;
        var9 = var9.getLimitedAlternateIcons;
        var _closure1_slot8 = var9;
        var9 = 5;
        var9 = var8[var9];
        var9 = var7.bind(var1)(var9);
        var11 = var9.AnalyticEvents;
        var _closure1_slot9 = var11;
        var9 = var9.UserSettingsSections;
        var _closure1_slot10 = var9;
        var9 = 6;
        var9 = var8[var9];
        var9 = var7.bind(var1)(var9);
        var9 = var9.PremiumTypes;
        var _closure1_slot11 = var9;
        var9 = 7;
        var9 = var8[var9];
        var11 = var10.bind(var1)(var9);
        var9 = var11.prototype;
        var10 = Object.create(var9, {constructor: {value: var11}});
        var14 = 'AppIconUtils';
        var15 = var10;
        var9 = new var15[var11](var14, var13);
        var9 = var9 instanceof Object ? var9 : var10;
        var _closure1_slot12 = var9;
        var9 = 8;
        var9 = var8[var9];
        var10 = var7.bind(var1)(var9);
        var9 = var10.isAndroid;
        var9 = var9.bind(var10)();
        if(var9) { _fun0001_ip = 29; continue _fun0001 }
case 30:
        var6 = var6.DCDIconManager;
        _fun0001_ip = 17; continue _fun0001;
case 29:
        var9 = 9;
        var9 = var8[var9];
        var9 = var7.bind(var1)(var9);
        var6 = var9.default;
case 17:
        var _closure1_slot13 = var6;
        var6 = 17;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/app_icons/native/AppIconUtils.tsx';
        var6 = var7.bind(var8)(var6);
        var3['fetchCurrentAppIcon'] = var5;
        var3['useCurrentAppIcon'] = var4;
        var4 = function setAppIcon() {
            var1 = undefined;
            var4 = _closure1_slot17;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['setAppIcon'] = var4;
        var4 = function useAppIcons() {
            var2 = _closure1_slot16;
            var6 = undefined;
            var2 = var2.bind(var6)();
            var7 = _closure1_slot5;
            var4 = var7.useState;
            var3 = new Array(0);
            var4 = var4.bind(var7)(var3);
            var3 = _closure1_slot3;
            var10 = 2;
            var7 = var3.bind(var6)(var4, var10);
            var3 = 0;
            var4 = var7[var3];
            var8 = 1;
            var7 = var7[var8];
            var _closure2_slot0 = var7;
            var11 = _closure1_slot5;
            var9 = var11.useState;
            var7 = new Array(0);
            var9 = var9.bind(var11)(var7);
            var7 = _closure1_slot3;
            var7 = var7.bind(var6)(var9, var10);
            var3 = var7[var3];
            var7 = var7[var8];
            var _closure2_slot1 = var7;
            var10 = _closure1_slot5;
            var9 = var10.useCallback;
            var8 = _closure1_slot4;
            var7 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
case 33: // try_start_0
                        var6 = _closure1_slot13;
                        var3 = null;
                        var6 = var3 == var6;
                        var3 = undefined;
                        if(var6) { _fun0005_ip = 34; continue _fun0005 }
case 19:
                        var7 = _closure1_slot13;
                        var6 = var7.getAvailableIcons;
                        var3 = var6.bind(var7)();
case 34:
                        SaveGenerator(address=56);
case 9:
                        return var3;
case 20:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0005_ip = 35; continue _fun0005 }
case 11:
                        var7 = var3.map;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var6 = var7.bind(var3)(var6);
                        _closure4_slot0 = var6;
                        var6 = _closure1_slot7;
                        var8 = var6.bind(var2)();
                        var7 = var8.filter;
                        var6 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.includes;
                            var1 = arg1;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var14 = var7.bind(var8)(var6);
                        var6 = _closure1_slot8;
                        var8 = var6.bind(var2)();
                        var6 = var8.filter;
                        var5 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.includes;
                            var1 = arg1;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var8 = var6.bind(var8)(var5);
                        var6 = _closure2_slot1;
                        var6 = var6.bind(var2)(var8);
                        var5 = _closure2_slot0;
                        var4 = _closure1_slot6;
                        var6 = var4.bind(var2)();
                        var4 = new Array(1);
                        var4[0] = var6;
                        var13 = 1;
                        var15 = var4;
                        var6 = arraySpread(var15, var14, var13);
                        var4 = var5.bind(var2)(var4);
case 36: // try_end0
                        _fun0005_ip = 37; continue _fun0005;
case 35:
                        return var3;
case 38: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var5 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = 14;
                        var4 = var12[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.open;
                        var4 = {};
                        var8 = 'APP_ICON_LOGS_ERROR_MESSAGE_GENERIC';
                        var4['key'] = var8;
                        var11 = _closure1_slot0;
                        var8 = 15;
                        var9 = var12[var8];
                        var9 = var11.bind(var2)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var2)(var8);
                        var8 = var8.t;
                        var8 = var8.c76eo/;
                        var8 = var9.bind(var10)(var8);
                        var4['content'] = var8;
                        var4 = var5.bind(var6)(var4);
                        var5 = _closure1_slot12;
                        var4 = var5.warn;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var6 = var3.concat;
                        var3 = 'Error fetching available app icons: ';
                        var3 = var6.bind(var3)(var7);
                        var3 = var4.bind(var5)(var3);
case 37:
                        return var2;
case 31:
                        return var1;
                    }
                };
                return var1;
            };
            var8 = var8.bind(var6)(var7);
            var7 = new Array(0);
            var7 = var9.bind(var10)(var8, var7);
            var _closure2_slot2 = var7;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 11;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var1 = function() {
                var4 = _closure2_slot2;
                var3 = undefined;
                var1 = var4.bind(var3)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.subscribe;
                var1 = 'APP_ICON_UPDATED';
                var1 = var2.bind(var3)(var1, var4);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot2;
                    var2 = 'APP_ICON_UPDATED';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var1 = {};
            var1['officialAppIcons'] = var4;
            var1['limitedTimeAppIcons'] = var3;
            var1['currentAppIcon'] = var2;
            return var1;
        };
        var3['useAppIcons'] = var4;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.openUserSettings;
            var2 = {};
            var5 = _closure1_slot10;
            var5 = var5.APP_ICONS;
            var2['screen'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['navigateToAppIconSettings'] = var2;
        return var1;
    }
})();