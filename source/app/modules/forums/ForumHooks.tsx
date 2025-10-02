// app/modules/forums/ForumHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var13;
    var10 = function useAvailableTags(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var3 = var3 == var2;
            var5 = undefined;
            var6 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2.parent_id;
case 2:
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 20;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresObject;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var2.availableTags;
case 4:
                    if(!(var1 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = new Array(0);
case 6:
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        var3 = arg2;
                        var1 = {};
                        var4 = arg1;
                        var5 = var1;
                        var2 = copyDataProperties(var5, var4);
                        var2 = var3.id;
                        var1[var2] = var3;
                        return var1;
                    };
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var _closure1_slot28 = var10;
    var9 = function useAppliedTags(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot28;
        var3 = undefined;
        var6 = var4.bind(var3)(var5);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot0;
                var6 = null;
                var1 = var6 == var1;
                var5 = undefined;
                var4 = undefined;
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = _closure2_slot0;
                var7 = var1.appliedTags;
                var1 = var6 == var7;
                var4 = undefined;
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                var3 = var7.map;
                var1 = function(arg1) {
                    var2 = _closure2_slot1;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var7 = var3.bind(var7)(var1);
                var1 = var6 == var7;
                var4 = undefined;
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 11:
                var3 = var7.filter;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 24;
                var1 = var9[var1];
                var1 = var8.bind(var5)(var1);
                var1 = var1.isNotNullish;
                var4 = var3.bind(var7)(var1);
case 8:
                if(!(var6 == var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var4 = _closure1_slot26;
case 12:
                var3 = _closure2_slot0;
                var1 = var4;
                if(!(var6 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var3 = _closure2_slot0;
                var2 = var3.isModeratorReportChannel;
                var2 = var2.bind(var3)();
                var1 = var4;
                if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 25;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.sortedModeratorReportTags;
                var1 = var2.bind(var3)(var4);
case 14:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var9;
    var8 = function useDefaultReactionEmoji(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = var3.defaultReactionEmoji;
case 2:
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 20;
            var4 = var8[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 3:
                    var4 = _closure2_slot0;
                    var3 = var4.emojiId;
case 17:
                    var3 = var1 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 11; continue _fun0005 }
case 18:
                    var4 = _closure1_slot5;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot0;
                    var2 = var2.emojiId;
                    var1 = var3.bind(var4)(var2);
case 11:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var3, var1);
            var3 = var2 == var5;
            var1 = null;
            if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = var5.emojiId;
            if(!(var2 != var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            if(!(var2 == var4)) { _fun0004_ip = 23; continue _fun0004 }
case 21:
            var3 = var5.emojiName;
            var3 = var2 != var3;
            var2 = null;
            if(!var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var3 = {};
            var6 = var5.emojiId;
            var3['id'] = var6;
            var6 = var5.emojiName;
            var3['name'] = var6;
            var6 = false;
            var3['animated'] = var6;
            var2 = var3;
case 24:
            _fun0004_ip = 26; continue _fun0004;
case 23:
            var3 = {};
            var5 = var5.emojiId;
            var3['id'] = var5;
            var5 = var4.name;
            var3['name'] = var5;
            var4 = var4.animated;
            var3['animated'] = var4;
            var2 = var3;
case 26:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var _closure1_slot30 = var8;
    var7 = function useVisibleForumTags(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot12;
                var3 = var4.can;
                var1 = _closure1_slot23;
                var2 = var1.MANAGE_THREADS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var7.bind(var8)(var4, var3);
            var _closure2_slot1 = var7;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0006_ip = 22; continue _fun0006 }
case 27:
            var5 = var6.availableTags;
case 22:
            var2[1] = var5;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var3;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 17; continue _fun0007 }
case 3:
                    var4 = _closure2_slot0;
                    var3 = var4.availableTags;
case 17:
                    if(!(var2 == var3)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var3 = new Array(0);
case 28:
                    var4 = new Array(0);
                    var5 = 0;
                    var7 = var4;
                    var6 = var3;
                    var2 = arraySpread(var7, var6, var5);
                    var2 = _closure2_slot1;
                    var1 = var4;
                    if(var2) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.moderated;
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 30:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot31 = var7;
    var6 = function useCanSearchForumPosts(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot12;
            var3 = var4.can;
            var1 = _closure1_slot23;
            var2 = var1.READ_MESSAGE_HISTORY;
            var1 = _closure2_slot0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot32 = var6;
    var5 = function useForumSearchState(arg1) {
        var2 = arg1;
        var2 = var2.channelId;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot18;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var5 = _closure1_slot18;
            var3 = var5.getSearchLoading;
            var4 = _closure2_slot0;
            var3 = var3.bind(var5)(var4);
            var1['isSearchLoading'] = var3;
            var5 = _closure1_slot18;
            var3 = var5.getSearchQuery;
            var3 = var3.bind(var5)(var4);
            var1['searchQuery'] = var3;
            var3 = _closure1_slot18;
            var2 = var3.getSearchResults;
            var2 = var2.bind(var3)(var4);
            var1['searchResults'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot33 = var5;
    var4 = function useUnreadThreadsCountForParent(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot6;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot13;
        var2[1] = var6;
        var5 = _closure1_slot9;
        var2[2] = var5;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = _closure1_slot9;
                var2 = var4.getChannel;
                var1 = _closure2_slot1;
                var2 = var2.bind(var4)(var1);
                var10 = null;
                if(!(var10 != var2)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                var1 = var2.isForumLikeChannel;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0008_ip = 32; continue _fun0008 }
case 6:
                var2 = _closure1_slot6;
                var1 = var2.getActiveJoinedUnreadThreadsForParent;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var12 = var1.bind(var2)(var4, var3);
                var2 = _closure1_slot6;
                var1 = var2.getActiveUnjoinedUnreadThreadsForParent;
                var9 = var1.bind(var2)(var4, var3);
                var2 = _closure1_slot13;
                var1 = var2.ackMessageId;
                var8 = var1.bind(var2)(var3);
                if(!(var10 != var8)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var6 = var12;
                var2 = 0;
                var1 = 0;
                for(var3 in var6)
case 36:
                {
                    var13 = var2;
                    var1 = var13;
case 37:
                    var14 = var3;
                    var14 = var12[var14];
                    var16 = _closure1_slot13;
                    var15 = var16.lastMessageId;
                    var14 = var14.channel;
                    var14 = var14.id;
                    var15 = var15.bind(var16)(var14);
                    var14 = var10 != var15;
                    if(!var14) { _fun0008_ip = 26; continue _fun0008 }
case 38:
                    var14 = var15 > var8;
case 26:
                    var2 = var13;
                    if(!var14) { _fun0008_ip = 36; continue _fun0008 }
case 39:
                    var2 = var13 + 1;
                    _fun0008_ip = 36; continue _fun0008;
                }
case 40:
                var6 = var9;
                var2 = var1;
                var1 = var2;
                for(var3 in var6)
case 41:
                {
                    var12 = var2;
                    var1 = var12;
case 42:
                    var13 = var3;
                    var13 = var9[var13];
                    var15 = _closure1_slot13;
                    var14 = var15.lastMessageId;
                    var13 = var13.id;
                    var14 = var14.bind(var15)(var13);
                    var13 = var10 != var14;
                    if(!var13) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var13 = var14 > var8;
case 43:
                    var2 = var12;
                    if(!var13) { _fun0008_ip = 41; continue _fun0008 }
case 45:
                    var2 = var12 + 1;
                    _fun0008_ip = 41; continue _fun0008;
                }
case 46:
                return var1;
case 34:
                var1 = 0;
                return var1;
case 32:
                var1 = 0;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot34 = var4;
    var1 = global;
    var16 = var1.Object;
    var15 = var16.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var11);
    var1 = 0;
    var11 = var13[var1];
    var1 = undefined;
    var11 = var14.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var15 = var13[var11];
    var11 = metroImportAll;
    var11 = var11.bind(var1)(var15);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot9 = var11;
    var11 = 7;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot10 = var11;
    var11 = 8;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot11 = var11;
    var11 = 9;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot12 = var11;
    var11 = 10;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot13 = var11;
    var11 = 11;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot14 = var11;
    var11 = 12;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot15 = var11;
    var11 = 13;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot16 = var11;
    var11 = 14;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot17 = var11;
    var11 = 15;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot18 = var11;
    var11 = 16;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.ForumTimestampFormats;
    var _closure1_slot19 = var11;
    var11 = 17;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var14 = var11.AnalyticsObjectTypes;
    var _closure1_slot20 = var14;
    var14 = var11.AnalyticsObjects;
    var _closure1_slot21 = var14;
    var14 = var11.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot22 = var14;
    var11 = var11.Permissions;
    var _closure1_slot23 = var11;
    var11 = 18;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.ChannelFlags;
    var _closure1_slot24 = var11;
    var11 = 19;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.MAX_THREAD_UNREAD_MESSAGE_COUNT;
    var _closure1_slot25 = var11;
    var11 = new Array(0);
    var _closure1_slot26 = var11;
    var11 = {'isNew': false, 'hasUnreads': false};
    var _closure1_slot27 = var11;
    var11 = 38;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/forums/ForumHooks.tsx';
    var11 = var12.bind(var13)(var11);
    var11 = function useLoadForumUnreadCounts(arg1, arg2, arg3, arg4) {
        var10 = arg1;
        var7 = arg2;
        var8 = arg3;
        var6 = arg4;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var8;
        var _closure2_slot3 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 20;
        var4 = var4[var1];
        var1 = undefined;
        var11 = var5.bind(var1)(var4);
        var9 = var11.useStateFromStores;
        var4 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var3 = _closure1_slot7;
            var2 = var3.hasLoaded;
            var1 = _closure2_slot0;
            var1 = var1.guild_id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var9.bind(var11)(var5, var4);
        var _closure2_slot4 = var9;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var11 = var10.id;
        var3 = new Array(6);
        var3[0] = var11;
        var10 = var10.guild_id;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var3[4] = var7;
        var3[5] = var6;
        var2 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure2_slot4;
                if(!var1) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                var10 = _closure1_slot15;
                var9 = var10.getThreadIds;
                var3 = _closure2_slot0;
                var14 = var3.id;
                var13 = _closure2_slot1;
                var12 = _closure2_slot2;
                var11 = _closure2_slot3;
                var15 = var10;
                var7 = var15[var9](var14, var13, var12, var11, var10);
                var6 = _closure1_slot17;
                var4 = var6.getThreadIdsMissingCounts;
                var3 = var3.guild_id;
                var6 = var4.bind(var6)(var3, var7);
                var4 = var6.filter;
                var3 = function(arg1) {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.canDisplayPostUnreadMessageCount;
                    var1 = _closure1_slot13;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var7 = var4.bind(var6)(var3);
                var6 = var7.slice;
                var3 = 0;
                var4 = 180;
                var6 = var6.bind(var7)(var3, var4);
                var4 = var6.map;
                var2 = function(arg1) {
                    var4 = arg1;
                    var1 = {};
                    var1['threadId'] = var4;
                    var3 = _closure1_slot13;
                    var2 = var3.getTrackedAckMessageId;
                    var2 = var2.bind(var3)(var4);
                    var1['ackMessageId'] = var2;
                    return var1;
                };
                var4 = var4.bind(var6)(var2);
                var2 = var4.length;
                if(!(var2 > var3)) { _fun0009_ip = 47; continue _fun0009 }
case 49:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'REQUEST_FORUM_UNREADS';
                var1['type'] = var6;
                var5 = _closure2_slot0;
                var6 = var5.guild_id;
                var1['guildId'] = var6;
                var5 = var5.id;
                var1['channelId'] = var5;
                var1['threads'] = var4;
                var1 = var2.bind(var3)(var1);
case 47:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useLoadForumUnreadCounts'] = var11;
    var11 = function useExistingPin(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot7;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot9;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 23;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var7 = _closure1_slot7;
            var6 = var7.getThreadsForParent;
            var2 = _closure2_slot0;
            var5 = var2.guild_id;
            var2 = var2.parent_id;
            var2 = var6.bind(var7)(var5, var2);
            var3 = var3.bind(var4)(var2);
            var2 = var3.keys;
            var4 = var2.bind(var3)();
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getChannel;
                    var2 = arg1;
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    var3 = var2 == var4;
                    var2 = undefined;
                    if(var3) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var3 = var4.hasFlag;
                    var1 = _closure1_slot24;
                    var1 = var1.PINNED;
                    var2 = var3.bind(var4)(var1);
case 50:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.head;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot9;
            var1 = var2.getChannel;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useExistingPin'] = var11;
    var3['useAvailableTags'] = var10;
    var3['useAppliedTags'] = var9;
    var9 = function useSomeAppliedTags(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arguments[1];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var5 = 1;
case 52:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot29;
            var3 = arg1;
            var6 = var4.bind(var6)(var3);
            _closure2_slot1 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = var3.slice;
                var6 = _closure2_slot0;
                var5 = 0;
                var3 = var1.bind(var3)(var5, var6);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var2 = _closure2_slot1;
                var2 = var2.length;
                var2 = var2 - var6;
                var2 = var3.bind(var4)(var5, var2);
                var1[1] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useSomeAppliedTags'] = var9;
    var9 = function useFacepileUsers(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 20;
        var1 = var6[var1];
        var4 = undefined;
        var8 = var5.bind(var4)(var1);
        var7 = var8.useStateFromStoresArray;
        var1 = _closure1_slot14;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() {
            var3 = _closure2_slot1;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot14;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 24;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var7.bind(var8)(var5, var1);
        var _closure2_slot2 = var1;
        var5 = _closure1_slot1;
        var3 = 26;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var2 = function() {
            var3 = _closure2_slot2;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = _closure1_slot10;
                var3 = var4.requestMember;
                var1 = _closure2_slot0;
                var2 = var1.guild_id;
                var1 = arg1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['useFacepileUsers'] = var9;
    var9 = function useLastActiveTimestamp(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var3 = arguments[2];
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var7;
            var9 = undefined;
            if(!(var3 === var9)) { _fun0012_ip = 54; continue _fun0012 }
case 55:
            var2 = _closure1_slot19;
            var3 = var2.DURATION_AGO;
case 54:
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var9;
            var _closure2_slot5 = var9;
            var10 = _closure1_slot4;
            var6 = var10.useMemo;
            var4 = var8.id;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractTimestamp;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var10)(var4, var5);
            _closure2_slot3 = var6;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 28;
            var4 = var10[var4];
            var5 = var5.bind(var9)(var4);
            var4 = var5.useLastMessageTimestamp;
            var8 = var4.bind(var5)(var8);
            _closure2_slot4 = var8;
            var9 = _closure1_slot4;
            var5 = var9.useMemo;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getForumTimestampFormatter;
                var2 = _closure2_slot1;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var5.bind(var9)(var3, var4);
            _closure2_slot5 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 29;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.ThreadSortOrder;
                    var1 = var1.CREATION_DATE;
                    if(!(var4 !== var1)) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 28;
                    var1 = var6[var1];
                    var7 = var4.bind(var5)(var1);
                    var6 = var7.getTimestampString;
                    var4 = _closure2_slot4;
                    var1 = _closure2_slot5;
                    var1 = var6.bind(var7)(var4, var1);
                    _fun0013_ip = 58; continue _fun0013;
case 56:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 28;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getTimestampString;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot5;
                    var1 = var4.bind(var5)(var3, var2);
case 58:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useLastActiveTimestamp'] = var9;
    var9 = function useMostUsedReaction(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var5 = null;
            var6 = var5 == var2;
            var5 = undefined;
            if(var6) { _fun0014_ip = 54; continue _fun0014 }
case 29:
            var5 = var2.reactions;
case 54:
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.maxBy;
                    var6 = _closure2_slot0;
                    var1 = null;
                    var6 = var1 == var6;
                    if(var6) { _fun0015_ip = 59; continue _fun0015 }
case 60:
                    var5 = _closure2_slot0;
                    var2 = var5.reactions;
case 59:
                    if(!(var1 == var2)) { _fun0015_ip = 11; continue _fun0015 }
case 61:
                    var2 = new Array(0);
case 11:
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.max;
                        var2 = var1.burst_count;
                        var1 = var1.count;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useMostUsedReaction'] = var9;
    var3['useDefaultReactionEmoji'] = var8;
    var8 = function useSomeForumPostReactions(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var7 = var1.message;
            var _closure2_slot0 = var7;
            var6 = var1.parentChannel;
            var8 = var1.count;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0016_ip = 5; continue _fun0016 }
case 29:
            var8 = 1;
case 5:
            var1 = var1.sorted;
            if(!(var1 === var5)) { _fun0016_ip = 60; continue _fun0016 }
case 7:
            var1 = true;
case 60:
            var _closure2_slot1 = var1;
            var4 = _closure1_slot30;
            var4 = var4.bind(var5)(var6);
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var6 = null;
            var12 = var6 == var7;
            var11 = undefined;
            if(var12) { _fun0016_ip = 62; continue _fun0016 }
case 63:
            var11 = var7.reactions;
case 62:
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var1;
            var1 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 == var3;
                    var4 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0017_ip = 64; continue _fun0017 }
case 9:
                    var3 = _closure2_slot0;
                    var5 = var3.reactions;
case 64:
                    if(!(var2 == var5)) { _fun0017_ip = 54; continue _fun0017 }
case 65:
                    var5 = new Array(0);
case 54:
                    var2 = _closure2_slot1;
                    var1 = var5;
                    if(!var2) { _fun0017_ip = 66; continue _fun0017 }
case 57:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 23;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sortBy;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.count;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var5, var2);
                    var2 = var3.reverse;
                    var1 = var2.bind(var3)();
case 66:
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var7);
            var7 = new Array(0);
            if(!(var6 != var4)) { _fun0016_ip = 23; continue _fun0016 }
case 67:
            var6 = {'emoji': null, 'me': false, 'count': 0, 'burst_count': 0, 'me_burst': false};
            var6['emoji'] = var4;
            var4 = new Array(1);
            var4[0] = var6;
            var7 = var4;
case 23:
            var4 = var1.length;
            var6 = 0;
            if(!(var4 > var6)) { _fun0016_ip = 68; continue _fun0016 }
case 69:
            var7 = var1;
case 68:
            var1 = {};
            var4 = var7.slice;
            var4 = var4.bind(var7)(var6, var8);
            var1['reactions'] = var4;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 23;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.sum;
            var6 = var7.slice;
            var5 = var7.length;
            var6 = var6.bind(var7)(var8, var5);
            var5 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.count;
                var1 = var1.burst_count;
                var1 = var2 + var1;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            var1['additionalNonUniqueReactionCount'] = var2;
            return var1;
        }
    };
    var3['useSomeForumPostReactions'] = var8;
    var8 = function useMaxPossibleForumPostReactions(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var13 = var2.containerWidth;
            var12 = var2.reactionEmojiWidth;
            var11 = var2.digitWidth;
            var3 = var2.message;
            var _closure2_slot0 = var3;
            var5 = var2.parentChannel;
            var2 = _closure1_slot30;
            var6 = undefined;
            var2 = var2.bind(var6)(var5);
            var5 = _closure1_slot4;
            var4 = var5.useMemo;
            var10 = null;
            var7 = var10 == var3;
            if(var7) { _fun0018_ip = 70; continue _fun0018 }
case 71:
            var6 = var3.reactions;
case 70:
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.sortBy;
                    var6 = _closure2_slot0;
                    var1 = null;
                    var6 = var1 == var6;
                    if(var6) { _fun0019_ip = 59; continue _fun0019 }
case 60:
                    var5 = _closure2_slot0;
                    var2 = var5.reactions;
case 59:
                    if(!(var1 == var2)) { _fun0019_ip = 11; continue _fun0019 }
case 61:
                    var2 = new Array(0);
case 11:
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.count;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = var2.reverse;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var3);
            var6 = new Array(0);
            if(!(var10 != var2)) { _fun0018_ip = 49; continue _fun0018 }
case 72:
            var3 = {'emoji': null, 'me': false, 'count': 0, 'burst_count': 0, 'me_burst': false};
            var3['emoji'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var6 = var2;
case 49:
            var2 = var1.length;
            var5 = 0;
            if(!(var2 > var5)) { _fun0018_ip = 73; continue _fun0018 }
case 74:
            var6 = var1;
case 73:
            var1 = var6.length;
            var1 = var5 < var1;
            var7 = 1;
            var9 = global;
            var8 = 0;
            var4 = 0;
            var2 = 0;
            var3 = 0;
            if(!var1) { _fun0018_ip = 75; continue _fun0018 }
case 76:
            var1 = var6[var2];
            var14 = var1.count;
            if(!(var10 == var14)) { _fun0018_ip = 77; continue _fun0018 }
case 78:
            var14 = var1.burst_count;
case 77:
            var15 = var10 != var14;
            var1 = 0;
            if(!var15) { _fun0018_ip = 79; continue _fun0018 }
case 80:
            var1 = var14;
case 79:
            var15 = var9.Math;
            var14 = var15.ceil;
            var17 = var9.Math;
            var16 = var17.log10;
            var1 = var1 + var7;
            var1 = var16.bind(var17)(var1);
            var1 = var14.bind(var15)(var1);
            var1 = var11 * var1;
            var1 = var12 + var1;
            var14 = var4 + var1;
            var3 = var8;
            if(!(var14 < var13)) { _fun0018_ip = 75; continue _fun0018 }
case 81:
            var4 = var4 + var1;
            var8 = var8 + var7;
            var2 = var2 + 1;
            var1 = var6.length;
            var3 = var8;
            if(var2 < var1) { _fun0018_ip = 76; continue _fun0018 }
case 75:
            var1 = var6.length;
            var1 = var1 - var3;
            var4 = var3;
            var2 = var1;
            if(!(var2 > var5)) { _fun0018_ip = 82; continue _fun0018 }
case 83:
            var4 = var3 - var7;
            var2 = var1 + var7;
case 82:
            var1 = {};
            var3 = var6.slice;
            var3 = var3.bind(var6)(var5, var4);
            var1['reactions'] = var3;
            var1['additionalReactionCount'] = var2;
            return var1;
        }
    };
    var3['useMaxPossibleForumPostReactions'] = var8;
    var8 = function useMessageCount(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 20;
            var7 = var8[var4];
            var5 = undefined;
            var11 = var6.bind(var5)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0021_ip = 84; continue _fun0021 }
case 4:
                    var1 = var2;
case 84:
                    return var1;
                }
            };
            var7 = var10.bind(var11)(var9, var7);
            var _closure2_slot1 = var7;
            var9 = 30;
            var9 = var8[var9];
            var10 = var6.bind(var5)(var9);
            var9 = var10.getMessageCountText;
            var3 = var3.id;
            var3 = var9.bind(var10)(var7, var3);
            var9 = var8[var4];
            var12 = var6.bind(var5)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot13;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 21;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.canDisplayPostUnreadMessageCount;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var5 = _closure1_slot13;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var11.bind(var12)(var10, var9);
            var _closure2_slot2 = var9;
            var4 = var8[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot17;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0022_ip = 52; continue _fun0022 }
case 85:
                    var2 = null;
                    return var2;
case 52:
                    var5 = _closure1_slot17;
                    var4 = var5.getCount;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var6 = var4.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var6)) { _fun0022_ip = 86; continue _fun0022 }
case 60:
                    var2 = 0;
                    if(!(!(var6 > var2))) { _fun0022_ip = 61; continue _fun0022 }
case 86:
                    var2 = '1+';
                    return var2;
case 61:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.min;
                    var1 = _closure2_slot1;
                    var1 = var4.bind(var5)(var6, var1);
                    var4 = _closure1_slot25;
                    if(!(var1 >= var4)) { _fun0022_ip = 87; continue _fun0022 }
case 27:
                    var5 = _closure1_slot25;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = '+';
                    var1 = var4.bind(var3)(var5, var2);
case 87:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var1);
            var1 = {};
            var1['messageCount'] = var7;
            var4 = null;
            var4 = var4 != var7;
            if(!var4) { _fun0020_ip = 88; continue _fun0020 }
case 19:
            var5 = global;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = '';
            var5 = var6.bind(var5)(var7);
            var4 = var5 !== var3;
case 88:
            var1['isMaxMessageCount'] = var4;
            var1['messageCountText'] = var3;
            var1['unreadCount'] = var2;
            return var1;
        }
    };
    var3['useMessageCount'] = var8;
    var8 = function useForumPostMessageAuthor(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var3 = null;
            var2 = var3 == var8;
            var4 = undefined;
            var9 = undefined;
            if(var2) { _fun0023_ip = 4; continue _fun0023 }
case 89:
            var2 = var8.author;
            var6 = var3 == var2;
            var9 = undefined;
            if(var6) { _fun0023_ip = 4; continue _fun0023 }
case 28:
            var9 = var2.id;
case 4:
            var _closure2_slot0 = var9;
            var2 = var5.getGuildId;
            var10 = var2.bind(var5)();
            var _closure2_slot1 = var10;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 20;
            var2 = var11[var2];
            var13 = var7.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot14;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var12.bind(var13)(var5, var2);
            var5 = 31;
            var5 = var11[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.useNullableMessageAuthor;
            var5 = var5.bind(var7)(var8);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var9;
            var1 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0024_ip = 2; continue _fun0024 }
case 90:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
case 2:
                    if(!var2) { _fun0024_ip = 91; continue _fun0024 }
case 92:
                    var4 = _closure1_slot10;
                    var3 = var4.requestMember;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
case 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var6);
            var1 = {};
            var7 = var3 == var5;
            var6 = undefined;
            if(var7) { _fun0023_ip = 38; continue _fun0023 }
case 93:
            var6 = var5.nick;
case 38:
            if(!(var3 == var6)) { _fun0023_ip = 47; continue _fun0023 }
case 26:
            var8 = var3 == var2;
            var7 = undefined;
            if(var8) { _fun0023_ip = 94; continue _fun0023 }
case 95:
            var7 = var2.username;
case 94:
            var6 = var7;
case 47:
            var1['authorName'] = var6;
            var6 = var3 == var5;
            var7 = undefined;
            if(var6) { _fun0023_ip = 96; continue _fun0023 }
case 97:
            var7 = var5.colorString;
case 96:
            var8 = var3 != var7;
            var6 = null;
            if(!var8) { _fun0023_ip = 98; continue _fun0023 }
case 99:
            var6 = var7;
case 98:
            var1['authorColor'] = var6;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0023_ip = 100; continue _fun0023 }
case 101:
            var4 = var5.colorStrings;
case 100:
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0023_ip = 43; continue _fun0023 }
case 102:
            var3 = var4;
case 43:
            var1['authorColors'] = var3;
            var1['user'] = var2;
            return var1;
        }
    };
    var3['useForumPostMessageAuthor'] = var8;
    var8 = function useForumPostAuthor(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 20;
            var3 = var9[var2];
            var8 = undefined;
            var11 = var6.bind(var8)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot14;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.ownerId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var5, var3);
            var2 = var9[var2];
            var11 = var6.bind(var8)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot16;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = _closure1_slot16;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0026_ip = 60; continue _fun0026 }
case 4:
                    var1 = var2.firstMessage;
case 60:
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var5, var2);
            var5 = 31;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.useNullableUserAuthor;
            var9 = null;
            var10 = var9 == var2;
            if(var10) { _fun0025_ip = 103; continue _fun0025 }
case 15:
            var8 = var2.author;
case 103:
            var2 = var3;
            if(!(var9 != var8)) { _fun0025_ip = 104; continue _fun0025 }
case 105:
            var2 = var8;
case 104:
            var2 = var5.bind(var6)(var2, var7);
            var6 = _closure1_slot4;
            var5 = var6.useEffect;
            var8 = var7.guild_id;
            var4 = new Array(2);
            var4[0] = var8;
            var7 = var7.ownerId;
            var4[1] = var7;
            var1 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.ownerId;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0027_ip = 86; continue _fun0027 }
case 106:
                    var4 = _closure1_slot10;
                    var3 = var4.requestMember;
                    var1 = _closure2_slot0;
                    var2 = var1.guild_id;
                    var1 = var1.ownerId;
                    var1 = var3.bind(var4)(var2, var1);
case 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['user'] = var3;
            var1['author'] = var2;
            return var1;
        }
    };
    var3['useForumPostAuthor'] = var8;
    var8 = function getForumPostAuthor(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot14;
            var2 = var4.getUser;
            var1 = var5.ownerId;
            var2 = var2.bind(var4)(var1);
            var6 = _closure1_slot16;
            var4 = var6.getMessage;
            var1 = var5.id;
            var1 = var4.bind(var6)(var1);
            var7 = null;
            var4 = var7 == var1;
            var6 = undefined;
            var8 = undefined;
            if(var4) { _fun0028_ip = 107; continue _fun0028 }
case 108:
            var8 = var1.firstMessage;
case 107:
            var1 = {};
            var1['user'] = var2;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 31;
            var3 = var9[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getUserAuthor;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0028_ip = 35; continue _fun0028 }
case 109:
            var6 = var8.author;
case 35:
            if(!(var7 != var6)) { _fun0028_ip = 67; continue _fun0028 }
case 25:
            var2 = var6;
case 67:
            var2 = var3.bind(var4)(var2, var5);
            var1['author'] = var2;
            return var1;
        }
    };
    var3['getForumPostAuthor'] = var8;
    var8 = function useForumPostFirstMessageMarkup(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var5 = var2.firstMessage;
            var _closure2_slot0 = var5;
            var12 = var2.formatInline;
            var6 = undefined;
            if(!(var12 === var6)) { _fun0029_ip = 110; continue _fun0029 }
case 92:
            var12 = true;
case 110:
            var _closure2_slot1 = var12;
            var11 = var2.noStyleAndInteraction;
            if(!(var11 === var6)) { _fun0029_ip = 7; continue _fun0029 }
case 111:
            var11 = true;
case 7:
            var _closure2_slot2 = var11;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 32;
            var4 = var7[var4];
            var8 = var3.bind(var6)(var4);
            var4 = var8.useShouldFilterKeywords;
            var10 = var4.bind(var8)();
            _closure2_slot3 = var10;
            var4 = 33;
            var4 = var7[var4];
            var4 = var3.bind(var6)(var4);
            var9 = var4.GameMentionsUserExperiment;
            var8 = var9.useExperiment;
            var4 = {};
            var13 = 'modules/forums/ForumHooks';
            var4['location'] = var13;
            var4 = var8.bind(var9)(var4);
            var9 = var4.enabled;
            _closure2_slot4 = var9;
            var8 = _closure1_slot4;
            var4 = var8.useMemo;
            var2 = new Array(5);
            var2[0] = var5;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var1 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 == var1;
                    var5 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0030_ip = 110; continue _fun0030 }
