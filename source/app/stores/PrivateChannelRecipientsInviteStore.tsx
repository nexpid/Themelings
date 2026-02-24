// app/stores/PrivateChannelRecipientsInviteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
            _closure1_slot32 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot32 = var1;
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
            var9 = _closure1_slot34;
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
            var7 = _closure1_slot34;
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
    var _closure1_slot33 = var1;
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
    var _closure1_slot34 = var1;
    var1 = function reset() {
        var2 = '';
        _closure1_slot21 = var2;
        var2 = 0;
        _closure1_slot22 = var2;
        _closure1_slot23 = var2;
        var2 = new Array(0);
        _closure1_slot24 = var2;
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot26 = var2;
        var2 = false;
        _closure1_slot20 = var2;
        var2 = null;
        _closure1_slot27 = var2;
        var2 = _closure1_slot28;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function setQuery(arg1) {
        var2 = arg1;
        _closure1_slot21 = var2;
        var2 = 0;
        _closure1_slot23 = var2;
        var2 = _closure1_slot37;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function performQuery() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot20;
            if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 40:
            var1 = false;
            return var1;
case 36:
            var4 = _closure1_slot11;
            var3 = var4.getChannel;
            var1 = _closure1_slot27;
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot21;
            var1 = var3.trim;
            var1 = var1.bind(var3)();
            var3 = var1.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var8 = null;
            if(!(var8 == var4)) { _fun0005_ip = 3; continue _fun0005 }
case 43:
            var6 = new Array(0);
            _fun0005_ip = 44; continue _fun0005;
case 3:
            var6 = var4.recipients;
case 44:
            var1 = _closure1_slot19;
            if(!(var8 != var1)) { _fun0005_ip = 28; continue _fun0005 }
case 45:
            var3 = _closure1_slot16;
            var1 = var3.getCurrentUser;
            var5 = var1.bind(var3)();
            var3 = var8 == var5;
            var7 = undefined;
            var1 = undefined;
            if(var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var3 = var5.isStaff;
            var1 = var3.bind(var5)();
case 46:
            var10 = var8 != var1;
            if(!var10) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var10 = var1;
case 48:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var5 = var3.bind(var7)(var1);
            var3 = var5.getConfig;
            var1 = {};
            var9 = 'PrivateChannelRecipientsInviteStore';
            var1['location'] = var9;
            var1 = var3.bind(var5)(var1);
            var9 = var1.enabled;
            var5 = _closure1_slot19;
            var3 = var5.setQuery;
            var1 = {};
            var11 = _closure1_slot21;
            var1['query'] = var11;
            if(!var9) { _fun0005_ip = 50; continue _fun0005 }
case 26:
            var9 = var8 == var4;
            var8 = undefined;
            if(var9) { _fun0005_ip = 51; continue _fun0005 }
case 50:
            var9 = {'friends': true, 'staff': null, 'provisional': false};
            var9['staff'] = var10;
            var8 = var9;
case 51:
            var1['filters'] = var8;
            var1['blacklist'] = var6;
            var6 = _closure1_slot42;
            var6 = var6.bind(var7)();
            var1['boosters'] = var6;
            var1 = var3.bind(var5)(var1);
case 28:
            var1 = false;
            return var1;
case 41:
            var3 = _closure1_slot19;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var3 = _closure1_slot19;
            var1 = var3.clearQuery;
            var1 = var1.bind(var3)();
case 52:
            var3 = function getDefaultResults(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot15;
                    var4 = var5.getFriendIDs;
                    var14 = var4.bind(var5)();
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 16;
                    var4 = var6[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.getConfig;
                    var4 = {};
                    var8 = 'PrivateChannelRecipientsInviteStore';
                    var4['location'] = var8;
                    var4 = var5.bind(var6)(var4);
                    var6 = var4.enabled;
                    var5 = _closure1_slot16;
                    var4 = var5.getCurrentUser;
                    var8 = var4.bind(var5)();
                    var _closure3_slot1 = var8;
                    var4 = null;
                    var10 = var14;
                    if(!(var4 != var8)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var5 = var8.isStaff;
                    var5 = var5.bind(var8)();
                    var10 = var14;
                    if(!var5) { _fun0006_ip = 54; continue _fun0006 }
case 56:
                    var11 = _closure1_slot16;
                    var9 = var11.filter;
                    var8 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.isStaff;
                            var1 = var1.bind(var2)();
                            if(!var1) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                            var3 = var2.id;
                            var2 = _closure3_slot1;
                            var2 = var2.id;
                            var1 = var3 !== var2;
case 57:
                            return var1;
                        }
                    };
                    var5 = false;
                    var9 = var9.bind(var11)(var8, var5);
                    var8 = var9.map;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var13 = var8.bind(var9)(var5);
                    var5 = global;
                    var9 = var5.Array;
                    var8 = var9.from;
                    var12 = var5.Set;
                    var5 = new Array(0);
                    var15 = 0;
                    var17 = var5;
                    var16 = var14;
                    var15 = arraySpread(var17, var16, var15);
                    var17 = var5;
                    var16 = var13;
                    var11 = arraySpread(var17, var16, var15);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var18 = var11;
                    var17 = var5;
                    var5 = new var18[var12](var17, var16);
                    var5 = var5 instanceof Object ? var5 : var11;
                    var10 = var8.bind(var9)(var5);
case 54:
                    var8 = var4 != var3;
                    if(!var8) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var5 = var3.isPrivate;
                    var8 = var5.bind(var3)();
case 59:
                    var5 = var10;
                    if(!var8) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var9 = var10.filter;
                    var8 = function(arg1) {
                        var1 = _closure3_slot0;
                        var3 = var1.recipients;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var9.bind(var10)(var8);
case 61:
                    if(!var6) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var4 = var4 != var3;
                    if(!var4) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var6 = var3.isPrivate;
                    var4 = var6.bind(var3)();
case 65:
                    if(!var4) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var6 = var3.recipients;
                    var4 = var6.forEach;
                    var3 = function(arg1) {
                        var3 = _closure1_slot28;
                        var2 = var3.delete;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var4.bind(var6)(var3);
case 67:
                    var3 = _closure1_slot33;
                    var6 = var3.bind(var7)(var5);
                    var4 = var6.bind(var7)();
                    var3 = var4.done;
                    if(var3) { _fun0006_ip = 63; continue _fun0006 }
case 69:
                    var8 = _closure1_slot39;
                    var3 = var4.value;
                    var3 = var8.bind(var7)(var3);
                    var8 = var6.bind(var7)();
                    var3 = var8.done;
                    var4 = var8;
                    if(!var3) { _fun0006_ip = 69; continue _fun0006 }
case 63:
                    var4 = var5.reduce;
                    var3 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure1_slot16;
                            var3 = var5.getUser;
                            var2 = arg2;
                            var6 = var3.bind(var5)(var2);
                            var2 = null;
                            var2 = var2 == var6;
                            if(var2) { _fun0008_ip = 70; continue _fun0008 }
case 37:
                            var2 = var6.isProvisional;
case 70:
                            if(var2) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                            var2 = var6.bot;
case 71:
                            if(var2) { _fun0008_ip = 55; continue _fun0008 }
case 73:
                            var3 = var1.push;
                            var2 = {};
                            var2['user'] = var6;
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var4 = 17;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var7.bind(var4)(var5);
                            var4 = var5.getName;
                            var4 = var4.bind(var5)(var6);
                            var2['comparator'] = var4;
                            var2 = var3.bind(var1)(var2);
case 55:
                            return var1;
                        }
                    };
                    var2 = new Array(0);
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.sort;
                    var1 = _closure1_slot40;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var3.bind(var1)(var4);
            _closure1_slot24 = var1;
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function updateHasFriends() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = _closure1_slot20;
            if(var1) { _fun0009_ip = 36; continue _fun0009 }
case 40:
            var1 = false;
            return var1;
case 36:
            var2 = _closure1_slot25;
            var4 = _closure1_slot15;
            var1 = var4.getFriendCount;
            var4 = var1.bind(var4)();
            var1 = 0;
            var1 = var4 > var1;
            _closure1_slot25 = var1;
            var1 = var1 !== var2;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function updateUserInIndexMap(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot15;
            var2 = var4.getRelationshipType;
            var4 = var2.bind(var4)(var3);
            var2 = _closure1_slot18;
            var2 = var2.BLOCKED;
            if(!(var4 !== var2)) { _fun0010_ip = 48; continue _fun0010 }
case 74:
            var4 = _closure1_slot16;
            var2 = var4.getUser;
            var9 = var2.bind(var4)(var3);
            var2 = null;
            if(!(var2 != var9)) { _fun0010_ip = 75; continue _fun0010 }
case 32:
            var6 = _closure1_slot28;
            var5 = var6.set;
            var4 = {};
            var4['user'] = var9;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 17;
            var7 = var7[var2];
            var2 = undefined;
            var8 = var8.bind(var2)(var7);
            var7 = var8.getName;
            var7 = var7.bind(var8)(var9);
            var4['comparator'] = var7;
            var4 = var5.bind(var6)(var3, var4);
            return var2;
case 75:
            var4 = _closure1_slot28;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            return var2;
case 48:
            var2 = _closure1_slot28;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function sortUserList(arg1, arg2) {
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 18;
        var2 = var8[var4];
        var7 = undefined;
        var9 = var5.bind(var7)(var2);
        var3 = var9.stripDiacritics;
        var6 = _closure1_slot1;
        var1 = 17;
        var2 = var8[var1];
        var11 = var6.bind(var7)(var2);
        var10 = var11.getName;
        var2 = arg1;
        var2 = var2.user;
        var10 = var10.bind(var11)(var2);
        var2 = var10.toLocaleLowerCase;
        var2 = var2.bind(var10)();
        var3 = var3.bind(var9)(var2);
        var2 = var3.localeCompare;
        var4 = var8[var4];
        var5 = var5.bind(var7)(var4);
        var4 = var5.stripDiacritics;
        var1 = var8[var1];
        var7 = var6.bind(var7)(var1);
        var6 = var7.getName;
        var1 = arg2;
        var1 = var1.user;
        var6 = var6.bind(var7)(var1);
        var1 = var6.toLocaleLowerCase;
        var1 = var1.bind(var6)();
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function parseUserResults(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.results;
            var2 = _closure1_slot20;
            if(!var2) { _fun0011_ip = 76; continue _fun0011 }
case 77:
            var3 = _closure1_slot21;
            var2 = '';
            if(!(var2 !== var3)) { _fun0011_ip = 76; continue _fun0011 }
case 57:
            var2 = new Array(0);
            var5 = _closure1_slot28;
            var3 = var5.clear;
            var3 = var3.bind(var5)();
            var3 = _closure1_slot33;
            var7 = undefined;
            var6 = var3.bind(var7)(var4);
            var4 = var6.bind(var7)();
            var3 = var4.done;
            var5 = null;
            if(var3) { _fun0011_ip = 78; continue _fun0011 }
case 79:
            var3 = var4.value;
            var10 = var3.id;
            var11 = var3.comparator;
            var8 = _closure1_slot16;
            var3 = var8.getUser;
            var12 = var3.bind(var8)(var10);
            var3 = var5 == var12;
            if(var3) { _fun0011_ip = 80; continue _fun0011 }
case 81:
            var3 = var12.isProvisional;
case 80:
            if(var3) { _fun0011_ip = 48; continue _fun0011 }
case 82:
            var3 = var12.bot;
case 48:
            if(var3) { _fun0011_ip = 83; continue _fun0011 }
case 84:
            var8 = var2.push;
            var3 = {};
            var3['user'] = var12;
            var3['comparator'] = var11;
            var3 = var8.bind(var2)(var3);
            var9 = _closure1_slot28;
            var8 = var9.set;
            var3 = {};
            var3['user'] = var12;
            var3['comparator'] = var11;
            var3 = var8.bind(var9)(var10, var3);
case 83:
            var8 = var6.bind(var7)();
            var3 = var8.done;
            var4 = var8;
            if(!var3) { _fun0011_ip = 79; continue _fun0011 }
case 78:
            _closure1_slot24 = var2;
            var2 = _closure1_slot31;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
case 76:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function getUserBoosterMap() {
        var3 = _closure1_slot13;
        var1 = var3.getFrequentlyWithoutFetchingLatest;
        var4 = var1.bind(var3)();
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot10;
                var1 = var3 instanceof var1;
                if(!var1) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                var2 = var3.isDM;
                var1 = var2.bind(var3)();
case 85:
                return var1;
            }
        };
        var4 = var3.bind(var4)(var1);
        var1 = global;
        var5 = var1.Math;
        var3 = var5.max;
        var6 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.id;
            var2 = _closure1_slot13;
            var1 = var2.getScoreWithoutFetchingLatest;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var9 = var6.bind(var4)(var1);
        var1 = new Array(0);
        var8 = 0;
        var10 = var1;
        var6 = arraySpread(var10, var9, var8);
        var10 = var3;
        var9 = var1;
        var8 = var5;
        var1 = apply(var10, var9, var8);
        var _closure2_slot0 = var1;
        var1 = {};
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var5 = _closure1_slot13;
                var4 = var5.getScoreWithoutFetchingLatest;
                var2 = var3.id;
                var6 = var4.bind(var5)(var2);
                var2 = var3.getRecipientId;
                var3 = var2.bind(var3)();
                var4 = _closure1_slot15;
                var2 = var4.isFriend;
                var2 = var2.bind(var4)(var3);
                var5 = 0;
                if(!var2) { _fun0013_ip = 43; continue _fun0013 }
case 32:
                var5 = 0.2;
case 43:
                var2 = _closure1_slot11;
                var1 = var2.getDMFromUserId;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                var1 = var1 != var2;
                var4 = 0;
                if(!var1) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                var4 = 0.1;
case 87:
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var6 = var6 / var1;
                var1 = 1;
                var1 = var1 + var6;
                var1 = var1 + var5;
                var1 = var1 + var4;
                var2[var3] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function createSearchContext() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var3)) { _fun0014_ip = 89; continue _fun0014 }
case 90:
            var4 = _closure1_slot19;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            var _closure1_slot19 = var2;
case 89:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getUserSearchContext;
            var2 = _closure1_slot41;
            var1 = 1000;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var12 = function handleModalActionSheetOpen(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.key;
            var1 = _closure1_slot17;
            if(!(var3 === var1)) { _fun0015_ip = 91; continue _fun0015 }
case 92:
            var1 = true;
            _closure1_slot20 = var1;
            var3 = _closure1_slot38;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot43;
            var3 = var3.bind(var1)();
            _closure1_slot19 = var3;
            var3 = null;
            _closure1_slot27 = var3;
            var3 = _closure1_slot36;
            var2 = '';
            var2 = var3.bind(var1)(var2);
            return var1;
case 91:
            var1 = false;
            return var1;
        }
    };
    var11 = function handleActionSheetDismiss(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.key;
            var2 = _closure1_slot17;
            if(!(var3 === var2)) { _fun0016_ip = 89; continue _fun0016 }
case 92:
            var2 = _closure1_slot44;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 89:
            var1 = false;
            return var1;
        }
    };
    var8 = function handleClose() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var3)) { _fun0017_ip = 89; continue _fun0017 }
