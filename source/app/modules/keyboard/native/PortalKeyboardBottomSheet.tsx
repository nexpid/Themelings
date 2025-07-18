// app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PortalKeyboardBottomSheetHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!var11) { _fun0001_ip = 92; continue _fun0001 }
 86:
            var9 = var10.headerContainerScreenReaderEnabled;
 92:
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Platform;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.isIOS;
    var4 = var4.bind(var7)();
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'top': 0, 'left': 0};
    var4['container'] = var9;
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var12;
    var12 = 'hidden';
    var9['overflow'] = var12;
    var4['background'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9['borderTopLeftRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9['borderTopRightRadius'] = var12;
    var12 = '100%';
    var9['width'] = var12;
    var12 = 8;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var13 = var13.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var9['height'] = var13;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    var12 = -var12;
    var9['marginBottom'] = var12;
    var4['headerContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var12 = -var12;
    var9['marginBottom'] = var12;
    var4['headerContainerScreenReaderEnabled'] = var9;
    var9 = {'overflow': 'hidden', 'display': 'flex'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['roundingView'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp')};}";
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PortalKeyboardBottomSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var21 = var1.chatInputRef;
            var _closure2_slot0 = var21;
            var14 = var1.children;
            var3 = var1.refKey;
            var _closure2_slot1 = var3;
            var34 = var1.animationConfigs;
            var33 = var1.onClose;
            var _closure2_slot2 = var33;
            var2 = var1.transitionState;
            var23 = var1.backdropComponent;
            var24 = var1.headerStyle;
            var _closure2_slot3 = var24;
            var19 = var1.disableHeaderRoundingAnimation;
            var18 = var1.roundingViewStyle;
            var20 = var1.onAnimate;
            var _closure2_slot4 = var20;
            var12 = var1.rendersHandle;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0002_ip = 104; continue _fun0002 }
 102:
            var12 = true;
 104:
            var _closure2_slot5 = var12;
            var30 = var1.width;
            var29 = var1.forceMaxHeight;
            if(!(var29 === var4)) { _fun0002_ip = 125; continue _fun0002 }
 123:
            var29 = false;
 125:
            var _closure2_slot6 = var29;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var1 = _closure1_slot10;
            var17 = var1.bind(var4)();
            var15 = _closure1_slot4;
            var5 = var15.useContext;
            var42 = _closure1_slot0;
            var41 = _closure1_slot2;
            var22 = 10;
            var1 = var41[var22];
            var1 = var42.bind(var4)(var1);
            var1 = var1.PortalKeyboardContext;
            var1 = var5.bind(var15)(var1);
            var11 = var1.animatedSheetIndex;
            _closure2_slot7 = var11;
            var31 = var1.animatedSheetPosition;
            var1 = var1.bottomSheetRefs;
            var13 = var1[var3];
            _closure2_slot8 = var13;
            var8 = _closure1_slot1;
            var1 = 11;
            var1 = var41[var1];
            var5 = var8.bind(var4)(var1);
            var1 = {};
            var1['forceMaxHeight'] = var29;
            var9 = var5.bind(var4)(var1);
            var1 = 12;
            var1 = var41[var1];
            var1 = var42.bind(var4)(var1);
            var1 = var1.TransitionStates;
            var1 = var1.YEETED;
            var1 = var2 === var1;
            _closure2_slot9 = var1;
            var7 = var15.useLayoutEffect;
            var5 = new Array(2);
            var5[0] = var13;
            var5[1] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0003_ip = 35; continue _fun0003 }
 10:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 35; continue _fun0003 }
 25:
                    var1 = var2.forceClose;
                    var1 = var1.bind(var2)();
 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var15)(var2, var5);
            var2 = 13;
            var2 = var41[var2];
            var10 = var42.bind(var4)(var2);
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
            var2 = var41[var2];
            var2 = var8.bind(var4)(var2);
            var28 = var2.bind(var4)();
            var2 = 15;
            var2 = var41[var2];
            var2 = var42.bind(var4)(var2);
            var2 = var2.KeyboardTypes;
            var27 = var2.EXPRESSION;
            var2 = 9;
            var2 = var41[var2];
            var5 = var42.bind(var4)(var2);
            var2 = var5.useIsScreenReaderEnabled;
            var2 = var2.bind(var5)();
            _closure2_slot10 = var2;
            var10 = var15.useCallback;
            var5 = new Array(5);
            var5[0] = var21;
            var5[1] = var1;
            var5[2] = var20;
            var5[3] = var33;
            var5[4] = var3;
            var3 = function(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0004_ip = 32; continue _fun0004 }
 19:
                    var2 = -1;
                    if(!(var2 === var5)) { _fun0004_ip = 277; continue _fun0004 }
 32:
                    if(!(var7 !== var5)) { _fun0004_ip = 297; continue _fun0004 }
 39:
                    var2 = -1;
                    if(!(var2 !== var5)) { _fun0004_ip = 297; continue _fun0004 }
 52:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 75; continue _fun0004 }
 62:
                    var6 = _closure2_slot4;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var7, var5, var4);
 75:
                    var3 = 0;
                    if(!(var3 !== var7)) { _fun0004_ip = 182; continue _fun0004 }
 81:
                    var6 = 1;
                    if(!(var6 === var7)) { _fun0004_ip = 297; continue _fun0004 }
 91:
                    if(!(var3 === var5)) { _fun0004_ip = 297; continue _fun0004 }
 98:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.isChannelFocused;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0004_ip = 297; continue _fun0004 }
 139:
                    var5 = _closure2_slot1;
                    var3 = 'apps';
                    if(!(var3 === var5)) { _fun0004_ip = 297; continue _fun0004 }
 154:
                    var3 = _closure2_slot0;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0004_ip = 297; continue _fun0004 }
 170:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 297; continue _fun0004;
 182:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var6 = undefined;
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.KEYBOARD;
                    if(!(var4 !== var3)) { _fun0004_ip = 297; continue _fun0004 }
 223:
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
                    _fun0004_ip = 297; continue _fun0004;
 277:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 297; continue _fun0004 }
 287:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 297:
                    var1 = undefined;
                    return var1;
                }
            };
            var32 = var10.bind(var15)(var3, var5);
            var5 = 19;
            var3 = var41[var5];
            var20 = var42.bind(var4)(var3);
            var10 = var20.useDerivedValue;
            var3 = function V() {
                var2 = _closure2_slot7;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0.975;
                var1 = var2 > var1;
                return var1;
            };
            var21 = {};
            var21['animatedIndex'] = var11;
            var3['__closure'] = var21;
            var21 = 2001839633402.0;
            var3['__workletHash'] = var21;
            var21 = _closure1_slot11;
            var3['__initData'] = var21;
            var3 = var10.bind(var20)(var3);
            _closure2_slot11 = var3;
            var10 = var41[var5];
            var25 = var42.bind(var4)(var10);
            var21 = var25.useAnimatedReaction;
            var20 = function L() {
                var2 = _closure2_slot11;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = {};
            var10['isFullyExpanded'] = var3;
            var20['__closure'] = var10;
            var10 = 9531298805666.0;
            var20['__workletHash'] = var10;
            var10 = _closure1_slot12;
            var20['__initData'] = var10;
            var10 = function J(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var3 = null;
                    var2 = arg2;
                    if(!(var3 != var2)) { _fun0005_ip = 82; continue _fun0005 }
 12:
                    if(var1) { _fun0005_ip = 22; continue _fun0005 }
 15:
                    var1 = _closure2_slot6;
 22:
                    if(var1) { _fun0005_ip = 82; continue _fun0005 }
 25:
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
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = {};
            var26['forceMaxHeight'] = var29;
            var29 = var41[var5];
            var29 = var42.bind(var4)(var29);
            var29 = var29.runOnJS;
            var26['runOnJS'] = var29;
            var29 = 20;
            var29 = var41[var29];
            var29 = var42.bind(var4)(var29);
            var29 = var29.dismissGlobalKeyboard;
            var26['dismissGlobalKeyboard'] = var29;
            var10['__closure'] = var26;
            var26 = 14649856286006.0;
            var10['__workletHash'] = var26;
            var26 = _closure1_slot13;
            var10['__initData'] = var26;
            var10 = var21.bind(var25)(var20, var10);
            var10 = 21;
            var10 = var41[var10];
            var20 = var8.bind(var4)(var10);
            var10 = function() {
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 23; continue _fun0006 }
 13:
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var20.bind(var4)(var10);
            var21 = var15.useCallback;
            var20 = function(arg1) {
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
            var21 = var21.bind(var15)(var20, var10);
            var20 = var15.useCallback;
            var10 = new Array(5);
            var10[0] = var24;
            var10[1] = var13;
            var10[2] = var12;
            var10[3] = var3;
            var10[4] = var2;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure2_slot5;
                    var3 = false;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0007_ip = 67; continue _fun0007 }
 15:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot17;
                    var3 = {};
                    var6 = _closure2_slot3;
                    var3['style'] = var6;
                    var6 = function handleCollapse() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = _closure2_slot8;
                            var4 = var1.current;
                            var1 = null;
                            if(!(var1 != var4)) { _fun0008_ip = 28; continue _fun0008 }
 18:
                            var3 = var4.collapse;
                            var3 = var3.bind(var4)();
 28:
                            var3 = _closure2_slot10;
                            if(!var3) { _fun0008_ip = 58; continue _fun0008 }
 35:
                            var2 = _closure2_slot8;
                            var2 = var2.current;
                            if(!(var1 != var2)) { _fun0008_ip = 58; continue _fun0008 }
 48:
                            var1 = var2.forceClose;
                            var1 = var1.bind(var2)();
 58:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3['handleCollapse'] = var6;
                    var2 = _closure2_slot11;
                    var3['isFullyExpanded'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 67:
                    return var1;
                }
            };
            var25 = var20.bind(var15)(var3, var10);
            var3 = var41[var5];
            var20 = var42.bind(var4)(var3);
            var10 = var20.useAnimatedStyle;
            var3 = function z() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 19;
                var2 = var6[var3];
                var4 = undefined;
                var12 = var5.bind(var4)(var2);
                var11 = var12.interpolate;
                var8 = _closure2_slot7;
                var7 = var8.get;
                var16 = var7.bind(var8)();
                var15 = [0, 1];
                var14 = [0, 15];
                var7 = 'clamp';
                var17 = var12;
                var13 = var7;
                var8 = var17[var11](var16, var15, var14, var13, var12);
                var1['borderTopLeftRadius'] = var8;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.interpolate;
                var3 = _closure2_slot7;
                var2 = var3.get;
                var16 = var2.bind(var3)();
                var15 = [0, 1];
                var14 = [0, 15];
                var17 = var6;
                var2 = var17[var5](var16, var15, var14, var13, var12);
                var1['borderTopRightRadius'] = var2;
                return var1;
            };
            var24 = {};
            var26 = var41[var5];
            var26 = var42.bind(var4)(var26);
            var26 = var26.interpolate;
            var24['interpolate'] = var26;
            var24['animatedIndex'] = var11;
            var3['__closure'] = var24;
            var24 = 13716272266662.0;
            var3['__workletHash'] = var24;
            var24 = _closure1_slot14;
            var3['__initData'] = var24;
            var20 = var10.bind(var20)(var3);
            var3 = 22;
            var3 = var41[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var37 = var3.left;
            var36 = var3.right;
            var3 = 23;
            var3 = var41[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var10 = true;
            var3['ignoreKeyboard'] = var10;
            var3 = var8.bind(var4)(var3);
            var8 = var3.height;
            var35 = var3.width;
            var24 = var15.useCallback;
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
            var26 = var24.bind(var15)(var10, var3);
            var10 = var15.useState;
            var3 = false;
            var15 = var10.bind(var15)(var3);
            var10 = _closure1_slot3;
            var3 = 2;
            var24 = var10.bind(var4)(var15, var3);
            var10 = 0;
            var15 = var24[var10];
            var3 = 1;
            var40 = var24[var3];
            _closure2_slot12 = var40;
            var3 = var41[var5];
            var38 = var42.bind(var4)(var3);
            var29 = var38.useAnimatedReaction;
            var24 = function W() {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.max;
                var2 = _closure2_slot7;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var2 = 0;
                var1 = var3.bind(var4)(var1, var2);
                var1 = var1 > var2;
                return var1;
            };
            var3 = {};
            var3['animatedIndex'] = var11;
            var24['__closure'] = var3;
            var3 = 8952872079740.0;
            var24['__workletHash'] = var3;
            var3 = _closure1_slot15;
            var24['__initData'] = var3;
            var3 = function Q(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0009_ip = 57; continue _fun0009 }
 10:
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
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var39 = {};
            var41 = var41[var5];
            var41 = var42.bind(var4)(var41);
            var41 = var41.runOnJS;
            var39['runOnJS'] = var41;
            var39['setAccessibilityViewIsModal'] = var40;
            var3['__closure'] = var39;
            var39 = 16051387075966.0;
            var3['__workletHash'] = var39;
            var39 = _closure1_slot16;
            var3['__initData'] = var39;
            var3 = var29.bind(var38)(var24, var3);
            var29 = var2;
            if(var29) { _fun0002_ip = 1145; continue _fun0002 }
 1142:
            var29 = var1;
 1145:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = undefined;
            if(!var7) { _fun0002_ip = 1184; continue _fun0002 }
 1178:
            var5 = 'no-hide-descendants';
 1184:
            var1['importantForAccessibility'] = var5;
            var7 = var17.container;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = {};
            var24 = null;
            if(!(var24 == var30)) { _fun0002_ip = 1218; continue _fun0002 }
 1210:
            var35 = var35 - var37;
            var30 = var35 - var36;
 1218:
            var7['width'] = var30;
            var7['height'] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = 'box-none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var30 = _closure1_slot2;
            var5 = 16;
            var5 = var30[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var13;
            var5['animatedIndex'] = var11;
            var5['animationConfigs'] = var34;
            var5['onClose'] = var33;
            var5['onAnimate'] = var32;
            var5['animatedPosition'] = var31;
            var31 = !var29;
            var5['enableContentPanningGesture'] = var31;
            var29 = !var29;
            var5['enableHandlePanningGesture'] = var29;
            var5['handleComponent'] = var25;
            var29 = _closure1_slot0;
            var25 = 5;
            var25 = var30[var25];
            var29 = var29.bind(var4)(var25);
            var25 = var29.isAndroid;
            var29 = var25.bind(var29)();
            var25 = undefined;
            if(!var29) { _fun0002_ip = 1360; continue _fun0002 }
 1351:
            var25 = undefined;
            if(!(var28 === var27)) { _fun0002_ip = 1360; continue _fun0002 }
 1357:
            var25 = var26;
 1360:
            var5['renderFooter'] = var25;
            var25 = var17.background;
            var5['backgroundStyle'] = var25;
            if(!(var24 != var23)) { _fun0002_ip = 1383; continue _fun0002 }
 1380:
            var21 = var23;
 1383:
            var5['backdropComponent'] = var21;
            var21 = new Array(2);
            var23 = -10;
            var21[0] = var23;
            var21[1] = var22;
            var5['activeOffsetY'] = var21;
            var10 = 0;
            if(!var12) { _fun0002_ip = 1442; continue _fun0002 }
 1416:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 8;
            var12 = var22[var12];
            var12 = var21.bind(var4)(var12);
            var10 = var12.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
 1442:
            var5['handleHeight'] = var10;
            var44 = var5;
            var43 = var9;
            var9 = copyDataProperties(var44, var43);
            var12 = _closure1_slot7;
            var10 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 25;
            var9 = var21[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.AccessibilityViewAnimated;
            var9 = {};
            var21 = 'portal-keyboard-sheet';
            var9['nativeID'] = var21;
            var21 = var17.roundingView;
            var17 = new Array(3);
            var17[0] = var21;
            var19 = !var19;
            if(!var19) { _fun0002_ip = 1523; continue _fun0002 }
 1520:
            var19 = var20;
 1523:
            var17[1] = var19;
            var17[2] = var18;
            var9['style'] = var17;
            var16 = function onAccessibilityEscape() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0010_ip = 28; continue _fun0010 }
 18:
                    var1 = var2.collapse;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onAccessibilityEscape'] = var16;
            var9['accessibilityViewIsModal'] = var15;
            var13 = var14.bind(var4)(var13);
            var9['children'] = var13;
            var10 = var12.bind(var4)(var10, var9);
            var9 = 'children';
            var5[var9] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = _closure1_slot9;
            if(!var7) { _fun0002_ip = 1634; continue _fun0002 }
 1597:
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 26;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['animatedSheetIndex'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 1634:
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
    var3['default'] = var2;
    return var1;
})();