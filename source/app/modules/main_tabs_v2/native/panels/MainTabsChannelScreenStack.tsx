// app/modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useIsCompletelyCovered(arg1, arg2, arg3) {
        var6 = arg1;
        var7 = arg2;
        var14 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var14;
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 8;
        var2 = var9[var2];
        var5 = undefined;
        var8 = var3.bind(var5)(var2);
        var3 = var8.useConfig;
        var2 = {};
        var10 = 'MainTabsChannelScreenStack';
        var2['location'] = var10;
        var2 = var3.bind(var8)(var2);
        var8 = var2.enabled;
        var _closure2_slot3 = var8;
        var3 = _closure1_slot0;
        var2 = 9;
        var10 = var9[var2];
        var13 = var3.bind(var5)(var10);
        var12 = var13.useAnimatedReaction;
        var11 = function c() {
            var2 = _closure2_slot2;
            var1 = var2.get;
            var2 = var1.bind(var2)();
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var10 = {};
        var10['translateX'] = var14;
        var11['__closure'] = var10;
        var10 = 10608377273080.0;
        var11['__workletHash'] = var10;
        var10 = _closure1_slot15;
        var11['__initData'] = var10;
        var10 = function l(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var1 = arg2;
                if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot0;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                if(!(var3 < var2)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
                var6 = _closure2_slot1;
                var5 = var6.set;
                var4 = _closure2_slot0;
                var4 = var5.bind(var6)(var4);
                _fun0001_ip = 2; continue _fun0001;
case 4:
                if(!(var3 >= var2)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
                var3 = _closure2_slot1;
                var2 = var3.set;
                var4 = _closure2_slot0;
                var1 = 1;
                var1 = var4 - var1;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var14 = {};
        var14['highestFullyRenderedScreenIndex'] = var7;
        var14['index'] = var6;
        var10['__closure'] = var14;
        var14 = 10137919010401.0;
        var10['__workletHash'] = var14;
        var14 = _closure1_slot16;
        var10['__initData'] = var14;
        var10 = var12.bind(var13)(var11, var10);
        var10 = 10;
        var10 = var9[var10];
        var12 = var3.bind(var5)(var10);
        var11 = var12.useUnmountEffect;
        var10 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot0;
                if(!(var3 >= var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = _closure2_slot1;
                var2 = var3.set;
                var4 = _closure2_slot0;
                var1 = 1;
                var1 = var4 - var1;
                var1 = var2.bind(var3)(var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var10 = var11.bind(var12)(var10);
        var2 = var9[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.useDerivedValue;
        var1 = function u() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot3;
                if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 3:
                var4 = _closure2_slot1;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot0;
                var1 = var3 > var2;
case 10:
                return var1;
            }
        };
        var5 = {};
        var5['enabled'] = var8;
        var5['highestFullyRenderedScreenIndex'] = var7;
        var5['index'] = var6;
        var1['__closure'] = var5;
        var5 = 1648562234730.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot17;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function getKey(arg1) {
        var1 = global;
        var3 = var1.String;
        var1 = arg1;
        var2 = var1.index;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot25 = var1;
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
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx1(){const{translateX}=this.__closure;return translateX.get()>0;}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx2(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx3(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var8 = var7.memo;
    var4 = function FirstChannelScreen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var20 = var2.guildId;
            var19 = var2.channelId;
            var18 = var2.showCreateThread;
            var15 = var2.frame;
            var14 = var2.index;
            var9 = var2.freeze;
            var28 = var2.isDragging;
            var27 = var2.translateX;
            var17 = var2.containerWidth;
            var13 = var2.isActive;
            var26 = var2.maxWidth;
            var6 = var2.focusChatPressableComponent;
            var24 = var2.transitionState;
            var _closure2_slot0 = var24;
            var25 = var2.cleanup;
            var _closure2_slot1 = var25;
            var29 = var2.parentFreezeValue;
            var16 = var2.highestFullyRenderedScreenIndex;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var4 = undefined;
            var3 = var2.bind(var4)(var3);
            var23 = var3.bind(var4)();
            var3 = _closure1_slot14;
            var8 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var3 = 12;
            var3 = var5[var3];
            var12 = var7.bind(var4)(var3);
            var10 = var12.useMobileVisualRefreshConfig;
            var3 = {};
            var22 = 'MainTabsChannelScreenStack';
            var3['location'] = var22;
            var3 = var10.bind(var12)(var3);
            var10 = var3.chatInputFloating;
            var22 = 13;
            var3 = var5[var22];
            var12 = var7.bind(var4)(var3);
            var3 = var12.useOrientation;
            var12 = var3.bind(var12)();
            var3 = _closure1_slot24;
            var30 = var3.bind(var4)(var14, var16, var27);
            var3 = 14;
            var3 = var5[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useMainTabsChannelScreenStyles;
            var34 = var7;
            var33 = var28;
            var32 = var27;
            var31 = var26;
            var7 = var34[var3](var33, var32, var31, var30, var29, var28);
            var21 = _closure1_slot4;
            var16 = var21.useEffect;
            var3 = new Array(2);
            var3[0] = var25;
            var3[1] = var24;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 === var3)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 11:
                    return var1;
                }
            };
            var1 = var16.bind(var21)(var1, var3);
            var3 = _closure1_slot13;
            var1 = 16;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = new Array(3);
            var5[0] = var7;
            var16 = null;
            var21 = var16 != var17;
            var7 = null;
            if(!var21) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var21 = {};
            var21['width'] = var17;
            var7 = var21;
case 13:
            var5[1] = var7;
            var7 = _closure1_slot11;
            var21 = var7.MIDNIGHT;
            var7 = undefined;
            if(!(var23 === var21)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            if(!var10) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var21 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var22];
            var10 = var21.bind(var4)(var10);
            var10 = var10.OrientationType;
            var10 = var10.PORTRAIT;
            var7 = undefined;
            if(!(var12 === var10)) { _fun0004_ip = 15; continue _fun0004 }
case 19:
            var10 = var16 != var15;
            var7 = undefined;
            if(var10) { _fun0004_ip = 15; continue _fun0004 }
case 17:
            var7 = var8.midnightContainerStyles;
case 15:
            var5[2] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 17;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Freeze;
            var5 = {};
            var5['freeze'] = var9;
            var10 = _closure1_slot7;
            var9 = {};
            var12 = false;
            var9['collapsable'] = var12;
            var12 = _closure1_slot6;
            var12 = var12.absoluteFill;
            var9['style'] = var12;
            var12 = 'box-only';
            if(!var13) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var12 = 'auto';
case 20:
            var9['pointerEvents'] = var12;
            var12 = !var13;
            if(var12) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var12 = undefined;
case 22:
            var9['accessibilityElementsHidden'] = var12;
            var12 = 'no-hide-descendants';
            if(!var13) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var12 = undefined;
case 24:
            var9['importantForAccessibility'] = var12;
            var13 = _closure1_slot12;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 18;
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
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx4(){const{translateX}=this.__closure;return translateX.get()===0;}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx5(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var8 = var7.memo;
    var4 = function ChannelScreen(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var17 = var2.guildId;
            var16 = var2.channelId;
            var15 = var2.showCreateThread;
            var29 = var2.transitionState;
            var _closure2_slot0 = var29;
            var30 = var2.cleanup;
            var _closure2_slot1 = var30;
            var10 = var2.isActive;
            var13 = var2.freeze;
            var37 = var2.parentFreezeValue;
            var14 = var2.index;
            var _closure2_slot2 = var14;
            var5 = var2.highestFullyRenderedScreenIndex;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var23 = var2.bind(var4)();
            var2 = _closure1_slot14;
            var18 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var2 = 12;
            var2 = var9[var2];
            var7 = var6.bind(var4)(var2);
            var3 = var7.useMobileVisualRefreshConfig;
            var2 = {};
            var11 = 'MainTabsChannelScreenStack';
            var2['location'] = var11;
            var2 = var3.bind(var7)(var2);
            var19 = var2.chatInputFloating;
            var22 = 13;
            var2 = var9[var22];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useOrientation;
            var20 = var2.bind(var3)();
            var2 = 19;
            var2 = var9[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot3 = var2;
            var28 = _closure1_slot4;
            var3 = var28.useRef;
            var7 = false;
            var3 = var3.bind(var28)(var7);
            var _closure2_slot4 = var3;
            var11 = var28.useCallback;
            var3 = new Array(2);
            var3[0] = var30;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(var2) { _fun0007_ip = 8; continue _fun0007 }
case 28:
                    var3 = _closure2_slot4;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot3;
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
                    _fun0007_ip = 26; continue _fun0007;
case 8:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var11.bind(var28)(var2, var3);
            var2 = 20;
            var2 = var9[var2];
            var3 = var8.bind(var4)(var2);
            var2 = {};
            var21 = 15;
            var21 = var9[var21];
            var21 = var6.bind(var4)(var21);
            var21 = var21.TransitionStates;
            var21 = var21.YEETED;
            var21 = var29 !== var21;
            var2['canDrag'] = var21;
            var2['onVisibilityChange'] = var11;
            var11 = 21;
            var11 = var9[var11];
            var11 = var6.bind(var4)(var11);
            var11 = var11.dismissKeyboard;
            var2['onDragStart'] = var11;
            var2['startShown'] = var7;
            var3 = var3.bind(var4)(var2);
            var21 = var3.gesture;
            var7 = var3.panelGestureContext;
            var25 = var3.isDragging;
            var24 = var3.translateX;
            var _closure2_slot5 = var24;
            var2 = var3.movePanel;
            var11 = var3.maxWidth;
            var3 = _closure1_slot24;
            var38 = var3.bind(var4)(var14, var5, var24);
            var31 = var28.useContext;
            var5 = 22;
            var27 = var9[var5];
            var27 = var8.bind(var4)(var27);
            var27 = var31.bind(var28)(var27);
            var35 = var27.disallowGesture;
            var _closure2_slot6 = var35;
            var27 = 9;
            var27 = var9[var27];
            var33 = var6.bind(var4)(var27);
            var32 = var33.useAnimatedReaction;
            var31 = function v() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var1 === var2;
                return var1;
            };
            var27 = {};
            var27['translateX'] = var24;
            var31['__closure'] = var27;
            var27 = 1803281708382.0;
            var31['__workletHash'] = var27;
            var27 = _closure1_slot19;
            var31['__initData'] = var27;
            var27 = function y(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                    var4 = _closure2_slot2;
                    var2 = 1;
                    var1 = var2 === var4;
case 29:
                    if(!var1) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var34 = {};
            var34['index'] = var14;
            var34['mainTabsDisallowGesture'] = var35;
            var27['__closure'] = var34;
            var34 = 4369586160197.0;
            var27['__workletHash'] = var34;
            var34 = _closure1_slot20;
            var27['__initData'] = var34;
            var27 = var32.bind(var33)(var31, var27);
            var27 = {};
            var27['cleanup'] = var30;
            var27['movePanel'] = var2;
            var _closure2_slot7 = var27;
            var2 = var28.useRef;
            var2 = var2.bind(var28)(var27);
            var _closure2_slot8 = var2;
            var27 = var28.useEffect;
            var2 = function() {
                var2 = _closure2_slot8;
                var1 = _closure2_slot7;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var27.bind(var28)(var2);
            var27 = var28.useEffect;
            var2 = new Array(1);
            var2[0] = var29;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var1 = var1.current;
                    var2 = var1.cleanup;
                    var6 = var1.movePanel;
                    var7 = _closure2_slot0;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 15;
                    var5 = var1[var8];
                    var1 = undefined;
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.TransitionStates;
                    var5 = var5.MOUNTED;
                    if(!(var7 !== var5)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                    var5 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 === var4)) { _fun0009_ip = 35; continue _fun0009 }
case 33:
                    var13 = true;
                    var11 = 0;
                    var14 = undefined;
                    var12 = false;
                    var10 = false;
                    var4 = var14[var6](var13, var12, var11, var10, var9);
                    _fun0009_ip = 36; continue _fun0009;
case 35:
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    if(var4) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                    var3 = _closure2_slot4;
                    var5 = true;
                    var3['current'] = var5;
                    var11 = 0;
                    var14 = undefined;
                    var13 = false;
                    var12 = false;
                    var10 = true;
                    var3 = var14[var6](var13, var12, var11, var10, var9);
                    _fun0009_ip = 36; continue _fun0009;
case 37:
                    var2 = var2.bind(var1)();
case 36:
                    return var1;
                }
            };
            var1 = var27.bind(var28)(var1, var2);
            var1 = 14;
            var1 = var9[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.useMainTabsChannelScreenStyles;
            var42 = var2;
            var41 = var25;
            var40 = var24;
            var39 = var11;
            var11 = var42[var1](var41, var40, var39, var38, var37, var36);
            var3 = _closure1_slot12;
            var1 = 23;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var21;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.MainTabsChannelScreenStackContext;
            var6 = var5.Provider;
            var5 = {};
            var5['value'] = var7;
            var7 = 16;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var9 = new Array(2);
            var9[0] = var11;
            var11 = _closure1_slot11;
            var21 = var11.MIDNIGHT;
            var11 = undefined;
            if(!(var23 === var21)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            if(!var19) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var22];
            var19 = var21.bind(var4)(var19);
            var19 = var19.OrientationType;
            var19 = var19.PORTRAIT;
            var11 = undefined;
            if(!(var20 === var19)) { _fun0006_ip = 39; continue _fun0006 }
case 41:
            var11 = var18.midnightContainerStyles;
case 39:
            var9[1] = var11;
            var7['style'] = var9;
            var9 = !var10;
            if(var9) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var9 = undefined;
case 43:
            var7['accessibilityElementsHidden'] = var9;
            var9 = 'no-hide-descendants';
            if(!var10) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var9 = undefined;
case 45:
            var7['importantForAccessibility'] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 17;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Freeze;
            var9 = {};
            var9['freeze'] = var13;
            var13 = _closure1_slot1;
            var12 = 18;
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
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx6(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function MainTabsChannelScreenStackTsx7(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = var7.memo;
    var2 = function MainTabsChannelScreenStack(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var15 = var3.screens;
            var _closure2_slot0 = var15;
            var9 = var3.screenStackActive;
            var _closure2_slot1 = var9;
            var18 = var3.translateX;
            var _closure2_slot2 = var18;
            var19 = var3.isDragging;
            var _closure2_slot3 = var19;
            var14 = var3.maxWidth;
            var _closure2_slot4 = var14;
            var1 = var3.highestFullyRenderedScreenIndex;
            var _closure2_slot5 = var1;
            var6 = var3.shouldFreeze;
            var20 = var3.focusChatPressableComponent;
            var _closure2_slot6 = var20;
            var17 = var3.firstScreenWidth;
            var _closure2_slot7 = var17;
            var16 = var3.firstScreenFrame;
            var _closure2_slot8 = var16;
            var5 = undefined;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var4 = _closure1_slot1;
            var25 = _closure1_slot2;
            var3 = 24;
            var3 = var25[var3];
            var3 = var4.bind(var5)(var3);
            var11 = var3.bind(var5)();
            var21 = _closure1_slot4;
            var4 = var21.useState;
            var3 = var18.get;
            var3 = var3.bind(var18)();
            var3 = var3 === var14;
            var7 = var4.bind(var21)(var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var8 = var4.bind(var5)(var7, var3);
            var7 = 0;
            var4 = var8[var7];
            var3 = 1;
            var24 = var8[var3];
            var _closure2_slot9 = var24;
            var26 = _closure1_slot0;
            var10 = 9;
            var3 = var25[var10];
            var22 = var26.bind(var5)(var3);
            var12 = var22.useAnimatedReaction;
            var8 = function k() {
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot4;
                var1 = var2 === var1;
                return var1;
            };
            var3 = {};
            var3['translateX'] = var18;
            var3['maxWidth'] = var14;
            var8['__closure'] = var3;
            var3 = 9963940499904.0;
            var8['__workletHash'] = var3;
            var3 = _closure1_slot22;
            var8['__initData'] = var3;
            var3 = function A(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0011_ip = 4; continue _fun0011 }
case 3:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot9;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = {};
            var25 = var25[var10];
            var25 = var26.bind(var5)(var25);
            var25 = var25.runOnJS;
            var23['runOnJS'] = var25;
            var23['setIsHidden'] = var24;
            var3['__closure'] = var23;
            var23 = 10167608718442.0;
            var3['__workletHash'] = var23;
            var23 = _closure1_slot23;
            var3['__initData'] = var23;
            var3 = var12.bind(var22)(var8, var3);
            var12 = var21.useMemo;
            var8 = new Array(1);
            var8[0] = var15;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.at;
                    var1 = -1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var6 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0012_ip = 47; continue _fun0012 }
case 6:
                    var4 = var2.type;
case 47:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 25;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ChannelScreenType;
                    var3 = var3.DEFAULT;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0012_ip = 48; continue _fun0012 }
case 49:
                    var1 = var2.channelId;
case 48:
                    return var1;
                }
            };
            var3 = var12.bind(var21)(var3, var8);
            var12 = var21.useEffect;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.MediaPlayerManager;
                    var4 = null;
                    var1 = var4 == var2;
                    if(var1) { _fun0013_ip = 50; continue _fun0013 }
case 51:
                    var3 = var2.pauseAllMediaPlayers;
                    var1 = var4 == var3;
case 50:
                    if(var1) { _fun0013_ip = 52; continue _fun0013 }
case 53:
                    var1 = var2.pauseAllMediaPlayers;
                    var1 = var1.bind(var2)();
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var21)(var3, var8);
            var3 = var15[var7];
            var _closure2_slot10 = var3;
            if(!var6) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var6 = var4;
case 54:
            if(!var6) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            var4 = null;
            var4 = var4 == var3;
            if(var4) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var12 = var3.type;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 25;
            var8 = var22[var8];
            var8 = var21.bind(var5)(var8);
            var8 = var8.ChannelScreenType;
            var8 = var8.DEFAULT;
            var4 = var12 !== var8;
case 58:
            var6 = var4;
case 56:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var8 = var8.bind(var5)(var4);
            var4 = var8.useSharedValue;
            var12 = var4.bind(var8)(var7);
            _closure2_slot11 = var12;
            var10 = _closure1_slot4;
            var21 = var10.useEffect;
            var8 = new Array(2);
            var8[0] = var6;
            var8[1] = var12;
            var4 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot11;
                    var2 = var3.set;
                    var4 = _closure2_slot11;
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
            var4 = var21.bind(var10)(var4, var8);
            var8 = var10.useCallback;
            var21 = var15.length;
            var4 = new Array(10);
            var4[0] = var21;
            var4[1] = var20;
            var4[2] = var19;
            var4[3] = var18;
            var4[4] = var17;
            var4[5] = var16;
            var4[6] = var14;
            var4[7] = var12;
            var4[8] = var9;
            var4[9] = var1;
            var1 = function(arg1, arg2, arg3, arg4) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                    if(!(var1 !== var9)) { _fun0014_ip = 60; continue _fun0014 }
case 61:
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot21;
                    var1 = {};
                    var4 = var7.guildId;
                    var1['guildId'] = var4;
                    var4 = var7.channelId;
                    var1['channelId'] = var4;
                    var11 = var7.showCreateThread;
                    var4 = null;
                    var4 = var4 != var11;
                    if(!var4) { _fun0014_ip = 62; continue _fun0014 }
case 63:
                    var4 = var11;
case 62:
                    var1['showCreateThread'] = var4;
                    var1['index'] = var9;
                    var1['transitionState'] = var10;
                    var11 = _closure2_slot11;
                    var1['parentFreezeValue'] = var11;
                    var1['cleanup'] = var8;
                    var11 = _closure2_slot0;
                    var13 = var11.length;
                    var12 = 1;
                    var12 = var13 - var12;
                    var12 = var9 === var12;
                    var1['isActive'] = var12;
                    var12 = var11.length;
                    var11 = 2;
                    var11 = var12 - var11;
                    var11 = var9 < var11;
                    var1['freeze'] = var11;
                    var4 = _closure2_slot5;
                    var1['highestFullyRenderedScreenIndex'] = var4;
                    var1 = var3.bind(var5)(var2, var1, var6);
                    _fun0014_ip = 64; continue _fun0014;
case 60:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot18;
                    var2 = {};
                    var11 = var7.guildId;
                    var2['guildId'] = var11;
                    var11 = var7.channelId;
                    var2['channelId'] = var11;
                    var11 = var7.showCreateThread;
                    var7 = null;
                    var7 = var7 != var11;
                    if(!var7) { _fun0014_ip = 65; continue _fun0014 }
case 66:
                    var7 = var11;
case 65:
                    var2['showCreateThread'] = var7;
                    var11 = _closure2_slot6;
                    var2['focusChatPressableComponent'] = var11;
                    var2['index'] = var9;
                    var2['transitionState'] = var10;
                    var2['cleanup'] = var8;
                    var8 = _closure2_slot3;
                    var2['isDragging'] = var8;
                    var8 = _closure2_slot2;
                    var2['translateX'] = var8;
                    var8 = _closure2_slot1;
                    if(!var8) { _fun0014_ip = 67; continue _fun0014 }
case 68:
                    var10 = _closure2_slot0;
                    var11 = var10.length;
                    var10 = 1;
                    var10 = var11 - var10;
                    var8 = var9 === var10;
case 67:
                    var2['isActive'] = var8;
                    var8 = _closure2_slot0;
                    var10 = var8.length;
                    var8 = 2;
                    var8 = var10 - var8;
                    var8 = var9 < var8;
                    var2['freeze'] = var8;
                    var8 = _closure2_slot7;
                    var2['containerWidth'] = var8;
                    var8 = _closure2_slot8;
                    var2['frame'] = var8;
                    var8 = _closure2_slot11;
                    var2['parentFreezeValue'] = var8;
                    var8 = _closure2_slot4;
                    var2['maxWidth'] = var8;
                    var7 = _closure2_slot5;
                    var2['highestFullyRenderedScreenIndex'] = var7;
                    var1 = var4.bind(var5)(var3, var2, var6);
case 64:
                    return var1;
                }
            };
            var14 = var8.bind(var10)(var1, var4);
            var8 = var10.useRef;
            var1 = null;
            var4 = var1 == var3;
            var12 = undefined;
            if(var4) { _fun0010_ip = 69; continue _fun0010 }
case 70:
            var12 = var3.channelId;
case 69:
            var16 = var1 != var12;
            var4 = null;
            if(!var16) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var4 = var12;
case 71:
            var4 = var8.bind(var10)(var4);
            _closure2_slot12 = var4;
            var10 = _closure1_slot4;
            var4 = var10.useRef;
            var4 = var4.bind(var10)(var1);
            _closure2_slot13 = var4;
            var8 = var10.useEffect;
            var4 = var1 == var3;
            var12 = undefined;
            if(var4) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var12 = var3.type;
case 73:
            var4 = new Array(2);
            var4[0] = var12;
            var16 = var1 == var3;
            var12 = undefined;
            if(var16) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var12 = var3.channelId;
case 75:
            var4[1] = var12;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0015_ip = 77; continue _fun0015 }
case 78:
                    var4 = _closure2_slot10;
                    var2 = var4.type;
case 77:
                    var2 = var3 != var2;
                    if(!var2) { _fun0015_ip = 79; continue _fun0015 }
case 61:
                    var3 = _closure2_slot13;
                    var4 = var3.current;
                    var3 = _closure2_slot10;
                    var3 = var3.type;
                    var2 = var4 !== var3;
case 79:
                    if(!var2) { _fun0015_ip = 80; continue _fun0015 }
case 81:
                    var4 = _closure2_slot13;
                    var2 = _closure2_slot10;
                    var3 = var2.type;
                    var4['current'] = var3;
                    var3 = var2.channelId;
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                    var3 = _closure2_slot12;
                    var2 = _closure2_slot10;
                    var2 = var2.channelId;
                    var3['current'] = var2;
                    _fun0015_ip = 80; continue _fun0015;
case 82:
                    var2 = _closure2_slot10;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 25;
                    var2 = var6[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ChannelScreenType;
                    var2 = var2.DEFAULT;
                    var2 = var3 !== var2;
                    if(var2) { _fun0015_ip = 84; continue _fun0015 }
case 85:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 26;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getChatLayout;
                    var3 = var3.bind(var4)();
                    var2 = var3.isChatLockedOpen;
case 84:
                    if(var2) { _fun0015_ip = 80; continue _fun0015 }
case 86:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 27;
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
                    var5 = _closure2_slot10;
                    var5 = var5.channelId;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 80:
                    return var1;
                }
            };
            var2 = var8.bind(var10)(var2, var4);
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 28;
            var2 = var8[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.freezeScreenIndex;
            var2 = var2.bind(var4)(var6, var7);
            if(!var6) { _fun0010_ip = 87; continue _fun0010 }
case 88:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 89; continue _fun0010 }
case 90:
            var2 = var3.showCreateThread;
case 89:
            var1 = null;
            if(var2) { _fun0010_ip = 91; continue _fun0010 }
case 87:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Freeze;
            var2 = {};
            var2['freeze'] = var6;
            var7 = _closure1_slot7;
            var6 = {'collapsable': false, 'style': null, 'pointerEvents': 'box-none'};
            var8 = _closure1_slot6;
            var8 = var8.absoluteFill;
            var6['style'] = var8;
            var8 = !var9;
            if(var8) { _fun0010_ip = 92; continue _fun0010 }
case 93:
            var8 = undefined;
case 92:
            var6['accessibilityElementsHidden'] = var8;
            var8 = 'no-hide-descendants';
            if(!var9) { _fun0010_ip = 94; continue _fun0010 }
case 95:
            var8 = undefined;
case 94:
            var6['importantForAccessibility'] = var8;
            var10 = _closure1_slot12;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 29;
            var8 = var16[var8];
            var8 = var12.bind(var5)(var8);
            var9 = var8.ThemeContextProvider;
            var8 = {};
            var8['gradient'] = var11;
            var11 = 15;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.TransitionGroup;
            var11 = {};
            var11['items'] = var15;
            var11['renderItem'] = var14;
            var13 = _closure1_slot25;
            var11['getItemKey'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 91:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();