case 9:
                    var3 = _closure2_slot0;
                    var1 = var3.content;
case 110:
                    if(!(var2 != var1)) { _fun0030_ip = 112; continue _fun0030 }
case 33:
                    var1 = _closure2_slot0;
                    var2 = var1.content;
                    var1 = '';
                    if(!(var1 === var2)) { _fun0030_ip = 107; continue _fun0030 }
case 112:
                    var1 = {'hasSpoilerEmbeds': false, 'content': null};
                    _fun0030_ip = 24; continue _fun0030;
case 107:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 34;
                    var2 = var4[var2];
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure2_slot0;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['formatInline'] = var7;
                    var7 = _closure2_slot2;
                    var2['noStyleAndInteraction'] = var7;
                    var7 = true;
                    var2['allowHeading'] = var7;
                    var2['allowList'] = var7;
                    var7 = _closure2_slot4;
                    var2['allowGameMentions'] = var7;
                    var6 = _closure2_slot3;
                    var2['shouldFilterKeywords'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 24:
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var1, var2);
            var4 = var2.hasSpoilerEmbeds;
            var1 = {};
            var1['hasSpoilerEmbeds'] = var4;
            var2 = var2.content;
            var1['content'] = var2;
            var2 = 35;
            var8 = var7[var2];
            var9 = var3.bind(var6)(var8);
            var8 = var9.useFindFirstMediaProperties;
            var8 = var8.bind(var9)(var5, var4);
            var1['firstMedia'] = var8;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.useFirstMediaIsEmbed;
            var2 = var2.bind(var3)(var5, var4);
            var1['firstMediaIsEmbed'] = var2;
            return var1;
        }
    };
    var3['useForumPostFirstMessageMarkup'] = var8;
    var8 = function useCanManageChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot12;
            var3 = var4.can;
            var1 = _closure1_slot23;
            var2 = var1.MANAGE_CHANNELS;
            var1 = _closure2_slot0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanManageChannel'] = var8;
    var8 = function useForumPostReadStates(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot11;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot13;
        var2[1] = var5;
        var1 = function() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var6 = _closure1_slot11;
                var5 = var6.getGuild;
                var4 = _closure2_slot0;
                var3 = var4.getGuildId;
                var4 = var3.bind(var4)();
                var3 = null;
                if(!(var3 == var4)) { _fun0031_ip = 10; continue _fun0031 }
case 5:
                var4 = _closure1_slot22;
case 10:
                var6 = var5.bind(var6)(var4);
                if(!(var3 != var6)) { _fun0031_ip = 113; continue _fun0031 }
case 57:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 21;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getForumPostReadStates;
                var3 = _closure2_slot0;
                var7 = _closure1_slot13;
                var1 = new Array(1);
                var1[0] = var7;
                var1 = var4.bind(var5)(var3, var6, var1);
                _fun0031_ip = 114; continue _fun0031;
case 113:
                var1 = _closure1_slot27;
case 114:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useForumPostReadStates'] = var8;
    var8 = function useChannelTemplate(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = null;
                var3 = var5 == var1;
                var4 = '';
                var1 = var4;
                if(var3) { _fun0032_ip = 115; continue _fun0032 }
case 116:
                var3 = _closure2_slot0;
                var3 = var3.template;
                var3 = var5 == var3;
                var1 = var4;
                if(var3) { _fun0032_ip = 115; continue _fun0032 }
case 111:
                var2 = _closure2_slot0;
                var3 = var2.template;
                var2 = var3.trim;
                var1 = var2.bind(var3)();
case 115:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useChannelTemplate'] = var8;
    var8 = function useForumThreadsForChannelList(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var5 = _closure1_slot6;
            var3 = var5.getActiveJoinedThreadsForGuild;
            var4 = _closure2_slot0;
            var3 = var3.bind(var5)(var4);
            var1['activeJoinedThreads'] = var3;
            var5 = _closure1_slot6;
            var3 = var5.getActiveUnjoinedThreadsForGuild;
            var3 = var3.bind(var5)(var4);
            var1['activeUnjoinedThreads'] = var3;
            var3 = _closure1_slot6;
            var2 = var3.getNewThreadCountsForGuild;
            var2 = var2.bind(var3)(var4);
            var1['newThreadCounts'] = var2;
            return var1;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = {};
        var3 = var2.activeJoinedThreads;
        var1['activeJoinedThreads'] = var3;
        var3 = var2.activeUnjoinedThreads;
        var1['activeUnjoinedThreads'] = var3;
        var2 = var2.newThreadCounts;
        var1['newThreadCounts'] = var2;
        return var1;
    };
    var3['useForumThreadsForChannelList'] = var8;
    var3['useVisibleForumTags'] = var7;
    var7 = function useVisibleAppliedForumTags(arg1, arg2) {
        var5 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot31;
        var8 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var3 = var4[var3];
        var4 = undefined;
        var11 = var8.bind(var4)(var3);
        var10 = var11.useStateFromStores;
        var3 = _closure1_slot9;
        var9 = new Array(1);
        var9[0] = var3;
        var8 = new Array(1);
        var8[0] = var5;
        var3 = function() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var5 = _closure2_slot0;
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                if(var5) { _fun0033_ip = 117; continue _fun0033 }
case 64:
                var4 = _closure2_slot0;
                var1 = var4.parent_id;
case 117:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3 = var10.bind(var11)(var9, var3, var8);
        var6 = var6.bind(var4)(var3);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var4 = _closure2_slot1;
                var3 = var4.filter;
                var1 = function(arg1) {
                    var3 = _closure2_slot2;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var1);
                var5 = _closure2_slot0;
                var3 = null;
                var1 = var4;
                if(!(var3 != var5)) { _fun0034_ip = 118; continue _fun0034 }
case 18:
                var3 = _closure2_slot0;
                var2 = var3.isModeratorReportChannel;
                var2 = var2.bind(var3)();
                var1 = var4;
                if(!var2) { _fun0034_ip = 118; continue _fun0034 }
case 59:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 25;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.sortedModeratorReportTags;
                var1 = var2.bind(var3)(var4);
case 118:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useVisibleAppliedForumTags'] = var7;
    var3['useCanSearchForumPosts'] = var6;
    var6 = function useCanViewArchivedPosts(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot12;
            var3 = var4.can;
            var1 = _closure1_slot23;
            var2 = var1.READ_MESSAGE_HISTORY;
            var1 = _closure2_slot0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanViewArchivedPosts'] = var6;
    var6 = function useForumSearchQuery(arg1) {
        var2 = arg1;
        var2 = var2.channelId;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot18;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0035_ip = 54; continue _fun0035 }
case 90:
                var4 = _closure1_slot18;
                var3 = var4.getSearchQuery;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
case 54:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useForumSearchQuery'] = var6;
    var3['useForumSearchState'] = var5;
    var5 = function useHasForumSearchQuery(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot18;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot18;
            var2 = var3.getSearchQuery;
            var1 = _closure2_slot0;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useHasForumSearchQuery'] = var5;
    var5 = function useAutomaticForumSearch(arg1, arg2, arg3) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var11 = arg1;
            var7 = arg2;
            var6 = arg3;
            var10 = arguments[3];
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var6;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0036_ip = 65; continue _fun0036 }
case 29:
            var10 = false;
case 65:
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var1;
            var _closure2_slot8 = var1;
            var5 = _closure1_slot33;
            var4 = {};
            var8 = var11.id;
            var4['channelId'] = var8;
            var4 = var5.bind(var1)(var4);
            var9 = var4.isSearchLoading;
            _closure2_slot4 = var9;
            var8 = var4.searchQuery;
            _closure2_slot5 = var8;
            var4 = _closure1_slot32;
            var12 = var4.bind(var1)(var11);
            _closure2_slot6 = var12;
            var13 = _closure1_slot4;
            var5 = var13.useRef;
            var4 = null;
            var4 = var5.bind(var13)(var4);
            _closure2_slot7 = var4;
            var13 = _closure1_slot4;
            var5 = var13.useRef;
            var4 = global;
            var4 = var4.Set;
            var14 = var4.prototype;
            var14 = Object.create(var14, {constructor: {value: var4}});
            var17 = var14;
            var4 = new var17[var4](var16);
            var4 = var4 instanceof Object ? var4 : var14;
            var4 = var5.bind(var13)(var4);
            _closure2_slot8 = var4;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(8);
            var3[0] = var12;
            var12 = var11.guild_id;
            var3[1] = var12;
            var11 = var11.id;
            var3[2] = var11;
            var3[3] = var10;
            var3[4] = var9;
            var3[5] = var8;
            var3[6] = var7;
            var3[7] = var6;
            var2 = function() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0037_ip = 51; continue _fun0037 }
case 48:
                    var4 = _closure2_slot7;
                    var4 = var4.current;
                    if(!(var3 == var4)) { _fun0037_ip = 119; continue _fun0037 }
case 51:
                    var4 = _closure2_slot5;
                    if(!(var3 != var4)) { _fun0037_ip = 88; continue _fun0037 }
case 120:
                    var4 = _closure2_slot5;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0037_ip = 88; continue _fun0037 }
case 108:
                    var4 = _closure2_slot3;
                    if(var4) { _fun0037_ip = 88; continue _fun0037 }
case 71:
                    var4 = _closure2_slot6;
                    if(var4) { _fun0037_ip = 121; continue _fun0037 }
case 122:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 36;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.clearForumSearch;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    _fun0037_ip = 88; continue _fun0037;
case 121:
                    var4 = _closure2_slot7;
                    var5 = var4.current;
                    var4 = _closure2_slot5;
                    if(!(var5 === var4)) { _fun0037_ip = 123; continue _fun0037 }
case 124:
                    var4 = _closure2_slot8;
                    var5 = var4.current;
                    var4 = _closure2_slot1;
                    if(!(var5 !== var4)) { _fun0037_ip = 88; continue _fun0037 }
case 123:
                    var4 = _closure2_slot4;
                    if(var4) { _fun0037_ip = 88; continue _fun0037 }
case 68:
                    var4 = global;
                    var7 = var4.setTimeout;
                    var5 = _closure1_slot3;
                    var6 = undefined;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0038_ip = 121; continue _fun0038 }
case 125:
                                var4 = _closure2_slot7;
                                var3 = _closure2_slot5;
                                var4['current'] = var3;
                                var4 = _closure2_slot8;
                                var3 = _closure2_slot1;
                                var4['current'] = var3;
case 54: // try_start_0
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 36;
                                var4 = var4[var3];
                                var3 = undefined;
                                var8 = var5.bind(var3)(var4);
                                var7 = var8.searchForumPosts;
                                var3 = _closure2_slot0;
                                var13 = var3.guild_id;
                                var12 = var3.id;
                                var11 = _closure2_slot5;
                                var10 = _closure2_slot1;
                                var9 = _closure2_slot2;
                                var14 = var8;
                                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                                SaveGenerator(address=106);
case 8:
                                return var2;
case 126:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0038_ip = 127; continue _fun0038 }
case 128: // try_end0
                                _fun0038_ip = 129; continue _fun0038;
