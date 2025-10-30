// app/modules/virtual_currency/native/BalanceWidgetPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var8 = var6[var2];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.forwardRef;
    var8 = var2.useCallback;
    var _closure1_slot5 = var8;
    var8 = var2.useState;
    var _closure1_slot6 = var8;
    var2 = var2.useRef;
    var _closure1_slot7 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.Platform;
    var8 = var2.TouchableOpacity;
    var _closure1_slot8 = var8;
    var2 = var2.View;
    var _closure1_slot9 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot10 = var8;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var26 = var3.initialRenderedBalance;
            var4 = undefined;
            if(!(var26 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var26 = null;
case 2:
            var _closure2_slot0 = var26;
            var25 = var3.balance;
            var _closure2_slot1 = var25;
            var24 = var3.animateBalanceChanges;
            if(!(var24 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var24 = false;
case 4:
            var _closure2_slot2 = var24;
            var2 = var3.onPress;
            var _closure2_slot3 = var2;
            var14 = var3.disabled;
            var _closure2_slot4 = var14;
            var9 = var3.variant;
            if(!(var9 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = 'tertiary';
case 6:
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var13 = _closure1_slot4;
            var5 = var13.useRef;
            var3 = null;
            var11 = var5.bind(var13)(var3);
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var12 = var8.bind(var4)(var5);
            var6 = var12.useVirtualCurrencyOnboardingEnabled;
            var5 = {};
            var15 = 'BalanceWidgetPill';
            var5['location'] = var15;
            var5 = var6.bind(var12)(var5);
            var6 = var5.enabled;
            var5 = 5;
            var5 = var10[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useVirtualCurrencyOnboardingCoachmark;
            var12 = var5.bind(var8)();
            var10 = var13.useCallback;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideVirtualCurrencyOnboardingCoachmark;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5 = new Array(0);
            var10 = var10.bind(var13)(var8, var5);
            var15 = var3 === var26;
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var3 === var25;
case 8:
            _closure2_slot5 = var15;
            var8 = _closure1_slot12;
            var5 = 'android';
            var21 = var8.bind(var4)(var5, var9);
            var9 = _closure1_slot4;
            var8 = var9.useContext;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 7;
            var5 = var16[var5];
            var5 = var13.bind(var4)(var5);
            var5 = var5.AccessibilityPreferencesContext;
            var5 = var8.bind(var9)(var5);
            var5 = var5.reducedMotion;
            var9 = var5.enabled;
            _closure2_slot6 = var9;
            var13 = _closure1_slot6;
            var5 = var13.bind(var4)(var3);
            var18 = _closure1_slot3;
            var16 = 2;
            var17 = var18.bind(var4)(var5, var16);
            var8 = 0;
            var29 = var17[var8];
            _closure2_slot7 = var29;
            var5 = 1;
            var17 = var17[var5];
            _closure2_slot8 = var17;
            var17 = _closure1_slot7;
            var19 = var17.bind(var4)(var3);
            _closure2_slot9 = var19;
            var30 = var17.bind(var4)(var3);
            _closure2_slot10 = var30;
            var17 = var3 != var26;
            var17 = var13.bind(var4)(var17);
            var17 = var18.bind(var4)(var17, var16);
            var27 = var17[var8];
            var17 = var17[var5];
            _closure2_slot11 = var17;
            var3 = var3 == var26;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = !var24;
case 10:
            var13 = var13.bind(var4)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var13, var16);
            var16 = var3[var8];
            _closure2_slot12 = var16;
            var3 = var3[var5];
            _closure2_slot13 = var3;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var17 = var3.bind(var4)(var25);
            _closure2_slot14 = var17;
            var5 = _closure1_slot5;
            var3 = new Array(3);
            var3[0] = var14;
            var3[1] = var15;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = _closure2_slot5;
case 12:
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 3:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var5.bind(var4)(var2, var3);
            var3 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var23 = var5.bind(var4)(var3, var2);
            var3 = function() {
                var2 = _closure2_slot9;
                var3 = null;
                var2['current'] = var3;
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var22 = var5.bind(var4)(var3, var2);
            var3 = new Array(2);
            var3[0] = var29;
            var3[1] = var30;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure2_slot9;
                    var4 = var4 > var2;
                    var2 = 'spend';
                    if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = 'earn';
case 17:
                    var3['current'] = var2;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 19:
                    var4 = _closure2_slot8;
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0003_ip = 15; continue _fun0003;
case 6:
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 15; continue _fun0003 }
case 20:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var5.bind(var4)(var2, var3);
            _closure2_slot15 = var8;
            var5 = _closure1_slot4;
            var18 = var5.useEffect;
            var3 = new Array(6);
            var3[0] = var26;
            var3[1] = var25;
            var3[2] = var16;
            var3[3] = var24;
            var3[4] = var9;
            var3[5] = var8;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var3 = _closure2_slot1;
                    if(!(var4 !== var3)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0004_ip = 21; continue _fun0004 }
case 24:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure2_slot2;
                            if(!var1) { _fun0005_ip = 3; continue _fun0005 }
case 13:
                            var3 = _closure2_slot6;
                            var1 = !var3;
case 3:
                            if(!var1) { _fun0005_ip = 5; continue _fun0005 }
case 25:
                            var4 = _closure2_slot15;
                            var3 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var3 = var3 - var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
case 5:
                            var4 = _closure2_slot11;
                            var1 = undefined;
                            var3 = false;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure2_slot13;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = 1250;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var18.bind(var5)(var2, var3);
            var3 = var5.useEffect;
            var2 = new Array(7);
            var2[0] = var25;
            var2[1] = var17;
            var2[2] = var29;
            var2[3] = var16;
            var2[4] = var24;
            var2[5] = var9;
            var2[6] = var8;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var3 = _closure2_slot14;
                    var2 = var4 !== var3;
case 26:
                    if(!var2) { _fun0006_ip = 28; continue _fun0006 }
case 14:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot14;
                    var2 = var4 !== var3;
case 28:
                    if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var2 = _closure2_slot12;
case 29:
                    if(!var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var2 = _closure2_slot2;
case 31:
                    if(!var2) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var3 = _closure2_slot6;
                    var2 = !var3;
case 33:
                    if(!var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var3 = _closure2_slot15;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot14;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot9;
            var1 = {};
            var1['ref'] = var11;
            var9 = _closure1_slot10;
            var8 = _closure1_slot8;
            var5 = {};
            var5['onPress'] = var13;
            var13 = var14;
            if(var14) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var13 = var15;
case 37:
            var5['disabled'] = var13;
            var13 = 0.8;
            var5['activeOpacity'] = var13;
            var13 = var21.clickable;
            var5['style'] = var13;
            var13 = arg2;
            var5['ref'] = var13;
            var13 = 'button';
            var5['accessibilityRole'] = var13;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 9;
            var13 = var20[var16];
            var13 = var19.bind(var4)(var13);
            var18 = var13.intl;
            if(var15) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var28 = var18.formatToPlainString;
            var13 = var20[var16];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var17 = var13.zPaLL9;
            var13 = {};
            var13['balance'] = var25;
            var13 = var28.bind(var18)(var17, var13);
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.pfChQr;
            var13 = var17.bind(var18)(var16);
case 41:
            var5['accessibilityLabel'] = var13;
            var13 = {};
            if(var14) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var14 = var15;
case 42:
            var13['disabled'] = var14;
            var5['accessibilityState'] = var13;
            var15 = _closure1_slot11;
            var14 = _closure1_slot9;
            var13 = {};
            var16 = var21.container;
            var13['style'] = var16;
            var18 = _closure1_slot10;
            var16 = {};
            var17 = var21.orbsLottieContainer;
            var16['style'] = var17;
            var20 = _closure1_slot0;
            var28 = _closure1_slot2;
            var17 = 10;
            var17 = var28[var17];
            var17 = var20.bind(var4)(var17);
            var19 = var17.OrbLottieAnimation;
            var17 = {};
            var17['ref'] = var30;
            var17['animationType'] = var29;
            var17 = var18.bind(var4)(var19, var17);
            var16['children'] = var17;
            var17 = var18.bind(var4)(var14, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var17 = {};
            var19 = var21.balanceCounterContainer;
            var17['style'] = var19;
            var19 = 11;
            var19 = var28[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.BalanceCounter;
            var19 = {};
            if(!var27) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var25 = var26;
case 44:
            var19['value'] = var25;
            var19['valueChangeAnimationEnabled'] = var24;
            var19['onValueChange'] = var23;
            var19['onValueReached'] = var22;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 12;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
            var19['targetTotalCounterTime'] = var22;
            var21 = var21.balanceText;
            var19['style'] = var21;
            var19 = var18.bind(var4)(var20, var19);
            var17['children'] = var19;
            var17 = var18.bind(var4)(var14, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var5['children'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 13;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['show'] = var12;
            var7['targetRef'] = var11;
            var7['onClose'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 46:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var1)(var2);
    var4 = 'BalanceWidgetPill';
    var2['displayName'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg2;
            var1 = 'primary';
            if(!(var1 !== var2)) { _fun0007_ip = 48; continue _fun0007 }
case 12:
            var1 = 'secondary';
            if(!(var1 !== var2)) { _fun0007_ip = 20; continue _fun0007 }
case 49:
            var6 = undefined;
            var1 = 'tertiary';
            var3 = undefined;
            var4 = undefined;
            if(!(var1 === var2)) { _fun0007_ip = 50; continue _fun0007 }
case 28:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var2 = var7[var1];
            var2 = var5.bind(var6)(var2);
            var2 = var2.colors;
            var3 = var2.BG_MOD_SUBTLE;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.colors;
            var4 = var1.REDESIGN_BUTTON_TERTIARY_TEXT;
            _fun0007_ip = 50; continue _fun0007;
case 20:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var2 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.colors;
            var3 = var2.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.colors;
            var4 = var1.REDESIGN_BUTTON_SECONDARY_TEXT;
            _fun0007_ip = 50; continue _fun0007;
case 48:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var2 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.colors;
            var3 = var2.REDESIGN_BUTTON_PRIMARY_BACKGROUND;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.colors;
            var4 = var1.REDESIGN_BUTTON_PRIMARY_TEXT;
case 50:
            var1 = {};
            var2 = {'height': 36, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 15;
            var9 = var8[var5];
            var6 = undefined;
            var9 = var7.bind(var6)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var2['borderRadius'] = var9;
            var9 = var8[var5];
            var9 = var7.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var2['paddingHorizontal'] = var9;
            var9 = var8[var5];
            var9 = var7.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_4;
            var2['paddingVertical'] = var9;
            var2['backgroundColor'] = var3;
            var3 = 0;
            var2['borderWidth'] = var3;
            var1['clickable'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexShrink': 0, 'position': 'relative', 'gap': 4};
            var1['container'] = var2;
            var2 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
            var1['orbsLottieContainer'] = var2;
            var2 = {'position': 'absolute', 'right': -4.5, 'top': -4.5, 'width': 8, 'height': 8};
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.radii;
            var5 = var5.xs;
            var2['borderRadius'] = var5;
            var1['notificationBadge'] = var2;
            var2 = {'justifyContent': 'center', 'alignItems': 'flex-end'};
            var1['balanceCounterContainer'] = var2;
            var2 = {};
            var2['color'] = var4;
            var4 = 'right';
            var2['textAlign'] = var4;
            var5 = 'android';
            var4 = arg1;
            if(!(var5 === var4)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var3 = 16;
case 51:
            var2['lineHeight'] = var3;
            var1['balanceText'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceWidgetPill'] = var2;
    return var1;
})();