// app/modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function MediaKeyboardBackground(arg1) {
        var1 = arg1;
        var8 = var1.pointerEvents;
        var7 = var1.style;
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {'pointerEvents': null, 'accessible': true, 'accessibilityRole': 'adjustable'};
        var1['pointerEvents'] = var8;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 10;
        var8 = var11[var5];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var5 = var11[var5];
        var5 = var10.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.XONG6A;
        var5 = var8.bind(var9)(var5);
        var1['accessibilityLabel'] = var5;
        var5 = new Array(2);
        var5[0] = var7;
        var6 = var6.background;
        var5[1] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HEADER_HANDLE_HEIGHT;
    var _closure1_slot6 = var8;
    var4 = var4.MediaPickerActionSheetEngagedActions;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isMetaQuest;
    var4 = var4.bind(var8)();
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isIOS;
    var4 = var4.bind(var8)();
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_KEYBOARD_PANEL_BACKGROUND;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS;
    var10['borderRadius'] = var11;
    var4['background'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){runOnJS(handleSheetOpenChange)(isOpen);}}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboardBottomSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.accessoriesComponent;
            var24 = var1.animatedIndex;
            var _closure2_slot0 = var24;
            var23 = var1.animatedPosition;
            var26 = var1.bottomSheetRef;
            var _closure2_slot1 = var26;
            var14 = var1.children;
            var21 = var1.handleComponent;
            var12 = var1.onClose;
            var _closure2_slot2 = var12;
            var2 = var1.onAccessibilityFocusRestore;
            var _closure2_slot3 = var2;
            var2 = var1.transitionState;
            var25 = var1.animationConfigs;
            var6 = var1.overlayComponent;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var1 = _closure1_slot13;
            var19 = var1.bind(var4)();
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var3 = var9.bind(var4)(var1);
            var1 = {};
            var27 = false;
            var1['forceMaxHeight'] = var27;
            var7 = var3.bind(var4)(var1);
            var3 = _closure1_slot0;
            var1 = 12;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.TransitionStates;
            var1 = var1.YEETED;
            var1 = var2 === var1;
            var _closure2_slot4 = var1;
            var2 = 13;
            var2 = var5[var2];
            var10 = var9.bind(var4)(var2);
            var2 = 'MediaKeyboardBottomSheet';
            var10 = var10.bind(var4)(var2);
            var2 = 14;
            var2 = var5[var2];
            var2 = var9.bind(var4)(var2);
            var9 = var2.bind(var4)();
            var17 = _closure1_slot4;
            var15 = var17.useCallback;
            var13 = function(arg1) {
                var4 = _closure1_slot9;
                var3 = _closure1_slot18;
                var2 = {};
                var5 = arg1;
                var6 = var2;
                var1 = copyDataProperties(var6, var5);
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = new Array(0);
            var20 = var15.bind(var17)(var13, var2);
            var15 = var17.useCallback;
            var13 = function(arg1) {
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.BottomSheetBackdrop;
                var1 = {};
                var8 = arg1;
                var9 = var1;
                var6 = copyDataProperties(var9, var8);
                var6 = _closure1_slot1;
                var5 = 16;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = 'ViewComponent';
                var1[4] = var6;
                var6 = 'collapse';
                var5 = 'pressBehavior';
                var1[4] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2 = new Array(0);
            var18 = var15.bind(var17)(var13, var2);
            var15 = var17.useCallback;
            var13 = new Array(2);
            var13[0] = var1;
            var13[1] = var12;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = arg2;
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = -1;
                    if(!(var3 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var2 = var4 !== var2;
                    if(!var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = 0;
                    var2 = var3 === var4;
case 5:
                    if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 17;
                    var2 = var5[var2];
                    var4 = undefined;
                    var8 = var3.bind(var4)(var2);
                    var7 = var8.triggerHapticFeedback;
                    var3 = _closure1_slot1;
                    var2 = 18;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var7.bind(var8)(var2);
                    var2 = 19;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot8;
                    var3 = var2.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                    var2 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.FULLY_EXPANDED;
                    var2['action'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0002_ip = 7; continue _fun0002;
case 4:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var15.bind(var17)(var2, var13);
            var2 = 20;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsScreenReaderEnabled;
            var2 = var2.bind(var3)();
            var _closure2_slot5 = var2;
            var22 = var2;
            if(var22) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var22 = var1;
case 10:
            var30 = _closure1_slot4;
            var3 = var30.useState;
            var15 = var3.bind(var30)(var27);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var15, var3);
            var3 = 0;
            var15 = var5[var3];
            var3 = 1;
            var33 = var5[var3];
            _closure2_slot6 = var33;
            var3 = var30.useRef;
            var5 = null;
            var17 = var3.bind(var30)(var5);
            _closure2_slot7 = var17;
            var3 = var30.useRef;
            var3 = var3.bind(var30)(var27);
            _closure2_slot8 = var3;
            var3 = var30.useRef;
            var3 = var3.bind(var30)(var5);
            _closure2_slot9 = var3;
            var27 = var30.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var2 = _closure2_slot9;
                    var4 = var2.current;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = _closure2_slot9;
                    var2['current'] = var3;
case 12:
                    var2 = arg1;
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = _closure2_slot8;
                    var2 = false;
                    var3['current'] = var2;
                    _fun0003_ip = 16; continue _fun0003;
case 14:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    var2 = !var3;
case 17:
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 19:
                    var2 = _closure2_slot9;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var2 = _closure2_slot9;
                        var1 = null;
                        var2['current'] = var1;
                        var2 = _closure2_slot8;
                        var1 = true;
                        var2['current'] = var1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.setAccessibilityFocus;
                        var2 = {};
                        var5 = _closure2_slot7;
                        var2['ref'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = 100;
                    var1 = var5.bind(var4)(var3, var1);
                    var2['current'] = var1;
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var27.bind(var30)(var2, var3);
            _closure2_slot10 = var35;
            var2 = _closure1_slot0;
            var27 = _closure1_slot2;
            var34 = 22;
            var3 = var27[var34];
            var31 = var2.bind(var4)(var3);
            var29 = var31.useAnimatedReaction;
            var28 = function T() {
                var2 = _closure2_slot0;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 >= var1;
                return var1;
            };
            var3 = {};
            var3['animatedIndex'] = var24;
            var28['__closure'] = var3;
            var3 = 14174017487042.0;
            var28['__workletHash'] = var3;
            var3 = _closure1_slot14;
            var28['__initData'] = var3;
            var3 = function D(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var5 = arg2;
                    var2 = _closure1_slot12;
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 3:
                    var2 = var3 !== var5;
case 20:
                    if(!var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = null;
                    var4 = var4 != var5;
                    if(var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var4 = var3;
case 23:
                    var2 = var4;
case 21:
                    if(!var2) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot10;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var32 = {};
            var36 = _closure1_slot12;
            var32['IS_IOS'] = var36;
            var36 = var27[var34];
            var36 = var2.bind(var4)(var36);
            var36 = var36.runOnJS;
            var32['runOnJS'] = var36;
            var32['handleSheetOpenChange'] = var35;
            var3['__closure'] = var32;
            var32 = 12464478404147.0;
            var3['__workletHash'] = var32;
            var32 = _closure1_slot15;
            var3['__initData'] = var32;
            var3 = var29.bind(var31)(var28, var3);
            var3 = var27[var34];
            var31 = var2.bind(var4)(var3);
            var29 = var31.useAnimatedReaction;
            var28 = function H() {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.max;
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var2 = 0;
                var1 = var3.bind(var4)(var1, var2);
                var1 = var1 > var2;
                return var1;
            };
            var3 = {};
            var3['animatedIndex'] = var24;
            var28['__closure'] = var3;
            var3 = 12101028946794.0;
            var28['__workletHash'] = var3;
            var3 = _closure1_slot16;
            var28['__initData'] = var3;
            var3 = function w(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var32 = {};
            var34 = var27[var34];
            var34 = var2.bind(var4)(var34);
            var34 = var34.runOnJS;
            var32['runOnJS'] = var34;
            var32['setAccessibilityViewIsModal'] = var33;
            var3['__closure'] = var32;
            var32 = 4587285719468.0;
            var3['__workletHash'] = var32;
            var32 = _closure1_slot17;
            var3['__initData'] = var32;
            var3 = var29.bind(var31)(var28, var3);
            var3 = _closure1_slot1;
            var28 = 23;
            var28 = var27[var28];
            var29 = var3.bind(var4)(var28);
            var28 = function() {
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot9;
                        var2 = var2.current;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0006_ip = 5; continue _fun0006 }
case 13:
                        var2 = global;
                        var5 = var2.clearTimeout;
                        var2 = _closure2_slot9;
                        var4 = var2.current;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
case 5:
                        var2 = _closure2_slot2;
                        if(!(var3 != var2)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var28 = var29.bind(var4)(var28);
            var29 = var30.useLayoutEffect;
            var28 = new Array(3);
            var28[0] = var26;
            var28[1] = var1;
            var28[2] = var12;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var3 = _closure2_slot2;
                    if(!(var4 != var3)) { _fun0007_ip = 31; continue _fun0007 }
case 23:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
case 31:
                    var3 = undefined;
                    return var3;
case 33:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = var3.forceClose;
                    var2 = var2.bind(var3)();
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure2_slot2;
                            var1 = null;
                            var4 = var1 == var3;
                            var3 = undefined;
                            var1 = undefined;
                            if(var4) { _fun0008_ip = 35; continue _fun0008 }
case 20:
                            var2 = _closure2_slot2;
                            var1 = var2.bind(var3)();
case 35:
                            return var1;
                        }
                    };
                    var2 = 500;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var29.bind(var30)(var1, var28);
            var1 = 24;
            var1 = var27[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var31 = var1.left;
            var30 = var1.right;
            var3 = _closure1_slot10;
            var1 = 25;
            var1 = var27[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            if(!var10) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var5 = var9;
case 36:
            var1['gradient'] = var5;
            var10 = _closure1_slot9;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var5 = 15;
            var5 = var29[var5];
            var9 = var28.bind(var4)(var5);
            var5 = {};
            var27 = {};
            var27['marginLeft'] = var31;
            var27['marginRight'] = var30;
            var5['style'] = var27;
            var27 = 16;
            var27 = var29[var27];
            var27 = var28.bind(var4)(var27);
            var5['BodyComponent'] = var27;
            var5['ref'] = var26;
            var5['animationConfigs'] = var25;
            var5['animatedIndex'] = var24;
            var5['animatedPosition'] = var23;
            var23 = !var22;
            if(!var23) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var24 = _closure1_slot11;
            var23 = !var24;
case 38:
            var5['enableContentPanningGesture'] = var23;
            var22 = !var22;
            var5['enableHandlePanningGesture'] = var22;
            var5['handleComponent'] = var21;
            var5['backgroundComponent'] = var20;
            var19 = var19.background;
            var5['backgroundStyle'] = var19;
            var5['backdropComponent'] = var18;
            var5['onAnimate'] = var13;
            var13 = _closure1_slot6;
            var5['handleHeight'] = var13;
            var5['onClose'] = var12;
            var38 = var5;
            var37 = var7;
            var12 = copyDataProperties(var38, var37);
            var13 = _closure1_slot9;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 26;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.AccessibilityViewAnimated;
            var11 = {};
            var11['ref'] = var17;
            var17 = 'media-keyboard-sheet';
            var11['nativeID'] = var17;
            var16 = function onAccessibilityEscape() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 22; continue _fun0009 }
case 40:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var11['onAccessibilityEscape'] = var16;
            var11['accessibilityViewIsModal'] = var15;
            var11['children'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = 'children';
            var5[10] = var12;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var7 = var8.bind(var4)(var7);
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();