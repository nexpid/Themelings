// app/design/components/Tabs/native/TabsGradient.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var9 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function useGradientAnimatedStyle(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var9 = _closure1_slot0;
        var10 = _closure1_slot1;
        var2 = 3;
        var2 = var10[var2];
        var8 = undefined;
        var3 = var9.bind(var8)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function s() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.withSpring;
                var6 = _closure2_slot0;
                var3 = var6.get;
                var6 = var3.bind(var6)();
                var3 = 0;
                if(!var6) { _fun0001_ip = 56; continue _fun0001 }
 53:
                var3 = 1;
 56:
                var2 = _closure1_slot8;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            }
        };
        var5 = {};
        var7 = 6;
        var7 = var10[var7];
        var7 = var9.bind(var8)(var7);
        var7 = var7.withSpring;
        var5['withSpring'] = var7;
        var5['visible'] = var6;
        var6 = _closure1_slot8;
        var5['SPRING_CONFIG'] = var6;
        var1['__closure'] = var5;
        var5 = 14959306962615.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot10;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var7 = var6[var10];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HorizontalGradient;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.Fragment;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var9.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {'mass': 1, 'damping': 30, 'stiffness': 250};
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 50, 'position': 'absolute', 'top': 0, 'bottom': 0, 'zIndex': 100};
    var4['gradient'] = var9;
    var9 = {};
    var9['left'] = var10;
    var4['left'] = var9;
    var9 = {};
    var9['right'] = var10;
    var4['right'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function TabsGradientNativeTsx2(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function TabsGradientNativeTsx3(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Tabs/native/TabsGradient.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TabsGradient(arg1) {
        var2 = arg1;
        var14 = var2.state;
        var _closure2_slot0 = var14;
        var6 = var2.colors;
        var _closure2_slot1 = var6;
        var12 = var14.scrollOffset;
        var _closure2_slot2 = var12;
        var15 = var14.itemDimensions;
        var _closure2_slot3 = var15;
        var10 = var14.pageWidth;
        var _closure2_slot4 = var10;
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 3;
        var3 = var7[var2];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var8 = var9.useDerivedValue;
        var3 = function f() {
            var3 = _closure2_slot3;
            var2 = var3.get;
            var3 = var2.bind(var3)();
            var5 = var3.reduce;
            var4 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg2;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 19; continue _fun0002 }
 14:
                    var1 = var3.width;
 19:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0002_ip = 31; continue _fun0002 }
 28:
                    var2 = var1;
 31:
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var2 = 0;
            var2 = var5.bind(var3)(var4, var2);
            var3 = var3.length;
            var1 = _closure2_slot0;
            var1 = var1.itemSpacing;
            var1 = var3 * var1;
            var1 = var2 + var1;
            return var1;
        };
        var11 = {};
        var11['itemDimensions'] = var15;
        var11['state'] = var14;
        var3['__closure'] = var11;
        var11 = 456613763143.0;
        var3['__workletHash'] = var11;
        var11 = _closure1_slot11;
        var3['__initData'] = var11;
        var11 = var8.bind(var9)(var3);
        var _closure2_slot5 = var11;
        var3 = _closure1_slot14;
        var8 = var7[var2];
        var14 = var5.bind(var4)(var8);
        var9 = var14.useDerivedValue;
        var8 = function y() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot2;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = 0;
                var1 = var3 > var1;
                if(!var1) { _fun0003_ip = 46; continue _fun0003 }
 25:
                var4 = _closure2_slot5;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot4;
                var1 = var3 > var2;
 46:
                return var1;
            }
        };
        var15 = {};
        var15['scrollOffset'] = var12;
        var15['totalItemWidth'] = var11;
        var15['pageWidth'] = var10;
        var8['__closure'] = var15;
        var15 = 13237586618288.0;
        var8['__workletHash'] = var15;
        var15 = _closure1_slot12;
        var8['__initData'] = var15;
        var8 = var9.bind(var14)(var8);
        var9 = var3.bind(var4)(var8);
        var2 = var7[var2];
        var7 = var5.bind(var4)(var2);
        var5 = var7.useDerivedValue;
        var2 = function W() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot2;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var4 = _closure2_slot5;
                var1 = var4.get;
                var4 = var1.bind(var4)();
                var1 = _closure2_slot4;
                var1 = var4 - var1;
                var1 = var3 < var1;
                if(!var1) { _fun0004_ip = 65; continue _fun0004 }
 44:
                var4 = _closure2_slot5;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot4;
                var1 = var3 > var2;
 65:
                return var1;
            }
        };
        var8 = {};
        var8['scrollOffset'] = var12;
        var8['totalItemWidth'] = var11;
        var8['pageWidth'] = var10;
        var2['__closure'] = var8;
        var8 = 13808489302165.0;
        var2['__workletHash'] = var8;
        var8 = _closure1_slot13;
        var2['__initData'] = var8;
        var2 = var5.bind(var7)(var2);
        var11 = var3.bind(var4)(var2);
        var2 = _closure1_slot9;
        var12 = var2.bind(var4)();
        var5 = _closure1_slot2;
        var3 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var5 = _closure2_slot1;
            var2 = new Array(0);
            var4 = 0;
            var6 = var2;
            var1 = arraySpread(var6, var5, var4);
            var1 = var2.reverse;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var8 = _closure1_slot4;
        var7 = _closure1_slot7;
        var5 = {};
        var13 = _closure1_slot3;
        var14 = var13.START;
        var5['start'] = var14;
        var14 = var13.END;
        var5['end'] = var14;
        var5['colors'] = var6;
        var14 = var12.left;
        var6 = new Array(3);
        var6[0] = var14;
        var14 = var12.gradient;
        var6[1] = var14;
        var6[2] = var9;
        var5['style'] = var6;
        var9 = 'none';
        var5['pointerEvents'] = var9;
        var6 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var14 = var13.START;
        var6['start'] = var14;
        var13 = var13.END;
        var6['end'] = var13;
        var6['colors'] = var10;
        var13 = var12.right;
        var10 = new Array(3);
        var10[0] = var13;
        var12 = var12.gradient;
        var10[1] = var12;
        var10[2] = var11;
        var6['style'] = var10;
        var6['pointerEvents'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();