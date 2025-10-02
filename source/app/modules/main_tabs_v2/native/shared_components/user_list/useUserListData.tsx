// app/modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function _toPropertyKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = 'object';
            var1 = typeof var7;
            var2 = var7;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = global;
            var3 = var1.Symbol;
            var3 = var3.toPrimitive;
            var6 = var7[var3];
            var5 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1.String;
            var2 = var3.bind(var5)(var7);
            _fun0001_ip = 2; continue _fun0001;
case 5:
            var5 = var6.call;
            var3 = 'string';
            var5 = var5.bind(var6)(var7, var3);
            var3 = typeof var5;
            var2 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var4 = var1.TypeError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var9 = '@@toPrimitive must return a primitive value.';
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
case 2:
            var4 = 'symbol';
            var3 = typeof var2;
            var1 = var2;
            if(!(var4 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = '' + var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 10:
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var3.@@iterator;
case 12:
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
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
            if(!var7) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = var3.constructor;
case 22:
            var10 = var9;
            if(!var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var7 = var3.constructor;
            var10 = var7.name;
case 24:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 31; continue _fun0002 }
case 29:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
case 31:
            _fun0002_ip = 32; continue _fun0002;
case 26:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 32:
            var6 = var7;
            _fun0002_ip = 18; continue _fun0002;
case 20:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
case 18:
            var4 = var6;
            if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 33:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 16:
            if(!var4) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            _closure2_slot0 = var4;
case 34:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 36; continue _fun0003 }
case 37:
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
                    _fun0003_ip = 38; continue _fun0003;
case 36:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 38:
                    return var1;
                }
            };
            return var1;
case 14:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 4; continue _fun0004 }
case 39:
            var2 = var4.length;
            var1 = var3 > var2;
case 4:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var2 = var4.length;
case 40:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 42; continue _fun0004 }
case 12:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 12; continue _fun0004 }
case 42:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function isMatch(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg3;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 37; continue _fun0005 }
case 43:
            var1 = {};
case 37:
            var4 = var1.exact;
            var11 = undefined;
            var3 = var11 !== var4;
            if(!var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var3 = var4;
case 44:
            var _closure2_slot1 = var3;
            var3 = var1.contains;
            var1 = var11 !== var3;
            if(!var1) { _fun0005_ip = 46; continue _fun0005 }
case 12:
            var1 = var3;
case 46:
            var _closure2_slot2 = var1;
            var10 = function _loop(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = arg1;
                            var3 = _closure2_slot1;
                            if(var3) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                            var4 = var2.startsWith;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var2)(var3);
                            if(var3) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                            var5 = _closure3_slot0;
                            var4 = var5.join;
                            var3 = ' ';
                            var7 = var4.bind(var5)(var3);
                            var4 = var7.startsWith;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var7)(var3);
                            var4 = !var3;
                            var3 = !var4;
                            if(!var4) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                            var4 = _closure2_slot2;
                            if(!var4) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var6 = var7.includes;
                            var5 = _closure2_slot0;
                            var4 = var6.bind(var7)(var5);
case 53:
                            var3 = var4;
case 51:
                            return var3;
case 49:
                            var3 = true;
                            return var3;
case 47:
                            var1 = _closure2_slot0;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0006_ip = 55; continue _fun0006 }
case 11:
                    var1 = undefined;
                    return var1;
case 55:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var1['v'] = var2;
                    return var1;
                }
            };
            var1 = global;
            var4 = var1.Object;
            var3 = var4.entries;
            var1 = arg1;
            var9 = var3.bind(var4)(var1);
            var1 = var9.length;
            var8 = 0;
            var1 = var8 < var1;
            var6 = 2;
            var5 = 1;
            var4 = 0;
            if(!var1) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var3 = var9[var4];
            var1 = _closure1_slot6;
            var1 = var1.bind(var11)(var3, var6);
            var3 = var1[var8];
            var _closure2_slot3 = var3;
            var1 = var1[var5];
            var1 = var10.bind(var11)(var1);
            if(var1) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var4 = var4 + 1;
            var3 = var9.length;
            if(var4 < var3) { _fun0005_ip = 57; continue _fun0005 }
case 56:
            return var2;
