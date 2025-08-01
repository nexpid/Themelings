// app/design/components/Sheet/native/BottomSheetBackdrop.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var4 = {};
    var8 = 'function BottomSheetBackdropNativeTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}';
    var4['code'] = var8;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = 'function BottomSheetBackdropNativeTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}';
    var4['code'] = var8;
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var19 = var2.animatedIndex;
            var _closure2_slot0 = var19;
            var16 = var2.opacity;
            var5 = undefined;
            if(!(var16 === var5)) { _fun0001_ip = 29; continue _fun0001 }
 26:
            var16 = 1;
 29:
            var _closure2_slot1 = var16;
            var17 = var2.appearsOnIndex;
            if(!(var17 === var5)) { _fun0001_ip = 45; continue _fun0001 }
 43:
            var17 = 0;
 45:
            var _closure2_slot2 = var17;
            var18 = var2.disappearsOnIndex;
            if(!(var18 === var5)) { _fun0001_ip = 65; continue _fun0001 }
 59:
            var18 = -1;
 65:
            var _closure2_slot3 = var18;
            var4 = var2.pressBehavior;
            if(!(var4 === var5)) { _fun0001_ip = 83; continue _fun0001 }
 79:
            var4 = 'close';
 83:
            var _closure2_slot4 = var4;
            var7 = var2.onPress;
            var _closure2_slot5 = var7;
            var14 = var2.style;
            var _closure2_slot6 = var14;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var8 = 3;
            var8 = var6[var8];
            var9 = var3.bind(var5)(var8);
            var8 = var9.useBottomSheet;
            var8 = var8.bind(var9)();
            var11 = var8.snapToIndex;
            _closure2_slot7 = var11;
            var10 = var8.close;
            _closure2_slot8 = var10;
            var12 = _closure1_slot2;
            var9 = var12.useCallback;
            var8 = new Array(5);
            var8[0] = var11;
            var8[1] = var10;
            var8[2] = var18;
            var8[3] = var4;
            var8[4] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 23:
                    var3 = _closure2_slot4;
                    var2 = 'close';
                    if(!(var2 !== var3)) { _fun0002_ip = 96; continue _fun0002 }
 35:
                    var3 = _closure2_slot4;
                    var2 = 'collapse';
                    if(!(var2 !== var3)) { _fun0002_ip = 79; continue _fun0002 }
 47:
                    var2 = _closure2_slot4;
                    var3 = 'number';
                    var2 = typeof var2;
                    if(!(var3 === var2)) { _fun0002_ip = 106; continue _fun0002 }
 62:
                    var4 = _closure2_slot7;
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 106; continue _fun0002;
 79:
                    var4 = _closure2_slot7;
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 106; continue _fun0002;
 96:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var9.bind(var12)(var7, var8);
            _closure2_slot9 = var10;
            var8 = 4;
            var7 = var6[var8];
            var7 = var3.bind(var5)(var7);
            var9 = var7.Gesture;
            var7 = var9.Tap;
            var11 = var7.bind(var9)();
            var9 = var11.onEnd;
            var7 = function I() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot9;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var13 = {};
            var20 = 5;
            var15 = var6[var20];
            var15 = var3.bind(var5)(var15);
            var15 = var15.runOnJS;
            var13['runOnJS'] = var15;
            var13['handleOnPress'] = var10;
            var7['__closure'] = var13;
            var13 = 3995467602852.0;
            var7['__workletHash'] = var13;
            var13 = _closure1_slot5;
            var7['__initData'] = var13;
            var7 = var9.bind(var11)(var7);
            var9 = var6[var20];
            var13 = var3.bind(var5)(var9);
            var11 = var13.useAnimatedStyle;
            var9 = function S() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.interpolate;
                var4 = _closure2_slot0;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = new Array(3);
                var7 = -1;
                var3[0] = var7;
                var7 = _closure2_slot3;
                var3[1] = var7;
                var7 = _closure2_slot2;
                var3[2] = var7;
                var7 = _closure2_slot1;
                var2 = [0, 0];
                var2[2] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var15 = {};
            var20 = var6[var20];
            var20 = var3.bind(var5)(var20);
            var20 = var20.interpolate;
            var15['interpolate'] = var20;
            var15['animatedIndex'] = var19;
            var15['disappearsOnIndex'] = var18;
            var15['appearsOnIndex'] = var17;
            var15['opacity'] = var16;
            var9['__closure'] = var15;
            var15 = 1140766381376.0;
            var9['__workletHash'] = var15;
            var15 = _closure1_slot6;
            var9['__initData'] = var15;
            var13 = var11.bind(var13)(var9);
            _closure2_slot10 = var13;
            var11 = var12.useMemo;
            var9 = new Array(2);
            var9[0] = var14;
            var9[1] = var13;
            var1 = function() {
                var1 = _closure1_slot4;
                var2 = var1.container;
                var1 = new Array(3);
                var1[0] = var2;
                var3 = _closure2_slot6;
                var1[1] = var3;
                var2 = _closure2_slot10;
                var1[2] = var2;
                return var1;
            };
            var11 = var11.bind(var12)(var1, var9);
            var9 = _closure1_slot3;
            var1 = 6;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var6 = var1.Backdrop;
            var1 = {};
            var3 = 'none';
            var1['blur'] = var3;
            var1['style'] = var11;
            var1['onDismiss'] = var10;
            var10 = true;
            var1['aria-hidden'] = var10;
            var6 = var9.bind(var5)(var6, var1);
            var1 = var6;
            if(!(var3 !== var4)) { _fun0001_ip = 562; continue _fun0001 }
 518:
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 562:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/BottomSheetBackdrop.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BottomSheetBackdrop'] = var2;
    return var1;
})();