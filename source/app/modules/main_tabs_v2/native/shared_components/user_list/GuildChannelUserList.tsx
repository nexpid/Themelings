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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.RelationshipTypes;
    var _closure1_slot15 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var8 = var4.Fragment;
    var _closure1_slot18 = var8;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var4 = new Array(0);
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function GuildChannelUserList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.searchable;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var2 = var1.searchableEmptyState;
            var32 = var1.channelId;
            var _closure2_slot0 = var32;
            var40 = var1.guildId;
            var _closure2_slot1 = var40;
            var24 = var1.roleId;
            var _closure2_slot2 = var24;
            var22 = var1.headerShown;
            if(!(var22 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var22 = true;
case 4:
            var34 = var1.onUserPress;
            var _closure2_slot3 = var34;
            var29 = var1.onUserLongPress;
            var _closure2_slot4 = var29;
            var33 = var1.opensUserProfileOnUserPress;
            if(!(var33 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var33 = true;
case 6:
            var _closure2_slot5 = var33;
            var15 = var1.disableStickySections;
            var14 = var1.inActionSheet;
            var13 = var1.disableThemedGradient;
            var12 = var1.listStyleOverride;
            var11 = var1.disableBottomSafeZone;
            var6 = var1.insetEnd;
            var21 = var1.isNameplatedList;
            var _closure2_slot6 = var21;
            var1 = var1.canShowDisplayNameStylesFont;
            if(!(var1 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = false;
case 8:
            var _closure2_slot7 = var1;
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
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var18 = _closure1_slot1;
            var19 = _closure1_slot3;
            var3 = 15;
            var3 = var19[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var28 = var3.analyticsLocations;
            _closure2_slot8 = var28;
            var42 = _closure1_slot5;
            var3 = var42.useRef;
            var8 = null;
            var27 = var3.bind(var42)(var8);
            var3 = {};
            var3['guildId'] = var40;
            var3['listRef'] = var27;
            var3['searchable'] = var5;
            var3['searchableEmptyState'] = var2;
            var2 = function useSearchableConfig(arg1) {
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
                var5 = _closure1_slot20;
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
                    var1 = 11;
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
case 0:
                            var2 = arg2;
                            var1 = var2.trim;
                            var2 = var1.bind(var2)();
                            var1 = '';
                            if(!(var1 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var3 = _closure3_slot8;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
                            _fun0002_ip = 12; continue _fun0002;
case 10:
                            var3 = _closure3_slot8;
                            var2 = _closure1_slot20;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 12:
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
case 0:
                        var2 = _closure3_slot2;
                        if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
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
                        if(!(var2 != var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var2 = var3.setText;
                        var2 = var2.bind(var3)(var4);
                        _fun0003_ip = 15; continue _fun0003;
case 13:
                        var2 = _closure3_slot9;
                        var1 = var2.createSearchContext;
                        var1 = var1.bind(var2)();
case 15:
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
case 0:
                        var3 = _closure3_slot7;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(!(var4 > var3))) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var3 = _closure3_slot10;
                        if(!var3) { _fun0004_ip = 17; continue _fun0004 }
case 19:
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
case 17:
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
case 0:
                        var1 = _closure3_slot1;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var2 = var3.scrollToTop;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
case 20:
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
case 0:
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
                        if(!(var3 !== var4)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 12;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.requestMembers;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2, var5);
case 22:
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
case 0:
                        var2 = _closure3_slot2;
                        var4 = null;
                        var1 = null;
                        if(!var2) { _fun0007_ip = 16; continue _fun0007 }
case 24:
                        var2 = _closure3_slot11;
                        var1 = null;
                        if(var2) { _fun0007_ip = 16; continue _fun0007 }
case 25:
                        var2 = _closure3_slot3;
                        var4 = var4 == var2;
                        var5 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                        var4 = _closure3_slot3;
                        var3 = _closure3_slot5;
                        var2 = var4.bind(var5)(var3);
case 26:
                        var1 = var2;
case 16:
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
            var3 = var2.bind(var4)(var3);
            var10 = var3.hasQuery;
            _closure2_slot9 = var10;
            var36 = var3.onChangeText;
            var2 = var3.queryResults;
            _closure2_slot10 = var2;
            var35 = var3.searchBarRef;
            var30 = var3.searchBarEmptyState;
            var9 = _closure1_slot0;
            var20 = 16;
            var3 = var19[var20];
            var25 = var9.bind(var4)(var3);
            var17 = var25.useStateFromStoresObject;
            var3 = _closure1_slot9;
            var16 = new Array(1);
            var16[0] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getProps;
                    var2 = _closure2_slot1;
                    var7 = _closure2_slot0;
                    var6 = _closure1_slot7;
                    var1 = null;
                    if(!(var7 !== var6)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                    var1 = _closure2_slot0;
case 27:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var25 = var17.bind(var25)(var16, var3);
            var38 = var25.groups;
            _closure2_slot11 = var38;
            var39 = var25.rows;
            _closure2_slot12 = var39;
            var3 = var19[var20];
            var26 = var9.bind(var4)(var3);
            var17 = var26.useStateFromStores;
            var3 = _closure1_slot10;
            var16 = new Array(1);
            var16[0] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot7;
                    if(!(var4 === var3)) { _fun0009_ip = 29; continue _fun0009 }
case 21:
                    var3 = undefined;
                    return var3;
case 29:
                    var3 = _closure1_slot10;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var41 = var17.bind(var26)(var16, var3);
            _closure2_slot13 = var41;
            var3 = var19[var20];
            var17 = var9.bind(var4)(var3);
            var16 = var17.useStateFromStores;
            var3 = _closure1_slot13;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var31 = var16.bind(var17)(var9, var3);
            _closure2_slot14 = var31;
            var3 = 17;
            var3 = var19[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var17 = var42.useMemo;
            var16 = new Array(1);
            var16[0] = var40;
            var9 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 != var4;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0010_ip = 17; continue _fun0010 }
case 27:
                    var3 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 18;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getGuildVisualOwnerId;
                    var1 = var2.bind(var3)(var4);
case 17:
                    return var1;
                }
            };
            var37 = var17.bind(var42)(var9, var16);
            _closure2_slot15 = var37;
            var9 = var42.useRef;
            var17 = 0;
            var16 = var9.bind(var42)(var17);
            _closure2_slot16 = var16;
            var9 = var42.useRef;
            var17 = var9.bind(var42)(var17);
            _closure2_slot17 = var17;
            var9 = {};
            var9['guildId'] = var40;
            var9['channelId'] = var32;
            var9['hasQuery'] = var10;
            var9['listRef'] = var27;
            var9['scrollOffsetRef'] = var17;
            var9['heightRef'] = var16;
            var9['scaledRowHeight'] = var3;
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
                    var1 = 13;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = _closure3_slot3;
                            var1 = var1.current;
                            var5 = null;
                            var1 = var5 == var1;
                            if(var1) { _fun0011_ip = 30; continue _fun0011 }
case 11:
                            var1 = _closure3_slot2;
case 30:
                            if(var1) { _fun0011_ip = 31; continue _fun0011 }
case 32:
                            var6 = _closure3_slot1;
                            var2 = _closure1_slot7;
                            var2 = var6 !== var2;
                            if(!var2) { _fun0011_ip = 33; continue _fun0011 }
case 34:
                            var7 = _closure1_slot10;
                            var6 = var7.getChannel;
                            var3 = _closure3_slot1;
                            var3 = var6.bind(var7)(var3);
                            var2 = var5 == var3;
case 33:
                            var1 = var2;
case 31:
                            if(var1) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 14;
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
case 35:
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
            var3 = var3.bind(var4)(var9);
            _closure2_slot18 = var3;
            var17 = var42.useCallback;
            var16 = new Array(1);
            var16[0] = var3;
            var9 = function(arg1) {
                var3 = _closure2_slot16;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.layout;
                var2 = var2.height;
                var3['current'] = var2;
                var2 = _closure2_slot18;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var17 = var17.bind(var42)(var9, var16);
            var26 = var42.useCallback;
            var16 = new Array(1);
            var16[0] = var3;
            var9 = function(arg1) {
                var3 = _closure2_slot17;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.contentOffset;
                var2 = var2.y;
                var3['current'] = var2;
                var2 = _closure2_slot18;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var16 = var26.bind(var42)(var9, var16);
            var9 = 19;
            var9 = var19[var9];
            var18 = var18.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var41;
            var19 = var10;
            if(var19) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var19 = !var22;
case 37:
            var9['disable'] = var19;
            var9 = var18.bind(var4)(var9);
            var19 = var9.listActionRenderer;
            var18 = var9.listActionHeight;
            var26 = _closure1_slot5;
            var22 = var26.useEffect;
            var9 = new Array(2);
            var9[0] = var41;
            var9[1] = var3;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 25; continue _fun0012 }
case 39:
                    var2 = _closure2_slot18;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var22.bind(var26)(var3, var9);
            var9 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var20];
            var22 = var9.bind(var4)(var3);
            var20 = var22.useStateFromStoresArray;
            var3 = _closure1_slot11;
            var9 = new Array(2);
            var9[0] = var3;
            var3 = _closure1_slot14;
            var9[1] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0013_ip = 40; continue _fun0013 }
case 21:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 20;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.isEveryoneRoleId;
                    var6 = _closure2_slot1;
                    var5 = _closure2_slot2;
                    var5 = var7.bind(var8)(var6, var5);
                    if(var5) { _fun0013_ip = 40; continue _fun0013 }
case 41:
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot7;
                    var4 = null;
                    if(!(var6 !== var5)) { _fun0013_ip = 42; continue _fun0013 }
case 43:
                    var4 = _closure2_slot0;
case 42:
                    var _closure3_slot0 = var4;
                    var4 = _closure1_slot11;
                    var3 = var4.getMembers;
                    var2 = _closure2_slot1;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.roles;
                            var3 = var4.includes;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            if(!var1) { _fun0014_ip = 44; continue _fun0014 }
case 45:
                            var4 = _closure1_slot14;
                            var3 = var4.getUser;
                            var2 = var2.userId;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            var1 = var2 != var3;
case 44:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.sort;
                    var1 = function(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var4 = _closure1_slot14;
                            var3 = var4.getUser;
                            var1 = arg1;
                            var1 = var1.userId;
                            var11 = var3.bind(var4)(var1);
                            var3 = var4.getUser;
                            var1 = arg2;
                            var1 = var1.userId;
                            var6 = var3.bind(var4)(var1);
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var10 = 21;
                            var1 = var1[var10];
                            var7 = undefined;
                            var9 = var3.bind(var7)(var1);
                            var8 = var9.getNickname;
                            var5 = _closure2_slot1;
                            var1 = _closure3_slot0;
                            var1 = var8.bind(var9)(var5, var1, var11);
                            var5 = null;
                            if(!(var5 == var1)) { _fun0015_ip = 46; continue _fun0015 }
case 47:
                            var9 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var8 = 22;
                            var8 = var12[var8];
                            var9 = var9.bind(var7)(var8);
                            var8 = var9.getGlobalName;
                            var1 = var8.bind(var9)(var11);
case 46:
                            var9 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var8 = var8[var10];
                            var9 = var9.bind(var7)(var8);
                            var8 = var9.getNickname;
                            var4 = _closure2_slot1;
                            var3 = _closure3_slot0;
                            var4 = var8.bind(var9)(var4, var3, var6);
                            if(!(var5 == var4)) { _fun0015_ip = 48; continue _fun0015 }
case 49:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var2 = 22;
                            var2 = var8[var2];
                            var3 = var3.bind(var7)(var2);
                            var2 = var3.getGlobalName;
                            var4 = var2.bind(var3)(var6);
case 48:
                            var6 = var5 != var1;
                            var3 = '';
                            var2 = var3;
                            if(!var6) { _fun0015_ip = 50; continue _fun0015 }
case 51:
                            var2 = var1;
case 50:
                            var1 = var2.localeCompare;
                            var5 = var5 != var4;
                            if(!var5) { _fun0015_ip = 52; continue _fun0015 }
case 53:
                            var3 = var4;
case 52:
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 40:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var22 = var20.bind(var22)(var9, var3);
            _closure2_slot19 = var22;
            var26 = var8 != var24;
            if(!var26) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var9 = _closure1_slot0;
            var20 = _closure1_slot3;
            var3 = 20;
            var3 = var20[var3];
            var9 = var9.bind(var4)(var3);
            var3 = var9.isEveryoneRoleId;
            var3 = var3.bind(var9)(var40, var24);
            var26 = !var3;
case 54:
            _closure2_slot20 = var26;
            var9 = _closure1_slot5;
            var20 = var9.useMemo;
            var3 = new Array(5);
            var3[0] = var40;
            var3[1] = var24;
            var3[2] = var26;
            var3[3] = var10;
            var3[4] = var2;
            var2 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot20;
                    if(!var1) { _fun0016_ip = 3; continue _fun0016 }
case 14:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0016_ip = 25; continue _fun0016 }
case 3:
                    var1 = _closure2_slot10;
                    _fun0016_ip = 34; continue _fun0016;
case 25:
                    var4 = _closure2_slot10;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
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
                            if(var5) { _fun0017_ip = 56; continue _fun0017 }
case 26:
                            var5 = var3.roles;
                            var3 = var2 == var5;
                            var1 = undefined;
                            if(var3) { _fun0017_ip = 56; continue _fun0017 }
case 41:
                            var4 = var5.find;
                            var3 = function(arg1) {
                                var2 = _closure2_slot2;
                                var1 = arg1;
                                var1 = var1 === var2;
                                return var1;
                            };
                            var1 = var4.bind(var5)(var3);
case 56:
                            var1 = var2 != var1;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 34:
                    return var1;
                }
            };
            var24 = var20.bind(var9)(var2, var3);
            _closure2_slot21 = var24;
            var20 = var9.useCallback;
            var3 = new Array(3);
            var3[0] = var38;
            var3[1] = var24;
            var3[2] = var26;
            var2 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot21;
                    var3 = var1.length;
                    var1 = 0;
                    if(!(!(var3 > var1))) { _fun0018_ip = 57; continue _fun0018 }
case 11:
                    var3 = _closure2_slot20;
                    if(var3) { _fun0018_ip = 58; continue _fun0018 }
case 32:
                    var3 = _closure2_slot11;
                    var2 = arg1;
                    var3 = var3[var2];
                    var2 = var3.id;
                    var7 = var3.title;
                    var6 = var3.count;
                    var3 = null;
                    if(!(var3 != var7)) { _fun0018_ip = 58; continue _fun0018 }
case 59:
                    if(!(var1 !== var6)) { _fun0018_ip = 58; continue _fun0018 }
case 60:
                    var1 = _closure1_slot16;
                    var1 = var1.UNKNOWN;
                    if(!(var2 !== var1)) { _fun0018_ip = 61; continue _fun0018 }
case 15:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = ' — ';
                    var3 = var5.bind(var4)(var7, var3, var6);
                    var2['title'] = var3;
                    var1['props'] = var2;
                    _fun0018_ip = 62; continue _fun0018;
case 61:
                    var2 = {};
                    var3 = 'placeholder';
                    var2['type'] = var3;
                    var1 = var2;
case 62:
                    return var1;
case 58:
                    var1 = undefined;
                    return var1;
case 57:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 23;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.zkoeq/;
                    var3 = var4.bind(var5)(var3);
                    var2['title'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var20 = var20.bind(var9)(var2, var3);
            var3 = var9.useCallback;
            var2 = new Array(16);
            var2[0] = var26;
            var2[1] = var22;
            var2[2] = var24;
            var2[3] = var10;
            var2[4] = var40;
            var2[5] = var39;
            var2[6] = var38;
            var2[7] = var37;
            var2[8] = var34;
            var2[9] = var33;
            var2[10] = var32;
            var2[11] = var31;
            var2[12] = var29;
            var2[13] = var28;
            var2[14] = var21;
            var2[15] = var1;
            var1 = function(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var9 = arg1;
                    var8 = arg2;
                    var _closure3_slot0 = var9;
                    var _closure3_slot1 = var8;
                    var1 = function getIndex() {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var1 = _closure2_slot20;
                            if(var1) { _fun0020_ip = 63; continue _fun0020 }
case 14:
                            var1 = _closure2_slot9;
                            if(var1) { _fun0020_ip = 63; continue _fun0020 }
case 3:
                            var3 = _closure3_slot0;
                            var2 = 0;
                            var3 = var2 < var3;
                            var5 = 0;
                            var4 = 0;
                            if(!var3) { _fun0020_ip = 33; continue _fun0020 }
case 64:
                            var3 = _closure2_slot11;
                            var3 = var3[var4];
                            var3 = var3.count;
                            var5 = var5 + var3;
                            var4 = var4 + 1;
                            var3 = _closure3_slot0;
                            var2 = var5;
                            if(var4 < var3) { _fun0020_ip = 64; continue _fun0020 }
case 33:
                            var1 = _closure3_slot1;
                            var1 = var2 + var1;
                            return var1;
case 63:
                            var1 = _closure3_slot1;
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var1;
                    var1 = _closure2_slot20;
                    if(!var1) { _fun0019_ip = 65; continue _fun0019 }
case 64:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0019_ip = 65; continue _fun0019 }
case 66:
                    var1 = _closure2_slot19;
                    var1 = var1.length;
                    var2 = var8 >= var1;
                    var1 = undefined;
                    if(var2) { _fun0019_ip = 67; continue _fun0019 }
case 4:
                    var2 = _closure2_slot19;
                    var3 = var2[var8];
                    var10 = _closure1_slot14;
                    var4 = var10.getUser;
                    var2 = var3.userId;
                    var4 = var4.bind(var10)(var2);
                    var2 = null;
                    var2 = var2 == var4;
                    var1 = undefined;
                    if(var2) { _fun0019_ip = 67; continue _fun0019 }
case 68:
                    var2 = {};
                    var2['user'] = var4;
                    var2['guildMember'] = var3;
                    var3 = _closure2_slot19;
                    var4 = var3.length;
                    var3 = 1;
                    var3 = var4 - var3;
                    var3 = var8 === var3;
                    var2['end'] = var3;
                    var1 = var2;
                    _fun0019_ip = 67; continue _fun0019;
case 65:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0019_ip = 69; continue _fun0019 }
case 35:
                    var4 = _closure2_slot12;
                    var2 = _closure2_slot11;
                    var2 = var2[var9];
                    var2 = var2.index;
                    var3 = 1;
                    var2 = var2 + var3;
                    var2 = var2 + var8;
                    var4 = var4[var2];
                    var2 = null;
                    var2 = var2 != var4;
                    var1 = undefined;
                    if(!var2) { _fun0019_ip = 67; continue _fun0019 }
case 70:
                    var6 = var4.type;
                    var2 = _closure1_slot8;
                    var2 = var2.MEMBER;
                    var1 = undefined;
                    if(!(var6 === var2)) { _fun0019_ip = 67; continue _fun0019 }
case 71:
                    var2 = _closure2_slot11;
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
                    _fun0019_ip = 67; continue _fun0019;
case 69:
                    var2 = _closure2_slot21;
                    var4 = var2.length;
                    var3 = 1;
                    var3 = var4 - var3;
                    var4 = var2.length;
                    var10 = var8 < var4;
                    var6 = undefined;
                    if(!var10) { _fun0019_ip = 72; continue _fun0019 }
case 73:
                    var6 = var2[var8];
case 72:
                    var2 = null;
                    var10 = var2 == var6;
                    var1 = undefined;
                    if(var10) { _fun0019_ip = 67; continue _fun0019 }
case 74:
                    var11 = var6.record;
                    var6 = var6.comparator;
                    var14 = _closure1_slot11;
                    var13 = var14.getMember;
                    var12 = _closure2_slot1;
                    var10 = var11.id;
                    var10 = var13.bind(var14)(var12, var10);
                    var2 = var2 == var10;
                    var1 = undefined;
                    if(var2) { _fun0019_ip = 67; continue _fun0019 }
case 75:
                    var2 = {};
                    var2['user'] = var11;
                    var2['guildMember'] = var10;
                    var10 = _closure2_slot20;
                    var4 = undefined;
                    if(var10) { _fun0019_ip = 76; continue _fun0019 }
case 77:
                    var4 = var6;
case 76:
                    var2['comparator'] = var4;
                    var3 = var8 === var3;
                    var2['end'] = var3;
                    var1 = var2;
case 67:
                    var2 = 0;
                    var4 = var2 === var8;
                    var10 = null;
                    if(!(var10 == var1)) { _fun0019_ip = 78; continue _fun0019 }
case 79:
                    var2 = {};
                    var3 = 'placeholder';
                    var2['type'] = var3;
                    var3 = {};
                    var3['start'] = var4;
                    var6 = _closure2_slot11;
                    var6 = var6[var9];
                    var9 = var6.count;
                    var6 = 1;
                    var6 = var9 - var6;
                    var6 = var8 === var6;
                    var3['end'] = var6;
                    var2['props'] = var3;
                    return var2;
case 78:
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
                    var6 = _closure1_slot15;
                    var6 = var6.NONE;
                    var2['type'] = var6;
                    var2['user'] = var8;
                    var14 = var10 == var9;
                    var6 = undefined;
                    var11 = undefined;
                    if(var14) { _fun0019_ip = 80; continue _fun0019 }
case 81:
                    var11 = var9.nick;
case 80:
                    if(!(var10 == var11)) { _fun0019_ip = 82; continue _fun0019 }
case 83:
                    if(!(var10 != var12)) { _fun0019_ip = 84; continue _fun0019 }
case 85:
                    var14 = '';
                    if(!(var14 !== var12)) { _fun0019_ip = 84; continue _fun0019 }
case 86:
                    var14 = var8.id;
                    if(!(var12 === var14)) { _fun0019_ip = 87; continue _fun0019 }
case 84:
                    var15 = var10 == var13;
                    var14 = undefined;
                    if(var15) { _fun0019_ip = 88; continue _fun0019 }
case 89:
                    var14 = var13.nick;
case 88:
                    var12 = var14;
case 87:
                    var11 = var12;
case 82:
                    var2['nickname'] = var11;
                    var12 = var10 == var9;
                    var11 = undefined;
                    if(var12) { _fun0019_ip = 90; continue _fun0019 }
case 91:
                    var11 = var9.colorString;
case 90:
                    if(!(var10 == var11)) { _fun0019_ip = 92; continue _fun0019 }
case 93:
                    var14 = var10 == var13;
                    var12 = undefined;
                    if(var14) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                    var12 = var13.colorString;
case 94:
                    var11 = var12;
case 92:
                    var2['usernameColor'] = var11;
                    var12 = var10 == var9;
                    var11 = undefined;
                    if(var12) { _fun0019_ip = 96; continue _fun0019 }
case 97:
                    var11 = var9.colorStrings;
case 96:
                    if(!(var10 == var11)) { _fun0019_ip = 98; continue _fun0019 }
case 99:
                    var14 = var10 == var13;
                    var12 = undefined;
                    if(var14) { _fun0019_ip = 100; continue _fun0019 }
case 101:
                    var12 = var13.colorStrings;
case 100:
                    var11 = var12;
case 98:
                    var2['roleColors'] = var11;
                    var11 = _closure2_slot6;
                    var2['isNameplatedRow'] = var11;
                    var11 = var10 == var9;
                    var12 = undefined;
                    if(var11) { _fun0019_ip = 102; continue _fun0019 }
case 103:
                    var12 = var9.premiumSince;
case 102:
                    if(!(var10 == var12)) { _fun0019_ip = 104; continue _fun0019 }
case 105:
                    var14 = var10 == var13;
                    var11 = undefined;
                    if(var14) { _fun0019_ip = 106; continue _fun0019 }
case 107:
                    var11 = var13.premiumSince;
case 106:
                    var12 = var11;
case 104:
                    var13 = var10 != var12;
                    var11 = undefined;
                    if(!var13) { _fun0019_ip = 108; continue _fun0019 }
case 109:
                    var11 = var12;
case 108:
                    var2['premiumSince'] = var11;
                    if(!(var10 == var9)) { _fun0019_ip = 110; continue _fun0019 }
case 111:
                    var10 = _closure2_slot15;
                    var8 = var8.id;
                    var8 = var10 === var8;
                    _fun0019_ip = 112; continue _fun0019;
case 110:
                    var8 = var9.isOwner;
case 112:
                    var2['isOwner'] = var8;
                    var8 = _closure2_slot1;
                    var2['guildId'] = var8;
                    var7 = _closure2_slot7;
                    var2['canShowDisplayNameStylesFont'] = var7;
                    var7 = function onPress(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var6 = arg1;
                            var1 = _closure2_slot3;
                            var7 = null;
                            if(!(var7 != var1)) { _fun0021_ip = 113; continue _fun0021 }
case 114:
                            var3 = _closure2_slot3;
                            var2 = {};
                            var2['user'] = var6;
                            var5 = _closure3_slot2;
                            var1 = undefined;
                            var5 = var5.bind(var1)();
                            var2['index'] = var5;
                            var1 = var3.bind(var1)(var2);
case 113:
                            var1 = _closure2_slot5;
                            if(!var1) { _fun0021_ip = 115; continue _fun0021 }
case 116:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = var6.id;
                            var1['userId'] = var6;
                            var6 = _closure2_slot0;
                            var5 = _closure1_slot7;
                            if(!(var6 === var5)) { _fun0021_ip = 117; continue _fun0021 }
case 118:
                            var5 = _closure2_slot14;
                            _fun0021_ip = 119; continue _fun0021;
case 117:
                            var5 = _closure2_slot0;
case 119:
                            var1['channelId'] = var5;
                            var5 = _closure3_slot4;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if(var7) { _fun0021_ip = 120; continue _fun0021 }
case 61:
                            var6 = _closure3_slot4;
                            var5 = var6.colorRoleId;
case 120:
                            var1['roleId'] = var5;
                            var4 = _closure2_slot8;
                            var1['sourceAnalyticsLocations'] = var4;
                            var1 = var2.bind(var3)(var1);
case 115:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onPress'] = var7;
                    var5 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if(!(var1 == var2)) { _fun0022_ip = 3; continue _fun0022 }
case 39:
                            var1 = undefined;
                            return var1;
case 3:
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
            var21 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot19;
            var2 = _closure1_slot18;
            var1 = {};
            var8 = null;
            if(!var5) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            var28 = _closure1_slot19;
            var9 = _closure1_slot18;
            var5 = {};
            var32 = _closure1_slot17;
            var31 = _closure1_slot6;
            var29 = {};
            var33 = {};
            var38 = _closure1_slot1;
            var37 = _closure1_slot3;
            var34 = 25;
            var34 = var37[var34];
            var34 = var38.bind(var4)(var34);
            var34 = var34.spacing;
            var34 = var34.PX_16;
            var33['marginHorizontal'] = var34;
            var29['style'] = var33;
            var34 = _closure1_slot0;
            var33 = 26;
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
case 121:
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot17;
            var8 = _closure1_slot0;
            var28 = _closure1_slot3;
            var7 = 27;
            var7 = var28[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.UsersFastList;
            var7 = {};
            var7['ref'] = var27;
            if(!var26) { _fun0001_ip = 123; continue _fun0001 }
case 124:
            if(var10) { _fun0001_ip = 123; continue _fun0001 }
case 125:
            var26 = var22.length;
            var22 = new Array(1);
            var22[0] = var26;
            _fun0001_ip = 126; continue _fun0001;
case 123:
            if(var10) { _fun0001_ip = 127; continue _fun0001 }
case 128:
            var26 = var25.groups;
            var25 = var26.map;
            var23 = function(arg1) {
                var1 = arg1;
                var1 = var1.count;
                return var1;
            };
            var23 = var25.bind(var26)(var23);
            _fun0001_ip = 129; continue _fun0001;
case 127:
            var25 = var24.length;
            var24 = new Array(1);
            var24[0] = var25;
            var23 = var24;
case 129:
            var22 = var23;
case 126:
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
            if(!var10) { _fun0001_ip = 130; continue _fun0001 }
case 131:
            var6 = 'guild-channel-user-list-search-results';
case 130:
            var6 = var9.bind(var4)(var8, var7, var6);
            var5[1] = var6;
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
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();