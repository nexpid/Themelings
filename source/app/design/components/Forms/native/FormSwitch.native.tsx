// app/design/components/Forms/native/FormSwitch.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var9 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
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
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.Pressable;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var7 = var6[var4];
    var8 = var9.bind(var1)(var7);
    var7 = var8.createAnimatedComponent;
    var7 = var7.bind(var8)(var10);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var10 = var5.bind(var1)(var7);
    var8 = var10.createStyles;
    var7 = function() {
        var1 = {};
        var2 = {'width': 48, 'height': 32, 'flexGrow': 0, 'flexShrink': 0};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_4;
        var2['padding'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var1['switch'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.INTERACTIVE_MUTED;
        var2['tintColor'] = var7;
        var1['unselected'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.REDESIGN_INPUT_CONTROL_SELECTED;
        var2['tintColor'] = var7;
        var1['selected'] = var2;
        var2 = {'height': 24, 'width': 24, 'padding': 6, 'alignItems': 'center', 'justifyContent': 'center'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var2['borderRadius'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.WHITE;
        var2['backgroundColor'] = var3;
        var1['knob'] = var2;
        return var1;
    };
    var7 = var8.bind(var10)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var8 = var9.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 7;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselected.tintColor,SUBTLE_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function FormSwitchNativeTsx2(){const{withSpring,checked,SUBTLE_SPRING}=this.__closure;return{left:withSpring(checked?16:0,SUBTLE_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}";
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Forms/native/FormSwitch.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormSwitch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = function useIconAnimation(arg1, arg2) {
                var10 = arg1;
                var6 = arg2;
                var _closure3_slot0 = var10;
                var _closure3_slot1 = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var7 = undefined;
                var3 = var8.bind(var7)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function c() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot2;
                        var6 = 1;
                        if(var1) { _fun0002_ip = 36; continue _fun0002 }
 13:
                        var1 = _closure2_slot3;
                        if(var1) { _fun0002_ip = 29; continue _fun0002 }
 23:
                        var1 = _closure3_slot1;
                        _fun0002_ip = 33; continue _fun0002;
 29:
                        var1 = _closure3_slot0;
 33:
                        var6 = var1;
 36:
                        var1 = {};
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 9;
                        var5 = var5[var4];
                        var8 = undefined;
                        var12 = var7.bind(var8)(var5);
                        var11 = var12.withSpring;
                        var5 = _closure2_slot3;
                        if(var5) { _fun0002_ip = 84; continue _fun0002 }
 78:
                        var10 = _closure3_slot1;
                        _fun0002_ip = 88; continue _fun0002;
 84:
                        var10 = _closure3_slot0;
 88:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 10;
                        var3 = var9[var2];
                        var3 = var7.bind(var8)(var3);
                        var5 = var3.SUBTLE_SPRING;
                        var3 = 'animate-always';
                        var3 = var11.bind(var12)(var10, var5, var3);
                        var1['opacity'] = var3;
                        var3 = {};
                        var4 = var9[var4];
                        var5 = var7.bind(var8)(var4);
                        var4 = var5.withSpring;
                        var2 = var9[var2];
                        var2 = var7.bind(var8)(var2);
                        var2 = var2.SUBTLE_SPRING;
                        var2 = var4.bind(var5)(var6, var2);
                        var3['scale'] = var2;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1['transform'] = var2;
                        return var1;
                    }
                };
                var5 = {};
                var12 = _closure2_slot2;
                var5['useReducedMotion'] = var12;
                var11 = _closure2_slot3;
                var5['checked'] = var11;
                var5['on'] = var10;
                var5['off'] = var6;
                var6 = 9;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.withSpring;
                var5['withSpring'] = var6;
                var6 = 10;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.SUBTLE_SPRING;
                var5['SUBTLE_SPRING'] = var6;
                var1['__closure'] = var5;
                var5 = 14329332652102.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot11;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var1.disabled;
            var5 = var1.value;
            var _closure2_slot0 = var5;
            var2 = var1.onValueChange;
            var _closure2_slot1 = var2;
            var18 = var1.accessibilityLabel;
            var16 = var1.accessibilityHint;
            var19 = var1.aria-hidden;
            var10 = _closure1_slot4;
            var2 = var10.useContext;
            var20 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var20.bind(var4)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var2.bind(var10)(var1);
            var1 = var1.reducedMotion;
            var1 = var1.enabled;
            var _closure2_slot2 = var1;
            var1 = var10.useState;
            var6 = var1.bind(var10)(var5);
            var2 = _closure1_slot3;
            var1 = 2;
            var6 = var2.bind(var4)(var6, var1);
            var2 = 0;
            var7 = var6[var2];
            var _closure2_slot3 = var7;
            var1 = 1;
            var6 = var6[var1];
            var _closure2_slot4 = var6;
            var9 = var10.useEffect;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var9.bind(var10)(var5, var6);
            var5 = _closure1_slot7;
            var10 = var5.bind(var4)();
            var21 = var10.selected;
            var _closure2_slot5 = var21;
            var13 = var10.unselected;
            var _closure2_slot6 = var13;
            var5 = 4;
            var6 = var8[var5];
            var11 = var20.bind(var4)(var6);
            var9 = var11.useAnimatedStyle;
            var6 = function P() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var5 = var6.withSpring;
                    var4 = _closure2_slot3;
                    if(var4) { _fun0003_ip = 54; continue _fun0003 }
 42:
                    var4 = _closure2_slot6;
                    var4 = var4.tintColor;
                    _fun0003_ip = 64; continue _fun0003;
 54:
                    var3 = _closure2_slot5;
                    var4 = var3.tintColor;
 64:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.SUBTLE_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var22 = 9;
            var23 = var8[var22];
            var23 = var20.bind(var4)(var23);
            var23 = var23.withSpring;
            var12['withSpring'] = var23;
            var12['checked'] = var7;
            var12['selected'] = var21;
            var12['unselected'] = var13;
            var13 = 10;
            var21 = var8[var13];
            var21 = var20.bind(var4)(var21);
            var21 = var21.SUBTLE_SPRING;
            var12['SUBTLE_SPRING'] = var21;
            var6['__closure'] = var12;
            var12 = 7661602606216.0;
            var6['__workletHash'] = var12;
            var12 = _closure1_slot9;
            var6['__initData'] = var12;
            var21 = var9.bind(var11)(var6);
            var6 = var8[var5];
            var11 = var20.bind(var4)(var6);
            var9 = var11.useAnimatedStyle;
            var6 = function k() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot3;
                    var4 = 0;
                    if(!var3) { _fun0004_ip = 47; continue _fun0004 }
 44:
                    var4 = 16;
 47:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.SUBTLE_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['left'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var22 = var8[var22];
            var22 = var20.bind(var4)(var22);
            var22 = var22.withSpring;
            var12['withSpring'] = var22;
            var12['checked'] = var7;
            var13 = var8[var13];
            var13 = var20.bind(var4)(var13);
            var13 = var13.SUBTLE_SPRING;
            var12['SUBTLE_SPRING'] = var13;
            var6['__closure'] = var12;
            var12 = 13478345030228.0;
            var6['__workletHash'] = var12;
            var12 = _closure1_slot10;
            var6['__initData'] = var12;
            var9 = var9.bind(var11)(var6);
            var11 = var3.bind(var4)(var1, var2);
            var13 = var3.bind(var4)(var2, var1);
            var6 = _closure1_slot1;
            var1 = 7;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.Sizes;
            var12 = var1.SMALL;
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var22 = var10.switch;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var1['style'] = var20;
            var20 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 36; continue _fun0005 }
 20:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    var1 = var3.bind(var4)(var2);
 36:
                    return var1;
                }
            };
            var1['onPress'] = var20;
            var1['disabled'] = var17;
            var20 = true;
            var1['accessible'] = var20;
            var1['aria-hidden'] = var19;
            var19 = 'switch';
            var1['accessibilityRole'] = var19;
            var1['accessibilityLabel'] = var18;
            var1['accessibilityHint'] = var16;
            var16 = {};
            var16['disabled'] = var17;
            var16['checked'] = var7;
            var1['accessibilityState'] = var16;
            var14 = function onAccessibilityTap() {
                var3 = _closure2_slot4;
                var1 = _closure2_slot0;
                var2 = !var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 31; continue _fun0006 }
 13:
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onAccessibilityTap'] = var14;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var14 = var10.knob;
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var9;
            var5['style'] = var8;
            var8 = _closure1_slot8;
            var9 = {};
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var7) { _fun0001_ip = 673; continue _fun0001 }
 626:
            var7 = 12;
            var7 = var15[var7];
            var7 = var14.bind(var4)(var7);
            var9['source'] = var7;
            var9['size'] = var12;
            var16 = var10.unselected;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var13;
            var9['style'] = var7;
            var7 = var9;
            _fun0001_ip = 718; continue _fun0001;
 673:
            var13 = 11;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var9['source'] = var13;
            var9['size'] = var12;
            var12 = var10.selected;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var9['style'] = var10;
            var7 = var9;
 718:
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['FormSwitch'] = var2;
    return var1;
})();