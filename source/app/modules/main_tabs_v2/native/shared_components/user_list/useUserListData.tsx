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
 0:
            var7 = arg1;
            var4 = 'object';
            var1 = typeof var7;
            var2 = var7;
            if(!(var4 === var1)) { _fun0001_ip = 119; continue _fun0001 }
 17:
            var2 = var7;
            if(!var2) { _fun0001_ip = 119; continue _fun0001 }
 23:
            var1 = global;
            var3 = var1.Symbol;
            var3 = var3.toPrimitive;
            var6 = var7[var3];
            var5 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 60; continue _fun0001 }
 47:
            var3 = var1.String;
            var2 = var3.bind(var5)(var7);
            _fun0001_ip = 119; continue _fun0001;
 60:
            var5 = var6.call;
            var3 = 'string';
            var5 = var5.bind(var6)(var7, var3);
            var3 = typeof var5;
            var2 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 119; continue _fun0001 }
 85:
            var4 = var1.TypeError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var9 = '@@toPrimitive must return a primitive value.';
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
 119:
            var4 = 'symbol';
            var3 = typeof var2;
            var1 = var2;
            if(!(var4 !== var3)) { _fun0001_ip = 136; continue _fun0001 }
 133:
            var1 = '' + var2;
 136:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
 345:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function isMatch(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arguments[2];
            var2 = arg2;
            var _closure2_slot0 = var2;
            var10 = undefined;
            if(!(var1 === var10)) { _fun0005_ip = 20; continue _fun0005 }
 18:
            var1 = false;
 20:
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var10;
            var9 = function _loop(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = arg1;
                            var1 = _closure2_slot1;
                            if(var1) { _fun0007_ip = 69; continue _fun0007 }
 13:
                            var4 = var3.startsWith;
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var3)(var1);
                            if(var1) { _fun0007_ip = 67; continue _fun0007 }
 31:
                            var6 = _closure3_slot0;
                            var5 = var6.join;
                            var4 = ' ';
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.startsWith;
                            var4 = _closure2_slot0;
                            var1 = var5.bind(var6)(var4);
 67:
                            _fun0007_ip = 77; continue _fun0007;
 69:
                            var2 = _closure2_slot0;
                            var1 = var3 === var2;
 77:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0006_ip = 34; continue _fun0006 }
 30:
                    var1 = undefined;
                    return var1;
 34:
                    var1 = {};
                    var2 = _closure2_slot2;
                    var1['v'] = var2;
                    return var1;
                }
            };
            var1 = global;
            var3 = var1.Object;
            var2 = var3.entries;
            var1 = arg1;
            var8 = var2.bind(var3)(var1);
            var1 = var8.length;
            var7 = 0;
            var1 = var7 < var1;
            var5 = 2;
            var4 = 1;
            var3 = 0;
            if(!var1) { _fun0005_ip = 128; continue _fun0005 }
 82:
            var2 = var8[var3];
            var1 = _closure1_slot6;
            var1 = var1.bind(var10)(var2, var5);
            var2 = var1[var7];
            _closure2_slot2 = var2;
            var1 = var1[var4];
            var1 = var9.bind(var10)(var1);
            if(var1) { _fun0005_ip = 132; continue _fun0005 }
 116:
            var3 = var3 + 1;
            var2 = var8.length;
            if(var3 < var2) { _fun0005_ip = 82; continue _fun0005 }
 128:
            var2 = null;
            return var2;
 132:
            var1 = var1.v;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function boostExact(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = _closure1_slot21;
            var4 = undefined;
            var3 = arg1;
            var2 = arg2;
            var1 = true;
            var2 = var5.bind(var4)(var3, var2, var1);
            var1 = null;
            var2 = var1 != var2;
            var1 = 0;
            if(!var2) { _fun0008_ip = 41; continue _fun0008 }
 35:
            var1 = -1000;
 41:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var2 = function parseUserSearchResults(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
            if(!(var7 === var6)) { _fun0009_ip = 72; continue _fun0009 }
 70:
            var7 = false;
 72:
            var26 = var4.affinitySuggestionsLimit;
            if(!(var26 === var6)) { _fun0009_ip = 85; continue _fun0009 }
 82:
            var26 = 5;
 85:
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
            if(!(var6 === var24)) { _fun0009_ip = 184; continue _fun0009 }
 180:
            var24 = new Array(0);
 184:
            var21 = var14[var31];
            if(!(var6 === var21)) { _fun0009_ip = 196; continue _fun0009 }
 192:
            var21 = new Array(0);
 196:
            var19 = var14[var30];
            if(!(var6 === var19)) { _fun0009_ip = 208; continue _fun0009 }
 204:
            var19 = new Array(0);
 208:
            var17 = var14[var29];
            if(!(var6 === var17)) { _fun0009_ip = 220; continue _fun0009 }
 216:
            var17 = new Array(0);
 220:
            var13 = var14[var28];
            if(!(var6 === var13)) { _fun0009_ip = 232; continue _fun0009 }
 228:
            var13 = new Array(0);
 232:
            var11 = var14[var27];
            if(!(var6 === var11)) { _fun0009_ip = 244; continue _fun0009 }
 240:
            var11 = new Array(0);
 244:
            var10 = var14[var16];
            if(!(var6 === var10)) { _fun0009_ip = 256; continue _fun0009 }
 252:
            var10 = new Array(0);
 256:
            var23 = var14[var5];
            if(!(var6 === var23)) { _fun0009_ip = 268; continue _fun0009 }
 264:
            var23 = new Array(0);
 268:
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
            if(var25) { _fun0009_ip = 357; continue _fun0009 }
 352:
            var8 = var14.id;
 357:
            _closure2_slot0 = var8;
            var8 = var23;
            if(!var7) { _fun0009_ip = 384; continue _fun0009 }
 367:
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
 384:
            var7 = {};
            var28 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 19;
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
            if(var1) { _fun0009_ip = 454; continue _fun0009 }
 448:
            var1 = new Array(0);
            _fun0009_ip = 519; continue _fun0009;
 454:
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 18;
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
 519:
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
            if(var22) { _fun0009_ip = 612; continue _fun0009 }
 608:
            var21 = new Array(0);
 612:
            var7['items'] = var21;
            var1[1] = var7;
            var7 = {};
            var7['title'] = var16;
            if(var20) { _fun0009_ip = 634; continue _fun0009 }
 630:
            var19 = new Array(0);
 634:
            var7['items'] = var19;
            var1[2] = var7;
            var7 = {};
            var7['title'] = var16;
            if(var18) { _fun0009_ip = 656; continue _fun0009 }
 652:
            var17 = new Array(0);
 656:
            var7['items'] = var17;
            var1[3] = var7;
            var7 = {};
            var7['title'] = var16;
            if(var15) { _fun0009_ip = 678; continue _fun0009 }
 674:
            var13 = new Array(0);
 678:
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
            if(var12) { _fun0009_ip = 766; continue _fun0009 }
 762:
            var11 = new Array(0);
 766:
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
            if(var3) { _fun0009_ip = 840; continue _fun0009 }
 836:
            var10 = new Array(0);
 840:
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
            if(var9) { _fun0009_ip = 914; continue _fun0009 }
 910:
            var8 = new Array(0);
 914:
            var7['items'] = var8;
            var1[7] = var7;
            if(var3) { _fun0009_ip = 932; continue _fun0009 }
 926:
            var3 = new Array(0);
            _fun0009_ip = 1001; continue _fun0009;
 932:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 18;
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
 1001:
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
 0:
                var5 = arguments[1];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0010_ip = 27; continue _fun0010 }
 25:
                var5 = false;
 27:
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
 0:
                        var1 = arg1;
                        var6 = var1.names;
                        var4 = var1.affinity;
                        var7 = var1.type;
                        var3 = var1.user;
                        var1 = new Array(0);
                        var5 = _closure1_slot14;
                        var5 = var5.PENDING_INCOMING;
                        if(!(var5 !== var7)) { _fun0011_ip = 279; continue _fun0011 }
 48:
                        var5 = _closure1_slot14;
                        var5 = var5.PENDING_OUTGOING;
                        if(!(var5 !== var7)) { _fun0011_ip = 237; continue _fun0011 }
 65:
                        var5 = _closure1_slot14;
                        var5 = var5.SUGGESTION;
                        if(!(var5 !== var7)) { _fun0011_ip = 215; continue _fun0011 }
 82:
                        var5 = _closure1_slot14;
                        var5 = var5.FRIEND;
                        if(!(var5 === var7)) { _fun0011_ip = 355; continue _fun0011 }
 99:
                        var7 = 0;
                        if(!(var4 > var7)) { _fun0011_ip = 125; continue _fun0011 }
 105:
                        var11 = var1.push;
                        var4 = _closure1_slot16;
                        var4 = var4.AffinitySuggestions;
                        var4 = var11.bind(var1)(var4);
 125:
                        var11 = var1.push;
                        var4 = _closure1_slot16;
                        var4 = var4.Friends;
                        var4 = var11.bind(var1)(var4);
                        var9 = var6;
                        for(var4 in var9)
 159:
                        {
 171:
                            var5 = var1.push;
                            var4 = var6[var4];
                            var6 = var4[var7];
                            var4 = var6.charAt;
                            var6 = var4.bind(var6)(var7);
                            var4 = var6.toLocaleUpperCase;
                            var4 = var4.bind(var6)();
                            var4 = var5.bind(var1)(var4);
                            _fun0011_ip = 355; continue _fun0011;
 215:
                            var5 = var1.push;
                            var4 = _closure1_slot16;
                            var4 = var4.FriendSuggestions;
                            var4 = var5.bind(var1)(var4);
                            _fun0011_ip = 355; continue _fun0011;
 237:
                            var5 = var1.push;
                            var4 = _closure1_slot16;
                            var4 = var4.FriendRequests;
                            var4 = var5.bind(var1)(var4);
                            var5 = var1.push;
                            var4 = _closure1_slot16;
                            var4 = var4.FriendRequestsOutgoing;
                            var4 = var5.bind(var1)(var4);
                            _fun0011_ip = 355; continue _fun0011;
 279:
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
                            if(var4) { _fun0011_ip = 344; continue _fun0011 }
 331:
                            var4 = var2.FriendRequestsIncoming;
                            var4 = var3.bind(var1)(var4);
                            _fun0011_ip = 355; continue _fun0011;
 344:
                            var2 = var2.FriendRequestsSpam;
                            var2 = var3.bind(var1)(var2);
                        }
 355:
                        return var1;
                    }
                };
                var12 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.names;
                        var5 = var2;
                        for(var1 in var5)
 19:
                        {
 28:
                            var2 = var2[var1];
                            var1 = 0;
                            var1 = var2[var1];
                            return var1;
                        }
 40:
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
 0:
                        var1 = arg1;
                        var2 = var1.relationship;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0013_ip = 65; continue _fun0013 }
 35:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0013_ip = 65; continue _fun0013 }
 51:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleRelationship'] = var7;
                var7 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.suggestion;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.suggested_user;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0014_ip = 71; continue _fun0014 }
 41:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0014_ip = 71; continue _fun0014 }
 57:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
 71:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleFriendSuggestionCreate'] = var7;
                var7 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.suggestedUserId;
                        var3 = _closure3_slot0;
                        var2 = var3.updateUser;
                        var2 = var2.bind(var3)(var4);
                        if(!var2) { _fun0015_ip = 60; continue _fun0015 }
 30:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 60; continue _fun0015 }
 46:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleFriendSuggestionDelete'] = var7;
                var7 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.gameRelationship;
                        var3 = _closure3_slot0;
                        var3 = var3.withGameFriends;
                        if(var3) { _fun0016_ip = 29; continue _fun0016 }
 25:
                        var3 = false;
                        return var3;
 29:
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0016_ip = 82; continue _fun0016 }
 52:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0016_ip = 82; continue _fun0016 }
 68:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
 82:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleGameRelationshipAdd'] = var7;
                var7 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.userId;
                        var2 = _closure3_slot0;
                        var2 = var2.withGameFriends;
                        if(var2) { _fun0017_ip = 28; continue _fun0017 }
 24:
                        var2 = false;
                        return var2;
 28:
                        var3 = _closure3_slot0;
                        var2 = var3.updateUser;
                        var2 = var2.bind(var3)(var4);
                        if(!var2) { _fun0017_ip = 76; continue _fun0017 }
 46:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0017_ip = 76; continue _fun0017 }
 62:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
 76:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleGameRelationshipRemove'] = var7;
                var7 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.user;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUser;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        if(!var2) { _fun0018_ip = 64; continue _fun0018 }
 34:
                        var2 = _closure3_slot0;
                        var3 = var2.onUpdate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0018_ip = 64; continue _fun0018 }
 50:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
 64:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['handleGuildMember'] = var7;
                var7 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
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
                        if(var4) { _fun0019_ip = 164; continue _fun0019 }
 45:
                        var9 = _closure1_slot19;
                        var4 = var6.value;
                        var4 = var4.members;
                        var12 = var9.bind(var1)(var4);
                        var9 = var12.bind(var1)();
                        var4 = var9.done;
                        var11 = var5;
                        var10 = var9;
                        var9 = var11;
                        if(var4) { _fun0019_ip = 143; continue _fun0019 }
 86:
                        var4 = var10.value;
                        var14 = _closure3_slot0;
                        var13 = var14.updateUser;
                        var4 = var4.user;
                        var4 = var4.id;
                        var13 = var13.bind(var14)(var4);
                        if(var13) { _fun0019_ip = 122; continue _fun0019 }
 119:
                        var13 = var11;
 122:
                        var14 = var12.bind(var1)();
                        var4 = var14.done;
                        var11 = var13;
                        var10 = var14;
                        var9 = var11;
                        if(!var4) { _fun0019_ip = 86; continue _fun0019 }
 143:
                        var10 = var7.bind(var1)();
                        var4 = var10.done;
                        var5 = var9;
                        var6 = var10;
                        var3 = var5;
                        if(!var4) { _fun0019_ip = 45; continue _fun0019 }
 164:
                        if(!var3) { _fun0019_ip = 197; continue _fun0019 }
 167:
                        var3 = _closure3_slot0;
                        var4 = var3.onUpdate;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0019_ip = 197; continue _fun0019 }
 183:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 197:
                        return var1;
                    }
                };
                var4['handleGuildMembersChunkBatch'] = var7;
                var7 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0020_ip = 11; continue _fun0020 }
 9:
                        var2 = false;
 11:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.shouldUseCache;
                        if(var4) { _fun0020_ip = 123; continue _fun0020 }
 43:
                        var4 = _closure1_slot10;
                        var3 = var4.getUserAffinities;
                        var5 = var3.bind(var4)();
                        var4 = var5.forEach;
                        var3 = function(arg1) {
                            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.otherUserId;
                                var5 = var1.communicationProbability;
                                var4 = var1.communicationRank;
                                var2 = _closure3_slot0;
                                var2 = var2.affinities;
                                var2[var3] = var5;
                                var2 = 5;
                                if(!(var4 <= var2)) { _fun0021_ip = 60; continue _fun0021 }
 45:
                                var2 = _closure3_slot0;
                                var1 = var2.updateUser;
                                var1 = var1.bind(var2)(var3);
 60:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var4 = undefined;
                        if(var2) { _fun0020_ip = 103; continue _fun0020 }
 81:
                        var3 = _closure3_slot0;
                        var3 = var3.onUpdate;
                        var5 = null;
                        var2 = var5 == var3;
                        var4 = var3;
 103:
                        if(var2) { _fun0020_ip = 123; continue _fun0020 }
 106:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 123:
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
                if(var3) { _fun0010_ip = 319; continue _fun0010 }
 307:
                var3 = var4.initializeUsersFromStores;
                var3 = var3.bind(var4)();
                _fun0010_ip = 348; continue _fun0010;
 319:
                var3 = var4.initializeUsersFromCache;
                var4 = var3.bind(var4)();
                var3 = var4.then;
                var2 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var3 = _closure3_slot1;
                        var1 = null;
                        var4 = var1 == var3;
                        var3 = undefined;
                        var1 = undefined;
                        if(var4) { _fun0022_ip = 28; continue _fun0022 }
 20:
                        var2 = _closure3_slot1;
                        var1 = var2.bind(var3)();
 28:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
 348:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'subscribe';
        var1['key'] = var2;
        var2 = function subscribe(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var5 = arguments[1];
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0023_ip = 20; continue _fun0023 }
 18:
                var5 = true;
 20:
                var3 = arg1;
                var2['onUpdate'] = var3;
                var3 = null;
                if(!var5) { _fun0023_ip = 79; continue _fun0023 }
 34:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 14;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.getUserSearchContext;
                var5 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.query;
                        var7 = var1.results;
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var4 = _closure3_slot0;
                        var4 = var4.currentQuery;
                        if(!(var4 === var5)) { _fun0024_ip = 107; continue _fun0024 }
 39:
                        var4 = new Array(0);
                        _closure4_slot0 = var4;
                        var6 = var7.reduce;
                        var5 = function(arg1, arg2) {
                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                                var1 = arg1;
                                var2 = arg2;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var5 = var5[var3];
                                var3 = undefined;
                                var3 = var6.bind(var3)(var5);
                                var3 = var3.shouldUseCache;
                                if(var3) { _fun0025_ip = 181; continue _fun0025 }
 43:
                                var6 = _closure1_slot15;
                                var5 = var6.has;
                                var8 = _closure1_slot12;
                                var7 = var8.getRelationshipType;
                                var3 = var2.id;
                                var3 = var7.bind(var8)(var3);
                                var3 = var5.bind(var6)(var3);
                                if(var3) { _fun0025_ip = 179; continue _fun0025 }
 80:
                                var5 = _closure3_slot0;
                                var5 = var5.withGameFriends;
                                if(!var5) { _fun0025_ip = 127; continue _fun0025 }
 96:
                                var6 = _closure1_slot9;
                                var5 = var6.getGameFriendsForUser;
                                var4 = var2.id;
                                var4 = var5.bind(var6)(var4);
                                var5 = var4.length;
                                var4 = 0;
                                if(!(!(var5 > var4))) { _fun0025_ip = 177; continue _fun0025 }
 127:
                                var4 = _closure3_slot0;
                                var3 = var4.getItem;
                                var2 = var2.id;
                                var5 = var3.bind(var4)(var2);
                                var3 = null;
                                var2 = var1;
                                if(!(var3 != var5)) { _fun0025_ip = 175; continue _fun0025 }
 156:
                                var4 = _closure4_slot0;
                                var3 = var4.push;
                                var3 = var3.bind(var4)(var5);
                                var2 = true;
 175:
                                return var2;
 177:
                                return var1;
 179:
                                return var1;
 181:
                                var1 = false;
                                return var1;
                            }
                        };
                        var3 = false;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!var3) { _fun0024_ip = 107; continue _fun0024 }
 71:
                        var3 = _closure3_slot0;
                        var3['filteredGuildMembers'] = var4;
                        var4 = var3.onUpdate;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0024_ip = 107; continue _fun0024 }
 93:
                        var3 = var4.call;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
 107:
                        return var1;
                    }
                };
                var4 = 20;
                var3 = var6.bind(var7)(var5, var4);
 79:
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
 0:
                var2 = this;
                var1 = undefined;
                var2['onUpdate'] = var1;
                var4 = var2.userSearchContext;
                var3 = null;
                if(!(var3 != var4)) { _fun0026_ip = 33; continue _fun0026 }
 23:
                var3 = var4.destroy;
                var3 = var3.bind(var4)();
 33:
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
 0:
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
                if(!(var4 !== var6)) { _fun0027_ip = 147; continue _fun0027 }
 50:
                var4 = arg2;
                if(!var4) { _fun0027_ip = 90; continue _fun0027 }
 56:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.requestMembers;
                var3 = null;
                var3 = var4.bind(var5)(var3, var6);
 90:
                var5 = var2.userSearchContext;
                var3 = null;
                if(!(var3 != var5)) { _fun0027_ip = 169; continue _fun0027 }
 102:
                var4 = var5.setQuery;
                var3 = {};
                var3['query'] = var6;
                var6 = var2.affinities;
                var3['boosters'] = var6;
                var6 = 0.002592;
                var3['boosterFallback'] = var6;
                var3 = var4.bind(var5)(var3);
                _fun0027_ip = 169; continue _fun0027;
 147:
                var3 = var2.userSearchContext;
                var2 = null;
                if(!(var2 != var3)) { _fun0027_ip = 169; continue _fun0027 }
 159:
                var2 = var3.clearQuery;
                var2 = var2.bind(var3)();
 169:
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
 0:
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
                if(!(var5 !== var1)) { _fun0028_ip = 145; continue _fun0028 }
 62:
                var5 = '';
                if(!(var5 !== var1)) { _fun0028_ip = 125; continue _fun0028 }
 70:
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
 0:
                        var5 = arg1;
                        var6 = _closure1_slot21;
                        var4 = var5.names;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var6 = var6.bind(var1)(var4, var2);
                        var2 = null;
                        if(!(var2 != var6)) { _fun0029_ip = 81; continue _fun0029 }
 36:
                        var3 = _closure3_slot0;
                        var4 = var3.filteredFriends;
                        if(!(var2 != var4)) { _fun0029_ip = 81; continue _fun0029 }
 50:
                        var3 = var4.push;
                        var2 = {};
                        var8 = var2;
                        var7 = var5;
                        var5 = copyDataProperties(var8, var7);
                        var5 = 'firstMatch';
                        var2[var5] = var6;
                        var2 = var3.bind(var4)(var2);
 81:
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                _fun0028_ip = 139; continue _fun0028;
 125:
                var5 = null;
                var3['filteredFriends'] = var5;
                var3['filteredGuildMembers'] = var5;
 139:
                var3['currentQuery'] = var1;
 145:
                var5 = var3.currentQuery;
                var1 = '';
                if(!(var1 !== var5)) { _fun0028_ip = 347; continue _fun0028 }
 162:
                var1 = {};
                var5 = _closure1_slot16;
                var8 = var5.Friends;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 18;
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
 347:
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
 0:
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
                if(var5) { _fun0030_ip = 89; continue _fun0030 }
 58:
                var8 = var6.value;
                var5 = var4.updateUser;
                var5 = var5.bind(var4)(var8);
                var8 = var7.bind(var1)();
                var5 = var8.done;
                var6 = var8;
                if(!var5) { _fun0030_ip = 58; continue _fun0030 }
 89:
                var5 = var4.withGameFriends;
                if(!var5) { _fun0030_ip = 138; continue _fun0030 }
 98:
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
 138:
                var3 = _closure1_slot19;
                var5 = _closure1_slot8;
                var2 = var5.getSuggestions;
                var2 = var2.bind(var5)();
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0030_ip = 214; continue _fun0030 }
 173:
                var2 = var3.value;
                var6 = var4.updateUser;
                var2 = var2.user;
                var2 = var2.id;
                var2 = var6.bind(var4)(var2);
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0030_ip = 173; continue _fun0030 }
 214:
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
 0:
                    var3 = _closure1_slot19;
                    var1 = undefined;
                    var2 = arg1;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    if(var2) { _fun0031_ip = 69; continue _fun0031 }
 32:
                    var7 = var3.value;
                    var6 = _closure3_slot0;
                    var2 = var6.updateUserCached;
                    var2 = var2.bind(var6)(var7);
                    var6 = var5.bind(var1)();
                    var2 = var6.done;
                    var3 = var6;
                    if(!var2) { _fun0031_ip = 32; continue _fun0031 }
 69:
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
 0:
                var4 = arg1;
                var2 = this;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 13;
                var3 = var6[var3];
                var7 = undefined;
                var3 = var5.bind(var7)(var3);
                var3 = var3.shouldUseCache;
                if(var3) { _fun0032_ip = 198; continue _fun0032 }
 43:
                var3 = var2.withGameFriends;
                if(!var3) { _fun0032_ip = 78; continue _fun0032 }
 52:
                var5 = _closure1_slot9;
                var3 = var5.getGameFriendsForUser;
                var3 = var3.bind(var5)(var4);
                var5 = var3.length;
                var3 = 0;
                if(!(!(var5 > var3))) { _fun0032_ip = 144; continue _fun0032 }
 78:
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
                if(var1) { _fun0032_ip = 144; continue _fun0032 }
 126:
                var3 = var2.indexMap;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                return var1;
 144:
                var1 = var2.getItem;
                var5 = var1.bind(var2)(var4);
                var1 = null;
                if(!(var1 != var5)) { _fun0032_ip = 180; continue _fun0032 }
 161:
                var3 = var2.indexMap;
                var1 = var3.set;
                var1 = var1.bind(var3)(var4, var5);
                _fun0032_ip = 196; continue _fun0032;
 180:
                var3 = var2.indexMap;
                var2 = var3.delete;
                var1 = var2.bind(var3)(var4);
 196:
                return var1;
 198:
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
 0:
                var6 = arg1;
                var8 = this;
                var3 = _closure1_slot13;
                var1 = var3.getUser;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                if(!(var1 != var3)) { _fun0033_ip = 282; continue _fun0033 }
 33:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var10 = 16;
                var4 = var4[var10];
                var9 = undefined;
                var5 = var5.bind(var9)(var4);
                var4 = var5.getNames;
                var4 = var4.bind(var5)(var3);
                var7 = var4.nick;
                var12 = var4.names;
                var5 = {};
                var5['user'] = var3;
                var5['names'] = var12;
                var11 = var8.affinities;
                var4 = var3.id;
                var13 = var11[var4];
                var14 = var1 != var13;
                var4 = 0;
                var11 = 0;
                if(!var14) { _fun0033_ip = 116; continue _fun0033 }
 113:
                var11 = var13;
 116:
                var5['affinity'] = var11;
                var13 = var8.currentQuery;
                var11 = '';
                if(!(var11 !== var13)) { _fun0033_ip = 151; continue _fun0033 }
 135:
                var11 = _closure1_slot21;
                var8 = var8.currentQuery;
                var7 = var11.bind(var9)(var12, var8);
 151:
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
                if(!(var7 !== var3)) { _fun0033_ip = 227; continue _fun0033 }
 203:
                var3 = _closure1_slot9;
                var2 = var3.getGameFriendsForUser;
                var3 = var2.bind(var3)(var6);
                var2 = var3.length;
                if(!(!(var2 > var4))) { _fun0033_ip = 250; continue _fun0033 }
 227:
                var2 = {};
                var16 = var2;
                var15 = var5;
                var6 = copyDataProperties(var16, var15);
                var6 = 'type';
                var2[var6] = var7;
                return var2;
 250:
                var2 = {};
                var16 = var2;
                var15 = var5;
                var5 = copyDataProperties(var16, var15);
                var3 = var3[var4];
                var4 = var3.type;
                var3 = 'type';
                var2[var3] = var4;
                return var2;
 282:
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
 0:
                var2 = arg1;
                var3 = this;
                var5 = _closure1_slot15;
                var4 = var5.has;
                var1 = var2.type;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0034_ip = 54; continue _fun0034 }
 31:
                var5 = var3.indexMap;
                var4 = var5.delete;
                var1 = var2.id;
                var1 = var4.bind(var5)(var1);
                return var1;
 54:
                var1 = var3.getItemCached;
                var6 = var1.bind(var3)(var2);
                var1 = null;
                if(!(var1 != var6)) { _fun0034_ip = 97; continue _fun0034 }
 73:
                var5 = var3.indexMap;
                var4 = var5.set;
                var1 = var2.id;
                var1 = var4.bind(var5)(var1, var6);
                _fun0034_ip = 118; continue _fun0034;
 97:
                var4 = var3.indexMap;
                var3 = var4.delete;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
 118:
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
 0:
                var5 = arg1;
                var4 = this;
                var1 = null;
                var2 = var1 == var5;
                if(var2) { _fun0035_ip = 135; continue _fun0035 }
 15:
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
                if(!(var3 === var7)) { _fun0035_ip = 104; continue _fun0035 }
 96:
                var3 = var5.nick;
                _fun0035_ip = 127; continue _fun0035;
 104:
                var7 = _closure1_slot21;
                var6 = var5.names;
                var5 = var4.currentQuery;
                var4 = undefined;
                var3 = var7.bind(var4)(var6, var5);
 127:
                var2['firstMatch'] = var3;
                var1 = var2;
 135:
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
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useUserListData(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
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
            if(!(var6 === var20)) { _fun0036_ip = 118; continue _fun0036 }
 116:
            var6 = false;
 118:
            var _closure2_slot10 = var6;
            var5 = var3.affinitySuggestionsLimit;
            if(!(var5 === var20)) { _fun0036_ip = 135; continue _fun0036 }
 132:
            var5 = 5;
 135:
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
                var2 = 18;
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
                var1 = 20;
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