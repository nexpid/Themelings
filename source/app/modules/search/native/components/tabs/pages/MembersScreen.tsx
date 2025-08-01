// app/modules/search/native/components/tabs/pages/MembersScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function SearchableMembersScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.searchContext;
            var _closure2_slot0 = var15;
            var8 = var2.guildId;
            var _closure2_slot1 = var8;
            var7 = var2.onViewableItemsChanged;
            var3 = _closure1_slot18;
            var5 = undefined;
            var9 = var3.bind(var5)();
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 12;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var3 = var3.analyticsLocations;
            var _closure2_slot2 = var3;
            var4 = _closure1_slot0;
            var13 = 13;
            var10 = var6[var13];
            var11 = var4.bind(var5)(var10);
            var10 = var11.useMemberSearchTabResults;
            var21 = var10.bind(var11)();
            var _closure2_slot3 = var21;
            var10 = function useMemberScreenChannelId(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot11;
                    var4 = var5.useState;
                    var3 = arg1;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.getChannelIds;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = var4.bind(var5)(var3, var1);
                    var1 = var6.size;
                    var4 = 0;
                    if(!(var4 !== var1)) { _fun0002_ip = 79; continue _fun0002 }
 41:
                    var5 = var6.size;
                    var3 = 1;
                    var1 = null;
                    if(!(var3 === var5)) { _fun0002_ip = 77; continue _fun0002 }
 55:
                    var3 = global;
                    var5 = var3.Array;
                    var3 = var5.from;
                    var3 = var3.bind(var5)(var6);
                    var1 = var3[var4];
 77:
                    _fun0002_ip = 83; continue _fun0002;
 79:
                    var1 = _closure1_slot6;
 83:
                    return var1;
                }
            };
            var18 = var10.bind(var5)(var15);
            var _closure2_slot4 = var18;
            var10 = 14;
            var11 = var6[var10];
            var16 = var4.bind(var5)(var11);
            var14 = var16.useStateFromStores;
            var11 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var14.bind(var16)(var12, var11);
            var _closure2_slot5 = var16;
            var11 = 15;
            var11 = var6[var11];
            var14 = var4.bind(var5)(var11);
            var12 = var14.useFullscreenPlaceholderCount;
            var11 = {};
            var17 = _closure1_slot13;
            var11['placeholderHeight'] = var17;
            var17 = 1;
            var11['numColumns'] = var17;
            var17 = var12.bind(var14)(var11);
            var _closure2_slot6 = var17;
            var11 = var6[var10];
            var19 = var4.bind(var5)(var11);
            var14 = var19.useStateFromStores;
            var11 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 != var4;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 68; continue _fun0003 }
 37:
                    var3 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 16;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getGuildVisualOwnerId;
                    var1 = var2.bind(var3)(var4);
 68:
                    return var1;
                }
            };
            var19 = var14.bind(var19)(var12, var11);
            var _closure2_slot7 = var19;
            var10 = var6[var10];
            var14 = var4.bind(var5)(var10);
            var12 = var14.useStateFromStores;
            var10 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot4;
                    var3 = _closure1_slot6;
                    if(!(var4 !== var3)) { _fun0004_ip = 85; continue _fun0004 }
 18:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot4;
                    var3 = var3.bind(var4)(var2);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 79; continue _fun0004 }
 42:
                    var2 = var3.isAnnouncementThread;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0004_ip = 65; continue _fun0004 }
 55:
                    var2 = var3.parent_id;
                    if(!(var4 == var2)) { _fun0004_ip = 71; continue _fun0004 }
 65:
                    var2 = _closure2_slot4;
                    _fun0004_ip = 77; continue _fun0004;
 71:
                    var2 = var3.parent_id;
 77:
                    _fun0004_ip = 83; continue _fun0004;
 79:
                    var2 = _closure2_slot4;
 83:
                    return var2;
 85:
                    var1 = _closure2_slot4;
                    return var1;
                }
            };
            var10 = var12.bind(var14)(var11, var10);
            var14 = _closure1_slot4;
            var12 = var14.useCallback;
            var11 = new Array(5);
            var11[0] = var15;
            var20 = var21.length;
            var11[1] = var20;
            var11[2] = var18;
            var11[3] = var16;
            var11[4] = var3;
            var3 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 17;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var2 = var4.dismissGlobalKeyboard;
                    var2 = var2.bind(var4)();
                    var2 = 18;
                    var2 = var7[var2];
                    var8 = var3.bind(var1)(var2);
                    var3 = var8.trackSearchResultClicked;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var2['searchContext'] = var9;
                    var9 = var6.id;
                    var2['userId'] = var9;
                    var9 = arg2;
                    var2['index'] = var9;
                    var9 = _closure2_slot3;
                    var9 = var9.length;
                    var2['totalSearchResults'] = var9;
                    var2 = var3.bind(var8)(var2);
                    var3 = _closure1_slot1;
                    var2 = 19;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var6 = var6.id;
                    var2['userId'] = var6;
                    var6 = _closure2_slot4;
                    var5 = _closure1_slot6;
                    if(!(var6 === var5)) { _fun0005_ip = 150; continue _fun0005 }
 144:
                    var5 = _closure2_slot5;
                    _fun0005_ip = 154; continue _fun0005;
 150:
                    var5 = _closure2_slot4;
 154:
                    var2['channelId'] = var5;
                    var4 = _closure2_slot2;
                    var2['sourceAnalyticsLocations'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var18 = var12.bind(var14)(var3, var11);
            var _closure2_slot8 = var18;
            var14 = _closure1_slot4;
            var12 = var14.useCallback;
            var11 = new Array(1);
            var11[0] = var15;
            var3 = function(arg1) {
                var1 = arg1;
                var8 = var1.user;
                var7 = var1.index;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 18;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.trackSearchResultClicked;
                var2 = {};
                var9 = _closure2_slot0;
                var2['searchContext'] = var9;
                var8 = var8.id;
                var2['userId'] = var8;
                var2['index'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = 17;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var12 = var12.bind(var14)(var3, var11);
            var16 = _closure1_slot4;
            var14 = var16.useCallback;
            var11 = new Array(1);
            var11[0] = var18;
            var3 = function(arg1) {
                var1 = arg1;
                var4 = var1.user;
                var3 = var1.index;
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var11 = var14.bind(var16)(var3, var11);
            var16 = _closure1_slot11;
            var14 = var16.useState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var14.bind(var16)(var15, var3);
            var _closure2_slot9 = var3;
            var13 = var6[var13];
            var14 = var4.bind(var5)(var13);
            var13 = var14.useIsMemberSearchTabFetching;
            var20 = var13.bind(var14)();
            var _closure2_slot10 = var20;
            var16 = _closure1_slot4;
            var14 = var16.useMemo;
            var13 = new Array(7);
            var13[0] = var21;
            var13[1] = var20;
            var13[2] = var3;
            var13[3] = var8;
            var13[4] = var19;
            var13[5] = var18;
            var13[6] = var17;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot3;
                    var3 = var4.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var9 = arg1;
                            var7 = arg2;
                            var _closure4_slot0 = var7;
                            var5 = _closure1_slot8;
                            var4 = var5.getMember;
                            var3 = _closure2_slot1;
                            var2 = var9.record;
                            var2 = var2.id;
                            var12 = var4.bind(var5)(var3, var2);
                            var4 = _closure3_slot0;
                            var3 = var4.push;
                            var2 = {};
                            var5 = _closure1_slot14;
                            var5 = var5.GUILD_CHANNEL_MEMBER;
                            var2['type'] = var5;
                            var5 = {};
                            var1 = _closure1_slot15;
                            var1 = var1.NONE;
                            var5['type'] = var1;
                            var1 = var9.record;
                            var5['user'] = var1;
                            var10 = null;
                            var13 = var10 == var12;
                            var1 = undefined;
                            var11 = undefined;
                            if(var13) { _fun0007_ip = 122; continue _fun0007 }
 116:
                            var11 = var12.nick;
 122:
                            var5['nickname'] = var11;
                            var13 = var10 == var12;
                            var11 = undefined;
                            if(var13) { _fun0007_ip = 142; continue _fun0007 }
 136:
                            var11 = var12.colorString;
 142:
                            var5['usernameColor'] = var11;
                            var13 = var10 == var12;
                            var11 = undefined;
                            if(var13) { _fun0007_ip = 162; continue _fun0007 }
 156:
                            var11 = var12.colorStrings;
 162:
                            var5['roleColors'] = var11;
                            var11 = true;
                            var5['isNameplatedRow'] = var11;
                            var13 = var10 == var12;
                            var11 = undefined;
                            if(var13) { _fun0007_ip = 189; continue _fun0007 }
 183:
                            var11 = var12.premiumSince;
 189:
                            var12 = var10 != var11;
                            var10 = undefined;
                            if(!var12) { _fun0007_ip = 201; continue _fun0007 }
 198:
                            var10 = var11;
 201:
                            var5['premiumSince'] = var10;
                            var10 = _closure2_slot7;
                            var9 = var9.record;
                            var9 = var9.id;
                            var9 = var10 === var9;
                            var5['isOwner'] = var9;
                            var9 = _closure2_slot1;
                            var5['guildId'] = var9;
                            var9 = function onLongPress(arg1) {
                                var4 = _closure2_slot8;
                                var3 = _closure4_slot0;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var4.bind(var2)(var1, var3);
                                return var1;
                            };
                            var5['onLongPress'] = var9;
                            var8 = function onPress(arg1) {
                                var4 = _closure2_slot8;
                                var3 = _closure4_slot0;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var4.bind(var2)(var1, var3);
                                return var1;
                            };
                            var5['onPress'] = var8;
                            var8 = 0;
                            var8 = var8 === var7;
                            var5['start'] = var8;
                            var6 = _closure2_slot3;
                            var8 = var6.length;
                            var6 = 1;
                            var6 = var8 - var6;
                            var6 = var7 === var6;
                            var5['end'] = var6;
                            var2['props'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot10;
                    if(var2) { _fun0006_ip = 59; continue _fun0006 }
 41:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0006_ip = 140; continue _fun0006 }
 48:
                    var3 = var1.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0006_ip = 140; continue _fun0006 }
 59:
                    var2 = _closure2_slot6;
                    var6 = 0;
                    var2 = var6 < var2;
                    var4 = global;
                    var3 = 'guild-channel-member-placeholder-';
                    if(!var2) { _fun0006_ip = 140; continue _fun0006 }
 83:
                    var8 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot14;
                    var9 = var9.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
                    var2['type'] = var9;
                    var9 = var4.HermesInternal;
                    var9 = var9.concat;
                    var9 = var9.bind(var3)(var6);
                    var2['key'] = var9;
                    var2 = var8.bind(var1)(var2);
                    var6 = var6 + 1;
                    var2 = _closure2_slot6;
                    if(var6 < var2) { _fun0006_ip = 83; continue _fun0006 }
 140:
                    return var1;
                }
            };
            var13 = var14.bind(var16)(var1, var13);
            var1 = 20;
            var1 = var6[var1];
            var14 = var4.bind(var5)(var1);
            var1 = var14.useContentContainerStyles;
            var14 = var1.bind(var14)();
            var1 = 21;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var4 = var6.useMessageTabCountsErrorText;
            var1 = {};
            var1['searchContext'] = var15;
            var6 = var4.bind(var6)(var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 721; continue _fun0001 }
 576:
            if(!var3) { _fun0001_ip = 583; continue _fun0001 }
 579:
            if(!(var1 == var10)) { _fun0001_ip = 646; continue _fun0001 }
 583:
            var4 = _closure1_slot17;
            var3 = _closure1_slot1;
            var15 = _closure1_slot3;
            var1 = 24;
            var1 = var15[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var14 = var14.membersContentContainer;
            var1['contentContainerStyle'] = var14;
            var14 = _closure1_slot12;
            var1['estimatedItemSize'] = var14;
            var1['data'] = var13;
            var1['onViewableItemsChanged'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 719; continue _fun0001;
 646:
            var7 = _closure1_slot17;
            var4 = _closure1_slot1;
            var13 = _closure1_slot3;
            var3 = 23;
            var3 = var13[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['onUserPress'] = var12;
            var3['onUserLongPress'] = var11;
            var3['channelId'] = var10;
            var3['guildId'] = var8;
            var8 = true;
            var3['disableStickySections'] = var8;
            var9 = var9.userList;
            var3['listStyleOverride'] = var9;
            var3['isNameplatedList'] = var8;
            var1 = var7.bind(var5)(var4, var3);
 719:
            _fun0001_ip = 757; continue _fun0001;
 721:
            var4 = _closure1_slot17;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 22;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 757:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function ThreadMembersScreen(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var8 = var2.searchContext;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var7 = var2.guildId;
            var6 = var2.onViewableItemsChanged;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 14;
            var3 = var5[var3];
            var5 = undefined;
            var11 = var4.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0009_ip = 45; continue _fun0009 }
 35:
                    var3 = var4.isAnnouncementThread;
                    var2 = var3.bind(var4)();
 45:
                    var1 = var1 != var2;
                    if(!var1) { _fun0009_ip = 55; continue _fun0009 }
 52:
                    var1 = var2;
 55:
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var4, var3);
            var10 = _closure1_slot11;
            var4 = var10.useState;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var1 = var3.isInitialSearchQuery;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0010_ip = 29; continue _fun0010 }
 16:
                    var2 = var3.isTagsEmpty;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
 29:
                    return var1;
                }
            };
            var1 = var4.bind(var10)(var8, var1);
            if(var3) { _fun0008_ip = 163; continue _fun0008 }
 111:
            if(!var1) { _fun0008_ip = 163; continue _fun0008 }
 114:
            var4 = _closure1_slot17;
            var3 = _closure1_slot1;
            var10 = _closure1_slot3;
            var1 = 25;
            var1 = var10[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['channelId'] = var9;
            var1['guildId'] = var7;
            var9 = true;
            var1['disableStickySections'] = var9;
            var1 = var4.bind(var5)(var3, var1);
            _fun0008_ip = 193; continue _fun0008;
 163:
            var4 = _closure1_slot17;
            var3 = _closure1_slot19;
            var2 = {};
            var2['searchContext'] = var8;
            var2['guildId'] = var7;
            var2['onViewableItemsChanged'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 193:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var7 = var7.bind(var1)(var4);
    var _closure1_slot4 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EVERYONE_CHANNEL_ID;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot12 = var8;
    var8 = var4.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot13 = var8;
    var4 = var4.SearchListItemTypes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.RelationshipTypes;
    var _closure1_slot15 = var8;
    var4 = var4.SearchTypes;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'flexGrow': 1};
    var4['container'] = var10;
    var10 = {'flex': 1, 'flexGrow': 1};
    var4['searchContainer'] = var10;
    var10 = {};
    var11 = 'transparent';
    var10['backgroundColor'] = var11;
    var4['userList'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function MembersScreen(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var12 = var1.searchContext;
            var7 = var1.onViewableItemsChanged;
            var1 = _closure1_slot18;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 12;
            var2 = var6[var1];
            var3 = var5.bind(var4)(var2);
            var2 = 26;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.SEARCH_MEMBERS;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var3 = var12.type;
            var2 = _closure1_slot16;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0011_ip = 327; continue _fun0011 }
 99:
            var2 = _closure1_slot16;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0011_ip = 281; continue _fun0011 }
 116:
            var2 = _closure1_slot16;
            var2 = var2.GUILD_CHANNEL;
            if(!(var2 !== var3)) { _fun0011_ip = 201; continue _fun0011 }
 130:
            var2 = _closure1_slot16;
            var2 = var2.GUILD;
            if(!(var2 !== var3)) { _fun0011_ip = 201; continue _fun0011 }
 144:
            var2 = global;
            var6 = var2.Error;
            var9 = var12.type;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[MembersScreen] Unsupported search context type: ';
            var16 = var3.bind(var2)(var9);
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var17 = var3;
            var2 = new var17[var6](var16, var15);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
 201:
            var6 = _closure1_slot17;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var1];
            var2 = var3.bind(var4)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var5;
            var13 = _closure1_slot17;
            var10 = _closure1_slot19;
            var9 = {};
            var9['searchContext'] = var12;
            var14 = var12.guildId;
            var9['guildId'] = var14;
            var9['onViewableItemsChanged'] = var7;
            var9 = var13.bind(var4)(var10, var9);
            var2['children'] = var9;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 281:
            var6 = _closure1_slot17;
            var3 = _closure1_slot20;
            var2 = {};
            var2['searchContext'] = var12;
            var9 = var12.channelId;
            var2['channelId'] = var9;
            var9 = var12.guildId;
            var2['guildId'] = var9;
            var2['onViewableItemsChanged'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 327:
            var3 = _closure1_slot17;
            var2 = _closure1_slot0;
            var13 = _closure1_slot3;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot17;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var11.container;
            var5['style'] = var9;
            var10 = _closure1_slot17;
            var9 = _closure1_slot1;
            var8 = 27;
            var8 = var13[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var12 = var12.channelId;
            var8['channelId'] = var12;
            var12 = true;
            var8['disableStickySections'] = var12;
            var11 = var11.userList;
            var8['listStyleOverride'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
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
    var4 = 'modules/search/native/components/tabs/pages/MembersScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();