case 127:
                                return var2;
case 25: // catch_target0
                                CatchBlockStart(arg_register=1);
case 129:
                                var2 = undefined;
                                return var2;
case 121:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = 350;
                    var4 = var7.bind(var6)(var5, var4);
                    var _closure3_slot0 = var4;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
case 88:
                    var1 = undefined;
                    return var1;
case 119:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 36;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.clearForumSearch;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot7;
                    var2['current'] = var3;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useAutomaticForumSearch'] = var5;
    var3['useUnreadThreadsCountForParent'] = var4;
    var2 = function useForumActiveThreadIds(arg1) {
        var1 = arg1;
        var7 = var1.channel;
        var _closure2_slot0 = var7;
        var3 = var1.sortOrder;
        var _closure2_slot1 = var3;
        var3 = var1.tagFilter;
        var _closure2_slot2 = var3;
        var3 = var1.tagSetting;
        var _closure2_slot3 = var3;
        var10 = var1.shouldAutomaticallyAck;
        var _closure2_slot4 = var10;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var6 = 20;
        var1 = var11[var6];
        var8 = undefined;
        var13 = var9.bind(var8)(var1);
        var12 = var13.useStateFromStoresArray;
        var5 = _closure1_slot15;
        var4 = new Array(1);
        var4[0] = var5;
        var1 = function() {
            var6 = _closure1_slot15;
            var5 = var6.getThreadIds;
            var2 = _closure2_slot0;
            var10 = var2.id;
            var9 = _closure2_slot1;
            var8 = _closure2_slot2;
            var7 = _closure2_slot3;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var1 = var12.bind(var13)(var4, var1);
        var13 = _closure1_slot34;
        var12 = var7.guild_id;
        var4 = var7.id;
        var4 = var13.bind(var8)(var12, var4);
        var _closure2_slot5 = var4;
        var6 = var11[var6];
        var9 = var9.bind(var8)(var6);
        var8 = var9.useStateFromStores;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = new Array(2);
        var5[0] = var10;
        var5[1] = var4;
        var4 = function() {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var1 = _closure2_slot4;
                if(!var1) { _fun0039_ip = 7; continue _fun0039 }
case 85:
                var3 = _closure2_slot5;
                var2 = 0;
                var2 = var3 > var2;
                if(var2) { _fun0039_ip = 120; continue _fun0039 }
case 116:
                var4 = _closure1_slot15;
                var3 = var4.getCanAckThreads;
                var2 = var3.bind(var4)();
case 120:
                var1 = var2;
case 7:
                return var1;
            }
        };
        var6 = var8.bind(var9)(var6, var4, var5);
        var _closure2_slot6 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var2 = _closure2_slot6;
                if(!var2) { _fun0040_ip = 63; continue _fun0040 }
case 85:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 37;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.ackChannel;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = _closure1_slot21;
                var6 = var6.ACK_FORUM_ACTIVE_THREADS;
                var1['object'] = var6;
                var5 = _closure1_slot20;
                var5 = var5.ACK_AUTOMATIC;
                var1['objectType'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 63:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useForumActiveThreadIds'] = var2;
    return var1;
})();