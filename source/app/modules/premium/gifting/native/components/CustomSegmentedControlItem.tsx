// app/modules/premium/gifting/native/components/CustomSegmentedControlItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = {'mass': 0.3, 'damping': 13, 'stiffness': 250, 'overshootClamping': true};
    var _closure1_slot8 = var4;
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
            var1['labelVertical'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
            var1['labelHorizontal'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
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
    var11 = var11.TEXT_PRIMARY;
    var4['active'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_PRIMARY;
    var4['pressed'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = "function CustomSegmentedControlItemTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/components/CustomSegmentedControlItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomSegmentedControlItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var12 = var3.label;
            var22 = var3.index;
            var _closure2_slot0 = var22;
            var17 = var3.icon;
            var _closure2_slot1 = var17;
            var2 = var3.state;
            var8 = var3.onPress;
            var7 = var3.onPressIn;
            var6 = var3.onPressOut;
            var23 = var3.pressed;
            var _closure2_slot2 = var23;
            var15 = var3.variant;
            var16 = var3.style;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var19 = var2.activeIndex;
            var _closure2_slot3 = var19;
            var2 = _closure1_slot9;
            var11 = var2.bind(var4)(var15);
            var2 = _closure1_slot10;
            var24 = var2.bind(var4)();
            var _closure2_slot4 = var24;
            var2 = global;
            var5 = var2.Math;
            var3 = var5.round;
            var2 = var19.get;
            var2 = var2.bind(var19)();
            var3 = var3.bind(var5)(var2);
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 5;
            var2 = var18[var10];
            var21 = var13.bind(var4)(var2);
            var20 = var21.useToken;
            var14 = _closure1_slot1;
            var2 = 4;
            var5 = var18[var2];
            var5 = var14.bind(var4)(var5);
            var5 = var5.colors;
            var5 = var5.ICON_MUTED;
            var5 = var20.bind(var21)(var5);
            var10 = var18[var10];
            var13 = var13.bind(var4)(var10);
            var10 = var13.useToken;
            var2 = var18[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.ICON_PRIMARY;
            var2 = var10.bind(var13)(var2);
            var14 = var5;
            if(!(var3 === var22)) { _fun0002_ip = 249; continue _fun0002 }
 246:
            var14 = var2;
 249:
            _closure2_slot5 = var14;
            var2 = null;
            var18 = var2 != var17;
            if(!var18) { _fun0002_ip = 288; continue _fun0002 }
 262:
            var2 = 'experimental_Large';
            var2 = var2 === var15;
            if(var2) { _fun0002_ip = 285; continue _fun0002 }
 275:
            var3 = 'experimental_Small';
            var2 = var3 === var15;
 285:
            var18 = var2;
 288:
            _closure2_slot6 = var18;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 6;
            var2 = var21[var2];
            var5 = var20.bind(var4)(var2);
            var3 = var5.useDerivedStateFromSharedValue;
            var2 = function(arg1) {
                var1 = {};
                var3 = _closure2_slot0;
                var2 = arg1;
                var2 = var2 === var3;
                var1['selected'] = var2;
                return var1;
            };
            var5 = var3.bind(var5)(var19, var2);
            var2 = 7;
            var2 = var21[var2];
            var10 = var20.bind(var4)(var2);
            var3 = var10.useAnimatedStyle;
            var2 = function T() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    var6 = var2.inactive;
                    var3 = _closure2_slot2;
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
                    var9 = _closure2_slot3;
                    var2 = var9.get;
                    var2 = var2.bind(var9)();
                    var2 = var7.bind(var8)(var2);
                    if(!(var5 !== var3)) { _fun0003_ip = 111; continue _fun0003 }
 80:
                    if(var4) { _fun0003_ip = 99; continue _fun0003 }
 83:
                    if(!(var2 === var3)) { _fun0003_ip = 121; continue _fun0003 }
 87:
                    var2 = _closure2_slot4;
                    var6 = var2.active;
                    _fun0003_ip = 121; continue _fun0003;
 99:
                    var2 = _closure2_slot4;
                    var6 = var2.inactive;
                    _fun0003_ip = 121; continue _fun0003;
 111:
                    var1 = _closure2_slot4;
                    var6 = var1.pressed;
 121:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = _closure1_slot8;
                    var2 = 'animate-always';
                    var2 = var4.bind(var5)(var6, var3, var2);
                    var1['color'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['colors'] = var24;
            var13['pressed'] = var23;
            var13['index'] = var22;
            var13['activeIndex'] = var19;
            var19 = 8;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.withSpring;
            var13['withSpring'] = var19;
            var19 = _closure1_slot8;
            var13['SPRING_CONFIG'] = var19;
            var2['__closure'] = var13;
            var13 = 16580647977161.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot11;
            var2['__initData'] = var13;
            var13 = var3.bind(var10)(var2);
            var10 = _closure1_slot3;
            var3 = var10.useMemo;
            var2 = new Array(3);
            var2[0] = var18;
            var2[1] = var17;
            var2[2] = var14;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot6;
                    var3 = null;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 91; continue _fun0004 }
 14:
                    var2 = _closure2_slot1;
                    var2 = var3 != var2;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 91; continue _fun0004 }
 27:
                    var5 = _closure1_slot3;
                    var4 = var5.isValidElement;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0004_ip = 58; continue _fun0004 }
 52:
                    var2 = _closure2_slot1;
                    _fun0004_ip = 88; continue _fun0004;
 58:
                    var6 = _closure1_slot3;
                    var5 = var6.cloneElement;
                    var4 = _closure2_slot1;
                    var3 = {};
                    var7 = _closure2_slot5;
                    var3['color'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 88:
                    var1 = var2;
 91:
                    return var1;
                }
            };
            var10 = var3.bind(var10)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var17 = var11.item;
            var14 = new Array(2);
            var14[0] = var17;
            var14[1] = var16;
            var1['style'] = var14;
            var1['onPress'] = var8;
            var1['onPressIn'] = var7;
            var1['onPressOut'] = var6;
            var6 = 'tab';
            var1['accessibilityRole'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = 'experimental_Small';
            if(!(var8 !== var15)) { _fun0002_ip = 567; continue _fun0002 }
 559:
            var8 = var11.labelVertical;
            _fun0002_ip = 573; continue _fun0002;
 567:
            var8 = var11.labelHorizontal;
 573:
            var5['style'] = var8;
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot6;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 9;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'animated': true, 'variant': 'text-sm/semibold', 'style': null, 'lineClamp': 1};
            var9['style'] = var13;
            var14 = 'experimental_Large';
            var13 = undefined;
            if(!(var14 === var15)) { _fun0002_ip = 656; continue _fun0002 }
 646:
            var13 = 1.5;
 656:
            var9['maxFontSizeMultiplier'] = var13;
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
    var3['CustomSegmentedControlItem'] = var2;
    return var1;
})();