case 58:
            var1 = var1.v;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function boostExact(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = _closure1_slot21;
            var4 = {};
            var1 = true;
            var4['exact'] = var1;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var2 = var5.bind(var3)(var2, var1, var4);
            var1 = null;
            var2 = var1 != var2;
            var1 = 0;
            if(!var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var1 = -1000;
case 60:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var2 = function parseUserSearchResults(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var14 = var4.data;
            var9 = var4.withGuildMembers;
            var1 = var4.withAffinitySuggestions;
            var3 = var4.withFriends;
            var12 = var4.withFriendSuggestions;
            var22 = var4.withFriendRequests;
            var20 = var4.withFriendRequestsIncoming;
            var18 = var4.withFriendRequestsOutgoing;
            var15 = var4.withFriendRequestsSpam;
            var7 = var4.excludeCurrentUser;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0009_ip = 62; continue _fun0009 }
case 42:
            var7 = false;
case 62:
            var26 = var4.affinitySuggestionsLimit;
            if(!(var26 === var6)) { _fun0009_ip = 7; continue _fun0009 }
case 63:
            var26 = 5;
case 7:
            var _closure2_slot0 = var6;
            var5 = _closure1_slot16;
            var32 = var5.AffinitySuggestions;
            var5 = _closure1_slot16;
            var31 = var5.FriendRequests;
            var5 = _closure1_slot16;
            var30 = var5.FriendRequestsIncoming;
            var5 = _closure1_slot16;
            var29 = var5.FriendRequestsOutgoing;
            var5 = _closure1_slot16;
            var28 = var5.FriendRequestsSpam;
            var5 = _closure1_slot16;
            var27 = var5.FriendSuggestions;
            var5 = _closure1_slot16;
            var16 = var5.Friends;
            var5 = _closure1_slot16;
            var5 = var5.GuildMembers;
            var24 = var14[var32];
            if(!(var6 === var24)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var24 = new Array(0);
case 64:
            var21 = var14[var31];
            if(!(var6 === var21)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var21 = new Array(0);
case 66:
            var19 = var14[var30];
            if(!(var6 === var19)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var19 = new Array(0);
case 68:
            var17 = var14[var29];
            if(!(var6 === var17)) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var17 = new Array(0);
case 70:
            var13 = var14[var28];
            if(!(var6 === var13)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var13 = new Array(0);
case 72:
            var11 = var14[var27];
            if(!(var6 === var11)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var11 = new Array(0);
case 74:
            var10 = var14[var16];
            if(!(var6 === var10)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var10 = new Array(0);
case 76:
            var23 = var14[var5];
            if(!(var6 === var23)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var23 = new Array(0);
case 78:
            var8 = _closure1_slot3;
            var25 = new Array(8);
            var25[0] = var32;
            var25[1] = var31;
            var25[2] = var30;
            var25[3] = var29;
            var25[4] = var28;
            var25[5] = var27;
            var25[6] = var16;
            var25[7] = var5;
            var16 = var25.map;
            var5 = _closure1_slot18;
            var5 = var16.bind(var25)(var5);
            var5 = var8.bind(var6)(var14, var5);
            var14 = _closure1_slot13;
            var8 = var14.getCurrentUser;
            var14 = var8.bind(var14)();
            var16 = null;
            var25 = var16 == var14;
            var8 = undefined;
            if(var25) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var8 = var14.id;
case 80:
            _closure2_slot0 = var8;
            var8 = var23;
            if(!var7) { _fun0009_ip = 82; continue _fun0009 }
case 83:
            var14 = var23.filter;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var8 = var14.bind(var23)(var7);
case 82:
            var7 = {};
            var28 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 20;
            var25 = var23[var14];
            var25 = var28.bind(var6)(var25);
            var27 = var25.intl;
            var25 = var27.string;
            var23 = var23[var14];
            var23 = var28.bind(var6)(var23);
            var23 = var23.t;
            var23 = var23.HbJ7eH;
            var23 = var25.bind(var27)(var23);
            var7['title'] = var23;
            if(var1) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var1 = new Array(0);
            _fun0009_ip = 86; continue _fun0009;
case 84:
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 19;
            var23 = var27[var23];
            var23 = var25.bind(var6)(var23);
            var25 = var23.bind(var6)(var24);
            var24 = var25.sortBy;
            var23 = function(arg1) {
                var1 = arg1;
                var1 = var1.affinity;
                var1 = -var1;
                return var1;
            };
            var25 = var24.bind(var25)(var23);
            var24 = var25.slice;
            var23 = 0;
            var24 = var24.bind(var25)(var23, var26);
            var23 = var24.value;
            var1 = var23.bind(var24)();
case 86:
            var7['items'] = var1;
            var1 = new Array(8);
            var1[0] = var7;
            var7 = {};
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var25 = var23[var14];
            var25 = var24.bind(var6)(var25);
            var26 = var25.intl;
            var25 = var26.formatToPlainString;
            var23 = var23[var14];
            var23 = var24.bind(var6)(var23);
            var23 = var23.t;
            var24 = var23.zsVtfn;
            var23 = {};
            var27 = var21.length;
            var23['pendingRequestNumber'] = var27;
            var23 = var25.bind(var26)(var24, var23);
            var7['title'] = var23;
            if(var22) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var21 = new Array(0);
case 87:
            var7['items'] = var21;
            var1[1] = var7;
            var7 = {};
            var7['title'] = var16;
            if(var20) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var19 = new Array(0);
case 89:
            var7['items'] = var19;
            var1[2] = var7;
            var7 = {};
            var7['title'] = var16;
            if(var18) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var17 = new Array(0);
case 91:
            var7['items'] = var17;
            var1[3] = var7;
            var7 = {};
            var7['title'] = var16;
            if(var15) { _fun0009_ip = 93; continue _fun0009 }
case 94:
            var13 = new Array(0);
case 93:
            var7['items'] = var13;
            var1[4] = var7;
            var7 = {};
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = var13[var14];
            var16 = var15.bind(var6)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var13 = var13[var14];
            var13 = var15.bind(var6)(var13);
            var13 = var13.t;
            var15 = var13.DYMZ/v;
            var13 = {};
            var18 = var11.length;
            var13['count'] = var18;
            var13 = var16.bind(var17)(var15, var13);
            var7['title'] = var13;
            if(var12) { _fun0009_ip = 95; continue _fun0009 }
case 96:
            var11 = new Array(0);
case 95:
            var7['items'] = var11;
            var1[5] = var7;
            var7 = {};
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var14];
            var12 = var15.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var14];
            var11 = var15.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.TdEu5e;
            var11 = var12.bind(var13)(var11);
            var7['title'] = var11;
            if(var3) { _fun0009_ip = 97; continue _fun0009 }
case 98:
            var10 = new Array(0);
case 97:
            var7['items'] = var10;
            var1[6] = var7;
            var7 = {};
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var14];
            var11 = var13.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.y29JXl;
            var10 = var11.bind(var12)(var10);
            var7['title'] = var10;
            if(var9) { _fun0009_ip = 99; continue _fun0009 }
case 100:
            var8 = new Array(0);
case 99:
            var7['items'] = var8;
            var1[7] = var7;
            if(var3) { _fun0009_ip = 101; continue _fun0009 }
case 102:
            var3 = new Array(0);
            _fun0009_ip = 103; continue _fun0009;
case 101:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 19;
            var4 = var8[var4];
            var4 = var7.bind(var6)(var4);
            var6 = var4.bind(var6)(var5);
            var5 = var6.map;
            var4 = function(arg1, arg2) {
                var1 = {};
                var2 = arg2;
                var1['title'] = var2;
                var2 = arg1;
                var1['items'] = var2;
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.sortBy;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.title;
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.value;
            var3 = var2.bind(var4)();
case 103:
            var33 = 8;
            var35 = var1;
            var34 = var3;
            var2 = arraySpread(var35, var34, var33);
            return var1;
        }
    };
    var _closure1_slot23 = var2;
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.RelationshipTypes;
    var _closure1_slot14 = var6;
    var9 = var4.Set;
    var10 = var6.FRIEND;
    var4 = new Array(4);
    var4[0] = var10;
    var10 = var6.SUGGESTION;
    var4[1] = var10;
    var10 = var6.PENDING_INCOMING;
    var4[2] = var10;
    var6 = var6.PENDING_OUTGOING;
    var4[3] = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {constructor: {value: var9}});
    var15 = var6;
    var14 = var4;
    var4 = new var15[var9](var14, var13);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot15 = var4;
    var4 = {};
    var6 = 'AFFINITY_SUGGESTIONS';
    var4['AffinitySuggestions'] = var6;
    var6 = 'FRIENDS';
    var4['Friends'] = var6;
    var6 = 'FRIEND_REQUESTS';
    var4['FriendRequests'] = var6;
    var6 = 'FRIEND_REQUESTS_INCOMING';
    var4['FriendRequestsIncoming'] = var6;
    var6 = 'FRIEND_REQUESTS_OUTGOING';
    var4['FriendRequestsOutgoing'] = var6;
    var6 = 'FRIEND_REQUESTS_SPAM';
    var4['FriendRequestsSpam'] = var6;
    var6 = 'FRIEND_SUGGESTIONS';
    var4['FriendSuggestions'] = var6;
    var6 = 'GUILD_MEMBERS';
    var4['GuildMembers'] = var6;
    var _closure1_slot16 = var4;
    var4 = function() {
        var4 = _closure1_slot5;
        var3 = function UserSearch(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arguments[1];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0010_ip = 104; continue _fun0010 }
case 105:
                var5 = false;
case 104:
                var7 = _closure1_slot4;
                var6 = _closure2_slot0;
                var6 = var7.bind(var1)(var4, var6);
                var6 = '';
                var4['currentQuery'] = var6;
                var6 = {};
                var4['affinities'] = var6;
                var7 = null;
                var4['userSearchContext'] = var7;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 12;
                var8 = var6[var8];
                var8 = var9.bind(var1)(var8);
                var11 = var8.SecondaryIndexMap;
                var8 = var11.prototype;
                var9 = Object.create(var8, {constructor: {value: var11}});
                var13 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var6 = var1.names;
                        var4 = var1.affinity;
                        var7 = var1.type;
                        var3 = var1.user;
                        var1 = new Array(0);
                        var5 = _closure1_slot14;
                        var5 = var5.PENDING_INCOMING;
                        if(!(var5 !== var7)) { _fun0011_ip = 106; continue _fun0011 }
case 60:
                        var5 = _closure1_slot14;
                        var5 = var5.PENDING_OUTGOING;
                        if(!(var5 !== var7)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                        var5 = _closure1_slot14;
                        var5 = var5.SUGGESTION;
                        if(!(var5 !== var7)) { _fun0011_ip = 109; continue _fun0011 }
case 63:
                        var5 = _closure1_slot14;
                        var5 = var5.FRIEND;
                        if(!(var5 === var7)) { _fun0011_ip = 110; continue _fun0011 }
case 111:
                        var7 = 0;
                        if(!(var4 > var7)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                        var11 = var1.push;
                        var4 = _closure1_slot16;
                        var4 = var4.AffinitySuggestions;
                        var4 = var11.bind(var1)(var4);
case 112:
                        var11 = var1.push;
                        var4 = _closure1_slot16;
                        var4 = var4.Friends;
                        var4 = var11.bind(var1)(var4);
                        var9 = var6;
                        for(var4 in var9)
case 114:
                        {
case 115:
                            var5 = var1.push;
                            var4 = var6[var4];
                            var6 = var4[var7];
                            var4 = var6.charAt;
                            var6 = var4.bind(var6)(var7);
                            var4 = var6.toLocaleUpperCase;
                            var4 = var4.bind(var6)();
                            var4 = var5.bind(var1)(var4);
                            _fun0011_ip = 110; continue _fun0011;
case 109:
                            var5 = var1.push;
                            var4 = _closure1_slot16;
                            var4 = var4.FriendSuggestions;
                            var4 = var5.bind(var1)(var4);
                            _fun0011_ip = 110; continue _fun0011;
case 107:
                            var5 = var1.push;
                            var4 = _closure1_slot16;
                            var4 = var4.FriendRequests;
                            var4 = var5.bind(var1)(var4);
                            var5 = var1.push;
                            var4 = _closure1_slot16;
                            var4 = var4.FriendRequestsOutgoing;
                            var4 = var5.bind(var1)(var4);
                            _fun0011_ip = 110; continue _fun0011;
case 106:
                            var5 = var1.push;
                            var4 = _closure1_slot16;
                            var4 = var4.FriendRequests;
                            var4 = var5.bind(var1)(var4);
                            var5 = _closure1_slot12;
                            var4 = var5.isSpam;
                            var3 = var3.id;
                            var4 = var4.bind(var5)(var3);
                            var3 = var1.push;
                            var2 = _closure1_slot16;
                            if(var4) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                            var4 = var2.FriendRequestsIncoming;
                            var4 = var3.bind(var1)(var4);
                            _fun0011_ip = 110; continue _fun0011;
case 116:
                            var2 = var2.FriendRequestsSpam;
                            var2 = var3.bind(var1)(var2);
                        }
case 110:
                        return var1;
                    }
                };
                var12 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.names;
                        var5 = var2;
                        for(var1 in var5)
case 118:
                        {
case 41:
                            var2 = var2[var1];
                            var1 = 0;
                            var1 = var2[var1];
                            return var1;
                        }
case 119:
                        var1 = '';
                        return var1;
                    }
                };
                var14 = var9;
                var8 = new var14[var11](var13, var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                var4['indexMap'] = var8;
                var4['filteredFriends'] = var7;
                var4['filteredGuildMembers'] = var7;
                var7 = false;
                var4['withGameFriends'] = var7;
                var7 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.initializeUsersFromStores;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var4['handlePostConnectionOpen'] = var7;
                var7 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.relationship;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0013_ip = 108; continue _fun0013 }
case 45:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0013_ip = 108; continue _fun0013 }
case 120:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 108:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleRelationship'] = var7;
                var7 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.suggestion;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.suggested_user;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0014_ip = 121; continue _fun0014 }
case 122:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0014_ip = 121; continue _fun0014 }
case 123:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 121:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleFriendSuggestionCreate'] = var7;
                var7 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.suggestedUserId;
                        var3 = _closure3_slot0;
                        var2 = var3.updateUser;
                        var2 = var2.bind(var3)(var4);
                        if(!var2) { _fun0015_ip = 5; continue _fun0015 }
