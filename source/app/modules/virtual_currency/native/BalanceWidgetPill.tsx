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
            var21 = var3.initialRenderedBalance;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = null;
case 2:
            var _closure2_slot0 = var21;
            var20 = var3.balance;
            var _closure2_slot1 = var20;
            var19 = var3.animateBalanceChanges;
            if(!(var19 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var19 = false;
case 4:
            var _closure2_slot2 = var19;
            var2 = var3.onPress;
            var _closure2_slot3 = var2;
            var8 = var3.disabled;
            var _closure2_slot4 = var8;
            var10 = var3.variant;
            if(!(var10 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = 'tertiary';
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
            var3 = null;
            var9 = var3 === var21;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var3 === var20;
case 8:
            _closure2_slot5 = var9;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 4;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = 'BalanceWidgetPill';
            var7 = var6.bind(var4)(var5);
            var6 = _closure1_slot12;
            var5 = 'android';
            var15 = var6.bind(var4)(var5, var10, var7);
            var7 = _closure1_slot4;
            var6 = var7.useContext;
            var10 = _closure1_slot0;
            var5 = 5;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.AccessibilityPreferencesContext;
            var5 = var6.bind(var7)(var5);
            var5 = var5.reducedMotion;
            var10 = var5.enabled;
            _closure2_slot6 = var10;
            var7 = _closure1_slot6;
            var5 = var7.bind(var4)(var3);
            var13 = _closure1_slot3;
            var11 = 2;
            var12 = var13.bind(var4)(var5, var11);
            var6 = 0;
            var24 = var12[var6];
            _closure2_slot7 = var24;
            var5 = 1;
            var12 = var12[var5];
            _closure2_slot8 = var12;
            var12 = _closure1_slot7;
            var14 = var12.bind(var4)(var3);
            _closure2_slot9 = var14;
            var25 = var12.bind(var4)(var3);
            _closure2_slot10 = var25;
            var12 = var3 != var21;
            var12 = var7.bind(var4)(var12);
            var12 = var13.bind(var4)(var12, var11);
            var22 = var12[var6];
            var12 = var12[var5];
            _closure2_slot11 = var12;
            var3 = var3 == var21;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = !var19;
case 10:
            var7 = var7.bind(var4)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var7, var11);
            var11 = var3[var6];
            _closure2_slot12 = var11;
            var3 = var3[var5];
            _closure2_slot13 = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var12 = var3.bind(var4)(var20);
            _closure2_slot14 = var12;
            var5 = _closure1_slot5;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var9;
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
            var7 = var5.bind(var4)(var2, var3);
            var3 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var18 = var5.bind(var4)(var3, var2);
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
            var17 = var5.bind(var4)(var3, var2);
            var3 = new Array(2);
            var3[0] = var24;
            var3[1] = var25;
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
            var6 = var5.bind(var4)(var2, var3);
            _closure2_slot15 = var6;
            var5 = _closure1_slot4;
            var13 = var5.useEffect;
            var3 = new Array(6);
            var3[0] = var21;
            var3[1] = var20;
            var3[2] = var11;
            var3[3] = var19;
            var3[4] = var10;
            var3[5] = var6;
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
            var2 = var13.bind(var5)(var2, var3);
            var3 = var5.useEffect;
            var2 = new Array(7);
            var2[0] = var20;
            var2[1] = var12;
            var2[2] = var24;
            var2[3] = var11;
            var2[4] = var19;
            var2[5] = var10;
            var2[6] = var6;
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
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var6 = _closure1_slot8;
            var5 = {};
            var5['onPress'] = var7;
            var7 = var8;
            if(var8) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var7 = var9;
case 37:
            var5['disabled'] = var7;
            var7 = 0.8;
            var5['activeOpacity'] = var7;
            var7 = var15.clickable;
            var5['style'] = var7;
            var7 = arg2;
            var5['ref'] = var7;
            var7 = 'button';
            var5['accessibilityRole'] = var7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 7;
            var7 = var14[var10];
            var7 = var13.bind(var4)(var7);
            var12 = var7.intl;
            if(var9) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var23 = var12.formatToPlainString;
            var7 = var14[var10];
            var7 = var13.bind(var4)(var7);
            var7 = var7.t;
            var11 = var7.zPaLL9;
            var7 = {};
            var7['balance'] = var20;
            var7 = var23.bind(var12)(var11, var7);
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.pfChQr;
            var7 = var11.bind(var12)(var10);
case 41:
            var5['accessibilityLabel'] = var7;
            var7 = {};
            if(var8) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var8 = var9;
case 42:
            var7['disabled'] = var8;
            var5['accessibilityState'] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot9;
            var7 = {};
            var10 = var15.container;
            var7['style'] = var10;
            var12 = _closure1_slot10;
            var10 = {};
            var11 = var15.orbsLottieContainer;
            var10['style'] = var11;
            var14 = _closure1_slot0;
            var23 = _closure1_slot2;
            var11 = 8;
            var11 = var23[var11];
            var11 = var14.bind(var4)(var11);
            var13 = var11.OrbLottieAnimation;
            var11 = {};
            var11['ref'] = var25;
            var11['animationType'] = var24;
            var11 = var12.bind(var4)(var13, var11);
            var10['children'] = var11;
            var11 = var12.bind(var4)(var8, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var13 = var15.balanceCounterContainer;
            var11['style'] = var13;
            var13 = 9;
            var13 = var23[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.BalanceCounter;
            var13 = {};
            if(!var22) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var20 = var21;
case 44:
            var13['value'] = var20;
            var13['valueChangeAnimationEnabled'] = var19;
            var13['onValueChange'] = var18;
            var13['onValueReached'] = var17;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 10;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
            var13['targetTotalCounterTime'] = var16;
            var15 = var15.balanceText;
            var13['style'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var11['children'] = var13;
            var11 = var12.bind(var4)(var8, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var1)(var2);
    var4 = 'BalanceWidgetPill';
    var2['displayName'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg2;
            var1 = 'primary';
            if(!(var1 !== var2)) { _fun0007_ip = 46; continue _fun0007 }
case 12:
            var1 = 'secondary';
            if(!(var1 !== var2)) { _fun0007_ip = 20; continue _fun0007 }
case 47:
            var6 = undefined;
            var1 = 'tertiary';
            var5 = undefined;
            var4 = undefined;
            if(!(var1 === var2)) { _fun0007_ip = 48; continue _fun0007 }
case 28:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 12;
            var2 = var7[var1];
            var2 = var3.bind(var6)(var2);
            var2 = var2.colors;
            var5 = var2.BACKGROUND_MOD_SUBTLE;
            var1 = var7[var1];
            var1 = var3.bind(var6)(var1);
            var1 = var1.colors;
            var4 = var1.REDESIGN_BUTTON_TERTIARY_TEXT;
            _fun0007_ip = 48; continue _fun0007;
case 20:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 12;
            var2 = var7[var1];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var2 = var2.colors;
            var5 = var2.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.colors;
            var4 = var1.CONTROL_SECONDARY_TEXT_DEFAULT;
            _fun0007_ip = 48; continue _fun0007;
case 46:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 12;
            var2 = var7[var1];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var2 = var2.colors;
            var5 = var2.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.colors;
            var4 = var1.CONTROL_PRIMARY_TEXT_DEFAULT;
case 48:
            var1 = {};
            var2 = {'height': 36, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 12;
            var9 = var8[var6];
            var3 = undefined;
            var9 = var7.bind(var3)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var2['borderRadius'] = var9;
            var9 = var8[var6];
            var9 = var7.bind(var3)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var2['paddingHorizontal'] = var9;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_4;
            var2['paddingVertical'] = var6;
            var6 = arg3;
            if(var6) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var3 = var5;
case 49:
            var2['backgroundColor'] = var3;
            var3 = 0;
            var2['borderWidth'] = var3;
            var1['clickable'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexShrink': 0, 'position': 'relative', 'gap': 4};
            var1['container'] = var2;
            var2 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
            var1['orbsLottieContainer'] = var2;
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceWidgetPill'] = var2;
    return var1;
})();