// app/modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var9 = var6[var4];
    var9 = var5.bind(var1)(var9);
    var10 = var9.EVERYONE_CHANNEL_ID;
    var _closure1_slot7 = var10;
    var9 = var9.MemberListRowTypes;
    var _closure1_slot8 = var9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.RelationshipTypes;
    var _closure1_slot14 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot16 = var8;
    var8 = var4.Fragment;
    var _closure1_slot17 = var8;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = new Array(0);
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function GuildChannelUserList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.searchable;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var5 = false;
 19:
            var3 = var1.searchableEmptyState;
            var29 = var1.channelId;
            var _closure2_slot0 = var29;
            var38 = var1.guildId;
            var _closure2_slot1 = var38;
            var2 = var1.roleId;
            var _closure2_slot2 = var2;
            var20 = var1.headerShown;
            if(!(var20 === var4)) { _fun0001_ip = 65; continue _fun0001 }
 63:
            var20 = true;
 65:
            var32 = var1.onUserPress;
            var _closure2_slot3 = var32;
            var21 = var1.onUserLongPress;
            var _closure2_slot4 = var21;
            var31 = var1.opensUserProfileOnUserPress;
            if(!(var31 === var4)) { _fun0001_ip = 97; continue _fun0001 }
 95:
            var31 = true;
 97:
            var _closure2_slot5 = var31;
            var15 = var1.disableStickySections;
            var14 = var1.inActionSheet;
            var13 = var1.disableThemedGradient;
            var12 = var1.listStyleOverride;
            var11 = var1.disableBottomSafeZone;
            var6 = var1.insetEnd;
            var1 = var1.isNameplatedList;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var18 = _closure1_slot1;
            var19 = _closure1_slot3;
            var8 = 14;
            var8 = var19[var8];
            var8 = var18.bind(var4)(var8);
            var8 = var8.bind(var4)();
            var9 = var8.analyticsLocations;
            _closure2_slot7 = var9;
            var40 = _closure1_slot5;
            var8 = var40.useRef;
            var26 = null;
            var27 = var8.bind(var40)(var26);
            var8 = {};
            var8['guildId'] = var38;
            var8['listRef'] = var27;
            var8['searchable'] = var5;
            var8['searchableEmptyState'] = var3;
            var3 = function useSearchableConfig(arg1) {
                var3 = arg1;
                var2 = var3.guildId;
                var _closure3_slot0 = var2;
                var4 = var3.listRef;
                var _closure3_slot1 = var4;
                var12 = var3.searchable;
                var _closure3_slot2 = var12;
                var11 = var3.searchableEmptyState;
                var _closure3_slot3 = var11;
                var8 = _closure1_slot5;
                var6 = var8.useRef;
                var3 = null;
                var3 = var6.bind(var8)(var3);
                var _closure3_slot4 = var3;
                var6 = var8.useState;
                var7 = '';
                var6 = var6.bind(var8)(var7);
                var17 = _closure1_slot4;
                var16 = undefined;
                var15 = 2;
                var6 = var17.bind(var16)(var6, var15);
                var10 = 0;
                var9 = var6[var10];
                var _closure3_slot5 = var9;
                var14 = 1;
                var6 = var6[var14];
                var _closure3_slot6 = var6;
                var6 = var8.useState;
                var5 = _closure1_slot19;
                var5 = var6.bind(var8)(var5);
                var6 = var17.bind(var16)(var5, var15);
                var5 = var6[var10];
                var _closure3_slot7 = var5;
                var6 = var6[var14];
                var _closure3_slot8 = var6;
                var13 = var8.useState;
                var6 = function() {
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 10;
                    var4 = var3[var1];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    var2 = _closure1_slot0;
                    var1 = var3[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.USER;
                    var4 = new Array(1);
                    var4[0] = var1;
                    var3 = {};
                    var1 = {};
                    var2 = _closure3_slot0;
                    var1['guild'] = var2;
                    var2 = true;
                    var1['strict'] = var2;
                    var3['userFilters'] = var1;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var10 = function(arg1, arg2) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var2 = arg2;
                            var1 = var2.trim;
                            var2 = var1.bind(var2)();
                            var1 = '';
                            if(!(var1 !== var2)) { _fun0002_ip = 40; continue _fun0002 }
 21:
                            var3 = _closure3_slot8;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
                            _fun0002_ip = 61; continue _fun0002;
 40:
                            var3 = _closure3_slot8;
                            var2 = _closure1_slot19;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 61:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = var2;
                    var9 = var4;
                    var8 = undefined;
                    var7 = var3;
                    var1 = new var11[var5](var10, var9, var8, var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var6 = var13.bind(var8)(var6);
                var6 = var17.bind(var16)(var6, var14);
                var13 = var6[var10];
                var _closure3_slot9 = var13;
                var19 = var8.useEffect;
                var18 = new Array(2);
                var18[0] = var12;
                var18[1] = var13;
                var6 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot2;
                        if(var2) { _fun0003_ip = 67; continue _fun0003 }
 10:
                        var3 = _closure3_slot6;
                        var2 = undefined;
                        var4 = '';
                        var2 = var3.bind(var2)(var4);
                        var3 = _closure3_slot9;
                        var2 = var3.clean;
                        var2 = var2.bind(var3)();
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 81; continue _fun0003 }
 54:
                        var2 = var3.setText;
                        var2 = var2.bind(var3)(var4);
                        _fun0003_ip = 81; continue _fun0003;
 67:
                        var2 = _closure3_slot9;
                        var1 = var2.createSearchContext;
                        var1 = var1.bind(var2)();
 81:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var19.bind(var8)(var6, var18);
                var6 = var9.trim;
                var6 = var6.bind(var9)();
                var6 = var7 !== var6;
                var _closure3_slot10 = var6;
                var7 = var8.useState;
                var7 = var7.bind(var8)(var12);
                var7 = var17.bind(var16)(var7, var15);
                var10 = var7[var10];
                var _closure3_slot11 = var10;
                var7 = var7[var14];
                var _closure3_slot12 = var7;
                var15 = var8.useEffect;
                var14 = new Array(2);
                var14[0] = var5;
                var14[1] = var6;
                var7 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure3_slot7;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0004_ip = 69; continue _fun0004 }
 20:
                        var3 = _closure3_slot10;
                        if(!var3) { _fun0004_ip = 69; continue _fun0004 }
 27:
                        var3 = global;
                        var6 = var3.setTimeout;
                        var5 = undefined;
                        var4 = function() {
                            var3 = _closure3_slot12;
                            var1 = undefined;
                            var2 = false;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = 300;
                        var3 = var6.bind(var5)(var4, var3);
                        var _closure4_slot0 = var3;
                        var2 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var2;
 69:
                        var3 = _closure3_slot12;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var7 = var15.bind(var8)(var7, var14);
                var14 = var8.useLayoutEffect;
                var7 = new Array(2);
                var7[0] = var4;
                var7[1] = var9;
                var4 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure3_slot1;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 31; continue _fun0005 }
 18:
                        var2 = var3.scrollToTop;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var14.bind(var8)(var4, var7);
                var7 = var8.useCallback;
                var4 = new Array(2);
                var4[0] = var13;
                var4[1] = var2;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var5 = arg1;
                        var3 = _closure3_slot9;
                        var1 = var3.search;
                        var1 = var1.bind(var3)(var5);
                        var3 = _closure3_slot6;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var5);
                        var3 = var5.trim;
                        var4 = var3.bind(var5)();
                        var3 = '';
                        if(!(var3 !== var4)) { _fun0006_ip = 89; continue _fun0006 }
 50:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 11;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.requestMembers;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2, var5);
 89:
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var2, var4);
                var7 = var8.useMemo;
                var2 = new Array(4);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var9;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = _closure3_slot2;
                        var4 = null;
                        var1 = null;
                        if(!var2) { _fun0007_ip = 54; continue _fun0007 }
 14:
                        var2 = _closure3_slot11;
                        var1 = null;
                        if(var2) { _fun0007_ip = 54; continue _fun0007 }
 23:
                        var2 = _closure3_slot3;
                        var4 = var4 == var2;
                        var5 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0007_ip = 51; continue _fun0007 }
 38:
                        var4 = _closure3_slot3;
                        var3 = _closure3_slot5;
                        var2 = var4.bind(var5)(var3);
 51:
                        var1 = var2;
 54:
                        return var1;
                    }
                };
                var2 = var7.bind(var8)(var1, var2);
                var1 = {};
                var1['hasQuery'] = var6;
                var1['queryResults'] = var5;
                var1['onChangeText'] = var4;
                var1['searchBarRef'] = var3;
                var1['searchBarEmptyState'] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var8);
            var10 = var3.hasQuery;
            _closure2_slot8 = var10;
            var36 = var3.onChangeText;
            var24 = var3.queryResults;
            _closure2_slot9 = var24;
            var35 = var3.searchBarRef;
            var30 = var3.searchBarEmptyState;
            var8 = _closure1_slot0;
            var3 = 15;
            var16 = var19[var3];
            var25 = var8.bind(var4)(var16);
            var23 = var25.useStateFromStoresObject;
            var16 = _closure1_slot9;
            var17 = new Array(1);
            var17[0] = var16;
            var16 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getProps;
                    var2 = _closure2_slot1;
                    var7 = _closure2_slot0;
                    var6 = _closure1_slot7;
                    var1 = null;
                    if(!(var7 !== var6)) { _fun0008_ip = 38; continue _fun0008 }
 34:
                    var1 = _closure2_slot0;
 38:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var25 = var23.bind(var25)(var17, var16);
            var34 = var25.groups;
            _closure2_slot10 = var34;
            var37 = var25.rows;
            _closure2_slot11 = var37;
            var16 = var19[var3];
            var28 = var8.bind(var4)(var16);
            var23 = var28.useStateFromStores;
            var16 = _closure1_slot10;
            var17 = new Array(1);
            var17[0] = var16;
            var16 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot7;
                    if(!(var4 === var3)) { _fun0009_ip = 22; continue _fun0009 }
 18:
                    var3 = undefined;
                    return var3;
 22:
                    var3 = _closure1_slot10;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var39 = var23.bind(var28)(var17, var16);
            _closure2_slot12 = var39;
            var3 = var19[var3];
            var17 = var8.bind(var4)(var3);
            var16 = var17.useStateFromStores;
            var3 = _closure1_slot13;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var28 = var16.bind(var17)(var8, var3);
            _closure2_slot13 = var28;
            var3 = 16;
            var3 = var19[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var17 = var40.useMemo;
            var16 = new Array(1);
            var16[0] = var38;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 != var4;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0010_ip = 68; continue _fun0010 }
 37:
                    var3 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 17;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getGuildVisualOwnerId;
                    var1 = var2.bind(var3)(var4);
 68:
                    return var1;
                }
            };
            var33 = var17.bind(var40)(var8, var16);
            _closure2_slot14 = var33;
            var8 = var40.useRef;
            var17 = 0;
            var16 = var8.bind(var40)(var17);
            _closure2_slot15 = var16;
            var8 = var40.useRef;
            var17 = var8.bind(var40)(var17);
            _closure2_slot16 = var17;
            var8 = {};
            var8['guildId'] = var38;
            var8['channelId'] = var29;
            var8['hasQuery'] = var10;
            var8['listRef'] = var27;
            var8['scrollOffsetRef'] = var17;
            var8['heightRef'] = var16;
            var8['scaledRowHeight'] = var3;
            var3 = function useThrottledUpdateSubscription(arg1) {
                var2 = arg1;
                var10 = var2.guildId;
                var _closure3_slot0 = var10;
                var11 = var2.channelId;
                var _closure3_slot1 = var11;
                var9 = var2.hasQuery;
                var _closure3_slot2 = var9;
                var6 = var2.listRef;
                var _closure3_slot3 = var6;
                var5 = var2.scrollOffsetRef;
                var _closure3_slot4 = var5;
                var7 = var2.heightRef;
                var _closure3_slot5 = var7;
                var8 = var2.scaledRowHeight;
                var _closure3_slot6 = var8;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(7);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var9;
                var2[3] = var8;
                var2[4] = var7;
                var2[5] = var6;
                var2[6] = var5;
                var1 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 12;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var1 = _closure3_slot3;
                            var1 = var1.current;
                            var5 = null;
                            var1 = var5 == var1;
                            if(var1) { _fun0011_ip = 25; continue _fun0011 }
 21:
                            var1 = _closure3_slot2;
 25:
                            if(var1) { _fun0011_ip = 71; continue _fun0011 }
 28:
                            var6 = _closure3_slot1;
                            var2 = _closure1_slot7;
                            var2 = var6 !== var2;
                            if(!var2) { _fun0011_ip = 68; continue _fun0011 }
 46:
                            var7 = _closure1_slot10;
                            var6 = var7.getChannel;
                            var3 = _closure3_slot1;
                            var3 = var6.bind(var7)(var3);
                            var2 = var5 == var3;
 68:
                            var1 = var2;
 71:
                            if(var1) { _fun0011_ip = 163; continue _fun0011 }
 74:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.subscribeChannelDimensions;
                            var1 = {};
                            var5 = _closure3_slot0;
                            var1['guildId'] = var5;
                            var5 = _closure3_slot1;
                            var1['channelId'] = var5;
                            var5 = _closure3_slot4;
                            var5 = var5.current;
                            var1['y'] = var5;
                            var5 = _closure3_slot5;
                            var5 = var5.current;
                            var1['height'] = var5;
                            var4 = _closure3_slot6;
                            var1['rowHeight'] = var4;
                            var1 = var2.bind(var3)(var1);
 163:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = 50;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3 = var3.bind(var4)(var8);
            _closure2_slot17 = var3;
            var17 = var40.useCallback;
            var16 = new Array(1);
            var16[0] = var3;
            var8 = function(arg1) {
                var3 = _closure2_slot15;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.layout;
                var2 = var2.height;
                var3['current'] = var2;
                var2 = _closure2_slot17;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var17 = var17.bind(var40)(var8, var16);
            var23 = var40.useCallback;
            var16 = new Array(1);
            var16[0] = var3;
            var8 = function(arg1) {
                var3 = _closure2_slot16;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.contentOffset;
                var2 = var2.y;
                var3['current'] = var2;
                var2 = _closure2_slot17;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var16 = var23.bind(var40)(var8, var16);
            var8 = 18;
            var8 = var19[var8];
            var18 = var18.bind(var4)(var8);
            var8 = {};
            var8['channel'] = var39;
            var19 = var10;
            if(var19) { _fun0001_ip = 678; continue _fun0001 }
 675:
            var19 = !var20;
 678:
            var8['disable'] = var19;
            var8 = var18.bind(var4)(var8);
            var19 = var8.listActionRenderer;
            var18 = var8.listActionHeight;
            var8 = _closure1_slot5;
            var23 = var8.useEffect;
            var20 = new Array(2);
            var20[0] = var39;
            var20[1] = var3;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot12;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 23; continue _fun0012 }
 13:
                    var2 = _closure2_slot17;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var23.bind(var8)(var3, var20);
            var20 = var8.useMemo;
            var3 = new Array(5);
            var3[0] = var38;
            var3[1] = var2;
            var3[2] = var37;
            var3[3] = var10;
            var3[4] = var24;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0013_ip = 126; continue _fun0013 }
 15:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 19;
                    var4 = var4[var1];
                    var1 = undefined;
                    var8 = var6.bind(var1)(var4);
                    var7 = var8.isEveryoneRoleId;
                    var6 = _closure2_slot1;
                    var4 = _closure2_slot2;
                    var4 = var7.bind(var8)(var6, var4);
                    if(var4) { _fun0013_ip = 126; continue _fun0013 }
 63:
                    var4 = _closure2_slot8;
                    if(var4) { _fun0013_ip = 93; continue _fun0013 }
 70:
                    var7 = _closure2_slot11;
                    var6 = var7.filter;
                    var4 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var2 = arg1;
                            var3 = var2.type;
                            var1 = 'MEMBER';
                            var1 = var1 === var3;
                            if(!var1) { _fun0014_ip = 51; continue _fun0014 }
 19:
                            var4 = var2.roles;
                            var3 = var4.find;
                            var2 = function(arg1) {
                                var2 = _closure2_slot2;
                                var1 = arg1;
                                var1 = var1 === var2;
                                return var1;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            var1 = var2 != var3;
 51:
                            return var1;
                        }
                    };
                    var4 = var6.bind(var7)(var4);
                    return var4;
 93:
                    var4 = _closure2_slot9;
                    if(!(var5 != var4)) { _fun0013_ip = 124; continue _fun0013 }
 101:
                    var4 = _closure2_slot9;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.record;
                            var4 = _closure1_slot11;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = var1.id;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = null;
                            var5 = var2 == var3;
                            var1 = undefined;
                            if(var5) { _fun0015_ip = 86; continue _fun0015 }
 51:
                            var5 = var3.roles;
                            var3 = var2 == var5;
                            var1 = undefined;
                            if(var3) { _fun0015_ip = 86; continue _fun0015 }
 66:
                            var4 = var5.find;
                            var3 = function(arg1) {
                                var2 = _closure2_slot2;
                                var1 = arg1;
                                var1 = var1 === var2;
                                return var1;
                            };
                            var1 = var4.bind(var5)(var3);
 86:
                            var1 = var2 != var1;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var2;
 124:
                    return var1;
 126:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var20.bind(var8)(var2, var3);
            _closure2_slot18 = var23;
            var20 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var34;
            var3[1] = var24;
            var2 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = _closure2_slot9;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0016_ip = 152; continue _fun0016 }
 21:
                    var3 = _closure2_slot10;
                    var1 = arg1;
                    var1 = var3[var1];
                    var3 = var1.id;
                    var8 = var1.title;
                    var7 = var1.count;
                    var1 = null;
                    var5 = var1 != var8;
                    var1 = undefined;
                    if(!var5) { _fun0016_ip = 150; continue _fun0016 }
 59:
                    var1 = undefined;
                    if(!(var2 !== var7)) { _fun0016_ip = 150; continue _fun0016 }
 65:
                    var2 = _closure1_slot15;
                    var2 = var2.UNKNOWN;
                    if(!(var3 !== var2)) { _fun0016_ip = 134; continue _fun0016 }
 82:
                    var2 = {};
                    var3 = 'section';
                    var2['type'] = var3;
                    var3 = {};
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var5 = '';
                    var4 = ' — ';
                    var4 = var6.bind(var5)(var8, var4, var7);
                    var3['title'] = var4;
                    var2['props'] = var3;
                    _fun0016_ip = 147; continue _fun0016;
 134:
                    var3 = {};
                    var4 = 'placeholder';
                    var3['type'] = var4;
                    var2 = var3;
 147:
                    var1 = var2;
 150:
                    return var1;
 152:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 20;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.zkoeq6;
                    var3 = var4.bind(var5)(var3);
                    var2['title'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var20 = var20.bind(var8)(var2, var3);
            var3 = var8.useCallback;
            var2 = new Array(14);
            var2[0] = var23;
            var2[1] = var10;
            var2[2] = var24;
            var2[3] = var38;
            var2[4] = var37;
            var2[5] = var34;
            var2[6] = var33;
            var2[7] = var32;
            var2[8] = var31;
            var2[9] = var29;
            var2[10] = var28;
            var2[11] = var21;
            var2[12] = var9;
            var2[13] = var1;
            var1 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var9 = arg1;
                    var8 = arg2;
                    var _closure3_slot0 = var9;
                    var _closure3_slot1 = var8;
                    var1 = function getIndex() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var2 = _closure2_slot18;
                            var1 = null;
                            if(!(var1 == var2)) { _fun0018_ip = 82; continue _fun0018 }
 13:
                            var1 = _closure2_slot8;
                            if(var1) { _fun0018_ip = 82; continue _fun0018 }
 20:
                            var3 = _closure3_slot0;
                            var2 = 0;
                            var3 = var2 < var3;
                            var5 = 0;
                            var4 = 0;
                            if(!var3) { _fun0018_ip = 72; continue _fun0018 }
 40:
                            var3 = _closure2_slot10;
                            var3 = var3[var4];
                            var3 = var3.count;
                            var5 = var5 + var3;
                            var4 = var4 + 1;
                            var3 = _closure3_slot0;
                            var2 = var5;
                            if(var4 < var3) { _fun0018_ip = 40; continue _fun0018 }
 72:
                            var1 = _closure3_slot1;
                            var1 = var2 + var1;
                            return var1;
 82:
                            var1 = _closure3_slot1;
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var1;
                    var1 = _closure2_slot18;
                    var10 = null;
                    if(!(var10 != var1)) { _fun0017_ip = 153; continue _fun0017 }
 40:
                    var1 = _closure2_slot18;
                    var1 = var1.length;
                    var1 = var8 < var1;
                    var4 = undefined;
                    if(!var1) { _fun0017_ip = 66; continue _fun0017 }
 58:
                    var1 = _closure2_slot18;
                    var4 = var1[var8];
 66:
                    var2 = var10 != var4;
                    var1 = undefined;
                    if(!var2) { _fun0017_ip = 408; continue _fun0017 }
 78:
                    var3 = var4.type;
                    var2 = _closure1_slot8;
                    var2 = var2.MEMBER;
                    var1 = undefined;
                    if(!(var3 === var2)) { _fun0017_ip = 408; continue _fun0017 }
 105:
                    var2 = _closure2_slot18;
                    var3 = var2.length;
                    var2 = 1;
                    var3 = var3 - var2;
                    var2 = {};
                    var6 = var4.user;
                    var2['user'] = var6;
                    var2['memberListMember'] = var4;
                    var3 = var8 === var3;
                    var2['end'] = var3;
                    var1 = var2;
                    _fun0017_ip = 408; continue _fun0017;
 153:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0017_ip = 281; continue _fun0017 }
 160:
                    var4 = _closure2_slot11;
                    var2 = _closure2_slot10;
                    var2 = var2[var9];
                    var2 = var2.index;
                    var3 = 1;
                    var2 = var2 + var3;
                    var2 = var2 + var8;
                    var4 = var4[var2];
                    var2 = var10 != var4;
                    var1 = undefined;
                    if(!var2) { _fun0017_ip = 408; continue _fun0017 }
 204:
                    var6 = var4.type;
                    var2 = _closure1_slot8;
                    var2 = var2.MEMBER;
                    var1 = undefined;
                    if(!(var6 === var2)) { _fun0017_ip = 408; continue _fun0017 }
 231:
                    var2 = _closure2_slot10;
                    var2 = var2[var9];
                    var2 = var2.count;
                    var3 = var2 - var3;
                    var2 = {};
                    var6 = var4.user;
                    var2['user'] = var6;
                    var2['memberListMember'] = var4;
                    var3 = var8 === var3;
                    var2['end'] = var3;
                    var1 = var2;
                    _fun0017_ip = 408; continue _fun0017;
 281:
                    var2 = _closure2_slot9;
                    var3 = var2.length;
                    var2 = 1;
                    var3 = var3 - var2;
                    var2 = _closure2_slot9;
                    var2 = var2.length;
                    var4 = var8 < var2;
                    var2 = undefined;
                    if(!var4) { _fun0017_ip = 323; continue _fun0017 }
 315:
                    var4 = _closure2_slot9;
                    var2 = var4[var8];
 323:
                    var4 = var10 == var2;
                    var1 = undefined;
                    if(var4) { _fun0017_ip = 408; continue _fun0017 }
 332:
                    var11 = var2.record;
                    var4 = var2.comparator;
                    var14 = _closure1_slot11;
                    var13 = var14.getMember;
                    var6 = _closure2_slot1;
                    var2 = var11.id;
                    var6 = var13.bind(var14)(var6, var2);
                    var2 = var10 == var6;
                    var1 = undefined;
                    if(var2) { _fun0017_ip = 408; continue _fun0017 }
 381:
                    var2 = {};
                    var2['user'] = var11;
                    var2['guildMember'] = var6;
                    var2['comparator'] = var4;
                    var3 = var8 === var3;
                    var2['end'] = var3;
                    var1 = var2;
 408:
                    var2 = 0;
                    var4 = var2 === var8;
                    if(!(var10 == var1)) { _fun0017_ip = 469; continue _fun0017 }
 418:
                    var2 = {};
                    var3 = 'placeholder';
                    var2['type'] = var3;
                    var3 = {};
                    var3['start'] = var4;
                    var6 = _closure2_slot10;
                    var6 = var6[var9];
                    var9 = var6.count;
                    var6 = 1;
                    var6 = var9 - var6;
                    var6 = var8 === var6;
                    var3['end'] = var6;
                    var2['props'] = var3;
                    return var2;
 469:
                    var8 = var1.user;
                    var _closure3_slot3 = var8;
                    var9 = var1.memberListMember;
                    var _closure3_slot4 = var9;
                    var13 = var1.guildMember;
                    var12 = var1.comparator;
                    var3 = var1.end;
                    var1 = {};
                    var2 = 'user';
                    var1['type'] = var2;
                    var2 = {};
                    var6 = _closure1_slot14;
                    var6 = var6.NONE;
                    var2['type'] = var6;
                    var2['user'] = var8;
                    var14 = var10 == var9;
                    var6 = undefined;
                    var11 = undefined;
                    if(var14) { _fun0017_ip = 555; continue _fun0017 }
 549:
                    var11 = var9.nick;
 555:
                    if(!(var10 == var11)) { _fun0017_ip = 601; continue _fun0017 }
 559:
                    if(!(var10 != var12)) { _fun0017_ip = 580; continue _fun0017 }
 563:
                    var14 = '';
                    if(!(var14 !== var12)) { _fun0017_ip = 580; continue _fun0017 }
 571:
                    var14 = var8.id;
                    if(!(var12 === var14)) { _fun0017_ip = 598; continue _fun0017 }
 580:
                    var15 = var10 == var13;
                    var14 = undefined;
                    if(var15) { _fun0017_ip = 595; continue _fun0017 }
 589:
                    var14 = var13.nick;
 595:
                    var12 = var14;
 598:
                    var11 = var12;
 601:
                    var2['nickname'] = var11;
                    var12 = var10 == var9;
                    var11 = undefined;
                    if(var12) { _fun0017_ip = 621; continue _fun0017 }
 615:
                    var11 = var9.colorString;
 621:
                    if(!(var10 == var11)) { _fun0017_ip = 643; continue _fun0017 }
 625:
                    var14 = var10 == var13;
                    var12 = undefined;
                    if(var14) { _fun0017_ip = 640; continue _fun0017 }
 634:
                    var12 = var13.colorString;
 640:
                    var11 = var12;
 643:
                    var2['usernameColor'] = var11;
                    var12 = var10 == var9;
                    var11 = undefined;
                    if(var12) { _fun0017_ip = 663; continue _fun0017 }
 657:
                    var11 = var9.colorStrings;
 663:
                    if(!(var10 == var11)) { _fun0017_ip = 685; continue _fun0017 }
 667:
                    var14 = var10 == var13;
                    var12 = undefined;
                    if(var14) { _fun0017_ip = 682; continue _fun0017 }
 676:
                    var12 = var13.colorStrings;
 682:
                    var11 = var12;
 685:
                    var2['roleColors'] = var11;
                    var11 = _closure2_slot6;
                    var2['isNameplatedRow'] = var11;
                    var11 = var10 == var9;
                    var12 = undefined;
                    if(var11) { _fun0017_ip = 714; continue _fun0017 }
 708:
                    var12 = var9.premiumSince;
 714:
                    if(!(var10 == var12)) { _fun0017_ip = 736; continue _fun0017 }
 718:
                    var14 = var10 == var13;
                    var11 = undefined;
                    if(var14) { _fun0017_ip = 733; continue _fun0017 }
 727:
                    var11 = var13.premiumSince;
 733:
                    var12 = var11;
 736:
                    var13 = var10 != var12;
                    var11 = undefined;
                    if(!var13) { _fun0017_ip = 748; continue _fun0017 }
 745:
                    var11 = var12;
 748:
                    var2['premiumSince'] = var11;
                    if(!(var10 == var9)) { _fun0017_ip = 772; continue _fun0017 }
 757:
                    var10 = _closure2_slot14;
                    var8 = var8.id;
                    var8 = var10 === var8;
                    _fun0017_ip = 778; continue _fun0017;
 772:
                    var8 = var9.isOwner;
 778:
                    var2['isOwner'] = var8;
                    var7 = _closure2_slot1;
                    var2['guildId'] = var7;
                    var7 = function onPress(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                            var6 = arg1;
                            var1 = _closure2_slot3;
                            var7 = null;
                            if(!(var7 != var1)) { _fun0019_ip = 48; continue _fun0019 }
 16:
                            var3 = _closure2_slot3;
                            var2 = {};
                            var2['user'] = var6;
                            var5 = _closure3_slot2;
                            var1 = undefined;
                            var5 = var5.bind(var1)();
                            var2['index'] = var5;
                            var1 = var3.bind(var1)(var2);
 48:
                            var1 = _closure2_slot5;
                            if(!var1) { _fun0019_ip = 162; continue _fun0019 }
 55:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 21;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = var6.id;
                            var1['userId'] = var6;
                            var6 = _closure2_slot0;
                            var5 = _closure1_slot7;
                            if(!(var6 === var5)) { _fun0019_ip = 109; continue _fun0019 }
 103:
                            var5 = _closure2_slot13;
                            _fun0019_ip = 113; continue _fun0019;
 109:
                            var5 = _closure2_slot0;
 113:
                            var1['channelId'] = var5;
                            var5 = _closure3_slot4;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if(var7) { _fun0019_ip = 143; continue _fun0019 }
 133:
                            var6 = _closure3_slot4;
                            var5 = var6.colorRoleId;
 143:
                            var1['roleId'] = var5;
                            var4 = _closure2_slot7;
                            var1['sourceAnalyticsLocations'] = var4;
                            var1 = var2.bind(var3)(var1);
 162:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onPress'] = var7;
                    var5 = function() {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if(!(var1 == var2)) { _fun0020_ip = 17; continue _fun0020 }
 13:
                            var1 = undefined;
                            return var1;
 17:
                            var1 = function() {
                                var3 = _closure2_slot4;
                                var2 = {};
                                var4 = _closure3_slot3;
                                var2['user'] = var4;
                                var4 = _closure3_slot2;
                                var1 = undefined;
                                var4 = var4.bind(var1)();
                                var2['index'] = var4;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)();
                    var2['onLongPress'] = var5;
                    var2['start'] = var4;
                    var2['end'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var21 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var8 = null;
            if(!var5) { _fun0001_ip = 1046; continue _fun0001 }
 906:
            var28 = _closure1_slot18;
            var9 = _closure1_slot17;
            var5 = {};
            var32 = _closure1_slot16;
            var31 = _closure1_slot6;
            var29 = {};
            var33 = {};
            var38 = _closure1_slot1;
            var37 = _closure1_slot3;
            var34 = 22;
            var34 = var37[var34];
            var34 = var38.bind(var4)(var34);
            var34 = var34.spacing;
            var34 = var34.PX_16;
            var33['marginHorizontal'] = var34;
            var29['style'] = var33;
            var34 = _closure1_slot0;
            var33 = 23;
            var33 = var37[var33];
            var33 = var34.bind(var4)(var33);
            var34 = var33.SearchField;
            var33 = {};
            var37 = 'md';
            var33['size'] = var37;
            var33['onChange'] = var36;
            var33['ref'] = var35;
            var33 = var32.bind(var4)(var34, var33);
            var29['children'] = var33;
            var31 = var32.bind(var4)(var31, var29);
            var29 = new Array(2);
            var29[0] = var31;
            var29[1] = var30;
            var5['children'] = var29;
            var8 = var28.bind(var4)(var9, var5);
 1046:
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var28 = _closure1_slot3;
            var7 = 24;
            var7 = var28[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.UsersFastList;
            var7 = {};
            var7['ref'] = var27;
            if(!(var26 == var23)) { _fun0001_ip = 1140; continue _fun0001 }
 1094:
            if(var10) { _fun0001_ip = 1122; continue _fun0001 }
 1097:
            var26 = var25.groups;
            var25 = var26.map;
            var22 = function(arg1) {
                var1 = arg1;
                var1 = var1.count;
                return var1;
            };
            var22 = var25.bind(var26)(var22);
            _fun0001_ip = 1138; continue _fun0001;
 1122:
            var25 = var24.length;
            var24 = new Array(1);
            var24[0] = var25;
            var22 = var24;
 1138:
            _fun0001_ip = 1156; continue _fun0001;
 1140:
            var24 = var23.length;
            var23 = new Array(1);
            var23[0] = var24;
            var22 = var23;
 1156:
            var7['sections'] = var22;
            var7['getItemProps'] = var21;
            var7['getSectionProps'] = var20;
            var7['renderListHeader'] = var19;
            var7['listHeaderSize'] = var18;
            var7['onLayout'] = var17;
            var7['onScroll'] = var16;
            var7['disableStickySections'] = var15;
            var7['inActionSheet'] = var14;
            var7['disableThemedGradient'] = var13;
            var7['listStyleOverride'] = var12;
            var7['disableBottomSafeZone'] = var11;
            var7['insetEnd'] = var6;
            var6 = 'guild-channel-user-list';
            if(!var10) { _fun0001_ip = 1236; continue _fun0001 }
 1230:
            var6 = 'guild-channel-user-list-search-results';
 1236:
            var6 = var9.bind(var4)(var8, var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();