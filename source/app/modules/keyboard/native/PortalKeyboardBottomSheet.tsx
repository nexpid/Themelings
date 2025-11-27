// app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function PortalKeyboardBottomSheetHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.style;
            var8 = var1.handleCollapse;
            var1 = _closure1_slot10;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var11 = var1.bind(var2)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = var10.headerContainer;
            var6 = new Array(3);
            var6[0] = var9;
            var9 = undefined;
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var10.headerContainerScreenReaderEnabled;
case 2:
            var6[1] = var9;
            var6[2] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 8;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ActionSheetDragHandle;
            var5 = {};
            var5['onPress'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var8 = var4.Platform;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.isIOS;
    var4 = var4.bind(var8)();
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'top': 0, 'left': 0};
    var4['container'] = var10;
    var10 = {};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var13;
    var13 = 'hidden';
    var10['overflow'] = var13;
    var4['background'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var10['borderTopLeftRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var10['borderTopRightRadius'] = var13;
    var13 = '100%';
    var10['width'] = var13;
    var13 = 8;
    var14 = var6[var13];
    var14 = var5.bind(var1)(var14);
    var14 = var14.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var10['height'] = var14;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var13 = -var13;
    var10['marginBottom'] = var13;
    var4['headerContainer'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var13 = -var13;
    var10['marginBottom'] = var13;
    var4['headerContainerScreenReaderEnabled'] = var10;
    var10 = {'overflow': 'hidden', 'display': 'flex'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var11;
    var4['roundingView'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp')};}";
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = var7.forwardRef;
    var2 = function PortalKeyboardBottomSheet(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.animatedIndex;
            var _closure2_slot0 = var11;
            var33 = var1.animatedPosition;
            var20 = var1.chatInputRef;
            var _closure2_slot1 = var20;
            var13 = var1.children;
            var3 = var1.isAppsKeyboard;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = false;
case 4:
            var _closure2_slot2 = var3;
            var32 = var1.animationConfigs;
            var31 = var1.onClose;
            var _closure2_slot3 = var31;
            var2 = var1.transitionState;
            var22 = var1.backdropComponent;
            var24 = var1.headerStyle;
            var _closure2_slot4 = var24;
            var18 = var1.disableHeaderRoundingAnimation;
            var17 = var1.roundingViewStyle;
            var19 = var1.onAnimate;
            var _closure2_slot5 = var19;
            var12 = var1.rendersHandle;
            if(!(var12 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var12 = true;
case 6:
            var _closure2_slot6 = var12;
            var29 = var1.width;
            var35 = var1.forceMaxHeight;
            if(!(var35 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var35 = false;
case 8:
            var _closure2_slot7 = var35;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var1 = _closure1_slot10;
            var16 = var1.bind(var4)();
            var14 = _closure1_slot4;
            var1 = var14.useRef;
            var23 = null;
            var34 = var1.bind(var14)(var23);
            _closure2_slot8 = var34;
            var8 = _closure1_slot1;
            var42 = _closure1_slot2;
            var21 = 10;
            var1 = var42[var21];
            var5 = var8.bind(var4)(var1);
            var1 = {};
            var1['forceMaxHeight'] = var35;
            var9 = var5.bind(var4)(var1);
            var43 = _closure1_slot0;
            var1 = 11;
            var1 = var42[var1];
            var1 = var43.bind(var4)(var1);
            var1 = var1.TransitionStates;
            var1 = var1.YEETED;
            var1 = var2 === var1;
            _closure2_slot9 = var1;
            var2 = 12;
            var2 = var42[var2];
            var7 = var43.bind(var4)(var2);
            var5 = var7.useBottomSheetImperativeHandle;
            var2 = arg2;
            var2 = var5.bind(var7)(var2, var34);
            var7 = var14.useLayoutEffect;
            var5 = new Array(2);
            var5[0] = var34;
            var5[1] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 10; continue _fun0003 }
case 12:
                    var1 = var2.forceClose;
                    var1 = var1.bind(var2)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var14)(var2, var5);
            var2 = 13;
            var2 = var42[var2];
            var10 = var43.bind(var4)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var10)(var5, var2);
            var2 = 14;
            var2 = var42[var2];
            var2 = var8.bind(var4)(var2);
            var27 = var2.bind(var4)();
            var2 = 15;
            var2 = var42[var2];
            var2 = var43.bind(var4)(var2);
            var2 = var2.KeyboardTypes;
            var26 = var2.EXPRESSION;
            var2 = 9;
            var2 = var42[var2];
            var5 = var43.bind(var4)(var2);
            var2 = var5.useIsScreenReaderEnabled;
            var2 = var2.bind(var5)();
            _closure2_slot10 = var2;
            var10 = var14.useCallback;
            var5 = new Array(5);
            var5[0] = var20;
            var5[1] = var1;
            var5[2] = var19;
            var5[3] = var31;
            var5[4] = var3;
            var3 = function(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = -1;
                    if(!(var2 === var5)) { _fun0004_ip = 15; continue _fun0004 }
case 13:
                    if(!(var7 !== var5)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var2 = -1;
                    if(!(var2 !== var5)) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var6 = _closure2_slot5;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var7, var5, var4);
case 19:
                    var3 = 0;
                    if(!(var3 !== var7)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var6 = 1;
                    if(!(var6 === var7)) { _fun0004_ip = 16; continue _fun0004 }
case 23:
                    if(!(var3 === var5)) { _fun0004_ip = 16; continue _fun0004 }
case 24:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.isChannelFocused;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 25:
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 26:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 27:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 16; continue _fun0004;
case 21:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var6 = undefined;
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.KEYBOARD;
                    if(!(var4 !== var3)) { _fun0004_ip = 16; continue _fun0004 }
case 28:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 17;
                    var3 = var7[var2];
                    var4 = var5.bind(var6)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 16; continue _fun0004;
case 15:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 29:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var10.bind(var14)(var3, var5);
            var5 = 19;
            var3 = var42[var5];
            var19 = var43.bind(var4)(var3);
            var10 = var19.useDerivedValue;
            var3 = function V() {
                var2 = _closure2_slot0;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0.975;
                var1 = var2 > var1;
                return var1;
            };
            var20 = {};
            var20['animatedIndex'] = var11;
            var3['__closure'] = var20;
            var20 = 2001839633402.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot11;
            var3['__initData'] = var20;
            var3 = var10.bind(var19)(var3);
            _closure2_slot11 = var3;
            var10 = var42[var5];
            var25 = var43.bind(var4)(var10);
            var20 = var25.useAnimatedReaction;
            var19 = function L() {
                var2 = _closure2_slot11;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = {};
            var10['isFullyExpanded'] = var3;
            var19['__closure'] = var10;
            var10 = 9531298805666.0;
            var19['__workletHash'] = var10;
            var10 = _closure1_slot12;
            var19['__initData'] = var10;
            var10 = function J(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = null;
                    var2 = arg2;
                    if(!(var3 != var2)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    if(var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var1 = _closure2_slot7;
case 32:
                    if(var1) { _fun0005_ip = 30; continue _fun0005 }
case 12:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 19;
                    var1 = var6[var1];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = 20;
                    var1 = var6[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.dismissGlobalKeyboard;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = {};
            var28['forceMaxHeight'] = var35;
            var35 = var42[var5];
            var35 = var43.bind(var4)(var35);
            var35 = var35.runOnJS;
            var28['runOnJS'] = var35;
            var35 = 20;
            var35 = var42[var35];
            var35 = var43.bind(var4)(var35);
            var35 = var35.dismissGlobalKeyboard;
            var28['dismissGlobalKeyboard'] = var35;
            var10['__closure'] = var28;
            var28 = 14649856286006.0;
            var10['__workletHash'] = var28;
            var28 = _closure1_slot13;
            var10['__initData'] = var28;
            var10 = var20.bind(var25)(var19, var10);
            var10 = 21;
            var10 = var42[var10];
            var19 = var8.bind(var4)(var10);
            var10 = function() {
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var19.bind(var4)(var10);
            var20 = var14.useCallback;
            var19 = function(arg1) {
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.BottomSheetBackdrop;
                var1 = {};
                var7 = arg1;
                var8 = var1;
                var5 = copyDataProperties(var8, var7);
                var6 = 'collapse';
                var5 = 'pressBehavior';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10 = new Array(0);
            var20 = var20.bind(var14)(var19, var10);
            var19 = var14.useCallback;
            var10 = new Array(5);
            var10[0] = var24;
            var10[1] = var34;
            var10[2] = var12;
            var10[3] = var3;
            var10[4] = var2;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var3 = false;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0007_ip = 36; continue _fun0007 }
case 33:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot17;
                    var3 = {};
                    var6 = _closure2_slot4;
                    var3['style'] = var6;
                    var6 = function handleCollapse() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = _closure2_slot8;
                            var4 = var1.current;
                            var1 = null;
                            if(!(var1 != var4)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                            var3 = var4.collapse;
                            var3 = var3.bind(var4)();
case 37:
                            var3 = _closure2_slot10;
                            if(!var3) { _fun0008_ip = 39; continue _fun0008 }
case 10:
                            var2 = _closure2_slot8;
                            var2 = var2.current;
                            if(!(var1 != var2)) { _fun0008_ip = 39; continue _fun0008 }
case 5:
                            var1 = var2.forceClose;
                            var1 = var1.bind(var2)();
case 39:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3['handleCollapse'] = var6;
                    var2 = _closure2_slot11;
                    var3['isFullyExpanded'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 36:
                    return var1;
                }
            };
            var24 = var19.bind(var14)(var3, var10);
            var3 = var42[var5];
            var19 = var43.bind(var4)(var3);
            var10 = var19.useAnimatedStyle;
            var3 = function q() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 19;
                var3 = var6[var2];
                var4 = undefined;
                var12 = var5.bind(var4)(var3);
                var11 = var12.interpolate;
                var3 = _closure2_slot0;
                var7 = var3.get;
                var16 = var7.bind(var3)();
                var15 = [0, 1];
                var14 = [0, 15];
                var7 = 'clamp';
                var17 = var12;
                var13 = var7;
                var8 = var17[var11](var16, var15, var14, var13, var12);
                var1['borderTopLeftRadius'] = var8;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.interpolate;
                var2 = var3.get;
                var16 = var2.bind(var3)();
                var15 = [0, 1];
                var14 = [0, 15];
                var17 = var6;
                var2 = var17[var5](var16, var15, var14, var13, var12);
                var1['borderTopRightRadius'] = var2;
                return var1;
            };
            var25 = {};
            var28 = var42[var5];
            var28 = var43.bind(var4)(var28);
            var28 = var28.interpolate;
            var25['interpolate'] = var28;
            var25['animatedIndex'] = var11;
            var3['__closure'] = var25;
            var25 = 13716272266662.0;
            var3['__workletHash'] = var25;
            var25 = _closure1_slot14;
            var3['__initData'] = var25;
            var19 = var10.bind(var19)(var3);
            var3 = 22;
            var3 = var42[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var37 = var3.left;
            var36 = var3.right;
            var3 = 23;
            var3 = var42[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var10 = true;
            var3['ignoreKeyboard'] = var10;
            var3 = var8.bind(var4)(var3);
            var8 = var3.height;
            var35 = var3.width;
            var25 = var14.useCallback;
            var10 = function(arg1) {
                var4 = _closure1_slot7;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 16;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.BottomSheetFooter;
                var1 = {};
                var9 = arg1;
                var10 = var1;
                var7 = copyDataProperties(var10, var9);
                var7 = _closure1_slot7;
                var5 = 24;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.PortalHost;
                var5 = {};
                var8 = 'expression-footer';
                var5['name'] = var8;
                var6 = var7.bind(var3)(var6, var5);
                var5 = 'children';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3 = new Array(0);
            var25 = var25.bind(var14)(var10, var3);
            var10 = var14.useState;
            var3 = false;
            var14 = var10.bind(var14)(var3);
            var10 = _closure1_slot3;
            var3 = 2;
            var28 = var10.bind(var4)(var14, var3);
            var10 = 0;
            var14 = var28[var10];
            var3 = 1;
            var41 = var28[var3];
            _closure2_slot12 = var41;
            var3 = var42[var5];
            var39 = var43.bind(var4)(var3);
            var38 = var39.useAnimatedReaction;
            var28 = function Q() {
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
            var3['animatedIndex'] = var11;
            var28['__closure'] = var3;
            var3 = 8952872079740.0;
            var28['__workletHash'] = var3;
            var3 = _closure1_slot15;
            var28['__initData'] = var3;
            var3 = function z(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0009_ip = 40; continue _fun0009 }
case 11:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot12;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var40 = {};
            var42 = var42[var5];
            var42 = var43.bind(var4)(var42);
            var42 = var42.runOnJS;
            var40['runOnJS'] = var42;
            var40['setAccessibilityViewIsModal'] = var41;
            var3['__closure'] = var40;
            var40 = 16051387075966.0;
            var3['__workletHash'] = var40;
            var40 = _closure1_slot16;
            var3['__initData'] = var40;
            var3 = var38.bind(var39)(var28, var3);
            var28 = var2;
            if(var28) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var28 = var1;
case 41:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = undefined;
            if(!var7) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var5 = 'no-hide-descendants';
case 43:
            var1['importantForAccessibility'] = var5;
            var7 = var16.container;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = {};
            if(!(var23 == var29)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var35 = var35 - var37;
            var29 = var35 - var36;
case 45:
            var7['width'] = var29;
            var7['height'] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = 'box-none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var29 = _closure1_slot2;
            var5 = 16;
            var5 = var29[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var34;
            var5['animatedIndex'] = var11;
            var5['animatedPosition'] = var33;
            var5['animationConfigs'] = var32;
            var5['onClose'] = var31;
            var5['onAnimate'] = var30;
            var30 = !var28;
            var5['enableContentPanningGesture'] = var30;
            var28 = !var28;
            var5['enableHandlePanningGesture'] = var28;
            var5['handleComponent'] = var24;
            var28 = _closure1_slot0;
            var24 = 5;
            var24 = var29[var24];
            var28 = var28.bind(var4)(var24);
            var24 = var28.isAndroid;
            var28 = var24.bind(var28)();
            var24 = undefined;
            if(!var28) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var24 = undefined;
            if(!(var27 === var26)) { _fun0002_ip = 47; continue _fun0002 }
case 49:
            var24 = var25;
case 47:
            var5['renderFooter'] = var24;
            var24 = var16.background;
            var5['backgroundStyle'] = var24;
            if(!(var23 != var22)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var20 = var22;
case 50:
            var5['backdropComponent'] = var20;
            var20 = new Array(2);
            var22 = -10;
            var20[0] = var22;
            var20[1] = var21;
            var5['activeOffsetY'] = var20;
            var10 = 0;
            if(!var12) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 8;
            var12 = var21[var12];
            var12 = var20.bind(var4)(var12);
            var10 = var12.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
case 52:
            var5['handleHeight'] = var10;
            var45 = var5;
            var44 = var9;
            var9 = copyDataProperties(var45, var44);
            var12 = _closure1_slot7;
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 25;
            var9 = var20[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.AccessibilityViewAnimated;
            var9 = {};
            var20 = 'portal-keyboard-sheet';
            var9['nativeID'] = var20;
            var20 = var16.roundingView;
            var16 = new Array(3);
            var16[0] = var20;
            var18 = !var18;
            if(!var18) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var18 = var19;
case 54:
            var16[1] = var18;
            var16[2] = var17;
            var9['style'] = var16;
            var15 = function onAccessibilityEscape() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                    var1 = var2.collapse;
                    var1 = var1.bind(var2)();
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onAccessibilityEscape'] = var15;
            var9['accessibilityViewIsModal'] = var14;
            var9['children'] = var13;
            var10 = var12.bind(var4)(var10, var9);
            var9 = 'children';
            var5[var9] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = _closure1_slot9;
            if(!var7) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 26;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['animatedSheetIndex'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 56:
            var5[1] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 27;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
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
    var4 = 'modules/keyboard/native/PortalKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();