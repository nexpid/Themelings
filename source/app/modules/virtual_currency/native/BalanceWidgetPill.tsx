// app/modules/virtual_currency/native/BalanceWidgetPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var2);
    var2 = 0;
    var8 = var5[var2];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var8);
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var6 = var2.forwardRef;
    var2 = var2.useCallback;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var8 = var2.View;
    var _closure1_slot4 = var8;
    var8 = var2.TouchableOpacity;
    var _closure1_slot5 = var8;
    var9 = var2.StyleSheet;
    var2 = 2;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot6 = var8;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.balance;
            var1 = var2.onPress;
            var _closure2_slot0 = var1;
            var9 = var2.showNotificationBadge;
            var6 = var2.disabled;
            var _closure2_slot1 = var6;
            var5 = null;
            var7 = var5 === var15;
            var _closure2_slot2 = var7;
            var3 = _closure1_slot3;
            var2 = new Array(3);
            var2[0] = var6;
            var2[1] = var7;
            var2[2] = var1;
            var4 = undefined;
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
            var8 = var3.bind(var4)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var1['onPress'] = var8;
            var8 = var6;
            if(var6) { _fun0001_ip = 106; continue _fun0001 }
 103:
            var8 = var7;
 106:
            var1['disabled'] = var8;
            var8 = 0.8;
            var1['activeOpacity'] = var8;
            var8 = _closure1_slot8;
            var8 = var8.clickable;
            var1['style'] = var8;
            var8 = arg2;
            var1['ref'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var5 = var5 != var15;
            var10 = 'loading';
            if(!var5) { _fun0001_ip = 168; continue _fun0001 }
 165:
            var10 = var15;
 168:
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Orbs balance: ';
            var5 = var8.bind(var5)(var10);
            var1['accessibilityLabel'] = var5;
            var5 = {};
            if(var6) { _fun0001_ip = 204; continue _fun0001 }
 201:
            var6 = var7;
 204:
            var5['disabled'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = _closure1_slot8;
            var8 = var8.container;
            var5['style'] = var8;
            var12 = _closure1_slot6;
            var8 = {};
            var10 = _closure1_slot8;
            var10 = var10.orbsLottieContainer;
            var8['style'] = var10;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 3;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.OrbIcon;
            var10 = {};
            var17 = 18;
            var10['customSize'] = var17;
            var10 = var12.bind(var4)(var11, var10);
            var8['children'] = var10;
            var10 = var12.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var11 = _closure1_slot1;
            var10 = 4;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['value'] = var15;
            var15 = function onValueChange() {
                var1 = undefined;
                return var1;
            };
            var10['onValueChange'] = var15;
            var14 = function onValueReached() {
                var1 = undefined;
                return var1;
            };
            var10['onValueReached'] = var14;
            var14 = 3000;
            var10['targetTotalCounterTime'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var8[1] = var10;
            if(!var9) { _fun0001_ip = 420; continue _fun0001 }
 390:
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = _closure1_slot8;
            var13 = var13.notificationBadge;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 420:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var6.bind(var1)(var2);
    var6 = 'BalanceWidgetPill';
    var2['displayName'] = var6;
    var8 = var9.create;
    var6 = {};
    var10 = {'height': 36, 'borderWidth': 0, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row', 'paddingHorizontal': 12, 'paddingVertical': 8, 'backgroundColor': '#2f3136'};
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var6['clickable'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexShrink': 0, 'position': 'relative'};
    var6['container'] = var10;
    var10 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
    var6['orbsLottieContainer'] = var10;
    var10 = {'position': 'absolute', 'right': -4.5, 'top': -4.5, 'width': 8, 'height': 8, 'borderRadius': null, 'backgroundColor': '#ff6b6b'};
    var11 = var5[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['borderRadius'] = var11;
    var6['notificationBadge'] = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var6 = var7.bind(var8)(var6);
    var3['BalanceWidgetPill'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.BalanceWidgetMode;
    var3['BalanceWidgetMode'] = var2;
    return var1;
})();