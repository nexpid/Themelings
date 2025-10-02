// app/modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingBottom'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var4['searchBarContainer'] = var9;
    var9 = {};
    var9['height'] = var1;
    var13 = 40;
    var9['minHeight'] = var13;
    var4['searchBar'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingTop'] = var13;
    var4['searchBarRowContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['noResults'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginTop'] = var10;
    var4['searchWithPadding'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SearchableUserList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.selectedUserIds;
            var _closure2_slot0 = var9;
            var27 = var1.disabledUserIds;
            var _closure2_slot1 = var27;
            var26 = var1.onSelectUser;
            var _closure2_slot2 = var26;
            var25 = var1.handleMessage;
            var _closure2_slot3 = var25;
            var30 = var1.actions;
            var4 = undefined;
            if(!(var30 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var30 = new Array(0);
case 2:
            var23 = var1.rowMode;
            if(!(var23 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot7;
            var23 = var2.ACTIONS;
case 4:
            var _closure2_slot4 = var23;
            var13 = var1.autoFocusSearch;
            if(!(var13 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = false;
case 6:
            var31 = var1.withGuildMembers;
            if(!(var31 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var31 = false;
case 8:
            var29 = var1.withAffinitySuggestions;
            if(!(var29 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var29 = true;
case 10:
            var10 = var1.withFriends;
            if(!(var10 === var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = true;
case 12:
            var28 = var1.withGameFriends;
            if(!(var28 === var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var28 = false;
case 14:
            var21 = var1.withFriendRequests;
            if(!(var21 === var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var21 = false;
case 16:
            var20 = var1.withFriendRequestsIncoming;
            if(!(var20 === var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var20 = false;
case 18:
            var17 = var1.withFriendRequestsOutgoing;
            if(!(var17 === var4)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var17 = false;
case 20:
            var16 = var1.withFriendRequestsSpam;
            if(!(var16 === var4)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = false;
case 22:
            var22 = var1.withFriendSuggestions;
            if(!(var22 === var4)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var22 = false;
case 24:
            var8 = var1.hideSearchOnDefaultNoResults;
            if(!(var8 === var4)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = false;
case 26:
            var24 = var1.defaultNoResultsFound;
            var5 = var1.disableGradient;
            var7 = var1.disableStickySections;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot11;
            var15 = var1.bind(var4)();
            var19 = _closure1_slot4;
            var2 = var19.useState;
            var1 = '';
            var3 = var2.bind(var19)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var12 = var2.bind(var4)(var3, var1);
            var3 = 0;
            var1 = var12[var3];
            var2 = 1;
            var18 = var12[var2];
            var14 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 8;
            var2 = var12[var2];
            var14 = var14.bind(var4)(var2);
            var2 = {};
            var2['query'] = var1;
            var2['withGuildMembers'] = var31;
            var2['withAffinitySuggestions'] = var29;
            var2['withFriends'] = var10;
            var2['withGameFriends'] = var28;
            var2['withFriendSuggestions'] = var22;
            var2['withFriendRequests'] = var21;
            var2['withFriendRequestsIncoming'] = var20;
            var2['withFriendRequestsOutgoing'] = var17;
            var2['withFriendRequestsSpam'] = var16;
            var28 = var14.bind(var4)(var2);
            _closure2_slot5 = var28;
            var16 = var19.useMemo;
            var14 = new Array(1);
            var14[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var4 = new Array(0);
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var4 = _closure2_slot0;
case 30:
                    var3 = var4.map;
                    var2 = _closure1_slot6;
                    var2 = var2.getUser;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.isNotNullish;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var4 = _closure1_slot1;
                    var1 = 10;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var16 = var16.bind(var19)(var2, var14);
            _closure2_slot6 = var16;
            var17 = var19.useCallback;
            var14 = new Array(2);
            var14[0] = var26;
            var14[1] = var16;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = arg1;
                    var7 = var3[var1];
                    var5 = _closure1_slot6;
                    var4 = var5.getUser;
                    var3 = var7.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var2 = _closure2_slot2;
                    var8 = undefined;
                    var2 = var2.bind(var8)(var3);
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 11;
                    var1 = var9[var1];
                    var1 = var4.bind(var8)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 12;
                    var5 = var9[var1];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var1 = var9[var1];
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.t;
                    var4 = var1.srlxBw;
                    var1 = {};
                    var7 = var7.text;
                    var1['text'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var17.bind(var19)(var2, var14);
            var20 = var19.useMemo;
            var14 = new Array(1);
            var14[0] = var28;
            var2 = function() {
                var3 = _closure2_slot5;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.items;
                    var1 = var1.length;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var20.bind(var19)(var2, var14);
            var20 = var19.useCallback;
            var14 = new Array(1);
            var14[0] = var28;
            var2 = function(arg1) {
                var1 = {};
                var2 = 'section';
                var1['type'] = var2;
                var2 = {};
                var4 = _closure2_slot5;
                var3 = arg1;
                var3 = var4[var3];
                var3 = var3.title;
                var2['title'] = var3;
                var1['props'] = var2;
                return var1;
            };
            var20 = var20.bind(var19)(var2, var14);
            var2 = var1.trim;
            var2 = var2.bind(var1)();
            var2 = var2.length;
            var2 = var2 > var3;
            var21 = var19.useCallback;
            var14 = new Array(6);
            var14[0] = var28;
            var14[1] = var27;
            var14[2] = var26;
            var14[3] = var25;
            var14[4] = var23;
            var14[5] = var9;
            var9 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var4 = arg2;
                    var1 = _closure2_slot5;
                    var1 = var1[var2];
                    var1 = var1.items;
                    var1 = var1[var4];
                    var6 = var1.type;
                    var8 = var1.user;
                    var9 = var1.firstMatch;
                    var1 = _closure2_slot5;
                    var1 = var1[var2];
                    var1 = var1.items;
                    var2 = var1.length;
                    var1 = 1;
                    var3 = var2 - var1;
                    var1 = {};
                    var2 = 'user';
                    var1['type'] = var2;
                    var2 = {};
                    var2['type'] = var6;
                    var2['user'] = var8;
                    var10 = var8.username;
                    var6 = undefined;
                    if(!(var10 !== var9)) { _fun0004_ip = 33; continue _fun0004 }
case 6:
                    var6 = var9;
case 33:
                    var2['nickname'] = var6;
                    var6 = _closure2_slot2;
                    var2['onPress'] = var6;
                    var6 = _closure2_slot3;
                    var2['handleMessage'] = var6;
                    var9 = _closure2_slot1;
                    var6 = null;
                    var9 = var6 == var9;
                    var10 = undefined;
                    if(var9) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var12 = _closure2_slot1;
                    var11 = var12.includes;
                    var9 = var8.id;
                    var10 = var11.bind(var12)(var9);
case 34:
                    var9 = var6 != var10;
                    if(!var9) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var9 = var10;
case 36:
                    var2['disabled'] = var9;
                    var9 = _closure2_slot0;
                    var9 = var6 == var9;
                    var7 = undefined;
                    if(var9) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var10 = _closure2_slot0;
                    var9 = var10.includes;
                    var8 = var8.id;
                    var7 = var9.bind(var10)(var8);
case 38:
                    var6 = var6 != var7;
                    if(!var6) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var6 = var7;
case 40:
                    var2['selected'] = var6;
                    var5 = _closure2_slot4;
                    var2['mode'] = var5;
                    var5 = 0;
                    var5 = var5 === var4;
                    var2['start'] = var5;
                    var3 = var4 === var3;
                    var2['end'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var21 = var21.bind(var19)(var9, var14);
            var14 = var19.useRef;
            var9 = null;
            var23 = var14.bind(var19)(var9);
            _closure2_slot7 = var23;
            var14 = _closure1_slot0;
            var31 = 13;
            var12 = var12[var31];
            var19 = var14.bind(var4)(var12);
            var14 = var19.useUserListActionsProps;
            var12 = {};
            var25 = undefined;
            if(var2) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var25 = var30;
case 42:
            var12['actions'] = var25;
            var25 = undefined;
            if(var2) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var25 = undefined;
            if(!var10) { _fun0001_ip = 44; continue _fun0001 }
case 46:
            var25 = var15.searchBarRowContainer;
case 44:
            var12['style'] = var25;
            var12 = var14.bind(var19)(var12);
            var19 = var12.renderHeader;
            var12 = var12.headerSize;
            var27 = _closure1_slot4;
            var26 = var27.useLayoutEffect;
            var25 = new Array(1);
            var25[0] = var1;
            var14 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var2 = var3.scrollToTop;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var26.bind(var27)(var14, var25);
            var14 = var22.some;
            var6 = function(arg1) {
                var2 = arg1;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var14 = var14.bind(var22)(var6);
            var1 = var1.length;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var1 = var9 != var24;
case 49:
            if(!var8) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var8 = !var14;
case 51:
            if(!var8) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var8 = !var2;
case 53:
            var3 = _closure1_slot8;
            if(var14) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var2 = _closure1_slot5;
            var6 = {};
            var26 = var15.noResults;
            if(var1) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var6['style'] = var26;
            var27 = _closure1_slot8;
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var1 = 15;
            var1 = var28[var1];
            var25 = var25.bind(var4)(var1);
            var1 = {};
            var29 = _closure1_slot0;
            var32 = 12;
            var33 = var28[var32];
            var33 = var29.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var28[var32];
            var32 = var29.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.V6nAfH;
            var32 = var33.bind(var34)(var32);
            var1['title'] = var32;
            var28 = var28[var31];
            var28 = var29.bind(var4)(var28);
            var29 = var28.UserFlashListActions;
            var28 = {};
            var28['actions'] = var30;
            var30 = undefined;
            if(!var10) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var30 = var15.searchBarRowContainer;
case 59:
            var28['style'] = var30;
            var28 = var27.bind(var4)(var29, var28);
            var1['children'] = var28;
            var1 = var27.bind(var4)(var25, var1);
            var6['children'] = var1;
            var1 = var6;
            _fun0001_ip = 61; continue _fun0001;
case 57:
            var25 = new Array(2);
            var25[0] = var26;
            var26 = undefined;
            if(!var10) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var26 = undefined;
            if(var8) { _fun0001_ip = 62; continue _fun0001 }
case 64:
            var26 = var15.searchBarRowContainer;
case 62:
            var25[1] = var26;
            var6['style'] = var25;
            var6['children'] = var24;
            var1 = var6;
case 61:
            var6 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 65; continue _fun0001;
case 55:
            var2 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 14;
            var1 = var24[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.UsersFastList;
            var1 = {};
            var1['ref'] = var23;
            var1['sections'] = var22;
            var1['getItemProps'] = var21;
            var1['getSectionProps'] = var20;
            var1['renderListHeader'] = var19;
            var1['listHeaderSize'] = var12;
            var12 = 12;
            var1['insetEnd'] = var12;
            var1['disableStickySections'] = var7;
            var6 = var3.bind(var4)(var2, var1);
case 65:
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = !var5;
            if(!var7) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var19 = _closure1_slot8;
            var12 = _closure1_slot1;
            var20 = _closure1_slot2;
            var5 = 16;
            var5 = var20[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var20 = true;
            var5['absolute'] = var20;
            var7 = var19.bind(var4)(var12, var5);
case 66:
            var5 = new Array(3);
            var5[0] = var7;
            var7 = null;
            if(!var10) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var7 = null;
            if(var8) { _fun0001_ip = 68; continue _fun0001 }
case 70:
            var10 = _closure1_slot8;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var15.searchBarContainer;
            var8['style'] = var12;
            var12 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = 17;
            var11 = var19[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['onChangeText'] = var18;
            var11['onRemove'] = var17;
            var11['tags'] = var16;
            var15 = var15.searchBar;
            var11['style'] = var15;
            if(!var13) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var13 = var14;
case 71:
            var11['autoFocus'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 68:
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();