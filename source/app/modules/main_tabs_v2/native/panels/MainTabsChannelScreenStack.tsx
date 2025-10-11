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
    var _closure1_slot18 = var1;
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
    var4 = var4.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.MIDNIGHT_BORDER_WIDTH;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsObjectTypes;
    var _closure1_slot7 = var8;
    var8 = var4.AnalyticsObjects;
    var _closure1_slot8 = var8;
    var4 = var4.AnalyticsSections;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
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
    var _closure1_slot13 = var4;
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
            var9 = var2.freeze;
            var24 = var2.isDragging;
            var27 = var2.translateX;
            var17 = var2.containerWidth;
            var13 = var2.isActive;
            var26 = var2.maxWidth;
            var6 = var2.focusChatPressableComponent;
            var21 = var2.transitionState;
            var _closure2_slot0 = var21;
            var22 = var2.cleanup;
            var _closure2_slot1 = var22;
            var25 = var2.parentFreezeValue;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var4 = undefined;
            var3 = var2.bind(var4)(var3);
            var12 = var3.bind(var4)();
            var3 = _closure1_slot13;
            var8 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var3 = 9;
            var3 = var5[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useMainTabsChannelScreenStyles;
            var29 = var7;
            var28 = var24;
            var7 = var29[var3](var28, var27, var26, var25, var24);
            var16 = _closure1_slot4;
            var10 = var16.useEffect;
            var3 = new Array(2);
            var3[0] = var22;
            var3[1] = var21;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
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
            var1 = var10.bind(var16)(var1, var3);
            var3 = _closure1_slot12;
            var1 = 11;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = new Array(3);
            var5[0] = var7;
            var16 = null;
            var10 = var16 != var17;
            var7 = null;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = {};
            var10['width'] = var17;
            var7 = var10;
case 4:
            var5[1] = var7;
            var7 = _closure1_slot10;
            var10 = var7.MIDNIGHT;
            var7 = undefined;
            if(!(var12 === var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8.midnightContainerStyles;
case 6:
            var5[2] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 12;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Freeze;
            var5 = {};
            var5['freeze'] = var9;
            var10 = _closure1_slot1;
            var9 = 13;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var12 = _closure1_slot6;
            var12 = var12.absoluteFill;
            var9['style'] = var12;
            var12 = 'box-only';
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = 'auto';
case 8:
            var9['pointerEvents'] = var12;
            var12 = !var13;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = undefined;
case 10:
            var9['accessibilityElementsHidden'] = var12;
            var12 = 'no-hide-descendants';
            if(!var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = undefined;
case 12:
            var9['importantForAccessibility'] = var12;
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 14;
            var11 = var21[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['guildId'] = var20;
            var11['channelId'] = var19;
            var11['showCreateThread'] = var18;
            var16 = var16 == var17;
            var11['isNavigationScreen'] = var16;
            var11['frame'] = var15;
            var11['screenIndex'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot14 = var4;
    var8 = var7.memo;
    var4 = function ChannelScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var17 = var2.guildId;
            var16 = var2.channelId;
            var15 = var2.showCreateThread;
            var24 = var2.transitionState;
            var _closure2_slot0 = var24;
            var25 = var2.cleanup;
            var _closure2_slot1 = var25;
            var10 = var2.isActive;
            var13 = var2.freeze;
            var26 = var2.parentFreezeValue;
            var14 = var2.index;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var20 = var2.bind(var4)();
            var2 = _closure1_slot13;
            var18 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var2 = 15;
            var2 = var9[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot2 = var2;
            var23 = _closure1_slot4;
            var3 = var23.useRef;
            var5 = false;
            var3 = var3.bind(var23)(var5);
            var _closure2_slot3 = var3;
            var7 = var23.useCallback;
            var3 = new Array(2);
            var3[0] = var25;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = _closure2_slot3;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot2;
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
            var7 = var7.bind(var23)(var2, var3);
            var2 = 16;
            var2 = var9[var2];
            var3 = var8.bind(var4)(var2);
            var2 = {};
            var11 = 10;
            var11 = var9[var11];
            var11 = var6.bind(var4)(var11);
            var11 = var11.TransitionStates;
            var11 = var11.YEETED;
            var11 = var24 !== var11;
            var2['canDrag'] = var11;
            var2['onVisibilityChange'] = var7;
            var7 = 17;
            var7 = var9[var7];
            var7 = var6.bind(var4)(var7);
            var7 = var7.dismissKeyboard;
            var2['onDragStart'] = var7;
            var2['startShown'] = var5;
            var3 = var3.bind(var4)(var2);
            var5 = var3.gesture;
            var7 = var3.panelGestureContext;
            var19 = var3.isDragging;
            var11 = var3.translateX;
            var2 = var3.movePanel;
            var27 = var3.maxWidth;
            var22 = {};
            var22['cleanup'] = var25;
            var22['movePanel'] = var2;
            var _closure2_slot4 = var22;
            var2 = var23.useRef;
            var2 = var2.bind(var23)(var22);
            var _closure2_slot5 = var2;
            var22 = var23.useEffect;
            var2 = function() {
                var2 = _closure2_slot5;
                var1 = _closure2_slot4;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var22.bind(var23)(var2);
            var22 = var23.useEffect;
            var2 = new Array(1);
            var2[0] = var24;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var1 = var1.current;
                    var2 = var1.cleanup;
                    var6 = var1.movePanel;
                    var7 = _closure2_slot0;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 10;
                    var5 = var1[var8];
                    var1 = undefined;
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.TransitionStates;
                    var5 = var5.MOUNTED;
                    if(!(var7 !== var5)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var5 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 === var4)) { _fun0005_ip = 20; continue _fun0005 }
case 18:
                    var13 = true;
                    var11 = 0;
                    var14 = undefined;
                    var12 = false;
                    var10 = false;
                    var4 = var14[var6](var13, var12, var11, var10, var9);
                    _fun0005_ip = 21; continue _fun0005;
case 20:
                    var4 = _closure2_slot3;
                    var4 = var4.current;
                    if(var4) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var3 = _closure2_slot3;
                    var5 = true;
                    var3['current'] = var5;
                    var11 = 0;
                    var14 = undefined;
                    var13 = false;
                    var12 = false;
                    var10 = true;
                    var3 = var14[var6](var13, var12, var11, var10, var9);
                    _fun0005_ip = 21; continue _fun0005;
case 22:
                    var2 = var2.bind(var1)();
case 21:
                    return var1;
                }
            };
            var1 = var22.bind(var23)(var1, var2);
            var1 = 9;
            var1 = var9[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.useMainTabsChannelScreenStyles;
            var30 = var2;
            var29 = var19;
            var28 = var11;
            var11 = var30[var1](var29, var28, var27, var26, var25);
            var3 = _closure1_slot11;
            var1 = 18;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var5;
            var5 = 19;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.MainTabsChannelScreenStackContext;
            var6 = var5.Provider;
            var5 = {};
            var5['value'] = var7;
            var7 = 11;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var9 = new Array(2);
            var9[0] = var11;
            var11 = _closure1_slot10;
            var19 = var11.MIDNIGHT;
            var11 = undefined;
            if(!(var20 === var19)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var11 = var18.midnightContainerStyles;
case 24:
            var9[1] = var11;
            var7['style'] = var9;
            var9 = !var10;
            if(var9) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var9 = undefined;
case 26:
            var7['accessibilityElementsHidden'] = var9;
            var9 = 'no-hide-descendants';
            if(!var10) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var9 = undefined;
case 28:
            var7['importantForAccessibility'] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 12;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Freeze;
            var9 = {};
            var9['freeze'] = var13;
            var13 = _closure1_slot1;
            var12 = 14;
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
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx1(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx2(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function MainTabsChannelScreenStack(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var15 = var1.screens;
            var _closure2_slot0 = var15;
            var9 = var1.screenStackActive;
            var _closure2_slot1 = var9;
            var17 = var1.translateX;
            var _closure2_slot2 = var17;
            var18 = var1.isDragging;
            var _closure2_slot3 = var18;
            var12 = var1.maxWidth;
            var _closure2_slot4 = var12;
            var6 = var1.shouldFreeze;
            var19 = var1.focusChatPressableComponent;
            var _closure2_slot5 = var19;
            var16 = var1.firstScreenWidth;
            var _closure2_slot6 = var16;
            var14 = var1.firstScreenFrame;
            var _closure2_slot7 = var14;
            var5 = undefined;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var3 = _closure1_slot1;
            var24 = _closure1_slot2;
            var1 = 20;
            var1 = var24[var1];
            var1 = var3.bind(var5)(var1);
            var11 = var1.bind(var5)();
            var20 = _closure1_slot4;
            var3 = var20.useState;
            var1 = var17.get;
            var1 = var1.bind(var17)();
            var1 = var1 === var12;
            var4 = var3.bind(var20)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var4 = var3.bind(var5)(var4, var1);
            var7 = 0;
            var1 = var4[var7];
            var3 = 1;
            var23 = var4[var3];
            var _closure2_slot8 = var23;
            var25 = _closure1_slot0;
            var8 = 21;
            var3 = var24[var8];
            var21 = var25.bind(var5)(var3);
            var10 = var21.useAnimatedReaction;
            var4 = function F() {
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot4;
                var1 = var2 === var1;
                return var1;
            };
            var3 = {};
            var3['translateX'] = var17;
            var3['maxWidth'] = var12;
            var4['__closure'] = var3;
            var3 = 1182927208903.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot16;
            var4['__initData'] = var3;
            var3 = function M(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot8;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var24 = var24[var8];
            var24 = var25.bind(var5)(var24);
            var24 = var24.runOnJS;
            var22['runOnJS'] = var24;
            var22['setIsHidden'] = var23;
            var3['__closure'] = var22;
            var22 = 2718765910383.0;
            var3['__workletHash'] = var22;
            var22 = _closure1_slot17;
            var3['__initData'] = var22;
            var3 = var10.bind(var21)(var4, var3);
            var10 = var20.useMemo;
            var4 = new Array(1);
            var4[0] = var15;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.at;
                    var1 = -1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var6 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var4 = var2.type;
case 32:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 22;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ChannelScreenType;
                    var3 = var3.DEFAULT;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var1 = var2.channelId;
case 34:
                    return var1;
                }
            };
            var3 = var10.bind(var20)(var3, var4);
            var10 = var20.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.MediaPlayerManager;
                    var4 = null;
                    var1 = var4 == var2;
                    if(var1) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var3 = var2.pauseAllMediaPlayers;
                    var1 = var4 == var3;
case 36:
                    if(var1) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var1 = var2.pauseAllMediaPlayers;
                    var1 = var1.bind(var2)();
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var20)(var3, var4);
            var3 = var15[var7];
            var _closure2_slot9 = var3;
            if(!var6) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var6 = var1;
case 40:
            if(!var6) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var10 = var3.type;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 22;
            var4 = var21[var4];
            var4 = var20.bind(var5)(var4);
            var4 = var4.ChannelScreenType;
            var4 = var4.DEFAULT;
            var1 = var10 !== var4;
case 44:
            var6 = var1;
case 42:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useSharedValue;
            var1 = var1.bind(var4)(var7);
            _closure2_slot10 = var1;
            var10 = _closure1_slot4;
            var20 = var10.useEffect;
            var8 = new Array(2);
            var8[0] = var6;
            var8[1] = var1;
            var4 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot10;
                    var2 = var3.set;
                    var4 = _closure2_slot10;
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
            var4 = var20.bind(var10)(var4, var8);
            var8 = var10.useCallback;
            var20 = var15.length;
            var4 = new Array(9);
            var4[0] = var20;
            var4[1] = var19;
            var4[2] = var18;
            var4[3] = var17;
            var4[4] = var16;
            var4[5] = var14;
            var4[6] = var12;
            var4[7] = var1;
            var4[8] = var9;
            var1 = function(arg1, arg2, arg3, arg4) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var6 = arg1;
                    var7 = arg2;
                    var10 = arg3;
                    var8 = arg4;
                    var1 = global;
                    var1 = var1.Number;
                    var5 = undefined;
                    var9 = var1.bind(var5)(var6);
                    var1 = 0;
                    if(!(var1 !== var9)) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var4 = var7.guildId;
                    var1['guildId'] = var4;
                    var4 = var7.channelId;
                    var1['channelId'] = var4;
                    var11 = var7.showCreateThread;
                    var4 = null;
                    var4 = var4 != var11;
                    if(!var4) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                    var4 = var11;
case 48:
                    var1['showCreateThread'] = var4;
                    var1['index'] = var9;
                    var1['transitionState'] = var10;
                    var11 = _closure2_slot10;
                    var1['parentFreezeValue'] = var11;
                    var1['cleanup'] = var8;
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
                    _fun0010_ip = 50; continue _fun0010;
case 46:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot14;
                    var2 = {};
                    var11 = var7.guildId;
                    var2['guildId'] = var11;
                    var11 = var7.channelId;
                    var2['channelId'] = var11;
                    var11 = var7.showCreateThread;
                    var7 = null;
                    var7 = var7 != var11;
                    if(!var7) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                    var7 = var11;
case 51:
                    var2['showCreateThread'] = var7;
                    var11 = _closure2_slot5;
                    var2['focusChatPressableComponent'] = var11;
                    var2['index'] = var9;
                    var2['transitionState'] = var10;
                    var2['cleanup'] = var8;
                    var8 = _closure2_slot3;
                    var2['isDragging'] = var8;
                    var8 = _closure2_slot2;
                    var2['translateX'] = var8;
                    var8 = _closure2_slot1;
                    if(!var8) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var10 = _closure2_slot0;
                    var11 = var10.length;
                    var10 = 1;
                    var10 = var11 - var10;
                    var8 = var9 === var10;
case 53:
                    var2['isActive'] = var8;
                    var8 = _closure2_slot0;
                    var10 = var8.length;
                    var8 = 2;
                    var8 = var10 - var8;
                    var8 = var9 < var8;
                    var2['freeze'] = var8;
                    var8 = _closure2_slot6;
                    var2['containerWidth'] = var8;
                    var8 = _closure2_slot7;
                    var2['frame'] = var8;
                    var8 = _closure2_slot10;
                    var2['parentFreezeValue'] = var8;
                    var7 = _closure2_slot4;
                    var2['maxWidth'] = var7;
                    var1 = var4.bind(var5)(var3, var2, var6);
case 50:
                    return var1;
                }
            };
            var14 = var8.bind(var10)(var1, var4);
            var8 = var10.useRef;
            var1 = null;
            var4 = var1 == var3;
            var12 = undefined;
            if(var4) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var12 = var3.channelId;
case 55:
            var16 = var1 != var12;
            var4 = null;
            if(!var16) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var4 = var12;
case 57:
            var4 = var8.bind(var10)(var4);
            _closure2_slot11 = var4;
            var10 = _closure1_slot4;
            var4 = var10.useRef;
            var4 = var4.bind(var10)(var1);
            _closure2_slot12 = var4;
            var8 = var10.useEffect;
            var4 = var1 == var3;
            var12 = undefined;
            if(var4) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var12 = var3.type;
case 59:
            var4 = new Array(2);
            var4[0] = var12;
            var16 = var1 == var3;
            var12 = undefined;
            if(var16) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var12 = var3.channelId;
case 61:
            var4[1] = var12;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                    var4 = _closure2_slot9;
                    var2 = var4.type;
case 63:
                    var2 = var3 != var2;
                    if(!var2) { _fun0011_ip = 65; continue _fun0011 }
case 47:
                    var3 = _closure2_slot12;
                    var4 = var3.current;
                    var3 = _closure2_slot9;
                    var3 = var3.type;
                    var2 = var4 !== var3;
case 65:
                    if(!var2) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                    var4 = _closure2_slot12;
                    var2 = _closure2_slot9;
                    var3 = var2.type;
                    var4['current'] = var3;
                    var3 = var2.channelId;
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var3 = _closure2_slot11;
                    var2 = _closure2_slot9;
                    var2 = var2.channelId;
                    var3['current'] = var2;
                    _fun0011_ip = 66; continue _fun0011;
case 68:
                    var2 = _closure2_slot9;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var2 = var6[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ChannelScreenType;
                    var2 = var2.DEFAULT;
                    var2 = var3 !== var2;
                    if(var2) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 23;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getChatLayout;
                    var3 = var3.bind(var4)();
                    var2 = var3.isChatLockedOpen;
case 70:
                    if(var2) { _fun0011_ip = 66; continue _fun0011 }
case 72:
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
                    var8 = _closure1_slot9;
                    var8 = var8.CHANNEL;
                    var6['section'] = var8;
                    var8 = _closure1_slot8;
                    var8 = var8.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH;
                    var6['object'] = var8;
                    var7 = _closure1_slot7;
                    var7 = var7.ACK_AUTOMATIC;
                    var6['objectType'] = var7;
                    var2['location'] = var6;
                    var5 = _closure2_slot9;
                    var5 = var5.channelId;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 66:
                    return var1;
                }
            };
            var2 = var8.bind(var10)(var2, var4);
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 25;
            var2 = var8[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.freezeScreenIndex;
            var2 = var2.bind(var4)(var6, var7);
            if(!var6) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var2 = var3.showCreateThread;
case 75:
            var1 = null;
            if(var2) { _fun0006_ip = 77; continue _fun0006 }
case 73:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Freeze;
            var2 = {};
            var2['freeze'] = var6;
            var7 = _closure1_slot1;
            var6 = 13;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var8 = _closure1_slot6;
            var8 = var8.absoluteFill;
            var6['style'] = var8;
            var8 = 'box-none';
            var6['pointerEvents'] = var8;
            var8 = !var9;
            if(var8) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var8 = undefined;
case 78:
            var6['accessibilityElementsHidden'] = var8;
            var8 = 'no-hide-descendants';
            if(!var9) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var8 = undefined;
case 80:
            var6['importantForAccessibility'] = var8;
            var10 = _closure1_slot11;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 26;
            var8 = var16[var8];
            var8 = var12.bind(var5)(var8);
            var9 = var8.ThemeContextProvider;
            var8 = {};
            var8['gradient'] = var11;
            var11 = 10;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.TransitionGroup;
            var11 = {};
            var11['items'] = var15;
            var11['renderItem'] = var14;
            var13 = _closure1_slot18;
            var11['getItemKey'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 77:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();