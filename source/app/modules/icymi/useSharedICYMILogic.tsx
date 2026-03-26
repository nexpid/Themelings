// app/modules/icymi/useSharedICYMILogic.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SCROLL_EVENT_THROTTLE_MS;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/useSharedICYMILogic.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSharedICYMILogic(arg1) {
        var2 = arg1;
        var19 = var2.showDot;
        var17 = var2.notificationItem;
        var _closure2_slot0 = var17;
        var11 = _closure1_slot4;
        var4 = var11.useState;
        var2 = false;
        var2 = var4.bind(var11)(var2);
        var24 = _closure1_slot3;
        var12 = undefined;
        var23 = 2;
        var2 = var24.bind(var12)(var2, var23);
        var7 = 0;
        var6 = var2[var7];
        var22 = 1;
        var2 = var2[var22];
        var _closure2_slot1 = var2;
        var20 = _closure1_slot1;
        var18 = _closure1_slot2;
        var4 = 4;
        var4 = var18[var4];
        var4 = var20.bind(var12)(var4);
        var4 = var4.bind(var12)();
        var16 = var4.unreadItems;
        var _closure2_slot2 = var16;
        var14 = var4.readItems;
        var _closure2_slot3 = var14;
        var15 = var4.allUnreadItemsHydrated;
        var _closure2_slot4 = var15;
        var10 = _closure1_slot0;
        var4 = 5;
        var5 = var18[var4];
        var21 = var10.bind(var12)(var5);
        var13 = var21.useStateFromStores;
        var3 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var3;
        var8 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getVersion;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = new Array(0);
        var8 = var13.bind(var21)(var9, var8, var5);
        var _closure2_slot5 = var8;
        var5 = var18[var4];
        var21 = var10.bind(var12)(var5);
        var13 = var21.useStateFromStores;
        var9 = new Array(1);
        var9[0] = var3;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.isFirstPageHydrated;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot5;
                var2 = 0;
                var1 = var3 > var2;
