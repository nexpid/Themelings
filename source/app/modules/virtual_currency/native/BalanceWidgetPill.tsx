// app/modules/virtual_currency/native/BalanceWidgetPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
        var2 = function BalanceWidgetPill(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var17 = var1.initialRenderedBalance;
                var4 = undefined;
                if(!(var17 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var17 = null;
case 2:
                var16 = var1.balance;
                var1 = null;
                var6 = var1 === var17;
                if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var6 = var1 === var16;
case 4:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useVirtualCurrencyBalanceAnimationData;
                var1 = {};
                var1['initialRenderedBalance'] = var17;
                var1['balance'] = var16;
                var1 = var2.bind(var3)(var1);
                var15 = var1.onValueChange;
                var14 = var1.onValueReached;
                var18 = var1.showInitialRenderedBalance;
                var20 = var1.currentAnimationType;
                var21 = var1.lottieRef;
                var1 = _closure1_slot5;
                var12 = var1.bind(var4)();
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var1 = {};
                var5 = var12.container;
                var1['style'] = var5;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 8;
                var5 = var11[var7];
                var5 = var10.bind(var4)(var5);
                var9 = var5.intl;
                if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var19 = var9.formatToPlainString;
                var5 = var11[var7];
                var5 = var10.bind(var4)(var5);
                var5 = var5.t;
                var8 = var5.zPaLL9;
                var5 = {};
                var5['balance'] = var16;
                var5 = var19.bind(var9)(var8, var5);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.y0WGqP;
                var5 = var8.bind(var9)(var7);
case 8:
                var1['accessibilityLabel'] = var5;
                var5 = {};
                var5['busy'] = var6;
                var1['accessibilityState'] = var5;
                var5 = true;
                var1['accessible'] = var5;
                var7 = _closure1_slot3;
                var6 = _closure1_slot2;
                var5 = {};
                var8 = var12.orbsLottieContainer;
                var5['style'] = var8;
                var11 = _closure1_slot3;
                var10 = _closure1_slot0;
                var19 = _closure1_slot1;
                var8 = 9;
                var8 = var19[var8];
                var8 = var10.bind(var4)(var8);
                var9 = var8.OrbLottieAnimation;
                var8 = {};
                var8['ref'] = var21;
                var8['animationType'] = var20;
                var8 = var11.bind(var4)(var9, var8);
                var5['children'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot3;
                var7 = _closure1_slot2;
                var6 = {};
                var9 = var12.balanceCounterContainer;
                var6['style'] = var9;
                var11 = _closure1_slot3;
                var9 = 10;
                var9 = var19[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.BalanceCounter;
                var9 = {};
                if(!var18) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var16 = var17;
case 9:
                var9['value'] = var16;
                var9['onValueChange'] = var15;
                var9['onValueReached'] = var14;
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var13 = 11;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
                var9['targetTotalCounterTime'] = var13;
                var12 = var12.balanceText;
                var9['style'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var4);
        var1 = 0;
        var8 = var6[var1];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var8);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot2 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot3 = var8;
        var4 = var4.jsxs;
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var10 = {'minHeight': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
        var13 = 4;
        var11 = var6[var13];
        var11 = var5.bind(var1)(var11);
        var11 = var11.SMALL_BUTTON_HEIGHT;
        var10['minHeight'] = var11;
        var11 = 5;
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.round;
        var10['borderRadius'] = var14;
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.space;
        var14 = var14.PX_12;
        var10['paddingHorizontal'] = var14;
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.space;
        var14 = var14.PX_4;
        var10['paddingVertical'] = var14;
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var10['backgroundColor'] = var14;
        var10['gap'] = var13;
        var4['container'] = var10;
        var10 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
        var4['orbsLottieContainer'] = var10;
        var10 = {'justifyContent': 'center', 'alignItems': 'flex-end'};
        var4['balanceCounterContainer'] = var10;
        var10 = {};
        var11 = var6[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
        var10['color'] = var11;
        var11 = 'right';
        var10['textAlign'] = var11;
        var11 = 6;
        var11 = var6[var11];
        var12 = var5.bind(var1)(var11);
        var11 = var12.isAndroid;
        var12 = var11.bind(var12)();
        var11 = undefined;
        if(!var12) { _fun0001_ip = 11; continue _fun0001 }
case 9:
        var11 = 14;
case 11:
        var10['lineHeight'] = var11;
        var4['balanceText'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot5 = var4;
        var4 = 'BalanceWidgetPill';
        var2['displayName'] = var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        var3['BalanceWidgetPill'] = var2;
        return var1;
    }
})();