case 11:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 5; continue _fun0015 }
case 10:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleFriendSuggestionDelete'] = var7;
                var7 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.gameRelationship;
                        var3 = _closure3_slot0;
                        var3 = var3.withGameFriends;
                        if(var3) { _fun0016_ip = 124; continue _fun0016 }
case 105:
                        var3 = false;
                        return var3;
case 124:
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0016_ip = 63; continue _fun0016 }
case 125:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0016_ip = 63; continue _fun0016 }
case 126:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 63:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleGameRelationshipAdd'] = var7;
                var7 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.userId;
                        var2 = _closure3_slot0;
                        var2 = var2.withGameFriends;
                        if(var2) { _fun0017_ip = 41; continue _fun0017 }
case 127:
                        var2 = false;
                        return var2;
case 41:
                        var3 = _closure3_slot0;
                        var2 = var3.updateUser;
                        var2 = var2.bind(var3)(var4);
                        if(!var2) { _fun0017_ip = 52; continue _fun0017 }
case 10:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0017_ip = 52; continue _fun0017 }
case 128:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleGameRelationshipRemove'] = var7;
                var7 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.user;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0018_ip = 129; continue _fun0018 }
case 55:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0018_ip = 129; continue _fun0018 }
case 130:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
case 129:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleGuildMember'] = var7;
                var7 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.chunks;
                        var2 = _closure1_slot19;
                        var1 = undefined;
                        var7 = var2.bind(var1)(var3);
                        var5 = var7.bind(var1)();
                        var4 = var5.done;
                        var6 = var5;
                        var5 = false;
                        var3 = false;
                        if(var4) { _fun0019_ip = 58; continue _fun0019 }
