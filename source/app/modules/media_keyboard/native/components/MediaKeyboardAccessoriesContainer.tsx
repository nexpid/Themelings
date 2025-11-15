// app/modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.isAndroid;
    var4 = var4.bind(var7)();
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'zIndex': 10};
    var4['androidContainer'] = var9;
    var9 = {};
    var12 = var10.absoluteFillObject;
    var13 = var9;
    var10 = copyDataProperties(var13, var12);
    var4['iosContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedSheetIndex,initialPosition,animatedSheetPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedSheetIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedSheetPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaKeyboardAccessoriesContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.animatedSheetPosition;
            var _closure2_slot0 = var14;
            var16 = var1.animatedSheetIndex;
            var _closure2_slot1 = var16;
            var18 = var1.animateOnMount;
            var _closure2_slot2 = var18;
            var5 = var1.children;
            var15 = var1.initialPosition;
            var _closure2_slot3 = var15;
            var1 = _closure1_slot7;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var _closure2_slot4 = var1;
            var12 = _closure1_slot3;
            var7 = var12.useMemo;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure1_slot6;
                    var3 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var3.iosContainer;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var2 = var3.androidContainer;
case 4:
                    var6 = var1;
                    var5 = var2;
                    var2 = copyDataProperties(var6, var5);
                    var3 = 'hidden';
                    var2 = 'overflow';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var9 = var7.bind(var12)(var1, var6);
            var1 = var12.useRef;
            var10 = false;
            var1 = var1.bind(var12)(var10);
            var _closure2_slot5 = var1;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var6 = var7[var1];
            var8 = var11.bind(var4)(var6);
            var6 = var8.useSharedValue;
            var17 = var6.bind(var8)(var10);
            var _closure2_slot6 = var17;
            var10 = var12.useCallback;
            var8 = new Array(1);
            var8[0] = var17;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var2 = _closure2_slot5;
                    var3 = true;
                    var2['current'] = var3;
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var12)(var6, var8);
            var8 = var7[var1];
            var12 = var11.bind(var4)(var8);
            var10 = var12.useAnimatedStyle;
            var8 = function I() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var4 = _closure2_slot6;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = !var3;
case 7:
                    var3 = 0;
                    var8 = 0;
                    if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.min;
                    var7 = _closure2_slot1;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var8 = var5.bind(var6)(var4, var3);
case 9:
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var4 = _closure2_slot0;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    _fun0004_ip = 13; continue _fun0004;
case 11:
                    var4 = _closure2_slot3;
case 13:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 6;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.interpolate;
                    var5 = new Array(2);
                    var9 = -1;
                    var5[0] = var9;
                    var5[1] = var3;
                    var3 = [100, 0];
                    var3 = var6.bind(var7)(var8, var5, var3);
                    var2['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var1 = _closure1_slot6;
                    var2 = {};
                    if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2['top'] = var4;
                    var2['transform'] = var3;
                    var1 = var2;
                    _fun0004_ip = 16; continue _fun0004;
case 14:
                    var2['marginTop'] = var4;
                    var2['transform'] = var3;
                    var1 = var2;
case 16:
                    return var1;
                }
            };
            var13 = {};
            var13['animateOnMount'] = var18;
            var13['initialLayout'] = var17;
            var13['animatedSheetIndex'] = var16;
            var13['initialPosition'] = var15;
            var13['animatedSheetPosition'] = var14;
            var14 = var7[var1];
            var14 = var11.bind(var4)(var14);
            var14 = var14.interpolate;
            var13['interpolate'] = var14;
            var14 = _closure1_slot6;
            var13['IS_ANDROID'] = var14;
            var8['__closure'] = var13;
            var13 = 5049213631404.0;
            var8['__workletHash'] = var13;
            var13 = _closure1_slot8;
            var8['__initData'] = var13;
            var8 = var10.bind(var12)(var8);
            var10 = 7;
            var10 = var7[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.useStateFromStores;
            var13 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var13;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var11.bind(var12)(var10, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = undefined;
            if(!var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = 'no-hide-descendants';
case 17:
            var1['importantForAccessibility'] = var7;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            var1['onLayout'] = var6;
            var6 = 'box-none';
            var1['pointerEvents'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();