// app/modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
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
            if(!(var30 === var4)) { _fun0001_ip = 61; continue _fun0001 }
 57:
            var30 = new Array(0);
 61:
            var23 = var1.rowMode;
            if(!(var23 === var4)) { _fun0001_ip = 84; continue _fun0001 }
 71:
            var2 = _closure1_slot7;
            var23 = var2.ACTIONS;
 84:
            var _closure2_slot4 = var23;
            var13 = var1.autoFocusSearch;
            if(!(var13 === var4)) { _fun0001_ip = 100; continue _fun0001 }
 98:
            var13 = false;
 100:
            var31 = var1.withGuildMembers;
            if(!(var31 === var4)) { _fun0001_ip = 112; continue _fun0001 }
 110:
            var31 = false;
 112:
            var29 = var1.withAffinitySuggestions;
            if(!(var29 === var4)) { _fun0001_ip = 124; continue _fun0001 }
 122:
            var29 = true;
 124:
            var10 = var1.withFriends;
            if(!(var10 === var4)) { _fun0001_ip = 136; continue _fun0001 }
 134:
            var10 = true;
 136:
            var28 = var1.withGameFriends;
            if(!(var28 === var4)) { _fun0001_ip = 148; continue _fun0001 }
 146:
            var28 = false;
 148:
            var21 = var1.withFriendRequests;
            if(!(var21 === var4)) { _fun0001_ip = 160; continue _fun0001 }
 158:
            var21 = false;
 160:
            var20 = var1.withFriendRequestsIncoming;
            if(!(var20 === var4)) { _fun0001_ip = 172; continue _fun0001 }
 170:
            var20 = false;
 172:
            var17 = var1.withFriendRequestsOutgoing;
            if(!(var17 === var4)) { _fun0001_ip = 184; continue _fun0001 }
 182:
            var17 = false;
 184:
            var16 = var1.withFriendRequestsSpam;
            if(!(var16 === var4)) { _fun0001_ip = 196; continue _fun0001 }
 194:
            var16 = false;
 196:
            var22 = var1.withFriendSuggestions;
            if(!(var22 === var4)) { _fun0001_ip = 208; continue _fun0001 }
 206:
            var22 = false;
 208:
            var8 = var1.hideSearchOnDefaultNoResults;
            if(!(var8 === var4)) { _fun0001_ip = 220; continue _fun0001 }
 218:
            var8 = false;
 220:
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
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 19; continue _fun0002 }
 13:
                    var4 = new Array(0);
                    _fun0002_ip = 23; continue _fun0002;
 19:
                    var4 = _closure2_slot0;
 23:
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
 0:
                    var3 = _closure2_slot6;
                    var1 = arg1;
                    var7 = var3[var1];
                    var5 = _closure1_slot6;
                    var4 = var5.getUser;
                    var3 = var7.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0003_ip = 150; continue _fun0003 }
 43:
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
 150:
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
 0:
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
                    if(!(var10 !== var9)) { _fun0004_ip = 103; continue _fun0004 }
 100:
                    var6 = var9;
 103:
                    var2['nickname'] = var6;
                    var6 = _closure2_slot2;
                    var2['onPress'] = var6;
                    var6 = _closure2_slot3;
                    var2['handleMessage'] = var6;
                    var9 = _closure2_slot1;
                    var6 = null;
                    var9 = var6 == var9;
                    var10 = undefined;
                    if(var9) { _fun0004_ip = 159; continue _fun0004 }
 140:
                    var12 = _closure2_slot1;
                    var11 = var12.includes;
                    var9 = var8.id;
                    var10 = var11.bind(var12)(var9);
 159:
                    var9 = var6 != var10;
                    if(!var9) { _fun0004_ip = 169; continue _fun0004 }
 166:
                    var9 = var10;
 169:
                    var2['disabled'] = var9;
                    var9 = _closure2_slot0;
                    var9 = var6 == var9;
                    var7 = undefined;
                    if(var9) { _fun0004_ip = 205; continue _fun0004 }
 186:
                    var10 = _closure2_slot0;
                    var9 = var10.includes;
                    var8 = var8.id;
                    var7 = var9.bind(var10)(var8);
 205:
                    var6 = var6 != var7;
                    if(!var6) { _fun0004_ip = 215; continue _fun0004 }
 212:
                    var6 = var7;
 215:
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
            if(var2) { _fun0001_ip = 610; continue _fun0001 }
 607:
            var25 = var30;
 610:
            var12['actions'] = var25;
            var25 = undefined;
            if(var2) { _fun0001_ip = 631; continue _fun0001 }
 620:
            var25 = undefined;
            if(!var10) { _fun0001_ip = 631; continue _fun0001 }
 625:
            var25 = var15.searchBarRowContainer;
 631:
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
 0:
                    var1 = _closure2_slot7;
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
            if(!var1) { _fun0001_ip = 717; continue _fun0001 }
 713:
            var1 = var9 != var24;
 717:
            if(!var8) { _fun0001_ip = 723; continue _fun0001 }
 720:
            var8 = !var14;
 723:
            if(!var8) { _fun0001_ip = 729; continue _fun0001 }
 726:
            var8 = !var2;
 729:
            var3 = _closure1_slot8;
            if(var14) { _fun0001_ip = 951; continue _fun0001 }
 739:
            var2 = _closure1_slot5;
            var6 = {};
            var26 = var15.noResults;
            if(var1) { _fun0001_ip = 904; continue _fun0001 }
 757:
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
            if(!var10) { _fun0001_ip = 875; continue _fun0001 }
 869:
            var30 = var15.searchBarRowContainer;
 875:
            var28['style'] = var30;
            var28 = var27.bind(var4)(var29, var28);
            var1['children'] = var28;
            var1 = var27.bind(var4)(var25, var1);
            var6['children'] = var1;
            var1 = var6;
            _fun0001_ip = 943; continue _fun0001;
 904:
            var25 = new Array(2);
            var25[0] = var26;
            var26 = undefined;
            if(!var10) { _fun0001_ip = 928; continue _fun0001 }
 917:
            var26 = undefined;
            if(var8) { _fun0001_ip = 928; continue _fun0001 }
 922:
            var26 = var15.searchBarRowContainer;
 928:
            var25[1] = var26;
            var6['style'] = var25;
            var6['children'] = var24;
            var1 = var6;
 943:
            var6 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 1027; continue _fun0001;
 951:
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
 1027:
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = !var5;
            if(!var7) { _fun0001_ip = 1082; continue _fun0001 }
 1043:
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
 1082:
            var5 = new Array(3);
            var5[0] = var7;
            var7 = null;
            if(!var10) { _fun0001_ip = 1194; continue _fun0001 }
 1095:
            var7 = null;
            if(var8) { _fun0001_ip = 1194; continue _fun0001 }
 1100:
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
            if(!var13) { _fun0001_ip = 1173; continue _fun0001 }
 1170:
            var13 = var14;
 1173:
            var11['autoFocus'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 1194:
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