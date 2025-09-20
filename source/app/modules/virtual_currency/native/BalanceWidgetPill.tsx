// app/modules/virtual_currency/native/BalanceWidgetPill.tsx
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
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var13 = 0;
    var2 = var6[var13];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
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
            var2 = arg1;
            var20 = var2.balance;
            var _closure2_slot0 = var20;
            var9 = var2.showNotificationBadge;
            var3 = var2.onPress;
            var _closure2_slot1 = var3;
            var6 = var2.disabled;
            var _closure2_slot2 = var6;
            var5 = null;
            var7 = var5 === var20;
            var _closure2_slot3 = var7;
            var2 = _closure1_slot12;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var2 = _closure1_slot6;
            var11 = var2.bind(var4)(var5);
            var8 = _closure1_slot3;
            var2 = 2;
            var8 = var8.bind(var4)(var11, var2);
            var2 = 0;
            var15 = var8[var2];
            var _closure2_slot4 = var15;
            var2 = 1;
            var2 = var8[var2];
            var _closure2_slot5 = var2;
            var8 = _closure1_slot7;
            var11 = var8.bind(var4)(var5);
            var _closure2_slot6 = var11;
            var21 = var8.bind(var4)(var5);
            var _closure2_slot7 = var21;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 4;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var14 = var8.bind(var4)(var20);
            var _closure2_slot8 = var14;
            var12 = _closure1_slot5;
            var8 = new Array(3);
            var8[0] = var6;
            var8[1] = var7;
            var8[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
 10:
                    var2 = _closure2_slot3;
 14:
                    if(var2) { _fun0002_ip = 27; continue _fun0002 }
 17:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var12.bind(var4)(var3, var8);
            var11 = function() {
                var1 = undefined;
                return var1;
            };
            var3 = new Array(0);
            var19 = var12.bind(var4)(var11, var3);
            var11 = function() {
                var2 = _closure2_slot6;
                var3 = null;
                var2['current'] = var3;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var3 = new Array(0);
            var16 = var12.bind(var4)(var11, var3);
            var11 = _closure1_slot4;
            var12 = var11.useEffect;
            var3 = new Array(4);
            var3[0] = var20;
            var3[1] = var14;
            var3[2] = var15;
            var3[3] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 !== var3)) { _fun0003_ip = 142; continue _fun0003 }
 16:
                    var3 = _closure2_slot8;
                    if(!(var1 !== var3)) { _fun0003_ip = 142; continue _fun0003 }
 24:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot8;
                    if(!(var4 !== var3)) { _fun0003_ip = 142; continue _fun0003 }
 36:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot8;
                    var6 = var4 - var3;
                    var5 = 0;
                    if(!(var5 !== var6)) { _fun0003_ip = 146; continue _fun0003 }
 54:
                    var4 = _closure2_slot6;
                    var3 = 'spend';
                    if(!(var6 > var5)) { _fun0003_ip = 74; continue _fun0003 }
 68:
                    var3 = 'earn';
 74:
                    var4['current'] = var3;
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot6;
                    var3 = var3.current;
                    if(!(var4 !== var3)) { _fun0003_ip = 119; continue _fun0003 }
 97:
                    var5 = _closure2_slot5;
                    var3 = _closure2_slot6;
                    var4 = var3.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    _fun0003_ip = 142; continue _fun0003;
 119:
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0003_ip = 142; continue _fun0003 }
 132:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
 142:
                    var1 = undefined;
                    return var1;
 146:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var11)(var2, var3);
            var3 = var11.useEffect;
            var2 = new Array(1);
            var2[0] = var15;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
 13:
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0004_ip = 36; continue _fun0004 }
 26:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
 36:
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
            if(var6) { _fun0001_ip = 314; continue _fun0001 }
 311:
            var8 = var7;
 314:
            var1['disabled'] = var8;
            var8 = 0.8;
            var1['activeOpacity'] = var8;
            var8 = var13.clickable;
            var1['style'] = var8;
            var8 = arg2;
            var1['ref'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var5 = var5 != var20;
            var11 = 'loading';
            if(!var5) { _fun0001_ip = 372; continue _fun0001 }
 369:
            var11 = var20;
 372:
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Orbs balance: ';
            var5 = var8.bind(var5)(var11);
            var1['accessibilityLabel'] = var5;
            var5 = {};
            if(var6) { _fun0001_ip = 408; continue _fun0001 }
 405:
            var6 = var7;
 408:
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
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 5;
            var11 = var18[var11];
            var11 = var17.bind(var4)(var11);
            var14 = var11.OrbLottieAnimation;
            var11 = {};
            var11['ref'] = var21;
            var11['animationType'] = var15;
            var11 = var12.bind(var4)(var14, var11);
            var8['children'] = var11;
            var11 = var12.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = {};
            var14 = var13.balanceCounterContainer;
            var11['style'] = var14;
            var14 = 6;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var15 = var14.BalanceCounter;
            var14 = {};
            var14['value'] = var20;
            var14['onValueChange'] = var19;
            var14['onValueReached'] = var16;
            var16 = 7;
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
            if(!var9) { _fun0001_ip = 643; continue _fun0001 }
 617:
            var12 = _closure1_slot10;
            var11 = _closure1_slot9;
            var10 = {};
            var13 = var13.notificationBadge;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 643:
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
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'height': 36, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
    var11 = 9;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['paddingHorizontal'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['paddingVertical'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10['backgroundColor'] = var14;
    var10['borderWidth'] = var13;
    var4['clickable'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexShrink': 0, 'position': 'relative', 'gap': 4};
    var4['container'] = var10;
    var10 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['orbsLottieContainer'] = var10;
    var10 = {'position': 'absolute', 'right': -4.5, 'top': -4.5, 'width': 8, 'height': 8};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderRadius'] = var13;
    var4['notificationBadge'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'flex-end'};
    var4['balanceCounterContainer'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_BUTTON_TERTIARY_TEXT;
    var10['color'] = var11;
    var11 = 'right';
    var10['textAlign'] = var11;
    var4['balanceText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceWidgetPill'] = var2;
    return var1;
})();