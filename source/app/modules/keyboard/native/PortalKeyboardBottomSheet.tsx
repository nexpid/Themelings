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
    var1 = function PortalKeyboardBackground(arg1) {
        var1 = arg1;
        var5 = var1.pointerEvents;
        var8 = var1.style;
        var6 = var1.roundingStyle;
        var2 = _closure1_slot10;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 10;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['pointerEvents'] = var5;
        var5 = new Array(3);
        var5[0] = var8;
        var7 = var7.background;
        var5[1] = var7;
        var5[2] = var6;
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
    var13 = var13.MOBILE_KEYBOARD_PANEL_BACKGROUND;
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
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_8;
    var11 = -var11;
    var10['marginBottom'] = var11;
    var4['headerContainerScreenReaderEnabled'] = var10;
    var10 = {'overflow': 'hidden', 'display': 'flex'};
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
    var8 = "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}";
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
            var14 = var1.animatedIndex;
            var _closure2_slot0 = var14;
            var36 = var1.animatedPosition;
            var24 = var1.chatInputRef;
            var _closure2_slot1 = var24;
            var17 = var1.children;
            var3 = var1.isAppsKeyboard;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = false;
case 4:
            var _closure2_slot2 = var3;
            var35 = var1.animationConfigs;
            var34 = var1.onClose;
            var _closure2_slot3 = var34;
            var2 = var1.transitionState;
            var26 = var1.backdropComponent;
            var28 = var1.headerStyle;
            var _closure2_slot4 = var28;
            var22 = var1.disableHeaderRoundingAnimation;
            var21 = var1.roundingViewStyle;
            var18 = var1.onAnimate;
            var _closure2_slot5 = var18;
            var16 = var1.rendersHandle;
            if(!(var16 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var16 = true;
case 6:
            var _closure2_slot6 = var16;
            var40 = var1.width;
            var30 = var1.forceMaxHeight;
            if(!(var30 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var30 = false;
case 8:
            var _closure2_slot7 = var30;
            var12 = var1.enablePanDownToClose;
            if(!(var12 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var12 = false;
case 10:
            var11 = var1.renderExpressionFooter;
            if(!(var11 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = false;
case 12:
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var1 = _closure1_slot10;
            var20 = var1.bind(var4)();
            var15 = _closure1_slot4;
            var1 = var15.useRef;
            var27 = null;
            var37 = var1.bind(var15)(var27);
            _closure2_slot8 = var37;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var7 = var5.bind(var4)(var1);
            var6 = var7.useMobileVisualRefreshConfig;
            var1 = {};
            var10 = 'AutocompleteWrapper';
            var1['location'] = var10;
            var1 = var6.bind(var7)(var1);
            var7 = var1.enabled;
            var6 = var1.chatInputFloating;
            var10 = _closure1_slot1;
            var1 = 12;
            var1 = var8[var1];
            var10 = var10.bind(var4)(var1);
            var1 = {};
            var1['forceMaxHeight'] = var30;
            var1['enablePanDownToClose'] = var12;
            var13 = var10.bind(var4)(var1);
            var1 = 13;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.TransitionStates;
            var1 = var1.YEETED;
            var1 = var2 === var1;
            _closure2_slot9 = var1;
            var2 = 14;
            var2 = var8[var2];
            var12 = var5.bind(var4)(var2);
            var10 = var12.useBottomSheetImperativeHandle;
            var2 = arg2;
            var2 = var10.bind(var12)(var2, var37);
            var12 = var15.useLayoutEffect;
            var10 = new Array(2);
            var10[0] = var37;
            var10[1] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                    var1 = var2.forceClose;
                    var1 = var1.bind(var2)();
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var15)(var2, var10);
            var2 = 15;
            var2 = var8[var2];
            var10 = var5.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var8.bind(var10)(var5, var2);
            if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var11 = !var1;
case 17:
            var5 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 9;
            var2 = var15[var2];
            var8 = var5.bind(var4)(var2);
            var2 = var8.useIsScreenReaderEnabled;
            var2 = var2.bind(var8)();
            _closure2_slot10 = var2;
            var23 = _closure1_slot4;
            var12 = var23.useCallback;
            var8 = new Array(5);
            var8[0] = var24;
            var8[1] = var1;
            var8[2] = var18;
            var8[3] = var34;
            var8[4] = var3;
            var3 = function(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = -1;
                    if(!(var2 === var5)) { _fun0004_ip = 21; continue _fun0004 }
case 19:
                    if(!(var7 !== var5)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var2 = -1;
                    if(!(var2 !== var5)) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var6 = _closure2_slot5;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var7, var5, var4);
case 25:
                    var3 = 0;
                    if(!(var3 !== var7)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var6 = 1;
                    if(!(var6 === var7)) { _fun0004_ip = 22; continue _fun0004 }
case 29:
                    if(!(var3 === var5)) { _fun0004_ip = 22; continue _fun0004 }
case 30:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.isChannelFocused;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 31:
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0004_ip = 22; continue _fun0004 }
case 32:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 33:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 22; continue _fun0004;
case 27:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var6 = undefined;
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.KEYBOARD;
                    if(!(var4 !== var3)) { _fun0004_ip = 22; continue _fun0004 }
case 34:
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
                    _fun0004_ip = 22; continue _fun0004;
case 21:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 22; continue _fun0004 }
case 35:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var12.bind(var23)(var3, var8);
            var25 = 10;
            var3 = var15[var25];
            var12 = var5.bind(var4)(var3);
            var8 = var12.useDerivedValue;
            var3 = function U() {
                var2 = _closure2_slot0;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0.975;
                var1 = var2 > var1;
                return var1;
            };
            var18 = {};
            var18['animatedIndex'] = var14;
            var3['__closure'] = var18;
            var18 = 2001839633402.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot11;
            var3['__initData'] = var18;
            var3 = var8.bind(var12)(var3);
            _closure2_slot11 = var3;
            var8 = var15[var25];
            var24 = var5.bind(var4)(var8);
            var18 = var24.useAnimatedReaction;
            var12 = function W() {
                var2 = _closure2_slot11;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['isFullyExpanded'] = var3;
            var12['__closure'] = var8;
            var8 = 9531298805666.0;
            var12['__workletHash'] = var8;
            var8 = _closure1_slot12;
            var12['__initData'] = var8;
            var8 = function X(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = null;
                    var2 = arg2;
                    if(!(var3 != var2)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = _closure2_slot7;
case 38:
                    if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 16:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var1 = var6[var1];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = 19;
                    var1 = var6[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.dismissGlobalKeyboard;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = {};
            var29['forceMaxHeight'] = var30;
            var30 = var15[var25];
            var30 = var5.bind(var4)(var30);
            var30 = var30.runOnJS;
            var29['runOnJS'] = var30;
            var30 = 19;
            var30 = var15[var30];
            var30 = var5.bind(var4)(var30);
            var30 = var30.dismissGlobalKeyboard;
            var29['dismissGlobalKeyboard'] = var30;
            var8['__closure'] = var29;
            var29 = 14649856286006.0;
            var8['__workletHash'] = var29;
            var29 = _closure1_slot13;
            var8['__initData'] = var29;
            var8 = var18.bind(var24)(var12, var8);
            var12 = _closure1_slot1;
            var8 = 20;
            var8 = var15[var8];
            var18 = var12.bind(var4)(var8);
            var8 = function() {
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 40:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var8 = var18.bind(var4)(var8);
            var24 = var23.useCallback;
            var18 = function(arg1) {
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
                var1[4] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var8 = new Array(0);
            var24 = var24.bind(var23)(var18, var8);
            var18 = var23.useCallback;
            var8 = new Array(5);
            var8[0] = var28;
            var8[1] = var37;
            var8[2] = var16;
            var8[3] = var3;
            var8[4] = var2;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var3 = false;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0007_ip = 42; continue _fun0007 }
case 39:
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
                            if(!(var1 != var4)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                            var3 = var4.collapse;
                            var3 = var3.bind(var4)();
case 43:
                            var3 = _closure2_slot10;
                            if(!var3) { _fun0008_ip = 45; continue _fun0008 }
case 14:
                            var2 = _closure2_slot8;
                            var2 = var2.current;
                            if(!(var1 != var2)) { _fun0008_ip = 45; continue _fun0008 }
case 5:
                            var1 = var2.forceClose;
                            var1 = var1.bind(var2)();
case 45:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3['handleCollapse'] = var6;
                    var2 = _closure2_slot11;
                    var3['isFullyExpanded'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 42:
                    return var1;
                }
            };
            var29 = var18.bind(var23)(var3, var8);
            var3 = 21;
            var3 = var15[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.useToken;
            var3 = 7;
            var3 = var15[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.MOBILE_KEYBOARD_TOP_BORDER_RADIUS;
            var23 = var5.bind(var8)(var3);
            _closure2_slot12 = var23;
            var15 = 0;
            var30 = 0;
            if(!var6) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var30 = -1;
case 46:
            _closure2_slot13 = var30;
            var5 = 1;
            var28 = var5;
            if(!var6) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var28 = 0;
case 48:
            _closure2_slot14 = var28;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var3 = var31[var25];
            var12 = var32.bind(var4)(var3);
            var8 = var12.useAnimatedStyle;
            var3 = function ee() {
                var1 = {};
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 10;
                var2 = var8[var3];
                var5 = undefined;
                var13 = var6.bind(var5)(var2);
                var12 = var13.interpolate;
                var4 = _closure2_slot0;
                var7 = var4.get;
                var17 = var7.bind(var4)();
                var7 = _closure2_slot13;
                var10 = new Array(2);
                var10[0] = var7;
                var7 = _closure2_slot14;
                var10[1] = var7;
                var7 = _closure2_slot12;
                var9 = [0];
                var9[1] = var7;
                var7 = 'clamp';
                var18 = var13;
                var16 = var10;
                var15 = var9;
                var14 = var7;
                var9 = var18[var12](var17, var16, var15, var14, var13);
                var1['borderTopLeftRadius'] = var9;
                var3 = var8[var3];
                var6 = var6.bind(var5)(var3);
                var5 = var6.interpolate;
                var3 = var4.get;
                var17 = var3.bind(var4)();
                var8 = _closure2_slot13;
                var3 = new Array(2);
                var3[0] = var8;
                var8 = _closure2_slot14;
                var3[1] = var8;
                var8 = _closure2_slot12;
                var2 = [0];
                var2[1] = var8;
                var18 = var6;
                var16 = var3;
                var15 = var2;
                var2 = var18[var5](var17, var16, var15, var14, var13);
                var1['borderTopRightRadius'] = var2;
                return var1;
            };
            var18 = {};
            var31 = var31[var25];
            var31 = var32.bind(var4)(var31);
            var31 = var31.interpolate;
            var18['interpolate'] = var31;
            var18['animatedIndex'] = var14;
            var18['cornerRadiusInputStart'] = var30;
            var18['cornerRadiusInputEnd'] = var28;
            var18['cornerRadius'] = var23;
            var3['__closure'] = var18;
            var18 = 6979425892410.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot14;
            var3['__initData'] = var18;
            var23 = var8.bind(var12)(var3);
            var3 = undefined;
            if(!var6) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var3 = undefined;
            if(var22) { _fun0002_ip = 50; continue _fun0002 }
case 52:
            var3 = var23;
case 50:
            _closure2_slot15 = var3;
            var8 = _closure1_slot4;
            var12 = var8.useCallback;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function(arg1) {
                var4 = _closure1_slot7;
                var3 = _closure1_slot18;
                var2 = {};
                var6 = arg1;
                var7 = var2;
                var1 = copyDataProperties(var7, var6);
                var5 = _closure2_slot15;
                var1 = 'roundingStyle';
                var2[0] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var28 = var12.bind(var8)(var3, var6);
            var6 = _closure1_slot1;
            var39 = _closure1_slot2;
            var3 = 22;
            var3 = var39[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var42 = var3.left;
            var41 = var3.right;
            var3 = 23;
            var3 = var39[var3];
            var6 = var6.bind(var4)(var3);
            var3 = {};
            var12 = true;
            var3['ignoreKeyboard'] = var12;
            var3 = var6.bind(var4)(var3);
            var12 = var3.height;
            var32 = var3.width;
            var18 = var8.useCallback;
            var6 = function(arg1) {
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
                var1[4] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3 = new Array(0);
            var30 = var18.bind(var8)(var6, var3);
            var6 = var8.useState;
            var3 = false;
            var8 = var6.bind(var8)(var3);
            var6 = _closure1_slot3;
            var3 = 2;
            var3 = var6.bind(var4)(var8, var3);
            var18 = var3[var15];
            var38 = var3[var5];
            _closure2_slot16 = var38;
            var43 = _closure1_slot0;
            var3 = var39[var25];
            var8 = var43.bind(var4)(var3);
            var6 = var8.useAnimatedReaction;
            var5 = function ne() {
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
            var3['animatedIndex'] = var14;
            var5['__closure'] = var3;
            var3 = 8952872079740.0;
            var5['__workletHash'] = var3;
            var3 = _closure1_slot15;
            var5['__initData'] = var3;
            var3 = function te(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0009_ip = 53; continue _fun0009 }
case 15:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot16;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var39 = var39[var25];
            var39 = var43.bind(var4)(var39);
            var39 = var39.runOnJS;
            var31['runOnJS'] = var39;
            var31['setAccessibilityViewIsModal'] = var38;
            var3['__closure'] = var31;
            var31 = 16051387075966.0;
            var3['__workletHash'] = var31;
            var31 = _closure1_slot16;
            var3['__initData'] = var31;
            var3 = var6.bind(var8)(var5, var3);
            var31 = var2;
            if(var31) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var31 = var1;
case 54:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 25;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var1 = 26;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = null;
            if(!var7) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var5 = var6;
case 56:
            var1['gradient'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var25];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var8 = undefined;
            if(!var10) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var8 = 'no-hide-descendants';
case 58:
            var5['importantForAccessibility'] = var8;
            var10 = var20.container;
            var8 = new Array(3);
            var8[0] = var10;
            var10 = {};
            var10['marginLeft'] = var42;
            var10['marginRight'] = var41;
            var8[1] = var10;
            var10 = {};
            var43 = global;
            var39 = var43.Math;
            var38 = var39.min;
            if(!(var27 == var40)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var43 = var43.Number;
            var40 = var43.MAX_SAFE_INTEGER;
case 60:
            var32 = var32 - var42;
            var32 = var32 - var41;
            var32 = var38.bind(var39)(var40, var32);
            var10['width'] = var32;
            var10['height'] = var12;
            var8[2] = var10;
            var5['style'] = var8;
            var8 = 'box-none';
            var5['pointerEvents'] = var8;
            var12 = _closure1_slot7;
            var10 = _closure1_slot1;
            var32 = _closure1_slot2;
            var8 = 16;
            var8 = var32[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['ref'] = var37;
            var8['animatedIndex'] = var14;
            var8['animatedPosition'] = var36;
            var8['animationConfigs'] = var35;
            var8['onClose'] = var34;
            var8['onAnimate'] = var33;
            var33 = !var31;
            var8['enableContentPanningGesture'] = var33;
            var31 = !var31;
            var8['enableHandlePanningGesture'] = var31;
            var8['handleComponent'] = var29;
            var31 = _closure1_slot0;
            var29 = 5;
            var29 = var32[var29];
            var31 = var31.bind(var4)(var29);
            var29 = var31.isAndroid;
            var31 = var29.bind(var31)();
            var29 = undefined;
            if(!var31) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var29 = undefined;
            if(!var11) { _fun0002_ip = 62; continue _fun0002 }
case 64:
            var29 = var30;
case 62:
            var8['renderFooter'] = var29;
            var8['backgroundComponent'] = var28;
            var28 = var20.background;
            var8['backgroundStyle'] = var28;
            if(!(var27 != var26)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var24 = var26;
case 65:
            var8['backdropComponent'] = var24;
            var24 = new Array(2);
            var26 = -10;
            var24[0] = var26;
            var24[1] = var25;
            var8['activeOffsetY'] = var24;
            var15 = 0;
            if(!var16) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 8;
            var16 = var25[var16];
            var16 = var24.bind(var4)(var16);
            var15 = var16.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
case 67:
            var8['handleHeight'] = var15;
            var46 = var8;
            var45 = var13;
            var13 = copyDataProperties(var46, var45);
            var16 = _closure1_slot7;
            var15 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = 27;
            var13 = var24[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.AccessibilityViewAnimated;
            var13 = {};
            var24 = 'portal-keyboard-sheet';
            var13['nativeID'] = var24;
            var24 = var20.roundingView;
            var20 = new Array(3);
            var20[0] = var24;
            var22 = !var22;
            if(!var22) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var22 = var23;
case 69:
            var20[1] = var22;
            var20[2] = var21;
            var13['style'] = var20;
            var19 = function onAccessibilityEscape() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                    var1 = var2.collapse;
                    var1 = var1.bind(var2)();
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var13['onAccessibilityEscape'] = var19;
            var13['accessibilityViewIsModal'] = var18;
            var13['children'] = var17;
            var15 = var16.bind(var4)(var15, var13);
            var13 = 'children';
            var8[12] = var15;
            var10 = var12.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var10 = _closure1_slot9;
            if(!var10) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var10 = var11;
case 71:
            if(!var10) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var13 = _closure1_slot7;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 28;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['animatedSheetIndex'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 73:
            var8[1] = var10;
            var11 = _closure1_slot7;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 29;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.NavScrim;
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();