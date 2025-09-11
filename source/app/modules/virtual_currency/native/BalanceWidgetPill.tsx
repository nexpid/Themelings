// app/modules/virtual_currency/native/BalanceWidgetPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.forwardRef;
    var2 = var2.useCallback;
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.TouchableOpacity;
    var _closure1_slot3 = var8;
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot6 = var8;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var17 = var2.balance;
            var9 = var2.showNotificationBadge;
            var1 = var2.onPress;
            var _closure2_slot0 = var1;
            var6 = var2.disabled;
            var _closure2_slot1 = var6;
            var16 = null;
            var7 = var16 === var17;
            var _closure2_slot2 = var7;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.onboardingPillEnabled;
                return var1;
            };
            var11 = var5.bind(var8)(var3, var2);
            var2 = _closure1_slot8;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot2;
            var2 = new Array(3);
            var2[0] = var6;
            var2[1] = var7;
            var2[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
 10:
                    var2 = _closure2_slot2;
 14:
                    if(var2) { _fun0002_ip = 27; continue _fun0002 }
 17:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var4)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var1['onPress'] = var5;
            var5 = var6;
            if(var6) { _fun0001_ip = 164; continue _fun0001 }
 161:
            var5 = var7;
 164:
            var1['disabled'] = var5;
            var5 = 0.8;
            var1['activeOpacity'] = var5;
            var5 = var13.clickable;
            var1['style'] = var5;
            var5 = arg2;
            var1['ref'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var5 = var16 != var17;
            var12 = 'loading';
            if(!var5) { _fun0001_ip = 222; continue _fun0001 }
 219:
            var12 = var17;
 222:
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Orbs balance: ';
            var5 = var8.bind(var5)(var12);
            var1['accessibilityLabel'] = var5;
            var5 = {};
            if(var6) { _fun0001_ip = 258; continue _fun0001 }
 255:
            var6 = var7;
 258:
            var5['disabled'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var13.container;
            var5['style'] = var8;
            var12 = _closure1_slot6;
            var8 = {};
            var15 = var13.orbsLottieContainer;
            var8['style'] = var15;
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var19 = 5;
            var15 = var21[var19];
            var15 = var20.bind(var4)(var15);
            var18 = var15.OrbIcon;
            var15 = {};
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.OrbIconSize;
            var19 = var19.SMALL;
            var15['size'] = var19;
            var15 = var12.bind(var4)(var18, var15);
            var8['children'] = var15;
            var12 = var12.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var12;
            var15 = _closure1_slot6;
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            if(var11) { _fun0001_ip = 477; continue _fun0001 }
 394:
            var11 = 8;
            var11 = var20[var11];
            var11 = var19.bind(var4)(var11);
            var12 = var11.BalanceCounter;
            var11 = {};
            var18 = var16 != var17;
            var16 = 0;
            if(!var18) { _fun0001_ip = 426; continue _fun0001 }
 423:
            var16 = var17;
 426:
            var11['value'] = var16;
            var16 = function onValueChange() {
                var1 = undefined;
                return var1;
            };
            var11['onValueChange'] = var16;
            var14 = function onValueReached() {
                var1 = undefined;
                return var1;
            };
            var11['onValueReached'] = var14;
            var14 = 3000;
            var11['targetTotalCounterTime'] = var14;
            var11 = var15.bind(var4)(var12, var11);
            _fun0001_ip = 577; continue _fun0001;
 477:
            var12 = 6;
            var12 = var20[var12];
            var12 = var19.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
            var16 = var13.onboardingText;
            var12['style'] = var16;
            var16 = 7;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.9JpRfH;
            var16 = var17.bind(var18)(var16);
            var12['children'] = var16;
            var11 = var15.bind(var4)(var14, var12);
 577:
            var8[1] = var11;
            if(!var9) { _fun0001_ip = 610; continue _fun0001 }
 584:
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var13.notificationBadge;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 610:
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
    var4 = {};
    var10 = {'height': 36, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row', 'paddingHorizontal': 12, 'paddingVertical': 8, 'backgroundColor': null, 'borderWidth': 0};
    var11 = 10;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['clickable'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexShrink': 0, 'position': 'relative'};
    var4['container'] = var10;
    var10 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['orbsLottieContainer'] = var10;
    var10 = {'position': 'absolute', 'right': -4.5, 'top': -4.5, 'width': 8, 'height': 8};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['borderRadius'] = var11;
    var4['notificationBadge'] = var10;
    var10 = {};
    var11 = 6;
    var10['marginLeft'] = var11;
    var4['onboardingText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
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