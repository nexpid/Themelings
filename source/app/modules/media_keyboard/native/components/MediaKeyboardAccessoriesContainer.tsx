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
    var11 = var4.StyleSheet;
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = 10;
    var10 = {'flex': 1, 'zIndex': 10};
    var7['androidContainer'] = var10;
    var10 = {};
    var13 = var11.absoluteFillObject;
    var14 = var10;
    var11 = copyDataProperties(var14, var13);
    var7['iosContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var7 = {};
    var8 = 'function MediaKeyboardAccessoriesContainerTsx1(){const{withTiming,animatedSheetIndex,timingFast,IS_ANDROID,animatedSheetPosition}=this.__closure;const opacity=withTiming(animatedSheetIndex.get()>-0.25?1:0,timingFast);if(IS_ANDROID){return{marginTop:animatedSheetPosition.get(),opacity:opacity};}return{top:animatedSheetPosition.get(),opacity:opacity};}';
    var7['code'] = var8;
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaKeyboardAccessoriesContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.animatedSheetPosition;
            var _closure2_slot0 = var13;
            var14 = var1.animatedSheetIndex;
            var _closure2_slot1 = var14;
            var5 = var1.children;
            var1 = _closure1_slot7;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var _closure2_slot2 = var1;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure1_slot6;
                    var3 = _closure2_slot2;
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
            var8 = var7.bind(var8)(var1, var6);
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var7 = var6[var1];
            var11 = var10.bind(var4)(var7);
            var9 = var11.useAnimatedStyle;
            var7 = function p() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var8 = undefined;
                    var6 = var3.bind(var8)(var2);
                    var5 = var6.withTiming;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = -0.25;
                    var2 = var3 > var2;
                    var3 = 0;
                    if(!var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var3 = 1;
case 5:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 8;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.timingFast;
                    var3 = var5.bind(var6)(var3, var2);
                    var1 = _closure1_slot6;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2['top'] = var4;
                    var2['opacity'] = var3;
                    var1 = var2;
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var2['marginTop'] = var4;
                    var2['opacity'] = var3;
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var12 = {};
            var15 = 7;
            var15 = var6[var15];
            var15 = var10.bind(var4)(var15);
            var15 = var15.withTiming;
            var12['withTiming'] = var15;
            var12['animatedSheetIndex'] = var14;
            var14 = 8;
            var14 = var6[var14];
            var14 = var10.bind(var4)(var14);
            var14 = var14.timingFast;
            var12['timingFast'] = var14;
            var14 = _closure1_slot6;
            var12['IS_ANDROID'] = var14;
            var12['animatedSheetPosition'] = var13;
            var7['__closure'] = var12;
            var12 = 11735909713223.0;
            var7['__workletHash'] = var12;
            var12 = _closure1_slot8;
            var7['__initData'] = var12;
            var7 = var9.bind(var11)(var7);
            var9 = 9;
            var9 = var6[var9];
            var11 = var10.bind(var4)(var9);
            var10 = var11.useStateFromStores;
            var12 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var12;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var10.bind(var11)(var9, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = undefined;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = 'no-hide-descendants';
case 10:
            var1['importantForAccessibility'] = var6;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
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