case 131:
                        var9 = _closure1_slot19;
                        var4 = var6.value;
                        var4 = var4.members;
                        var12 = var9.bind(var1)(var4);
                        var9 = var12.bind(var1)();
                        var4 = var9.done;
                        var11 = var5;
                        var10 = var9;
                        var9 = var11;
                        if(var4) { _fun0019_ip = 132; continue _fun0019 }
case 17:
                        var4 = var10.value;
                        var14 = _closure3_slot0;
                        var13 = var14.updateUser;
                        var4 = var4.user;
                        var4 = var4.id;
                        var13 = var13.bind(var14)(var4);
                        if(var13) { _fun0019_ip = 133; continue _fun0019 }
case 2:
                        var13 = var11;
case 133:
                        var14 = var12.bind(var1)();
                        var4 = var14.done;
                        var11 = var13;
                        var10 = var14;
                        var9 = var11;
                        if(!var4) { _fun0019_ip = 17; continue _fun0019 }
case 132:
                        var10 = var7.bind(var1)();
                        var4 = var10.done;
                        var5 = var9;
                        var6 = var10;
                        var3 = var5;
                        if(!var4) { _fun0019_ip = 131; continue _fun0019 }
case 58:
                        if(!var3) { _fun0019_ip = 134; continue _fun0019 }
case 135:
                        var3 = _closure3_slot0;
                        var4 = var3.onUpdate;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0019_ip = 134; continue _fun0019 }
case 136:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
case 134:
                        return var1;
                    }
                };
                var4['handleGuildMembersChunkBatch'] = var7;
                var7 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0020_ip = 137; continue _fun0020 }
case 138:
                        var2 = false;
case 137:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.shouldUseCache;
                        if(var4) { _fun0020_ip = 139; continue _fun0020 }
case 140:
                        var4 = _closure1_slot10;
                        var3 = var4.getUserAffinities;
                        var5 = var3.bind(var4)();
                        var4 = var5.forEach;
                        var3 = function(arg1) {
                            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.otherUserId;
                                var5 = var1.communicationProbability;
                                var4 = var1.communicationRank;
                                var2 = _closure3_slot0;
                                var2 = var2.affinities;
                                var2[var3] = var5;
                                var2 = 5;
                                if(!(var4 <= var2)) { _fun0021_ip = 5; continue _fun0021 }
case 131:
                                var2 = _closure3_slot0;
                                var1 = var2.updateUser;
                                var1 = var1.bind(var2)(var3);
case 5:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var4 = undefined;
                        if(var2) { _fun0020_ip = 141; continue _fun0020 }
case 142:
                        var3 = _closure3_slot0;
                        var3 = var3.onUpdate;
                        var5 = null;
                        var2 = var5 == var3;
                        var4 = var3;
case 141:
                        if(var2) { _fun0020_ip = 139; continue _fun0020 }
case 47:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
case 139:
                        return var1;
                    }
                };
                var4['handleUserAffinitiesUpdate'] = var7;
                var4['withGameFriends'] = var5;
                var5 = _closure1_slot1;
                var3 = 13;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var3 = var3.shouldUseCache;
                if(var3) { _fun0010_ip = 143; continue _fun0010 }
case 144:
                var3 = var4.initializeUsersFromStores;
                var3 = var3.bind(var4)();
                _fun0010_ip = 145; continue _fun0010;
case 143:
                var3 = var4.initializeUsersFromCache;
                var4 = var3.bind(var4)();
                var3 = var4.then;
                var2 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var1 = null;
                        var4 = var1 == var3;
                        var3 = undefined;
                        var1 = undefined;
                        if(var4) { _fun0022_ip = 41; continue _fun0022 }
case 37:
                        var2 = _closure3_slot1;
                        var1 = var2.bind(var3)();
case 41:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 145:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'subscribe';
        var1['key'] = var2;
        var2 = function subscribe(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arguments[1];
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0023_ip = 37; continue _fun0023 }
case 43:
                var5 = true;
case 37:
                var3 = arg1;
                var2['onUpdate'] = var3;
                var3 = null;
                if(!var5) { _fun0023_ip = 146; continue _fun0023 }
case 55:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 14;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.getUserSearchContext;
                var5 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.query;
                        var7 = var1.results;
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var4 = _closure3_slot0;
                        var4 = var4.currentQuery;
                        if(!(var4 === var5)) { _fun0024_ip = 147; continue _fun0024 }