case 90:
            var4 = _closure1_slot19;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            _closure1_slot19 = var2;
case 89:
            var2 = _closure1_slot35;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot44 = var8;
    var4 = global;
    var13 = var4.Object;
    var10 = var13.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var13)(var3, var1, var2);
    var15 = 0;
    var2 = var7[var15];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var14 = 1;
    var2 = var7[var14];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.PrivateChannelRecord;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var10 = var2.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot17 = var10;
    var10 = var2.Consents;
    var2 = var2.RelationshipTypes;
    var _closure1_slot18 = var2;
    var2 = {};
    var2['FRIENDS'] = var15;
    var13 = 'FRIENDS';
    var2[var15] = var13;
    var2['GUILD_MEMBERS'] = var14;
    var10 = 'GUILD_MEMBERS';
    var2[var14] = var10;
    var14 = false;
    var _closure1_slot20 = var14;
    var16 = '';
    var _closure1_slot21 = var16;
    var _closure1_slot22 = var15;
    var _closure1_slot23 = var15;
    var15 = new Array(0);
    var _closure1_slot24 = var15;
    var _closure1_slot25 = var14;
    var14 = var4.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var21 = var15;
    var14 = new var21[var14](var20);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot26 = var14;
    var14 = null;
    var _closure1_slot27 = var14;
    var14 = 15;
    var14 = var7[var14];
    var14 = var6.bind(var1)(var14);
    var17 = var14.SecondaryIndexMap;
    var14 = var17.prototype;
    var15 = Object.create(var14, {constructor: {value: var17}});
    var20 = function indexIndexMap(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = arg1;
            var1 = new Array(0);
            var5 = _closure1_slot16;
            var3 = var5.getCurrentUser;
            var6 = var3.bind(var5)();
            var7 = _closure1_slot15;
            var5 = var7.isFriend;
            var3 = var4.user;
            var3 = var3.id;
            var3 = var5.bind(var7)(var3);
            if(var3) { _fun0018_ip = 48; continue _fun0018 }
case 73:
            var3 = var4.user;
            var5 = var3.id;
            var3 = null;
            var7 = var3 == var6;
            var3 = undefined;
            if(var7) { _fun0018_ip = 93; continue _fun0018 }
case 3:
            var3 = var6.id;
case 93:
            var3 = var5 !== var3;
            if(!var3) { _fun0018_ip = 94; continue _fun0018 }
case 95:
            var6 = _closure1_slot29;
            var5 = var6.has;
            var4 = var4.user;
            var4 = var4.id;
            var3 = var5.bind(var6)(var4);
case 94:
            if(!var3) { _fun0018_ip = 96; continue _fun0018 }
case 97:
            var4 = var1.push;
            var3 = _closure1_slot30;
            var3 = var3.GuildMembers;
            var3 = var4.bind(var1)(var3);
            _fun0018_ip = 96; continue _fun0018;
case 48:
            var3 = var1.push;
            var2 = _closure1_slot30;
            var2 = var2.Friends;
            var2 = var3.bind(var1)(var2);
case 96:
            return var1;
        }
    };
    var19 = function sortIndexMap(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var3 = var2.username;
            var2 = _closure1_slot21;
            if(!(var3 !== var2)) { _fun0019_ip = 87; continue _fun0019 }
case 98:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.stripDiacritics;
            var5 = _closure1_slot1;
            var4 = 17;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getName;
            var1 = var1.user;
            var4 = var4.bind(var5)(var1);
            var1 = var4.toLocaleLowerCase;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
case 87:
            var1 = -1000;
            return var1;
        }
    };
    var21 = var15;
    var14 = new var21[var17](var20, var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot28 = var14;
    var4 = var4.Set;
    var14 = var4.prototype;
    var14 = Object.create(var14, {constructor: {value: var4}});
    var21 = var14;
    var4 = new var21[var4](var20);
    var4 = var4 instanceof Object ? var4 : var14;
    var _closure1_slot29 = var4;
    var4 = {};
    var4['Friends'] = var13;
    var4['GuildMembers'] = var10;
    var _closure1_slot30 = var4;
    var4 = 20;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var10 = var4.Store;
    var4 = function(arg1) {
        var4 = function PrivateChannelRecipientsInviteStoreClass() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot32;
                var1 = var1.bind(var3)();
                if(var1) { _fun0020_ip = 99; continue _fun0020 }
case 73:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0020_ip = 55; continue _fun0020;
case 99:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 55:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var11 = var4.waitFor;
            var19 = _closure1_slot11;
            var18 = _closure1_slot12;
            var17 = _closure1_slot8;
            var16 = _closure1_slot13;
            var15 = _closure1_slot15;
            var14 = _closure1_slot9;
            var13 = _closure1_slot16;
            var12 = _closure1_slot14;
            var20 = var4;
            var2 = var20[var11](var19, var18, var17, var16, var15, var14, var13, var12, var11);
            var5 = var4.syncWith;
            var2 = _closure1_slot16;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot11;
            var3[1] = var2;
            var2 = _closure1_slot37;
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot15;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot38;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getResults';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasFriends';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSelectedUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getQuery';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot21;
            var1['query'] = var3;
            var3 = _closure1_slot23;
            var1['selectedRow'] = var3;
            var3 = _closure1_slot22;
            var1['selectedSection'] = var3;
            var3 = _closure1_slot26;
            var1['selectedUsers'] = var3;
            var3 = _closure1_slot24;
            var1['results'] = var3;
            var2 = _closure1_slot25;
            var1['hasFriends'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSections';
        var5['key'] = var7;
        var6 = function value() {
            var3 = _closure1_slot28;
            var1 = var3.indexes;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot30;
            var1 = var1.Friends;
            var4 = var3[var1];
            var1 = new Array(2);
            var1[0] = var4;
            var2 = _closure1_slot30;
            var2 = var2.GuildMembers;
            var2 = var3[var2];
            var1[1] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var10);
    var4 = 'PrivateChannelRecipientsInviteStore';
    var10['displayName'] = var4;
    var4 = 21;
    var4 = var7[var4];
    var20 = var9.bind(var1)(var4);
    var4 = {};
    var13 = function handleConnectionOpen() {
        var2 = _closure1_slot35;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var5 = var4;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot29 = var2;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var13;
    var13 = function handleChannelSelect(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var3 = var1.channelId;
            var1 = null;
            if(!(var1 == var2)) { _fun0021_ip = 100; continue _fun0021 }
case 92:
            var4 = _closure1_slot20;
            var5 = _closure1_slot35;
            var2 = undefined;
            var5 = var5.bind(var2)();
            _closure1_slot20 = var4;
            _closure1_slot27 = var3;
            var1 = _closure1_slot37;
            var1 = var1.bind(var2)();
            return var1;
case 100:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var13;
    var4['MODAL_PUSH'] = var12;
    var4['SHOW_ACTION_SHEET'] = var12;
    var12 = function handleInviteOpen(arg1) {
        var1 = true;
        _closure1_slot20 = var1;
        var3 = _closure1_slot38;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot43;
        var3 = var3.bind(var1)();
        _closure1_slot19 = var3;
        var3 = arg1;
        var3 = var3.channelId;
        _closure1_slot27 = var3;
        var3 = _closure1_slot36;
        var2 = '';
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN'] = var12;
    var4['MODAL_POP'] = var11;
    var4['HIDE_ACTION_SHEET'] = var11;
    var4['PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE'] = var8;
    var8 = function handleQuery(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        _closure1_slot27 = var3;
        var3 = _closure1_slot36;
        var2 = var1.query;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY'] = var8;
    var8 = function handleSelect(arg1) {
        var1 = arg1;
        var3 = var1.section;
        _closure1_slot22 = var3;
        var1 = var1.row;
        _closure1_slot23 = var1;
        var1 = undefined;
        return var1;
    };
    var4['PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT'] = var8;
    var8 = function handleAddUser(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot26;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot26;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot26 = var1;
        var1 = undefined;
        return var1;
    };
    var4['PRIVATE_CHANNEL_RECIPIENTS_ADD_USER'] = var8;
    var8 = function handleRemoveUser(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot26;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var4);
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot26;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot26 = var1;
        var1 = undefined;
        return var1;
    };
    var4['PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER'] = var8;
    var8 = function handleGuildMemberAdd(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var1 = var1.user;
            var5 = _closure1_slot29;
            var4 = var5.has;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0022_ip = 32; continue _fun0022 }
case 37:
            var3 = _closure1_slot29;
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
case 32:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_MEMBER_ADD'] = var8;
    var8 = function handleGuildMemberRemove(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var1 = var1.user;
            var5 = _closure1_slot29;
            var4 = var5.has;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0023_ip = 101; continue _fun0023 }
case 37:
            var5 = _closure1_slot14;
            var4 = var5.memberOf;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            var4 = var3.length;
            var3 = 0;
            if(!(var3 === var4)) { _fun0023_ip = 101; continue _fun0023 }
case 102:
            var3 = _closure1_slot29;
            var2 = var3.delete;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
case 101:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_MEMBER_REMOVE'] = var8;
    var8 = function handleGuildMembersChunkBatch(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var2 = var1.chunks;
            var1 = _closure1_slot33;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var4 = false;
            var5 = var3;
            var3 = undefined;
            var1 = false;
            if(var2) { _fun0024_ip = 103; continue _fun0024 }
case 104:
            var10 = _closure1_slot33;
            var2 = var5.value;
            var2 = var2.members;
            var13 = var10.bind(var8)(var2);
            var10 = var13.bind(var8)();
            var2 = var10.done;
            var12 = var4;
            var11 = var10;
            var10 = var12;
            if(var2) { _fun0024_ip = 105; continue _fun0024 }
case 106:
            var14 = var11.value;
            var16 = _closure1_slot29;
            var15 = var16.has;
            var2 = var14.user;
            var2 = var2.id;
            var2 = var15.bind(var16)(var2);
            if(var2) { _fun0024_ip = 107; continue _fun0024 }
case 108:
            var16 = _closure1_slot29;
            var15 = var16.add;
            var2 = var14.user;
            var2 = var2.id;
            var2 = var15.bind(var16)(var2);
            var12 = true;
case 107:
            var16 = var13.bind(var8)();
            var2 = var16.done;
            var11 = var16;
            var10 = var12;
            var3 = var14;
            if(!var2) { _fun0024_ip = 106; continue _fun0024 }
case 105:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var4 = var10;
            var5 = var11;
            var1 = var4;
            if(!var2) { _fun0024_ip = 104; continue _fun0024 }
case 103:
            return var1;
        }
    };
    var4['GUILD_MEMBERS_CHUNK_BATCH'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var21 = var8;
    var19 = var4;
    var4 = new var21[var10](var20, var19, var18);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot31 = var4;
    var5 = 22;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/PrivateChannelRecipientsInviteStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SearchResultSections'] = var2;
    return var1;
})();