// app/modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.StyleSheet;
    var _closure1_slot6 = var8;
    var4 = var4.Pressable;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ComponentActions;
    var _closure1_slot8 = var8;
    var4 = var4.ME;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var13.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var16 = 'MainTabsNavigatorPanel';
    var17 = var8;
    var4 = new var17[var9](var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var10 = {};
    var12 = 7;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_TERTIARY;
    var10['backgroundColor'] = var12;
    var4['containerBackground'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['tabsContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MainTabsNavigatorPanelTsx1(){const{translateX}=this.__closure;return{opacity:translateX.get()>0?1:0};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function MainTabsNavigatorPanel() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot13;
            var4 = undefined;
            var27 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var2 = var3[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useNavigation;
            var2 = var2.bind(var5)();
            var _closure2_slot0 = var2;
            var6 = _closure1_slot1;
            var5 = 9;
            var5 = var3[var5];
            var5 = var6.bind(var4)(var5);
            var7 = var5.bind(var4)();
            var5 = var7.isChatBesideChannelList;
            var18 = var7.isChatLockedOpen;
            var _closure2_slot1 = var18;
            var7 = 10;
            var7 = var3[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.useDrawerWidth;
            var13 = var7.bind(var8)();
            var _closure2_slot2 = var13;
            var7 = 11;
            var7 = var3[var7];
            var7 = var6.bind(var4)(var7);
            var17 = var7.bind(var4)();
            var15 = _closure1_slot4;
            var7 = var15.useRef;
            var7 = var7.bind(var15)(var18);
            var _closure2_slot3 = var7;
            var7 = var15.useRef;
            var10 = false;
            var7 = var7.bind(var15)(var10);
            var _closure2_slot4 = var7;
            var9 = var15.useLayoutEffect;
            var8 = new Array(1);
            var8[0] = var18;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = _closure2_slot1;
                    if(!(var3 !== var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var3['current'] = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var3.convertLandscapeToPortraitScreens;
                    var2 = var2.bind(var3)();
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var2 = var3.convertPortraitToLandscapeScreens;
                    var2 = var2.bind(var3)();
case 6:
                    var2 = _closure2_slot4;
                    var1 = true;
                    var2['current'] = var1;
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var15)(var7, var8);
            var16 = 13;
            var3 = var3[var16];
            var3 = var6.bind(var4)(var3);
            var24 = var3.bind(var4)(var2);
            var _closure2_slot5 = var24;
            var6 = var15.useState;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = null;
                    var3 = var2 == var1;
                    var4 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = var1.type;
case 7:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 13;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.ChannelScreenType;
                    var1 = var1.DEFAULT;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var3 = var6.bind(var15)(var3);
            var19 = _closure1_slot3;
            var11 = 2;
            var6 = var19.bind(var4)(var3, var11);
            var14 = 0;
            var23 = var6[var14];
            var _closure2_slot6 = var23;
            var3 = 1;
            var6 = var6[var3];
            var _closure2_slot7 = var6;
            var8 = var24[var14];
            var _closure2_slot8 = var8;
            var6 = var15.useRef;
            var6 = var6.bind(var15)(var8);
            var _closure2_slot9 = var6;
            var9 = var15.useEffect;
            var7 = new Array(1);
            var7[0] = var8;
            var6 = function() {
                var2 = _closure2_slot9;
                var1 = _closure2_slot8;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var9.bind(var15)(var6, var7);
            var9 = var15.useCallback;
            var7 = new Array(1);
            var7[0] = var2;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot7;
                    var1 = undefined;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot0;
                    var3 = var4.getState;
                    var11 = var3.bind(var4)();
                    var10 = var11.index;
                    var3 = var11.routes;
                    var3 = var3[var10];
                    var9 = null;
                    var4 = var9 == var3;
                    var5 = undefined;
                    if(var4) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var5 = var3.name;
case 9:
                    var3 = 0;
                    var8 = 'channel';
                    var7 = 1;
                    var6 = 0;
                    var4 = 0;
                    if(!(var8 === var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var12 = var6 + var7;
                    var10 = var10 - var7;
                    var5 = var11.routes;
                    var13 = var5[var10];
                    var14 = var9 == var13;
                    var5 = undefined;
                    if(var14) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var5 = var13.name;
case 13:
                    var6 = var12;
                    var4 = var6;
                    if(var8 === var5) { _fun0004_ip = 12; continue _fun0004 }
case 11:
                    if(!(var4 > var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = _closure2_slot0;
                    var2 = var3.pop;
                    var2 = var2.bind(var3)(var4);
case 15:
                    return var1;
                }
            };
            var9 = var9.bind(var15)(var6, var7);
            var _closure2_slot10 = var9;
            var7 = var15.useState;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isActiveTabsGuilds;
                var4 = _closure2_slot0;
                var1 = var4.getState;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var15)(var6);
            var7 = var19.bind(var4)(var6, var11);
            var6 = var7[var14];
            var _closure2_slot11 = var6;
            var7 = var7[var3];
            var _closure2_slot12 = var7;
            var20 = var15.useState;
            var7 = function() {
                var1 = _closure2_slot11;
                return var1;
            };
            var7 = var20.bind(var15)(var7);
            var7 = var19.bind(var4)(var7, var11);
            var19 = var7[var14];
            var7 = var7[var3];
            var _closure2_slot13 = var7;
            var20 = var15.useEffect;
            var11 = new Array(1);
            var11[0] = var2;
            var7 = function() {
                var5 = function handleStateChange(arg1) {
                    var3 = _closure2_slot12;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.isActiveTabsGuilds;
                    var2 = arg1;
                    var2 = var2.data;
                    var2 = var2.state;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot0 = var5;
                var4 = _closure2_slot0;
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure2_slot0;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot0;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var7 = var20.bind(var15)(var7, var11);
            var11 = var15.useEffect;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure2_slot13;
                var2 = _closure2_slot11;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var11.bind(var15)(var6, var7);
            if(!var19) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var19 = var5;
case 17:
            var _closure2_slot14 = var19;
            var11 = _closure1_slot4;
            var5 = var11.useRef;
            var5 = var5.bind(var11)(var10);
            var _closure2_slot15 = var5;
            var6 = var11.useCallback;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var9;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot7;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot15;
                    var4 = false;
                    var5['current'] = var4;
                    if(var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var3 = _closure2_slot10;
                    var3 = var3.bind(var1)();
                    _fun0005_ip = 21; continue _fun0005;
case 19:
                    var3 = _closure2_slot9;
                    var4 = var3.current;
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var6 = _closure2_slot0;
                    var4 = var6.getState;
                    var4 = var4.bind(var6)();
                    var5 = var4.routes;
                    var4 = var6.getState;
                    var4 = var4.bind(var6)();
                    var4 = var4.index;
                    var4 = var5[var4];
                    var5 = var4.name;
                    var4 = 'channel';
                    var3 = var4 !== var5;
case 22:
                    if(!var3) { _fun0005_ip = 21; continue _fun0005 }
case 24:
                    var4 = _closure2_slot15;
                    var3 = true;
                    var4['current'] = var3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.transitionToChannel;
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    var2 = var2.channelId;
                    var2 = var3.bind(var4)(var2);
case 21:
                    return var1;
                }
            };
            var7 = var6.bind(var11)(var2, var5);
            var6 = var11.useCallback;
            var5 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var5 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var5);
                var6 = var5.ComponentDispatch;
                var5 = var6.dispatch;
                var2 = _closure1_slot8;
                var2 = var2.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                var2 = var5.bind(var6)(var2);
                var2 = 16;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var6 = var6.bind(var11)(var5, var2);
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 17;
            var2 = var11[var2];
            var5 = var5.bind(var4)(var2);
            var2 = {};
            var11 = var19;
            if(!var19) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var11 = var18;
case 25:
            var11 = !var11;
            if(!var11) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = null;
            var11 = var15 != var8;
case 27:
            if(!var11) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var20 = var8.type;
            var21 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var16];
            var15 = var21.bind(var4)(var15);
            var15 = var15.ChannelScreenType;
            var15 = var15.FALLBACK_RENDERED;
            var11 = var20 !== var15;
case 29:
            var2['canDrag'] = var11;
            var2['onVisibilityChange'] = var7;
            var2['onDragStart'] = var6;
            var6 = var24[var14];
            var11 = null;
            var15 = var11 == var6;
            var7 = undefined;
            if(var15) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var7 = var6.type;
case 31:
            var15 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var16];
            var6 = var15.bind(var4)(var6);
            var6 = var6.ChannelScreenType;
            var6 = var6.DEFAULT;
            var6 = var7 === var6;
            var2['startShown'] = var6;
            var6 = undefined;
            if(!var19) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = var13;
case 33:
            var2['openWidth'] = var6;
            var6 = var5.bind(var4)(var2);
            var7 = var6.gesture;
            var5 = var6.panelGestureContext;
            var21 = var6.isDragging;
            var22 = var6.translateX;
            var _closure2_slot16 = var22;
            var2 = var6.movePanel;
            var _closure2_slot17 = var2;
            var20 = var6.maxWidth;
            var _closure2_slot18 = var20;
            var6 = var6.isDraggingRef;
            var _closure2_slot19 = var6;
            var15 = _closure1_slot4;
            var25 = var15.useEffect;
            var16 = new Array(2);
            var16[0] = var19;
            var16[1] = var13;
            var13 = function() {
                var4 = _closure1_slot12;
                var3 = var4.log;
                var2 = {};
                var5 = _closure2_slot14;
                var2['isNavigatorPanelsBesideChannelList'] = var5;
                var1 = _closure2_slot2;
                var2['drawerWidth'] = var1;
                var1 = 'Chat Layout Changed';
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var13 = var25.bind(var15)(var13, var16);
            var13 = {};
            var13['handleExit'] = var9;
            var13['maxWidth'] = var20;
            var13['movePanel'] = var2;
            var13['screens'] = var24;
            var13['firstScreen'] = var8;
            var _closure2_slot20 = var13;
            var9 = var15.useRef;
            var9 = var9.bind(var15)(var13);
            var _closure2_slot21 = var9;
            var13 = var15.useEffect;
            var9 = function() {
                var2 = _closure2_slot21;
                var1 = _closure2_slot20;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var13.bind(var15)(var9);
            var13 = var15.useEffect;
            var9 = var11 == var8;
            var16 = undefined;
            if(var9) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var16 = var8.type;
case 35:
            var9 = new Array(3);
            var9[0] = var16;
            var9[1] = var22;
            var9[2] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot19;
                    var2 = var2.current;
                    if(var2) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var2 = _closure2_slot21;
                    var2 = var2.current;
                    var5 = var2.handleExit;
                    var7 = var2.maxWidth;
                    var9 = var2.movePanel;
                    var6 = var2.screens;
                    var3 = _closure2_slot8;
                    var2 = null;
                    var2 = var2 == var3;
                    var3 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var2 = _closure2_slot8;
                    var8 = var2.type;
case 39:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 13;
                    var2 = var11[var2];
                    var2 = var10.bind(var3)(var2);
                    var2 = var2.ChannelScreenType;
                    var2 = var2.DEFAULT;
                    var2 = var8 === var2;
                    var8 = var6.length;
                    var6 = 2;
                    if(!(!(var8 >= var6))) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var13 = 0;
                    var16 = undefined;
                    var15 = false;
                    var14 = false;
                    var12 = false;
                    var6 = var16[var9](var15, var14, var13, var12, var11);
                    if(!var6) { _fun0006_ip = 37; continue _fun0006 }
case 45:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 16;
                    var4 = var8[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.dismissKeyboard;
                    var4 = var4.bind(var6)();
                    _fun0006_ip = 37; continue _fun0006;
case 43:
                    var4 = _closure2_slot15;
                    var4 = var4.current;
                    if(var4) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var14 = false;
                    var13 = 0;
                    var16 = undefined;
                    var15 = true;
                    var12 = true;
                    var4 = var16[var9](var15, var14, var13, var12, var11);
                    _fun0006_ip = 37; continue _fun0006;
case 46:
                    var6 = _closure2_slot15;
                    var4 = false;
                    var6['current'] = var4;
                    var6 = _closure2_slot16;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var4 = var4 === var7;
                    if(!var4) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var4 = var5.bind(var3)();
case 48:
                    var4 = undefined;
                    return var4;
case 41:
                    var6 = _closure2_slot16;
                    var5 = var6.set;
                    var4 = 0;
                    if(var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var4 = var7;
case 50:
                    var4 = var5.bind(var6)(var4);
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var3)(var2);
                    var1 = undefined;
                    return var1;
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var13.bind(var15)(var6, var9);
            var13 = _closure1_slot4;
            var9 = var13.useEffect;
            var15 = var11 == var8;
            var6 = undefined;
            if(var15) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var6 = var8.channelId;
case 52:
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot21;
                    var1 = var1.current;
                    var2 = var1.firstScreen;
                    var7 = null;
                    var3 = var7 == var2;
                    var1 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0007_ip = 54; continue _fun0007 }
case 7:
                    var4 = var2.type;
case 54:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var3 = var8[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.ChannelScreenType;
                    var3 = var3.BACKGROUND_SAVED;
                    if(!(var4 === var3)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.preload;
                    var3 = var2.guildId;
                    if(!(var7 == var3)) { _fun0007_ip = 57; continue _fun0007 }
case 13:
                    var3 = _closure1_slot9;
case 57:
                    var2 = var2.channelId;
                    var2 = var4.bind(var5)(var3, var2);
case 55:
                    return var1;
                }
            };
            var6 = var9.bind(var13)(var6, var8);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var5 = _closure2_slot17;
                var1 = undefined;
                var9 = true;
                var7 = 0;
                var10 = undefined;
                var8 = false;
                var6 = false;
                var2 = var10[var5](var9, var8, var7, var6, var5);
                return var1;
            };
            var2 = var8.bind(var9)(var2, var6);
            var _closure2_slot22 = var2;
            var8 = var9.useMemo;
            var6 = new Array(4);
            var6[0] = var2;
            var6[1] = var23;
            var6[2] = var18;
            var6[3] = var19;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var1 = null;
                    if(!var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 60:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 61:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.absoluteFill;
                    var3['style'] = var6;
                    var2 = _closure2_slot22;
                    var3['onPress'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 58:
                    return var1;
                }
            };
            var16 = var8.bind(var9)(var2, var6);
            if(!var19) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            if(var18) { _fun0001_ip = 64; continue _fun0001 }
case 62:
            var29 = !var23;
            _fun0001_ip = 65; continue _fun0001;
case 64:
            var2 = var24.length;
            var29 = var2 <= var3;
case 65:
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var3 = new Array(4);
            var3[0] = var18;
            var3[1] = var19;
            var3[2] = var20;
            var3[3] = var22;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 66; continue _fun0009 }
case 59:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 19;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot16;
                    var2['translateX'] = var7;
                    var7 = _closure2_slot18;
                    var2['maxWidth'] = var7;
                    var6 = _closure2_slot1;
                    var2['isChatLockedOpen'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 66:
                    return var1;
                }
            };
            var15 = var6.bind(var8)(var2, var3);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var31 = 20;
            var2 = var8[var31];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function re() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot16;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var3 = var3 > var2;
                    if(!var3) { _fun0010_ip = 61; continue _fun0010 }
case 67:
                    var2 = 1;
case 61:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var9['translateX'] = var22;
            var1['__closure'] = var9;
            var9 = 9628030376561.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot14;
            var1['__initData'] = var9;
            var30 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var1 = 21;
            var1 = var8[var1];
            var3 = var2.bind(var4)(var1);
            var1 = 'channel_list_scrim';
            var28 = var3.bind(var4)(var1);
            var1 = 22;
            var1 = var8[var1];
            var9 = var6.bind(var4)(var1);
            var3 = var9.useYouBarEnabled;
            var1 = 'MainTabs';
            var26 = var3.bind(var9)(var1);
            var1 = 23;
            var1 = var8[var1];
            var3 = var6.bind(var4)(var1);
            var1 = var3.useIsCustomThemeActive;
            var25 = var1.bind(var3)();
            var3 = _closure1_slot10;
            var1 = 24;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var5 = 25;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var32 = var27.container;
            var13 = new Array(2);
            var13[0] = var32;
            var25 = !var25;
            if(!var25) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var25 = var27.containerBackground;
case 68:
            var13[1] = var25;
            var7['style'] = var13;
            var7['collapsable'] = var10;
            var25 = _closure1_slot11;
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var31];
            var10 = var13.bind(var4)(var10);
            var13 = var10.View;
            var10 = {};
            var31 = var27.tabsContainer;
            var27 = new Array(2);
            var27[0] = var31;
            var27[1] = var30;
            var10['style'] = var27;
            var27 = !var29;
            if(!var29) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var27 = undefined;
case 70:
            var10['accessibilityElementsHidden'] = var27;
            var27 = 'no-hide-descendants';
            if(!var29) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var27 = undefined;
case 72:
            var10['importantForAccessibility'] = var27;
            var29 = _closure1_slot10;
            var27 = _closure1_slot1;
            var31 = _closure1_slot2;
            if(var26) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var26 = 27;
            var26 = var31[var26];
            _fun0001_ip = 76; continue _fun0001;
case 74:
            var30 = 26;
            var26 = var31[var30];
case 76:
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var27 = var29.bind(var4)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var27 = undefined;
            if(!var28) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var30 = _closure1_slot10;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 28;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.MainTabsContentScrim;
            var28 = {};
            var28['translateX'] = var22;
            var28['maxWidth'] = var20;
            var27 = var30.bind(var4)(var29, var28);
case 77:
            var26[1] = var27;
            var10['children'] = var26;
            var13 = var25.bind(var4)(var13, var10);
            var10 = new Array(3);
            var10[0] = var13;
            var26 = _closure1_slot10;
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var13 = 29;
            var13 = var27[var13];
            var25 = var25.bind(var4)(var13);
            var13 = {};
            var13 = var26.bind(var4)(var25, var13);
            var10[1] = var13;
            var13 = var24.length;
            var13 = var13 > var14;
            var11 = null;
            if(!var13) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var14 = _closure1_slot10;
            var13 = _closure1_slot1;
            var25 = _closure1_slot2;
            var12 = 30;
            var12 = var25[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['screens'] = var24;
            if(var23) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var24 = var19;
            if(!var24) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var24 = var18;
case 83:
            var23 = var24;
case 81:
            var12['screenStackActive'] = var23;
            var12['translateX'] = var22;
            var12['isDragging'] = var21;
            var12['maxWidth'] = var20;
            var20 = !var19;
            var12['shouldFreeze'] = var20;
            var12['focusChatPressableComponent'] = var16;
            var16 = undefined;
            if(!var19) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var16 = undefined;
            if(!var18) { _fun0001_ip = 85; continue _fun0001 }
case 87:
            var16 = var17;
case 85:
            var12['firstScreenWidth'] = var16;
            var12['firstScreenFrame'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 79:
            var10[2] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();