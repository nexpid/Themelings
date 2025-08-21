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
    var2 = var5.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot5 = var8;
    var2 = var2.jsxs;
    var _closure1_slot6 = var2;
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
            var2 = _closure1_slot7;
            var4 = undefined;
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
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var1['onPress'] = var5;
            var5 = var6;
            if(var6) { _fun0001_ip = 114; continue _fun0001 }
 111:
            var5 = var7;
 114:
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
            var11 = 'loading';
            if(!var5) { _fun0001_ip = 172; continue _fun0001 }
 169:
            var11 = var17;
 172:
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Orbs balance: ';
            var5 = var8.bind(var5)(var11);
            var1['accessibilityLabel'] = var5;
            var5 = {};
            if(var6) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var6 = var7;
 208:
            var5['disabled'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var13.container;
            var5['style'] = var8;
            var14 = _closure1_slot5;
            var8 = {};
            var11 = var13.orbsLottieContainer;
            var8['style'] = var11;
            var12 = _closure1_slot0;
            var18 = _closure1_slot1;
            var20 = 3;
            var11 = var18[var20];
            var11 = var12.bind(var4)(var11);
            var19 = var11.OrbIcon;
            var11 = {};
            var20 = var18[var20];
            var20 = var12.bind(var4)(var20);
            var20 = var20.OrbIconSize;
            var20 = var20.SMALL;
            var11['size'] = var20;
            var11 = var14.bind(var4)(var19, var11);
            var8['children'] = var11;
            var11 = var14.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = 4;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.BalanceCounter;
            var11 = {};
            var18 = var16 != var17;
            var16 = 0;
            if(!var18) { _fun0001_ip = 361; continue _fun0001 }
 358:
            var16 = var17;
 361:
            var11['value'] = var16;
            var16 = function onValueChange() {
                var1 = undefined;
                return var1;
            };
            var11['onValueChange'] = var16;
            var15 = function onValueReached() {
                var1 = undefined;
                return var1;
            };
            var11['onValueReached'] = var15;
            var15 = 3000;
            var11['targetTotalCounterTime'] = var15;
            var11 = var14.bind(var4)(var12, var11);
            var8[1] = var11;
            if(!var9) { _fun0001_ip = 443; continue _fun0001 }
 417:
            var12 = _closure1_slot5;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var13.notificationBadge;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 443:
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
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'height': 36, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row', 'paddingHorizontal': 12, 'paddingVertical': 8, 'backgroundColor': null, 'borderWidth': 0};
    var11 = 6;
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
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceWidgetPill'] = var2;
    return var1;
})();