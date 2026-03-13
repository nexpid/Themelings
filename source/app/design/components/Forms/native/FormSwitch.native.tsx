// app/design/components/Forms/native/FormSwitch.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var14 = 0;
    var4 = var6[var14];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
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
    var7 = {};
    var11 = {};
    var12 = 6;
    var15 = var6[var12];
    var15 = var9.bind(var1)(var15);
    var15 = var15.modules;
    var15 = var15.mobile;
    var15 = var15.CONTROL_SWITCH_WIDTH;
    var11['width'] = var15;
    var15 = var6[var12];
    var15 = var9.bind(var1)(var15);
    var15 = var15.modules;
    var15 = var15.mobile;
    var15 = var15.CONTROL_SWITCH_HEIGHT;
    var11['height'] = var15;
    var15 = var6[var12];
    var15 = var9.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var15 = var15 - var13;
    var11['padding'] = var15;
    var11['flexGrow'] = var14;
    var11['flexShrink'] = var14;
    var14 = var6[var12];
    var14 = var9.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var11['borderRadius'] = var14;
    var11['borderWidth'] = var13;
    var7['switch'] = var11;
    var11 = {};
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.SWITCH_BACKGROUND_DEFAULT;
    var11['tintColor'] = var13;
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.SWITCH_BORDER_DEFAULT;
    var11['borderColor'] = var13;
    var7['unselectedBackground'] = var11;
    var11 = {};
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_OVERLAY_DARK;
    var11['tintColor'] = var13;
    var7['unselectedIcon'] = var11;
    var11 = {};
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.SWITCH_BACKGROUND_SELECTED_DEFAULT;
    var11['tintColor'] = var13;
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.SWITCH_BORDER_SELECTED_DEFAULT;
    var11['borderColor'] = var13;
    var7['selected'] = var11;
    var11 = {};
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.modules;
    var13 = var13.mobile;
    var13 = var13.CONTROL_SWITCH_KNOB_SIZE;
    var11['height'] = var13;
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.modules;
    var13 = var13.mobile;
    var13 = var13.CONTROL_SWITCH_KNOB_SIZE;
    var11['width'] = var13;
    var13 = 'center';
    var11['alignItems'] = var13;
    var11['justifyContent'] = var13;
    var13 = var6[var12];
    var13 = var9.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var11['borderRadius'] = var13;
    var12 = var6[var12];
    var12 = var9.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var11['backgroundColor'] = var12;
    var7['knob'] = var11;
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
    var7 = "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselectedBackground,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselectedBackground.tintColor,SUBTLE_SPRING,'animate-always'),borderColor:withSpring(checked?selected.borderColor:unselectedBackground.borderColor,SUBTLE_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function FormSwitchNativeTsx2(){const{withSpring,checked,knobCheckedLeft,SUBTLE_SPRING}=this.__closure;return{left:withSpring(checked?knobCheckedLeft:0,SUBTLE_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}";
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Forms/native/FormSwitch.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormSwitch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = function useIconAnimation(arg1, arg2) {
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
                var1 = function n() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var6 = 1;
                        if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var1 = _closure2_slot3;
                        if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var1 = _closure3_slot1;
                        _fun0002_ip = 6; continue _fun0002;
case 4:
                        var1 = _closure3_slot0;
case 6:
                        var6 = var1;
case 2:
                        var1 = {};
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 10;
                        var5 = var5[var4];
                        var8 = undefined;
                        var12 = var7.bind(var8)(var5);
                        var11 = var12.withSpring;
                        var5 = _closure2_slot3;
                        if(var5) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var10 = _closure3_slot1;
                        _fun0002_ip = 9; continue _fun0002;
case 7:
                        var10 = _closure3_slot0;
case 9:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 11;
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
                var6 = 10;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.withSpring;
                var5['withSpring'] = var6;
                var6 = 11;
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
            var13 = var1.disabled;
            var2 = var1.value;
            var _closure2_slot0 = var2;
            var3 = var1.onValueChange;
            var _closure2_slot1 = var3;
            var14 = var1.accessibilityLabel;
            var11 = var1.accessibilityHint;
            var15 = var1.aria-hidden;
            var10 = _closure1_slot4;
            var7 = var10.useContext;
            var23 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var23.bind(var4)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var7.bind(var10)(var1);
            var1 = var1.reducedMotion;
            var1 = var1.enabled;
            var _closure2_slot2 = var1;
            var1 = var10.useState;
            var8 = var1.bind(var10)(var2);
            var7 = _closure1_slot3;
            var1 = 2;
            var8 = var7.bind(var4)(var8, var1);
            var7 = 0;
            var12 = var8[var7];
            var _closure2_slot3 = var12;
            var1 = 1;
            var8 = var8[var1];
            var _closure2_slot4 = var8;
            var9 = var10.useEffect;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var9.bind(var10)(var2, var8);
            var2 = _closure1_slot1;
            var8 = 9;
            var8 = var3[var8];
            var9 = var2.bind(var4)(var8);
            var8 = 'FormSwitch';
            var18 = var9.bind(var4)(var8);
            var _closure2_slot5 = var18;
            var8 = _closure1_slot7;
            var8 = var8.bind(var4)();
            var22 = var8.selected;
            var _closure2_slot6 = var22;
            var21 = var8.unselectedBackground;
            var _closure2_slot7 = var21;
            var10 = 4;
            var9 = var3[var10];
            var19 = var23.bind(var4)(var9);
            var17 = var19.useAnimatedStyle;
            var9 = function B() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 10;
                    var3 = var3[var5];
                    var8 = undefined;
                    var13 = var4.bind(var8)(var3);
                    var12 = var13.withSpring;
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure2_slot7;
                    var11 = var3.tintColor;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var3 = _closure2_slot6;
                    var11 = var3.tintColor;
case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 11;
                    var6 = var3[var9];
                    var6 = var4.bind(var8)(var6);
                    var10 = var6.SUBTLE_SPRING;
                    var6 = 'animate-always';
                    var10 = var12.bind(var13)(var11, var10, var6);
                    var1['backgroundColor'] = var10;
                    var3 = var3[var5];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure2_slot7;
                    var3 = var3.borderColor;
                    _fun0003_ip = 15; continue _fun0003;
case 13:
                    var7 = _closure2_slot6;
                    var3 = var7.borderColor;
case 15:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var4.bind(var5)(var3, var2, var6);
                    var1['borderColor'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var25 = 10;
            var24 = var3[var25];
            var24 = var23.bind(var4)(var24);
            var24 = var24.withSpring;
            var20['withSpring'] = var24;
            var20['checked'] = var12;
            var20['selected'] = var22;
            var20['unselectedBackground'] = var21;
            var22 = 11;
            var21 = var3[var22];
            var21 = var23.bind(var4)(var21);
            var21 = var21.SUBTLE_SPRING;
            var20['SUBTLE_SPRING'] = var21;
            var9['__closure'] = var20;
            var20 = 2232234503354.0;
            var9['__workletHash'] = var20;
            var20 = _closure1_slot9;
            var9['__initData'] = var20;
            var17 = var17.bind(var19)(var9);
            var9 = 12;
            var9 = var3[var9];
            var20 = var23.bind(var4)(var9);
            var19 = var20.useToken;
            var9 = 6;
            var9 = var3[var9];
            var9 = var2.bind(var4)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CONTROL_SWITCH_KNOB_CHECKED_OFFSET;
            var24 = var19.bind(var20)(var9);
            var _closure2_slot8 = var24;
            var9 = var3[var10];
            var20 = var23.bind(var4)(var9);
            var19 = var20.useAnimatedStyle;
            var9 = function p() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot3;
                    var4 = 0;
                    if(!var8) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = _closure2_slot8;
case 16:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 11;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.SUBTLE_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['left'] = var2;
                    return var1;
                }
            };
            var21 = {};
            var25 = var3[var25];
            var25 = var23.bind(var4)(var25);
            var25 = var25.withSpring;
            var21['withSpring'] = var25;
            var21['checked'] = var12;
            var21['knobCheckedLeft'] = var24;
            var22 = var3[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.SUBTLE_SPRING;
            var21['SUBTLE_SPRING'] = var22;
            var9['__closure'] = var21;
            var21 = 12464345811935.0;
            var9['__workletHash'] = var21;
            var21 = _closure1_slot10;
            var9['__initData'] = var21;
            var9 = var19.bind(var20)(var9);
            var19 = var16.bind(var4)(var1, var7);
            var20 = var16.bind(var4)(var7, var1);
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'mana_switch_show_icons';
            var2 = var2.bind(var4)(var1);
            var1 = var18;
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = !var2;
case 18:
            var7 = null;
            if(var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = _closure1_slot5;
            var2 = _closure1_slot8;
            var16 = {};
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            if(var12) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = 15;
            var1 = var22[var1];
            var1 = var21.bind(var4)(var1);
            var16['source'] = var1;
            var1 = 7;
            var1 = var22[var1];
            var1 = var21.bind(var4)(var1);
            var1 = var1.Sizes;
            var1 = var1.SMALL;
            var16['size'] = var1;
            var23 = var8.unselectedIcon;
            var1 = new Array(2);
            var1[0] = var23;
            var1[1] = var20;
            var16['style'] = var1;
            var1 = var16;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var20 = 14;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var16['source'] = var20;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 7;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.Sizes;
            if(var18) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var18 = var20.SMALL;
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var18 = var20.SMALL_20;
case 27:
            var16['size'] = var18;
            var20 = var8.selected;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var16['style'] = var18;
            var1 = var16;
case 24:
            var7 = var3.bind(var4)(var2, var1);
case 20:
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var18 = var8.switch;
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var1['style'] = var16;
            var16 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 16;
                    var3 = var7[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var2 = 17;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.SELECTION;
                    var2 = var3.bind(var4)(var2);
case 28:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 30; continue _fun0005 }
case 8:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var16;
            var1['disabled'] = var13;
            var16 = true;
            var1['accessible'] = var16;
            var1['aria-hidden'] = var15;
            var15 = 'switch';
            var1['accessibilityRole'] = var15;
            var1['accessibilityLabel'] = var14;
            var1['accessibilityHint'] = var11;
            var11 = {};
            var11['disabled'] = var13;
            var11['checked'] = var12;
            var1['accessibilityState'] = var11;
            var6 = function onAccessibilityTap() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 16;
                    var3 = var7[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var2 = 17;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.SELECTION;
                    var2 = var3.bind(var4)(var2);
case 28:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var2 = !var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = global;
                    var3 = var2.setTimeout;
                    var2 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 31; continue _fun0007 }
case 3:
                            var3 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var2 = !var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 31:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1['onAccessibilityTap'] = var6;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var10 = var8.knob;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['style'] = var8;
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