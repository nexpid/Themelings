// app/modules/virtual_currency/native/BalanceWidgetPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
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
        var4 = var4.View;
        var _closure1_slot2 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot3 = var7;
        var4 = var4.jsxs;
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'minHeight': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
        var12 = 4;
        var10 = var6[var12];
        var10 = var5.bind(var1)(var10);
        var10 = var10.SMALL_BUTTON_HEIGHT;
        var9['minHeight'] = var10;
        var10 = 5;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.radii;
        var13 = var13.round;
        var9['borderRadius'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.space;
        var13 = var13.PX_12;
        var9['paddingHorizontal'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.space;
        var13 = var13.PX_4;
        var9['paddingVertical'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var9['backgroundColor'] = var13;
        var9['gap'] = var12;
        var4['container'] = var9;
        var9 = {'position': 'relative', 'height': 18, 'width': 18, 'justifyContent': 'center', 'alignItems': 'center'};
        var4['orbsLottieContainer'] = var9;
        var9 = {'justifyContent': 'center', 'alignItems': 'flex-end'};
        var4['balanceCounterContainer'] = var9;
        var9 = {};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
        var9['color'] = var10;
        var10 = 'right';
        var9['textAlign'] = var10;
        var10 = 6;
        var10 = var6[var10];
        var11 = var5.bind(var1)(var10);
        var10 = var11.isAndroid;
        var11 = var10.bind(var11)();
        var10 = undefined;
        if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var10 = 14;
case 2:
        var9['lineHeight'] = var10;
        var4['balanceText'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot5 = var4;
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
                var3 = _closure1_slot1;
                var1 = 7;
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
                var1 = _closure1_slot5;
                var11 = var1.bind(var4)();
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var1 = {};
                var5 = var11.container;
                var1['style'] = var5;
                var10 = _closure1_slot0;
                var18 = _closure1_slot1;
                var7 = 8;
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
                var8 = _closure1_slot3;
                var7 = _closure1_slot2;
                var5 = {};
                var6 = var11.orbsLottieContainer;
                var5['style'] = var6;
                var10 = _closure1_slot0;
                var18 = _closure1_slot1;
                var6 = 9;
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
                var9 = 10;
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
                var14 = _closure1_slot1;
                var12 = 11;
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