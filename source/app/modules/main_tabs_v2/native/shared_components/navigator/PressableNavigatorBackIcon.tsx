// app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.BADGE_SIZE;
    var _closure1_slot7 = var11;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'minWidth': null, 'height': null, 'top': 10, 'left': 8, 'flexShrink': 0, 'flexGrow': 1, 'zIndex': 100};
    var10['minWidth'] = var11;
    var10['height'] = var11;
    var4['maskWrapper'] = var10;
    var10 = {};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var13;
    var4['maskStroke'] = var10;
    var10 = {'padding': 8, 'zIndex': 100, 'width': 40, 'height': 40, 'borderRadius': 20};
    var4['actionButtonPressable'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var10['tintColor'] = var11;
    var4['actionButtonIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var8 = var4.navigation;
            var _closure2_slot0 = var8;
            var6 = var4.onPress;
            var _closure2_slot1 = var6;
            var11 = null;
            var3 = Object.create(var11);
            var12 = 0;
            var3['navigation'] = var12;
            var3['onPress'] = var12;
            var25 = {};
            var24 = var4;
            var23 = var3;
            var7 = copyDataProperties(var25, var24, var23);
            var2 = _closure1_slot10;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var13 = var9.bind(var4)(var2);
            var5 = var13.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getTotalMentionCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var5.bind(var13)(var3, var2);
            var _closure2_slot2 = var19;
            var13 = _closure1_slot3;
            var5 = var13.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = 10;
                    if(!(!(var3 < var2))) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot2;
                    var1 = 100;
                    if(!(!(var2 < var1))) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = {};
                    var3 = _closure1_slot7;
                    var2 = 12;
                    var2 = var3 + var2;
                    var1['minWidth'] = var2;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var2 = {};
                    var4 = _closure1_slot7;
                    var3 = 8;
                    var3 = var4 + var3;
                    var2['minWidth'] = var3;
                    var1 = var2;
case 6:
                    return var1;
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var5.bind(var13)(var2, var3);
            var2 = 8;
            var3 = var10[var2];
            var5 = var9.bind(var4)(var3);
            var3 = var5.useGradientValue;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.GradientPercentage;
            var2 = var2.START;
            var18 = var3.bind(var5)(var2);
            if(!(var11 == var18)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var16.maskStroke;
            var18 = var2.backgroundColor;
case 7:
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 5; continue _fun0003 }
case 9:
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
                    _fun0003_ip = 10; continue _fun0003;
case 5:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure2_slot0;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var5 = 10;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var9 = arg2;
            var5['ref'] = var9;
            var25 = var5;
            var24 = var7;
            var7 = copyDataProperties(var25, var24);
            var9 = 'button';
            var7 = 'accessibilityRole';
            var5[var7] = var9;
            if(!(!(var19 > var12))) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 11;
            var9 = var14[var7];
            var9 = var13.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.13/7kZ;
            var9 = var9.bind(var10)(var7);
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var7 = 11;
            var13 = var20[var7];
            var13 = var10.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var7 = var20[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var10 = var7.vxFYaG;
            var7 = {};
            var7['mentionCount'] = var19;
            var9 = var13.bind(var14)(var10, var7);
case 14:
            var7 = 'accessibilityLabel';
            var5[var7] = var9;
            var7 = 'onPress';
            var5[var7] = var8;
            var8 = var16.actionButtonPressable;
            var7 = 'style';
            var5[var7] = var8;
            var9 = _closure1_slot9;
            var8 = _closure1_slot4;
            var7 = {};
            var14 = _closure1_slot8;
            var13 = _closure1_slot5;
            var10 = {};
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 12;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var10['source'] = var20;
            var20 = {};
            var21 = var16.actionButtonIcon;
            var21 = var21.tintColor;
            var20['tintColor'] = var21;
            var10['style'] = var20;
            var13 = var14.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var12 = var19 > var12;
            var11 = null;
            if(!var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = _closure1_slot8;
            var13 = _closure1_slot4;
            var12 = {};
            var16 = var16.maskWrapper;
            var12['style'] = var16;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 13;
            var15 = var20[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['value'] = var19;
            var19 = 99;
            var15['maxValue'] = var19;
            var15['backgroundColor'] = var18;
            var18 = false;
            var15['unread'] = var18;
            var15['style'] = var17;
            var15 = var14.bind(var4)(var16, var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 15:
            var10[1] = var11;
            var7['children'] = var10;
            var8 = var9.bind(var4)(var8, var7);
            var7 = 'children';
            var5[var7] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var3['PressableNavigatorBackIcon'] = var2;
    return var1;
})();