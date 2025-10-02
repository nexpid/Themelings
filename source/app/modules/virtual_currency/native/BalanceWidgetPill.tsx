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
            var19 = var3.initialRenderedBalance;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = null;
case 2:
            var _closure2_slot0 = var19;
            var18 = var3.balance;
            var _closure2_slot1 = var18;
            var17 = var3.animateBalanceChanges;
            if(!(var17 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var17 = false;
case 4:
            var _closure2_slot2 = var17;
            var2 = var3.onPress;
            var _closure2_slot3 = var2;
            var6 = var3.disabled;
            var _closure2_slot4 = var6;
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
            var3 = null;
            var7 = var3 === var19;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var3 === var18;
case 8:
            _closure2_slot5 = var7;
            var8 = _closure1_slot12;
            var5 = 'android';
            var13 = var8.bind(var4)(var5, var9);
            var9 = _closure1_slot4;
            var8 = var9.useContext;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 4;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.AccessibilityPreferencesContext;
            var5 = var8.bind(var9)(var5);
            var5 = var5.reducedMotion;
            var10 = var5.enabled;
            _closure2_slot6 = var10;
            var9 = _closure1_slot6;
            var5 = var9.bind(var4)(var3);
            var15 = _closure1_slot3;
            var11 = 2;
            var12 = var15.bind(var4)(var5, var11);
            var8 = 0;
            var22 = var12[var8];
            _closure2_slot7 = var22;
            var5 = 1;
            var12 = var12[var5];
            _closure2_slot8 = var12;
            var12 = _closure1_slot7;
            var16 = var12.bind(var4)(var3);
            _closure2_slot9 = var16;
            var23 = var12.bind(var4)(var3);
            _closure2_slot10 = var23;
            var12 = var3 != var19;
            var12 = var9.bind(var4)(var12);
            var12 = var15.bind(var4)(var12, var11);
            var20 = var12[var8];
            var12 = var12[var5];
            _closure2_slot11 = var12;
            var3 = var3 == var19;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = !var17;
case 10:
            var9 = var9.bind(var4)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var9, var11);
            var11 = var3[var8];
            _closure2_slot12 = var11;
            var3 = var3[var5];
            _closure2_slot13 = var3;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var12 = var3.bind(var4)(var18);
            _closure2_slot14 = var12;
            var8 = _closure1_slot5;
            var3 = new Array(3);
            var3[0] = var6;
            var3[1] = var7;
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
            var5 = var8.bind(var4)(var2, var3);
            var3 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var16 = var8.bind(var4)(var3, var2);
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
            var15 = var8.bind(var4)(var3, var2);
            var3 = new Array(2);
            var3[0] = var22;
            var3[1] = var23;
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
                    if(!(var3 !== var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure2_slot8;
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0003_ip = 15; continue _fun0003;
case 19:
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 15; continue _fun0003 }
case 21:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var8.bind(var4)(var2, var3);
            _closure2_slot15 = var9;
            var8 = _closure1_slot4;
            var21 = var8.useEffect;
            var3 = new Array(6);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var11;
            var3[3] = var17;
            var3[4] = var10;
            var3[5] = var9;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var3 = _closure2_slot1;
                    if(!(var4 !== var3)) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 25:
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
case 26:
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
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var21.bind(var8)(var2, var3);
            var3 = var8.useEffect;
            var2 = new Array(7);
            var2[0] = var18;
            var2[1] = var12;
            var2[2] = var22;
            var2[3] = var11;
            var2[4] = var17;
            var2[5] = var10;
            var2[6] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var3 = _closure2_slot14;
                    var2 = var4 !== var3;
case 27:
                    if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 14:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot14;
                    var2 = var4 !== var3;
case 29:
                    if(!var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var2 = _closure2_slot12;
case 30:
                    if(!var2) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var2 = _closure2_slot2;
case 32:
                    if(!var2) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var3 = _closure2_slot6;
                    var2 = !var3;
case 34:
                    if(!var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var3 = _closure2_slot15;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot14;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot8;
            var1 = {};
            var1['onPress'] = var5;
            var5 = var6;
            if(var6) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var5 = var7;
case 38:
            var1['disabled'] = var5;
            var5 = 0.8;
            var1['activeOpacity'] = var5;
            var5 = var13.clickable;
            var1['style'] = var5;
            var5 = arg2;
            var1['ref'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var5 = var12[var8];
            var5 = var11.bind(var4)(var5);
            var10 = var5.intl;
            if(var7) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var21 = var10.formatToPlainString;
            var5 = var12[var8];
            var5 = var11.bind(var4)(var5);
            var5 = var5.t;
            var9 = var5.zPaLLy;
            var5 = {};
            var5['balance'] = var18;
            var5 = var21.bind(var10)(var9, var5);
            _fun0001_ip = 42; continue _fun0001;
case 40:
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.pfChQk;
            var5 = var9.bind(var10)(var8);
case 42:
            var1['accessibilityLabel'] = var5;
            var5 = {};
            if(var6) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var6 = var7;
case 43:
            var5['disabled'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot9;
            var5 = {};
            var8 = var13.container;
            var5['style'] = var8;
            var10 = _closure1_slot10;
            var8 = {};
            var9 = var13.orbsLottieContainer;
            var8['style'] = var9;
            var12 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 7;
            var9 = var21[var9];
            var9 = var12.bind(var4)(var9);
            var11 = var9.OrbLottieAnimation;
            var9 = {};
            var9['ref'] = var23;
            var9['animationType'] = var22;
            var9 = var10.bind(var4)(var11, var9);
            var8['children'] = var9;
            var9 = var10.bind(var4)(var6, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var11 = var13.balanceCounterContainer;
            var9['style'] = var11;
            var11 = 8;
            var11 = var21[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.BalanceCounter;
            var11 = {};
            if(!var20) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var18 = var19;
case 45:
            var11['value'] = var18;
            var11['valueChangeAnimationEnabled'] = var17;
            var11['onValueChange'] = var16;
            var11['onValueReached'] = var15;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 9;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
            var11['targetTotalCounterTime'] = var14;
            var13 = var13.balanceText;
            var11['style'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var9['children'] = var11;
            var9 = var10.bind(var4)(var6, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var1)(var2);
    var4 = 'BalanceWidgetPill';
    var2['displayName'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg2;
            var1 = 'primary';
            if(!(var1 !== var2)) { _fun0007_ip = 47; continue _fun0007 }
case 12:
            var1 = 'secondary';
            if(!(var1 !== var2)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var6 = undefined;
            var1 = 'tertiary';
            var3 = undefined;
            var4 = undefined;
            if(!(var1 === var2)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 11;
            var2 = var7[var1];
            var2 = var5.bind(var6)(var2);
            var2 = var2.colors;
            var3 = var2.BG_MOD_SUBTLE;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.colors;
            var4 = var1.REDESIGN_BUTTON_TERTIARY_TEXT;
            _fun0007_ip = 50; continue _fun0007;
case 48:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 11;
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
case 47:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 11;
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
            var5 = 11;
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
            if(!(var5 === var4)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var3 = 16;
case 52:
            var2['lineHeight'] = var3;
            var1['balanceText'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceWidgetPill'] = var2;
    return var1;
})();