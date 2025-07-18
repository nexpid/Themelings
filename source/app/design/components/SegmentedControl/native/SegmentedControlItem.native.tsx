// app/design/components/SegmentedControl/native/SegmentedControlItem.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = {'mass': 0.3, 'damping': 13, 'stiffness': 250, 'overshootClamping': true};
    var _closure1_slot7 = var4;
    var4 = 3;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = {};
            var2 = {};
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 4;
            var5 = var3[var4];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderRadius'] = var3;
            var3 = 8;
            var6 = 'experimental_Small';
            var5 = arg1;
            if(!(var6 === var5)) { _fun0001_ip = 63; continue _fun0001 }
 60:
            var3 = var4;
 63:
            var2['paddingVertical'] = var3;
            var3 = 'row';
            var2['flexDirection'] = var3;
            var3 = 'center';
            var2['justifyContent'] = var3;
            var1['item'] = var2;
            var2 = {'flexDirection': 'column', 'alignItems': 'center', 'gap': 8};
            var1['label'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyleProperties;
    var4 = {};
    var9 = 4;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var4['inactive'] = var11;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_ACTIVE;
    var4['active'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_ACTIVE;
    var4['pressed'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/SegmentedControl/native/SegmentedControlItem.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SegmentedControlItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var11 = var3.label;
            var19 = var3.index;
            var _closure2_slot0 = var19;
            var9 = var3.icon;
            var2 = var3.state;
            var16 = var3.onPress;
            var15 = var3.onPressIn;
            var7 = var3.onPressOut;
            var20 = var3.pressed;
            var _closure2_slot1 = var20;
            var14 = var3.variant;
            var18 = var3.style;
            var17 = var2.activeIndex;
            var _closure2_slot2 = var17;
            var2 = _closure1_slot8;
            var4 = undefined;
            var8 = var2.bind(var4)(var14);
            var2 = _closure1_slot9;
            var21 = var2.bind(var4)();
            var _closure2_slot3 = var21;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 5;
            var2 = var13[var2];
            var6 = var10.bind(var4)(var2);
            var3 = var6.useDerivedStateFromSharedValue;
            var2 = function(arg1) {
                var1 = {};
                var3 = _closure2_slot0;
                var2 = arg1;
                var2 = var2 === var3;
                var1['selected'] = var2;
                return var1;
            };
            var6 = var3.bind(var6)(var17, var2);
            var2 = 6;
            var2 = var13[var2];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function T() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    var6 = var2.inactive;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = 0;
                    var4 = var4 >= var2;
                    var2 = var3.get;
                    var5 = var2.bind(var3)();
                    var3 = _closure2_slot0;
                    var2 = global;
                    var8 = var2.Math;
                    var7 = var8.round;
                    var9 = _closure2_slot2;
                    var2 = var9.get;
                    var2 = var2.bind(var9)();
                    var2 = var7.bind(var8)(var2);
                    if(!(var5 !== var3)) { _fun0003_ip = 111; continue _fun0003 }
 80:
                    if(var4) { _fun0003_ip = 99; continue _fun0003 }
 83:
                    if(!(var2 === var3)) { _fun0003_ip = 121; continue _fun0003 }
 87:
                    var2 = _closure2_slot3;
                    var6 = var2.active;
                    _fun0003_ip = 121; continue _fun0003;
 99:
                    var2 = _closure2_slot3;
                    var6 = var2.inactive;
                    _fun0003_ip = 121; continue _fun0003;
 111:
                    var1 = _closure2_slot3;
                    var6 = var1.pressed;
 121:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = _closure1_slot7;
                    var2 = 'animate-always';
                    var2 = var4.bind(var5)(var6, var3, var2);
                    var1['color'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['colors'] = var21;
            var12['pressed'] = var20;
            var12['index'] = var19;
            var12['activeIndex'] = var17;
            var17 = 7;
            var17 = var13[var17];
            var17 = var10.bind(var4)(var17);
            var17 = var17.withSpring;
            var12['withSpring'] = var17;
            var17 = _closure1_slot7;
            var12['SPRING_CONFIG'] = var17;
            var1['__closure'] = var12;
            var12 = 9369301431547.0;
            var1['__workletHash'] = var12;
            var12 = _closure1_slot10;
            var1['__initData'] = var12;
            var12 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var19 = var8.item;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var1['style'] = var17;
            var1['onPress'] = var16;
            var1['onPressIn'] = var15;
            var1['onPressOut'] = var7;
            var7 = 'tab';
            var1['accessibilityRole'] = var7;
            var1['accessibilityState'] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var8.label;
            var5['style'] = var8;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 8;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'animated': true, 'variant': 'text-sm/semibold', 'style': null, 'lineClamp': 1};
            var9['style'] = var12;
            var13 = 'experimental_Large';
            var12 = undefined;
            if(!(var13 === var14)) { _fun0002_ip = 393; continue _fun0002 }
 383:
            var12 = 1.5;
 393:
            var9['maxFontSizeMultiplier'] = var12;
            var9['children'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SegmentedControlItem'] = var2;
    return var1;
})();