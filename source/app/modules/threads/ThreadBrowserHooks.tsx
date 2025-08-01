// app/modules/threads/ThreadBrowserHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useActiveThreadIds(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 11;
        var5 = var5[var4];
        var4 = undefined;
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStoresArray;
        var4 = _closure1_slot7;
        var5 = new Array(3);
        var5[0] = var4;
        var4 = _closure1_slot9;
        var5[1] = var4;
        var4 = _closure1_slot6;
        var5[2] = var4;
        var8 = var3.guild_id;
        var4 = new Array(2);
        var4[0] = var8;
        var3 = var3.id;
        var4[1] = var3;
        var3 = function() {
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var9 = _closure1_slot9;
            var8 = var9.getThreadsForParent;
            var3 = _closure2_slot0;
            var5 = var3.guild_id;
            var3 = var3.id;
            var3 = var8.bind(var9)(var5, var3);
            var4 = var4.bind(var6)(var3);
            var3 = var4.values;
            var5 = var3.bind(var4)();
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = _closure1_slot6;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var2 = 13;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var4 = _closure1_slot7;
                var3 = var4.can;
                var1 = _closure1_slot12;
                var2 = var1.VIEW_CHANNEL;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var6.bind(var7)(var5, var3, var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = _closure2_slot1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.compare;
                var6 = _closure1_slot8;
                var5 = var6.lastMessageId;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var6 = _closure1_slot8;
                var5 = var6.lastMessageId;
                var1 = arg2;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useShouldShowResolvedFlagsForChannel;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot12 = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/threads/ThreadBrowserHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useTrackThreadBrowserTab() {
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackThreadBrowserTab;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useTrackThreadBrowserTab'] = var5;
    var3['useActiveThreadIds'] = var4;
    var4 = function useActiveThreads(arg1) {
        var5 = _closure1_slot13;
        var4 = undefined;
        var3 = arg1;
        var11 = var5.bind(var4)(var3);
        var _closure2_slot0 = var11;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 11;
        var5 = var10[var3];
        var8 = var9.bind(var4)(var5);
        var7 = var8.useStateFromStores;
        var5 = _closure1_slot11;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = new Array(1);
        var5[0] = var11;
        var3 = var10[var3];
        var3 = var9.bind(var4)(var3);
        var12 = var3.statesWillNeverBeEqual;
        var14 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.partition;
            var2 = _closure2_slot0;
            var1 = function(arg1) {
                var3 = _closure1_slot11;
                var2 = var3.hasJoined;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var16 = var8;
        var15 = var6;
        var13 = var5;
        var3 = var16[var7](var15, var14, var13, var12, var11);
        var2 = _closure1_slot3;
        var1 = 2;
        var3 = var2.bind(var4)(var3, var1);
        var1 = {};
        var2 = 0;
        var2 = var3[var2];
        var1['joinedThreadIds'] = var2;
        var2 = 1;
        var2 = var3[var2];
        var1['unjoinedThreadIds'] = var2;
        return var1;
    };
    var3['useActiveThreads'] = var4;
    var4 = function useActiveGuildThreads(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 11;
        var5 = var5[var4];
        var4 = undefined;
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStoresArray;
        var4 = _closure1_slot7;
        var5 = new Array(3);
        var5[0] = var4;
        var4 = _closure1_slot9;
        var5[1] = var4;
        var4 = _closure1_slot6;
        var5[2] = var4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var8 = _closure1_slot9;
            var5 = var8.getThreadsForGuild;
            var3 = _closure2_slot0;
            var3 = var5.bind(var8)(var3);
            var4 = var4.bind(var6)(var3);
            var3 = var4.values;
            var5 = var3.bind(var4)();
            var4 = var5.map;
            var3 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.values;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.flatten;
            var5 = var3.bind(var4)();
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = _closure1_slot6;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var2 = 13;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var4 = _closure1_slot7;
                var3 = var4.can;
                var1 = _closure1_slot12;
                var2 = var1.VIEW_CHANNEL;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var6.bind(var7)(var5, var3, var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = _closure2_slot1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.compare;
                var6 = _closure1_slot8;
                var5 = var6.lastMessageId;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var6 = _closure1_slot8;
                var5 = var6.lastMessageId;
                var1 = arg2;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useActiveGuildThreads'] = var4;
    var2 = function useArchivedThreads(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var18 = arg2;
            var14 = arg3;
            var20 = arg4;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var18;
            var _closure2_slot2 = var14;
            var _closure2_slot3 = var20;
            var2 = var1.isModeratorReportChannel;
            var2 = var2.bind(var1)();
            var _closure2_slot4 = var2;
            var4 = _closure1_slot5;
            var3 = var1.id;
            var10 = undefined;
            var3 = var4.bind(var10)(var3);
            var4 = var3.showResolvedFlags;
            var _closure2_slot5 = var4;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 11;
            var3 = var13[var8];
            var15 = var9.bind(var10)(var3);
            var6 = var15.useStateFromStoresObject;
            var12 = _closure1_slot10;
            var5 = new Array(1);
            var5[0] = var12;
            var3 = function() {
                var1 = {};
                var2 = _closure1_slot10;
                var7 = var2.isLoading;
                var4 = _closure2_slot0;
                var11 = var4.id;
                var10 = _closure2_slot1;
                var9 = _closure2_slot2;
                var8 = _closure2_slot3;
                var12 = var2;
                var3 = var12[var7](var11, var10, var9, var8, var7);
                var1['loading'] = var3;
                var3 = var2.isInitialLoad;
                var1['isInitialLoad'] = var3;
                var3 = var2.canLoadMore;
                var1['canLoadMore'] = var3;
                var2 = var2.nextOffset;
                var1['nextOffset'] = var2;
                return var1;
            };
            var5 = var6.bind(var15)(var5, var3);
            var6 = var5.canLoadMore;
            var3 = var5.loading;
            var19 = var5.nextOffset;
            var _closure2_slot6 = var19;
            var5 = var5.isInitialLoad;
            var _closure2_slot7 = var5;
            var17 = _closure1_slot4;
            var16 = var17.useCallback;
            var15 = new Array(7);
            var15[0] = var1;
            var15[1] = var18;
            var15[2] = var14;
            var15[3] = var20;
            var15[4] = var19;
            var15[5] = var4;
            var15[6] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure1_slot7;
                    var5 = var6.can;
                    var2 = _closure1_slot12;
                    var3 = var2.READ_MESSAGE_HISTORY;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var3, var2);
                    var2 = !var2;
                    if(var2) { _fun0002_ip = 59; continue _fun0002 }
 42:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0002_ip = 56; continue _fun0002 }
 49:
                    var5 = _closure2_slot5;
                    var3 = !var5;
 56:
                    var2 = var3;
 59:
                    if(var2) { _fun0002_ip = 155; continue _fun0002 }
 62:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.loadArchivedThreads;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.guild_id;
                    var1['guildId'] = var6;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var5 = _closure2_slot1;
                    var1['sortOrder'] = var5;
                    var5 = _closure2_slot2;
                    var1['tagFilter'] = var5;
                    var5 = _closure2_slot3;
                    var1['tagSetting'] = var5;
                    var4 = _closure2_slot6;
                    var1['offset'] = var4;
                    var1 = var2.bind(var3)(var1);
 155:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var16.bind(var17)(var2, var15);
            var _closure2_slot8 = var2;
            var16 = _closure1_slot4;
            var15 = var16.useRef;
            var15 = var15.bind(var16)(var2);
            var _closure2_slot9 = var15;
            var17 = _closure1_slot4;
            var16 = var17.useEffect;
            var15 = function() {
                var2 = _closure2_slot9;
                var1 = _closure2_slot8;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var15 = var16.bind(var17)(var15);
            var17 = _closure1_slot4;
            var16 = var17.useEffect;
            var19 = var1.id;
            var15 = new Array(5);
            var15[0] = var19;
            var15[1] = var18;
            var15[2] = var14;
            var15[3] = var5;
            var15[4] = var4;
            var14 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0003_ip = 23; continue _fun0003 }
 10:
                    var2 = _closure2_slot9;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var16.bind(var17)(var14, var15);
            var16 = _closure1_slot4;
            var15 = var16.useEffect;
            var1 = var1.id;
            var14 = new Array(2);
            var14[0] = var1;
            var14[1] = var4;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.resort;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var15.bind(var16)(var1, var14);
            var1 = {};
            var8 = var13[var8];
            var10 = var9.bind(var10)(var8);
            var9 = var10.useStateFromStoresArray;
            var8 = new Array(3);
            var8[0] = var12;
            var12 = _closure1_slot6;
            var8[1] = var12;
            var11 = _closure1_slot7;
            var8[2] = var11;
            var7 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 12;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var8 = _closure1_slot10;
                var7 = var8.getThreads;
                var4 = _closure2_slot0;
                var12 = var4.id;
                var11 = _closure2_slot1;
                var10 = _closure2_slot2;
                var9 = _closure2_slot3;
                var13 = var8;
                var1 = var13[var7](var12, var11, var10, var9, var8);
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot4;
                        if(!var2) { _fun0004_ip = 21; continue _fun0004 }
 10:
                        var1 = _closure2_slot5;
                        if(var1) { _fun0004_ip = 21; continue _fun0004 }
 17:
                        var1 = false;
                        return var1;
 21:
                        var4 = _closure1_slot6;
                        var3 = var4.getChannel;
                        var1 = arg1;
                        var5 = var3.bind(var4)(var1);
                        var1 = null;
                        var1 = var1 != var5;
                        if(!var1) { _fun0004_ip = 76; continue _fun0004 }
 50:
                        var4 = _closure1_slot7;
                        var3 = var4.can;
                        var2 = _closure1_slot12;
                        var2 = var2.VIEW_CHANNEL;
                        var1 = var3.bind(var4)(var2, var5);
 76:
                        return var1;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.value;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var8, var7);
            var1['threadIds'] = var7;
            var1['canLoadMore'] = var6;
            if(var3) { _fun0001_ip = 413; continue _fun0001 }
 410:
            var3 = var5;
 413:
            if(!var3) { _fun0001_ip = 419; continue _fun0001 }
 416:
            var3 = var4;
 419:
            var1['loading'] = var3;
            var1['loadMore'] = var2;
            return var1;
        }
    };
    var3['useArchivedThreads'] = var2;
    return var1;
})();