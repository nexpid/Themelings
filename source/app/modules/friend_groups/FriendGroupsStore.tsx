// app/modules/friend_groups/FriendGroupsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Consents;
    var _closure1_slot9 = var2;
    var2 = new Array(0);
    var _closure1_slot10 = var2;
    var2 = false;
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function FriendGroupsStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 42; continue _fun0005;
case 40:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 42:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var8 = this;
                var7 = var8.waitFor;
                var12 = _closure1_slot6;
                var11 = _closure1_slot7;
                var10 = _closure1_slot5;
                var9 = _closure1_slot8;
                var13 = var8;
                var1 = var13[var7](var12, var11, var10, var9, var8);
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var4 = var3.groups;
                if(!(var1 == var4)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var4 = new Array(0);
case 45:
                _closure1_slot10 = var4;
                var3 = var3.isInitialized;
                var1 = var1 != var3;
                if(!var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                var1 = var3;
case 47:
                _closure1_slot11 = var1;
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGroups';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGroup';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure1_slot10;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGroupIds';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot10;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUserGroups';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot10;
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.userIds;
                var2 = var3.includes;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isGroupEmpty';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = this;
                var2 = var3.getGroup;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0008_ip = 49; continue _fun0008 }
case 38:
                var2 = var2.userIds;
                var3 = var2.length;
                var2 = 0;
                var1 = var2 === var3;
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isInitialized';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot10;
            var1['groups'] = var3;
            var2 = _closure1_slot11;
            var1['isInitialized'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'FriendGroupsStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleInitializeFriendGroups() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = _closure1_slot11;
            if(var1) { _fun0009_ip = 48; continue _fun0009 }
case 51:
            var1 = _closure1_slot10;
            var2 = var1.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0009_ip = 48; continue _fun0009 }
case 52:
            var2 = function getFrequentFriendUserIds() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.hasConsented;
                    var1 = _closure1_slot9;
                    var1 = var1.PERSONALIZATION;
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var1 = new Array(0);
                    return var1;
case 53:
                    var2 = _closure1_slot5;
                    var1 = var2.getUserAffinities;
                    var4 = var1.bind(var2)();
                    var1 = var4.length;
                    var2 = 0;
                    if(!(var2 !== var1)) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                    var1 = new Array(0);
                    var3 = _closure1_slot13;
                    var5 = new Array(0);
                    var14 = var5;
                    var13 = var4;
                    var12 = 0;
                    var2 = arraySpread(var14, var13, var12);
                    var4 = var5.sort;
                    var2 = function(arg1, arg2) {
                        var4 = _closure1_slot5;
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.otherUserId;
                        var1 = arg2;
                        var1 = var1.otherUserId;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    var7 = undefined;
                    var6 = var3.bind(var7)(var2);
                    var3 = var6.bind(var7)();
                    var2 = var3.done;
                    var5 = null;
                    var4 = 5;
                    if(var2) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var2 = var3.value;
                    var9 = var1.length;
                    if(!(!(var9 >= var4))) { _fun0010_ip = 57; continue _fun0010 }
case 59:
                    var9 = var2.otherUserId;
                    var10 = _closure1_slot8;
                    var2 = var10.getUser;
                    var2 = var2.bind(var10)(var9);
                    var2 = var5 == var2;
                    if(var2) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                    var11 = _closure1_slot7;
                    var10 = var11.isFriend;
                    var10 = var10.bind(var11)(var9);
                    var2 = !var10;
case 60:
                    if(var2) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var11 = _closure1_slot7;
                    var10 = var11.isIgnored;
                    var2 = var10.bind(var11)(var9);
case 62:
                    if(var2) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var11 = _closure1_slot7;
                    var10 = var11.isBlocked;
                    var2 = var10.bind(var11)(var9);
case 64:
                    if(var2) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var9);
case 66:
                    var9 = var6.bind(var7)();
                    var2 = var9.done;
                    var3 = var9;
                    if(!var2) { _fun0010_ip = 58; continue _fun0010 }
case 57:
                    return var1;
case 55:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var4 = {'id': 'favorites', 'name': 'Favorites'};
            var4['userIds'] = var2;
            var2 = new Array(1);
            var2[0] = var4;
            _closure1_slot10 = var2;
            var2 = true;
            _closure1_slot11 = var2;
            return var1;
case 48:
            var1 = false;
            return var1;
        }
    };
    var2['POST_CONNECTION_OPEN'] = var9;
    var9 = function handleCreateFriendGroup(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var6 = var2.groupId;
            var _closure2_slot0 = var6;
            var5 = var2.name;
            var4 = _closure1_slot10;
            var3 = var4.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = !var1;
            if(!var1) { _fun0011_ip = 68; continue _fun0011 }
case 41:
            var4 = _closure1_slot10;
            var3 = var4.unshift;
            var2 = {};
            var2['id'] = var6;
            var2['name'] = var5;
            var5 = new Array(0);
            var2['userIds'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 68:
            return var1;
        }
    };
    var2['CREATE_FRIEND_GROUP'] = var9;
    var9 = function handleUpdateFriendGroup(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var3 = var2.groupId;
            var _closure2_slot0 = var3;
            var6 = var2.name;
            var4 = _closure1_slot10;
            var3 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var1 = -1;
            var1 = var1 !== var4;
            if(!var1) { _fun0012_ip = 69; continue _fun0012 }
case 45:
            var3 = _closure1_slot10;
            var2 = {};
            var7 = var3[var4];
            var8 = var2;
            var5 = copyDataProperties(var8, var7);
            var5 = 'name';
            var2[var5] = var6;
            var3[var4] = var2;
            var1 = true;
case 69:
            return var1;
        }
    };
    var2['UPDATE_FRIEND_GROUP'] = var9;
    var9 = function handleDeleteFriendGroup(arg1) {
        var2 = arg1;
        var2 = var2.groupId;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot10;
        var2 = var2.length;
        var5 = _closure1_slot10;
        var4 = var5.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        _closure1_slot10 = var1;
        var1 = var1.length;
        var1 = var1 !== var2;
        return var1;
    };
    var2['DELETE_FRIEND_GROUP'] = var9;
    var9 = function handleReorderFriendGroups(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var4 = var1.groupIds;
            var3 = new Array(0);
            var1 = global;
            var6 = var1.Map;
            var7 = _closure1_slot10;
            var5 = var7.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var10 = var5.bind(var7)(var1);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var11 = var5;
            var1 = new var11[var6](var10, var9);
            var8 = var1 instanceof Object ? var1 : var5;
            var1 = _closure1_slot13;
            var7 = undefined;
            var6 = var1.bind(var7)(var4);
            var4 = var6.bind(var7)();
            var1 = var4.done;
            var5 = null;
            if(var1) { _fun0013_ip = 70; continue _fun0013 }
case 71:
            var9 = var4.value;
            var1 = var8.get;
            var9 = var1.bind(var8)(var9);
            if(!(var5 != var9)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var1 = var3.push;
            var1 = var1.bind(var3)(var9);
case 72:
            var9 = var6.bind(var7)();
            var1 = var9.done;
            var4 = var9;
            if(!var1) { _fun0013_ip = 71; continue _fun0013 }
case 70:
            var4 = var3.length;
            var1 = _closure1_slot10;
            var1 = var1.length;
            var1 = var4 === var1;
            if(!var1) { _fun0013_ip = 74; continue _fun0013 }
case 75:
            _closure1_slot10 = var3;
            var1 = true;
case 74:
            return var1;
        }
    };
    var2['REORDER_FRIEND_GROUPS'] = var9;
    var9 = function handleAddUsersToGroup(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var3 = var2.groupId;
            var _closure2_slot0 = var3;
            var6 = var2.userIds;
            var2 = undefined;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot10;
            var4 = var5.findIndex;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = -1;
            if(!(var3 !== var4)) { _fun0014_ip = 76; continue _fun0014 }
case 56:
            var3 = _closure1_slot10;
            var5 = var3[var4];
            var3 = global;
            var8 = var3.Set;
            var11 = var5.userIds;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var3 = new var12[var8](var11, var10);
            var3 = var3 instanceof Object ? var3 : var7;
            _closure2_slot1 = var3;
            var3 = var6.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var7 = var3.bind(var6)(var1);
            var1 = var7.length;
            var8 = 0;
            var1 = var8 !== var1;
            if(!var1) { _fun0014_ip = 77; continue _fun0014 }
case 78:
            var3 = _closure1_slot10;
            var2 = {};
            var11 = var2;
            var10 = var5;
            var6 = copyDataProperties(var11, var10);
            var10 = var5.userIds;
            var6 = new Array(0);
            var11 = var6;
            var9 = 0;
            var9 = arraySpread(var11, var10, var9);
            var11 = var6;
            var10 = var7;
            var5 = arraySpread(var11, var10, var9);
            var5 = 'userIds';
            var2[var5] = var6;
            var3[var4] = var2;
            var1 = true;
case 77:
            return var1;
case 76:
            var1 = false;
            return var1;
        }
    };
    var2['ADD_USERS_TO_GROUP'] = var9;
    var4 = function handleRemoveUsersFromGroup(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = var2.groupId;
            var _closure2_slot0 = var3;
            var7 = var2.userIds;
            var2 = undefined;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot10;
            var4 = var5.findIndex;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = -1;
            if(!(var3 !== var4)) { _fun0015_ip = 23; continue _fun0015 }
case 56:
            var3 = _closure1_slot10;
            var5 = var3[var4];
            var3 = global;
            var3 = var3.Set;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var10 = var6;
            var9 = var7;
            var3 = new var10[var3](var9, var8);
            var3 = var3 instanceof Object ? var3 : var6;
            _closure2_slot1 = var3;
            var6 = var5.userIds;
            var3 = var6.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var6 = var3.bind(var6)(var1);
            var3 = var6.length;
            var1 = var5.userIds;
            var1 = var1.length;
            var1 = var3 !== var1;
            if(!var1) { _fun0015_ip = 79; continue _fun0015 }
case 80:
            var3 = _closure1_slot10;
            var2 = {};
            var9 = var2;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var5 = 'userIds';
            var2[var5] = var6;
            var3[var4] = var2;
            var1 = true;
case 79:
            return var1;
case 23:
            var1 = false;
            return var1;
        }
    };
    var2['REMOVE_USERS_FROM_GROUP'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/friend_groups/FriendGroupsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 'favorites';
    var3['DEFAULT_FAVORITES_GROUP_ID'] = var2;
    return var1;
})();