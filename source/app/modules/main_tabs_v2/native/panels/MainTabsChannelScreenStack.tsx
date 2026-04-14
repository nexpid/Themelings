// app/modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getKey(arg1) {
        var1 = global;
        var3 = var1.String;
        var1 = arg1;
        var2 = var1.index;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.NativeModules;
    var _closure1_slot5 = var8;
    var8 = var4.StyleSheet;
    var _closure1_slot6 = var8;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.MIDNIGHT_BORDER_WIDTH;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsObjectTypes;
    var _closure1_slot8 = var8;
    var8 = var4.AnalyticsObjects;
    var _closure1_slot9 = var8;
    var4 = var4.AnalyticsSections;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = -var11;
    var10['marginTop'] = var12;
    var11 = -var11;
    var10['marginLeft'] = var11;
    var4['midnightContainerStyles'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var8 = var7.memo;
    var4 = function FirstChannelScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var20 = var2.guildId;
            var19 = var2.channelId;
            var18 = var2.showCreateThread;
            var15 = var2.frame;
            var14 = var2.index;
            var5 = var2.freeze;
            var17 = var2.containerWidth;
            var8 = var2.isActive;
            var11 = var2.transitionState;
            var _closure2_slot0 = var11;
            var12 = var2.cleanup;
            var _closure2_slot1 = var12;
            var13 = var2.firstScreenChatRef;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var23 = var2.bind(var4)();
            var2 = _closure1_slot14;
            var21 = var2.bind(var4)();
            var9 = _closure1_slot4;
            var3 = var9.useEffect;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 2:
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot0;
            var1 = 10;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Freeze;
            var1 = {};
            var1['freeze'] = var5;
            var5 = 11;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var7 = _closure1_slot6;
            var7 = var7.absoluteFill;
            var5['style'] = var7;
            var7 = 'box-only';
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = 'auto';
case 4:
            var5['pointerEvents'] = var7;
            var7 = !var8;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = undefined;
case 6:
            var5['accessibilityElementsHidden'] = var7;
            var7 = 'no-hide-descendants';
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = undefined;
case 8:
            var5['importantForAccessibility'] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = _closure1_slot6;
            var12 = var11.absoluteFill;
            var11 = new Array(3);
            var11[0] = var12;
            var16 = null;
            var22 = var16 != var17;
            var12 = null;
            if(!var22) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var22 = {};
            var22['width'] = var17;
            var12 = var22;
case 10:
            var11[1] = var12;
            var12 = _closure1_slot11;
            var22 = var12.MIDNIGHT;
            var12 = undefined;
            if(!(var23 === var22)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = var21.midnightContainerStyles;
case 12:
            var11[2] = var12;
            var7['style'] = var11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot1;
            var21 = _closure1_slot2;
            var10 = 12;
            var10 = var21[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['guildId'] = var20;
            var10['channelId'] = var19;
            var10['showCreateThread'] = var18;
            var16 = var16 == var17;
            var10['isNavigationScreen'] = var16;
            var10['frame'] = var15;
            var10['screenIndex'] = var14;
            var10['firstScreenChatRef'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx1(){const{translateX}=this.__closure;return translateX.get()===0;}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx2(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var8 = var7.memo;
    var4 = function ChannelScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var17 = var2.guildId;
            var16 = var2.channelId;
            var15 = var2.showCreateThread;
            var26 = var2.transitionState;
            var _closure2_slot0 = var26;
            var27 = var2.cleanup;
            var _closure2_slot1 = var27;
            var10 = var2.isActive;
            var13 = var2.freeze;
            var35 = var2.parentFreezeValue;
            var34 = var2.parentTranslateX;
            var14 = var2.index;
            var _closure2_slot2 = var14;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var20 = var2.bind(var4)();
            var2 = _closure1_slot14;
            var18 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var2 = 13;
            var2 = var9[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot3 = var2;
            var25 = _closure1_slot4;
            var3 = var25.useRef;
            var5 = false;
            var3 = var3.bind(var25)(var5);
            var _closure2_slot4 = var3;
            var7 = var25.useCallback;
            var3 = new Array(2);
            var3[0] = var27;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = _closure2_slot4;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot3;
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 14; continue _fun0004;
case 16:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var25)(var2, var3);
            var2 = 14;
            var2 = var9[var2];
            var3 = var8.bind(var4)(var2);
            var2 = {};
            var11 = 9;
            var11 = var9[var11];
            var11 = var6.bind(var4)(var11);
            var11 = var11.TransitionStates;
            var11 = var11.YEETED;
            var11 = var26 !== var11;
            var2['canDrag'] = var11;
            var2['onVisibilityChange'] = var7;
            var7 = 15;
            var7 = var9[var7];
            var7 = var6.bind(var4)(var7);
            var7 = var7.dismissKeyboard;
            var2['onDragStart'] = var7;
            var2['startShown'] = var5;
            var3 = var3.bind(var4)(var2);
            var19 = var3.gesture;
            var7 = var3.panelGestureContext;
            var21 = var3.isDragging;
            var11 = var3.translateX;
            var _closure2_slot5 = var11;
            var2 = var3.movePanel;
            var36 = var3.maxWidth;
            var28 = var25.useContext;
            var5 = 16;
            var24 = var9[var5];
            var24 = var8.bind(var4)(var24);
            var24 = var28.bind(var25)(var24);
            var32 = var24.disallowGesture;
            var _closure2_slot6 = var32;
            var24 = 17;
            var24 = var9[var24];
            var30 = var6.bind(var4)(var24);
            var29 = var30.useAnimatedReaction;
            var28 = function p() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var1 === var2;
                return var1;
            };
            var24 = {};
            var24['translateX'] = var11;
            var28['__closure'] = var24;
            var24 = 3129874200411.0;
            var28['__workletHash'] = var24;
            var24 = _closure1_slot16;
            var28['__initData'] = var24;
            var24 = function y(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var4 = _closure2_slot2;
                    var2 = 1;
                    var1 = var2 === var4;
case 18:
                    if(!var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var31['index'] = var14;
            var31['mainTabsDisallowGesture'] = var32;
            var24['__closure'] = var31;
            var31 = 13018170893122.0;
            var24['__workletHash'] = var31;
            var31 = _closure1_slot17;
            var24['__initData'] = var31;
            var24 = var29.bind(var30)(var28, var24);
            var24 = {};
            var24['cleanup'] = var27;
            var24['movePanel'] = var2;
            var _closure2_slot7 = var24;
            var2 = var25.useRef;
            var2 = var2.bind(var25)(var24);
            var _closure2_slot8 = var2;
            var24 = var25.useEffect;
            var2 = function() {
                var2 = _closure2_slot8;
                var1 = _closure2_slot7;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var24.bind(var25)(var2);
            var24 = var25.useEffect;
            var2 = new Array(1);
            var2[0] = var26;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var1 = var1.current;
                    var2 = var1.cleanup;
                    var6 = var1.movePanel;
                    var7 = _closure2_slot0;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 9;
                    var5 = var1[var8];
                    var1 = undefined;
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.TransitionStates;
                    var5 = var5.MOUNTED;
                    if(!(var7 !== var5)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var5 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 === var4)) { _fun0006_ip = 24; continue _fun0006 }
case 22:
                    var13 = true;
                    var11 = 0;
                    var14 = undefined;
                    var12 = false;
                    var10 = false;
                    var4 = var14[var6](var13, var12, var11, var10, var9);
                    _fun0006_ip = 25; continue _fun0006;
case 24:
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    if(var4) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var3 = _closure2_slot4;
                    var5 = true;
                    var3['current'] = var5;
                    var11 = 0;
                    var14 = undefined;
                    var13 = false;
                    var12 = false;
                    var10 = true;
                    var3 = var14[var6](var13, var12, var11, var10, var9);
                    _fun0006_ip = 25; continue _fun0006;
case 26:
                    var2 = var2.bind(var1)();
case 25:
                    return var1;
                }
            };
            var1 = var24.bind(var25)(var1, var2);
            var1 = 18;
            var1 = var9[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.useMainTabsChannelScreenStyles;
            var39 = var2;
            var38 = var21;
            var37 = var11;
            var11 = var39[var1](var38, var37, var36, var35, var34, var33);
            var3 = _closure1_slot12;
            var1 = 19;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var19;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.MainTabsChannelScreenStackContext;
            var6 = var5.Provider;
            var5 = {};
            var5['value'] = var7;
            var7 = 20;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var9 = new Array(2);
            var9[0] = var11;
            var11 = _closure1_slot11;
            var19 = var11.MIDNIGHT;
            var11 = undefined;
            if(!(var20 === var19)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var11 = var18.midnightContainerStyles;
case 28:
            var9[1] = var11;
            var7['style'] = var9;
            var9 = !var10;
            if(var9) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var9 = undefined;
case 30:
            var7['accessibilityElementsHidden'] = var9;
            var9 = 'no-hide-descendants';
            if(!var10) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var9 = undefined;
case 32:
            var7['importantForAccessibility'] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 10;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Freeze;
            var9 = {};
            var9['freeze'] = var13;
            var13 = _closure1_slot1;
            var12 = 12;
            var12 = var18[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['guildId'] = var17;
            var12['channelId'] = var16;
            var12['showCreateThread'] = var15;
            var15 = true;
            var12['isNavigationScreen'] = var15;
            var15 = null;
            var12['frame'] = var15;
            var12['screenIndex'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var7['children'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx3(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx4(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function MainTabsChannelScreenStack(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var19 = var1.screens;
            var _closure2_slot0 = var19;
            var13 = var1.screenStackActive;
            var _closure2_slot1 = var13;
            var9 = var1.translateX;
            var _closure2_slot2 = var9;
            var24 = var1.isDragging;
            var18 = var1.maxWidth;
            var _closure2_slot3 = var18;
            var3 = var1.shouldFreeze;
            var7 = var1.focusChatPressableComponent;
            var23 = var1.firstScreenWidth;
            var _closure2_slot4 = var23;
            var22 = var1.firstScreenFrame;
            var _closure2_slot5 = var22;
            var5 = undefined;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var2 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 21;
            var1 = var21[var1];
            var1 = var2.bind(var5)(var1);
            var15 = var1.bind(var5)();
            var11 = _closure1_slot4;
            var2 = var11.useState;
            var1 = var9.get;
            var1 = var1.bind(var9)();
            var1 = var1 === var18;
            var4 = var2.bind(var11)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var4 = var2.bind(var5)(var4, var1);
            var16 = 0;
            var1 = var4[var16];
            var2 = 1;
            var20 = var4[var2];
            var _closure2_slot6 = var20;
            var25 = _closure1_slot0;
            var2 = 17;
            var4 = var21[var2];
            var12 = var25.bind(var5)(var4);
            var10 = var12.useAnimatedReaction;
            var8 = function R() {
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot3;
                var1 = var2 === var1;
                return var1;
            };
            var4 = {};
            var4['translateX'] = var9;
            var4['maxWidth'] = var18;
            var8['__closure'] = var4;
            var4 = 4592972253381.0;
            var8['__workletHash'] = var4;
            var4 = _closure1_slot19;
            var8['__initData'] = var4;
            var4 = function H(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = {};
            var21 = var21[var2];
            var21 = var25.bind(var5)(var21);
            var21 = var21.runOnJS;
            var14['runOnJS'] = var21;
            var14['setIsHidden'] = var20;
            var4['__closure'] = var14;
            var14 = 8070971894121.0;
            var4['__workletHash'] = var14;
            var14 = _closure1_slot20;
            var4['__initData'] = var14;
            var4 = var10.bind(var12)(var8, var4);
            var10 = var11.useMemo;
            var8 = new Array(1);
            var8[0] = var19;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.at;
                    var1 = -1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var6 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var4 = var2.type;
case 36:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 22;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ChannelScreenType;
                    var3 = var3.DEFAULT;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var1 = var2.channelId;
case 38:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4, var8);
            var10 = var11.useEffect;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.MediaPlayerManager;
                    var4 = null;
                    var1 = var4 == var2;
                    if(var1) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                    var3 = var2.pauseAllMediaPlayers;
                    var1 = var4 == var3;
case 40:
                    if(var1) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                    var1 = var2.pauseAllMediaPlayers;
                    var1 = var1.bind(var2)();
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4, var8);
            var4 = var19[var16];
            var _closure2_slot7 = var4;
            if(!var3) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var3 = var1;
case 44:
            if(!var3) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var10 = var4.type;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 22;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.ChannelScreenType;
            var8 = var8.DEFAULT;
            var1 = var10 !== var8;
case 48:
            var3 = var1;
case 46:
            var11 = _closure1_slot4;
            var1 = var11.useRef;
            var14 = var1.bind(var11)(var3);
            var8 = var11.useRef;
            var1 = null;
            var10 = var3;
            var3 = null;
            if(!var10) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var20 = var1 == var4;
            var12 = undefined;
            if(var20) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var12 = var4.channelId;
case 52:
            var20 = var1 != var12;
            var3 = null;
            if(!var20) { _fun0007_ip = 50; continue _fun0007 }
case 54:
            var3 = var12;
case 50:
            var12 = var8.bind(var11)(var3);
            var20 = _closure1_slot4;
            var3 = var20.useRef;
            var3 = var3.bind(var20)(var1);
            _closure2_slot8 = var3;
            var11 = _closure1_slot0;
            var25 = _closure1_slot2;
            var8 = var25[var2];
            var21 = var11.bind(var5)(var8);
            var8 = var21.useSharedValue;
            var21 = var8.bind(var21)(var16);
            _closure2_slot9 = var21;
            var27 = var20.useEffect;
            var26 = new Array(2);
            var26[0] = var10;
            var26[1] = var21;
            var8 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot9;
                    var2 = var3.set;
                    var4 = _closure2_slot9;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = 1;
                    var1 = var4 + var1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = 10;
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
            };
            var8 = var27.bind(var20)(var8, var26);
            var8 = 18;
            var8 = var25[var8];
            var11 = var11.bind(var5)(var8);
            var8 = var11.useMainTabsChannelScreenStyles;
            var33 = var11;
            var32 = var24;
            var31 = var9;
            var30 = var18;
            var29 = var21;
            var8 = var33[var8](var32, var31, var30, var29, var28);
            var18 = var20.useCallback;
            var24 = var19.length;
            var11 = new Array(6);
            var11[0] = var24;
            var11[1] = var23;
            var11[2] = var22;
            var11[3] = var21;
            var11[4] = var13;
            var11[5] = var9;
            var9 = function(arg1, arg2, arg3, arg4) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var10 = arg2;
                    var8 = arg3;
                    var7 = arg4;
                    var1 = global;
                    var1 = var1.Number;
                    var5 = undefined;
                    var9 = var1.bind(var5)(var6);
                    var1 = 0;
                    if(!(var1 !== var9)) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot18;
                    var1 = {};
                    var4 = var10.guildId;
                    var1['guildId'] = var4;
                    var4 = var10.channelId;
                    var1['channelId'] = var4;
                    var11 = var10.showCreateThread;
                    var4 = null;
                    var4 = var4 != var11;
                    if(!var4) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                    var4 = var11;
case 57:
                    var1['showCreateThread'] = var4;
                    var1['index'] = var9;
                    var1['transitionState'] = var8;
                    var11 = _closure2_slot9;
                    var1['parentFreezeValue'] = var11;
                    var11 = _closure2_slot2;
                    var1['parentTranslateX'] = var11;
                    var1['cleanup'] = var7;
                    var4 = _closure2_slot0;
                    var12 = var4.length;
                    var11 = 1;
                    var11 = var12 - var11;
                    var11 = var9 === var11;
                    var1['isActive'] = var11;
                    var11 = var4.length;
                    var4 = 2;
                    var4 = var11 - var4;
                    var4 = var9 < var4;
                    var1['freeze'] = var4;
                    var1 = var3.bind(var5)(var2, var1, var6);
                    _fun0011_ip = 59; continue _fun0011;
case 55:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var11 = var10.guildId;
                    var2['guildId'] = var11;
                    var11 = var10.channelId;
                    var2['channelId'] = var11;
                    var11 = var10.showCreateThread;
                    var10 = null;
                    var10 = var10 != var11;
                    if(!var10) { _fun0011_ip = 7; continue _fun0011 }
case 60:
                    var10 = var11;
case 7:
                    var2['showCreateThread'] = var10;
                    var2['index'] = var9;
                    var2['transitionState'] = var8;
                    var2['cleanup'] = var7;
                    var8 = _closure2_slot1;
                    if(!var8) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                    var10 = _closure2_slot0;
                    var11 = var10.length;
                    var10 = 1;
                    var10 = var11 - var10;
                    var8 = var9 === var10;
case 61:
                    var2['isActive'] = var8;
                    var8 = _closure2_slot0;
                    var10 = var8.length;
                    var8 = 2;
                    var8 = var10 - var8;
                    var8 = var9 < var8;
                    var2['freeze'] = var8;
                    var8 = _closure2_slot4;
                    var2['containerWidth'] = var8;
                    var8 = _closure2_slot5;
                    var2['frame'] = var8;
                    var7 = _closure2_slot8;
                    var2['firstScreenChatRef'] = var7;
                    var1 = var4.bind(var5)(var3, var2, var6);
case 59:
                    return var1;
                }
            };
            var18 = var18.bind(var20)(var9, var11);
            var11 = var20.useRef;
            var9 = var1 == var4;
            var21 = undefined;
            if(var9) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var21 = var4.channelId;
case 63:
            var22 = var1 != var21;
            var9 = null;
            if(!var22) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var9 = var21;
case 65:
            var9 = var11.bind(var20)(var9);
            _closure2_slot10 = var9;
            var20 = _closure1_slot4;
            var9 = var20.useRef;
            var9 = var9.bind(var20)(var1);
            _closure2_slot11 = var9;
            var11 = var20.useEffect;
            var9 = var1 == var4;
            var21 = undefined;
            if(var9) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var21 = var4.type;
case 67:
            var9 = new Array(2);
            var9[0] = var21;
            var22 = var1 == var4;
            var21 = undefined;
            if(var22) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var21 = var4.channelId;
case 69:
            var9[1] = var21;
            var6 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                    var4 = _closure2_slot7;
                    var2 = var4.type;
case 71:
                    var2 = var3 != var2;
                    if(!var2) { _fun0012_ip = 73; continue _fun0012 }
case 56:
                    var3 = _closure2_slot11;
                    var4 = var3.current;
                    var3 = _closure2_slot7;
                    var3 = var3.type;
                    var2 = var4 !== var3;
case 73:
                    if(!var2) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                    var4 = _closure2_slot11;
                    var2 = _closure2_slot7;
                    var3 = var2.type;
                    var4['current'] = var3;
                    var3 = var2.channelId;
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot7;
                    var2 = var2.channelId;
                    var3['current'] = var2;
                    _fun0012_ip = 74; continue _fun0012;
case 76:
                    var2 = _closure2_slot7;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var2 = var6[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ChannelScreenType;
                    var2 = var2.DEFAULT;
                    var2 = var3 !== var2;
                    if(var2) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 23;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getChatLayout;
                    var3 = var3.bind(var4)();
                    var2 = var3.isChatLockedOpen;
case 78:
                    if(var2) { _fun0012_ip = 74; continue _fun0012 }
case 80:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'TRY_ACK';
                    var2['type'] = var6;
                    var6 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.CHANNEL;
                    var6['section'] = var8;
                    var8 = _closure1_slot9;
                    var8 = var8.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH;
                    var6['object'] = var8;
                    var7 = _closure1_slot8;
                    var7 = var7.ACK_AUTOMATIC;
                    var6['objectType'] = var7;
                    var2['location'] = var6;
                    var5 = _closure2_slot7;
                    var5 = var5.channelId;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 74:
                    return var1;
                }
            };
            var6 = var11.bind(var20)(var6, var9);
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 25;
            var6 = var11[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.freezeScreenIndex;
            var6 = var6.bind(var9)(var10, var16);
            var9 = _closure1_slot1;
            var6 = 26;
            var6 = var11[var6];
            var11 = var9.bind(var5)(var6);
            var9 = var11.clearStaleRowsOnUnfreeze;
            var6 = var1 == var4;
            var16 = undefined;
            if(var6) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var16 = var4.channelId;
case 81:
            var20 = var1 != var16;
            var6 = null;
            if(!var20) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var6 = var16;
case 83:
            var28 = var3.current;
            var33 = var11;
            var32 = var10;
            var31 = var6;
            var30 = var14;
            var29 = var12;
            var3 = var33[var9](var32, var31, var30, var29, var28, var27);
            if(!var10) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var6 = var1 == var4;
            var3 = undefined;
            if(var6) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var3 = var4.showCreateThread;
case 87:
            var1 = null;
            if(var3) { _fun0007_ip = 89; continue _fun0007 }
case 85:
            var4 = _closure1_slot13;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = var14[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var12 = _closure1_slot6;
            var8 = var12.absoluteFill;
            var6[1] = var8;
            var2['style'] = var6;
            var9 = _closure1_slot12;
            var8 = _closure1_slot0;
            var6 = 10;
            var6 = var14[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.Freeze;
            var6 = {};
            var6['freeze'] = var10;
            var10 = 11;
            var10 = var14[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var12 = var12.absoluteFill;
            var10['style'] = var12;
            var12 = 'box-none';
            var10['pointerEvents'] = var12;
            var12 = !var13;
            if(var12) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var12 = undefined;
case 90:
            var10['accessibilityElementsHidden'] = var12;
            var12 = 'no-hide-descendants';
            if(!var13) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var12 = undefined;
case 92:
            var10['importantForAccessibility'] = var12;
            var14 = _closure1_slot12;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 27;
            var12 = var20[var12];
            var12 = var16.bind(var5)(var12);
            var13 = var12.ThemeContextProvider;
            var12 = {};
            var12['gradient'] = var15;
            var15 = 9;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.TransitionGroup;
            var15 = {};
            var15['items'] = var19;
            var15['renderItem'] = var18;
            var17 = _closure1_slot21;
            var15['getItemKey'] = var17;
            var15 = var14.bind(var5)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var10['children'] = var12;
            var10 = var9.bind(var5)(var11, var10);
            var6['children'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 89:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();