// app/stores/PrivateChannelRecipientsInviteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
    var1 = function reset() {
        var1 = '';
        _closure1_slot18 = var1;
        var1 = 0;
        _closure1_slot19 = var1;
        var1 = new Array(0);
        _closure1_slot20 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot22 = var1;
        var1 = false;
        _closure1_slot17 = var1;
        var1 = null;
        _closure1_slot23 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function setQuery(arg1) {
        var2 = arg1;
        _closure1_slot18 = var2;
        var2 = 0;
        _closure1_slot19 = var2;
        var2 = _closure1_slot30;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function performQuery() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot17;
            if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 40:
            var1 = false;
            return var1;
case 36:
            var4 = _closure1_slot10;
            var3 = var4.getChannel;
            var1 = _closure1_slot23;
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot18;
            var1 = var3.trim;
            var1 = var1.bind(var3)();
            var3 = var1.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var3 = null;
            if(!(var3 == var4)) { _fun0005_ip = 3; continue _fun0005 }
case 43:
            var6 = new Array(0);
            _fun0005_ip = 44; continue _fun0005;
case 3:
            var6 = var4.recipients;
case 44:
            var1 = _closure1_slot16;
            if(!(var3 != var1)) { _fun0005_ip = 45; continue _fun0005 }
case 13:
            var5 = _closure1_slot14;
            var1 = var5.getCurrentUser;
            var8 = var1.bind(var5)();
            var5 = var3 == var8;
            var7 = undefined;
            var1 = undefined;
            if(var5) { _fun0005_ip = 46; continue _fun0005 }
case 17:
            var5 = var8.isStaff;
            var1 = var5.bind(var8)();
case 46:
            var9 = var3 != var1;
            if(!var9) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var9 = var1;
case 47:
            var5 = _closure1_slot16;
            var3 = var5.setQuery;
            var1 = {};
            var8 = _closure1_slot18;
            var1['query'] = var8;
            var8 = {'friends': true, 'staff': null, 'provisional': false};
            var8['staff'] = var9;
            var1['filters'] = var8;
            var1['blacklist'] = var6;
            var6 = _closure1_slot34;
            var6 = var6.bind(var7)();
            var1['boosters'] = var6;
            var1 = var3.bind(var5)(var1);
case 45:
            var1 = false;
            return var1;
case 41:
            var3 = _closure1_slot16;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var3 = _closure1_slot16;
            var1 = var3.clearQuery;
            var1 = var1.bind(var3)();
case 49:
            var3 = function getDefaultResults(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot13;
                    var3 = var4.getFriendIDs;
                    var12 = var3.bind(var4)();
                    var4 = _closure1_slot14;
                    var3 = var4.getCurrentUser;
                    var7 = var3.bind(var4)();
                    var _closure3_slot1 = var7;
                    var3 = null;
                    var6 = var12;
                    if(!(var3 != var7)) { _fun0006_ip = 51; continue _fun0006 }
case 8:
                    var4 = var7.isStaff;
                    var4 = var4.bind(var7)();
                    var6 = var12;
                    if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var9 = _closure1_slot14;
                    var8 = var9.filter;
                    var7 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.isStaff;
                            var1 = var1.bind(var2)();
                            if(!var1) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var3 = var2.id;
                            var2 = _closure3_slot1;
                            var2 = var2.id;
                            var1 = var3 !== var2;
case 53:
                            return var1;
                        }
                    };
                    var4 = false;
                    var8 = var8.bind(var9)(var7, var4);
                    var7 = var8.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var11 = var7.bind(var8)(var4);
                    var4 = global;
                    var8 = var4.Array;
                    var7 = var8.from;
                    var10 = var4.Set;
                    var4 = new Array(0);
                    var13 = 0;
                    var15 = var4;
                    var14 = var12;
                    var13 = arraySpread(var15, var14, var13);
                    var15 = var4;
                    var14 = var11;
                    var9 = arraySpread(var15, var14, var13);
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var16 = var9;
                    var15 = var4;
                    var4 = new var16[var10](var15, var14);
                    var4 = var4 instanceof Object ? var4 : var9;
                    var6 = var7.bind(var8)(var4);
case 51:
                    var3 = var3 != var5;
                    if(!var3) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var4 = var5.isPrivate;
                    var3 = var4.bind(var5)();
case 55:
                    var5 = var6;
                    if(!var3) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var4 = var6.filter;
                    var3 = function(arg1) {
                        var1 = _closure3_slot0;
                        var3 = var1.recipients;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var4.bind(var6)(var3);
case 57:
                    var4 = var5.reduce;
                    var3 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure1_slot14;
                            var3 = var5.getUser;
                            var2 = arg2;
                            var6 = var3.bind(var5)(var2);
                            var2 = null;
                            var2 = var2 == var6;
                            if(var2) { _fun0008_ip = 59; continue _fun0008 }
case 37:
                            var2 = var6.isProvisional;
case 59:
                            if(var2) { _fun0008_ip = 15; continue _fun0008 }
case 60:
                            var3 = var1.push;
                            var2 = {};
                            var2['user'] = var6;
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var4 = 15;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var7.bind(var4)(var5);
                            var4 = var5.getName;
                            var4 = var4.bind(var5)(var6);
                            var2['comparator'] = var4;
                            var2 = var3.bind(var1)(var2);
case 15:
                            return var1;
                        }
                    };
                    var2 = new Array(0);
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.sort;
                    var1 = _closure1_slot32;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var3.bind(var1)(var4);
            _closure1_slot20 = var1;
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function updateHasFriends() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = _closure1_slot17;
            if(var1) { _fun0009_ip = 36; continue _fun0009 }
