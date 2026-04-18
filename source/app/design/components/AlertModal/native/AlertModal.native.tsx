// app/design/components/AlertModal/native/AlertModal.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var18 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var10;
    var1 = function getAlertModalItemKey(arg1) {
        var1 = arg1;
        var1 = var1.key;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function dismissTopAlert() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var7 = var6[var4];
            var1 = undefined;
            var7 = var5.bind(var1)(var7);
            var8 = var7.useAlertStore;
            var7 = var8.getState;
            var7 = var7.bind(var8)();
            var8 = var7.alerts;
            var7 = _closure1_slot5;
            var10 = var7.bind(var1)(var8);
            var7 = 0;
            var7 = var10[var7];
            var9 = var10.slice;
            var8 = 1;
            var8 = var9.bind(var10)(var8);
            var _closure2_slot0 = var8;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.dismissAlert;
            var4 = null;
            var8 = var4 == var7;
            var4 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7.key;
case 2:
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.useAlertStore;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure2_slot0;
                var1['alerts'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function AlertModalBackdrop() {
        var4 = _closure1_slot6;
        var3 = var4.useContext;
        var2 = _closure1_slot16;
        var7 = var3.bind(var4)(var2);
        var _closure2_slot0 = var7;
        var2 = _closure1_slot30;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var6, var2);
        var2 = 0;
        var11 = var3[var2];
        var _closure2_slot1 = var11;
        var2 = 1;
        var12 = var3[var2];
        var _closure2_slot2 = var12;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var10 = 11;
        var2 = var9[var10];
        var3 = var8.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function t() {
            var1 = {};
            var5 = _closure1_slot23;
            var3 = _closure2_slot2;
            var2 = var3.get;
            var4 = var2.bind(var3)();
            var3 = undefined;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = true;
                    var1 = arg1;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var1 = var2 === var3;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.TransitionStates;
                    var2 = var2.YEETED;
                    var1 = var3 === var2;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var3)(var4, var2);
            var1['opacity'] = var2;
            return var1;
        };
        var6 = {};
        var13 = _closure1_slot23;
        var6['withAlertModalSpring'] = var13;
        var6['sharedVisible'] = var12;
        var6['sharedTransitionState'] = var11;
        var11 = 9;
        var11 = var9[var11];
        var11 = var8.bind(var4)(var11);
        var11 = var11.TransitionStates;
        var6['TransitionStates'] = var11;
        var10 = var9[var10];
        var10 = var8.bind(var4)(var10);
        var10 = var10.runOnJS;
        var6['runOnJS'] = var10;
        var6['cleanUp'] = var7;
        var1['__closure'] = var6;
        var6 = 4470729133936.0;
        var1['__workletHash'] = var6;
        var6 = _closure1_slot20;
        var1['__initData'] = var6;
        var6 = var2.bind(var3)(var1);
        var3 = _closure1_slot10;
        var1 = 16;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Backdrop;
        var1 = {};
        var7 = 'strong';
        var1['blur'] = var7;
        var1['style'] = var6;
        var5 = _closure1_slot27;
        var1['onDismiss'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.Xkfav5;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var1;
    var6 = function AlertModal(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var18 = var1.header;
            var29 = var1.title;
            var25 = var1.content;
            var19 = var1.actions;
            var15 = var1.extraContent;
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var1 = _closure1_slot16;
            var22 = var2.bind(var3)(var1);
            var _closure2_slot0 = var22;
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var1 = _closure1_slot17;
            var8 = var2.bind(var3)(var1);
            var _closure2_slot1 = var8;
            var1 = _closure1_slot13;
            var4 = undefined;
            var26 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var1 = _closure1_slot19;
            var14 = var2.bind(var3)(var1);
            var _closure2_slot2 = var14;
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var24 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 18;
            var1 = var9[var1];
            var1 = var24.bind(var4)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var2.bind(var3)(var1);
            var1 = var1.reducedMotion;
            var13 = var1.enabled;
            var _closure2_slot3 = var13;
            var1 = 11;
            var2 = var9[var1];
            var3 = var24.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var3 = var2.bind(var3)(var8);
            var _closure2_slot4 = var3;
            var2 = _closure1_slot30;
            var7 = var2.bind(var4)();
            var6 = _closure1_slot4;
            var2 = 2;
            var7 = var6.bind(var4)(var7, var2);
            var6 = 0;
            var23 = var7[var6];
            var _closure2_slot5 = var23;
            var2 = 1;
            var27 = var7[var2];
            var _closure2_slot6 = var27;
            var2 = _closure1_slot1;
            var7 = 19;
            var7 = var9[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var20 = var7.top;
            var _closure2_slot7 = var20;
            var17 = var7.bottom;
            var _closure2_slot8 = var17;
            var7 = 20;
            var7 = var9[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var21 = var7.height;
            var _closure2_slot9 = var21;
            var7 = var9[var1];
            var11 = var24.bind(var4)(var7);
            var10 = var11.useAnimatedStyle;
            var7 = function A() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = 32;
                    var3 = var2 - var1;
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.max;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot8;
                    var2 = var4.bind(var5)(var2, var1);
                    var1 = 2;
                    var2 = var1 * var2;
                    var1 = {};
                    var4 = 'absolute';
                    var1['position'] = var4;
                    var9 = _closure1_slot23;
                    var6 = _closure2_slot6;
                    var5 = var6.get;
                    var7 = var5.bind(var6)();
                    var6 = undefined;
                    var5 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = true;
                            var1 = arg1;
                            var1 = var2 === var1;
                            if(!var1) { _fun0005_ip = 4; continue _fun0005 }
case 5:
                            var3 = _closure2_slot6;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 0;
                            var1 = var2 === var3;
case 4:
                            if(!var1) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                            var3 = _closure2_slot5;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
case 6:
                            if(!var1) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 8:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var9.bind(var6)(var7, var5);
                    var1['opacity'] = var5;
                    var7 = _closure2_slot4;
                    var5 = var7.get;
                    var9 = var5.bind(var7)();
                    var5 = 10;
                    var5 = var5 - var9;
                    var1['zIndex'] = var5;
                    var5 = var7.get;
                    var7 = var5.bind(var7)();
                    var5 = 0;
                    var7 = var7 > var5;
                    var5 = 'auto';
                    if(!var7) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var9 = _closure2_slot2;
                    var7 = var9.get;
                    var5 = var7.bind(var9)();
case 10:
                    var1['height'] = var5;
                    var2 = var3 - var2;
                    var1['maxHeight'] = var2;
                    var2 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = {};
                    var5 = _closure1_slot23;
                    var7 = _closure2_slot6;
                    var2 = var7.get;
                    var9 = var2.bind(var7)();
                    var2 = 0.7;
                    var7 = 1;
                    if(!(var7 === var9)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var10 = _closure2_slot4;
                    var9 = var10.get;
                    var10 = var9.bind(var10)();
                    var9 = 0.1;
                    var9 = var9 * var10;
                    var2 = var7 - var9;
case 14:
                    var2 = var5.bind(var6)(var2);
                    var3['scale'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var5 = _closure1_slot23;
                    var9 = _closure2_slot6;
                    var4 = var9.get;
                    var4 = var4.bind(var9)();
                    if(!(var7 !== var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var7 = _closure2_slot4;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var7 = 50;
                    var4 = var7 * var4;
                    var4 = var7 - var4;
                    _fun0004_ip = 18; continue _fun0004;
case 16:
                    var9 = [0];
                    var7 = -20;
                    var9[1] = var7;
                    var7 = -34;
                    var9[2] = var7;
                    var10 = _closure2_slot4;
                    var7 = var10.get;
                    var7 = var7.bind(var10)();
                    var7 = var9[var7];
                    var9 = null;
                    if(!(var9 == var7)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var9 = _closure2_slot6;
                    var8 = var9.get;
                    var9 = var8.bind(var9)();
                    var8 = -12;
                    var7 = var8 * var9;
case 19:
                    var4 = var7;
case 18:
                    var4 = var5.bind(var6)(var4);
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    _fun0004_ip = 21; continue _fun0004;
case 12:
                    var2 = new Array(0);
case 21:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['sharedVisible'] = var27;
            var12['sharedTransitionState'] = var23;
            var23 = 9;
            var23 = var9[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.TransitionStates;
            var12['TransitionStates'] = var23;
            var23 = var9[var1];
            var23 = var24.bind(var4)(var23);
            var23 = var23.runOnJS;
            var12['runOnJS'] = var23;
            var12['cleanUp'] = var22;
            var12['windowHeight'] = var21;
            var21 = 16;
            var12['ALERT_MODAL_MARGIN'] = var21;
            var12['safeAreaTop'] = var20;
            var12['safeAreaBottom'] = var17;
            var17 = _closure1_slot23;
            var12['withAlertModalSpring'] = var17;
            var12['sharedIndex'] = var3;
            var12['sharedTopHeight'] = var14;
            var12['useReducedMotion'] = var13;
            var7['__closure'] = var12;
            var12 = 655123755546.0;
            var7['__workletHash'] = var12;
            var12 = _closure1_slot21;
            var7['__initData'] = var12;
            var7 = var10.bind(var11)(var7);
            var12 = _closure1_slot6;
            var11 = var12.useLayoutEffect;
            var10 = new Array(2);
            var10[0] = var8;
            var10[1] = var3;
            var3 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var11.bind(var12)(var3, var10);
            var3 = 21;
            var3 = var9[var3];
            var10 = var2.bind(var4)(var3);
            var3 = function() {
                var2 = _closure1_slot27;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var3 = var10.bind(var4)(var3);
            var3 = _closure1_slot10;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = 'no-hide-descendants';
            if(!(var6 === var8)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var9 = 'auto';
case 22:
            var1['importantForAccessibility'] = var9;
            var6 = var6 !== var8;
            var1['accessibilityElementsHidden'] = var6;
            var8 = var26.content;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var5 = function onLayout(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['onLayout'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot9;
            var5 = {};
            var8 = false;
            var5['alwaysBounceVertical'] = var8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = var26.overflow;
            var8['style'] = var11;
            var13 = _closure1_slot11;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var17 = 22;
            var11 = var27[var17];
            var11 = var23.bind(var4)(var11);
            var12 = var11.Stack;
            var11 = {};
            var14 = 24;
            var11['spacing'] = var14;
            var14 = new Array(4);
            var14[0] = var18;
            var20 = _closure1_slot11;
            var17 = var27[var17];
            var17 = var23.bind(var4)(var17);
            var18 = var17.Stack;
            var17 = {};
            var21 = 8;
            var17['spacing'] = var21;
            var22 = var26.body;
            var21 = new Array(1);
            var21[0] = var22;
            var17['style'] = var21;
            var28 = _closure1_slot10;
            var22 = 23;
            var21 = var27[var22];
            var21 = var23.bind(var4)(var21);
            var24 = var21.Text;
            var21 = {'variant': 'heading-lg/bold', 'accessibilityRole': 'header', 'color': 'mobile-text-heading-primary'};
            var21['children'] = var29;
            var24 = var28.bind(var4)(var24, var21);
            var21 = new Array(2);
            var21[0] = var24;
            var24 = _closure1_slot10;
            var22 = var27[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-md/medium', 'color': 'text-default'};
            var26 = var26.contentText;
            var22['style'] = var26;
            var22['children'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var21[1] = var22;
            var17['children'] = var21;
            var17 = var20.bind(var4)(var18, var17);
            var14[1] = var17;
            var14[2] = var15;
            var15 = null;
            var17 = var15 != var19;
            if(!var17) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var18 = _closure1_slot10;
            var17 = _closure1_slot31;
            var16 = {};
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 24:
            var14[3] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var6;
    var1 = function useSharedAnimationState() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot6;
            var3 = var4.useContext;
            var2 = _closure1_slot15;
            var4 = var3.bind(var4)(var2);
            var _closure2_slot0 = var4;
            var5 = _closure1_slot6;
            var3 = var5.useContext;
            var2 = _closure1_slot16;
            var9 = var3.bind(var5)(var2);
            var _closure2_slot1 = var9;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 11;
            var3 = var2[var13];
            var12 = undefined;
            var5 = var6.bind(var12)(var3);
            var3 = var5.useSharedValue;
            var14 = 9;
            var2 = var2[var14];
            var2 = var6.bind(var12)(var2);
            var2 = var2.TransitionStates;
            var6 = var2.MOUNTED;
            var2 = 0;
            if(!(var4 === var6)) { _fun0006_ip = 2; continue _fun0006 }
case 26:
            var2 = 1;
case 2:
            var2 = var3.bind(var5)(var2);
            var _closure2_slot2 = var2;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var13];
            var5 = var11.bind(var12)(var3);
            var3 = var5.useSharedValue;
            var3 = var3.bind(var5)(var4);
            var _closure2_slot3 = var3;
            var8 = _closure1_slot6;
            var6 = var8.useLayoutEffect;
            var5 = new Array(3);
            var5[0] = var2;
            var5[1] = var4;
            var5[2] = var3;
            var4 = function() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var6.bind(var8)(var4, var5);
            var4 = var10[var13];
            var6 = var11.bind(var12)(var4);
            var5 = var6.useAnimatedReaction;
            var4 = function n() {
                var2 = _closure2_slot3;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['sharedTransitionState'] = var3;
            var4['__closure'] = var8;
            var8 = 14603144870585.0;
            var4['__workletHash'] = var8;
            var8 = _closure1_slot24;
            var4['__initData'] = var8;
            var1 = function t(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var4 = var2.YEETED;
                    var2 = arg1;
                    if(!(var2 !== var4)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var5 = _closure2_slot2;
                    var4 = var5.set;
                    var2 = 1;
                    var2 = var4.bind(var5)(var2);
                    _fun0007_ip = 29; continue _fun0007;
case 27:
                    var5 = _closure2_slot2;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = 1;
                    if(!(var4 !== var5)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.runOnJS;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.bind(var1)();
                    _fun0007_ip = 29; continue _fun0007;
case 30:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
case 29:
                    return var1;
                }
            };
            var8 = {};
            var14 = var10[var14];
            var14 = var11.bind(var12)(var14);
            var14 = var14.TransitionStates;
            var8['TransitionStates'] = var14;
            var8['sharedVisible'] = var2;
            var10 = var10[var13];
            var10 = var11.bind(var12)(var10);
            var10 = var10.runOnJS;
            var8['runOnJS'] = var10;
            var8['cleanUp'] = var9;
            var1['__closure'] = var8;
            var8 = 9486923983340.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot25;
            var1['__initData'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var5 = function AlertActions(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var4 = _closure1_slot10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 22;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Stack;
        var1 = {};
        var6 = 12;
        var1['spacing'] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var5;
    var4 = function AlertActionButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var1 = var4.onPress;
            var _closure2_slot0 = var1;
            var6 = var4.loading;
            var8 = null;
            var3 = Object.create(var8);
            var2 = 0;
            var3['onPress'] = var2;
            var3['loading'] = var2;
            var13 = {};
            var12 = var4;
            var11 = var3;
            var9 = copyDataProperties(var13, var12, var11);
            var7 = _closure1_slot6;
            var4 = var7.useState;
            var3 = false;
            var10 = var4.bind(var7)(var3);
            var7 = _closure1_slot4;
            var4 = undefined;
            var3 = 2;
            var3 = var7.bind(var4)(var10, var3);
            var7 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot1 = var2;
            var10 = _closure1_slot6;
            var3 = var10.useContext;
            var2 = _closure1_slot18;
            var2 = var3.bind(var10)(var2);
            var _closure2_slot2 = var2;
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 25;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var13 = var1;
            var12 = var9;
            var9 = copyDataProperties(var13, var12);
            var10 = true;
            var9 = 'grow';
            var1[8] = var10;
            if(!(var8 != var6)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var7 = var6;
case 32:
            var6 = 'loading';
            var1[5] = var7;
            var5 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                            var4 = undefined;
                            var3 = undefined;
                            var5 = _closure2_slot0;
                            var6 = null;
                            var7 = var6 == var5;
                            var5 = undefined;
                            if(var7) { _fun0009_ip = 28; continue _fun0009 }
case 36:
                            var8 = _closure2_slot0;
                            var7 = arg1;
                            var5 = var8.bind(var4)(var7);
case 28:
                            var3 = var5;
                            if(!(var6 != var5)) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                            var6 = var3;
                            var5 = global;
                            var5 = var5.Promise;
                            var5 = var6 instanceof var5;
                            if(!var5) { _fun0009_ip = 37; continue _fun0009 }
case 39:
                            var6 = _closure2_slot1;
                            var5 = true;
                            var5 = var6.bind(var4)(var5);
case 40: // try_start_0
                            SaveGenerator(address=84);
case 41:
                            return var3;
case 42:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0009_ip = 43; continue _fun0009 }
case 37: // try_end0
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 10;
                            var5 = var7[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.dismissAlert;
                            var5 = _closure2_slot2;
                            var5 = var6.bind(var7)(var5);
                            return var4;
case 43:
                            return var3;
case 44: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var3 = _closure2_slot1;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 34:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var6 = var5.bind(var4)();
            var5 = 'onPress';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var4;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var7);
    var8 = 0;
    var7 = var10[var8];
    var1 = undefined;
    var7 = var18.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var18.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var18.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var11 = var10[var7];
    var7 = metroImportAll;
    var11 = var7.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var7 = 4;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var12 = var7.View;
    var _closure1_slot7 = var12;
    var12 = var7.StyleSheet;
    var _closure1_slot8 = var12;
    var7 = var7.ScrollView;
    var _closure1_slot9 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var12 = var7.NOOP;
    var7 = 6;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var13 = var7.jsx;
    var _closure1_slot10 = var13;
    var13 = var7.jsxs;
    var _closure1_slot11 = var13;
    var7 = var7.Fragment;
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var10[var7];
    var14 = var9.bind(var1)(var7);
    var13 = var14.createStyles;
    var7 = {};
    var16 = 'center';
    var15 = {'flex': 1, 'position': 'relative', 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 16};
    var7['root'] = var15;
    var15 = {'backgroundColor': null, 'margin': 16, 'width': '100%', 'maxWidth': 400, 'height': '100%'};
    var17 = 8;
    var19 = var10[var17];
    var19 = var18.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.MOBILE_ALERT_BACKGROUND_DEFAULT;
    var15['backgroundColor'] = var19;
    var19 = var10[var17];
    var19 = var18.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.xl;
    var15['borderRadius'] = var19;
    var17 = var10[var17];
    var17 = var18.bind(var1)(var17);
    var17 = var17.shadows;
    var21 = var17.SHADOW_TOP_HIGH;
    var22 = var15;
    var17 = copyDataProperties(var22, var21);
    var7['content'] = var15;
    var15 = {'width': '100%', 'height': '100%', 'overflow': 'hidden', 'padding': 24, 'position': 'relative'};
    var7['overflow'] = var15;
    var15 = {};
    var15['alignItems'] = var16;
    var7['body'] = var15;
    var15 = {};
    var15['textAlign'] = var16;
    var7['contentText'] = var15;
    var7 = var13.bind(var14)(var7);
    var _closure1_slot13 = var7;
    var7 = {'overshootClamping': true, 'damping': 35, 'stiffness': 450, 'mass': 0.5, 'restDisplacementThreshold': 0.001};
    var _closure1_slot14 = var7;
    var13 = var11.createContext;
    var7 = 9;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.TransitionStates;
    var7 = var7.YEETED;
    var7 = var13.bind(var11)(var7);
    var _closure1_slot15 = var7;
    var7 = var11.createContext;
    var7 = var7.bind(var11)(var12);
    var _closure1_slot16 = var7;
    var7 = var11.createContext;
    var7 = var7.bind(var11)(var8);
    var _closure1_slot17 = var7;
    var8 = var11.createContext;
    var7 = '';
    var7 = var8.bind(var11)(var7);
    var _closure1_slot18 = var7;
    var8 = var11.createContext;
    var7 = null;
    var7 = var8.bind(var11)(var7);
    var _closure1_slot19 = var7;
    var8 = var11.memo;
    var7 = function() {
        var2 = _closure1_slot13;
        var4 = undefined;
        var3 = var2.bind(var4)();
        var _closure2_slot0 = var3;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 10;
        var6 = var9[var6];
        var8 = var2.bind(var4)(var6);
        var7 = var8.useAlertStore;
        var6 = function(arg1) {
            var1 = arg1;
            var1 = var1.alerts;
            return var1;
        };
        var7 = var7.bind(var8)(var6);
        var6 = 11;
        var6 = var9[var6];
        var10 = var2.bind(var4)(var6);
        var8 = var10.useSharedValue;
        var6 = 0;
        var11 = var8.bind(var10)(var6);
        var _closure2_slot1 = var11;
        var6 = function createTransitionGroupItems(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var1 = var6.length;
                var5 = 0;
                if(!(var5 !== var1)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                var1 = new Array(1);
                var3 = {'type': 'backdrop', 'key': 'backdrop'};
                var1[0] = var3;
                var _closure3_slot0 = var1;
                var4 = var6.slice;
                var3 = 3;
                var4 = var4.bind(var6)(var5, var3);
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    var4 = arg1;
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var5 = 'alert';
                    var1['type'] = var5;
                    var1['alert'] = var4;
                    var4 = var4.key;
                    var1['key'] = var4;
                    var4 = arg2;
                    var1['index'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
case 45:
                var1 = new Array(0);
                return var1;
            }
        };
        var7 = var6.bind(var4)(var7);
        var _closure2_slot2 = var7;
        var12 = _closure1_slot6;
        var10 = var12.useLayoutEffect;
        var8 = new Array(1);
        var8[0] = var7;
        var6 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = _closure2_slot2;
                var2 = var1.length;
                var1 = 0;
                if(!(var2 > var1)) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.dismissGlobalKeyboard;
                var1 = var1.bind(var2)();
case 47:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var10.bind(var12)(var6, var8);
        var10 = _closure1_slot6;
        var8 = var10.useCallback;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function(arg1) {
            var4 = _closure1_slot10;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = _closure1_slot8;
            var5 = var5.absoluteFillObject;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot0;
            var5 = 14;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.Dialog;
            var5 = {};
            var9 = _closure1_slot27;
            var5['onDismiss'] = var9;
            var10 = _closure1_slot10;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = _closure2_slot0;
            var11 = var11.root;
            var8['style'] = var11;
            var11 = 'box-none';
            var8['pointerEvents'] = var11;
            var11 = arg1;
            var8['children'] = var11;
            var8 = var10.bind(var3)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var8 = var8.bind(var10)(var3, var6);
        var10 = _closure1_slot6;
        var6 = var10.useCallback;
        var3 = new Array(1);
        var3[0] = var11;
        var1 = function(arg1, arg2, arg3, arg4) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var2 = arg2;
                var1 = var2.type;
                var4 = 'alert';
                if(!(var4 !== var1)) { _fun0012_ip = 49; continue _fun0012 }
case 50:
                var7 = _closure1_slot10;
                var6 = _closure1_slot28;
                var3 = undefined;
                var1 = {};
                var1 = var7.bind(var3)(var6, var1);
                _fun0012_ip = 51; continue _fun0012;
case 49:
                var3 = var2.alert;
                var1 = var3.node;
case 51:
                var3 = var2.type;
                var15 = -1;
                if(!(var4 === var3)) { _fun0012_ip = 52; continue _fun0012 }
case 39:
                var15 = var2.index;
case 52:
                var4 = _closure1_slot10;
                var2 = _closure1_slot19;
                var3 = var2.Provider;
                var2 = {};
                var6 = _closure2_slot1;
                var2['value'] = var6;
                var8 = _closure1_slot10;
                var6 = _closure1_slot16;
                var7 = var6.Provider;
                var6 = {};
                var9 = arg4;
                var6['value'] = var9;
                var11 = _closure1_slot10;
                var9 = _closure1_slot15;
                var10 = var9.Provider;
                var9 = {};
                var12 = arg3;
                var9['value'] = var12;
                var14 = _closure1_slot10;
                var12 = _closure1_slot17;
                var13 = var12.Provider;
                var12 = {};
                var12['value'] = var15;
                var17 = _closure1_slot10;
                var15 = _closure1_slot18;
                var16 = var15.Provider;
                var15 = {};
                var15['value'] = var5;
                var20 = _closure1_slot10;
                var18 = _closure1_slot6;
                var19 = var18.Suspense;
                var18 = {};
                var21 = null;
                var18['fallback'] = var21;
                var18['children'] = var1;
                var1 = undefined;
                var18 = var20.bind(var1)(var19, var18);
                var15['children'] = var18;
                var15 = var17.bind(var1)(var16, var15);
                var12['children'] = var15;
                var12 = var14.bind(var1)(var13, var12);
                var9['children'] = var12;
                var9 = var11.bind(var1)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var6 = var6.bind(var10)(var1, var3);
        var3 = _closure1_slot10;
        var1 = 9;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionGroup;
        var1 = {};
        var1['wrapChildren'] = var8;
        var1['items'] = var7;
        var1['renderItem'] = var6;
        var5 = _closure1_slot26;
        var1['getItemKey'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = var8.bind(var11)(var7);
    var8 = {};
    var11 = 'function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}';
    var8['code'] = var11;
    var _closure1_slot20 = var8;
    var8 = {};
    var11 = "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}";
    var8['code'] = var11;
    var _closure1_slot21 = var8;
    var8 = {};
    var11 = "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}";
    var8['code'] = var11;
    var _closure1_slot22 = var8;
    var8 = function() {
        var1 = function withAlertModalSpring(arg1, arg2) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 24;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var4.bind(var2)(var3);
            var5 = var6.withSpring;
            var9 = _closure1_slot14;
            var10 = arg1;
            var8 = 'animate-always';
            var7 = arg2;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var3 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 24;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var4 = _closure1_slot14;
        var3['MODAL_SPRING'] = var4;
        var1['__closure'] = var3;
        var3 = 15556562210180.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot22;
        var1['__initData'] = var2;
        return var1;
    };
    var8 = var8.bind(var1)();
    var _closure1_slot23 = var8;
    var8 = {};
    var11 = 'function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}';
    var8['code'] = var11;
    var _closure1_slot24 = var8;
    var8 = {};
    var11 = 'function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}';
    var8['code'] = var11;
    var _closure1_slot25 = var8;
    var8 = 26;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'design/components/AlertModal/native/AlertModal.native.tsx';
    var8 = var9.bind(var10)(var8);
    var3['AlertModalContainer'] = var7;
    var7 = function useDismissModalCallback() {
        var5 = _closure1_slot6;
        var4 = var5.useContext;
        var3 = _closure1_slot18;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dismissAlert;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDismissModalCallback'] = var7;
    var3['AlertModal'] = var6;
    var3['AlertActions'] = var5;
    var3['AlertActionButton'] = var4;
    var2 = function showConfirmModal(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var6 = var2.key;
            var10 = var2.title;
            var9 = var2.content;
            var19 = var2.confirmText;
            var17 = var2.cancelText;
            var1 = undefined;
            if(!(var17 === var1)) { _fun0013_ip = 6; continue _fun0013 }
case 53:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 17;
            var4 = var8[var3];
            var4 = var7.bind(var1)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.ETE/oC;
            var17 = var4.bind(var5)(var3);
case 6:
            var20 = var2.variant;
            if(!(var20 === var1)) { _fun0013_ip = 26; continue _fun0013 }
case 54:
            var20 = 'destructive';
case 26:
            var18 = var2.onConfirm;
            var16 = var2.onCancel;
            var5 = var2.onCloseCallback;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.openAlert;
            var8 = _closure1_slot10;
            var7 = _closure1_slot29;
            var2 = {};
            var2['title'] = var10;
            var2['content'] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = {};
            var14 = _closure1_slot10;
            var15 = _closure1_slot32;
            var12 = {};
            var12['variant'] = var20;
            var12['text'] = var19;
            var12['onPress'] = var18;
            var14 = var14.bind(var1)(var15, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var14 = _closure1_slot10;
            var13 = {};
            var18 = 'secondary';
            var13['variant'] = var18;
            var13['text'] = var17;
            var13['onPress'] = var16;
            var13 = var14.bind(var1)(var15, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var1)(var10, var9);
            var2['actions'] = var9;
            var2 = var8.bind(var1)(var7, var2);
            var2 = var3.bind(var4)(var6, var2, var5);
            return var1;
        }
    };
    var3['showConfirmModal'] = var2;
    return var1;
})();