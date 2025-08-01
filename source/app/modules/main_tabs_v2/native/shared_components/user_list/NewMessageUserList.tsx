// app/modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var5 = function matchGroupDM(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var9 = arg3;
            var3 = var4.length;
            var1 = 0;
            if(!(var1 === var3)) { _fun0004_ip = 102; continue _fun0004 }
 20:
            var5 = var2.name;
            var3 = '';
            if(!(var3 !== var5)) { _fun0004_ip = 102; continue _fun0004 }
 33:
            var5 = var2.name;
            var3 = var5.toLowerCase;
            var6 = var3.bind(var5)();
            var3 = var6.startsWith;
            var3 = var3.bind(var6)(var9);
            if(var3) { _fun0004_ip = 371; continue _fun0004 }
 65:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var3 = var3.bind(var5)(var9, var6);
            if(var3) { _fun0004_ip = 366; continue _fun0004 }
 102:
            var3 = '';
            if(!(var3 !== var9)) { _fun0004_ip = 364; continue _fun0004 }
 113:
            var3 = _closure1_slot15;
            var7 = undefined;
            var5 = var3.bind(var7)(var4);
            var4 = var5.bind(var7)();
            var3 = var4.done;
            if(var3) { _fun0004_ip = 180; continue _fun0004 }
 139:
            var10 = var4.value;
            var6 = var2.recipients;
            var3 = var6.includes;
            var3 = var3.bind(var6)(var10);
            if(var3) { _fun0004_ip = 165; continue _fun0004 }
 163:
            return var1;
 165:
            var6 = var5.bind(var7)();
            var3 = var6.done;
            var4 = var6;
            if(!var3) { _fun0004_ip = 139; continue _fun0004 }
 180:
            var3 = _closure1_slot15;
            var2 = var2.recipients;
            var6 = var3.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = 10;
            var4 = null;
            if(var2) { _fun0004_ip = 362; continue _fun0004 }
 215:
            var11 = var3.value;
            var10 = _closure1_slot8;
            var2 = var10.getUser;
            var2 = var2.bind(var10)(var11);
            if(!(var4 != var2)) { _fun0004_ip = 332; continue _fun0004 }
 239:
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var5];
            var11 = var11.bind(var7)(var10);
            var12 = var2.username;
            var10 = var12.toLowerCase;
            var10 = var10.bind(var12)();
            var10 = var11.bind(var7)(var9, var10);
            if(var10) { _fun0004_ip = 357; continue _fun0004 }
 280:
            var10 = var2.globalName;
            if(!(var4 != var10)) { _fun0004_ip = 332; continue _fun0004 }
 290:
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var5];
            var10 = var11.bind(var7)(var10);
            var11 = var2.globalName;
            var2 = var11.toLowerCase;
            var2 = var2.bind(var11)();
            var2 = var10.bind(var7)(var9, var2);
            if(var2) { _fun0004_ip = 352; continue _fun0004 }
 332:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var3 = var10;
            if(var2) { _fun0004_ip = 362; continue _fun0004 }
 347:
            _fun0004_ip = 215; continue _fun0004;
 352:
            var2 = 1;
            return var2;
 357:
            var2 = 1;
            return var2;
 362:
            return var1;
 364:
            return var1;
 366:
            var1 = 2;
            return var1;
 371:
            var1 = 3;
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function filterGroupDMs(arg1) {
        var2 = arg1;
        var1 = var2.isGroupDM;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot18 = var4;
    var2 = function useSearchGDMNames(arg1, arg2, arg3) {
        var8 = arg1;
        var7 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var1 = new Array(0);
        var9 = var4.bind(var5)(var1);
        var5 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var5 = var5.bind(var4)(var9, var1);
        var1 = 0;
        var1 = var5[var1];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot3 = var4;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure2_slot0;
                if(var3) { _fun0005_ip = 35; continue _fun0005 }
 12:
                var5 = _closure2_slot3;
                var4 = _closure1_slot13;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _fun0005_ip = 238; continue _fun0005;
 35:
                var4 = _closure2_slot2;
                var3 = '';
                if(!(var3 === var4)) { _fun0005_ip = 70; continue _fun0005 }
 47:
                var5 = _closure2_slot3;
                var4 = _closure1_slot13;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _fun0005_ip = 238; continue _fun0005;
 70:
                var4 = _closure2_slot2;
                var3 = var4.toLowerCase;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var3 = global;
                var6 = var3.Object;
                var5 = var6.values;
                var7 = _closure1_slot6;
                var4 = var7.getMutablePrivateChannels;
                var4 = var4.bind(var7)();
                var6 = var5.bind(var6)(var4);
                var5 = var6.filter;
                var4 = _closure1_slot18;
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg1) {
                    var6 = arg1;
                    var1 = new Array(2);
                    var1[0] = var6;
                    var5 = _closure1_slot17;
                    var4 = _closure2_slot1;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var6, var4, var3);
                    var1[1] = var2;
                    return var1;
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.filter;
                var4 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = arg1;
                        var1 = var4[Symbol.iterator];
                        var4 = var1().next;
                        var2 = var4().value;
                        var2 = var1;
                        var6 = undefined;
                        var3 = var2 === var6;
                        var2 = undefined;
                        if(var3) { _fun0006_ip = 49; continue _fun0006 }
 24:
                        var5 = var4().value;
                        var4 = var1;
                        var4 = var4 === var6;
                        var2 = undefined;
                        var3 = var4;
                        if(var4) { _fun0006_ip = 49; continue _fun0006 }
 43:
                        var2 = var5;
                        var3 = var4;
 49:
                        if(var3) { _fun0006_ip = 55; continue _fun0006 }
 52:
                        var1.return();
 55:
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    }
                };
                var7 = var5.bind(var6)(var4);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.sortBy;
                var4 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var1 = var2;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if(var3) { _fun0007_ip = 49; continue _fun0007 }
 24:
                        var5 = var4().value;
                        var4 = var2;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0007_ip = 49; continue _fun0007 }
 43:
                        var1 = var5;
                        var3 = var4;
 49:
                        if(var3) { _fun0007_ip = 55; continue _fun0007 }
 52:
                        var2.return();
 55:
                        var1 = -var1;
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var7, var4);
                var4 = var5.map;
                var2 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var4 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        if(var3) { _fun0008_ip = 25; continue _fun0008 }
 22:
                        var1 = var4;
 25:
                        if(var3) { _fun0008_ip = 31; continue _fun0008 }
 28:
                        var2.return();
 31:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var1 = _closure2_slot3;
                var1 = var1.bind(var3)(var2);
 238:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot19 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var14.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var15 = 1;
    var10 = var9[var15];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var14.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.UserRowModes;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot10 = var10;
    var10 = var7.Fragment;
    var _closure1_slot11 = var10;
    var7 = var7.jsxs;
    var _closure1_slot12 = var7;
    var7 = new Array(0);
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var9[var7];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var12 = {};
    var13 = 9;
    var16 = var9[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var12['paddingTop'] = var16;
    var7['searchBarRowContainer'] = var12;
    var12 = {};
    var12['flex'] = var15;
    var13 = var9[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var12['backgroundColor'] = var13;
    var7['noResults'] = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot14 = var7;
    var7 = 22;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function NewMessageUserList(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var11 = var1.selectedUserIds;
            var _closure2_slot0 = var11;
            var24 = var1.disabledUserIds;
            var _closure2_slot1 = var24;
            var12 = var1.onSelectUser;
            var _closure2_slot2 = var12;
            var15 = var1.onQueryChanged;
            var _closure2_slot3 = var15;
            var36 = var1.actions;
            var4 = undefined;
            if(!(var36 === var4)) { _fun0009_ip = 61; continue _fun0009 }
 57:
            var36 = new Array(0);
 61:
            var37 = var1.noResultActions;
            var8 = var1.rowMode;
            if(!(var8 === var4)) { _fun0009_ip = 90; continue _fun0009 }
 77:
            var2 = _closure1_slot9;
            var8 = var2.ACTIONS;
 90:
            var _closure2_slot4 = var8;
            var9 = var1.tagListInputRef;
            var17 = var1.autoFocusSearch;
            if(!(var17 === var4)) { _fun0009_ip = 112; continue _fun0009 }
 110:
            var17 = false;
 112:
            var34 = var1.withGuildMembers;
            if(!(var34 === var4)) { _fun0009_ip = 124; continue _fun0009 }
 122:
            var34 = false;
 124:
            var33 = var1.withAffinitySuggestions;
            if(!(var33 === var4)) { _fun0009_ip = 136; continue _fun0009 }
 134:
            var33 = true;
 136:
            var32 = var1.withFriends;
            if(!(var32 === var4)) { _fun0009_ip = 148; continue _fun0009 }
 146:
            var32 = true;
 148:
            var30 = var1.withGameFriends;
            if(!(var30 === var4)) { _fun0009_ip = 160; continue _fun0009 }
 158:
            var30 = true;
 160:
            var28 = var1.withFriendRequests;
            if(!(var28 === var4)) { _fun0009_ip = 172; continue _fun0009 }
 170:
            var28 = false;
 172:
            var26 = var1.withFriendRequestsIncoming;
            if(!(var26 === var4)) { _fun0009_ip = 184; continue _fun0009 }
 182:
            var26 = false;
 184:
            var25 = var1.withFriendRequestsOutgoing;
            if(!(var25 === var4)) { _fun0009_ip = 196; continue _fun0009 }
 194:
            var25 = false;
 196:
            var29 = var1.withFriendSuggestions;
            if(!(var29 === var4)) { _fun0009_ip = 208; continue _fun0009 }
 206:
            var29 = false;
 208:
            var23 = var1.withGDMNames;
            if(!(var23 === var4)) { _fun0009_ip = 220; continue _fun0009 }
 218:
            var23 = false;
 220:
            var27 = var1.defaultNoResultsFound;
            var6 = var1.overrideResults;
            var10 = var1.forceSearchResults;
            var13 = var1.onForceSearchResults;
            var14 = var1.onSearchFocus;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot14;
            var31 = var1.bind(var4)();
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var1 = '';
            var7 = var2.bind(var7)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var7 = var2.bind(var4)(var7, var1);
            var20 = 0;
            var1 = var7[var20];
            var2 = 1;
            var2 = var7[var2];
            _closure2_slot5 = var2;
            var21 = _closure1_slot1;
            var7 = _closure1_slot2;
            var19 = 12;
            var2 = var7[var19];
            var18 = var21.bind(var4)(var2);
            var16 = var18.useExperiment;
            var2 = {};
            var22 = 'new-message';
            var2['location'] = var22;
            var2 = var16.bind(var18)(var2);
            var2 = var2.fastList;
            _closure2_slot6 = var2;
            var22 = _closure1_slot4;
            var18 = var22.useCallback;
            var16 = new Array(1);
            var16[0] = var15;
            var15 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0010_ip = 36; continue _fun0010 }
 27:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
 36:
                    return var1;
                }
            };
            var15 = var18.bind(var22)(var15, var16);
            var16 = var1.trim;
            var22 = var16.bind(var1)();
            var16 = var22.length;
            var16 = var16 > var20;
            var18 = 13;
            var18 = var7[var18];
            var21 = var21.bind(var4)(var18);
            var18 = {};
            var18['query'] = var22;
            var18['withGuildMembers'] = var34;
            var18['withAffinitySuggestions'] = var33;
            var18['withFriends'] = var32;
            var18['withGameFriends'] = var30;
            var18['withFriendSuggestions'] = var29;
            var18['withFriendRequests'] = var28;
            var18['withFriendRequestsIncoming'] = var26;
            var18['withFriendRequestsOutgoing'] = var25;
            var25 = true;
            var18['excludeCurrentUser'] = var25;
            var18 = var21.bind(var4)(var18);
            _closure2_slot7 = var18;
            var21 = _closure1_slot19;
            var25 = var21.bind(var4)(var23, var11, var22);
            _closure2_slot8 = var25;
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var21 = new Array(2);
            var21[0] = var25;
            var21[1] = var18;
            var18 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var5 = _closure2_slot7;
                    var4 = var5.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.title;
                        var1['title'] = var3;
                        var4 = var2.items;
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var1 = {};
                            var2 = 'UserSearchItem';
                            var1['type'] = var2;
                            var2 = arg1;
                            var1['data'] = var2;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var1['items'] = var2;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1);
                    var4 = _closure2_slot8;
                    var4 = var4.length;
                    var5 = 0;
                    if(!(var5 !== var4)) { _fun0011_ip = 256; continue _fun0011 }
 44:
                    var4 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 14;
                    var7 = var11[var6];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var11[var6];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.qGlQra;
                    var6 = var7.bind(var8)(var6);
                    var4['title'] = var6;
                    var8 = _closure2_slot8;
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var1 = {};
                        var2 = 'GroupDMChannelRecord';
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['data'] = var2;
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
                    var4['items'] = var6;
                    var6 = _closure2_slot7;
                    var3 = var6.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.title;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 14;
                        var3 = var7[var1];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var1 = var7[var1];
                        var1 = var6.bind(var5)(var1);
                        var1 = var1.t;
                        var1 = var1.y29JXl;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var3.bind(var6)(var2);
                    var2 = -1;
                    if(!(var2 !== var7)) { _fun0011_ip = 223; continue _fun0011 }
 168:
                    var2 = var1.slice;
                    var13 = var2.bind(var1)(var5, var7);
                    var2 = new Array(1);
                    var14 = var2;
                    var12 = 0;
                    var6 = arraySpread(var14, var13, var12);
                    var2[var6] = var4;
                    var3 = 1;
                    var12 = var6 + var3;
                    var3 = var1.slice;
                    var13 = var3.bind(var1)(var7);
                    var14 = var2;
                    var3 = arraySpread(var14, var13, var12);
                    _fun0011_ip = 254; continue _fun0011;
 223:
                    var3 = new Array(1);
                    var14 = var3;
                    var13 = var1;
                    var12 = 0;
                    var5 = arraySpread(var14, var13, var12);
                    var3[var5] = var4;
                    var4 = 1;
                    var4 = var5 + var4;
                    var2 = var3;
 254:
                    return var2;
 256:
                    return var1;
                }
            };
            var26 = var22.bind(var23)(var18, var21);
            _closure2_slot9 = var26;
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var21 = new Array(1);
            var21[0] = var26;
            var18 = function() {
                var3 = _closure2_slot9;
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
            var25 = var22.bind(var23)(var18, var21);
            var23 = _closure1_slot4;
            var22 = var23.useCallback;
            var21 = new Array(1);
            var21[0] = var26;
            var18 = function(arg1) {
                var1 = {};
                var2 = 'section';
                var1['type'] = var2;
                var2 = {};
                var4 = _closure2_slot9;
                var3 = arg1;
                var3 = var4[var3];
                var3 = var3.title;
                var2['title'] = var3;
                var1['props'] = var2;
                return var1;
            };
            var23 = var22.bind(var23)(var18, var21);
            var22 = _closure1_slot4;
            var21 = var22.useCallback;
            var18 = new Array(5);
            var18[0] = var26;
            var18[1] = var11;
            var18[2] = var12;
            var18[3] = var24;
            var18[4] = var8;
            var8 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var5 = arg1;
                    var3 = arg2;
                    var1 = _closure2_slot9;
                    var1 = var1[var5];
                    var1 = var1.items;
                    var1 = var1[var3];
                    var2 = 0;
                    var4 = var2 === var3;
                    var2 = _closure2_slot9;
                    var2 = var2[var5];
                    var2 = var2.items;
                    var5 = var2.length;
                    var2 = 1;
                    var2 = var5 - var2;
                    var3 = var3 === var2;
                    var5 = var1.type;
                    var2 = 'UserSearchItem';
                    if(!(var2 !== var5)) { _fun0012_ip = 147; continue _fun0012 }
 78:
                    var5 = var1.type;
                    var2 = 'GroupDMChannelRecord';
                    if(!(var2 !== var5)) { _fun0012_ip = 95; continue _fun0012 }
 91:
                    var2 = undefined;
                    return var2;
 95:
                    var2 = {};
                    var5 = 'gdm';
                    var2['type'] = var5;
                    var5 = {};
                    var6 = var1.data;
                    var5['channel'] = var6;
                    var6 = _closure2_slot2;
                    var5['onPress'] = var6;
                    var6 = true;
                    var5['arrow'] = var6;
                    var5['start'] = var4;
                    var5['end'] = var3;
                    var2['props'] = var5;
                    return var2;
 147:
                    var1 = var1.data;
                    var6 = var1.type;
                    var5 = var1.user;
                    var11 = var1.firstMatch;
                    var8 = _closure2_slot0;
                    var2 = var8.includes;
                    var1 = var5.id;
                    var8 = var2.bind(var8)(var1);
                    var1 = {};
                    var2 = 'user';
                    var1['type'] = var2;
                    var2 = {};
                    var2['type'] = var6;
                    var2['user'] = var5;
                    var6 = null;
                    var12 = var6 == var11;
                    var10 = undefined;
                    var9 = undefined;
                    if(var12) { _fun0012_ip = 234; continue _fun0012 }
 220:
                    var12 = var5.username;
                    var9 = undefined;
                    if(!(var12 !== var11)) { _fun0012_ip = 234; continue _fun0012 }
 231:
                    var9 = var11;
 234:
                    var2['nickname'] = var9;
                    var9 = _closure2_slot2;
                    var2['onPress'] = var9;
                    var9 = _closure2_slot1;
                    var11 = var6 == var9;
                    var9 = undefined;
                    if(var11) { _fun0012_ip = 279; continue _fun0012 }
 260:
                    var13 = _closure2_slot1;
                    var12 = var13.includes;
                    var11 = var5.id;
                    var9 = var12.bind(var13)(var11);
 279:
                    var6 = var6 != var9;
                    if(!var6) { _fun0012_ip = 289; continue _fun0012 }
 286:
                    var6 = var9;
 289:
                    var2['disabled'] = var6;
                    var2['selected'] = var8;
                    var12 = _closure1_slot7;
                    var11 = var12.isFriend;
                    var9 = var5.id;
                    var9 = var11.bind(var12)(var9);
                    if(!var9) { _fun0012_ip = 327; continue _fun0012 }
 324:
                    if(var8) { _fun0012_ip = 333; continue _fun0012 }
 327:
                    var7 = _closure2_slot4;
                    _fun0012_ip = 343; continue _fun0012;
 333:
                    var8 = _closure1_slot9;
                    var7 = var8.TOGGLE;
 343:
                    var2['mode'] = var7;
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 15;
                    var7 = var13[var7];
                    var7 = var8.bind(var10)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
                    var12 = _closure1_slot1;
                    var11 = 16;
                    var11 = var13[var11];
                    var12 = var12.bind(var10)(var11);
                    var11 = var12.getUserTag;
                    var11 = var11.bind(var12)(var5);
                    var7['children'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var2['subLabel'] = var7;
                    var7 = _closure1_slot7;
                    var6 = var7.isFriend;
                    var5 = var5.id;
                    var5 = var6.bind(var7)(var5);
                    var5 = !var5;
                    var2['arrow'] = var5;
                    var2['start'] = var4;
                    var2['end'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var24 = var21.bind(var22)(var8, var18);
            var18 = _closure1_slot4;
            var8 = var18.useRef;
            var38 = null;
            var26 = var8.bind(var18)(var38);
            _closure2_slot10 = var26;
            var18 = _closure1_slot4;
            var8 = var18.useRef;
            var28 = var8.bind(var18)(var38);
            _closure2_slot11 = var28;
            var8 = _closure1_slot0;
            var39 = 17;
            var7 = var7[var39];
            var18 = var8.bind(var4)(var7);
            var8 = var18.useUserListActionsProps;
            var7 = {};
            var21 = undefined;
            if(var16) { _fun0009_ip = 742; continue _fun0009 }
 739:
            var21 = var36;
 742:
            var7['actions'] = var21;
            var21 = undefined;
            if(var16) { _fun0009_ip = 763; continue _fun0009 }
 752:
            var21 = undefined;
            if(!var32) { _fun0009_ip = 763; continue _fun0009 }
 757:
            var21 = var31.searchBarRowContainer;
 763:
            var7['style'] = var21;
            var7 = var8.bind(var18)(var7);
            var22 = var7.headerSize;
            var21 = var7.renderHeader;
            var29 = _closure1_slot4;
            var18 = var29.useLayoutEffect;
            var8 = new Array(2);
            var8[0] = var1;
            var8[1] = var2;
            var7 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0013_ip = 48; continue _fun0013 }
 10:
                    var2 = _closure2_slot11;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0013_ip = 76; continue _fun0013 }
 25:
                    var3 = var4.scrollToOffset;
                    var2 = {'offset': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
                    _fun0013_ip = 76; continue _fun0013;
 48:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0013_ip = 76; continue _fun0013 }
 63:
                    var2 = var3.scrollToTop;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var18.bind(var29)(var7, var8);
            var7 = var25.some;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var18 = var7.bind(var25)(var3);
            var1 = var1.length;
            var1 = var20 === var1;
            if(!var1) { _fun0009_ip = 853; continue _fun0009 }
 849:
            var1 = var38 != var27;
 853:
            if(!(var38 == var6)) { _fun0009_ip = 1264; continue _fun0009 }
 860:
            var8 = _closure1_slot10;
            if(var18) { _fun0009_ip = 1125; continue _fun0009 }
 870:
            var3 = _closure1_slot5;
            var7 = {};
            var30 = var31.noResults;
            if(var1) { _fun0009_ip = 1080; continue _fun0009 }
 888:
            var7['style'] = var30;
            var33 = _closure1_slot10;
            var29 = _closure1_slot1;
            var34 = _closure1_slot2;
            var1 = 20;
            var1 = var34[var1];
            var29 = var29.bind(var4)(var1);
            var1 = {};
            var35 = _closure1_slot0;
            var40 = 14;
            var41 = var34[var40];
            var41 = var35.bind(var4)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = var34[var40];
            var41 = var35.bind(var4)(var41);
            var41 = var41.t;
            var41 = var41.sPAvXV;
            var41 = var42.bind(var43)(var41);
            var1['title'] = var41;
            var41 = var34[var40];
            var41 = var35.bind(var4)(var41);
            var42 = var41.intl;
            var41 = var42.string;
            var40 = var34[var40];
            var40 = var35.bind(var4)(var40);
            var40 = var40.t;
            var40 = var40.nQ05z8;
            var40 = var41.bind(var42)(var40);
            var1['subtitle'] = var40;
            var34 = var34[var39];
            var34 = var35.bind(var4)(var34);
            var35 = var34.UserFlashListActions;
            var34 = {};
            if(!(var38 != var37)) { _fun0009_ip = 1050; continue _fun0009 }
 1047:
            var36 = var37;
 1050:
            var34['actions'] = var36;
            var34 = var33.bind(var4)(var35, var34);
            var1['children'] = var34;
            var1 = var33.bind(var4)(var29, var1);
            var7['children'] = var1;
            var1 = var7;
            _fun0009_ip = 1114; continue _fun0009;
 1080:
            var29 = new Array(2);
            var29[0] = var30;
            var30 = undefined;
            if(!var32) { _fun0009_ip = 1099; continue _fun0009 }
 1093:
            var30 = var31.searchBarRowContainer;
 1099:
            var29[1] = var30;
            var7['style'] = var29;
            var7['children'] = var27;
            var1 = var7;
 1114:
            var1 = var8.bind(var4)(var3, var1);
            _fun0009_ip = 1261; continue _fun0009;
 1125:
            var7 = _closure1_slot0;
            var27 = _closure1_slot2;
            if(var2) { _fun0009_ip = 1193; continue _fun0009 }
 1136:
            var2 = 19;
            var2 = var27[var2];
            var2 = var7.bind(var4)(var2);
            var3 = var2.UsersFlashList;
            var2 = {};
            var2['ref'] = var28;
            var2['sections'] = var25;
            var2['getItemProps'] = var24;
            var2['getSectionProps'] = var23;
            var2['renderHeader'] = var21;
            var2['insetEnd'] = var19;
            var2 = var8.bind(var4)(var3, var2);
            _fun0009_ip = 1258; continue _fun0009;
 1193:
            var3 = 18;
            var3 = var27[var3];
            var3 = var7.bind(var4)(var3);
            var7 = var3.UsersFastList;
            var3 = {};
            var3['ref'] = var26;
            var3['sections'] = var25;
            var3['getItemProps'] = var24;
            var3['getSectionProps'] = var23;
            var3['listHeaderSize'] = var22;
            var3['renderListHeader'] = var21;
            var3['insetStart'] = var20;
            var3['insetEnd'] = var19;
            var2 = var8.bind(var4)(var7, var3);
 1258:
            var1 = var2;
 1261:
            var6 = var1;
 1264:
            var3 = _closure1_slot12;
            var2 = _closure1_slot11;
            var1 = {};
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 21;
            var5 = var19[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            if(!var17) { _fun0009_ip = 1306; continue _fun0009 }
 1303:
            var17 = var18;
 1306:
            var5['autoFocus'] = var17;
            var5['hasQuery'] = var16;
            var5['onChangeText'] = var15;
            var5['onFocus'] = var14;
            var5['onForceSearchResults'] = var13;
            var5['onSelectUser'] = var12;
            var5['selectedUserIds'] = var11;
            var5['forceSearchResults'] = var10;
            var5['tagListInputRef'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['matchGroupDM'] = var5;
    var3['filterGroupDMs'] = var4;
    var3['useSearchGDMNames'] = var2;
    return var1;
})();