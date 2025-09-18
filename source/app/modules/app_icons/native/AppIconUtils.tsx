// app/modules/app_icons/native/AppIconUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var7;
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
            var5 = _closure1_slot4;
            var1 = 2;
            var7 = var5.bind(var4)(var7, var1);
            var1 = 0;
            var1 = var7[var1];
            var5 = 1;
            var5 = var7[var5];
            var _closure2_slot0 = var5;
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var7 = _closure1_slot3;
            var5 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 123; continue _fun0002 }
 7: // try_start_0
                        var4 = _closure1_slot13;
                        var2 = null;
                        var4 = var2 == var4;
                        var5 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0002_ip = 43; continue _fun0002 }
 27:
                        var4 = _closure1_slot13;
                        var3 = var4.getCurrentIcon;
                        var2 = var3.bind(var4)();
 43:
                        SaveGenerator(address=47);
 45:
                        return var2;
 47:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 72; continue _fun0002 }
 53:
                        var4 = _closure2_slot0;
                        var3 = var2.id;
                        var3 = var4.bind(var5)(var3);
 70: // try_end0
                        _fun0002_ip = 118; continue _fun0002;
 72:
                        return var2;
 75: // catch_target0
                        CatchBlockStart(arg_register=5);
                        var4 = _closure1_slot12;
                        var3 = var4.warn;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var2 = 'Error fetching current app icon: ';
                        var2 = var5.bind(var2)(var6);
                        var2 = var3.bind(var4)(var2);
 118:
                        var2 = undefined;
                        return var2;
 123:
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
        var _closure1_slot14 = var4;
        var1 = function _setAppIcon() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 361; continue _fun0003 }
 10:
                        var10 = arg1;
                        var9 = arg2;
 16: // try_start_0
                        var2 = _closure1_slot13;
                        var7 = null;
                        var3 = var7 == var2;
                        var12 = undefined;
                        var2 = undefined;
                        if(var3) { _fun0003_ip = 54; continue _fun0003 }
 36:
                        var5 = _closure1_slot13;
                        var4 = var5.setIcon;
                        var3 = var10;
                        var2 = var4.bind(var5)(var3);
 54:
                        SaveGenerator(address=58);
 56:
                        return var2;
 58:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 210; continue _fun0003 }
 67:
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
                        if(!(var10 !== var9)) { _fun0003_ip = 192; continue _fun0003 }
 182:
                        var8 = _closure1_slot11;
                        var7 = var8.TIER_2;
 192:
                        var3['icon_premium_tier'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
 205: // try_end0
                        _fun0003_ip = 356; continue _fun0003;
 210:
                        return var2;
 213: // catch_target0
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
                        var7 = var7.c76eo6;
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
 356:
                        var2 = undefined;
                        return var2;
 361:
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
        var8 = var10.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var10)(var3, var1, var5);
        var1 = 0;
        var5 = var7[var1];
        var1 = undefined;
        var5 = var9.bind(var1)(var5);
        var _closure1_slot3 = var5;
        var5 = 1;
        var5 = var7[var5];
        var5 = var9.bind(var1)(var5);
        var _closure1_slot4 = var5;
        var5 = 2;
        var8 = var7[var5];
        var5 = metroImportAll;
        var5 = var5.bind(var1)(var8);
        var _closure1_slot5 = var5;
        var5 = 3;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.NativeModules;
        var8 = 4;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var10 = var8.getDefaultIcon;
        var _closure1_slot6 = var10;
        var10 = var8.getOfficialAlternateIcons;
        var _closure1_slot7 = var10;
        var8 = var8.getLimitedAlternateIcons;
        var _closure1_slot8 = var8;
        var8 = 5;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var10 = var8.AnalyticEvents;
        var _closure1_slot9 = var10;
        var8 = var8.UserSettingsSections;
        var _closure1_slot10 = var8;
        var8 = 6;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var8 = var8.PremiumTypes;
        var _closure1_slot11 = var8;
        var8 = 7;
        var8 = var7[var8];
        var10 = var9.bind(var1)(var8);
        var8 = var10.prototype;
        var9 = Object.create(var8, {constructor: {value: var10}});
        var13 = 'AppIconUtils';
        var14 = var9;
        var8 = new var14[var10](var13, var12);
        var8 = var8 instanceof Object ? var8 : var9;
        var _closure1_slot12 = var8;
        var8 = 8;
        var8 = var7[var8];
        var9 = var6.bind(var1)(var8);
        var8 = var9.isAndroid;
        var8 = var8.bind(var9)();
        if(var8) { _fun0001_ip = 321; continue _fun0001 }
 311:
        var5 = var5.DCDIconManager;
        _fun0001_ip = 338; continue _fun0001;
 321:
        var8 = 9;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var5 = var8.default;
 338:
        var _closure1_slot13 = var5;
        var5 = 18;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/app_icons/native/AppIconUtils.tsx';
        var5 = var6.bind(var7)(var5);
        var3['useCurrentAppIcon'] = var4;
        var4 = function setAppIcon() {
            var1 = undefined;
            var4 = _closure1_slot15;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['setAppIcon'] = var4;
        var4 = function useAppIcons() {
            var2 = _closure1_slot14;
            var8 = undefined;
            var2 = var2.bind(var8)();
            var6 = _closure1_slot5;
            var4 = var6.useState;
            var3 = new Array(0);
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot4;
            var10 = 2;
            var6 = var3.bind(var8)(var4, var10);
            var3 = 0;
            var4 = var6[var3];
            var7 = 1;
            var6 = var6[var7];
            var _closure2_slot0 = var6;
            var11 = _closure1_slot5;
            var9 = var11.useState;
            var6 = new Array(0);
            var9 = var9.bind(var11)(var6);
            var6 = _closure1_slot4;
            var6 = var6.bind(var8)(var9, var10);
            var3 = var6[var3];
            var6 = var6[var7];
            var _closure2_slot1 = var6;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 16;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.useIsHalloweenAppIconsEnabled;
            var6 = 'app_icons_settings';
            var8 = var7.bind(var8)(var6);
            var _closure2_slot2 = var8;
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var8;
            var1 = function() {
                var4 = _closure1_slot3;
                var1 = undefined;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 340; continue _fun0004 }
 12:
                            var2 = undefined;
                            var _closure5_slot0 = var2;
 18: // try_start_0
                            var5 = _closure1_slot13;
                            var3 = null;
                            var5 = var3 == var5;
                            var3 = undefined;
                            if(var5) { _fun0004_ip = 52; continue _fun0004 }
 36:
                            var7 = _closure1_slot13;
                            var5 = var7.getAvailableIcons;
                            var3 = var5.bind(var7)();
 52:
                            SaveGenerator(address=56);
 54:
                            return var3;
 56:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0004_ip = 193; continue _fun0004 }
 65:
                            var7 = var3.map;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.id;
                                return var1;
                            };
                            var5 = var7.bind(var3)(var5);
                            _closure5_slot0 = var5;
                            var8 = _closure1_slot7;
                            var7 = _closure2_slot2;
                            var9 = var8.bind(var2)(var7);
                            var8 = var9.filter;
                            var7 = function(arg1) {
                                var3 = _closure5_slot0;
                                var2 = var3.includes;
                                var1 = arg1;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var14 = var8.bind(var9)(var7);
                            var8 = _closure1_slot8;
                            var9 = var8.bind(var2)();
                            var8 = var9.filter;
                            var6 = function(arg1) {
                                var3 = _closure5_slot0;
                                var2 = var3.includes;
                                var1 = arg1;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var8 = var8.bind(var9)(var6);
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
 188: // try_end0
                            _fun0004_ip = 337; continue _fun0004;
 193:
                            return var3;
 196: // catch_target0
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
                            var8 = var8.c76eo6;
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
 337:
                            return var2;
 340:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var4.bind(var1)(var3);
                var _closure3_slot0 = var3;
                var2 = function getAvailableIcons() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var6.bind(var7)(var1, var5);
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
            var1 = 17;
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