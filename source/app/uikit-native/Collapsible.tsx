// app/uikit-native/Collapsible.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = {'stiffness': 150, 'overshootClamping': true};
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'overflow': 'hidden'};
    var4['collapsible'] = var9;
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['collapsibleContent'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/Collapsible.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Collapsible(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var15 = var3.children;
            var12 = var3.collapsibleContent;
            var2 = var3.isExpanded;
            var6 = var3.style;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot9;
            var14 = var3.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useState;
            var3 = false;
            var5 = var5.bind(var7)(var3);
            var3 = _closure1_slot3;
            var10 = 2;
            var3 = var3.bind(var4)(var5, var10);
            var19 = 0;
            var20 = var3[var19];
            var _closure2_slot0 = var20;
            var9 = 1;
            var16 = var3[var9];
            var _closure2_slot1 = var16;
            var11 = null;
            var7 = var20;
            if(!(var11 != var2)) { _fun0001_ip = 122; continue _fun0001 }
 119:
            var7 = var2;
 122:
            var17 = _closure1_slot4;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var19);
            var5 = _closure1_slot3;
            var2 = var5.bind(var4)(var2, var10);
            var3 = var2[var19];
            _closure2_slot2 = var3;
            var2 = var2[var9];
            _closure2_slot3 = var2;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var19);
            var2 = var5.bind(var4)(var2, var10);
            var5 = var2[var19];
            _closure2_slot4 = var5;
            var2 = var2[var9];
            _closure2_slot5 = var2;
            var10 = var17.useCallback;
            var9 = new Array(1);
            var9[0] = var3;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0002_ip = 43; continue _fun0002 }
 13:
                    var3 = _closure2_slot3;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var10.bind(var17)(var2, var9);
            var13 = var17.useCallback;
            var10 = new Array(1);
            var10[0] = var5;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0003_ip = 43; continue _fun0003 }
 13:
                    var3 = _closure2_slot5;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var13.bind(var17)(var2, var10);
            var2 = 0;
            if(!var7) { _fun0001_ip = 250; continue _fun0001 }
 247:
            var2 = var5;
 250:
            var18 = var3 + var2;
            _closure2_slot6 = var18;
            var22 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 6;
            var2 = var10[var5];
            var7 = var22.bind(var4)(var2);
            var3 = var7.useAnimatedStyle;
            var2 = function f() {
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.withSpring;
                var3 = _closure2_slot6;
                var2 = _closure1_slot8;
                var2 = var4.bind(var5)(var3, var2);
                var1['height'] = var2;
                return var1;
            };
            var17 = {};
            var21 = 7;
            var21 = var10[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.withSpring;
            var17['withSpring'] = var21;
            var17['totalHeight'] = var18;
            var21 = _closure1_slot8;
            var17['EXPAND_SPRING'] = var21;
            var2['__closure'] = var17;
            var17 = 1072657539267.0;
            var2['__workletHash'] = var17;
            var17 = _closure1_slot10;
            var2['__initData'] = var17;
            var17 = var3.bind(var7)(var2);
            var7 = _closure1_slot4;
            var3 = var7.useCallback;
            var2 = new Array(2);
            var2[0] = var20;
            var2[1] = var16;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = !var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var20 = var14.collapsible;
            var10 = new Array(2);
            var10[0] = var20;
            var11 = null;
            if(!(var18 > var19)) { _fun0001_ip = 460; continue _fun0001 }
 457:
            var11 = var17;
 460:
            var10[1] = var11;
            var5['style'] = var10;
            var11 = _closure1_slot6;
            var10 = _closure1_slot5;
            var8 = {};
            var8['onLayout'] = var9;
            var9 = {};
            var9['onPress'] = var16;
            var9 = var15.bind(var4)(var9);
            var8['children'] = var9;
            var9 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var14 = var14.collapsibleContent;
            var9['style'] = var14;
            var9['onLayout'] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();