case 119:
                        var4 = new Array(0);
                        _closure4_slot0 = var4;
                        var6 = var7.reduce;
                        var5 = function(arg1, arg2) {
                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                                var1 = arg1;
                                var2 = arg2;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var5 = var5[var3];
                                var3 = undefined;
                                var3 = var6.bind(var3)(var5);
                                var3 = var3.shouldUseCache;
                                if(var3) { _fun0025_ip = 148; continue _fun0025 }
case 140:
                                var6 = _closure1_slot15;
                                var5 = var6.has;
                                var8 = _closure1_slot12;
                                var7 = var8.getRelationshipType;
                                var3 = var2.id;
                                var3 = var7.bind(var8)(var3);
                                var3 = var5.bind(var6)(var3);
                                if(var3) { _fun0025_ip = 24; continue _fun0025 }
case 149:
                                var5 = _closure3_slot0;
                                var5 = var5.withGameFriends;
                                if(!var5) { _fun0025_ip = 150; continue _fun0025 }
case 19:
                                var6 = _closure1_slot9;
                                var5 = var6.getGameFriendsForUser;
                                var4 = var2.id;
                                var4 = var5.bind(var6)(var4);
                                var5 = var4.length;
                                var4 = 0;
                                if(!(!(var5 > var4))) { _fun0025_ip = 151; continue _fun0025 }
case 150:
                                var4 = _closure3_slot0;
                                var3 = var4.getItem;
                                var2 = var2.id;
                                var5 = var3.bind(var4)(var2);
                                var3 = null;
                                var2 = var1;
                                if(!(var3 != var5)) { _fun0025_ip = 152; continue _fun0025 }
case 153:
                                var4 = _closure4_slot0;
                                var3 = var4.push;
                                var3 = var3.bind(var4)(var5);
                                var2 = true;
case 152:
                                return var2;
case 151:
                                return var1;
case 24:
                                return var1;
case 148:
                                var1 = false;
                                return var1;
                            }
                        };
                        var3 = false;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!var3) { _fun0024_ip = 147; continue _fun0024 }
case 62:
                        var3 = _closure3_slot0;
                        var3['filteredGuildMembers'] = var4;
                        var4 = var3.onUpdate;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0024_ip = 147; continue _fun0024 }
case 154:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
case 147:
                        return var1;
                    }
                };
                var4 = 20;
                var3 = var6.bind(var7)(var5, var4);
case 146:
                var2['userSearchContext'] = var3;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 15;
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handlePostConnectionOpen;
                var7 = 'POST_CONNECTION_OPEN';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleRelationship;
                var7 = 'RELATIONSHIP_ADD';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleRelationship;
                var7 = 'RELATIONSHIP_REMOVE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleRelationship;
                var7 = 'RELATIONSHIP_UPDATE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleGameRelationshipAdd;
                var7 = 'GAME_RELATIONSHIP_ADD';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleGameRelationshipRemove;
                var7 = 'GAME_RELATIONSHIP_REMOVE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleFriendSuggestionCreate;
                var7 = 'FRIEND_SUGGESTION_CREATE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleFriendSuggestionDelete;
                var7 = 'FRIEND_SUGGESTION_DELETE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleGuildMember;
                var7 = 'GUILD_MEMBER_ADD';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleGuildMember;
                var7 = 'GUILD_MEMBER_UPDATE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.subscribe;
                var8 = var2.handleGuildMember;
                var7 = 'GUILD_MEMBER_REMOVE';
                var7 = var9.bind(var10)(var7, var8);
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.subscribe;
                var5 = var2.handleGuildMembersChunkBatch;
                var4 = 'GUILD_MEMBERS_CHUNK_BATCH';
                var4 = var6.bind(var7)(var4, var5);
                var4 = _closure1_slot10;
                var3 = var4.addChangeListener;
                var2 = var2.handleUserAffinitiesUpdate;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(10);
        var2[0] = var1;
        var1 = {};
        var6 = 'unsubscribe';
        var1['key'] = var6;
        var6 = function unsubscribe() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var2 = this;
                var1 = undefined;
                var2['onUpdate'] = var1;
                var4 = var2.userSearchContext;
                var3 = null;
                if(!(var3 != var4)) { _fun0026_ip = 40; continue _fun0026 }
case 4:
                var3 = var4.destroy;
                var3 = var3.bind(var4)();
