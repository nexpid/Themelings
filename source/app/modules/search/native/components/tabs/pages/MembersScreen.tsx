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
case 0:
            var2 = arg1;
            var14 = var2.searchContext;
            var _closure2_slot0 = var14;
            var8 = var2.guildId;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot19;
            var5 = undefined;
            var9 = var3.bind(var5)();
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 15;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var3 = var3.analyticsLocations;
            var _closure2_slot2 = var3;
            var4 = _closure1_slot0;
            var7 = 16;
            var7 = var6[var7];
            var10 = var4.bind(var5)(var7);
            var7 = var10.getSearchContextId;
            var7 = var7.bind(var10)(var14);
            var _closure2_slot3 = var7;
            var7 = 14;
            var10 = var6[var7];
            var13 = var4.bind(var5)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot11;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getResults;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var12.bind(var13)(var11, var10);
            var _closure2_slot4 = var20;
            var10 = function useMemberScreenChannelId(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.useStateFromStores;
                    var3 = _closure1_slot12;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = new Array(1);
                    var3[0] = var7;
                    var1 = function() {
                        var3 = _closure1_slot12;
                        var2 = var3.getChannelIds;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var5.bind(var6)(var4, var1, var3);
                    var1 = var6.size;
                    var4 = 0;
                    if(!(var4 !== var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = var6.size;
                    var3 = 1;
                    var1 = null;
                    if(!(var3 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = global;
                    var5 = var3.Array;
                    var3 = var5.from;
                    var3 = var3.bind(var5)(var6);
                    var1 = var3[var4];
case 4:
                    _fun0002_ip = 6; continue _fun0002;
case 2:
                    var1 = _closure1_slot6;
case 6:
                    return var1;
                }
            };
            var17 = var10.bind(var5)(var14);
            var _closure2_slot5 = var17;
            var10 = var6[var7];
            var13 = var4.bind(var5)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var12.bind(var13)(var11, var10);
            var _closure2_slot6 = var15;
            var10 = 17;
            var10 = var6[var10];
            var12 = var4.bind(var5)(var10);
            var11 = var12.useFullscreenPlaceholderCount;
            var10 = {};
            var13 = _closure1_slot13;
            var10['placeholderHeight'] = var13;
            var13 = 1;
            var10['numColumns'] = var13;
            var16 = var11.bind(var12)(var10);
            var _closure2_slot7 = var16;
            var10 = var6[var7];
            var13 = var4.bind(var5)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 != var4;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var3 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 18;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getGuildVisualOwnerId;
                    var1 = var2.bind(var3)(var4);
case 7:
                    return var1;
                }
            };
            var18 = var12.bind(var13)(var11, var10);
            var _closure2_slot8 = var18;
            var10 = var6[var7];
            var13 = var4.bind(var5)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot5;
                    var3 = _closure1_slot6;
                    if(!(var4 !== var3)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot5;
                    var3 = var3.bind(var4)(var2);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = var3.isAnnouncementThread;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = var3.parent_id;
                    if(!(var4 == var2)) { _fun0004_ip = 15; continue _fun0004 }
case 13:
                    var2 = _closure2_slot5;
                    _fun0004_ip = 16; continue _fun0004;
case 15:
                    var2 = var3.parent_id;
case 16:
                    _fun0004_ip = 17; continue _fun0004;
case 11:
                    var2 = _closure2_slot5;
case 17:
                    return var2;
case 9:
                    var1 = _closure2_slot5;
                    return var1;
                }
            };
            var10 = var12.bind(var13)(var11, var10);
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var11 = new Array(4);
            var11[0] = var14;
            var11[1] = var17;
            var11[2] = var15;
            var11[3] = var3;
            var3 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 19;
                    var2 = var7[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissGlobalKeyboard;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var2 = 20;
                    var2 = var7[var2];
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.trackSearchResultClicked;
                    var2 = {};
                    var10 = _closure2_slot0;
                    var2['searchContext'] = var10;
                    var10 = var6.id;
                    var2['userId'] = var10;
                    var10 = arg2;
                    var2['index'] = var10;
                    var10 = _closure1_slot15;
                    var10 = var10.USER;
                    var2['entityType'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = 21;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var6 = var6.id;
                    var2['userId'] = var6;
                    var6 = _closure2_slot5;
                    var5 = _closure1_slot6;
                    if(!(var6 === var5)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var5 = _closure2_slot6;
                    _fun0005_ip = 20; continue _fun0005;
case 18:
                    var5 = _closure2_slot5;
case 20:
                    var2['channelId'] = var5;
                    var4 = _closure2_slot2;
                    var2['sourceAnalyticsLocations'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var17 = var12.bind(var13)(var3, var11);
            var _closure2_slot9 = var17;
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var11 = new Array(1);
            var11[0] = var14;
            var3 = function(arg1) {
                var1 = arg1;
                var8 = var1.user;
                var7 = var1.index;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 20;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.trackSearchResultClicked;
                var3 = {};
                var9 = _closure2_slot0;
                var3['searchContext'] = var9;
                var8 = var8.id;
                var3['userId'] = var8;
                var3['index'] = var7;
                var7 = _closure1_slot15;
                var7 = var7.USER;
                var3['entityType'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot0;
                var2 = 19;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var12 = var12.bind(var13)(var3, var11);
            var15 = _closure1_slot4;
            var13 = var15.useCallback;
            var11 = new Array(1);
            var11[0] = var17;
            var3 = function(arg1) {
                var1 = arg1;
                var4 = var1.user;
                var3 = var1.index;
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var11 = var13.bind(var15)(var3, var11);
            var3 = var6[var7];
            var21 = var4.bind(var5)(var3);
            var19 = var21.useStateFromStores;
            var3 = _closure1_slot12;
            var15 = new Array(1);
            var15[0] = var3;
            var13 = new Array(1);
            var13[0] = var14;
            var3 = function() {
                var3 = _closure1_slot12;
                var2 = var3.isInitialSearchQuery;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var19.bind(var21)(var15, var3, var13);
            var _closure2_slot10 = var3;
            var7 = var6[var7];
            var19 = var4.bind(var5)(var7);
            var15 = var19.useStateFromStores;
            var7 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getIsFetching;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var15.bind(var19)(var13, var7);
            var _closure2_slot11 = var19;
            var21 = _closure1_slot4;
            var15 = var21.useEffect;
            var13 = new Array(3);
            var13[0] = var20;
            var13[1] = var3;
            var13[2] = var19;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0006_ip = 21; continue _fun0006 }
case 23:
                    var1 = _closure2_slot4;
                    var6 = var1.length;
                    var1 = 0;
                    if(!(!(var6 > var1))) { _fun0006_ip = 24; continue _fun0006 }
case 8:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 22;
                    var2 = var7[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var7[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.tuL9TW;
                    var3 = var2.bind(var3)(var1);
                    _fun0006_ip = 25; continue _fun0006;
case 24:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 22;
                    var4 = var8[var1];
                    var2 = undefined;
                    var4 = var7.bind(var2)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var8[var1];
                    var1 = var7.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.ZGVL3g;
                    var1 = {};
                    var1['count'] = var6;
                    var3 = var4.bind(var5)(var2, var1);
case 25:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var2 = var1.AccessibilityAnnouncer;
                    var1 = var2.announce;
                    var1 = var1.bind(var2)(var3);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var15.bind(var21)(var7, var13);
            var15 = _closure1_slot4;
            var13 = var15.useMemo;
            var7 = new Array(7);
            var7[0] = var20;
            var7[1] = var19;
            var7[2] = var3;
            var7[3] = var8;
            var7[4] = var18;
            var7[5] = var17;
            var7[6] = var16;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot4;
                    var3 = var4.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var10 = arg1;
                            var8 = arg2;
                            var _closure4_slot0 = var8;
                            var5 = _closure1_slot8;
                            var4 = var5.getMember;
                            var3 = _closure2_slot1;
                            var2 = var10.record;
                            var2 = var2.id;
                            var13 = var4.bind(var5)(var3, var2);
                            var4 = _closure3_slot0;
                            var3 = var4.push;
                            var2 = {};
                            var5 = _closure1_slot14;
                            var5 = var5.GUILD_CHANNEL_MEMBER;
                            var2['type'] = var5;
                            var5 = {};
                            var1 = _closure1_slot16;
                            var1 = var1.NONE;
                            var5['type'] = var1;
                            var1 = var10.record;
                            var5['user'] = var1;
                            var11 = null;
                            var12 = var11 == var13;
                            var1 = undefined;
                            var6 = undefined;
                            if(var12) { _fun0008_ip = 2; continue _fun0008 }
case 26:
                            var6 = var13.nick;
case 2:
                            var5['nickname'] = var6;
                            var12 = var11 == var13;
                            var6 = undefined;
                            if(var12) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                            var6 = var13.colorString;
case 27:
                            var5['usernameColor'] = var6;
                            var12 = var11 == var13;
                            var6 = undefined;
                            if(var12) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                            var6 = var13.colorStrings;
case 29:
                            var5['roleColors'] = var6;
                            var6 = true;
                            var5['isNameplatedRow'] = var6;
                            var14 = var11 == var13;
                            var12 = undefined;
                            if(var14) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                            var12 = var13.premiumSince;
case 31:
                            var13 = var11 != var12;
                            var11 = undefined;
                            if(!var13) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                            var11 = var12;
case 33:
                            var5['premiumSince'] = var11;
                            var11 = _closure2_slot8;
                            var10 = var10.record;
                            var10 = var10.id;
                            var10 = var11 === var10;
                            var5['isOwner'] = var10;
                            var10 = _closure2_slot1;
                            var5['guildId'] = var10;
                            var10 = function onLongPress(arg1) {
                                var4 = _closure2_slot9;
                                var3 = _closure4_slot0;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var4.bind(var2)(var1, var3);
                                return var1;
                            };
                            var5['onLongPress'] = var10;
                            var9 = function onPress(arg1) {
                                var4 = _closure2_slot9;
                                var3 = _closure4_slot0;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var4.bind(var2)(var1, var3);
                                return var1;
                            };
                            var5['onPress'] = var9;
                            var9 = 0;
                            var9 = var9 === var8;
                            var5['start'] = var9;
                            var7 = _closure2_slot4;
                            var9 = var7.length;
                            var7 = 1;
                            var7 = var9 - var7;
                            var7 = var8 === var7;
                            var5['end'] = var7;
                            var5['canShowDisplayNameStylesFont'] = var6;
                            var2['props'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot11;
                    if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var3 = var1.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0007_ip = 37; continue _fun0007 }
case 35:
                    var2 = _closure2_slot7;
                    var6 = 0;
                    var2 = var6 < var2;
                    var4 = global;
                    var3 = 'guild-channel-member-placeholder-';
                    if(!var2) { _fun0007_ip = 37; continue _fun0007 }
case 17:
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
                    var2 = _closure2_slot7;
                    if(var6 < var2) { _fun0007_ip = 17; continue _fun0007 }
case 37:
                    return var1;
                }
            };
            var7 = var13.bind(var15)(var1, var7);
            var1 = 24;
            var1 = var6[var1];
            var13 = var4.bind(var5)(var1);
            var1 = var13.useContentContainerStyles;
            var13 = var1.bind(var13)();
            var1 = 25;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var4 = var6.useMessageTabCountsErrorText;
            var1 = {};
            var1['searchContext'] = var14;
            var6 = var4.bind(var6)(var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            if(!var3) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            if(!(var1 == var10)) { _fun0001_ip = 43; continue _fun0001 }
case 41:
            var4 = _closure1_slot18;
            var3 = _closure1_slot1;
            var14 = _closure1_slot3;
            var1 = 28;
            var1 = var14[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var13 = var13.membersContentContainer;
            var1['contentContainerStyle'] = var13;
            var1['data'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 44; continue _fun0001;
case 43:
            var7 = _closure1_slot18;
            var4 = _closure1_slot1;
            var13 = _closure1_slot3;
            var3 = 27;
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
            var3['canShowDisplayNameStylesFont'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 44:
            _fun0001_ip = 45; continue _fun0001;
case 39:
            var4 = _closure1_slot18;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 26;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 45:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function ThreadMembersScreen(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var7 = var2.searchContext;
            var _closure2_slot0 = var7;
            var8 = var2.channelId;
            var _closure2_slot1 = var8;
            var6 = var2.guildId;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var4 = 14;
            var3 = var10[var4];
            var5 = undefined;
            var13 = var9.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot1;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                    var3 = var4.isAnnouncementThread;
                    var2 = var3.bind(var4)();
case 46:
                    var1 = var1 != var2;
                    if(!var1) { _fun0010_ip = 14; continue _fun0010 }
case 48:
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var11, var3);
            var4 = var10[var4];
            var11 = var9.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot12;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = _closure1_slot12;
                    var4 = var5.isInitialSearchQuery;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                    var4 = _closure1_slot12;
                    var3 = var4.isTagsEmpty;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 49:
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var9, var1, var4);
            if(var3) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            if(!var1) { _fun0009_ip = 51; continue _fun0009 }
case 53:
            var4 = _closure1_slot18;
            var3 = _closure1_slot1;
            var10 = _closure1_slot3;
            var1 = 29;
            var1 = var10[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['channelId'] = var8;
            var1['guildId'] = var6;
            var9 = _closure1_slot0;
            var8 = 19;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.dismissGlobalKeyboard;
            var1['onUserPress'] = var8;
            var8 = true;
            var1['disableStickySections'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0009_ip = 54; continue _fun0009;
case 51:
            var4 = _closure1_slot18;
            var3 = _closure1_slot20;
            var2 = {};
            var2['searchContext'] = var7;
            var2['guildId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 54:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot13 = var8;
    var4 = var4.SearchListItemTypes;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchResultContentEntityTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.RelationshipTypes;
    var _closure1_slot16 = var8;
    var4 = var4.SearchTypes;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'flexGrow': 1};
    var4['container'] = var10;
    var10 = {};
    var11 = 'transparent';
    var10['backgroundColor'] = var11;
    var4['userList'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function MembersScreen(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var14 = var1.searchContext;
            var1 = _closure1_slot19;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 15;
            var2 = var6[var1];
            var3 = var5.bind(var4)(var2);
            var2 = 30;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.SEARCH_MEMBERS;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var3 = var14.type;
            var2 = _closure1_slot17;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0012_ip = 55; continue _fun0012 }
case 56:
            var2 = _closure1_slot17;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0012_ip = 57; continue _fun0012 }
case 58:
            var2 = _closure1_slot17;
            var2 = var2.GUILD_CHANNEL;
            if(!(var2 !== var3)) { _fun0012_ip = 59; continue _fun0012 }
case 60:
            var2 = _closure1_slot17;
            var2 = var2.GUILD;
            if(!(var2 !== var3)) { _fun0012_ip = 59; continue _fun0012 }
case 53:
            var2 = global;
            var6 = var2.Error;
            var7 = var14.type;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '[MembersScreen] Unsupported search context type: ';
            var16 = var3.bind(var2)(var7);
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var17 = var3;
            var2 = new var17[var6](var16, var15);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 59:
            var6 = _closure1_slot18;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var1];
            var2 = var3.bind(var4)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var5;
            var10 = _closure1_slot18;
            var9 = _closure1_slot20;
            var7 = {};
            var7['searchContext'] = var14;
            var12 = var14.guildId;
            var7['guildId'] = var12;
            var7 = var10.bind(var4)(var9, var7);
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 57:
            var6 = _closure1_slot18;
            var3 = _closure1_slot21;
            var2 = {};
            var2['searchContext'] = var14;
            var7 = var14.channelId;
            var2['channelId'] = var7;
            var7 = var14.guildId;
            var2['guildId'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 55:
            var3 = _closure1_slot18;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var11.container;
            var5['style'] = var9;
            var10 = _closure1_slot18;
            var9 = _closure1_slot1;
            var8 = 31;
            var8 = var13[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var14 = var14.channelId;
            var8['channelId'] = var14;
            var14 = true;
            var8['disableStickySections'] = var14;
            var11 = var11.userList;
            var8['listStyleOverride'] = var11;
            var11 = 19;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.dismissGlobalKeyboard;
            var8['onUserPress'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/MembersScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();