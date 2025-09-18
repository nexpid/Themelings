// app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 18;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 16};
    var11 = 19;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var9['borderRadius'] = var11;
    var4['pressable'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['label'] = var9;
    var9 = {'alignItems': 'center', 'marginLeft': 'auto'};
    var4['pill'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BalanceWidgetMenu(arg1) {
        var2 = arg1;
        var7 = var2.style;
        var10 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 8;
        var2 = var13[var2];
        var4 = undefined;
        var3 = var10.bind(var4)(var2);
        var2 = var3.useFetchVirtualCurrencyBalance;
        var2 = var2.bind(var3)();
        var12 = var2.balance;
        var _closure2_slot0 = var12;
        var2 = _closure1_slot9;
        var9 = var2.bind(var4)();
        var8 = _closure1_slot5;
        var5 = var8.useCallback;
        var3 = _closure1_slot4;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 535; continue _fun0001 }
 10:
                    var2 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var6 = _closure2_slot0;
                    var9 = null;
                    var6 = var9 != var6;
                    var7 = 0;
                    var10 = 0;
                    if(!var6) { _fun0001_ip = 40; continue _fun0001 }
 36:
                    var10 = _closure2_slot0;
 40:
                    var6 = 4100;
                    var6 = var10 > var6;
                    var4 = var6;
                    var3 = null;
                    if(!var6) { _fun0001_ip = 436; continue _fun0001 }
 61: // try_start_0
                    var6 = global;
                    var12 = var6.Promise;
                    var11 = var12.all;
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var14 = 6;
                    var6 = var13[var14];
                    var17 = var15.bind(var2)(var6);
                    var6 = 5;
                    var16 = var13[var6];
                    var6 = var13.paths;
                    var16 = var17.bind(var2)(var16, var6);
                    var6 = new Array(2);
                    var6[0] = var16;
                    var14 = var13[var14];
                    var15 = var15.bind(var2)(var14);
                    var14 = 7;
                    var14 = var13[var14];
                    var13 = var13.paths;
                    var13 = var15.bind(var2)(var14, var13);
                    var6[1] = var13;
                    var6 = var11.bind(var12)(var6);
                    SaveGenerator(address=164);
 162:
                    return var6;
 164:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 286; continue _fun0001 }
 170:
                    var12 = _closure1_slot3;
                    var11 = 2;
                    var11 = var12.bind(var2)(var6, var11);
                    var12 = var11[var7];
                    var7 = 1;
                    var11 = var11[var7];
                    var7 = {};
                    var12 = var12.default;
                    var7['backgroundImage'] = var12;
                    var11 = var11.default;
                    var7['bannerImage'] = var11;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 9;
                    var11 = var14[var10];
                    var11 = var13.bind(var2)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.LaMEFB;
                    var10 = var11.bind(var12)(var10);
                    var7['bannerText'] = var10;
                    var3 = var7;
 281: // try_end0
                    _fun0001_ip = 436; continue _fun0001;
 286:
                    return var6;
 289: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var5 = var12;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 10;
                    var6 = var10[var6];
                    var10 = var7.bind(var2)(var6);
                    var7 = var10.captureException;
                    var6 = global;
                    var11 = var6.Error;
                    var11 = var12 instanceof var11;
                    if(var11) { _fun0001_ip = 380; continue _fun0001 }
 338:
                    var12 = var6.Error;
                    var11 = var6.String;
                    var6 = var5;
                    var20 = var11.bind(var2)(var6);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var21 = var11;
                    var6 = new var21[var12](var20, var19);
                    var6 = var6 instanceof Object ? var6 : var11;
                    _fun0001_ip = 383; continue _fun0001;
 380:
                    var6 = var5;
 383:
                    var5 = {};
                    var11 = {};
                    var12 = 'BALANCE_WIDGET_PROMOTIONAL_ASSETS';
                    var11['source'] = var12;
                    var5['tags'] = var11;
                    var11 = {};
                    var12 = _closure2_slot0;
                    var11['balance'] = var12;
                    var12 = var4;
                    var11['shouldShowPromotion'] = var12;
                    var5['extra'] = var11;
                    var5 = var7.bind(var10)(var6, var5);
                    var3 = null;
 436:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.openLazy;
                    var5 = {};
                    var8 = _closure2_slot0;
                    var5['balance'] = var8;
                    var8 = var4;
                    var4 = undefined;
                    if(!var8) { _fun0001_ip = 500; continue _fun0001 }
 484:
                    var8 = var3;
                    var8 = var9 != var8;
                    var4 = undefined;
                    if(!var8) { _fun0001_ip = 500; continue _fun0001 }
 496:
                    var4 = 'dark';
 500:
                    var5['themeOverride'] = var4;
                    var5['promotionConfig'] = var3;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 6;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 12;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.default;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = 'BalanceWidgetMenu';
                    var3 = var6.bind(var7)(var4, var3, var5);
                    return var2;
 535:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = new Array(1);
        var2[0] = var12;
        var5 = var5.bind(var8)(var3, var2);
        var3 = var8.useCallback;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openQuestHome;
            var2 = var2.bind(var3)();
            var2 = global;
            var4 = var2.setTimeout;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setVirtualCurrencyOnboardingPillEnabled;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = 100;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = new Array(0);
        var11 = var3.bind(var8)(var2, var1);
        var3 = _closure1_slot8;
        var1 = 15;
        var1 = var13[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {'accessibilityRole': 'button', 'accessibilityLabel': 'Orbs Balance'};
        var1['onPress'] = var5;
        var8 = var9.pressable;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var1['style'] = var5;
        var8 = _closure1_slot7;
        var5 = 16;
        var5 = var13[var5];
        var5 = var10.bind(var4)(var5);
        var7 = var5.Text;
        var5 = {'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
        var14 = var9.label;
        var5['style'] = var14;
        var14 = 9;
        var15 = var13[var14];
        var15 = var10.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var13[var14];
        var14 = var10.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.gGtZp6;
        var14 = var15.bind(var16)(var14);
        var5['children'] = var14;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot6;
        var6 = {};
        var9 = var9.pill;
        var6['style'] = var9;
        var9 = 17;
        var9 = var13[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.BalanceWidgetPill;
        var9 = {};
        var9['balance'] = var12;
        var12 = false;
        var9['showNotificationBadge'] = var12;
        var9['onPress'] = var11;
        var9 = var8.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();