case 40:
            var1 = false;
            return var1;
case 36:
            var2 = _closure1_slot21;
            var4 = _closure1_slot13;
            var1 = var4.getFriendCount;
            var4 = var1.bind(var4)();
            var1 = 0;
            var1 = var4 > var1;
            _closure1_slot21 = var1;
            var1 = var1 !== var2;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function sortUserList(arg1, arg2) {
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 14;
        var2 = var8[var4];
        var7 = undefined;
        var9 = var5.bind(var7)(var2);
        var3 = var9.stripDiacritics;
        var6 = _closure1_slot1;
        var1 = 15;
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
    var _closure1_slot32 = var1;
    var1 = function parseUserResults(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.results;
            var2 = _closure1_slot17;
            if(!var2) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            var3 = _closure1_slot18;
            var2 = '';
            if(!(var2 !== var3)) { _fun0010_ip = 61; continue _fun0010 }
case 63:
            var2 = new Array(0);
            var3 = _closure1_slot26;
            var7 = undefined;
            var6 = var3.bind(var7)(var4);
            var4 = var6.bind(var7)();
            var3 = var4.done;
            var5 = null;
            if(var3) { _fun0010_ip = 64; continue _fun0010 }
case 65:
            var3 = var4.value;
            var10 = var3.id;
            var9 = var3.comparator;
            var8 = _closure1_slot14;
            var3 = var8.getUser;
            var10 = var3.bind(var8)(var10);
            if(!(var5 != var10)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var8 = var2.push;
            var3 = {};
            var3['user'] = var10;
            var3['comparator'] = var9;
            var3 = var8.bind(var2)(var3);
case 66:
            var8 = var6.bind(var7)();
            var3 = var8.done;
            var4 = var8;
            if(!var3) { _fun0010_ip = 65; continue _fun0010 }
case 64:
            _closure1_slot20 = var2;
            var2 = _closure1_slot24;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
case 61:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function getUserBoosterMap() {
        var3 = _closure1_slot12;
        var1 = var3.getFrequentlyWithoutFetchingLatest;
        var4 = var1.bind(var3)();
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot9;
                var1 = var3 instanceof var1;
                if(!var1) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var2 = var3.isDM;
                var1 = var2.bind(var3)();
case 68:
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
            var2 = _closure1_slot12;
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var5 = _closure1_slot12;
                var4 = var5.getScoreWithoutFetchingLatest;
                var2 = var3.id;
                var6 = var4.bind(var5)(var2);
                var2 = var3.getRecipientId;
                var3 = var2.bind(var3)();
                var4 = _closure1_slot13;
                var2 = var4.isFriend;
                var2 = var2.bind(var4)(var3);
                var5 = 0;
                if(!var2) { _fun0012_ip = 43; continue _fun0012 }
case 32:
                var5 = 0.2;
case 43:
                var2 = _closure1_slot10;
                var1 = var2.getDMFromUserId;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                var1 = var1 != var2;
                var4 = 0;
                if(!var1) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                var4 = 0.1;
case 70:
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
    var _closure1_slot34 = var1;
    var1 = function createSearchContext() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = _closure1_slot16;
            var2 = null;
            if(!(var2 != var3)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var4 = _closure1_slot16;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            var _closure1_slot16 = var2;
case 72:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getUserSearchContext;
            var2 = _closure1_slot33;
            var1 = 1000;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var11 = function handleModalActionSheetOpen(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var3 = var1.key;
            var1 = _closure1_slot15;
            if(!(var3 === var1)) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            var1 = true;
            _closure1_slot17 = var1;
            var3 = _closure1_slot31;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot35;
            var3 = var3.bind(var1)();
            _closure1_slot16 = var3;
            var3 = null;
            _closure1_slot23 = var3;
            var3 = _closure1_slot29;
            var2 = '';
            var2 = var3.bind(var1)(var2);
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var10 = function handleActionSheetDismiss(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.key;
            var2 = _closure1_slot15;
            if(!(var3 === var2)) { _fun0015_ip = 72; continue _fun0015 }
case 75:
            var2 = _closure1_slot36;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 72:
            var1 = false;
            return var1;
        }
    };
    var7 = function handleClose() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = _closure1_slot16;
            var2 = null;
            if(!(var2 != var3)) { _fun0016_ip = 72; continue _fun0016 }
case 73:
            var4 = _closure1_slot16;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            _closure1_slot16 = var2;
case 72:
            var2 = _closure1_slot28;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot36 = var7;
    var2 = global;
    var13 = var2.Object;
    var12 = var13.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var9);
    var12 = 0;
    var9 = var6[var12];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var9 = 7;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.PrivateChannelRecord;
    var _closure1_slot9 = var9;
    var9 = 8;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 9;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 10;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var9 = 11;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 12;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot14 = var9;
    var9 = 13;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var13 = var9.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot15 = var13;
    var9 = var9.Consents;
    var9 = false;
    var _closure1_slot17 = var9;
    var13 = '';
    var _closure1_slot18 = var13;
    var _closure1_slot19 = var12;
    var12 = new Array(0);
    var _closure1_slot20 = var12;
    var _closure1_slot21 = var9;
    var2 = var2.Set;
    var9 = var2.prototype;
    var9 = Object.create(var9, {constructor: {value: var2}});
    var17 = var9;
    var2 = new var17[var2](var16);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot22 = var2;
    var2 = null;
    var _closure1_slot23 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function PrivateChannelRecipientsInviteStoreClass() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0017_ip = 76; continue _fun0017 }
case 77:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0017_ip = 78; continue _fun0017;
case 76:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 78:
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
            var8 = var4.waitFor;
            var13 = _closure1_slot14;
            var12 = _closure1_slot10;
            var11 = _closure1_slot13;
            var10 = _closure1_slot8;
            var9 = _closure1_slot11;
            var14 = var4;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            var5 = var4.syncWith;
            var2 = _closure1_slot14;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot10;
            var3[1] = var2;
            var2 = _closure1_slot30;
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot31;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getResults';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasFriends';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSelectedUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getQuery';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot18;
            var1['query'] = var3;
            var3 = _closure1_slot19;
            var1['selectedRow'] = var3;
            var3 = _closure1_slot22;
            var1['selectedUsers'] = var3;
            var3 = _closure1_slot20;
            var1['results'] = var3;
            var2 = _closure1_slot21;
            var1['hasFriends'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'PrivateChannelRecipientsInviteStore';
    var9['displayName'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var16 = var8.bind(var1)(var2);
    var2 = {};
    var12 = function handleConnectionOpen() {
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var12;
    var12 = function handleChannelSelect(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var3 = var1.channelId;
            var1 = null;
            if(!(var1 == var2)) { _fun0018_ip = 79; continue _fun0018 }
case 75:
            var4 = _closure1_slot17;
            var5 = _closure1_slot28;
            var2 = undefined;
            var5 = var5.bind(var2)();
            _closure1_slot17 = var4;
            _closure1_slot23 = var3;
            var1 = _closure1_slot30;
            var1 = var1.bind(var2)();
            return var1;
case 79:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var12;
    var2['MODAL_PUSH'] = var11;
    var2['SHOW_ACTION_SHEET'] = var11;
    var11 = function handleInviteOpen(arg1) {
        var1 = true;
        _closure1_slot17 = var1;
        var3 = _closure1_slot31;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot35;
        var3 = var3.bind(var1)();
        _closure1_slot16 = var3;
        var3 = arg1;
        var3 = var3.channelId;
        _closure1_slot23 = var3;
        var3 = _closure1_slot29;
        var2 = '';
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN'] = var11;
    var2['MODAL_POP'] = var10;
    var2['HIDE_ACTION_SHEET'] = var10;
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE'] = var7;
    var7 = function handleQuery(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        _closure1_slot23 = var3;
        var3 = _closure1_slot29;
        var2 = var1.query;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY'] = var7;
    var7 = function handleSelect(arg1) {
        var1 = arg1;
        var2 = var1.row;
        _closure1_slot19 = var2;
        var1 = undefined;
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT'] = var7;
    var7 = function handleAddUser(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot22;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot22;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_ADD_USER'] = var7;
    var7 = function handleRemoveUser(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var3 = _closure1_slot22;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var4);
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot22;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var17 = var7;
    var15 = var2;
    var2 = new var17[var9](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot24 = var2;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PrivateChannelRecipientsInviteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();