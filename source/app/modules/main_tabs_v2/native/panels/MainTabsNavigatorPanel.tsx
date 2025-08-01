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
    var12 = 7;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_TERTIARY;
    var10['backgroundColor'] = var12;
    var4['container'] = var10;
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
 0:
            var2 = _closure1_slot13;
            var4 = undefined;
            var25 = var2.bind(var4)();
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
            var10 = var7.bind(var8)();
            var _closure2_slot2 = var10;
            var7 = 11;
            var7 = var3[var7];
            var7 = var6.bind(var4)(var7);
            var17 = var7.bind(var4)();
            var13 = _closure1_slot4;
            var7 = var13.useRef;
            var7 = var7.bind(var13)(var18);
            var _closure2_slot3 = var7;
            var7 = var13.useRef;
            var30 = false;
            var7 = var7.bind(var13)(var30);
            var _closure2_slot4 = var7;
            var9 = var13.useLayoutEffect;
            var8 = new Array(1);
            var8[0] = var18;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = _closure2_slot1;
                    if(!(var3 !== var2)) { _fun0002_ip = 96; continue _fun0002 }
 20:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var3['current'] = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if(var2) { _fun0002_ip = 74; continue _fun0002 }
 62:
                    var2 = var3.convertLandscapeToPortraitScreens;
                    var2 = var2.bind(var3)();
                    _fun0002_ip = 84; continue _fun0002;
 74:
                    var2 = var3.convertPortraitToLandscapeScreens;
                    var2 = var2.bind(var3)();
 84:
                    var2 = _closure2_slot4;
                    var1 = true;
                    var2['current'] = var1;
 96:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var13)(var7, var8);
            var15 = 13;
            var3 = var3[var15];
            var3 = var6.bind(var4)(var3);
            var24 = var3.bind(var4)(var2);
            var _closure2_slot5 = var24;
            var6 = var13.useState;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = null;
                    var3 = var2 == var1;
                    var4 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 31; continue _fun0003 }
 26:
                    var2 = var1.type;
 31:
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
            var3 = var6.bind(var13)(var3);
            var16 = _closure1_slot3;
            var11 = 2;
            var6 = var16.bind(var4)(var3, var11);
            var14 = 0;
            var23 = var6[var14];
            var _closure2_slot6 = var23;
            var3 = 1;
            var6 = var6[var3];
            var _closure2_slot7 = var6;
            var8 = var24[var14];
            var _closure2_slot8 = var8;
            var6 = var13.useRef;
            var6 = var6.bind(var13)(var8);
            var _closure2_slot9 = var6;
            var9 = var13.useEffect;
            var7 = new Array(1);
            var7[0] = var8;
            var6 = function() {
                var2 = _closure2_slot9;
                var1 = _closure2_slot8;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var9.bind(var13)(var6, var7);
            var9 = var13.useCallback;
            var7 = new Array(1);
            var7[0] = var2;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                    if(var4) { _fun0004_ip = 61; continue _fun0004 }
 56:
                    var5 = var3.name;
 61:
                    var3 = 0;
                    var8 = 'channel';
                    var7 = 1;
                    var6 = 0;
                    var4 = 0;
                    if(!(var8 === var5)) { _fun0004_ip = 120; continue _fun0004 }
 78:
                    var12 = var6 + var7;
                    var10 = var10 - var7;
                    var5 = var11.routes;
                    var13 = var5[var10];
                    var14 = var9 == var13;
                    var5 = undefined;
                    if(var14) { _fun0004_ip = 110; continue _fun0004 }
 105:
                    var5 = var13.name;
 110:
                    var6 = var12;
                    var4 = var6;
                    if(var8 === var5) { _fun0004_ip = 78; continue _fun0004 }
 120:
                    if(!(var4 > var3)) { _fun0004_ip = 139; continue _fun0004 }
 124:
                    var3 = _closure2_slot0;
                    var2 = var3.pop;
                    var2 = var2.bind(var3)(var4);
 139:
                    return var1;
                }
            };
            var9 = var9.bind(var13)(var6, var7);
            var _closure2_slot10 = var9;
            var7 = var13.useState;
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
            var6 = var7.bind(var13)(var6);
            var7 = var16.bind(var4)(var6, var11);
            var6 = var7[var14];
            var _closure2_slot11 = var6;
            var7 = var7[var3];
            var _closure2_slot12 = var7;
            var19 = var13.useState;
            var7 = function() {
                var1 = _closure2_slot11;
                return var1;
            };
            var7 = var19.bind(var13)(var7);
            var7 = var16.bind(var4)(var7, var11);
            var19 = var7[var14];
            var7 = var7[var3];
            var _closure2_slot13 = var7;
            var16 = var13.useEffect;
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
            var7 = var16.bind(var13)(var7, var11);
            var11 = var13.useEffect;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure2_slot13;
                var2 = _closure2_slot11;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var11.bind(var13)(var6, var7);
            if(!var19) { _fun0001_ip = 470; continue _fun0001 }
 467:
            var19 = var5;
 470:
            var _closure2_slot14 = var19;
            var11 = _closure1_slot4;
            var5 = var11.useRef;
            var5 = var5.bind(var11)(var30);
            var _closure2_slot15 = var5;
            var6 = var11.useCallback;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var9;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot7;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot15;
                    var4 = false;
                    var5['current'] = var4;
                    if(var3) { _fun0005_ip = 45; continue _fun0005 }
 32:
                    var3 = _closure2_slot10;
                    var3 = var3.bind(var1)();
                    _fun0005_ip = 178; continue _fun0005;
 45:
                    var3 = _closure2_slot9;
                    var4 = var3.current;
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0005_ip = 115; continue _fun0005 }
 63:
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
 115:
                    if(!var3) { _fun0005_ip = 178; continue _fun0005 }
 118:
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
 178:
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
            if(!var19) { _fun0001_ip = 575; continue _fun0001 }
 572:
            var11 = var18;
 575:
            var11 = !var11;
            if(!var11) { _fun0001_ip = 587; continue _fun0001 }
 581:
            var13 = null;
            var11 = var13 != var8;
 587:
            if(!var11) { _fun0001_ip = 628; continue _fun0001 }
 590:
            var16 = var8.type;
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var20.bind(var4)(var13);
            var13 = var13.ChannelScreenType;
            var13 = var13.FALLBACK_RENDERED;
            var11 = var16 !== var13;
 628:
            var2['canDrag'] = var11;
            var2['onVisibilityChange'] = var7;
            var2['onDragStart'] = var6;
            var6 = var24[var14];
            var11 = null;
            var13 = var11 == var6;
            var7 = undefined;
            if(var13) { _fun0001_ip = 663; continue _fun0001 }
 658:
            var7 = var6.type;
 663:
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var15];
            var6 = var13.bind(var4)(var6);
            var6 = var6.ChannelScreenType;
            var6 = var6.DEFAULT;
            var6 = var7 === var6;
            var2['startShown'] = var6;
            var6 = undefined;
            if(!var19) { _fun0001_ip = 709; continue _fun0001 }
 706:
            var6 = var10;
 709:
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
            var13 = _closure1_slot4;
            var16 = var13.useEffect;
            var15 = new Array(2);
            var15[0] = var19;
            var15[1] = var10;
            var10 = function() {
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
            var10 = var16.bind(var13)(var10, var15);
            var10 = {};
            var10['handleExit'] = var9;
            var10['maxWidth'] = var20;
            var10['movePanel'] = var2;
            var10['screens'] = var24;
            var10['firstScreen'] = var8;
            var _closure2_slot20 = var10;
            var9 = var13.useRef;
            var9 = var9.bind(var13)(var10);
            var _closure2_slot21 = var9;
            var10 = var13.useEffect;
            var9 = function() {
                var2 = _closure2_slot21;
                var1 = _closure2_slot20;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var10.bind(var13)(var9);
            var10 = var13.useEffect;
            var9 = var11 == var8;
            var15 = undefined;
            if(var9) { _fun0001_ip = 892; continue _fun0001 }
 887:
            var15 = var8.type;
 892:
            var9 = new Array(3);
            var9[0] = var15;
            var9[1] = var22;
            var9[2] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot19;
                    var2 = var2.current;
                    if(var2) { _fun0006_ip = 289; continue _fun0006 }
 18:
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
                    if(var2) { _fun0006_ip = 77; continue _fun0006 }
 68:
                    var2 = _closure2_slot8;
                    var8 = var2.type;
 77:
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
                    if(!(!(var8 >= var6))) { _fun0006_ip = 254; continue _fun0006 }
 131:
                    if(var2) { _fun0006_ip = 186; continue _fun0006 }
 134:
                    var13 = 0;
                    var16 = undefined;
                    var15 = false;
                    var14 = false;
                    var12 = false;
                    var6 = var16[var9](var15, var14, var13, var12, var11);
                    if(!var6) { _fun0006_ip = 289; continue _fun0006 }
 154:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 16;
                    var4 = var8[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.dismissKeyboard;
                    var4 = var4.bind(var6)();
                    _fun0006_ip = 289; continue _fun0006;
 186:
                    var4 = _closure2_slot15;
                    var4 = var4.current;
                    if(var4) { _fun0006_ip = 214; continue _fun0006 }
 198:
                    var14 = false;
                    var13 = 0;
                    var16 = undefined;
                    var15 = true;
                    var12 = true;
                    var4 = var16[var9](var15, var14, var13, var12, var11);
                    _fun0006_ip = 289; continue _fun0006;
 214:
                    var6 = _closure2_slot15;
                    var4 = false;
                    var6['current'] = var4;
                    var6 = _closure2_slot16;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var4 = var4 === var7;
                    if(!var4) { _fun0006_ip = 250; continue _fun0006 }
 246:
                    var4 = var5.bind(var3)();
 250:
                    var4 = undefined;
                    return var4;
 254:
                    var6 = _closure2_slot16;
                    var5 = var6.set;
                    var4 = 0;
                    if(var2) { _fun0006_ip = 271; continue _fun0006 }
 268:
                    var4 = var7;
 271:
                    var4 = var5.bind(var6)(var4);
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var3)(var2);
                    var1 = undefined;
                    return var1;
 289:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var13)(var6, var9);
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var13 = var11 == var8;
            var6 = undefined;
            if(var13) { _fun0001_ip = 944; continue _fun0001 }
 939:
            var6 = var8.channelId;
 944:
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot21;
                    var1 = var1.current;
                    var2 = var1.firstScreen;
                    var7 = null;
                    var3 = var7 == var2;
                    var1 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0007_ip = 36; continue _fun0007 }
 31:
                    var4 = var2.type;
 36:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var3 = var8[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.ChannelScreenType;
                    var3 = var3.BACKGROUND_SAVED;
                    if(!(var4 === var3)) { _fun0007_ip = 125; continue _fun0007 }
 75:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.preload;
                    var3 = var2.guildId;
                    if(!(var7 == var3)) { _fun0007_ip = 114; continue _fun0007 }
 110:
                    var3 = _closure1_slot9;
 114:
                    var2 = var2.channelId;
                    var2 = var4.bind(var5)(var3, var2);
 125:
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var8);
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
 0:
                    var3 = _closure2_slot14;
                    var1 = null;
                    if(!var3) { _fun0008_ip = 73; continue _fun0008 }
 12:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(var3) { _fun0008_ip = 73; continue _fun0008 }
 21:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(var3) { _fun0008_ip = 73; continue _fun0008 }
 30:
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
 73:
                    return var1;
                }
            };
            var16 = var8.bind(var9)(var2, var6);
            if(!var19) { _fun0001_ip = 1043; continue _fun0001 }
 1040:
            if(var18) { _fun0001_ip = 1048; continue _fun0001 }
 1043:
            var26 = !var23;
            _fun0001_ip = 1057; continue _fun0001;
 1048:
            var2 = var24.length;
            var26 = var2 <= var3;
 1057:
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var3 = new Array(4);
            var3[0] = var18;
            var3[1] = var19;
            var3[2] = var20;
            var3[3] = var22;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot14;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 76; continue _fun0009 }
 12:
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
 76:
                    return var1;
                }
            };
            var15 = var6.bind(var8)(var2, var3);
            var6 = _closure1_slot0;
            var29 = _closure1_slot2;
            var10 = 20;
            var2 = var29[var10];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function re() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot16;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var3 = var3 > var2;
                    if(!var3) { _fun0010_ip = 30; continue _fun0010 }
 27:
                    var2 = 1;
 30:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['translateX'] = var22;
            var1['__closure'] = var8;
            var8 = 9628030376561.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot14;
            var1['__initData'] = var8;
            var28 = var2.bind(var3)(var1);
            var13 = _closure1_slot1;
            var1 = 21;
            var1 = var29[var1];
            var2 = var13.bind(var4)(var1);
            var1 = 'channel_list_scrim';
            var27 = var2.bind(var4)(var1);
            var3 = _closure1_slot10;
            var1 = 22;
            var1 = var29[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var5 = 23;
            var5 = var29[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var31 = var25.container;
            var7['style'] = var31;
            var7['collapsable'] = var30;
            var10 = var29[var10];
            var10 = var13.bind(var4)(var10);
            var13 = var10.View;
            var10 = {};
            var29 = var25.tabsContainer;
            var25 = new Array(2);
            var25[0] = var29;
            var25[1] = var28;
            var10['style'] = var25;
            var25 = !var26;
            if(!var26) { _fun0001_ip = 1326; continue _fun0001 }
 1324:
            var25 = undefined;
 1326:
            var10['accessibilityElementsHidden'] = var25;
            var25 = 'no-hide-descendants';
            if(!var26) { _fun0001_ip = 1342; continue _fun0001 }
 1340:
            var25 = undefined;
 1342:
            var10['importantForAccessibility'] = var25;
            var28 = _closure1_slot10;
            var26 = _closure1_slot1;
            var29 = _closure1_slot2;
            var25 = 24;
            var25 = var29[var25];
            var26 = var26.bind(var4)(var25);
            var25 = {};
            var26 = var28.bind(var4)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var26 = undefined;
            if(!var27) { _fun0001_ip = 1440; continue _fun0001 }
 1392:
            var29 = _closure1_slot10;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 25;
            var27 = var30[var27];
            var27 = var28.bind(var4)(var27);
            var28 = var27.MainTabsContentScrim;
            var27 = {};
            var27['translateX'] = var22;
            var27['maxWidth'] = var20;
            var26 = var29.bind(var4)(var28, var27);
 1440:
            var25[1] = var26;
            var10['children'] = var25;
            var13 = var9.bind(var4)(var13, var10);
            var10 = new Array(3);
            var10[0] = var13;
            var26 = _closure1_slot10;
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var13 = 26;
            var13 = var27[var13];
            var25 = var25.bind(var4)(var13);
            var13 = {};
            var13 = var26.bind(var4)(var25, var13);
            var10[1] = var13;
            var13 = var24.length;
            var13 = var13 > var14;
            var11 = null;
            if(!var13) { _fun0001_ip = 1620; continue _fun0001 }
 1512:
            var14 = _closure1_slot10;
            var13 = _closure1_slot1;
            var25 = _closure1_slot2;
            var12 = 27;
            var12 = var25[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['screens'] = var24;
            if(var23) { _fun0001_ip = 1558; continue _fun0001 }
 1546:
            var24 = var19;
            if(!var24) { _fun0001_ip = 1555; continue _fun0001 }
 1552:
            var24 = var18;
 1555:
            var23 = var24;
 1558:
            var12['screenStackActive'] = var23;
            var12['translateX'] = var22;
            var12['isDragging'] = var21;
            var12['maxWidth'] = var20;
            var20 = !var19;
            var12['shouldFreeze'] = var20;
            var12['focusChatPressableComponent'] = var16;
            var16 = undefined;
            if(!var19) { _fun0001_ip = 1604; continue _fun0001 }
 1596:
            var16 = undefined;
            if(!var18) { _fun0001_ip = 1604; continue _fun0001 }
 1601:
            var16 = var17;
 1604:
            var12['firstScreenWidth'] = var16;
            var12['firstScreenFrame'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 1620:
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
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();