case 40:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 15;
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handlePostConnectionOpen;
                var7 = 'POST_CONNECTION_OPEN';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleRelationship;
                var7 = 'RELATIONSHIP_ADD';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleRelationship;
                var7 = 'RELATIONSHIP_REMOVE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleRelationship;
                var7 = 'RELATIONSHIP_UPDATE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleGameRelationshipAdd;
                var7 = 'GAME_RELATIONSHIP_ADD';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleGameRelationshipRemove;
                var7 = 'GAME_RELATIONSHIP_REMOVE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleFriendSuggestionCreate;
                var7 = 'FRIEND_SUGGESTION_CREATE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleFriendSuggestionDelete;
                var7 = 'FRIEND_SUGGESTION_DELETE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleGuildMember;
                var7 = 'GUILD_MEMBER_ADD';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleGuildMember;
                var7 = 'GUILD_MEMBER_UPDATE';
                var7 = var9.bind(var10)(var7, var8);
                var7 = var6[var4];
                var10 = var5.bind(var1)(var7);
                var9 = var10.unsubscribe;
                var8 = var2.handleGuildMember;
                var7 = 'GUILD_MEMBER_REMOVE';
                var7 = var9.bind(var10)(var7, var8);
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.unsubscribe;
                var5 = var2.handleGuildMembersChunkBatch;
                var4 = 'GUILD_MEMBERS_CHUNK_BATCH';
                var4 = var6.bind(var7)(var4, var5);
                var4 = _closure1_slot10;
                var3 = var4.removeChangeListener;
                var2 = var2.handleUserAffinitiesUpdate;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'fetch';
        var1['key'] = var6;
        var6 = function fetch(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.cleanString;
                var4 = arg1;
                var6 = var5.bind(var6)(var4);
                var4 = '';
                if(!(var4 !== var6)) { _fun0027_ip = 155; continue _fun0027 }
case 130:
                var4 = arg2;
                if(!var4) { _fun0027_ip = 156; continue _fun0027 }
case 36:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.requestMembers;
                var3 = null;
                var3 = var4.bind(var5)(var3, var6);
case 156:
                var5 = var2.userSearchContext;
                var3 = null;
                if(!(var3 != var5)) { _fun0027_ip = 157; continue _fun0027 }
case 49:
                var4 = var5.setQuery;
                var3 = {};
                var3['query'] = var6;
                var6 = var2.affinities;
                var3['boosters'] = var6;
                var6 = 0.002592;
                var3['boosterFallback'] = var6;
                var3 = var4.bind(var5)(var3);
                _fun0027_ip = 157; continue _fun0027;
case 155:
                var3 = var2.userSearchContext;
                var2 = null;
                if(!(var2 != var3)) { _fun0027_ip = 157; continue _fun0027 }
case 158:
                var2 = var3.clearQuery;
                var2 = var2.bind(var3)();
case 157:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'filter';
        var1['key'] = var6;
        var6 = function filter(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var10 = undefined;
                var6 = var5.bind(var10)(var1);
                var5 = var6.cleanString;
                var1 = arg1;
                var1 = var5.bind(var6)(var1);
                var _closure3_slot1 = var1;
                var5 = var3.currentQuery;
                if(!(var5 !== var1)) { _fun0028_ip = 159; continue _fun0028 }
case 128:
                var5 = '';
                if(!(var5 !== var1)) { _fun0028_ip = 112; continue _fun0028 }
case 42:
                var5 = new Array(0);
                var3['filteredFriends'] = var5;
                var7 = var3.indexMap;
                var6 = var7.values;
                var5 = _closure1_slot16;
                var5 = var5.Friends;
                var7 = var6.bind(var7)(var5);
                var6 = var7.forEach;
                var5 = function(arg1) {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                        var5 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var4 = var6.getIsSearchMobileUserListFriendMatchingEnabled;
                        var3 = {};
                        var7 = 'useUserListData_filter';
                        var3['location'] = var7;
                        var8 = var4.bind(var6)(var3);
                        var7 = _closure1_slot21;
                        var6 = var5.names;
                        var4 = _closure3_slot1;
                        var2 = {};
                        var2['contains'] = var8;
                        var6 = var7.bind(var1)(var6, var4, var2);
                        var2 = null;
                        if(!(var2 != var6)) { _fun0029_ip = 160; continue _fun0029 }
case 161:
                        var3 = _closure3_slot0;
                        var4 = var3.filteredFriends;
                        if(!(var2 != var4)) { _fun0029_ip = 160; continue _fun0029 }
case 162:
                        var3 = var4.push;
                        var2 = {};
                        var11 = var2;
                        var10 = var5;
                        var5 = copyDataProperties(var11, var10);
                        var5 = 'firstMatch';
                        var2[var5] = var6;
                        var2 = var3.bind(var4)(var2);
case 160:
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                _fun0028_ip = 163; continue _fun0028;
case 112:
                var5 = null;
                var3['filteredFriends'] = var5;
                var3['filteredGuildMembers'] = var5;
case 163:
                var3['currentQuery'] = var1;
case 159:
                var5 = var3.currentQuery;
                var1 = '';
                if(!(var1 !== var5)) { _fun0028_ip = 164; continue _fun0028 }
case 56:
                var1 = {};
                var5 = _closure1_slot16;
                var8 = var5.Friends;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 19;
                var5 = var11[var6];
                var14 = var7.bind(var10)(var5);
                var13 = var14.sortBy;
                var5 = var11[var6];
                var15 = var7.bind(var10)(var5);
                var12 = var15.uniqBy;
                var9 = var3.filteredFriends;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var1 = var1.id;
                    return var1;
                };
                var12 = var12.bind(var15)(var9, var5);
                var9 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.names;
                    var3 = _closure1_slot22;
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.affinity;
                    var1 = -var1;
                    return var1;
                };
                var5 = var13.bind(var14)(var12, var9, var5);
                var1[var8] = var5;
                var5 = _closure1_slot16;
                var5 = var5.GuildMembers;
                var8 = var11[var6];
                var9 = var7.bind(var10)(var8);
                var8 = var9.sortBy;
                var6 = var11[var6];
                var11 = var7.bind(var10)(var6);
                var10 = var11.uniqBy;
                var7 = var3.filteredGuildMembers;
                var6 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var1 = var1.id;
                    return var1;
                };
                var7 = var10.bind(var11)(var7, var6);
                var6 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.names;
                    var3 = _closure1_slot22;
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.affinity;
                    var1 = -var1;
                    return var1;
                };
                var4 = var8.bind(var9)(var7, var6, var4);
                var1[var5] = var4;
                return var1;
case 164:
                var1 = {};
                var4 = var3.indexMap;
                var3 = var4.indexes;
                var17 = var3.bind(var4)();
                var18 = var1;
                var3 = copyDataProperties(var18, var17);
                var2 = _closure1_slot16;
                var2 = var2.Friends;
                var2 = delete var1[var2];
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'initializeUsersFromStores';
        var1['key'] = var6;
        var6 = function initializeUsersFromStores() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var6 = _closure1_slot19;
                var5 = _closure1_slot12;
                var1 = var5.getMutableRelationships;
                var5 = var1.bind(var5)();
                var1 = var5.keys;
                var5 = var1.bind(var5)();
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.bind(var1)();
                var5 = var6.done;
                if(var5) { _fun0030_ip = 165; continue _fun0030 }
case 46:
                var8 = var6.value;
                var5 = var4.updateUser;
                var5 = var5.bind(var4)(var8);
                var8 = var7.bind(var1)();
                var5 = var8.done;
                var6 = var8;
                if(!var5) { _fun0030_ip = 46; continue _fun0030 }
case 165:
                var5 = var4.withGameFriends;
                if(!var5) { _fun0030_ip = 166; continue _fun0030 }
case 167:
                var6 = _closure1_slot9;
                var5 = var6.getGameRelationships;
                var6 = var5.bind(var6)();
                var5 = var6.values;
                var6 = var5.bind(var6)();
                var5 = var6.forEach;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.updateUser;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