case 2:
                var1 = !var1;
                return var1;
            }
        };
        var9 = var13.bind(var21)(var9, var5);
        var _closure2_slot6 = var9;
        var21 = var11.useEffect;
        var13 = new Array(1);
        var13[0] = var8;
        var5 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.getLoadId;
                var3 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.ICYMIAnalytics;
                var2 = var3.trackFeedShown;
                var1 = {};
                var4 = 'gravity';
                var1['homeSessionId'] = var4;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var21.bind(var11)(var5, var13);
        var5 = var18[var4];
        var26 = var10.bind(var12)(var5);
        var25 = var26.useStateFromStores;
        var21 = new Array(1);
        var21[0] = var3;
        var13 = function() {
            var2 = _closure1_slot5;
            var1 = var2.isRefreshing;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = new Array(0);
        var5 = var25.bind(var26)(var21, var13, var5);
        var _closure2_slot7 = var5;
        var13 = var18[var4];
        var27 = var10.bind(var12)(var13);
        var26 = var27.useStateFromStores;
        var25 = new Array(1);
        var25[0] = var3;
        var21 = function() {
            var2 = _closure1_slot5;
            var1 = var2.isHydrating;
            var1 = var1.bind(var2)();
            return var1;
        };
        var13 = new Array(0);
        var13 = var26.bind(var27)(var25, var21, var13);
        var _closure2_slot8 = var13;
        var25 = var11.useState;
        var21 = new Array(0);
        var21 = var25.bind(var11)(var21);
        var21 = var24.bind(var12)(var21, var23);
        var7 = var21[var7];
        var21 = var21[var22];
        var _closure2_slot9 = var21;
        var4 = var18[var4];
        var22 = var10.bind(var12)(var4);
        var21 = var22.useStateFromStoresObject;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = {};
            var3 = _closure1_slot5;
            var2 = var3.getLoadId;
            var2 = var2.bind(var3)();
            var1['loadId'] = var2;
            var2 = var3.lastScrollEvent;
            var2 = var2.bind(var3)();
            var1['lastScrollEventTimestamp'] = var2;
            return var1;
        };
        var4 = var21.bind(var22)(var4, var3);
        var3 = var4.loadId;
        var23 = var4.lastScrollEventTimestamp;
        var _closure2_slot10 = var23;
        var21 = var7.filter;
        var4 = function(arg1) {
            var1 = arg1;
            var1 = var1.item;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.NON_ELIGIBLE_SCROLL_ITEMS;
            var2 = var3.has;
            var1 = var1.data;
            var1 = var1.kind;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var22 = var21.bind(var7)(var4);
        var21 = var22.map;
        var4 = function(arg1) {
            var1 = arg1;
            var1 = var1.item;
            var1 = var1.id;
            return var1;
        };
        var21 = var21.bind(var22)(var4);
        var4 = var21.pop;
        var21 = var4.bind(var21)();
        var _closure2_slot11 = var21;
        var4 = 8;
        var4 = var18[var4];
        var4 = var20.bind(var12)(var4);
        var22 = var4.bind(var12)(var21);
        var _closure2_slot12 = var22;
        var20 = var11.useEffect;
        var4 = new Array(6);
        var4[0] = var5;
        var4[1] = var23;
        var4[2] = var22;
        var4[3] = var21;
        var4[4] = var3;
        var4[5] = var9;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot7;
                if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var2 = _closure2_slot6;
                if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 5:
                var2 = _closure2_slot12;
                var3 = null;
                if(!(var3 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                var2 = _closure2_slot11;
                if(!(var3 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 9:
                var3 = _closure2_slot11;
                var2 = _closure2_slot12;
                if(!(var3 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 10:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var6 = var2.bind(var3)();
                var1 = _closure2_slot10;
                var3 = var6 - var1;
                var2 = _closure1_slot6;
                if(!(var3 > var2)) { _fun0003_ip = 6; continue _fun0003 }
case 11:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.gravityScrollEvent;
                var2 = var2.bind(var5)(var6);
                var2 = _closure1_slot0;
                var1 = 6;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.ICYMIAnalytics;
                var1 = var2.trackFeedFirstScrollStarted;
                var1 = var1.bind(var2)();
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var20.bind(var11)(var3, var4);
        var4 = var11.useCallback;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var2;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var5 = var1.viewableItems;
                var3 = var5.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.item;
                    var1 = var1.data;
                    var2 = var1.kind;
                    var1 = 'end';
                    var1 = var1 === var2;
                    return var1;
                };
                var1 = var3.bind(var5)(var1);
                if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var4 = _closure2_slot1;
                var3 = undefined;
                var1 = true;
                var1 = var4.bind(var3)(var1);
case 12:
                var1 = var5.length;
                var8 = 0;
                if(!(var8 !== var1)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = _closure2_slot9;
                var6 = undefined;
                var3 = var3.bind(var6)(var5);
                var10 = new Array(0);
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 10;
                var4 = var9[var4];
                var7 = var7.bind(var6)(var4);
                var4 = var7.getViewableFeedItemsArray;
                var7 = var4.bind(var7)(var5);
                var4 = global;
                var9 = var4.Date;
                var4 = var9.now;
                var4 = var4.bind(var9)();
                var11 = var7.length;
                var9 = 1;
                var12 = var11 - var9;
                var11 = 11;
                var9 = null;
                if(!(var12 >= var8)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var18 = var7[var12];
                var13 = var4;
                if(!(var9 != var18)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var16 = var10.push;
                var15 = {};
                var14 = var18.id;
                var15['id'] = var14;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var11];
                var17 = var17.bind(var6)(var14);
                var14 = var17.typeToString;
                var14 = var14.bind(var17)(var18);
                var15['type'] = var14;
                var17 = parseFloat(var4);
                var13 = var17 + 1;
                var15['timestamp'] = var17;
                var15 = var16.bind(var10)(var15);
case 18:
                var12 = var12 - 1;
                var4 = var13;
                if(var12 >= var8) { _fun0004_ip = 17; continue _fun0004 }
case 16:
                var4 = var10.length;
                if(!(var4 > var8)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 9;
                var4 = var9[var4];
                var9 = var8.bind(var6)(var4);
                var8 = var9.ackGravityItems;
                var4 = true;
                var4 = var8.bind(var9)(var10, var4);
case 20:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 6;
                var3 = var8[var3];
                var3 = var4.bind(var6)(var3);
                var4 = var3.ICYMIAnalytics;
                var3 = var4.trackItemShortImpression;
                var6 = var7.map;
                var2 = function(arg1) {
                    var4 = arg1;
                    var1 = {};
                    var2 = var4.id;
                    var1['id'] = var2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.typeToString;
                    var2 = var2.bind(var3)(var4);
                    var1['type'] = var2;
                    return var1;
                };
                var2 = var6.bind(var7)(var2);
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var5, var2, var1);
case 14:
                var1 = undefined;
                return var1;
            }
        };
        var21 = var4.bind(var11)(var2, var3);
        var _closure2_slot13 = var21;
        var4 = var11.useCallback;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var6 = var2.viewableItems;
                var3 = var6.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var4 = undefined;
                var8 = var7.bind(var4)(var3);
                var3 = var8.getViewableFeedItemsArray;
                var10 = var3.bind(var8)(var6);
                var3 = 6;
                var3 = var5[var3];
                var3 = var7.bind(var4)(var3);
                var9 = var3.ICYMIAnalytics;
                var8 = var9.trackItemLongImpression;
                var7 = var10.map;
                var3 = function(arg1) {
                    var4 = arg1;
                    var1 = {};
                    var2 = var4.id;
                    var1['id'] = var2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.typeToString;
                    var2 = var2.bind(var3)(var4);
                    var1['type'] = var2;
                    return var1;
                };
                var7 = var7.bind(var10)(var3);
                var3 = _closure2_slot5;
                var3 = var8.bind(var9)(var6, var7, var3);
                var3 = _closure1_slot1;
                var2 = 9;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.triggerItemsLongImpression;
                var5 = var6.filter;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.item;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.NON_ELIGIBLE_SCROLL_ITEMS;
                    var2 = var3.has;
                    var1 = var1.data;
                    var1 = var1.kind;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.map;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.item;
                        var2 = var1.index;
                        var1 = {};
                        var4 = var3.id;
                        var1['itemId'] = var4;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 10;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.itemToType;
                        var4 = var4.bind(var5)(var3);
                        var1['itemType'] = var4;
                        var4 = 'list';
                        var1['triggerType'] = var4;
                        var1['itemFeedIndex'] = var2;
                        var5 = var3.score;
                        var2 = null;
                        var6 = var2 != var5;
                        var4 = null;
                        if(!var6) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var4 = var5;
case 24:
                        var1['itemScore'] = var4;
                        var3 = var3.channelType;
                        var4 = var2 != var3;
                        var2 = null;
                        if(!var4) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                        var2 = var3;
case 26:
                        var1['itemChannelType'] = var2;
                        var2 = false;
                        var1['isInitiallyVisible'] = var2;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var20 = var4.bind(var11)(var2, var3);
        var _closure2_slot14 = var20;
        var4 = var11.useCallback;
        var3 = function(arg1) {
            var1 = arg1;
            var7 = var1.viewableItems;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.startItemsDwell;
            var6 = var7.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.NON_ELIGIBLE_SCROLL_ITEMS;
                var2 = var3.has;
                var1 = var1.data;
                var1 = var1.kind;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.item;
                    var2 = var1.index;
                    var1 = {};
                    var4 = var3.id;
                    var1['itemId'] = var4;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.itemToType;
                    var4 = var4.bind(var5)(var3);
                    var1['itemType'] = var4;
                    var4 = 'list';
                    var1['triggerType'] = var4;
                    var1['itemFeedIndex'] = var2;
                    var5 = var3.score;
                    var2 = null;
                    var6 = var2 != var5;
                    var4 = null;
                    if(!var6) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = var5;
case 24:
                    var1['itemScore'] = var4;
                    var3 = var3.channelType;
                    var4 = var2 != var3;
                    var2 = null;
                    if(!var4) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var2 = var3;
case 26:
                    var1['itemChannelType'] = var2;
                    var2 = false;
                    var1['isInitiallyVisible'] = var2;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var11)(var3, var2);
        var _closure2_slot15 = var2;
        var4 = var11.useMemo;
        var3 = new Array(3);
        var3[0] = var21;
        var3[1] = var20;
        var3[2] = var2;
        var2 = function() {
            var2 = {};
            var1 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
            var2['viewabilityConfig'] = var1;
            var1 = _closure2_slot13;
            var2['onViewableItemsChanged'] = var1;
            var1 = new Array(3);
            var1[0] = var2;
            var2 = {};
            var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 1000};
            var2['viewabilityConfig'] = var4;
            var4 = _closure2_slot14;
            var2['onViewableItemsChanged'] = var4;
            var1[1] = var2;
            var2 = {};
            var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 50};
            var2['viewabilityConfig'] = var4;
            var3 = _closure2_slot15;
            var2['onViewableItemsChanged'] = var3;
            var1[2] = var2;
            return var1;
        };
        var2 = var4.bind(var11)(var2, var3);
        var20 = var11.useEffect;
        var4 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openICYMITab;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var20.bind(var11)(var4, var3);
        var3 = 12;
        var3 = var18[var3];
        var4 = var10.bind(var12)(var3);
        var3 = var4.useICYMIReloadHandler;
        var4 = var3.bind(var4)(var19);
        var3 = 13;
        var3 = var18[var3];
        var10 = var10.bind(var12)(var3);
        var3 = var10.useICYMISunsetBanner;
        var12 = var3.bind(var10)();
        var _closure2_slot16 = var12;
        var10 = var11.useMemo;
        var3 = new Array(7);
        var3[0] = var9;
        var3[1] = var17;
        var3[2] = var16;
        var3[3] = var15;
        var3[4] = var14;
        var3[5] = var13;
        var3[6] = var12;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = new Array(0);
                var _closure3_slot0 = var2;
                var4 = _closure2_slot6;
                if(!var4) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var6 = _closure2_slot0;
                var5 = null;
                var4 = var5 != var6;
case 28:
                if(!var4) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var5 = _closure2_slot0;
                var6 = var5.type;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 11;
                var7 = var7[var5];
                var5 = undefined;
                var5 = var8.bind(var5)(var7);
                var5 = var5.ICYMIItemTypes;
                var5 = var5.CUSTOM_STATUS;
                var4 = var6 === var5;
case 30:
                if(!var4) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                var5 = var2.push;
                var4 = {};
                var6 = _closure2_slot0;
                var7 = var6.id;
                var4['id'] = var7;
                var7 = global;
                var8 = var7.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var4['timestamp'] = var7;
                var7 = {};
                var8 = 'contentInventory';
                var7['kind'] = var8;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var8 = 10;
                var9 = var9[var8];
                var8 = undefined;
                var9 = var10.bind(var8)(var9);
                var8 = var9.customStatusToContentInventoryEntry;
                var8 = var8.bind(var9)(var6);
                var8 = var8.activity;
                var7['content'] = var8;
                var4['data'] = var7;
                var6 = var6.score;
                var4['score'] = var6;
                var6 = true;
                var4['unread'] = var6;
                var4 = var5.bind(var2)(var4);
case 32:
                var4 = _closure2_slot6;
                if(var4) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var4 = _closure2_slot16;
                if(!var4) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                var5 = var2.push;
                var4 = {'id': 'sunsetBanner', 'timestamp': 0, 'unread': false};
                var7 = 'sunsetBanner';
                var6 = {};
                var6['kind'] = var7;
                var4['data'] = var6;
                var4 = var5.bind(var2)(var4);
case 36:
                var6 = _closure2_slot2;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isItemNSFW;
                        var2 = var2.bind(var3)(var4);
                        if(var2) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
case 38:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var4 = _closure2_slot4;
                if(!var4) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                var5 = var2.push;
                var4 = {'id': 'end', 'timestamp': 0, 'unread': false};
                var7 = 'end';
                var6 = {};
                var6['kind'] = var7;
                var4['data'] = var6;
                var4 = var5.bind(var2)(var4);
case 40:
                var4 = _closure2_slot3;
                var5 = var4.length;
                var4 = 0;
                if(!(var5 > var4)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                var5 = _closure2_slot3;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isItemNSFW;
                        var2 = var2.bind(var3)(var4);
                        if(var2) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
case 38:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
case 42:
                var1 = _closure2_slot8;
                if(!var1) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var3 = var2.push;
                var1 = {'id': 'bottomLoading', 'timestamp': 0, 'unread': false};
                var5 = 'bottomLoading';
                var4 = {};
                var4['kind'] = var5;
                var1['data'] = var4;
                var1 = var3.bind(var2)(var1);
                _fun0008_ip = 44; continue _fun0008;
case 34:
                var3 = var2.push;
                var1 = {'id': 'loading', 'timestamp': 0, 'unread': false};
                var5 = 'loading';
                var4 = {};
                var4['kind'] = var5;
                var1['data'] = var4;
                var1 = var3.bind(var2)(var1);
case 44:
                var1 = {};
                var1['data'] = var2;
                var2 = new Array(0);
                var1['stickyHeaderIndices'] = var2;
                return var1;
            }
        };
        var1 = var10.bind(var11)(var1, var3);
        var10 = var1.data;
        var3 = var1.stickyHeaderIndices;
        var1 = {};
        var1['data'] = var10;
        var1['loading'] = var9;
        var1['version'] = var8;
        var1['visibleItemIds'] = var7;
        var1['endVisible'] = var6;
        var1['isRefreshing'] = var5;
        var1['handleOnRefresh'] = var4;
        var1['stickyHeaderIndices'] = var3;
        var1['viewabilityConfigCallbackPairs'] = var2;
        return var1;
    };
    var3['useSharedICYMILogic'] = var2;
    return var1;
})();