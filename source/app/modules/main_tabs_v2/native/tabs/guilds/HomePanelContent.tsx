// app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function useHomePanelData() {
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 8;
        var1 = var8[var4];
        var5 = undefined;
        var10 = var6.bind(var5)(var1);
        var9 = var10.useStateFromStoresArray;
        var1 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var1;
        var1 = function() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var4 = _closure1_slot5;
            var1 = var4.allSummaries;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.flat;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var9.bind(var10)(var7, var1);
        var _closure2_slot0 = var1;
        var7 = var8[var4];
        var11 = var6.bind(var5)(var7);
        var10 = var11.useStateFromStoresArray;
        var7 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = new Array(1);
        var7[0] = var1;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.sortBy;
            var2 = _closure2_slot0;
            var1 = function(arg1) {
                var2 = arg1;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var5 = undefined;
                var8 = var4.bind(var5)(var1);
                var7 = var8.maxBy;
                var4 = var2.people;
                var1 = function(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        var3 = _closure1_slot6;
                        var2 = var3.getUserAffinity;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        var4 = var1 == var3;
                        var2 = undefined;
                        if(var4) { _fun0001_ip = 38; continue _fun0001 }
 32:
                        var2 = var3.communicationProbability;
 38:
                        var3 = var1 != var2;
                        var1 = 0;
                        if(!var3) { _fun0001_ip = 50; continue _fun0001 }
 47:
                        var1 = var2;
 50:
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4, var1);
                var1 = new Array(2);
                var1[0] = var4;
                var4 = _closure1_slot1;
                var3 = 10;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.extractTimestamp;
                var2 = var2.endId;
                var2 = var3.bind(var4)(var2);
                var1[1] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var7 = var10.bind(var11)(var9, var1, var7);
        var _closure2_slot1 = var7;
        var1 = {};
        var4 = var8[var4];
        var6 = var6.bind(var5)(var4);
        var5 = var6.useStateFromStoresObject;
        var3 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.keyBy;
            var2 = _closure2_slot1;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var1 = var1.channelId;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 41; continue _fun0002 }
 36:
                    var2 = var3.guild_id;
 41:
                    var3 = var1 != var2;
                    var1 = -1;
                    if(!var3) { _fun0002_ip = 57; continue _fun0002 }
 54:
                    var1 = var2;
 57:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var5.bind(var6)(var4, var2, var3);
        var1['topicsByGuild'] = var2;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function HomePanelContextProvider(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var4 = _closure1_slot8;
        var2 = _closure1_slot10;
        var3 = var2.Provider;
        var2 = {};
        var6 = _closure1_slot12;
        var1 = undefined;
        var6 = var6.bind(var1)();
        var2['value'] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function MockHomePanelContextProvider(arg1) {
        var1 = arg1;
        var1 = var1.children;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var4 = function() {
            var1 = {};
            var2 = {};
            var1['topicsByGuild'] = var2;
            return var1;
        };
        var3 = new Array(0);
        var5 = var5.bind(var6)(var4, var3);
        var4 = _closure1_slot8;
        var2 = _closure1_slot10;
        var3 = var2.Provider;
        var2 = {};
        var2['value'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var12 = 1;
    var4 = var7[var12];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var11 = var4.DM_WIDTH;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var12;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var12;
    var4['guildsListContainerGestured'] = var10;
    var10 = {};
    var10['flex'] = var12;
    var10['width'] = var11;
    var4['guildLisetContainerDefault'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var5 = var8.createContext;
    var4 = {};
    var9 = {};
    var4['topicsByGuild'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var5 = {};
    var9 = "function HomePanelContentTsx1(){const{withSpring,gestureState,panelX,drawerState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS,serverGestureEnabled,safeArea,PEEK_SIZE}=this.__closure;return{transform:[{translateX:withSpring(gestureState.get().active&&gestureState.get().requiresPop?panelX.get():drawerState.get()==='open'?Math.max(0,Math.min(8,panelX.get())):0,gestureState.get().active&&gestureState.get().requiresPop?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always')}],marginRight:serverGestureEnabled?safeArea.get().right+PEEK_SIZE+8:0};}";
    var5['code'] = var9;
    var _closure1_slot11 = var5;
    var5 = var8.memo;
    var2 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 11;
            var2 = var13[var2];
            var4 = undefined;
            var5 = var11.bind(var4)(var2);
            var2 = 'nav_experiment_server_drawer_enabled';
            var2 = var5.bind(var4)(var2);
            var _closure2_slot0 = var2;
            var7 = _closure1_slot3;
            var6 = var7.useContext;
            var9 = _closure1_slot0;
            var8 = 12;
            var5 = var13[var8];
            var5 = var9.bind(var4)(var5);
            var5 = var5.HomeDrawerStateContext;
            var5 = var6.bind(var7)(var5);
            var14 = var5.drawerState;
            var _closure2_slot1 = var14;
            var12 = var5.safeArea;
            var _closure2_slot2 = var12;
            var17 = var5.gestureState;
            var _closure2_slot3 = var17;
            var16 = var5.panelX;
            var _closure2_slot4 = var16;
            var5 = _closure1_slot9;
            var15 = var5.bind(var4)();
            var10 = 13;
            var5 = var13[var10];
            var6 = var9.bind(var4)(var5);
            var5 = var6.useAnimatedStyle;
            var3 = function o() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var5 = {};
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var6 = undefined;
                    var10 = var4.bind(var6)(var2);
                    var9 = var10.withSpring;
                    var7 = _closure2_slot3;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.active;
                    if(!var2) { _fun0004_ip = 81; continue _fun0004 }
 59:
                    var7 = _closure2_slot3;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.requiresPop;
                    if(var2) { _fun0004_ip = 160; continue _fun0004 }
 81:
                    var7 = _closure2_slot1;
                    var2 = var7.get;
                    var7 = var2.bind(var7)();
                    var12 = 0;
                    var2 = 'open';
                    var8 = 0;
                    if(!(var2 === var7)) { _fun0004_ip = 158; continue _fun0004 }
 106:
                    var2 = global;
                    var11 = var2.Math;
                    var7 = var11.max;
                    var15 = var2.Math;
                    var14 = var15.min;
                    var13 = _closure2_slot4;
                    var2 = var13.get;
                    var13 = var2.bind(var13)();
                    var2 = 8;
                    var2 = var14.bind(var15)(var2, var13);
                    var8 = var7.bind(var11)(var12, var2);
 158:
                    _fun0004_ip = 173; continue _fun0004;
 160:
                    var7 = _closure2_slot4;
                    var2 = var7.get;
                    var8 = var2.bind(var7)();
 173:
                    var7 = _closure2_slot3;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.active;
                    if(!var2) { _fun0004_ip = 217; continue _fun0004 }
 195:
                    var7 = _closure2_slot3;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.requiresPop;
                    if(var2) { _fun0004_ip = 245; continue _fun0004 }
 217:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 12;
                    var2 = var11[var2];
                    var2 = var7.bind(var6)(var2);
                    var7 = var2.HOME_DRAWER_FLING_PHYSICS;
                    _fun0004_ip = 271; continue _fun0004;
 245:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 12;
                    var2 = var12[var2];
                    var2 = var11.bind(var6)(var2);
                    var7 = var2.HOME_GESTURE_DRAG_PHYSICS;
 271:
                    var2 = 'animate-always';
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var5['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1['transform'] = var2;
                    var5 = _closure2_slot0;
                    var2 = 0;
                    if(!var5) { _fun0004_ip = 365; continue _fun0004 }
 310:
                    var5 = _closure2_slot2;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var4 = var4.right;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.PEEK_SIZE;
                    var4 = var4 + var3;
                    var3 = 8;
                    var2 = var4 + var3;
 365:
                    var1['marginRight'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var18 = 14;
            var18 = var13[var18];
            var18 = var9.bind(var4)(var18);
            var18 = var18.withSpring;
            var7['withSpring'] = var18;
            var7['gestureState'] = var17;
            var7['panelX'] = var16;
            var7['drawerState'] = var14;
            var14 = var13[var8];
            var14 = var9.bind(var4)(var14);
            var14 = var14.HOME_GESTURE_DRAG_PHYSICS;
            var7['HOME_GESTURE_DRAG_PHYSICS'] = var14;
            var14 = var13[var8];
            var14 = var9.bind(var4)(var14);
            var14 = var14.HOME_DRAWER_FLING_PHYSICS;
            var7['HOME_DRAWER_FLING_PHYSICS'] = var14;
            var7['serverGestureEnabled'] = var2;
            var7['safeArea'] = var12;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.PEEK_SIZE;
            var7['PEEK_SIZE'] = var8;
            var3['__closure'] = var7;
            var7 = 10692769092476.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot11;
            var3['__initData'] = var7;
            var14 = var5.bind(var6)(var3);
            var6 = _closure1_slot8;
            var3 = _closure1_slot10;
            var5 = var3.Provider;
            var3 = {};
            var7 = _closure1_slot12;
            var7 = var7.bind(var4)();
            var3['value'] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var12 = var15.container;
            var7['style'] = var12;
            var12 = _closure1_slot8;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var13 = new Array(2);
            var13[0] = var14;
            if(var2) { _fun0003_ip = 385; continue _fun0003 }
 377:
            var14 = var15.guildLisetContainerDefault;
            _fun0003_ip = 391; continue _fun0003;
 385:
            var14 = var15.guildsListContainerGestured;
 391:
            var13[1] = var14;
            var10['style'] = var13;
            var15 = _closure1_slot8;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 15;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var3['children'] = var7;
            var5 = var6.bind(var4)(var5, var3);
            var3 = _closure1_slot8;
            if(var2) { _fun0003_ip = 474; continue _fun0003 }
 468:
            var2 = _closure1_slot14;
            _fun0003_ip = 478; continue _fun0003;
 474:
            var2 = _closure1_slot13;
 478:
            var1 = {};
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['HomePanelContext'] = var4;
    var3['HomePanelContent'] = var2;
    return var1;
})();