case 166:
                var3 = _closure1_slot19;
                var5 = _closure1_slot8;
                var2 = var5.getSuggestions;
                var2 = var2.bind(var5)();
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0030_ip = 168; continue _fun0030 }
case 169:
                var2 = var3.value;
                var6 = var4.updateUser;
                var2 = var2.user;
                var2 = var2.id;
                var2 = var6.bind(var4)(var2);
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0030_ip = 169; continue _fun0030 }
case 168:
                var3 = var4.handleUserAffinitiesUpdate;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'initializeUsersFromCache';
        var1['key'] = var6;
        var6 = function initializeUsersFromCache() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getAll;
            var3 = var2.bind(var3)();
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = _closure1_slot19;
                    var1 = undefined;
                    var2 = arg1;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    if(var2) { _fun0031_ip = 170; continue _fun0031 }
case 171:
                    var7 = var3.value;
                    var6 = _closure3_slot0;
                    var2 = var6.updateUserCached;
                    var2 = var2.bind(var6)(var7);
                    var6 = var5.bind(var1)();
                    var2 = var6.done;
                    var3 = var6;
                    if(!var2) { _fun0031_ip = 171; continue _fun0031 }
case 170:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'updateUser';
        var1['key'] = var6;
        var6 = function updateUser(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 13;
                var3 = var6[var3];
                var7 = undefined;
                var3 = var5.bind(var7)(var3);
                var3 = var3.shouldUseCache;
                if(var3) { _fun0032_ip = 172; continue _fun0032 }
case 140:
                var3 = var2.withGameFriends;
                if(!var3) { _fun0032_ip = 173; continue _fun0032 }
case 125:
                var5 = _closure1_slot9;
                var3 = var5.getGameFriendsForUser;
                var3 = var3.bind(var5)(var4);
                var5 = var3.length;
                var3 = 0;
                if(!(!(var5 > var3))) { _fun0032_ip = 174; continue _fun0032 }
case 173:
                var5 = _closure1_slot15;
                var3 = var5.has;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 16;
                var1 = var8[var1];
                var6 = var6.bind(var7)(var1);
                var1 = var6.getRelationshipType;
                var1 = var1.bind(var6)(var4);
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0032_ip = 174; continue _fun0032 }
case 175:
                var3 = var2.indexMap;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                return var1;
case 174:
                var1 = var2.getItem;
                var5 = var1.bind(var2)(var4);
                var1 = null;
                if(!(var1 != var5)) { _fun0032_ip = 65; continue _fun0032 }
case 176:
                var3 = var2.indexMap;
                var1 = var3.set;
                var1 = var1.bind(var3)(var4, var5);
                _fun0032_ip = 66; continue _fun0032;
case 65:
                var3 = var2.indexMap;
                var2 = var3.delete;
                var1 = var2.bind(var3)(var4);
case 66:
                return var1;
