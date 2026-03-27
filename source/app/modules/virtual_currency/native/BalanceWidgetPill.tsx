// app/modules/virtual_currency/native/BalanceWidgetPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Platform;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'minHeight': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 4;
            var5 = var6[var7];
            var3 = undefined;
            var5 = var8.bind(var3)(var5);
            var5 = var5.SMALL_BUTTON_HEIGHT;
            var2['minHeight'] = var5;
            var5 = _closure1_slot1;
            var4 = 5;
            var8 = var6[var4];
            var8 = var5.bind(var3)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var6[var4];
            var8 = var5.bind(var3)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['paddingHorizontal'] = var8;
            var8 = var6[var4];
            var8 = var5.bind(var3)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['paddingVertical'] = var8;
            var8 = var6[var4];
            var8 = var5.bind(var3)(var8);
            var8 = var8.colors;
            var8 = var8.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
            var2['backgroundColor'] = var8;
            var2['gap'] = var7;
            var1['container'] = var2;
            var2 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
            var1['orbsLottieContainer'] = var2;
            var2 = {'justifyContent': 'center', 'alignItems': 'flex-end'};
            var1['balanceCounterContainer'] = var2;
            var2 = {};
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var4 = var4.colors;
            var4 = var4.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
            var2['color'] = var4;
            var4 = 'right';
            var2['textAlign'] = var4;
            var5 = 'android';
            var4 = arg1;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 14;
case 2:
            var2['lineHeight'] = var3;
            var1['balanceText'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var2 = function BalanceWidgetPill(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var16 = var1.initialRenderedBalance;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var16 = null;
case 4:
            var15 = var1.balance;
            var1 = null;
            var6 = var1 === var16;
            if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var1 === var15;
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useVirtualCurrencyBalanceAnimationData;
            var1 = {};
            var1['initialRenderedBalance'] = var16;
            var1['balance'] = var15;
            var1 = var2.bind(var3)(var1);
            var14 = var1.onValueChange;
            var13 = var1.onValueReached;
            var17 = var1.showInitialRenderedBalance;
            var19 = var1.currentAnimationType;
            var20 = var1.lottieRef;
            var2 = _closure1_slot6;
            var1 = 'android';
            var11 = var2.bind(var4)(var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 7;
            var5 = var18[var7];
            var5 = var10.bind(var4)(var5);
            var9 = var5.intl;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var21 = var9.formatToPlainString;
            var5 = var18[var7];
            var5 = var10.bind(var4)(var5);
            var5 = var5.t;
            var8 = var5.zPaLL9;
            var5 = {};
            var5['balance'] = var15;
            var5 = var21.bind(var9)(var8, var5);
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var8 = var9.string;
            var7 = var18[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.y0WGqP;
            var5 = var8.bind(var9)(var7);
case 10:
            var1['accessibilityLabel'] = var5;
            var5 = {};
            var5['busy'] = var6;
            var1['accessibilityState'] = var5;
            var5 = true;
            var1['accessible'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot3;
            var5 = {};
            var6 = var11.orbsLottieContainer;
            var5['style'] = var6;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 8;
            var6 = var18[var6];
            var6 = var10.bind(var4)(var6);
            var9 = var6.OrbLottieAnimation;
            var6 = {};
            var6['ref'] = var20;
            var6['animationType'] = var19;
            var6 = var8.bind(var4)(var9, var6);
            var5['children'] = var6;
            var6 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var9 = var11.balanceCounterContainer;
            var6['style'] = var9;
            var9 = 9;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.BalanceCounter;
            var9 = {};
            if(!var17) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var15 = var16;
case 11:
            var9['value'] = var15;
            var9['onValueChange'] = var14;
            var9['onValueReached'] = var13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 10;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
            var9['targetTotalCounterTime'] = var12;
            var11 = var11.balanceText;
            var9['style'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = 'BalanceWidgetPill';
    var2['displayName'] = var4;
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