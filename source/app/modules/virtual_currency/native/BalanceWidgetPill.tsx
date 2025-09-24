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
 0:
            var3 = arg1;
            var20 = var3.initialRenderedBalance;
            var4 = undefined;
            if(!(var20 === var4)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var20 = null;
 19:
            var _closure2_slot0 = var20;
            var19 = var3.balance;
            var _closure2_slot1 = var19;
            var18 = var3.animateBalanceChanges;
            if(!(var18 === var4)) { _fun0001_ip = 45; continue _fun0001 }
 43:
            var18 = false;
 45:
            var _closure2_slot2 = var18;
            var9 = var3.showNotificationBadge;
            var2 = var3.onPress;
            var _closure2_slot3 = var2;
            var6 = var3.disabled;
            var _closure2_slot4 = var6;
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
            var5 = null;
            var7 = var5 === var20;
            if(!var7) { _fun0001_ip = 130; continue _fun0001 }
 126:
            var7 = var5 === var19;
 130:
            _closure2_slot5 = var7;
            var8 = _closure1_slot12;
            var3 = 'android';
            var13 = var8.bind(var4)(var3);
            var11 = _closure1_slot4;
            var8 = var11.useContext;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 4;
            var3 = var14[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.AccessibilityPreferencesContext;
            var3 = var8.bind(var11)(var3);
            var3 = var3.reducedMotion;
            var14 = var3.enabled;
            _closure2_slot6 = var14;
            var12 = _closure1_slot6;
            var3 = var12.bind(var4)(var5);
            var16 = _closure1_slot3;
            var15 = 2;
            var3 = var16.bind(var4)(var3, var15);
            var11 = 0;
            var23 = var3[var11];
            _closure2_slot7 = var23;
            var8 = 1;
            var3 = var3[var8];
            _closure2_slot8 = var3;
            var3 = _closure1_slot7;
            var17 = var3.bind(var4)(var5);
            _closure2_slot9 = var17;
            var24 = var3.bind(var4)(var5);
            _closure2_slot10 = var24;
            var3 = var5 != var20;
            var3 = var12.bind(var4)(var3);
            var3 = var16.bind(var4)(var3, var15);
            var21 = var3[var11];
            var3 = var3[var8];
            _closure2_slot11 = var3;
            var3 = var5 == var20;
            if(var3) { _fun0001_ip = 308; continue _fun0001 }
 305:
            var3 = !var18;
 308:
            var12 = var12.bind(var4)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var12, var15);
            var15 = var3[var11];
            _closure2_slot12 = var15;
            var3 = var3[var8];
            _closure2_slot13 = var3;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 5;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var22 = var3.bind(var4)(var19);
            _closure2_slot14 = var22;
            var11 = _closure1_slot5;
            var3 = new Array(3);
            var3[0] = var6;
            var3[1] = var7;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
 10:
                    var2 = _closure2_slot5;
 14:
                    if(var2) { _fun0002_ip = 27; continue _fun0002 }
 17:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var11.bind(var4)(var2, var3);
            var3 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var17 = var11.bind(var4)(var3, var2);
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
            var16 = var11.bind(var4)(var3, var2);
            var3 = new Array(2);
            var3[0] = var23;
            var3[1] = var24;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0003_ip = 105; continue _fun0003 }
 9:
                    var3 = _closure2_slot9;
                    var4 = var4 > var2;
                    var2 = 'spend';
                    if(!var4) { _fun0003_ip = 35; continue _fun0003 }
 29:
                    var2 = 'earn';
 35:
                    var3['current'] = var2;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0003_ip = 80; continue _fun0003 }
 58:
                    var4 = _closure2_slot8;
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0003_ip = 105; continue _fun0003;
 80:
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 105; continue _fun0003 }
 95:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var11.bind(var4)(var2, var3);
            _closure2_slot15 = var12;
            var11 = _closure1_slot4;
            var25 = var11.useEffect;
            var3 = new Array(6);
            var3[0] = var20;
            var3[1] = var19;
            var3[2] = var15;
            var3[3] = var18;
            var3[4] = var14;
            var3[5] = var12;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 72; continue _fun0004 }
 15:
                    var3 = _closure2_slot1;
                    if(!(var4 !== var3)) { _fun0004_ip = 72; continue _fun0004 }
 23:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0004_ip = 72; continue _fun0004 }
 30:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = _closure2_slot2;
                            if(!var1) { _fun0005_ip = 17; continue _fun0005 }
 10:
                            var3 = _closure2_slot6;
                            var1 = !var3;
 17:
                            if(!var1) { _fun0005_ip = 43; continue _fun0005 }
 20:
                            var4 = _closure2_slot15;
                            var3 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var3 = var3 - var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
 43:
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
 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var25.bind(var11)(var2, var3);
            var3 = var11.useEffect;
            var2 = new Array(7);
            var2[0] = var19;
            var2[1] = var22;
            var2[2] = var23;
            var2[3] = var15;
            var2[4] = var18;
            var2[5] = var14;
            var2[6] = var12;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0006_ip = 24; continue _fun0006 }
 16:
                    var3 = _closure2_slot14;
                    var2 = var4 !== var3;
 24:
                    if(!var2) { _fun0006_ip = 39; continue _fun0006 }
 27:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot14;
                    var2 = var4 !== var3;
 39:
                    if(!var2) { _fun0006_ip = 46; continue _fun0006 }
 42:
                    var2 = _closure2_slot12;
 46:
                    if(!var2) { _fun0006_ip = 53; continue _fun0006 }
 49:
                    var2 = _closure2_slot2;
 53:
                    if(!var2) { _fun0006_ip = 63; continue _fun0006 }
 56:
                    var3 = _closure2_slot6;
                    var2 = !var3;
 63:
                    if(!var2) { _fun0006_ip = 89; continue _fun0006 }
 66:
                    var3 = _closure2_slot15;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot14;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var11)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot8;
            var1 = {};
            var1['onPress'] = var8;
            var8 = var6;
            if(var6) { _fun0001_ip = 587; continue _fun0001 }
 584:
            var8 = var7;
 587:
            var1['disabled'] = var8;
            var8 = 0.8;
            var1['activeOpacity'] = var8;
            var8 = var13.clickable;
            var1['style'] = var8;
            var8 = arg2;
            var1['ref'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var5 = var5 != var19;
            var11 = 'loading';
            if(!var5) { _fun0001_ip = 645; continue _fun0001 }
 642:
            var11 = var19;
 645:
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Orbs balance: ';
            var5 = var8.bind(var5)(var11);
            var1['accessibilityLabel'] = var5;
            var5 = {};
            if(var6) { _fun0001_ip = 681; continue _fun0001 }
 678:
            var6 = var7;
 681:
            var5['disabled'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot9;
            var5 = {};
            var8 = var13.container;
            var5['style'] = var8;
            var12 = _closure1_slot10;
            var8 = {};
            var11 = var13.orbsLottieContainer;
            var8['style'] = var11;
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var11 = 6;
            var11 = var22[var11];
            var11 = var15.bind(var4)(var11);
            var14 = var11.OrbLottieAnimation;
            var11 = {};
            var11['ref'] = var24;
            var11['animationType'] = var23;
            var11 = var12.bind(var4)(var14, var11);
            var8['children'] = var11;
            var11 = var12.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = {};
            var14 = var13.balanceCounterContainer;
            var11['style'] = var14;
            var14 = 7;
            var14 = var22[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.BalanceCounter;
            var14 = {};
            if(!var21) { _fun0001_ip = 824; continue _fun0001 }
 821:
            var19 = var20;
 824:
            var14['value'] = var19;
            var14['valueChangeAnimationEnabled'] = var18;
            var14['onValueChange'] = var17;
            var14['onValueReached'] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 8;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
            var14['targetTotalCounterTime'] = var16;
            var16 = var13.balanceText;
            var14['style'] = var16;
            var14 = var12.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var12.bind(var4)(var6, var11);
            var8[1] = var11;
            if(!var9) { _fun0001_ip = 935; continue _fun0001 }
 909:
            var12 = _closure1_slot10;
            var11 = _closure1_slot9;
            var10 = {};
            var13 = var13.notificationBadge;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 935:
            var8[2] = var9;
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
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = {};
            var2 = {'height': 36, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 10;
            var3 = var7[var4];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var3 = var7[var4];
            var3 = var6.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_12;
            var2['paddingHorizontal'] = var3;
            var3 = var7[var4];
            var3 = var6.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_4;
            var2['paddingVertical'] = var3;
            var3 = var7[var4];
            var3 = var6.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var3;
            var3 = 0;
            var2['borderWidth'] = var3;
            var1['clickable'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexShrink': 0, 'position': 'relative', 'gap': 4};
            var1['container'] = var2;
            var2 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
            var1['orbsLottieContainer'] = var2;
            var2 = {'position': 'absolute', 'right': -4.5, 'top': -4.5, 'width': 8, 'height': 8};
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.xs;
            var2['borderRadius'] = var8;
            var1['notificationBadge'] = var2;
            var2 = {'justifyContent': 'center', 'alignItems': 'flex-end'};
            var1['balanceCounterContainer'] = var2;
            var2 = {};
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.REDESIGN_BUTTON_TERTIARY_TEXT;
            var2['color'] = var4;
            var4 = 'right';
            var2['textAlign'] = var4;
            var5 = 'android';
            var4 = arg1;
            if(!(var5 === var4)) { _fun0007_ip = 289; continue _fun0007 }
 286:
            var3 = 16;
 289:
            var2['lineHeight'] = var3;
            var1['balanceText'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceWidgetPill'] = var2;
    return var1;
})();