case 172:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getItem';
        var1['key'] = var6;
        var6 = function getItem(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var6 = arg1;
                var8 = this;
                var3 = _closure1_slot13;
                var1 = var3.getUser;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                if(!(var1 != var3)) { _fun0033_ip = 177; continue _fun0033 }
case 40:
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var10 = 16;
                var4 = var11[var10];
                var9 = undefined;
                var7 = var5.bind(var9)(var4);
                var4 = var7.getNames;
                var4 = var4.bind(var7)(var3);
                var7 = var4.nick;
                var13 = var4.names;
                var4 = 18;
                var4 = var11[var4];
                var11 = var5.bind(var9)(var4);
                var5 = var11.getIsSearchMobileUserListFriendMatchingEnabled;
                var4 = {};
                var12 = 'useUserListData_getItem';
                var4['location'] = var12;
                var14 = var5.bind(var11)(var4);
                var5 = {};
                var5['user'] = var3;
                var5['names'] = var13;
                var11 = var8.affinities;
                var4 = var3.id;
                var12 = var11[var4];
                var15 = var1 != var12;
                var4 = 0;
                var11 = 0;
                if(!var15) { _fun0033_ip = 178; continue _fun0033 }
case 155:
                var11 = var12;
case 178:
                var5['affinity'] = var11;
                var12 = var8.currentQuery;
                var11 = '';
                if(!(var11 !== var12)) { _fun0033_ip = 179; continue _fun0033 }
case 157:
                var12 = _closure1_slot21;
                var11 = var8.currentQuery;
                var8 = {};
                var8['contains'] = var14;
                var7 = var12.bind(var9)(var13, var11, var8);
case 179:
                var5['firstMatch'] = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var8 = var8.bind(var9)(var7);
                var7 = var8.getRelationshipType;
                var3 = var3.id;
                var7 = var7.bind(var8)(var3);
                var3 = _closure1_slot14;
                var3 = var3.FRIEND;
                if(!(var7 !== var3)) { _fun0033_ip = 20; continue _fun0033 }
case 180:
                var3 = _closure1_slot9;
                var2 = var3.getGameFriendsForUser;
                var3 = var2.bind(var3)(var6);
                var2 = var3.length;
                if(!(!(var2 > var4))) { _fun0033_ip = 181; continue _fun0033 }
case 20:
                var2 = {};
                var18 = var2;
                var17 = var5;
                var6 = copyDataProperties(var18, var17);
                var6 = 'type';
                var2[var6] = var7;
                return var2;
case 181:
                var2 = {};
                var18 = var2;
                var17 = var5;
                var5 = copyDataProperties(var18, var17);
                var3 = var3[var4];
                var4 = var3.type;
                var3 = 'type';
                var2[var3] = var4;
                return var2;
case 177:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'updateUserCached';
        var1['key'] = var6;
        var6 = function updateUserCached(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var5 = _closure1_slot15;
                var4 = var5.has;
                var1 = var2.type;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0034_ip = 182; continue _fun0034 }
case 50:
                var5 = var3.indexMap;
                var4 = var5.delete;
                var1 = var2.id;
                var1 = var4.bind(var5)(var1);
                return var1;
case 182:
                var1 = var3.getItemCached;
                var6 = var1.bind(var3)(var2);
                var1 = null;
                if(!(var1 != var6)) { _fun0034_ip = 53; continue _fun0034 }
case 183:
                var5 = var3.indexMap;
                var4 = var5.set;
                var1 = var2.id;
                var1 = var4.bind(var5)(var1, var6);
                _fun0034_ip = 184; continue _fun0034;
case 53:
                var4 = var3.indexMap;
                var3 = var4.delete;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 184:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getItemCached';
        var1['key'] = var6;
        var5 = function getItemCached(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = null;
                var2 = var1 == var5;
                if(var2) { _fun0035_ip = 185; continue _fun0035 }
case 186:
                var2 = {};
                var3 = var5.type;
                var2['type'] = var3;
                var8 = _closure1_slot11;
                var10 = var5.user;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var11 = var7;
                var3 = new var11[var8](var10, var9);
                var3 = var3 instanceof Object ? var3 : var7;
                var2['user'] = var3;
                var3 = var5.names;
                var2['names'] = var3;
                var3 = var5.affinity;
                var2['affinity'] = var3;
                var7 = var4.currentQuery;
                var3 = '';
                if(!(var3 === var7)) { _fun0035_ip = 187; continue _fun0035 }
case 19:
                var3 = var5.nick;
                _fun0035_ip = 150; continue _fun0035;
case 187:
                var7 = _closure1_slot21;
                var6 = var5.names;
                var5 = var4.currentQuery;
                var4 = undefined;
                var3 = var7.bind(var4)(var6, var5);
case 150:
                var2['firstMatch'] = var3;
                var1 = var2;
case 185:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[9] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot17 = var4;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useUserListData(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var3 = arg1;
            var2 = var3.query;
            var _closure2_slot0 = var2;
            var15 = var3.withGuildMembers;
            var _closure2_slot1 = var15;
            var14 = var3.withAffinitySuggestions;
            var _closure2_slot2 = var14;
            var13 = var3.withFriends;
            var _closure2_slot3 = var13;
            var12 = var3.withGameFriends;
            var _closure2_slot4 = var12;
            var11 = var3.withFriendSuggestions;
            var _closure2_slot5 = var11;
            var10 = var3.withFriendRequests;
            var _closure2_slot6 = var10;
            var9 = var3.withFriendRequestsIncoming;
            var _closure2_slot7 = var9;
            var8 = var3.withFriendRequestsOutgoing;
            var _closure2_slot8 = var8;
            var7 = var3.withFriendRequestsSpam;
            var _closure2_slot9 = var7;
            var6 = var3.excludeCurrentUser;
            var20 = undefined;
            if(!(var6 === var20)) { _fun0036_ip = 2; continue _fun0036 }
case 188:
            var6 = false;
case 2:
            var _closure2_slot10 = var6;
            var5 = var3.affinitySuggestionsLimit;
            if(!(var5 === var20)) { _fun0036_ip = 8; continue _fun0036 }
case 9:
            var5 = 5;
case 8:
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var20;
            var _closure2_slot13 = var20;
            var _closure2_slot14 = var20;
            var _closure2_slot15 = var20;
            var4 = _closure1_slot7;
            var17 = var4.useState;
            var16 = 0;
            var19 = var17.bind(var4)(var16);
            var18 = _closure1_slot6;
            var17 = 2;
            var18 = var18.bind(var20)(var19, var17);
            var17 = var18[var16];
            _closure2_slot12 = var17;
            var19 = 1;
            var18 = var18[var19];
            _closure2_slot13 = var18;
            var22 = var4.useMemo;
            var21 = new Array(2);
            var21[0] = var18;
            var21[1] = var12;
            var18 = function() {
                var4 = _closure1_slot17;
                var5 = _closure2_slot4;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var6 = function() {
                    var3 = _closure2_slot13;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var18 = var22.bind(var4)(var18, var21);
            _closure2_slot14 = var18;
            var22 = var4.useMemo;
            var21 = new Array(3);
            var21[0] = var17;
            var21[1] = var18;
            var21[2] = var2;
            var17 = function() {
                var4 = _closure2_slot14;
                var3 = var4.filter;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure2_slot12;
                var1[1] = var2;
                return var1;
            };
            var17 = var22.bind(var4)(var17, var21);
            var3 = _closure1_slot6;
            var3 = var3.bind(var20)(var17, var19);
            var16 = var3[var16];
            _closure2_slot15 = var16;
            var19 = var4.useEffect;
            var17 = new Array(2);
            var17[0] = var18;
            var17[1] = var15;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.debounce;
                var3 = function() {
                    var3 = _closure2_slot13;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 0;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var5 = _closure2_slot14;
                var4 = var5.subscribe;
                var3 = _closure2_slot1;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                var1 = function() {
                    var2 = _closure2_slot14;
                    var1 = var2.unsubscribe;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var3 = var19.bind(var4)(var3, var17);
            var17 = var4.useEffect;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var2;
            var3[2] = var15;
            var2 = function() {
                var4 = _closure2_slot14;
                var3 = var4.fetch;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var2 = var17.bind(var4)(var2, var3);
            var17 = var4.useEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchUserAffinitiesV2;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var17.bind(var4)(var3, var2);
            var3 = var4.useMemo;
            var2 = new Array(12);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var14;
            var2[3] = var13;
            var2[4] = var12;
            var2[5] = var11;
            var2[6] = var10;
            var2[7] = var9;
            var2[8] = var8;
            var2[9] = var7;
            var2[10] = var6;
            var2[11] = var5;
            var1 = function() {
                var3 = _closure1_slot23;
                var2 = {};
                var4 = _closure2_slot15;
                var2['data'] = var4;
                var4 = _closure2_slot1;
                var2['withGuildMembers'] = var4;
                var4 = _closure2_slot2;
                var2['withAffinitySuggestions'] = var4;
                var4 = _closure2_slot3;
                var2['withFriends'] = var4;
                var4 = _closure2_slot4;
                var2['withGameFriends'] = var4;
                var4 = _closure2_slot5;
                var2['withFriendSuggestions'] = var4;
                var4 = _closure2_slot6;
                var2['withFriendRequests'] = var4;
                var4 = _closure2_slot7;
                var2['withFriendRequestsIncoming'] = var4;
                var4 = _closure2_slot8;
                var2['withFriendRequestsOutgoing'] = var4;
                var4 = _closure2_slot9;
                var2['withFriendRequestsSpam'] = var4;
                var4 = _closure2_slot10;
                var2['excludeCurrentUser'] = var4;
                var1 = _closure2_slot11;
                var2['affinitySuggestionsLimit'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['UserSearch'] = var4;
    var3['parseUserSearchResults'] = var2;
    return var1;
})();